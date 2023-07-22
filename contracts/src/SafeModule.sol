// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity ^0.8.0;

import "./Ownable.sol";
import "./GnosisSafe.sol";
import "./Enums.sol";

interface IERC20 {
    function balanceOf(address owner) external view returns (uint256);
}

contract SafeModule is Ownable {
    string public constant version = "0.2.0";

    uint256 internal constant _ETH_VALUE_SLOT =
    0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee;

    event ModuleSetup(address owner, address safeProxy);

    event ExecTransaction(
        address to,
        uint256 value,
        bytes data,
        Operation operation,
        address sender
    );

    mapping(address => uint256) internal shares;
    mapping(address => mapping(address => uint256)) internal withdrawnTokens;
    mapping(address => uint256) public spent;
    mapping(address => uint256) public income;
    address public _safeProxy;
    address public withdrawalContract;
    uint256 public initBalance;

    constructor(
        address owner,
        address payable safeProxy,
        address[] memory users,
        uint256[] memory split,
        uint256 _initBalance
    ) {
        require(users.length == split.length, "invalid split");
        require(sum(split) == 10000, "shares must sum to 10000");
        for (uint i = 0; i < users.length; i++) {
            shares[users[i]] = split[i];
        }
        initBalance = _initBalance;
        bytes memory initParams = abi.encode(owner, safeProxy);
        setUp(initParams);
    }
    function sum(uint256[] memory values) internal returns (uint256 s) {

        for (uint i = 0; i < values.length; i++) {
            s += values[i];
        }
    }

    function setUp(bytes memory initParams) public {
        (address owner, address safeProxy) = abi.decode(
            initParams,
            (address, address)
        );

        require(safeProxy != address(0), "Invalid safe proxy");
        require(owner != address(0), "Invalid owner");

        _setupOwner(owner);
        _safeProxy = safeProxy;

        emit ModuleSetup(owner, safeProxy);
    }

    function execTransactionFromModule(
        address to,
        uint256 value,
        bytes calldata data,
        Operation operation
    ) public {
        _execTransaction(to, value, data, operation);
    }

    struct Exec {
        address to;
        uint256 value;
        bytes data;
        Operation operation;
    }

    function execTransactionsFromModule(Exec[] calldata execs) public {
        require(execs.length > 0, "SafeModule: Nothing to call");

        for (uint256 i = 0; i < execs.length; ++i) {
            Exec memory exec = execs[i];

            _execTransaction(exec.to, exec.value, exec.data, exec.operation);
        }
    }

    function _execTransaction(
        address to,
        uint256 value,
        bytes memory data,
        Operation operation
    ) internal {
        require(
            operation == Operation.Call || operation == Operation.DelegateCall,
            "SafeModule: only support call or delegatecall"
        );
        _verifyPermission(to, value, data);

        require(
            GnosisSafe(payable(_safeProxy)).execTransactionFromModule(
                to,
                value,
                data,
                operation == Operation.DelegateCall
                    ? GnosisSafeEnum.Operation.DelegateCall
                    : GnosisSafeEnum.Operation.Call
            ),
            "SafeModule: execute fail on gnosis safe"
        );

        emit ExecTransaction(to, value, data, operation, _msgSender());
    }

    function _verifyPermission(
        address to,
        uint256 value,
        bytes memory data
    ) internal {
        // disable erc20 transfer 0xc5f7fcfa transferFrom 0x6324e4b9
        // only allow approval for up shares up to
        require(shares[_msgSender()] != 0, "SafeModule: sender has no share");
        if (bytes4(data) == 0xc5f7fcfa || bytes4(data) == 0xc5f7fcfa) {
            revert("invalid token");
        }

        if (bytes4(data) == 0x19c54ccc && to == withdrawalContract) {
            verifyTokenApproval(to, data, shares[_msgSender()]);
        } else {
            revert("");
        }
        require(getSpendable(_msgSender()) >= value, "");
        spent[_msgSender()] += value;
    }

    function getSpendable(address a) public view returns (uint256) {
        return (((shares[a] * initBalance) / 10000) - spent[a] + income[a]);
    }

    function verifyTokenApproval(
        address to,
        bytes memory data,
        uint256 _shares
    ) internal {
        bytes32 value = _pluckStaticValue(data, 2);
        // account for spending
        uint256 balance = IERC20(to).balanceOf(address(this));
        uint256 r = (_shares * balance) / 10000;
        require(
            uint256(value) <= r,
            "Permissions: eth value isn't less than or equal to limit"
        );
    }

    function _pluckStaticValue(
        bytes memory data,
        uint256 index
    ) internal pure returns (bytes32) {
        // pre-check: is there a word available for the current parameter at argumentsBlock?
        require(
            data.length >= 4 + index * 32 + 32,
            "Permissions: calldata out of bounds for static type"
        );

        uint256 offset = 4 + index * 32;
        bytes32 value;
        assembly {
        // add 32 - jump over the length encoding of the data bytes array
            value := mload(add(32, add(data, offset)))
        }
        return value;
    }
}

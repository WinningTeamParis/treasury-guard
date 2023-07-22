import "safe-core-protocol/interfaces/Integrations.sol";
import "safe-core-protocol/interfaces/Accounts.sol";
import "safe-core-protocol/DataTypes.sol";
import "safe-core-protocol/base/HooksManager.sol";

contract TestPlugin is ISafeProtocolPlugin {
    string private _name = "TestPlugin";
    string private _version = "1.0.0";
    uint256 private _providerType = 1;
    bytes private _location = "0x"; // This should be updated accordingly.
    bool private _requiresRootAccess = false;

    event SomethingHappened();

    function name() external view override returns (string memory) {
        return _name;
    }

    function version() external view override returns (string memory) {
        return _version;
    }

    function metadataProvider() external view override returns (uint256 providerType, bytes memory location) {
        return (_providerType, _location);
    }

    function requiresRootAccess() external view override returns (bool) {
        return _requiresRootAccess;
    }

    function doSomething() external {
        emit SomethingHappened();
    }
}
import "safe-core-protocol/contracts/interfaces/Integrations.sol";
import "safe-core-protocol/contracts/interfaces/Accounts.sol";
import "safe-core-protocol/contracts/DataTypes.sol";

contract TestHook is ISafeProtocolHooks {

    event PreCheckCalled(address sender, uint256 executionType, bytes executionMeta);
    event PostCheckCalled(address sender, bool success, bytes preCheckData);
    event PreCheckRootAccessCalled(address sender, uint256 executionType, bytes executionMeta);

    /**
     * @notice A function that will be called by a Safe before the execution of a transaction if the hooks are enabled
     * @dev Add custom logic in this function to validate the pre-state and contents of transaction for non-root access.
     * @param safe A Safe instance
     * @param tx A struct of type SafeTransaction that contains the details of the transaction.
     * @param executionType uint256
     * @param executionMeta Arbitrary length of bytes
     * @return preCheckData bytes
     */
    function preCheck(
        ISafe safe,
        SafeTransaction calldata tx,
        uint256 executionType,
        bytes calldata executionMeta
    ) external returns (bytes memory preCheckData) {
        emit PreCheckCalled(msg.sender, executionType, executionMeta);
    }

    /**
     * @notice A function that will be called by a safe before the execution of a transaction if the hooks are enabled and
     *         transaction requies tool access.
     * @dev Add custom logic in this function to validate the pre-state and contents of transaction for root access.
     * @param safe A Safe instance
     * @param rootAccess DataTypes.SafeRootAccess
     * @param executionType uint256
     * @param executionMeta bytes
     * @return preCheckData bytes
     */
    function preCheckRootAccess(
        ISafe safe,
        SafeRootAccess calldata rootAccess,
        uint256 executionType,
        bytes calldata executionMeta
    ) external returns (bytes memory preCheckData) {
        emit PreCheckRootAccessCalled(msg.sender, executionType, executionMeta);
    }

    /**
     * @notice A function that will be called by a safe after the execution of a transaction if the hooks are enabled. Hooks should revert if the post state of after the transaction is not as expected.
     * @dev Add custom logic in this function to validate the post-state after the transaction is executed.
     * @param safe ISafe
     * @param success bool
     * @param preCheckData Arbitrary length bytes that was returned by during pre-check of the transaction.
     */
    function postCheck(ISafe safe, bool success, bytes calldata preCheckData) external {
        emit PostCheckCalled(msg.sender, success, preCheckData);
    }

    function supportsInterface(bytes4 interfaceId) external view returns (bool) {
        return true;
    }
}
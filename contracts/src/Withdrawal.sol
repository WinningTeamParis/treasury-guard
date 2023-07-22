interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external;
}

contract Withdrawal {

    function transferTokens(address _token, address receiver, uint amount) public {
        IERC20(_token).transferFrom(msg.sender, receiver, amount);
    }
}
import { utils } from "ethers"
import {EIP155_CHAINS} from "../data/EIP155Data";

/**
 * Truncates string (in the middle) via given lenght value
 */
export function truncate(value, length) {
    if (value?.length <= length) {
        return value
    }

    const separator = "..."
    const stringLength = length - separator.length
    const frontLength = Math.ceil(stringLength / 2)
    const backLength = Math.floor(stringLength / 2)

    return (
        value.substring(0, frontLength) +
        separator +
        value.substring(value.length - backLength)
    )
}

/**
 * Converts hex to utf8 string if it is valid bytes
 */
export function convertHexToUtf8(value) {
    if (utils.isHexString(value)) {
        return utils.toUtf8String(value)
    }

    return value
}

/**
 * Gets message from various signing request methods by filtering out
 * a value that is not an address (thus is a message).
 * If it is a hex string, it gets converted to utf8 string
 */
export function getSignParamsMessage(params) {
    const message = params.filter(p => !utils.isAddress(p))[0]

    return convertHexToUtf8(message)
}

/**
 * Gets data from various signTypedData request methods by filtering out
 * a value that is not an address (thus is data).
 * If data is a string convert it to object
 */
export function getSignTypedDataParamsData(params) {
    const data = params.filter(p => !utils.isAddress(p))[0]

    if (typeof data === "string") {
        return JSON.parse(data)
    }

    return data
}

/**
 * Get our address from params checking if params string contains one
 * of our wallet addresses
 */
export function getWalletAddressFromParams(addresses, params) {
    const paramsString = JSON.stringify(params)
    let address = ""

    addresses.forEach(addr => {
        if (paramsString.toLowerCase().includes(addr.toLowerCase())) {
            address = addr
        }
    })

    return address
}

/**
 * Check if chain is part of EIP155 standard
 */
export function isEIP155Chain(chain) {
    return chain.includes("eip155")
}

/**
 * Formats chainId to its name
 */
export function formatChainName(chainId) {
    return (
        EIP155_CHAINS[chainId]?.name ??
        chainId
    )
}

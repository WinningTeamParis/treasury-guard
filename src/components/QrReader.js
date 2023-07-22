import React, { useState } from 'react';
import QrReader from 'react-qr-reader-es6';
import {Button, Loading} from "@nextui-org/react";

function QRScanner({ onConnect }) {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    function onError() {
        setShow(false);
    }

    async function onScan(data) {
        if (data) {
            await onConnect(data);
            setShow(false);
        }
    }

    function onShowScanner() {
        setLoading(true);
        setShow(true);
    }

    return (
        <div className="container">
            {show ? (
                <>
                    {loading && <Loading css={{ position: "absolute" }} />}
                    <div className="qrVideoMask">
                        <QrReader
                            onLoad={() => setLoading(false)}
                            showViewFinder={false}
                            onError={onError}
                            onScan={onScan}
                            style={{ width: "100%" }}
                        />
                    </div>
                </>
            ) : (
                <div className="container qrPlaceholder">
                    {/*<Image*/}
                    {/*    src="/icons/qr-icon.svg"*/}
                    {/*    width={100}*/}
                    {/*    height={100}*/}
                    {/*    alt="qr code icon"*/}
                    {/*    className="qrIcon"*/}
                    {/*/>*/}
                    <Button
                        color="gradient"
                        css={{ marginTop: "$10", width: "100%" }}
                        onClick={onShowScanner}
                    >
                        Scan QR code
                    </Button>
                </div>
            )}
        </div>
    );
}

export default QRScanner;
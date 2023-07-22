import './modalCss.css'
import {Button, Input, Loading, Text} from '@nextui-org/react'
import {Fragment, useState} from 'react'
import {pair} from '../utils/WalletConnectUtils'
import PageHeader from './PageHeader'
import QrReader from './QrReader'

const WalletModal = ({open, closeModal}) => {
    const [uri, setUri] = useState('')
    const [loading, setLoading] = useState(false)
    if (!open) return null;

    async function onConnect(uri) {
        try {
            setLoading(true)
            await pair({ uri })
        } catch (err) {
            alert(err)
        } finally {
            setUri('')
            setLoading(false)
        }
    }

    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <Fragment>
                    <PageHeader title="WalletConnect"/>

                    <QrReader onConnect={onConnect}/>

                    <Text size={13} css={{textAlign: 'center', marginTop: '$10', marginBottom: '$10'}}>
                        or use walletconnect uri
                    </Text>

                    <Input
                        css={{width: '100%'}}
                        bordered
                        aria-label="wc url connect input"
                        placeholder="e.g. wc:a281567bb3e4..."
                        onChange={ e => setUri(e.target.value)}
                        value={uri}
                        contentRight={
                            <Button
                                size="xs"
                                disabled={!uri}
                                css={{marginLeft: -60}}
                                onClick={() => onConnect(uri)}
                                color="gradient"
                            >
                                {loading ? <Loading size="sm"/> : 'Connect'}
                            </Button>
                        }
                    />
                </Fragment>
            </div>
        </div>
    )
}

export default WalletModal
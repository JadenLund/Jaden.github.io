import { Modal, Button, Image, Header, Embed } from "semantic-ui-react"
import React from "react"
import CatRun from '../../src/components/assets/CatRun.gif'

export default function MyModal() {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Image size='small' className="marquee" src={CatRun} />}
        >
            <Modal.Content>
                <Embed
                    id='e1OWVKtAp7s'
                    source='youtube'
                />
            </Modal.Content>
        </Modal>
    )
}

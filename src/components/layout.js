import ParticleJS from "./Particle"
import React from "react"
import CatCard from "./catCard"
import "./background.css"
import CatRun from '../../src/components/assets/CatRun.gif'
import { Image } from "semantic-ui-react"
import { Grid, Segment, Modal, Button, Embed } from 'semantic-ui-react'
import MyModal from "./modal"

export default function Layout() {
    const [open, setOpen] = React.useState(false)
    function handleClick() {
    }
    return (
        // #737DFE – #FFCAC9
        <>
            <div className="background-coloring">
                <ParticleJS />
                <Grid padded style={{ height: '120vh' }}>
                    <Grid.Row style={{ height: '70%' }}>
                        <Grid.Column >
                            <div className="cat-card"> <CatCard /> </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{ height: '30%' }}>
                        <Grid.Column >
                            <MyModal />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </div>

        </>

    )
}

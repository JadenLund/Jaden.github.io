import ParticleJS from "./Particle"
import React from "react"
import CatCard from "./catCard"
import "./background.css"
import { Image } from "semantic-ui-react"
import { Grid } from 'semantic-ui-react'
import MyModal from "./modal"
import catfall from "../../src/components/assets/catfall.png"

export default function Layout() {
    return (
        // #737DFE – #FFCAC9
        <>
            <div className="background-coloring">
                <ParticleJS />
                <Grid columns={3} relaxed='very' stackable>
                    <Grid.Column>
                        <Image src={catfall} size='medium' />
                    </Grid.Column>
                    <Grid.Column>
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
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={catfall} size='medium' floated="right" />
                    </Grid.Column>
                </Grid>
            </div>

        </>

    )
}

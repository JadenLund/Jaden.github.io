import ParticleJS from "./Particle"
import CatCard from "./catCard"
import "./background.css"
import CatRun from '../../src/components/assets/CatRun.gif'
import { Image } from "semantic-ui-react"
import { Grid, Segment } from 'semantic-ui-react'

export default function Layout() {
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
                            <Image size='small' className="marquee" src={CatRun} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </>

    )
}

import ParticleJS from "./Particle"
import CatCard from "./catCard"
import "./background.css"

export default function Layout() {
    return (
        // #737DFE – #FFCAC9
        <>
            <div className="background-coloring">
                <ParticleJS />
                <CatCard />
            </div>
        </>

    )
}

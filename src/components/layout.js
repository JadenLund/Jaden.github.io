import ParticleJS from "./Particle"
import CatCard from "./catCard"

export default function Layout() {
    return (
        // #737DFE – #FFCAC9
        <>
            <div className="background">
                <ParticleJS />
            </div>
            <CatCard />
        </>

    )
}

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import fish from "../../src/components/assets/Fish.png"
import paw from "../../src/components/assets/paw.png"

export default function ParticleJS() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    rotate: {
                        value: 0,
                        direction: "random",
                        animation: {
                            speed: 5,
                            enable: true
                        }
                    },

                    color: {
                        value: "#ffffff",
                    },

                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                        // rotate: {
                        //     x: 600,
                        //     y: 1200,
                        // }

                    },

                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 10,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "image",
                        images: [
                            {
                                src: fish
                            },
                            {
                                src: paw
                            }
                        ],

                    },
                    size: {
                        value: { min: 10, max: 20 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

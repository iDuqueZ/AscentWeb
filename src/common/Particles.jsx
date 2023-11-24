'use client'

import React, { useEffect } from 'react';
import Particles from 'particles.js'; // Importa la librería Stats.js
import '@/app/particles.css';

const ParticleBackground = () => {
    useEffect(() => {
        // Inicializa el componente
        const particlesScript = document.createElement('script');
        particlesScript.src = 'http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        particlesScript.async = true;
        document.body.appendChild(particlesScript);

        // stats.js lib - carga desde CDN en React
        const statsScript = document.createElement('script');
        statsScript.src = 'http://threejs.org/examples/js/libs/stats.min.js';
        statsScript.async = true;
        document.body.appendChild(statsScript);

        // Configuración de partículas
        particlesJS("particles-js", {
            "particles": {
                "number": {
                  "value": 24,
                  "density": {
                    "enable": true,
                    "value_area": 1578.2952832645453
                  }
                },
                "color": {
                  "value": "#000000"
                },
                "shape": {
                  "type": "polygon",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 5
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#727272",
                  "opacity": 0.4,
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": 6,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "repulse"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
        });

        // // Configuración de Stats.js
        // const stats = new Stats();
        // stats.setMode(0);
        // stats.domElement.style.position = 'absolute';
        // stats.domElement.style.left = '0px';
        // stats.domElement.style.top = '0px';
        // document.body.appendChild(stats.domElement);

        // let count_particles = document.querySelector('.js-count-particles');

        // // Función de actualización
        // const update = function () {
        //     stats.begin();
        //     stats.end();
        //     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        //         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        //     }
        //     requestAnimationFrame(update);
        // };

        // // Llamada inicial a la función de actualización
        // requestAnimationFrame(update);

        // Limpia el componente cuando se desmonta
        return () => {
            // Detener o limpiar cualquier cosa necesario al desmontar
        };
    }, []); // Asegúrate de que este useEffect se ejecute solo una vez al montar el componente

    return (
        <>
            {/* particles.js container */}
            <div id="particles-js"></div>

            {/* stats - count particles
            <div className="count-particles">
                <span className="js-count-particles">--</span> particles
            </div> */}
        </>
    );
};

export default ParticleBackground;

const fireParticleConfig = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ff4500", // Fiery orange-red color (lava/fire look)
    },
    shape: {
      type: "circle", // You can experiment with 'triangle', 'edge', or 'polygon' for more abstract effects
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: true,
        speed: 10,
        size_min: 1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ff4500", // Connecting lines also have a fiery glow
      opacity: 0.5,
      width: 2,
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      repulse: {
        distance: 150,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
};

export default fireParticleConfig;

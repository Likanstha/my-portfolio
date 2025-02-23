const aboutParticleConfig = {
  particles: {
    number: {
      value: 250,
      density: {
        enable: true,
        value_area: 800,
        area: 1, // Example value
        factor: 1, // Example value
        height: 1, // Example value
        width: 1, // Example value
      },
      limit: 0,
      max: 0,
    },
    color: {
      value: "#fff",
      animation: {
        enable: true,
        speed: 10,
        sync: false,
        offset: 1,
        count: 0, // You can adjust this value (e.g., 0 or another number based on your requirement)
        decay: 0, // Adjust as necessary (0 for no decay)
        delay: 0, // Adjust the delay if needed (0 means no delay)
      },
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
        destroy: "none",
        mode: "random",
        startValue: "max",
        count: 0,
        decay: 0,
        delay: 0,
      },
    },
    size: {
      value: 5.5,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 0.1,
        sync: false,
        destroy: "none",
        mode: "random",
        startValue: "max",
        count: 0,
        decay: 0,
        delay: 0,
      },
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
        distance: 0,
        rotate: undefined,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
        parallax: undefined,
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 1,
        duration: 0.3,
        opacity: 1,
        speed: 1,
      },
      repulse: {
        distance: 200,
        duration: 0.5,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

export default aboutParticleConfig;

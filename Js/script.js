document.getElementById("toggle-theme").addEventListener("click", function () {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  const icon = document.getElementById("theme-icon");
  icon.src = isDark
    ? "Assets/icons/light_mode_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"
    : "Assets/icons/dark_mode_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";

  icon.alt = isDark ? "Modo Claro" : "Modo Escuro";
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const icon = document.getElementById("theme-icon");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    if (icon) {
      icon.src =
        "Assets/icons/light_mode_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
      icon.alt = "Modo Claro";
    }
  } else {
    if (icon) {
      icon.src =
        "Assets/icons/dark_mode_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
      icon.alt = "Modo Escuro";
    }
  }
});

particlesJS("particles-js", {
  particles: {
    number: { value: 90, density: { enable: true, value_area: 800 } },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 4, random: true },
    move: { enable: true, speed: 2.5, direction: "none", out_mode: "bounce" },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 120, duration: 0.5 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});

const botaoTopo = document.getElementById("voltarTopo");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    botaoTopo.style.display = "block";
  } else {
    botaoTopo.style.display = "none";
  }
};

botaoTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

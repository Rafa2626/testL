// Constante para el número de WhatsApp
const WHATSAPP_NUMBER = "5493815123041";
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const DEFAULT_MESSAGE = "Hola Laura, quiero información sobre las terapias";


// Datos de las terapias
const therapiesData = {
  "sesion-1111": {
    title: "🌌 Sesión 11.11: Crea tu Propia Experiencia de Sanación 🌌",
    content: `
      <p>Esta sesión está diseñada para que tu alma guíe el proceso. No hay un protocolo fijo: vos elegís qué necesitas trabajar, liberar o potenciar en tu interior. Es un encuentro totalmente personalizado, donde tu intuición y tu esencia marcan el camino.</p>
      <h4>✨ Durante la sesión podrás:</h4>
      <ul>
        <li>🔹 Explorar lo que tu alma necesita en este momento de tu vida</li>
        <li>🔹 Elegir herramientas y técnicas que resuenen con vos (sonido, registros, geometría, conexión, constelaciones, entre otras)</li>
        <li>🔹 Conectar con tu sabiduría interior y reconocer patrones que necesitan sanación</li>
        <li>🔹 Crear un espacio de liberación, equilibrio y armonía energética</li>
      </ul>
      <p>La Sesión 11.11 es un llamado a la autoexploración y a la co-creación de tu propio proceso de bienestar, donde cada paso está guiado por lo que tu ser más profundo necesita integrar.</p>
      <p>🌿 Un encuentro único para tomar las riendas de tu sanación y vivir una experiencia alineada con tu propia esencia.</p>
    `,
    whatsappMessage:
      "Hola Laura, quiero información sobre la Sesión 11.11",
  },

  "constelaciones-familiares": {
    title: "🌌 Sesión de Constelaciones Familiares 🌌",
    content: `
      <p>Las Constelaciones Familiares son una herramienta terapéutica que nos permite reconocer patrones, vínculos y dinámicas familiares que influyen en nuestra vida cotidiana. A través de esta técnica, se observan las relaciones y lealtades invisibles que muchas veces condicionan decisiones, emociones y comportamientos.</p>
      <h4>✨ En la sesión podrás:</h4>
      <ul>
        <li>🔹 Identificar bloqueos emocionales y patrones repetitivos dentro de la familia</li>
        <li>🔹 Comprender la raíz de conflictos y dificultades actuales</li>
        <li>🔹 Liberar cargas emocionales heredadas de generaciones anteriores</li>
        <li>🔹 Abrir espacio a la reconciliación, el entendimiento y la armonía</li>
      </ul>
      <p>La experiencia permite tomar conciencia de lo que antes estaba oculto, sanando vínculos y favoreciendo un equilibrio profundo que se refleja tanto en lo personal como en lo familiar.</p>
      <p>🌿 Una oportunidad para reconciliarte con tu historia, conectar con tus raíces y crear relaciones más sanas y conscientes.</p>
    `,
    whatsappMessage:
      "Hola Laura, quiero información sobre Constelaciones Familiares",
  },

  "constelaciones-cuanticas": {
    title: "🌌 Sesión de Constelaciones Cuánticas 🌌",
    content: `
      <p>Las Constelaciones Cuánticas son una herramienta terapéutica que permite observar y transformar los vínculos, patrones y memorias que influyen en tu vida. Desde un campo de conciencia ampliado, se accede a la información que permanece oculta y que muchas veces condiciona tu presente.</p>
      <h4>✨ En una sesión podés:</h4>
      <ul>
        <li>🔹 Identificar bloqueos emocionales, familiares o personales</li>
        <li>🔹 Comprender el origen de situaciones repetitivas</li>
        <li>🔹 Liberar lealtades inconscientes que limitan tu bienestar</li>
        <li>🔹 Abrir espacio a nuevas posibilidades y caminos de sanación</li>
      </ul>
      <p>A diferencia de otros métodos, las Constelaciones Cuánticas trabajan desde un nivel energético y consciente, donde se incluyen no solo las dinámicas familiares, sino también las experiencias del alma y su campo de información.</p>
      <p>🌿 Es un espacio profundo de revelación y transformación, que te invita a ver con claridad y a reconectar con tu fuerza vital.</p>
    `,
    whatsappMessage:
      "Hola Laura, quiero información sobre Constelaciones Cuánticas",
  },

  "registros-akashicos": {
    title: "🌌 Sesión de Registros Akáshicos 🌌",
    content: `
      <p>Los Registros Akáshicos son el archivo energético del alma, un espacio donde se guarda la memoria de todas tus experiencias, aprendizajes y caminos. Acceder a ellos es abrir una puerta a la sabiduría interna que siempre estuvo disponible para vos.</p>
      <p>En la sesión, a través de una apertura canalizada, recibís información que puede ayudarte a:</p>
      <ul>
        <li>🔹 Comprender el origen de bloqueos o situaciones repetitivas</li>
        <li>🔹 Reconocer aprendizajes que tu alma trae consigo</li>
        <li>🔹 Encontrar claridad en decisiones importantes</li>
        <li>🔹 Liberar cargas emocionales y energéticas que ya no necesitás sostener</li>
      </ul>
      <p>✨ Cada lectura es única y trae la información que tu alma está lista para recibir en este momento de tu camino.</p>
      <p>La experiencia no predice el futuro, sino que ilumina el presente para que puedas elegir desde mayor conciencia, confianza y libertad.</p>
      <p>🌿 Una invitación a escucharte en profundidad y abrirte a la sabiduría de tu propia alma.</p>
    `,
    whatsappMessage:
      "Hola Laura, quiero agendar una Sesión de Registros Akáshicos",
  },

  "sesion-77": {
    title:
      "🌌 Sesión 7.7: Registros Akáshicos a través de Geometría Sagrada 🌌",
    content: `
      <p>Los Registros Akáshicos son el archivo energético del alma, un espacio donde habita la memoria de cada experiencia, aprendizaje y patrón de vida. En esta sesión, accedemos a esa información utilizando la Geometría Sagrada como canal.</p>
      <p>A través del trazo consciente de líneas, círculos y figuras, la geometría abre un puente hacia tu interior, permitiendo que se revelen patrones repetitivos, creencias limitantes y bloqueos energéticos que hoy necesitan ser vistos para ser sanados.</p>
      <h4>✨ Durante la sesión, vas a poder:</h4>
      <ul>
        <li>🔹 Conectar con la información de tus Registros Akáshicos</li>
        <li>🔹 Reconocer los patrones que condicionan tu presente</li>
        <li>🔹 Comprender qué aprendizajes guarda tu alma</li>
        <li>🔹 Abrir caminos de liberación y equilibrio energético</li>
      </ul>
      <p>La Sesión 7.7 es un encuentro profundo donde la geometría se convierte en un lenguaje que dialoga con tu alma, trayendo claridad y sanación desde los Registros.</p>
    `,
    whatsappMessage: "Hola Laura,me interesa la Sesión 7.7",
  },

  "sesion-33": {
    title: "✨ Sesión 3.3: Masaje Sonoro con Cuencos Tibetanos + Conexión ✨",
    content: `
      <p>Una experiencia donde el sonido y la conexión se unen para tu bienestar integral.</p>
      <p>Las vibraciones de los cuencos tibetanos actúan sobre el sistema nervioso reduciendo el estrés y la ansiedad, equilibrando las ondas cerebrales y favoreciendo un descanso profundo. A nivel físico, ayudan a liberar tensiones, mejorar la circulación y relajar los tejidos del cuerpo.</p>
      <p>En el plano energético, el sonido armoniza los centros vitales, favoreciendo el flujo equilibrado de energía y disolviendo bloqueos que generan malestar.</p>
      <p>La sesión de conexión acompaña este proceso, invitándote a encontrarte con vos mismo/a, reconocer emociones, abrir espacio a la calma y cultivar mayor claridad mental.</p>
      <h4>La integración de ambas técnicas genera:</h4>
      <ul>
        <li>🌿 Relajación profunda</li>
        <li>🌿 Equilibrio físico, mental y energético</li>
        <li>🌿 Mayor concentración, presencia y armonía interior</li>
      </ul>
      <p>✨ Regalate este momento de armonía y bienestar.</p>
    `,
    whatsappMessage: "Hola Laura, quiero vivir la Sesión 3.3",
  },

  "masaje-cuencos": {
    title: "🌊 Masaje Sonoro con Cuencos Tibetanos 🌊",
    content: `
      <p>Un viaje de vibraciones que no solo relaja, también tiene beneficios respaldados por la ciencia 🧬💫</p>
      <ul>
        <li>🔹 Reduce el estrés y la ansiedad: estudios demuestran que las ondas sonoras estimulan el sistema nervioso parasimpático, disminuyendo el cortisol (hormona del estrés).</li>
        <li>🔹 Mejora la calidad del sueño 😴: las frecuencias vibracionales ayudan a equilibrar las ondas cerebrales, favoreciendo estados de calma y descanso profundo.</li>
        <li>🔹 Alivia tensiones físicas 🪷: las vibraciones penetran en los tejidos del cuerpo, ayudando a soltar contracturas y mejorar la circulación.</li>
        <li>🔹 Aumenta la concentración y claridad mental 🧠: la sonoridad armónica estimula la coherencia cerebral, facilitando el enfoque y la creatividad.</li>
      </ul>
      <p>✨ Una experiencia en la que la ciencia y el bienestar se encuentran, para que tu cuerpo y tu mente logren un equilibrio natural.</p>
    `,
    whatsappMessage:
      "Hola Laura, quiero un Masaje Sonoro con Cuencos Tibetanos",
  },
};

// Inicialización cuando el DOM está listo
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

// Función principal de inicialización
function initializeApp() {
  setupWhatsAppLinks();
  setupNavigation();
  setupMobileMenu();
  setupModal();
  setupLazyLoading();
  setupScrollEffects();
  setupTherapyCards();
}

// Configurar enlaces de WhatsApp
function setupWhatsAppLinks() {
  const whatsappLinks = [
    { id: "hero-cta", message: DEFAULT_MESSAGE },
    { id: "final-cta", message: DEFAULT_MESSAGE },
    { id: "whatsapp-float", message: DEFAULT_MESSAGE },
  ];

  whatsappLinks.forEach((link) => {
    const element = document.getElementById(link.id);
    if (element) {
      element.href = `${WHATSAPP_BASE_URL}?text=${link.message}`;
    }
  });
}

// Configurar navegación suave
function setupNavigation() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = 80; // Altura fija del header
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Cerrar menú móvil si está abierto
        const navMenu = document.querySelector(".nav-menu");
        const navToggle = document.getElementById("nav-toggle");
        if (navMenu.classList.contains("active")) {
          navMenu.classList.remove("active");
          navToggle.classList.remove("active");
          document.body.style.overflow = "";
        }
      }
    });
  });
}

// Configurar menú móvil
function setupMobileMenu() {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  navToggle.addEventListener("click", function () {
    const isActive = navMenu.classList.contains("active");

    if (isActive) {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
      document.body.style.overflow = "";
      navToggle.setAttribute("aria-label", "Abrir menú de navegación");
    } else {
      navMenu.classList.add("active");
      navToggle.classList.add("active");
      document.body.style.overflow = "hidden";
      navToggle.setAttribute("aria-label", "Cerrar menú de navegación");
    }
  });

  // Cerrar menú con ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
      document.body.style.overflow = "";
      navToggle.setAttribute("aria-label", "Abrir menú de navegación");
    }
  });

  // Cerrar menú al redimensionar ventana
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
      document.body.style.overflow = "";
      navToggle.setAttribute("aria-label", "Abrir menú de navegación");
    }
  });
}

// Configurar efectos de scroll
function setupScrollEffects() {
  const header = document.getElementById("header");
  let lastScrollTop = 0;

  window.addEventListener(
    "scroll",
    function () {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Header shrink effect
      if (scrollTop > 100) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    },
    { passive: true }
  );
}

// Configurar lazy loading de imágenes
function setupLazyLoading() {
  const images = document.querySelectorAll("img[data-src]");

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add("loaded");
            img.removeAttribute("data-src");
            imageObserver.unobserve(img);
          }
        });
      },
      {
        rootMargin: "50px 0px",
      }
    );

    images.forEach((img) => imageObserver.observe(img));
  } else {
    // Fallback para navegadores sin IntersectionObserver
    images.forEach((img) => {
      img.src = img.dataset.src;
      img.classList.add("loaded");
      img.removeAttribute("data-src");
    });
  }
}

// Configurar tarjetas de terapias
function setupTherapyCards() {
  const therapyCards = document.querySelectorAll(".therapy-card");

  therapyCards.forEach((card) => {
    const button = card.querySelector(".btn-more");
    if (button) {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const therapyType = card.getAttribute("data-therapy");
        openTherapyModal(therapyType);
      });
    }

    // También permitir click en toda la tarjeta (excepto el botón)
    card.addEventListener("click", function (e) {
      if (!e.target.classList.contains("btn-more")) {
        const therapyType = card.getAttribute("data-therapy");
        openTherapyModal(therapyType);
      }
    });

    // Accesibilidad: Enter y Space
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const therapyType = card.getAttribute("data-therapy");
        openTherapyModal(therapyType);
      }
    });

    // Hacer la tarjeta focuseable
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute(
      "aria-label",
      `Ver más información sobre ${
        card.querySelector(".card-title").textContent
      }`
    );
  });
}

// Configurar modal
function setupModal() {
  const modal = document.getElementById("modal-overlay");
  const modalClose = document.getElementById("modal-close");

  // Cerrar modal con botón X
  modalClose.addEventListener("click", closeModal);

  // Cerrar modal con click fuera
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Cerrar modal con ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  // Focus trap dentro del modal
  modal.addEventListener("keydown", function (e) {
    if (e.key === "Tab" && modal.classList.contains("active")) {
      trapFocus(e, modal);
    }
  });
}

// Abrir modal de terapia específica
function openTherapyModal(therapyType) {
  const therapyData = therapiesData[therapyType];
  if (!therapyData) return;

  const modal = document.getElementById("modal-overlay");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalWhatsApp = document.getElementById("modal-whatsapp");

  // Configurar contenido del modal
  modalTitle.textContent = therapyData.title;
  modalDescription.innerHTML = therapyData.content;
  modalWhatsApp.href = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(therapyData.whatsappMessage)}`;

  // Mostrar modal
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");

  // Enfocar en el primer elemento focuseable
  const firstFocusableElement = modal.querySelector(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (firstFocusableElement) {
    firstFocusableElement.focus();
  }

  // Prevenir scroll del body
  document.body.style.overflow = "hidden";
}

// Cerrar modal
function closeModal() {
  const modal = document.getElementById("modal-overlay");

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");

  // Restaurar scroll del body
  document.body.style.overflow = "";

  // Devolver foco al elemento que abrió el modal (si es posible)
  const activeTherapyCard = document.querySelector(".therapy-card:focus");
  if (activeTherapyCard) {
    activeTherapyCard.focus();
  }
}

// Función para el focus trap en modales
function trapFocus(e, container) {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus();
      e.preventDefault();
    }
  } else {
    if (document.activeElement === lastFocusableElement) {
      firstFocusableElement.focus();
      e.preventDefault();
    }
  }
}

// Función para animar elementos cuando entran en vista
function setupScrollAnimations() {
  if ("IntersectionObserver" in window) {
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const animatableElements = document.querySelectorAll(
      ".therapy-card, .about-content, .cta-final"
    );
    animatableElements.forEach((el) => {
      animationObserver.observe(el);
    });
  }
}

// Manejo de errores para imágenes que no cargan
function setupImageErrorHandling() {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("error", function () {
      // Si la imagen no carga, usar un gradiente como fallback
      this.style.background =
        "linear-gradient(135deg, var(--violet-light), var(--blue-bright))";
      this.style.display = "none";
    });
  });
}

// Inicializar animaciones adicionales después de que todo cargue
window.addEventListener("load", function () {
  setupScrollAnimations();
  setupImageErrorHandling();
});

// Función para detección de dispositivos móviles
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

// Adaptaciones para dispositivos móviles
if (isMobileDevice()) {
  document.body.classList.add("mobile-device");
}

// Manejo del performance y reducción de movimiento
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.body.classList.add("reduce-motion");
}

// Función de debugging para desarrollo (eliminar en producción)
function debugWhatsAppLinks() {
  console.log("WhatsApp Number:", WHATSAPP_NUMBER);
  console.log("WhatsApp Base URL:", WHATSAPP_BASE_URL);

  const links = document.querySelectorAll('a[href*="wa.me"]');
  links.forEach((link, index) => {
    console.log(`WhatsApp Link ${index + 1}:`, link.href);
  });
}

// Ejecutar debug solo en desarrollo
if (
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
) {
  debugWhatsAppLinks();
}

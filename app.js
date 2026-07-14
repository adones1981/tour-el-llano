/* ==========================================================================
   RUTA EL LLANO - APP LOGIC (Leaflet Real Map, Sintetizador y Accesibilidad)
   ========================================================================== */

// DATA MODEL
const routeStops = [
  {
    id: 1,
    number: 1,
    title: "Estación El Llano (Inicio)",
    subtitle: "Portal de entrada al barrio",
    comicText: "BIENVENIDO",
    story: "La estación de metro El Llano marca el punto de partida de nuestro viaje. Inaugurada en 1978, conecta el centro de Santiago con el histórico Llano Subercaseaux, un sector residencial concebido como una ciudad jardín a principios del siglo XX. Aquí comienza una experiencia donde la música chilena y el sabor nocturno reviven la identidad comunal de San Miguel.",
    trackName: "Acorde de Entrada (Campanillas)",
    musicType: "metro",
    pairingId: 3, // La Fuente del Llano
    pairingName: "La Fuente del Llano",
    pairingDesc: "Comienza a saborear el barrio con una visita a la clásica Fuente del Llano, famosa por sus abundantes sándwiches tradicionales.",
    image: "images/metro.png",
    streetViewUrl: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=-33.4827,-70.6497"
  },
  {
    id: 2,
    number: 2,
    title: "Plaza El Llano (Parque)",
    subtitle: "El pulmón verde central",
    comicText: "NATURALEZA",
    story: "La Plaza El Llano Subercaseaux es el corazón verde y social del barrio. Oferta senderos sombreados por centenarios árboles y palmeras, rodeados por elegantes edificios residenciales de mediados del siglo XX. Es un oasis de calma en medio de la comuna y punto de encuentro vecinal indispensable para familias y deportistas.",
    trackName: "Melodía de Plaza (Acoustic Chime)",
    musicType: "plaza",
    pairingId: 2, // Café El Llano Orgánico
    pairingName: "Café El Llano Orgánico",
    pairingDesc: "Cruza la calle desde la plaza para disfrutar un café de grano y una deliciosa empanada artesanal en su terraza sombreada.",
    image: "images/plaza.png",
    streetViewUrl: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=-33.4824,-70.6506"
  },
  {
    id: 3,
    number: 3,
    title: "Mural Ureta Cox",
    subtitle: "Los Prisioneros en San Miguel",
    comicText: "URBANO",
    story: "Ubicado en la intersección de Gran Avenida con Ureta Cox, este colorido mural pop art rinde tributo a la cuna del rock de San Miguel. Recuerda la historia del trío que revolucionó el rock chileno de los 80, Jorge González, Claudio Narea y Miguel Tapia, cuyas composiciones nacieron recorriendo estas mismas esquinas del barrio.",
    trackName: "El Baile de los que Sobran (Sintetizador)",
    musicType: "prisioneros",
    pairingId: 3, // La Fuente del Llano
    pairingName: "La Fuente del Llano",
    pairingDesc: "Cruza hacia Gran Avenida para comer un sándwich abundante y conversar sobre la rebeldía musical de los 80.",
    image: "images/mural_background.png", // La foto real del mural subida por el usuario
    streetViewUrl: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=-33.4984,-70.6514"
  },
  {
    id: 4,
    number: 4,
    title: "Sabor de Origen (Violeta Parra)",
    subtitle: "Café El Llano Orgánico",
    comicText: "CREAR",
    story: "Este punto rinde homenaje a la raíz folclórica y al legado de Violeta Parra. Su espíritu creativo inspira una parada gastronómica y artística enfocada en las tradiciones. La música de guitarra acústica y charango resuena en un ambiente acogedor que destaca por su panadería artesanal y productos orgánicos cultivados con amor por la tierra.",
    trackName: "Gracias a la Vida (Estilo Acústico)",
    musicType: "violeta",
    pairingId: 2,
    pairingName: "Café El Llano Orgánico",
    pairingDesc: "Una empanada chilena de pino recién horneada y un café de grano tostado: un maridaje perfecto con los acordes de guitarra criolla.",
    image: "images/cafe.png",
    streetViewUrl: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=-33.4843,-70.6527"
  },
  {
    id: 5,
    number: 5,
    title: "Acordes de El Llano (Los Prisioneros)",
    subtitle: "La Fuente del Llano",
    comicText: "REBELDÍA",
    story: "San Miguel es la cuna de Los Prisioneros. Frente a Gran Avenida, esta parada recuerda la energía cruda y la lírica social del trío que se formó en el vecino Liceo N°6 de hombres, un punto de encuentro clásico que sirvió de tertulia juvenil e intelectual a fines del siglo pasado.",
    trackName: "La Voz de los '80 (Estilo Sintetizador)",
    musicType: "prisioneros",
    pairingId: 3,
    pairingName: "La Fuente del Llano",
    pairingDesc: "Disfruta un clásico completo italiano gigante: la tradicional preparación que alimentó las tertulias y la bohemia de los años ochenta.",
    image: "images/fuente.png",
    streetViewUrl: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=-33.4878,-70.6473"
  },
  {
    id: 6,
    number: 6,
    title: "Raíces y Tradición (Los Jaivas)",
    subtitle: "Bistro Latino",
    comicText: "VOLAR",
    story: "Los Jaivas fusionaron el rock progresivo con las raíces folclóricas de la cordillera andina. Esta parada celebra esa cosmovisión e integración cultural con colores cálidos y notas cósmicas. El sonido del piano y el charango maridan con una propuesta gastronómica que reinventa las recetas clásicas latinas.",
    trackName: "Todos Juntos (Estilo Cósmico)",
    musicType: "jaivas",
    pairingId: 4,
    pairingName: "Bistro Latino",
    pairingDesc: "Un pastel de choclo gourmet maridado con un cóctel de pisco artesanal aromatizado con hierbas de la cordillera.",
    image: "images/bistro.png",
    streetViewUrl: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=-33.4860,-70.6517"
  },
  {
    id: 7,
    number: 7,
    title: "Distrito Garden (La Ley)",
    subtitle: "Doble Opuesto Bar & Pizza",
    comicText: "SENTIR",
    story: "El cierre del recorrido nos traslada a la sofisticación de los años noventa con La Ley. Su sonido elegante de synth-pop y rock vanguardista inspira una noche de luces de neón y conversaciones relajadas en el distrito gastronómico del barrio. La melancolía pop se saborea entre pizzas artesanales a la piedra y cervezas frías.",
    trackName: "Doble Opuesto (Estilo Synth-Pop)",
    musicType: "laley",
    pairingId: 5,
    pairingName: "Doble Opuesto Bar & Pizza",
    pairingDesc: "Una crujiente pizza a la piedra bajo el brillo de los letreros de neón, disfrutando de beats refinados de rock nacional.",
    image: "images/bar.png",
    streetViewUrl: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=-33.4923,-70.6519"
  }
];

const foodData = [
  {
    id: 2,
    name: "Café El Llano Orgánico",
    type: "Cafetería y Pastelería de Barrio",
    address: "Ricardo Morales 3920, San Miguel",
    hours: "09:00 a 20:00 hrs",
    specialty: "Empanada de Pino de Horno y Tarta de Nueces",
    story: "Ubicado en una hermosa casona remodelada del barrio, este café orgánico prioriza ingredientes locales de pequeños productores. Sus empanadas crujientes son famosas en toda la comuna por su sazón criollo casero.",
    comicText: "CASERO",
    pairingId: 4, // Violeta Parra (Ahora parada 4)
    pairingName: "Sabor de Origen (Violeta Parra)",
    pairingDesc: "La atmósfera perfecta para saborear tradiciones criollas y sentir la música de raíz folclórica.",
    image: "images/cafe.png"
  },
  {
    id: 3,
    name: "La Fuente del Llano",
    type: "Fuente de Soda Clásica",
    address: "Gran Avenida José Miguel Carrera 3420, San Miguel",
    hours: "12:00 a 23:30 hrs",
    specialty: "Completo Italiano y Churrasco de Lomo",
    story: "Una parada histórica y familiar en El Llano. Conserva la mística de las antiguas fuentes de soda santiaguinas con sus mesones formica, mayonesa casera y porciones abundantes que recuerdan las reuniones de amigos de los 80.",
    comicText: "SABROSO",
    pairingId: 5, // Los Prisioneros (Ahora parada 5)
    pairingName: "Acordes de El Llano (Los Prisioneros)",
    pairingDesc: "Escucha la energía rebelde y rocanrolera de San Miguel mientras disfrutas un sándwich clásico y gigante.",
    image: "images/fuente.png"
  },
  {
    id: 4,
    name: "Bistro Latino",
    type: "Cocina Fusión y Cócteles",
    address: "Llano Subercaseaux 3512, San Miguel",
    hours: "13:00 a 01:00 hrs",
    specialty: "Pastel de Choclo Gourmet y Pisco Sour de Albahaca",
    story: "Un espacio acogedor que mezcla la cocina latinoamericana con toques modernos. Su terraza nocturna, con vista al parque arbolado, es el escenario ideal para revivir la bohemia musical del barrio de manera sofisticada.",
    comicText: "FUSIÓN",
    pairingId: 6, // Los Jaivas (Ahora parada 6)
    pairingName: "Raíces y Tradición (Los Jaivas)",
    pairingDesc: "El maridaje ideal para un viaje de sabores andinos y coctelería mística inspirada en la cordillera.",
    image: "images/bistro.png"
  },
  {
    id: 5,
    name: "Doble Opuesto Bar & Pizza",
    type: "Pizzería y Restobar",
    address: "Salesianos 1040, San Miguel",
    hours: "18:00 a 02:00 hrs",
    specialty: "Pizza Margarita Neón a la Piedra y Cerveza Artesanal",
    story: "Inspirado en el rock chileno de los 90, este restobar destaca por sus letreros LED, música en vivo los fines de semana y crujientes pizzas artesanales que acompañan las noches bohemias de El Llano.",
    comicText: "ROCK",
    pairingId: 7, // La Ley (Ahora parada 7)
    pairingName: "Distrito Garden (La Ley)",
    pairingDesc: "Acompaña tu porción de pizza con un beat synth-rock refinado bajo las luces de neón del local.",
    image: "images/bar.png"
  }
];

// APP STATE
let activeView = "map"; // Default main view
let currentMuralId = null;
let currentFoodId = null;

// LEAFLET MAP VARIABLES
let leafletMap = null;
let mapMarkers = [];
let routePolyline = null;

// WEB AUDIO SYNTHESIZER
let audioCtx = null;
let synthSequenceInterval = null;
let synthIsPlaying = false;
let currentSynthType = "";
let synthStartTime = 0;
let playTimerInterval = null;

// ACCESSIBILITY STATE
let autoTTS = false;
let speechUtterance = null;

// DOM ELEMENTS
const navButtons = {
  map: document.getElementById("nav-btn-map"),
  murals: document.getElementById("nav-btn-murals"),
  food: document.getElementById("nav-btn-food"),
  scan: document.getElementById("nav-btn-scan")
};

const views = {
  map: document.getElementById("view-map"),
  murals: document.getElementById("view-murals"),
  food: document.getElementById("view-food"),
  scan: document.getElementById("view-scan")
};

// INITIALIZE APP
document.addEventListener("DOMContentLoaded", () => {
  setupWelcomeTransitions();
  setupNavigation();
  setupAccessibility();
  setupQRScanner();
  setupMuralsList();
  setupFoodList();
  setupDetailViews();
});

// 1. WELCOME SCREEN TRANSITIONS (Pantalla 01 a Pantalla 02)
function setupWelcomeTransitions() {
  const startBtn = document.getElementById("start-tour-btn");
  const startGpsBtn = document.getElementById("start-gps-btn");
  const welcomeScreen = document.getElementById("welcome-screen");
  const appContainer = document.getElementById("app-container");
  const navWelcomeBtn = document.getElementById("nav-btn-welcome");

  function enterApp(useGPS = false) {
    welcomeScreen.classList.add("welcome-hidden");
    appContainer.classList.remove("app-hidden");
    
    // Configurar Mapa como botón activo en navegación al entrar
    Object.values(navButtons).forEach(btn => btn.classList.remove("active"));
    document.getElementById("nav-btn-map").classList.add("active");
    
    setTimeout(() => {
      initRealMap();
      if (useGPS) {
        enableGPSNavigation();
      }
    }, 400);
  }

  startBtn.addEventListener("click", () => enterApp(false));
  startGpsBtn.addEventListener("click", () => enterApp(true));

  navWelcomeBtn.addEventListener("click", () => {
    // Detener la reproducción musical al volver
    stopSynthMusic();
    
    welcomeScreen.classList.remove("welcome-hidden");
    appContainer.classList.add("app-hidden");
  });
}

// 2. ROUTING & TAB NAVIGATION
function setupNavigation() {
  Object.keys(navButtons).forEach(viewKey => {
    navButtons[viewKey].addEventListener("click", () => {
      switchView(viewKey);
    });
  });

  // Logo Header info button click triggers a mini welcome modal / reset
  document.getElementById("info-btn").addEventListener("click", () => {
    const welcomeScreen = document.getElementById("welcome-screen");
    welcomeScreen.classList.remove("welcome-hidden");
    document.getElementById("app-container").classList.add("app-hidden");
    stopSynthMusic();
    stopSpeaking();
  });
}

function switchView(viewName) {
  // Stop audio synthesis if running when moving away from murals page
  if (activeView === "murals" && viewName !== "murals") {
    stopSynthMusic();
  }
  
  // Cancel current text-to-speech narration
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }

  // Update nav buttons states
  Object.keys(navButtons).forEach(key => {
    if (key === viewName) {
      navButtons[key].classList.add("active");
      navButtons[key].setAttribute("aria-selected", "true");
    } else {
      navButtons[key].classList.remove("active");
      navButtons[key].setAttribute("aria-selected", "false");
    }
  });

  // Update view visibility
  Object.keys(views).forEach(key => {
    if (key === viewName) {
      views[key].classList.add("active");
    } else {
      views[key].classList.remove("active");
    }
  });

  activeView = viewName;
  
  // Special action on tab switch
  if (viewName === "map") {
    document.getElementById("map-popup-card").hidden = true;
    // Trigger map redraw to prevent grey boxes
    if (leafletMap) {
      setTimeout(() => {
        leafletMap.invalidateSize();
        // Reset marker active states
        resetMarkerStyles();
      }, 50);
    }
  } else if (viewName === "murals") {
    document.getElementById("murals-list").hidden = false;
    document.getElementById("mural-detail-view").hidden = true;
  } else if (viewName === "food") {
    document.getElementById("food-list").hidden = false;
    document.getElementById("food-detail-view").hidden = true;
  }
}

// 3. REAL MAP INTEGRATION (LEAFLET.JS)
function initRealMap() {
  if (leafletMap) return; // Prevent double initialization

  // Coordinates centered in El Llano, San Miguel
  const centerCoord = [-33.4900, -70.6510];

  // Create Map
  leafletMap = L.map('leaflet-map-div', {
    zoomControl: false, // We'll place it or use default touch gestures
    maxBounds: [[-33.51, -70.67], [-33.46, -70.63]], // Bound map movements to San Miguel
    minZoom: 13,
    maxZoom: 18
  }).setView(centerCoord, 14);

  // Load CartoDB Positron clean map tiles (tinted sepia in CSS)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
  }).addTo(leafletMap);

  // Add zoom control at bottom right instead of top left
  L.control.zoom({ position: 'bottomright' }).addTo(leafletMap);

  // Draw Numbered Markers 1 to 5
  routeStops.forEach(stop => {
    let markerCoord = getStopCoords(stop.id);
    let markerIcon = createNumberedIcon(stop.number);

    let marker = L.marker(markerCoord, { icon: markerIcon }).addTo(leafletMap);
    
    // Bind marker events
    marker.on('click', () => {
      // Highlight active icon
      resetMarkerStyles();
      marker.setIcon(createNumberedIcon(stop.number, true));
      leafletMap.panTo(markerCoord);

      // Open map popup
      showMapPopup(stop.id);
    });

    mapMarkers.push({
      id: stop.id,
      stopNumber: stop.number,
      marker: marker
    });
  });

  // Trazar polyline discontinua de la ruta (Dotted gold line)
  const routeCoords = routeStops.map(stop => getStopCoords(stop.id));
  routePolyline = L.polyline(routeCoords, {
    color: '#9E743F', // Old gold
    weight: 4,
    dashArray: '8, 8',
    opacity: 0.85
  }).addTo(leafletMap);

  // Setup Map Filter Buttons
  setupMapFilters();
  setupMapSidebar();
}

function getStopCoords(id) {
  // Real coordinates in El Llano Subercaseaux, San Miguel
  const coords = {
    1: [-33.4827, -70.6497], // Metro El Llano
    2: [-33.4824, -70.6506], // Plaza El Llano
    3: [-33.4843, -70.6527], // Café El Llano Orgánico / Violeta Parra
    4: [-33.4860, -70.6517], // Bistro Latino / Los Jaivas
    5: [-33.4878, -70.6473], // La Fuente del Llano / Los Prisioneros
    6: [-33.4923, -70.6519], // Doble Opuesto / La Ley
    7: [-33.4984, -70.6514]  // Mural Ureta Cox (Los Prisioneros)
  };
  return coords[id] || [-33.4862, -70.6518];
}

function createNumberedIcon(number, active = false) {
  return L.divIcon({
    html: `<div class="elegant-map-number-icon ${active ? 'active-icon' : ''}">${number}</div>`,
    className: '', // Clear Leaflet default divIcon class
    iconSize: [28, 28],
    iconAnchor: [14, 14]
  });
}

function resetMarkerStyles() {
  mapMarkers.forEach(m => {
    m.marker.setIcon(createNumberedIcon(m.stopNumber, false));
  });
}

// Map Filters
function setupMapFilters() {
  const filterAll = document.getElementById("filter-all");
  const filterMurals = document.getElementById("filter-murals");
  const filterFood = document.getElementById("filter-food");

  filterAll.addEventListener("click", () => {
    setFilterState(filterAll, [filterMurals, filterFood]);
    toggleMarkerVisibility("all");
  });

  filterMurals.addEventListener("click", () => {
    setFilterState(filterMurals, [filterAll, filterFood]);
    toggleMarkerVisibility("murals");
  });

  filterFood.addEventListener("click", () => {
    setFilterState(filterFood, [filterAll, filterMurals]);
    toggleMarkerVisibility("food");
  });
}

function setFilterState(activeChip, otherChips) {
  activeChip.classList.add("active");
  otherChips.forEach(chip => chip.classList.remove("active"));
}

function toggleMarkerVisibility(filterType) {
  document.getElementById("map-popup-card").hidden = true;
  resetMarkerStyles();

  mapMarkers.forEach(m => {
    // Show/hide or opacity
    if (filterType === "all") {
      m.marker.setOpacity(1);
    } else if (filterType === "murals") {
      // Stops 2, 3, 4, 5 are murals. Stop 1 is metro start.
      if (m.id !== 1) m.marker.setOpacity(1);
      else m.marker.setOpacity(0.15);
    } else if (filterType === "food") {
      // 1 is intro, 2 is cafe, 3 is fuente, 4 is bistro, 5 is bar. 
      // Technically all can be food except 1, or let's say: 2, 3, 4, 5 also have food.
      // Let's filter: food shows stops 2, 3, 4, 5 as well but highlights food aspects.
      // Let's make stop 1 opaced.
      if (m.id !== 1) m.marker.setOpacity(1);
      else m.marker.setOpacity(0.15);
    }
  });
}

// Show Map Popup card (Pantalla 02 detail overlay)
function showMapPopup(stopId) {
  const popup = document.getElementById("map-popup-card");
  const popupContent = document.getElementById("map-popup-content");
  
  const stop = routeStops.find(item => item.id === stopId);
  if (!stop) return;

  popup.hidden = false;
  
  let typeBadge = stopId === 1 ? "Inicio" : "Música y Sabor";
  let badgeClass = stopId === 1 ? "badge-food" : "badge-mural";

  popupContent.innerHTML = `
    <div class="popup-horizontal-layout" style="display:flex; gap:12px; align-items:center;">
      <img src="${stop.image}" style="width:70px; height:70px; border-radius:8px; object-fit:cover; border: 1px solid var(--border-color);" alt="${stop.title}">
      <div style="flex:1;">
        <div class="popup-item-header" style="margin-bottom:2px; display:flex; justify-content:space-between; align-items:center;">
          <span class="popup-badge ${badgeClass}" style="margin-bottom:0;">${typeBadge}</span>
        </div>
        <h3 class="popup-title" style="margin-top:2px; font-size:1rem; line-height:1.2;">${stop.number}. ${stop.title}</h3>
        <p class="popup-desc" style="margin-bottom:0; font-size:0.75rem;">${stop.subtitle}</p>
      </div>
    </div>
    <div style="display:flex; gap:8px; margin-top:12px; flex-wrap:wrap;">
      <button class="btn-elegant-gold" style="padding: 6px 12px; font-size: 0.75rem;" onclick="goToMuralFromMap(${stop.id})">Explorar parada</button>
      <button class="btn-pairing-action" style="padding: 6px 12px; font-size: 0.75rem;" onclick="goToFoodFromMap(${stop.id})">Ver local</button>
      <a href="${stop.streetViewUrl}" target="_blank" class="btn-pairing-action" style="padding: 6px 12px; font-size: 0.75rem; border-color: var(--color-secondary); color: var(--color-secondary); text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">🌐 Street View</a>
      <button class="btn-pairing-action" style="padding: 6px 12px; font-size: 0.75rem; border-color: var(--color-primary); color: var(--color-primary);" onclick="startRouteFromStop(${stop.id})">📍 Iniciar aquí</button>
    </div>
  `;

  // Close button binding
  document.getElementById("close-map-popup").onclick = () => {
    popup.hidden = true;
    resetMarkerStyles();
  };
}

// Map popup redirects
window.goToMuralFromMap = function(id) {
  switchView("murals");
  showMuralDetails(id);
};

window.goToFoodFromMap = function(id) {
  // If id is 1 (intro), there is no food pairing, redirect to Map
  if (id === 1) {
    switchView("map");
    return;
  }
  switchView("food");
  showFoodDetails(id);
};

// 4. ACCESSIBILITY OPTIONS
function setupAccessibility() {
  const accessBtn = document.getElementById("accessibility-btn");
  const accessPanel = document.getElementById("accessibility-panel");
  const closePanelBtn = document.getElementById("close-accessibility");

  accessBtn.addEventListener("click", () => {
    const isExpanded = accessBtn.getAttribute("aria-expanded") === "true";
    accessBtn.setAttribute("aria-expanded", !isExpanded);
    accessPanel.hidden = isExpanded;
  });

  closePanelBtn.addEventListener("click", () => {
    accessBtn.setAttribute("aria-expanded", "false");
    accessPanel.hidden = true;
  });

  // Contrast Toggles
  const btnNormalContrast = document.getElementById("contrast-normal");
  const btnHighContrast = document.getElementById("contrast-high");

  btnNormalContrast.addEventListener("click", () => {
    document.body.classList.remove("theme-high-contrast");
    setButtonActive(btnNormalContrast, btnHighContrast);
  });

  btnHighContrast.addEventListener("click", () => {
    document.body.classList.add("theme-high-contrast");
    setButtonActive(btnHighContrast, btnNormalContrast);
  });

  // Font Size Resizer
  const fontNormal = document.getElementById("font-normal");
  const fontLarge = document.getElementById("font-large");
  const fontXlarge = document.getElementById("font-xlarge");

  function changeFontSize(activeBtn, className) {
    document.body.classList.remove("text-normal", "text-large", "text-xlarge");
    document.body.classList.add(className);
    
    [fontNormal, fontLarge, fontXlarge].forEach(btn => {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
    });
    activeBtn.classList.add("active");
    activeBtn.setAttribute("aria-pressed", "true");
  }

  fontNormal.addEventListener("click", () => changeFontSize(fontNormal, "text-normal"));
  fontLarge.addEventListener("click", () => changeFontSize(fontLarge, "text-large"));
  fontXlarge.addEventListener("click", () => changeFontSize(fontXlarge, "text-xlarge"));

  // Text-To-Speech Toggle
  document.getElementById("tts-toggle").addEventListener("change", (e) => {
    autoTTS = e.target.checked;
  });
}

function setButtonActive(active, inactive) {
  active.classList.add("active");
  active.setAttribute("aria-pressed", "true");
  inactive.classList.remove("active");
  inactive.setAttribute("aria-pressed", "false");
}

// Text to speech narration
function speakText(text) {
  if (!window.speechSynthesis) return;

  window.speechSynthesis.cancel();
  const ttsBtn = document.getElementById("tts-read-btn");
  if (ttsBtn) ttsBtn.innerText = "🛑 Detener Lectura";

  speechUtterance = new SpeechSynthesisUtterance(text);
  speechUtterance.lang = "es-CL";

  speechUtterance.onend = () => {
    if (ttsBtn) ttsBtn.innerText = "🔊 Escuchar narración por voz";
  };
  speechUtterance.onerror = () => {
    if (ttsBtn) ttsBtn.innerText = "🔊 Escuchar narración por voz";
  };

  window.speechSynthesis.speak(speechUtterance);
}

function stopSpeaking() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  const ttsBtn = document.getElementById("tts-read-btn");
  if (ttsBtn) ttsBtn.innerText = "🔊 Escuchar narración por voz";
}

// 5. QR SCANNER SIMULATOR (ELEGANT STYLE)
function setupQRScanner() {
  const submitBtn = document.getElementById("qr-submit-btn");
  const codeInput = document.getElementById("qr-code-input");
  const simButtons = document.querySelectorAll(".sim-btn-elegant");
  const status = document.getElementById("scanner-status");

  function triggerScan(code) {
    status.innerText = "Código detectado. Procesando...";
    status.style.color = "var(--color-primary)";
    playBeepSound();

    setTimeout(() => {
      const stopId = parseInt(code);
      const stop = routeStops.find(s => s.id === stopId);
      
      if (stop) {
        status.innerText = "Parada activada con éxito.";
        status.style.color = "var(--color-secondary)";
        
        setTimeout(() => {
          status.innerText = "Buscando código QR...";
          status.style.color = "rgba(255,255,255,0.7)";
          codeInput.value = "";
          
          switchView("murals");
          showMuralDetails(stopId);
        }, 800);
      } else {
        status.innerText = "Código erróneo. Ingresa del 1 al 7.";
        status.style.color = "#FF3B30";
        setTimeout(() => {
          status.innerText = "Buscando código QR...";
          status.style.color = "rgba(255,255,255,0.7)";
        }, 3000);
      }
    }, 1200);
  }

  submitBtn.addEventListener("click", () => {
    const val = codeInput.value.trim();
    if (val) triggerScan(val);
  });

  codeInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const val = codeInput.value.trim();
      if (val) triggerScan(val);
    }
  });

  simButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const code = btn.getAttribute("data-code");
      triggerScan(code);
    });
  });
}

function playBeepSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = "sine";
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.setValueAtTime(900, ctx.currentTime + 0.08); // Arpeggiated double beep
    
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.16);
  } catch (e) {}
}

// 6. STOP / MURAL LIST GENERATOR
function setupMuralsList() {
  const grid = document.getElementById("murals-grid");
  grid.innerHTML = "";

  routeStops.forEach(stop => {
    const card = document.createElement("div");
    card.className = "list-item-card elegant-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Parada ${stop.number}. ${stop.title}. ${stop.subtitle}. Haz clic para detalles.`);
    card.innerHTML = `
      <div class="item-thumb">${stop.number}</div>
      <div class="item-main">
        <h3 class="item-title">${stop.title}</h3>
        <p class="item-subtitle">${stop.subtitle}</p>
      </div>
      <div class="item-arrow">→</div>
    `;

    card.addEventListener("click", () => {
      showMuralDetails(stop.id);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        showMuralDetails(stop.id);
      }
    });

    grid.appendChild(card);
  });
}

// 7. FOOD LIST GENERATOR
function setupFoodList() {
  const grid = document.getElementById("food-grid");
  grid.innerHTML = "";

  // Display only stops 2, 3, 4, 5 for food list since Stop 1 is metro entrance
  const foodStops = foodData;

  foodStops.forEach(f => {
    const card = document.createElement("div");
    card.className = "list-item-card elegant-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Local Gastronómico ${f.name}. Especialidad: ${f.specialty}. Ver carta.`);
    card.innerHTML = `
      <div class="item-thumb">🍴</div>
      <div class="item-main">
        <h3 class="item-title">${f.name}</h3>
        <p class="item-subtitle">${f.type} • ${f.specialty}</p>
      </div>
      <div class="item-arrow">→</div>
    `;

    card.addEventListener("click", () => {
      showFoodDetails(f.id);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        showFoodDetails(f.id);
      }
    });

    grid.appendChild(card);
  });
}

// 8. DETAILS VIEWS SETUP
function setupDetailViews() {
  document.getElementById("back-to-murals").addEventListener("click", () => {
    stopSynthMusic();
    stopSpeaking();
    document.getElementById("mural-detail-view").hidden = true;
    document.getElementById("murals-list").hidden = false;
  });

  document.getElementById("back-to-food").addEventListener("click", () => {
    stopSpeaking();
    document.getElementById("food-detail-view").hidden = true;
    document.getElementById("food-list").hidden = false;
  });

  document.getElementById("tts-read-btn").addEventListener("click", () => {
    const stop = routeStops.find(item => item.id === currentMuralId);
    if (!stop) return;
    
    if (window.speechSynthesis && window.speechSynthesis.speaking) {
      stopSpeaking();
    } else {
      speakText(`${stop.title}. ${stop.subtitle}. ${stop.story}`);
    }
  });

  // Food pairing click
  document.getElementById("pairing-go-btn").addEventListener("click", () => {
    const stop = routeStops.find(item => item.id === currentMuralId);
    if (!stop) return;
    
    if (stop.id === 1) {
      // Stop 1 has no food detail view
      switchView("map");
      showMapPopup(1);
    } else {
      switchView("food");
      showFoodDetails(stop.pairingId);
    }
  });

  // Music pairing click
  document.getElementById("food-pairing-go-btn").addEventListener("click", () => {
    const f = foodData.find(item => item.id === currentFoodId);
    if (!f) return;

    switchView("murals");
    showMuralDetails(f.pairingId);
  });
}

function showMuralDetails(id) {
  currentMuralId = id;
  const stop = routeStops.find(item => item.id === id);
  if (!stop) return;

  document.getElementById("murals-list").hidden = true;
  document.getElementById("mural-detail-view").hidden = false;

  document.getElementById("det-mural-num").innerText = stop.number;
  document.getElementById("det-mural-title").innerText = stop.title;
  document.getElementById("det-mural-artist").innerText = stop.subtitle;
  document.getElementById("det-mural-story-text").innerText = stop.story;
  document.getElementById("det-track-name").innerText = stop.trackName;
  
  document.getElementById("det-pairing-name").innerText = stop.pairingName;
  document.getElementById("det-pairing-desc").innerText = stop.pairingDesc;

  // Cargar imagen del lugar real
  const artFrame = document.getElementById("det-mural-art");
  artFrame.style.backgroundImage = `url(${stop.image})`;
  artFrame.style.backgroundSize = "cover";
  artFrame.style.backgroundPosition = "center";
  const iconBadge = artFrame.querySelector(".illustration-icon-badge");
  if (iconBadge) iconBadge.style.display = "none";

  // Setup Street View link trigger
  const svBtn = document.getElementById("det-streetview-btn");
  const newSvBtn = svBtn.cloneNode(true);
  svBtn.parentNode.replaceChild(newSvBtn, svBtn);
  newSvBtn.addEventListener("click", () => {
    window.open(stop.streetViewUrl, "_blank");
  });

  // Setup play button
  const playBtn = document.getElementById("player-play-btn");
  playBtn.innerText = "▶️";
  
  const newPlayBtn = playBtn.cloneNode(true);
  playBtn.parentNode.replaceChild(newPlayBtn, playBtn);
  newPlayBtn.addEventListener("click", () => {
    toggleSynthMusic(stop.musicType);
  });

  // If Metro, disable or change food pairing buttons/descriptions
  if (id === 1) {
    document.getElementById("pairing-go-btn").innerText = "Ver en mapa";
  } else {
    document.getElementById("pairing-go-btn").innerText = "Visitar local / Ver en mapa";
  }

  if (autoTTS) {
    setTimeout(() => {
      speakText(`${stop.title}. ${stop.story}`);
    }, 500);
  }
}

function showFoodDetails(id) {
  // If id is 1, redirect out (no food for stop 1)
  if (id === 1) return;
  
  currentFoodId = id;
  const f = foodData.find(item => item.id === id);
  if (!f) return;

  document.getElementById("food-list").hidden = true;
  document.getElementById("food-detail-view").hidden = false;

  document.getElementById("det-food-num").innerText = f.id;
  document.getElementById("det-food-title").innerText = f.name;
  document.getElementById("det-food-type").innerText = f.type;
  document.getElementById("det-food-address").innerText = f.address;
  document.getElementById("det-food-hours").innerText = f.hours;
  document.getElementById("det-food-specialty").innerText = f.specialty;
  document.getElementById("det-food-story-text").innerText = f.story;

  document.getElementById("det-music-pairing-name").innerText = f.pairingName;
  document.getElementById("det-music-pairing-desc").innerText = f.pairingDesc;

  // Cargar imagen del restaurante real
  const foodFrame = document.getElementById("det-food-art");
  foodFrame.style.backgroundImage = `url(${f.image})`;
  foodFrame.style.backgroundSize = "cover";
  foodFrame.style.backgroundPosition = "center";
  const foodIconBadge = foodFrame.querySelector(".illustration-icon-badge");
  if (foodIconBadge) foodIconBadge.style.display = "none";

  if (autoTTS) {
    setTimeout(() => {
      speakText(`${f.name}. Especialidad: ${f.specialty}. ${f.story}`);
    }, 500);
  }
}

// ==========================================================================
// 9. WEB AUDIO SYNTHESIZER SEQUENCER
// Plays custom retro loops using Web Audio API nodes (no MP3 dependencies!)
// ==========================================================================
function toggleSynthMusic(musicType) {
  if (synthIsPlaying) {
    stopSynthMusic();
  } else {
    startSynthMusic(musicType);
  }
}

function startSynthMusic(musicType) {
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    synthIsPlaying = true;
    currentSynthType = musicType;
    synthStartTime = audioCtx.currentTime;
    
    // Add visual states
    document.getElementById("audio-visualizer").classList.add("playing");
    document.querySelector(".audio-track-info").classList.add("playing");
    document.getElementById("player-play-btn").innerText = "🛑";
    
    let step = 0;
    let tempo = 120;

    if (musicType === "metro") {
      tempo = 80;
    } else if (musicType === "plaza") {
      tempo = 90;
    } else if (musicType === "prisioneros") {
      tempo = 145;
    } else if (musicType === "violeta") {
      tempo = 90;
    } else if (musicType === "jaivas") {
      tempo = 115;
    } else if (musicType === "laley") {
      tempo = 122;
    }

    const stepDuration = 60 / tempo / 4; // 16th note duration in seconds

    // Sequencer loop
    synthSequenceInterval = setInterval(() => {
      playSequenceStep(musicType, step);
      step = (step + 1) % 16;
    }, stepDuration * 1000);

    // Progress Bar ticks
    let playDurationSeconds = 0;
    const progressFill = document.getElementById("player-progress-fill");
    const timeLabel = document.getElementById("player-time");

    progressFill.style.width = "0%";
    timeLabel.innerText = "0:00";

    playTimerInterval = setInterval(() => {
      playDurationSeconds++;
      let mins = Math.floor(playDurationSeconds / 60);
      let secs = playDurationSeconds % 60;
      timeLabel.innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
      
      let percentage = (playDurationSeconds / 30) * 100;
      progressFill.style.width = `${percentage}%`;

      if (playDurationSeconds >= 30) {
        stopSynthMusic();
      }
    }, 1000);

  } catch (e) {
    console.error("Web Audio error:", e);
  }
}

function stopSynthMusic() {
  synthIsPlaying = false;
  
  if (synthSequenceInterval) {
    clearInterval(synthSequenceInterval);
    synthSequenceInterval = null;
  }
  
  if (playTimerInterval) {
    clearInterval(playTimerInterval);
    playTimerInterval = null;
  }

  if (audioCtx) {
    audioCtx.close();
    audioCtx = null;
  }

  const vis = document.getElementById("audio-visualizer");
  if (vis) vis.classList.remove("playing");
  
  const trackInfo = document.querySelector(".audio-track-info");
  if (trackInfo) trackInfo.classList.remove("playing");

  const playBtn = document.getElementById("player-play-btn");
  if (playBtn) playBtn.innerText = "▶️";

  const progressFill = document.getElementById("player-progress-fill");
  if (progressFill) progressFill.style.width = "0%";

  const timeLabel = document.getElementById("player-time");
  if (timeLabel) timeLabel.innerText = "0:00";
}

function playSequenceStep(type, step) {
  if (!audioCtx || audioCtx.state === "closed") return;

  const notes = {
    // Metro ambient chime (Welcome chord)
    metro: {
      bass: [130.8, 130.8, 164.8, 164.8], // C3, E3
      lead: [523.3, 659.3, 784.0, 987.8, 0, 0, 0, 0, 523.3, 0, 0, 0, 0, 0, 0, 0] // Soft bell chord C-E-G-B
    },
    // Plaza acoustic chime (Nature chime)
    plaza: {
      bass: [130.8, 164.8, 196.0, 261.6], // C3, E3, G3, C4
      lead: [523.3, 0, 659.3, 0, 784.0, 0, 1046.5, 0, 784.0, 0, 659.3, 0, 523.3, 0, 0, 0]
    },
    // Synth pop driving notes (Jorge Gonzalez)
    prisioneros: {
      bass: [110.0, 110.0, 130.8, 146.8, 110.0, 110.0, 164.8, 146.8],
      lead: [440, 0, 440, 494, 523, 0, 587, 523, 440, 0, 392, 0, 440, 0, 0, 0]
    },
    // Plucky acoustic guitar chord progression (Violeta)
    violeta: {
      bass: [110, 110, 146.8, 146.8, 164.8, 164.8, 110, 110],
      lead: [440, 494, 523, 587, 659, 0, 523, 440, 392, 440, 494, 523, 329, 0, 0, 0]
    },
    // Pentatonic whistle/organ (Los Jaivas)
    jaivas: {
      bass: [130.8, 196.0, 220.0, 174.6],
      lead: [523.2, 587.3, 659.3, 784.0, 880.0, 0, 784.0, 659.3, 587.3, 659.3, 523.2, 0, 0, 0, 0, 0]
    },
    // Moody new wave delay synth chord (La Ley)
    laley: {
      bass: [146.8, 146.8, 164.8, 164.8, 196.0, 196.0, 220.0, 220.0],
      lead: [587, 0, 659, 0, 784, 880, 0, 784, 0, 659, 0, 587, 0, 0, 0, 0]
    }
  };

  const currentMelody = notes[type];
  if (!currentMelody) return;

  const now = audioCtx.currentTime;

  // Bass
  if (step % 2 === 0) {
    const bassIdx = (step / 2) % currentMelody.bass.length;
    const bassFreq = currentMelody.bass[bassIdx];
    playSynthNote(bassFreq, type === "metro" ? "sine" : "sawtooth", 0.08, 0.25, now);
  }

  // Lead
  const leadFreq = currentMelody.lead[step];
  if (leadFreq && leadFreq > 0) {
    playSynthNote(leadFreq, type === "violeta" || type === "metro" || type === "plaza" ? "sine" : "triangle", 0.06, 0.20, now);
    
    if (type === "laley" || type === "jaivas") {
      playSynthNote(leadFreq, "triangle", 0.02, 0.12, now + 0.12);
    }
  }
}

function playSynthNote(freq, oscType, volume, duration, time) {
  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  osc.type = oscType;
  osc.frequency.setValueAtTime(freq, time);
  
  gainNode.gain.setValueAtTime(0, time);
  gainNode.gain.linearRampToValueAtTime(volume, time + 0.02);
  gainNode.gain.exponentialRampToValueAtTime(0.001, time + duration);
  
  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  osc.start(time);
  osc.stop(time + duration + 0.05);
}

// Dynamic Route Sidebar Navigation
function setupMapSidebar() {
  const sidebarList = document.getElementById("sidebar-stops-list");
  if (!sidebarList) return;
  sidebarList.innerHTML = "";

  routeStops.forEach(stop => {
    const btn = document.createElement("button");
    btn.className = "sidebar-stop-btn";
    btn.innerHTML = `
      <span class="stop-number-badge">${stop.number}</span>
      <span class="stop-name-text">${stop.title.split("(")[0].trim()}</span>
    `;
    btn.addEventListener("click", () => {
      const markerObj = mapMarkers.find(m => m.id === stop.id);
      if (markerObj) {
        resetMarkerStyles();
        markerObj.marker.setIcon(createNumberedIcon(stop.number, true));
        leafletMap.setView(getStopCoords(stop.id), 16);
        showMapPopup(stop.id);
      }
    });
    sidebarList.appendChild(btn);
  });
}

// GPS / Starting Point Management
let userLocationMarker = null;
let userToRoutePolyline = null;

function enableGPSNavigation() {
  if (!navigator.geolocation) {
    alert("La geolocalización no está soportada por tu navegador. Comenzando desde el inicio.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const userLat = position.coords.latitude;
      const userLon = position.coords.longitude;
      const userLatLng = [userLat, userLon];

      // Check if too far from El Llano
      const dist = getDistanceInKm(userLat, userLon, -33.4882, -70.6529);
      let finalLatLng = userLatLng;
      if (dist > 15) {
        finalLatLng = [-33.4895, -70.6540]; // Place simulated user inside the park
        alert("Te encuentras lejos de El Llano. Hemos colocado tu ubicación de prueba (📍 Icono azul que pulsa) cerca del parque para que pruebes la ruta desde allí.");
      }

      if (leafletMap) {
        if (userLocationMarker) {
          leafletMap.removeLayer(userLocationMarker);
        }
        
        userLocationMarker = L.marker(finalLatLng, {
          icon: L.divIcon({
            html: `<div class="user-gps-pulse-marker">📍</div>`,
            className: '',
            iconSize: [24, 24],
            iconAnchor: [12, 12]
          })
        }).addTo(leafletMap);
        
        userLocationMarker.bindPopup("<b>Tú estás aquí</b><br>Buscando parada más cercana...").openPopup();

        // Calculate nearest stop
        let nearestStop = routeStops[0];
        let minDist = parseFloat('Infinity');
        
        routeStops.forEach(stop => {
          const coords = getStopCoords(stop.id);
          const d = getDistanceInKm(finalLatLng[0], finalLatLng[1], coords[0], coords[1]);
          if (d < minDist) {
            minDist = d;
            nearestStop = stop;
          }
        });

        // Draw dotted green line from user GPS to nearest stop
        if (userToRoutePolyline) {
          leafletMap.removeLayer(userToRoutePolyline);
        }
        
        const stopCoords = getStopCoords(nearestStop.id);
        userToRoutePolyline = L.polyline([finalLatLng, stopCoords], {
          color: '#3D5A45',
          weight: 4,
          dashArray: '5, 5',
          opacity: 0.85
        }).addTo(leafletMap);

        // Center map to show both
        const bounds = L.latLngBounds([finalLatLng, stopCoords]);
        leafletMap.fitBounds(bounds, { padding: [60, 60] });

        // Highlight nearest stop
        const markerObj = mapMarkers.find(m => m.id === nearestStop.id);
        if (markerObj) {
          setTimeout(() => {
            resetMarkerStyles();
            markerObj.marker.setIcon(createNumberedIcon(nearestStop.number, true));
            showMapPopup(nearestStop.id);
          }, 1200);
        }
      }
    },
    (error) => {
      alert("No pudimos obtener tu ubicación actual. Comenzando desde el inicio.");
    },
    { enableHighAccuracy: true, timeout: 5000 }
  );
}

window.startRouteFromStop = function(id) {
  const stop = routeStops.find(s => s.id === id);
  if (!stop) return;
  
  const coords = getStopCoords(id);
  leafletMap.setView(coords, 17);

  const markerObj = mapMarkers.find(m => m.id === id);
  if (markerObj) {
    resetMarkerStyles();
    markerObj.marker.setIcon(createNumberedIcon(markerObj.stopNumber, true));
  }

  alert(`Has iniciado la ruta desde la parada: "${stop.title}".`);
  goToMuralFromMap(id);
};

// Helper distance formulas
function getDistanceInKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = deg2rad(lat2-lat1);
  const dLon = deg2rad(lon2-lon1); 
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  return R * c;
}

function deg2rad(deg) {
  return deg * (Math.PI/180);
}

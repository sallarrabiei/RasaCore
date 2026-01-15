const glow = document.querySelector(".cursor-glow");
const heroStage = document.querySelector(".hero-stage");
const cards = document.querySelectorAll(".project-card");
const langSelect = document.querySelector("#langSelect");
const nav = document.querySelector("nav.nav");
const navToggle = document.querySelector(".nav-toggle");

const translations = {
  en: {
    "nav.menu": "Menu",
    "nav.vision": "Vision",
    "nav.projects": "Project Showcase",
    "nav.about": "About",
    "nav.lab": "Lab",
    "nav.contact": "Contact",
    "hero.tag": "Creative Lab • Health Startups • Future Systems",
    "hero.title": "We design living experiences for the health industry.",
    "hero.lead":
      "Rasa is a creative lab that builds and incubates bold, human-centered startups. We fuse science, art, and technology into something that feels alive.",
    "hero.ctaPrimary": "Explore the projects",
    "hero.ctaGhost": "View the portfolio",
    "vision.title": "Our Vision",
    "vision.body":
      "We build health-first startups with a creator’s mindset: rapid experimentation, precise empathy, and systems that evolve like living organisms.",
    "vision.pill1": "Bio-adaptive UX",
    "vision.pill2": "Behavioral Design",
    "vision.pill3": "Care-tech Platforms",
    "vision.pill4": "Preventive Health AI",
    "vision.pill5": "Patient-centered Systems",
    "vision.pill6": "Scalable Impact",
    "projects.eyebrow": "Project Showcase",
    "projects.title": "Our presentation platform for health-first innovation.",
    "projects.body":
      "We build and evolve our own products in-house, with no external collaboration. Two platforms are established, one is in active development, and one is a future vision.",
    "projects.signal": "Independent Studio",
    "projects.visit": "Visit",
    "projects.sanivivo.title": "Sani Vivo",
    "projects.sanivivo.body":
      "A living knowledge base that translates complex health insights into everyday, preventive action.",
    "projects.sanivivo.tag1": "Knowledge Base",
    "projects.sanivivo.tag2": "Preventive Care",
    "projects.sanivivo.tag3": "Public Health",
    "projects.sanivivo.point1": "Dynamic evidence cards curated by specialists",
    "projects.sanivivo.point2": "Localized guidance for daily routines",
    "projects.sanivivo.point3": "Trust layer built for clarity and accessibility",
    "projects.kyo.title": "Know Yourself Online",
    "projects.kyo.body":
      "A mental health platform for psychological tests, self-discovery, and guided insights with a calm, caring experience.",
    "projects.kyo.tag1": "Mental Health",
    "projects.kyo.tag2": "Psychological Tests",
    "projects.kyo.tag3": "Self Insight",
    "projects.kyo.point1": "Clinically reviewed assessments and scoring",
    "projects.kyo.point2": "Visual progress map for emotional patterns",
    "projects.kyo.point3": "Private, secure, and stigma-free experience",
    "projects.review.title": "Review",
    "projects.review.body":
      "Our current project: a trusted review hub for health gadgets, separating hype from real-world impact.",
    "projects.review.tag1": "Health Gadgets",
    "projects.review.tag2": "Evidence-led Reviews",
    "projects.review.tag3": "Consumer Trust",
    "projects.review.point1": "Side-by-side comparisons with clarity",
    "projects.review.point2": "Signal-based scoring for daily usefulness",
    "projects.review.point3": "Designed for transparency and confidence",
    "projects.sanihealth.title": "Sanio",
    "projects.sanihealth.body":
      "A future life-extension companion that tracks the metrics of daily vitality, longevity, and resilience with gentle guidance.",
    "projects.sanihealth.tag1": "Life Metrics",
    "projects.sanihealth.tag2": "Longevity",
    "projects.sanihealth.tag3": "Vitality Tracking",
    "projects.sanihealth.point1":
      "Personal life dashboards built from meaningful signals",
    "projects.sanihealth.point2":
      "Trends that reveal how your health evolves over time",
    "projects.sanihealth.point3": "Designed to feel inspiring, not clinical",
    "projects.meta.established": "Established: 2",
    "projects.meta.current": "Current: 1",
    "projects.meta.future": "Future: 1",
    "projects.marquee1": "Rasa Project Showcase",
    "projects.marquee2": "Independent Health Studio",
    "projects.marquee3": "Human-Centered Systems",
    "lab.title": "Rasa Creative Lab",
    "lab.body":
      "We are a startup studio with a health-first mission. Our lab combines strategy, brand, product, and deep-tech experimentation into one creative engine.",
    "lab.card1.title": "Explore",
    "lab.card1.body":
      "We map unmet needs in the health industry and build speculative prototypes.",
    "lab.card2.title": "Incubate",
    "lab.card2.body":
      "We build and scale our own startups with a rigorous maker’s mindset.",
    "lab.card3.title": "Launch",
    "lab.card3.body":
      "We deliver products that feel cinematic, but behave with medical precision.",
    "about.eyebrow": "About Us",
    "about.title": "A focused studio shaping health futures.",
    "about.body":
      "Rasa is an independent creative lab dedicated to building health-first products. We work with deep research, elegant systems, and a long-term view of human well-being.",
    "about.missionTitle": "Our Mission",
    "about.missionBody":
      "Design living tools that elevate health decisions, from daily habits to life-scale outcomes.",
    "about.membersTitle": "Members",
    "about.member1Role": "Health Insight & Research Lead",
    "about.member2Role": "Founder & Studio Director",
    "about.member3Role": "Research Strategy Director",
    "about.member4Role": "Technology & Platform Lead",
    "about.member5Role": "Product Experience Director",
    "contact.title": "Let’s build the future of health",
    "contact.body":
      "Tell us your challenge or idea. We’ll respond within 48 hours.",
    "contact.emailLabel": "Email",
    "contact.studioLabel": "Studio",
    "contact.studioValue": "Rasa Creative Lab",
    "contact.focusLabel": "Focus",
    "contact.focusValue": "Health Industry Startups",
    footer: "© 2026 Rasa — Creative Lab for Health Startups",
    "badge.madeIn": "Made in Germany",
  },
  de: {
    "nav.menu": "Menü",
    "nav.vision": "Vision",
    "nav.projects": "Projekt-Schaufenster",
    "nav.about": "Über uns",
    "nav.lab": "Labor",
    "nav.contact": "Kontakt",
    "hero.tag": "Kreativlabor • Health-Startups • Zukunftssysteme",
    "hero.title": "Wir gestalten lebendige Erlebnisse für die Gesundheitsbranche.",
    "hero.lead":
      "Rasa ist ein Kreativlabor, das mutige, menschenzentrierte Startups aufbaut. Wir verbinden Wissenschaft, Kunst und Technologie zu etwas Lebendigem.",
    "hero.ctaPrimary": "Projekte entdecken",
    "hero.ctaGhost": "Portfolio ansehen",
    "vision.title": "Unsere Vision",
    "vision.body":
      "Wir bauen Health-Startups mit einer Creator-Mentalität: schnelles Experimentieren, präzise Empathie und Systeme, die wie lebende Organismen wachsen.",
    "vision.pill1": "Bio-adaptives UX",
    "vision.pill2": "Verhaltensdesign",
    "vision.pill3": "Care-Tech-Plattformen",
    "vision.pill4": "Präventive Gesundheits-KI",
    "vision.pill5": "Patientenzentrierte Systeme",
    "vision.pill6": "Skalierbare Wirkung",
    "projects.eyebrow": "Projekt-Schaufenster",
    "projects.title": "Unsere Präsentationsplattform für Health-Innovation.",
    "projects.body":
      "Wir entwickeln unsere eigenen Produkte intern, ohne externe Zusammenarbeit. Zwei Plattformen sind etabliert, eine ist in aktiver Entwicklung, eine ist Zukunftsvision.",
    "projects.signal": "Unabhängiges Studio",
    "projects.visit": "Besuchen",
    "projects.sanivivo.title": "Sani Vivo",
    "projects.sanivivo.body":
      "Eine lebendige Wissensbasis, die komplexe Gesundheitsinfos in tägliche Präventionsimpulse übersetzt.",
    "projects.sanivivo.tag1": "Wissensbasis",
    "projects.sanivivo.tag2": "Prävention",
    "projects.sanivivo.tag3": "Öffentliche Gesundheit",
    "projects.sanivivo.point1": "Dynamische Evidenzkarten von Fachleuten kuratiert",
    "projects.sanivivo.point2": "Lokalisierte Routinen für den Alltag",
    "projects.sanivivo.point3": "Vertrauensschicht für Klarheit und Zugänglichkeit",
    "projects.kyo.title": "Know Yourself Online",
    "projects.kyo.body":
      "Eine Mental-Health-Plattform für psychologische Tests, Selbsterkenntnis und sanfte Begleitung.",
    "projects.kyo.tag1": "Mentale Gesundheit",
    "projects.kyo.tag2": "Psychologische Tests",
    "projects.kyo.tag3": "Selbsterkenntnis",
    "projects.kyo.point1": "Klinisch geprüfte Tests und Auswertung",
    "projects.kyo.point2": "Visuelle Fortschrittskarte für emotionale Muster",
    "projects.kyo.point3": "Privat, sicher und stigmafrei",
    "projects.review.title": "Review",
    "projects.review.body":
      "Aktuelles Projekt: ein vertrauenswürdiges Review-Hub für Gesundheitsgeräte, das Hype von realer Wirkung trennt.",
    "projects.review.tag1": "Gesundheitsgeräte",
    "projects.review.tag2": "Evidenzbasierte Reviews",
    "projects.review.tag3": "Verbrauchervertrauen",
    "projects.review.point1": "Direkte Vergleiche mit Klarheit",
    "projects.review.point2": "Signalbasiertes Scoring für Alltagstauglichkeit",
    "projects.review.point3": "Transparenz und Vertrauen im Fokus",
    "projects.sanihealth.title": "Sanio",
    "projects.sanihealth.body":
      "Ein zukünftiger Life-Extension-Begleiter, der tägliche Vitalität, Langlebigkeit und Resilienz sanft sichtbar macht.",
    "projects.sanihealth.tag1": "Lebensmetriken",
    "projects.sanihealth.tag2": "Langlebigkeit",
    "projects.sanihealth.tag3": "Vitalitäts-Tracking",
    "projects.sanihealth.point1": "Persönliche Dashboards aus sinnvollen Signalen",
    "projects.sanihealth.point2": "Trends, die Gesundheitsentwicklung über Zeit zeigen",
    "projects.sanihealth.point3": "Inspirierend gestaltet, nicht klinisch",
    "projects.meta.established": "Etabliert: 2",
    "projects.meta.current": "Aktuell: 1",
    "projects.meta.future": "Zukunft: 1",
    "projects.marquee1": "Rasa Projekt-Schaufenster",
    "projects.marquee2": "Unabhängiges Health-Studio",
    "projects.marquee3": "Human-Centered Systems",
    "lab.title": "Rasa Creative Lab",
    "lab.body":
      "Wir sind ein Startup-Studio mit Health-Fokus. Unser Labor verbindet Strategie, Marke, Produkt und Deep-Tech zu einem kreativen Motor.",
    "lab.card1.title": "Erkunden",
    "lab.card1.body":
      "Wir kartieren unerfüllte Bedürfnisse im Gesundheitsbereich und bauen spekulative Prototypen.",
    "lab.card2.title": "Inkubieren",
    "lab.card2.body": "Wir bauen und skalieren eigene Startups mit Machergeist.",
    "lab.card3.title": "Launchen",
    "lab.card3.body":
      "Wir liefern Produkte, die cineastisch wirken und medizinisch präzise sind.",
    "about.eyebrow": "Über uns",
    "about.title": "Ein fokussiertes Studio für Gesundheitszukunft.",
    "about.body":
      "Rasa ist ein unabhängiges Kreativlabor für health-first Produkte. Wir verbinden Forschung, elegante Systeme und eine langfristige Perspektive.",
    "about.missionTitle": "Unsere Mission",
    "about.missionBody":
      "Lebendige Werkzeuge entwerfen, die Gesundheitsentscheidungen vom Alltag bis zum Lebensverlauf stärken.",
    "about.membersTitle": "Mitglieder",
    "about.member1Role": "Leitung Health-Insights & Forschung",
    "about.member2Role": "Gründer & Studioleitung",
    "about.member3Role": "Direktion Forschungsstrategie",
    "about.member4Role": "Leitung Technologie & Plattform",
    "about.member5Role": "Direktion Produkterlebnis",
    "contact.title": "Gemeinsam die Zukunft der Gesundheit bauen",
    "contact.body":
      "Erzählen Sie uns Ihre Idee. Wir antworten innerhalb von 48 Stunden.",
    "contact.emailLabel": "E-Mail",
    "contact.studioLabel": "Studio",
    "contact.studioValue": "Rasa Creative Lab",
    "contact.focusLabel": "Fokus",
    "contact.focusValue": "Health-Industry-Startups",
    footer: "© 2026 Rasa — Creative Lab für Health-Startups",
    "badge.madeIn": "Hergestellt in Deutschland",
  },
  fr: {
    "nav.menu": "Menu",
    "nav.vision": "Vision",
    "nav.projects": "Vitrine des projets",
    "nav.about": "À propos",
    "nav.lab": "Lab",
    "nav.contact": "Contact",
    "hero.tag": "Laboratoire créatif • Startups santé • Systèmes futurs",
    "hero.title":
      "Nous concevons des expériences vivantes pour l’industrie de la santé.",
    "hero.lead":
      "Rasa est un laboratoire créatif qui construit des startups audacieuses et centrées sur l’humain. Nous fusionnons science, art et technologie.",
    "hero.ctaPrimary": "Découvrir les projets",
    "hero.ctaGhost": "Voir le portfolio",
    "vision.title": "Notre vision",
    "vision.body":
      "Nous créons des startups santé avec l’esprit créateur : expérimentation rapide, empathie précise et systèmes évolutifs.",
    "vision.pill1": "UX bio-adaptatif",
    "vision.pill2": "Design comportemental",
    "vision.pill3": "Plateformes care-tech",
    "vision.pill4": "IA santé préventive",
    "vision.pill5": "Systèmes centrés patient",
    "vision.pill6": "Impact scalable",
    "projects.eyebrow": "Vitrine des projets",
    "projects.title":
      "Notre plateforme de présentation pour l’innovation santé.",
    "projects.body":
      "Nous développons nos produits en interne, sans collaboration externe. Deux plateformes sont établies, une en cours, une en vision future.",
    "projects.signal": "Studio indépendant",
    "projects.visit": "Visiter",
    "projects.sanivivo.title": "Sani Vivo",
    "projects.sanivivo.body":
      "Une base de connaissances vivante qui transforme des insights santé complexes en actions préventives quotidiennes.",
    "projects.sanivivo.tag1": "Base de connaissances",
    "projects.sanivivo.tag2": "Prévention",
    "projects.sanivivo.tag3": "Santé publique",
    "projects.sanivivo.point1": "Cartes d’évidence dynamiques par des spécialistes",
    "projects.sanivivo.point2": "Conseils localisés pour les routines",
    "projects.sanivivo.point3": "Couche de confiance pour clarté et accessibilité",
    "projects.kyo.title": "Know Yourself Online",
    "projects.kyo.body":
      "Plateforme de santé mentale pour tests psychologiques, découverte de soi et guidance bienveillante.",
    "projects.kyo.tag1": "Santé mentale",
    "projects.kyo.tag2": "Tests psychologiques",
    "projects.kyo.tag3": "Auto-connaissance",
    "projects.kyo.point1": "Évaluations cliniquement revues",
    "projects.kyo.point2": "Carte visuelle des progrès émotionnels",
    "projects.kyo.point3": "Privé, sécurisé, sans stigmatisation",
    "projects.review.title": "Review",
    "projects.review.body":
      "Projet actuel : un hub d’avis fiable sur les gadgets santé, séparant le hype de l’impact réel.",
    "projects.review.tag1": "Gadgets santé",
    "projects.review.tag2": "Avis fondés sur preuves",
    "projects.review.tag3": "Confiance consommateur",
    "projects.review.point1": "Comparaisons claires côte à côte",
    "projects.review.point2": "Score basé sur les signaux utiles",
    "projects.review.point3": "Transparence et confiance",
    "projects.sanihealth.title": "Sanio",
    "projects.sanihealth.body":
      "Un compagnon futur pour prolonger la vie, qui suit vitalité, longévité et résilience au quotidien.",
    "projects.sanihealth.tag1": "Métriques de vie",
    "projects.sanihealth.tag2": "Longévité",
    "projects.sanihealth.tag3": "Suivi vitalité",
    "projects.sanihealth.point1": "Tableaux personnels fondés sur des signaux clés",
    "projects.sanihealth.point2": "Tendances qui révèlent l’évolution de la santé",
    "projects.sanihealth.point3": "Inspirant, pas clinique",
    "projects.meta.established": "Établis : 2",
    "projects.meta.current": "Actuel : 1",
    "projects.meta.future": "Futur : 1",
    "projects.marquee1": "Vitrine Rasa",
    "projects.marquee2": "Studio santé indépendant",
    "projects.marquee3": "Systèmes centrés humain",
    "lab.title": "Rasa Creative Lab",
    "lab.body":
      "Studio de startups avec mission santé. Notre labo unit stratégie, marque, produit et deep-tech.",
    "lab.card1.title": "Explorer",
    "lab.card1.body":
      "Nous cartographions les besoins non satisfaits et prototypons.",
    "lab.card2.title": "Incuber",
    "lab.card2.body": "Nous créons et faisons grandir nos propres startups.",
    "lab.card3.title": "Lancer",
    "lab.card3.body":
      "Des produits cinématiques avec une précision médicale.",
    "about.eyebrow": "À propos",
    "about.title": "Un studio focalisé sur l’avenir de la santé.",
    "about.body":
      "Rasa est un laboratoire créatif indépendant dédié aux produits health-first. Nous travaillons avec recherche profonde et systèmes élégants.",
    "about.missionTitle": "Notre mission",
    "about.missionBody":
      "Concevoir des outils vivants qui élèvent les décisions santé, du quotidien aux grands horizons.",
    "about.membersTitle": "Membres",
    "about.member1Role": "Responsable insights & recherche santé",
    "about.member2Role": "Fondatrice/fondateur & direction studio",
    "about.member3Role": "Direction stratégie de recherche",
    "about.member4Role": "Direction technologie & plateforme",
    "about.member5Role": "Direction expérience produit",
    "contact.title": "Construisons le futur de la santé",
    "contact.body": "Parlez-nous de votre idée. Réponse sous 48 h.",
    "contact.emailLabel": "Email",
    "contact.studioLabel": "Studio",
    "contact.studioValue": "Rasa Creative Lab",
    "contact.focusLabel": "Focus",
    "contact.focusValue": "Startups santé",
    footer: "© 2026 Rasa — Creative Lab pour startups santé",
    "badge.madeIn": "Fabriqué en Allemagne",
  },
  it: {
    "nav.menu": "Menu",
    "nav.vision": "Visione",
    "nav.projects": "Vetrina progetti",
    "nav.about": "Chi siamo",
    "nav.lab": "Lab",
    "nav.contact": "Contatto",
    "hero.tag": "Laboratorio creativo • Startup salute • Sistemi futuri",
    "hero.title":
      "Progettiamo esperienze vive per l’industria della salute.",
    "hero.lead":
      "Rasa è un laboratorio creativo che costruisce startup audaci e umane. Uniamo scienza, arte e tecnologia.",
    "hero.ctaPrimary": "Esplora i progetti",
    "hero.ctaGhost": "Vedi il portfolio",
    "vision.title": "La nostra visione",
    "vision.body":
      "Creiamo startup health-first con mentalità creativa: sperimentazione rapida, empatia precisa e sistemi che evolvono.",
    "vision.pill1": "UX bio-adattiva",
    "vision.pill2": "Design comportamentale",
    "vision.pill3": "Piattaforme care-tech",
    "vision.pill4": "IA salute preventiva",
    "vision.pill5": "Sistemi patient-centric",
    "vision.pill6": "Impatto scalabile",
    "projects.eyebrow": "Vetrina progetti",
    "projects.title": "La nostra piattaforma di presentazione health-first.",
    "projects.body":
      "Sviluppiamo prodotti internamente senza collaborazioni esterne. Due piattaforme sono mature, una in sviluppo, una visione futura.",
    "projects.signal": "Studio indipendente",
    "projects.visit": "Visita",
    "projects.sanivivo.title": "Sani Vivo",
    "projects.sanivivo.body":
      "Una knowledge base viva che traduce insight complessi in azioni preventive quotidiane.",
    "projects.sanivivo.tag1": "Knowledge Base",
    "projects.sanivivo.tag2": "Cura preventiva",
    "projects.sanivivo.tag3": "Salute pubblica",
    "projects.sanivivo.point1": "Schede dinamiche curate da specialisti",
    "projects.sanivivo.point2": "Indicazioni locali per le routine quotidiane",
    "projects.sanivivo.point3": "Layer di fiducia per chiarezza e accessibilità",
    "projects.kyo.title": "Know Yourself Online",
    "projects.kyo.body":
      "Piattaforma di salute mentale per test psicologici e auto-scoperta.",
    "projects.kyo.tag1": "Salute mentale",
    "projects.kyo.tag2": "Test psicologici",
    "projects.kyo.tag3": "Auto-consapevolezza",
    "projects.kyo.point1": "Valutazioni cliniche con punteggio",
    "projects.kyo.point2": "Mappa visiva dei progressi emotivi",
    "projects.kyo.point3": "Privato, sicuro, senza stigma",
    "projects.review.title": "Review",
    "projects.review.body":
      "Progetto attuale: hub di recensioni per gadget salute, separando hype e impatto reale.",
    "projects.review.tag1": "Gadget salute",
    "projects.review.tag2": "Recensioni basate su prove",
    "projects.review.tag3": "Fiducia dei consumatori",
    "projects.review.point1": "Confronti chiari affiancati",
    "projects.review.point2": "Punteggio basato su segnali utili",
    "projects.review.point3": "Trasparenza e fiducia",
    "projects.sanihealth.title": "Sanio",
    "projects.sanihealth.body":
      "Un futuro compagno per la longevità che segue vitalità, resilienza e durata della vita.",
    "projects.sanihealth.tag1": "Metriche di vita",
    "projects.sanihealth.tag2": "Longevità",
    "projects.sanihealth.tag3": "Tracking vitalità",
    "projects.sanihealth.point1": "Dashboard personali da segnali significativi",
    "projects.sanihealth.point2": "Trend che rivelano l’evoluzione della salute",
    "projects.sanihealth.point3": "Ispirante, non clinico",
    "projects.meta.established": "Stabili: 2",
    "projects.meta.current": "Attuale: 1",
    "projects.meta.future": "Futuro: 1",
    "projects.marquee1": "Vetrina Rasa",
    "projects.marquee2": "Studio salute indipendente",
    "projects.marquee3": "Sistemi centrati sull’uomo",
    "lab.title": "Rasa Creative Lab",
    "lab.body":
      "Startup studio con missione salute. Uniamo strategia, brand, prodotto e deep-tech.",
    "lab.card1.title": "Esplora",
    "lab.card1.body": "Individuiamo bisogni e creiamo prototipi.",
    "lab.card2.title": "Incuba",
    "lab.card2.body": "Costruiamo e scalamo le nostre startup.",
    "lab.card3.title": "Lancia",
    "lab.card3.body":
      "Prodotti cinematografici con precisione medica.",
    "about.eyebrow": "Chi siamo",
    "about.title": "Uno studio focalizzato sul futuro della salute.",
    "about.body":
      "Rasa è un laboratorio creativo indipendente dedicato a prodotti health-first. Uniamo ricerca profonda e sistemi eleganti.",
    "about.missionTitle": "La nostra missione",
    "about.missionBody":
      "Progettare strumenti vivi che elevano le decisioni di salute, dal quotidiano al lungo termine.",
    "about.membersTitle": "Membri",
    "about.member1Role": "Responsabile insight & ricerca salute",
    "about.member2Role": "Founder & direzione studio",
    "about.member3Role": "Direzione strategia di ricerca",
    "about.member4Role": "Responsabile tecnologia & piattaforma",
    "about.member5Role": "Direzione esperienza prodotto",
    "contact.title": "Costruiamo il futuro della salute",
    "contact.body": "Raccontaci la tua idea. Risposta in 48 ore.",
    "contact.emailLabel": "Email",
    "contact.studioLabel": "Studio",
    "contact.studioValue": "Rasa Creative Lab",
    "contact.focusLabel": "Focus",
    "contact.focusValue": "Startup salute",
    footer: "© 2026 Rasa — Creative Lab per startup salute",
    "badge.madeIn": "Prodotto in Germania",
  },
  es: {
    "nav.menu": "Menú",
    "nav.vision": "Visión",
    "nav.projects": "Vitrina de proyectos",
    "nav.about": "Acerca de",
    "nav.lab": "Lab",
    "nav.contact": "Contacto",
    "hero.tag": "Laboratorio creativo • Startups salud • Sistemas futuros",
    "hero.title":
      "Diseñamos experiencias vivas para la industria de la salud.",
    "hero.lead":
      "Rasa es un laboratorio creativo que construye startups audaces y humanas. Unimos ciencia, arte y tecnología.",
    "hero.ctaPrimary": "Explorar proyectos",
    "hero.ctaGhost": "Ver portafolio",
    "vision.title": "Nuestra visión",
    "vision.body":
      "Creamos startups health-first con mentalidad creadora: experimentación rápida, empatía precisa y sistemas que evolucionan.",
    "vision.pill1": "UX bio-adaptativo",
    "vision.pill2": "Diseño conductual",
    "vision.pill3": "Plataformas care-tech",
    "vision.pill4": "IA de salud preventiva",
    "vision.pill5": "Sistemas centrados en el paciente",
    "vision.pill6": "Impacto escalable",
    "projects.eyebrow": "Vitrina de proyectos",
    "projects.title": "Nuestra plataforma de presentación health-first.",
    "projects.body":
      "Desarrollamos nuestros productos internamente, sin colaboración externa. Dos plataformas están consolidadas, una en desarrollo y una visión futura.",
    "projects.signal": "Estudio independiente",
    "projects.visit": "Visitar",
    "projects.sanivivo.title": "Sani Vivo",
    "projects.sanivivo.body":
      "Una base de conocimiento viva que transforma insights complejos en acciones preventivas diarias.",
    "projects.sanivivo.tag1": "Base de conocimiento",
    "projects.sanivivo.tag2": "Cuidado preventivo",
    "projects.sanivivo.tag3": "Salud pública",
    "projects.sanivivo.point1": "Tarjetas de evidencia curadas por especialistas",
    "projects.sanivivo.point2": "Guías localizadas para rutinas diarias",
    "projects.sanivivo.point3": "Capa de confianza para claridad y accesibilidad",
    "projects.kyo.title": "Know Yourself Online",
    "projects.kyo.body":
      "Plataforma de salud mental con pruebas psicológicas y autoconocimiento.",
    "projects.kyo.tag1": "Salud mental",
    "projects.kyo.tag2": "Pruebas psicológicas",
    "projects.kyo.tag3": "Auto conocimiento",
    "projects.kyo.point1": "Evaluaciones revisadas clínicamente",
    "projects.kyo.point2": "Mapa visual de progreso emocional",
    "projects.kyo.point3": "Privado, seguro y sin estigma",
    "projects.review.title": "Review",
    "projects.review.body":
      "Proyecto actual: un hub de reseñas para gadgets de salud, separando hype de impacto real.",
    "projects.review.tag1": "Gadgets de salud",
    "projects.review.tag2": "Reseñas con evidencia",
    "projects.review.tag3": "Confianza del consumidor",
    "projects.review.point1": "Comparaciones claras lado a lado",
    "projects.review.point2": "Puntuación basada en señales útiles",
    "projects.review.point3": "Transparencia y confianza",
    "projects.sanihealth.title": "Sanio",
    "projects.sanihealth.body":
      "Un futuro compañero de longevidad que sigue vitalidad, resiliencia y vida diaria.",
    "projects.sanihealth.tag1": "Métricas de vida",
    "projects.sanihealth.tag2": "Longevidad",
    "projects.sanihealth.tag3": "Seguimiento de vitalidad",
    "projects.sanihealth.point1": "Paneles personales con señales significativas",
    "projects.sanihealth.point2": "Tendencias que muestran la evolución de la salud",
    "projects.sanihealth.point3": "Inspirador, no clínico",
    "projects.meta.established": "Establecidos: 2",
    "projects.meta.current": "Actual: 1",
    "projects.meta.future": "Futuro: 1",
    "projects.marquee1": "Vitrina Rasa",
    "projects.marquee2": "Estudio de salud independiente",
    "projects.marquee3": "Sistemas centrados en humanos",
    "lab.title": "Rasa Creative Lab",
    "lab.body":
      "Studio de startups con misión salud. Unimos estrategia, marca, producto y deep-tech.",
    "lab.card1.title": "Explorar",
    "lab.card1.body": "Mapeamos necesidades y creamos prototipos.",
    "lab.card2.title": "Incubar",
    "lab.card2.body": "Construimos y escalamos nuestras propias startups.",
    "lab.card3.title": "Lanzar",
    "lab.card3.body": "Productos cinemáticos con precisión médica.",
    "about.eyebrow": "Acerca de",
    "about.title": "Un estudio enfocado en el futuro de la salud.",
    "about.body":
      "Rasa es un laboratorio creativo independiente dedicado a productos health-first. Unimos investigación profunda y sistemas elegantes.",
    "about.missionTitle": "Nuestra misión",
    "about.missionBody":
      "Diseñar herramientas vivas que elevan decisiones de salud, del día a día al largo plazo.",
    "about.membersTitle": "Miembros",
    "about.member1Role": "Líder de insights e investigación en salud",
    "about.member2Role": "Fundador & director del estudio",
    "about.member3Role": "Dirección de estrategia de investigación",
    "about.member4Role": "Líder de tecnología & plataforma",
    "about.member5Role": "Dirección de experiencia de producto",
    "contact.title": "Construyamos el futuro de la salud",
    "contact.body": "Cuéntanos tu idea. Respondemos en 48 horas.",
    "contact.emailLabel": "Email",
    "contact.studioLabel": "Studio",
    "contact.studioValue": "Rasa Creative Lab",
    "contact.focusLabel": "Enfoque",
    "contact.focusValue": "Startups de salud",
    footer: "© 2026 Rasa — Creative Lab para startups de salud",
    "badge.madeIn": "Hecho en Alemania",
  },
};

const supportedLangs = Object.keys(translations);

const rtlLangs = new Set([]);

function setLanguage(lang, { updateUrl = true } = {}) {
  const safeLang = supportedLangs.includes(lang) ? lang : "en";
  const strings = translations[safeLang] || translations.en;
  document.documentElement.lang = safeLang;
  document.documentElement.dir = rtlLangs.has(safeLang) ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (strings[key]) {
      node.textContent = strings[key];
    }
  });

  if (langSelect) {
    langSelect.value = safeLang;
  }

  if (updateUrl) {
    const url = new URL(window.location.href);
    if (safeLang === "en") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", safeLang);
    }
    window.history.replaceState({}, "", url);
  }
}

if (langSelect) {
  langSelect.addEventListener("change", (e) =>
    setLanguage(e.target.value)
  );
}

const urlLang = new URLSearchParams(window.location.search).get("lang");
setLanguage(urlLang || "en", { updateUrl: false });

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const updateNav = () => {
  if (!nav) return;
  const scrollTop =
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  const docHeight =
    Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    ) - window.innerHeight;
  const ratio = docHeight > 0 ? scrollTop / docHeight : 0;
  const depth = Math.min(Math.max(ratio, 0), 1);
  const scrolled = ratio > 0.03;
  nav.style.setProperty("--nav-bg", scrolled ? depth.toFixed(3) : "0");
  nav.classList.toggle("is-scrolled", scrolled);
};

window.addEventListener("scroll", updateNav, { passive: true });
window.addEventListener("load", updateNav);
window.addEventListener("pageshow", updateNav);
document.addEventListener("DOMContentLoaded", updateNav);
window.addEventListener("resize", updateNav, { passive: true });
requestAnimationFrame(updateNav);

// Failsafe: re-run a few times after load to ensure the class is applied
let navRetry = 0;
const navInterval = setInterval(() => {
  updateNav();
  navRetry += 1;
  if (navRetry > 20) {
    clearInterval(navInterval);
  }
}, 150);

window.addEventListener("mousemove", (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;

  if (heroStage) {
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    heroStage.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
});

window.addEventListener("mouseout", () => {
  glow.style.opacity = "0";
});

window.addEventListener("mouseover", () => {
  glow.style.opacity = "1";
});

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -8;
    const rotateY = ((x / rect.width) - 0.5) * 8;
    card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

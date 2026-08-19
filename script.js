const state = {
  lang: localStorage.getItem('ebogo-lang') || 'fr',
  priceTab: 'canoe',
  priceQuery: '',
};

const t = {
  fr: {
    brandSub: 'Escale écotouristique',
    navDiscover: 'Découvrir', navActivities: 'Activités', navPackages: 'Offres', navItineraries: 'Séjours', navPrices: 'Tarifs', navGallery: 'Galerie', navBooking: 'Réserver',
    heroEyebrow: 'Ebogo · Région du Centre · Cameroun',
    heroTitle: 'Là où la nature raconte son histoire.',
    heroText: 'Découvrez le Nyong en pirogue, les sous-bois, les arbres millénaires, les grottes, les campements et les savoirs vivants d’Ebogo.',
    heroBook: 'Réserver une visite', heroOffers: 'Voir les offres',
    statRiver: 'balades en pirogue', statForest: 'sous-bois & grands arbres', statCulture: 'apprentissages locaux',
    quickLocationTitle: 'Localisation', quickLocation: 'Ebogo · Commune de Mengueme · Région du Centre', quickBestForTitle: 'Idéal pour', quickBestFor: 'familles, diaspora, groupes, entreprises',
    discoverEyebrow: 'Découvrir Ebogo',
    discoverTitle: 'Une escale écotouristique entre fleuve, forêt et mémoire.',
    discoverText1: 'Ebogo est une destination de nature située dans la Commune de Mengueme, au cœur de la Région du Centre au Cameroun. Le site offre une immersion dans les paysages du fleuve Nyong, les sous-bois, les grottes, les arbres remarquables et les campements.',
    discoverText2: 'Le visiteur peut vivre une balade douce en pirogue, marcher en forêt avec un guide, découvrir les savoirs locaux, observer la nature, partager un repas, organiser un pique-nique ou préparer une sortie de groupe.',
    noticeTitle: 'À savoir',
    noticeText: 'Selon la saison, certains trajets se poursuivent en pirogue ou à pied. Confirmez toujours votre circuit avant le départ.',
    activitiesEyebrow: 'Expériences', activitiesTitle: 'Que faire à Ebogo ?',
    activitiesLead: 'Des activités pensées pour les familles, les groupes, la diaspora, les touristes locaux et les visiteurs étrangers.',
    packagesEyebrow: 'Offres rapides', packagesTitle: 'Choisissez votre expérience.', packagesLead: 'Ces packs donnent une lecture simple aux visiteurs. Pour les circuits précis, consultez la grille détaillée plus bas.',
    itinerariesEyebrow: 'Séjours conseillés', itinerariesTitle: 'Des parcours prêts à vivre.', itinerariesLead: 'Pour aider les visiteurs à choisir vite, voici trois propositions construites à partir des activités du site.',
    bandEyebrow: 'Immersion Nyong', bandTitle: 'Le fleuve comme chemin, la forêt comme récit.', bandText: 'Ebogo se découvre lentement : le bruit de la pagaie, les reflets du ciel, les rives habitées par la forêt, puis les récits du guide qui donnent sens au paysage.', bandCta: 'Préparer ma visite',
    practicalEyebrow: 'Guide pratique', practicalTitle: 'Préparer une visite confortable et sûre.', practicalText: 'Ebogo est une expérience de nature. La meilleure visite se prépare avec un guide, une tenue adaptée, une confirmation du circuit, du nombre de pirogues et des options repas ou camping.', practicalBook: 'Réserver maintenant', practicalPrices: 'Voir les tarifs',
    pricesEyebrow: 'Grille des services', pricesTitle: 'Tarifs indicatifs', pricesLead: 'Les tarifs ci-dessous reprennent la grille fournie. Certains prix varient selon la saison, la durée, le nombre de personnes et les options choisies.',
    priceSearchLabel: 'Rechercher un service', priceAskQuote: 'Demander un devis',
    tabCanoe: 'Pirogue', tabWalking: 'Pédestre', tabCamping: 'Camping', tabCulture: 'Culture',
    tableService: 'Service', tableDuration: 'Durée', tablePrice: 'Prix', tableBasis: 'Base',
    notePirogueTitle: 'Pirogue', notePirogue: 'Charge normale : 2 adultes + 1 enfant de moins de 6 ans par pirogue.',
    noteGuideTitle: 'Guide', noteGuide: 'Les activités pédestres se font avec un maximum de 5 personnes par guide.',
    noteGroupTitle: 'Groupes', noteGroup: 'Réduction possible de 10% pour les groupes de plus de 10 personnes.',
    galleryEyebrow: 'Galerie', galleryTitle: 'Images d’Ebogo', galleryLead: 'Fleuve, forêt, pirogues, campements, grottes, arbres et scènes culturelles.',
    bookingEyebrow: 'Réservation', bookingTitle: 'Préparer votre visite', bookingLead: 'Remplissez ce formulaire. Il génère un message WhatsApp prêt à envoyer au site touristique d’Ebogo.',
    formName: 'Nom complet', formPeople: 'Nombre de personnes', formDate: 'Date souhaitée', formOffer: 'Offre ou activité', formMeal: 'Repas souhaité ?', formLanguage: 'Langue du guide', formMessage: 'Message complémentaire', formSubmit: 'Envoyer sur WhatsApp',
    mapEyebrow: 'Venir à Ebogo', mapTitle: 'Une destination nature dans la Commune de Mengueme.', mapText: 'Pour organiser votre arrivée, confirmez le point de rendez-vous, l’heure de départ, la disponibilité du guide et les conditions de saison par WhatsApp.', mapCta: 'Ouvrir la carte', stickyBook: 'Réserver',
    contactTitle: 'Contact direct', contactPlace: 'Lieu :',
    faqEyebrow: 'Infos pratiques', faqTitle: 'Avant de venir',
    footerText: 'Escale écotouristique d’Ebogo — nature, fleuve, culture et mémoire.', footerReserve: 'Réservation', footerLocation: 'Localisation',
    perPerson: 'par personne', perCanoe: 'par pirogue', perHour: 'par heure', onRequest: 'sur devis', included: 'inclus', from: 'à partir de',
    bookingDefault: 'Je souhaite réserver une visite à Ebogo.',
    bookingMessage: ({name, people, date, offer, meal, language, msg}) => `Bonjour, je souhaite réserver une visite à Ebogo.%0A%0ANom : ${name}%0ANombre de personnes : ${people}%0ADate souhaitée : ${date || 'à confirmer'}%0AOffre / activité : ${offer}%0ARepas souhaité : ${meal}%0ALangue du guide : ${language}%0AMessage : ${msg || 'Aucune précision supplémentaire'}%0A%0AMerci de me confirmer les disponibilités, le point de rendez-vous et le tarif final.`
  },
  en: {
    brandSub: 'Ecotourism stopover',
    navDiscover: 'Discover', navActivities: 'Activities', navPackages: 'Packages', navItineraries: 'Stays', navPrices: 'Prices', navGallery: 'Gallery', navBooking: 'Book',
    heroEyebrow: 'Ebogo · Centre Region · Cameroon',
    heroTitle: 'Where nature tells its story.',
    heroText: 'Explore the Nyong River by canoe, deep forest paths, giant trees, caves, campsites and the living knowledge of Ebogo.',
    heroBook: 'Book a visit', heroOffers: 'View packages',
    statRiver: 'canoe tours', statForest: 'forest paths & giant trees', statCulture: 'local learning experiences',
    quickLocationTitle: 'Location', quickLocation: 'Ebogo · Mengueme Municipality · Centre Region', quickBestForTitle: 'Best for', quickBestFor: 'families, diaspora, groups, companies',
    discoverEyebrow: 'Discover Ebogo',
    discoverTitle: 'An ecotourism escape between river, forest and memory.',
    discoverText1: 'Ebogo is a nature destination located in Mengueme Municipality, in Cameroon’s Centre Region. The site offers an immersion into the Nyong River landscapes, forest paths, caves, remarkable trees and campsites.',
    discoverText2: 'Visitors can enjoy a peaceful canoe trip, walk through the forest with a guide, discover local knowledge, observe nature, share a meal, organize a picnic or prepare a group outing.',
    noticeTitle: 'Good to know',
    noticeText: 'Depending on the season, some routes continue by canoe or on foot. Always confirm your itinerary before departure.',
    activitiesEyebrow: 'Experiences', activitiesTitle: 'What can you do in Ebogo?',
    activitiesLead: 'Activities designed for families, groups, the diaspora, local tourists and international visitors.',
    packagesEyebrow: 'Quick offers', packagesTitle: 'Choose your experience.', packagesLead: 'These packages make the offer easy to understand. For precise routes, see the detailed price list below.',
    itinerariesEyebrow: 'Suggested stays', itinerariesTitle: 'Ready-to-live itineraries.', itinerariesLead: 'To help visitors choose quickly, here are three proposals built from the site activities.',
    bandEyebrow: 'Nyong immersion', bandTitle: 'The river as a path, the forest as a story.', bandText: 'Ebogo is discovered slowly: the sound of paddles, reflections on the water, forested banks and the guide’s stories that give meaning to the landscape.', bandCta: 'Plan my visit',
    practicalEyebrow: 'Practical guide', practicalTitle: 'Prepare a comfortable and safe visit.', practicalText: 'Ebogo is a nature experience. The best visit is prepared with a guide, suitable clothing, confirmation of the route, number of canoes and meal or camping options.', practicalBook: 'Book now', practicalPrices: 'View prices',
    pricesEyebrow: 'Services list', pricesTitle: 'Indicative prices', pricesLead: 'The prices below are based on the provided service list. Some prices may vary depending on season, duration, group size and selected options.',
    priceSearchLabel: 'Search a service', priceAskQuote: 'Request a quote',
    tabCanoe: 'Canoe', tabWalking: 'Walking', tabCamping: 'Camping', tabCulture: 'Culture',
    tableService: 'Service', tableDuration: 'Duration', tablePrice: 'Price', tableBasis: 'Basis',
    notePirogueTitle: 'Canoe', notePirogue: 'Normal capacity: 2 adults + 1 child under 6 per canoe.',
    noteGuideTitle: 'Guide', noteGuide: 'Walking activities are organized with a maximum of 5 people per tourist guide.',
    noteGroupTitle: 'Groups', noteGroup: 'A 10% discount may apply for groups of more than 10 people.',
    galleryEyebrow: 'Gallery', galleryTitle: 'Images of Ebogo', galleryLead: 'River, forest, canoes, campsites, caves, trees and cultural scenes.',
    bookingEyebrow: 'Booking', bookingTitle: 'Plan your visit', bookingLead: 'Fill in this form. It generates a WhatsApp message ready to send to the Ebogo tourist site.',
    formName: 'Full name', formPeople: 'Number of people', formDate: 'Preferred date', formOffer: 'Package or activity', formMeal: 'Meal requested?', formLanguage: 'Guide language', formMessage: 'Additional message', formSubmit: 'Send on WhatsApp',
    mapEyebrow: 'Getting to Ebogo', mapTitle: 'A nature destination in Mengueme Municipality.', mapText: 'To organize your arrival, confirm the meeting point, departure time, guide availability and seasonal conditions by WhatsApp.', mapCta: 'Open map', stickyBook: 'Book',
    contactTitle: 'Direct contact', contactPlace: 'Place:',
    faqEyebrow: 'Practical info', faqTitle: 'Before you come',
    footerText: 'Ebogo ecotourism stopover — nature, river, culture and memory.', footerReserve: 'Booking', footerLocation: 'Location',
    perPerson: 'per person', perCanoe: 'per canoe', perHour: 'per hour', onRequest: 'custom quote', included: 'included', from: 'from',
    bookingDefault: 'I would like to book a visit to Ebogo.',
    bookingMessage: ({name, people, date, offer, meal, language, msg}) => `Hello, I would like to book a visit to Ebogo.%0A%0AName: ${name}%0ANumber of people: ${people}%0APreferred date: ${date || 'to be confirmed'}%0APackage / activity: ${offer}%0AMeal requested: ${meal}%0AGuide language: ${language}%0AMessage: ${msg || 'No additional details'}%0A%0APlease confirm availability, meeting point and final price.`
  }
};

const activities = [
  {
    img: 'canoe-guide.webp', kicker: {fr: 'Fleuve Nyong', en: 'Nyong River'},
    title: {fr: 'Balades en pirogue', en: 'Canoe tours'},
    text: {fr: 'Naviguez sur le Nyong avec un guide local, entre reflets, sous-bois et récits du paysage.', en: 'Navigate the Nyong with a local guide, between reflections, forest banks and stories of the landscape.'}
  },
  {
    img: 'grotte-sousbois.webp', kicker: {fr: 'Nature', en: 'Nature'},
    title: {fr: 'Grottes & refuges', en: 'Caves & shelters'},
    text: {fr: 'Explorez les grottes, les abris rocheux, la grotte à roussettes et les lieux chargés de mémoire.', en: 'Explore caves, rock shelters, bat caves and places filled with memory.'}
  },
  {
    img: 'giant-tree.webp', kicker: {fr: 'Forêt', en: 'Forest'},
    title: {fr: 'Arbres remarquables', en: 'Remarkable trees'},
    text: {fr: 'Découvrez le Gros Arbre Millénaire, l’Arbre de la Fécondité, les baobabs et les sous-bois.', en: 'Discover the giant ancient tree, the fertility tree, baobabs and forest paths.'}
  },
  {
    img: 'culture-dance.webp', kicker: {fr: 'Culture', en: 'Culture'},
    title: {fr: 'Immersion culturelle', en: 'Cultural immersion'},
    text: {fr: 'Apprenez la pêche traditionnelle, la cuisine locale, la navigation, les contes et les savoirs du village.', en: 'Learn traditional fishing, local cooking, navigation, storytelling and village knowledge.'}
  }
];

const packages = [
  { title: {fr:'Découverte Express', en:'Discovery Express'}, duration:{fr:'1h – 1h30', en:'1h – 1h30'}, details:{fr:'Pirogue + sous-bois + boisson', en:'Canoe + forest path + drink'}, price:'10 000 FCFA', basis:'perPerson' },
  { title: {fr:'Découverte + Repas', en:'Discovery + Meal'}, duration:{fr:'2h – 2h30', en:'2h – 2h30'}, details:{fr:'Pirogue + repas local + boisson', en:'Canoe + local meal + drink'}, price:'15 000 FCFA', basis:'perPerson' },
  { title: {fr:'Immersion Nyong', en:'Nyong Immersion'}, duration:{fr:'1h30 – 2h', en:'1h30 – 2h'}, details:{fr:'Grande balade + découverte culturelle', en:'Long tour + cultural discovery'}, price:'18 000 FCFA', basis:'perPerson' },
  { title: {fr:'Immersion Complet', en:'Full Immersion'}, duration:{fr:'Demi-journée', en:'Half day'}, details:{fr:'Circuit nature + repas inclus', en:'Nature circuit + meal included'}, price:'25 000 FCFA', basis:'perPerson' },
  { title: {fr:'Groupe / Entreprise', en:'Group / Company'}, duration:{fr:'Sur mesure', en:'Custom'}, details:{fr:'Team building, séminaire, sortie de groupe', en:'Team building, seminar, group visit'}, price:'-10%', basis:'onRequest' },
];


const itineraries = [
  {
    img: 'canoe-guide.webp', duration: {fr:'1h30', en:'1h30'},
    title: {fr:'Première découverte', en:'First discovery'},
    text: {fr:'Balade en pirogue, sous-bois, boisson et première lecture du paysage du Nyong.', en:'Canoe ride, forest path, drink and first interpretation of the Nyong landscape.'},
    steps: {fr:['Accueil au site','Pirogue sur le Nyong','Petit ou grand sous-bois','Retour et photos'], en:['Site welcome','Canoe on the Nyong','Small or large forest path','Return and photos']}
  },
  {
    img: 'grotte-refuge.webp', duration: {fr:'Demi-journée', en:'Half day'},
    title: {fr:'Nature & mémoire', en:'Nature & memory'},
    text: {fr:'Circuit vers les grands arbres, grottes ou rapides, avec récit du guide et option repas local.', en:'Route to giant trees, caves or rapids, with guide storytelling and optional local meal.'},
    steps: {fr:['Départ guidé','Sous-bois ou pirogue selon saison','Site remarquable','Repas ou pause nature'], en:['Guided departure','Forest path or canoe depending on season','Remarkable site','Meal or nature break']}
  },
  {
    img: 'campement.webp', duration: {fr:'Groupe / entreprise', en:'Group / company'},
    title: {fr:'Immersion & team building', en:'Immersion & team building'},
    text: {fr:'Sortie sur mesure avec pirogue, animation culturelle, pique-nique, contes ou activités d’apprentissage.', en:'Custom outing with canoe, cultural animation, picnic, storytelling or learning activities.'},
    steps: {fr:['Programme personnalisé','Guides dédiés','Activités au choix','Devis groupe'], en:['Custom program','Dedicated guides','Activities of choice','Group quote']}
  }
];

const practicalCards = [
  {icon:'🥾', title:{fr:'Tenue conseillée', en:'Recommended outfit'}, text:{fr:'Chaussures confortables, vêtements légers, protection pluie/soleil et tenue adaptée à la marche.', en:'Comfortable shoes, light clothing, rain/sun protection and suitable walking outfit.'}},
  {icon:'🛶', title:{fr:'Sécurité pirogue', en:'Canoe safety'}, text:{fr:'Confirmez le nombre de pirogues, la charge prévue et suivez les consignes du guide.', en:'Confirm the number of canoes, expected capacity and follow the guide instructions.'}},
  {icon:'🍽️', title:{fr:'Repas & groupes', en:'Meals & groups'}, text:{fr:'Les repas, pique-niques, campings et groupes doivent être confirmés avant le départ.', en:'Meals, picnics, camping and groups should be confirmed before departure.'}},
  {icon:'🌿', title:{fr:'Écotourisme', en:'Ecotourism'}, text:{fr:'Respectez la forêt, le fleuve, les guides, les lieux de mémoire et les consignes du site.', en:'Respect the forest, river, guides, memory places and site instructions.'}}
];

const prices = {
  canoe: [
    ['Petit sous-bois', '30 min', '10 000 FCFA', 'perCanoe'],
    ['Grand sous-bois', '01 h', '15 000 FCFA', 'perCanoe'],
    ['Île aux Perroquets', '01 h 30', '13 000 FCFA', 'perCanoe'],
    ['Sous-bois + Arbre de la Fécondité', '01 h', '15 000 FCFA', 'perCanoe'],
    ['Sous-bois + Baobab mythique', '01 h', '20 000 FCFA', 'perCanoe'],
    ['Sous-bois + Gros Arbre Millénaire', '02 h', '20 000 FCFA', 'perCanoe'],
    ['Sous-bois + Village de Campement', '02 h', '25 000 FCFA', 'perCanoe'],
    ['Sous-bois + Gros Arbre + Grotte des pêcheurs', '02 h 10', '25 000 FCFA', 'perCanoe'],
    ['Embouchure Nyong et Sôô + Rapides + retour à pied', '02 h 30', '30 000 FCFA', 'perCanoe'],
    ['Baobab mythique + Gros Arbre + Village de campement', '02 h 45', '40 000 FCFA', 'perCanoe'],
  ],
  walking: [
    ['Simple marche à pied dans le village', 'Variable', '≥ 2 000 FCFA', 'perPerson'],
    ['Visite de la Grotte d’Akomvié', 'Variable', '5 000 FCFA', 'perPerson'],
    ['Visite du Baobab de Bilig', 'Variable', '5 000 FCFA', 'perPerson'],
    ['Chasse et observation des papillons', '01 h', '5 000 FCFA + achat', 'perHour'],
    ['Observation d’oiseaux', '01 h', '5 000 FCFA', 'perHour'],
    ['Visite des champs', '01 h', '5 000 FCFA', 'perHour'],
    ['Journée de pêche', 'Minimum 02 h', '10 000 FCFA', 'perPerson'],
    ['Pêche au Mouliné', 'Minimum 02 h', '10 000 FCFA', 'perPerson'],
  ],
  camping: [
    ['Séjour dans l’enceinte du site ou du village sans repas', '03 h', '10 000 FCFA', 'pour 10 personnes'],
    ['Camping sans repas pourvu', 'Nuitée', '20 000 FCFA', 'perPerson'],
    ['Repas livré sans boisson', 'Repas', '≥ 7 000 FCFA', 'perPerson'],
    ['Camping à l’île aux Perroquets', 'Nuitée', '25 000 FCFA', 'perPerson'],
    ['Camping au Village de Campement, grottes, gros arbre, etc.', 'Nuitée', '30 000 FCFA', 'perPerson'],
    ['Trois repas livrés sans boisson', 'Journée', '≥ 12 000 FCFA', 'perPerson'],
  ],
  culture: [
    ['Initiation aux méthodes traditionnelles de pêche', 'Session', '5 000 FCFA', 'perPerson'],
    ['Initiation aux techniques culinaires traditionnelles', 'Session', '5 000 FCFA', 'perPerson'],
    ['Initiation à la nage en plein cours d’eau', 'Session', '5 000 FCFA', 'perPerson'],
    ['Initiation à la navigation traditionnelle', 'Session', '5 000 FCFA', 'perPerson'],
    ['Initiation à la cueillette de vin de palme', 'Session', '5 000 FCFA', 'perPerson'],
    ['Initiation à la fabrication du Haa', 'Session', '5 000 FCFA', 'perPerson'],
    ['Cure traditionnelle par les produits de la forêt', 'Sur demande', '5 000 FCFA', 'par maladie'],
    ['Voyance et consultation spirituelle', 'Sur demande', '10 000 FCFA', 'perPerson'],
    ['Biwaren — lavage traditionnel avec produits de la forêt', 'Sur demande', '10 000 FCFA', 'perPerson'],
  ]
};

const priceTranslations = {
  en: {
    'Petit sous-bois': 'Small forest path', 'Grand sous-bois': 'Large forest path', 'Île aux Perroquets': 'Parrot Island',
    'Sous-bois + Arbre de la Fécondité': 'Forest path + Fertility Tree', 'Sous-bois + Baobab mythique': 'Forest path + Mythical Baobab',
    'Sous-bois + Gros Arbre Millénaire': 'Forest path + Giant Ancient Tree', 'Sous-bois + Village de Campement': 'Forest path + Camp Village',
    'Sous-bois + Gros Arbre + Grotte des pêcheurs': 'Forest path + Giant Tree + Fishermen’s Cave',
    'Embouchure Nyong et Sôô + Rapides + retour à pied': 'Nyong and Sôô mouth + rapids + walk back',
    'Baobab mythique + Gros Arbre + Village de campement': 'Mythical Baobab + Giant Tree + Camp Village',
    'Simple marche à pied dans le village': 'Simple walk in the village', 'Visite de la Grotte d’Akomvié': 'Akomvié Cave visit', 'Visite du Baobab de Bilig': 'Bilig Baobab visit',
    'Chasse et observation des papillons': 'Butterfly watching and collection', 'Observation d’oiseaux': 'Birdwatching', 'Visite des champs': 'Fields visit',
    'Journée de pêche': 'Fishing day', 'Pêche au Mouliné': 'Spinning fishing',
    'Séjour dans l’enceinte du site ou du village sans repas': 'Stay within the site or village without meals', 'Camping sans repas pourvu': 'Camping without meals', 'Repas livré sans boisson': 'Delivered meal without drink',
    'Camping à l’île aux Perroquets': 'Camping on Parrot Island', 'Camping au Village de Campement, grottes, gros arbre, etc.': 'Camping at the Camp Village, caves, giant tree, etc.', 'Trois repas livrés sans boisson': 'Three delivered meals without drinks',
    'Initiation aux méthodes traditionnelles de pêche': 'Introduction to traditional fishing methods', 'Initiation aux techniques culinaires traditionnelles': 'Introduction to traditional cooking techniques',
    'Initiation à la nage en plein cours d’eau': 'Introduction to open-river swimming', 'Initiation à la navigation traditionnelle': 'Introduction to traditional navigation',
    'Initiation à la cueillette de vin de palme': 'Introduction to palm wine harvesting', 'Initiation à la fabrication du Haa': 'Introduction to traditional Haa making',
    'Cure traditionnelle par les produits de la forêt': 'Traditional forest-remedy session', 'Voyance et consultation spirituelle': 'Spiritual consultation',
    'Biwaren — lavage traditionnel avec produits de la forêt': 'Biwaren — traditional cleansing with forest products',
    'Variable': 'Variable', 'Sur demande': 'On request', 'Session': 'Session', 'Nuitée': 'Overnight', 'Journée': 'Day', 'Repas': 'Meal', 'pour 10 personnes': 'for 10 people', 'par maladie': 'per case'
  }
};

const gallery = [
  ['aerial-nyong.webp', {fr:'Vue aérienne du Nyong', en:'Aerial view of the Nyong'}],
  ['canoe-village.webp', {fr:'Arrivée en pirogue', en:'Arrival by canoe'}],
  ['giant-tree.webp', {fr:'Gros arbre et sous-bois', en:'Giant tree and forest'}],
  ['culture-river.webp', {fr:'Scène culturelle au bord du fleuve', en:'Cultural scene by the river'}],
  ['grotte-refuge.webp', {fr:'Refuges naturels', en:'Natural shelters'}],
  ['canoe-reflection.webp', {fr:'Reflets du soir', en:'Evening reflections'}],
  ['campement.webp', {fr:'Campements au bord de l’eau', en:'Riverside campsites'}],
  ['rapids.webp', {fr:'Rapides et paysage fluvial', en:'Rapids and river landscape'}],
];

const faqs = [
  {q:{fr:'Faut-il réserver ?', en:'Should I book in advance?'}, a:{fr:'Oui. La réservation par WhatsApp permet de confirmer le guide, le circuit, la saison, le nombre de pirogues et le tarif final.', en:'Yes. Booking by WhatsApp helps confirm the guide, route, season, number of canoes and final price.'}},
  {q:{fr:'Combien de personnes par pirogue ?', en:'How many people per canoe?'}, a:{fr:'La charge normale indiquée est de deux adultes et un enfant de moins de 6 ans par pirogue.', en:'The normal capacity indicated is two adults and one child under 6 per canoe.'}},
  {q:{fr:'Peut-on venir en groupe ?', en:'Can groups visit?'}, a:{fr:'Oui. Les groupes, entreprises et séminaires peuvent demander une offre personnalisée. Une réduction de 10% peut s’appliquer dès 10 personnes.', en:'Yes. Groups, companies and seminars can request a custom offer. A 10% discount may apply from 10 people.'}},
  {q:{fr:'Que faut-il prévoir ?', en:'What should I bring?'}, a:{fr:'Prévoir chaussures confortables, eau, protection contre le soleil ou la pluie, vêtements adaptés et confirmation de votre réservation.', en:'Bring comfortable shoes, water, sun or rain protection, suitable clothing and your booking confirmation.'}},
];

function tr(key) { return t[state.lang][key] || t.fr[key] || key; }
function localize(value) { return typeof value === 'object' ? value[state.lang] : value; }
function maybeTranslate(text) { return state.lang === 'en' ? (priceTranslations.en[text] || text) : text; }
function basisLabel(key) { return t[state.lang][key] || maybeTranslate(key); }

function applyTranslations() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[state.lang][key]) el.textContent = t[state.lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === state.lang));
  renderAll();
}

function renderActivities() {
  const target = document.getElementById('activitiesGrid');
  target.innerHTML = activities.map(item => `
    <article class="activity-card">
      <img src="assets/images/${item.img}" alt="${localize(item.title)}" loading="lazy">
      <div class="card-body">
        <span class="card-kicker">${localize(item.kicker)}</span>
        <h3>${localize(item.title)}</h3>
        <p>${localize(item.text)}</p>
      </div>
    </article>
  `).join('');
}

function renderPackages() {
  const target = document.getElementById('packagesGrid');
  target.innerHTML = packages.map(item => `
    <article class="package-card">
      <div>
        <h3>${localize(item.title)}</h3>
        <div class="package-meta">${localize(item.duration)}<br>${localize(item.details)}</div>
      </div>
      <div class="package-price">${item.price}<span>${basisLabel(item.basis)}</span></div>
    </article>
  `).join('');
}

function renderItineraries() {
  const target = document.getElementById('itineraryGrid');
  if (!target) return;
  target.innerHTML = itineraries.map(item => `
    <article class="itinerary-card">
      <img src="assets/images/${item.img}" alt="${localize(item.title)}" loading="lazy">
      <div class="itinerary-body">
        <span>${localize(item.duration)}</span>
        <h3>${localize(item.title)}</h3>
        <p>${localize(item.text)}</p>
        <ul>${localize(item.steps).map(step => `<li>${step}</li>`).join('')}</ul>
        <a href="#booking" class="mini-link">${state.lang === 'fr' ? 'Réserver ce parcours' : 'Book this itinerary'}</a>
      </div>
    </article>
  `).join('');
}

function renderPracticalCards() {
  const target = document.getElementById('practicalCards');
  if (!target) return;
  target.innerHTML = practicalCards.map(item => `
    <article class="practical-card"><div class="practical-icon">${item.icon}</div><h3>${localize(item.title)}</h3><p>${localize(item.text)}</p></article>
  `).join('');
}

function renderPrices() {
  const target = document.getElementById('pricesTable');
  const q = state.priceQuery.trim().toLowerCase();
  const rows = prices[state.priceTab].filter(row => !q || row.join(' ').toLowerCase().includes(q) || maybeTranslate(row[0]).toLowerCase().includes(q));
  target.innerHTML = rows.map(row => `
    <tr>
      <td>${maybeTranslate(row[0])}</td>
      <td>${maybeTranslate(row[1])}</td>
      <td>${row[2]}</td>
      <td>${basisLabel(row[3])}</td>
    </tr>
  `).join('') || `<tr><td colspan="4">${state.lang === 'fr' ? 'Aucun service trouvé.' : 'No service found.'}</td></tr>`;
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === state.priceTab));
}

function renderGallery() {
  const target = document.getElementById('galleryGrid');
  target.innerHTML = gallery.map(([img, label]) => `
    <figure class="gallery-item" data-img="${img}" data-caption="${localize(label)}">
      <img src="assets/images/${img}" alt="${localize(label)}" loading="lazy">
      <figcaption class="gallery-caption">${localize(label)}</figcaption>
    </figure>
  `).join('');
  target.querySelectorAll('.gallery-item').forEach(item => item.addEventListener('click', () => openLightbox(item.dataset.img, item.dataset.caption)));
}

function renderFaqs() {
  const target = document.getElementById('faqGrid');
  target.innerHTML = faqs.map(item => `
    <article class="faq-card"><h3>${localize(item.q)}</h3><p>${localize(item.a)}</p></article>
  `).join('');
}

function renderBookingOptions() {
  const target = document.getElementById('visitorOffer');
  const packageOptions = packages.map(item => localize(item.title));
  const priceOptions = prices.canoe.slice(0,6).map(row => maybeTranslate(row[0]));
  target.innerHTML = [...packageOptions, ...priceOptions].map(x => `<option value="${x}">${x}</option>`).join('');
}

function renderAll(){ renderActivities(); renderPackages(); renderItineraries(); renderPracticalCards(); renderPrices(); renderGallery(); renderFaqs(); renderBookingOptions(); }

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    state.lang = btn.dataset.lang;
    localStorage.setItem('ebogo-lang', state.lang);
    
function openLightbox(img, caption) {
  const box = document.getElementById('lightbox');
  if (!box) return;
  document.getElementById('lightboxImg').src = `assets/images/${img}`;
  document.getElementById('lightboxCaption').textContent = caption;
  box.classList.add('open');
  box.setAttribute('aria-hidden', 'false');
}

const lightbox = document.getElementById('lightbox');
if (lightbox) {
  lightbox.addEventListener('click', (event) => {
    if (event.target.id === 'lightbox' || event.target.classList.contains('lightbox-close')) {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
    }
  });
}

applyTranslations();
  });
});

document.querySelectorAll('.tab-btn').forEach(btn => btn.addEventListener('click', () => {
  state.priceTab = btn.dataset.tab;
  renderPrices();
}));

const priceSearch = document.getElementById('priceSearch');
if (priceSearch) {
  priceSearch.addEventListener('input', () => {
    state.priceQuery = priceSearch.value;
    renderPrices();
  });
}

const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => menu.classList.remove('open')));

document.getElementById('bookingForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('visitorName').value.trim();
  const people = document.getElementById('visitorPeople').value;
  const date = document.getElementById('visitorDate').value;
  const offer = document.getElementById('visitorOffer').value;
  const meal = document.getElementById('visitorMeal').value;
  const language = document.getElementById('visitorLanguage').value;
  const msg = document.getElementById('visitorMessage').value.trim();
  const body = t[state.lang].bookingMessage({name, people, date, offer, meal, language, msg});
  window.open(`https://wa.me/237677379697?text=${body}`, '_blank', 'noopener,noreferrer');
});


function openLightbox(img, caption) {
  const box = document.getElementById('lightbox');
  if (!box) return;
  document.getElementById('lightboxImg').src = `assets/images/${img}`;
  document.getElementById('lightboxCaption').textContent = caption;
  box.classList.add('open');
  box.setAttribute('aria-hidden', 'false');
}

const lightbox = document.getElementById('lightbox');
if (lightbox) {
  lightbox.addEventListener('click', (event) => {
    if (event.target.id === 'lightbox' || event.target.classList.contains('lightbox-close')) {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
    }
  });
}

applyTranslations();

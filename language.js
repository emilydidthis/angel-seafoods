// Our Delivery
// English or Ingles?
// French or Francais?
// Toll-Free
// All Rights Reserved
// Load English in

const translations = {
    en: {
        nav_about: "About",
        nav_features: "Features",
        nav_delivery: "Delivery",
        nav_processing: "Processing",
        nav_contact: "Contact",
        nav_toggle: "Français",
        hero_quality: "Quality",
        hero_reputation: "Reputation",
        hero_service: "Service",
        about_title: "Asian Wholesale <br> Goods Since 1986",
        about_text: "Angel Seafoods has been delivering fresh seafood across Canada since 1986. As a family-run business in its 3rd generation, we continue to uphold our passion for exceptional quality and service.",
        fresh_seafood_title: "Fresh Seafood",
        fresh_seafood_text: "Angel Seafoods has an understanding of 'sashimi grade' like no other as the majority of the premium-grade products we source are intended to be served in a raw application.",
        frozen_seafood_title: "Frozen Seafood",
        frozen_seafood_text: "Angel Seafoods has an unmatched understanding of the variety of high-quality frozen seafoods desired by the Japanese food service sector and aligns with suppliers that can match that.",
        dry_goods_title: "Dry Goods",
        dry_goods_text: "Angel Seafoods takes pride in sourcing food products from Japan and other areas of the world, ensuring the quality matches our high standards.",
        kitchen_ware_title: "Kitchen Ware",
        kitchen_ware_text: "We also provide an array of kitchenware from Japanese sashimi knives to bento boxes and containers. We aim to be a one-stop shop, allowing you to order a large selection of items in one place.",
        features_text: "Our Features",
        service_title: "Service",
        service_text: "Angel Seafoods is a multilingual company and can serve you in English, Japanese, Mandarin, Cantonese, Vietnamese, Korean, or French. The growing popularity for Asian foods in Canada has led us to supply people of all backgrounds and cultures.",
        angel_brand_title: "Angel Brand",
        angel_brand_text: "The Angel Brand represents a curated selection of exclusive products available only through Angel. Each item reflects our dedication to quality, authenticity, and uniqueness.",
        japan_fresh_title: "Japan Fresh",
        japan_fresh_text: "Angel Seafoods offers ‘Japan Fresh’, an overnight air shipment of fresh seafood bringing Tokyo’s catch of the day directly to you.",
        delivery_title: "Delivery Across <br> Canada",
        delivery_text: "At Angel, we deliver our premium food products multiple times a week to clients throughout the Vancouver lower mainland districts including Victoria and Whistler. We also have an operation in Montreal covering most districts in that area including Ottawa. With the assistance of proven outside logistic specialists Angel Seafoods products are being delivered to areas as far as the Yukon, Northwest Territories, and Maritimes.",
        processing_title: "Traditional Processing",
        processing_text: "Discover how we ensure quality at every step.",
        contact_title: "Get in Touch",
        contact_text: "Call us to place an order or ask questions. Our multilingual sales team is happy to assist you in English, Japanese, Chinese, Vietnamese, Korean, or French!",
        toll_free_text: "Canada Toll-free"
    },
    fr: {
        nav_about: "À propos",
        nav_features: "Caractéristiques",
        nav_delivery: "Livraison",
        nav_processing: "Préparation",
        nav_contact: "Contact",
        nav_toggle: "English",
        hero_quality: "Réputation de qualité",
        hero_reputation: "Réputation",
        hero_service: "Service",
        about_title: "Produits alimentaires japonais <br> de qualité depuis 1986",
        about_text: "Depuis 1986, Angel Seafoods fournit des produits alimentaires japonais de qualité, spécialisés dans les fruits de mer, à travers le Canada.",
        fresh_seafood_title: "Fruits de mer frais",
        fresh_seafood_text: "Angel Seafoods possède une expertise inégalée en matière de « qualité sashimi », car la majorité des produits haut de gamme que nous sélectionnons sont destinés à être consommés crus.",
        frozen_seafood_title: "Fruits de mer surgelés",
        frozen_seafood_text: "Angel Seafoods propose une large gamme de fruits de mer surgelés de haute qualité recherchés par le secteur de la restauration japonaise et collabore avec des fournisseurs capables de répondre à ces exigences.",
        dry_goods_title: "Produits secs",
        dry_goods_text: "Angel Seafoods s'engage à sélectionner des produits alimentaires du Japon et d'autres régions du monde tout en garantissant une qualité conforme à nos normes élevées.",
        kitchen_ware_title: "Ustensiles de cuisine",
        kitchen_ware_text: "Nous proposons également une gamme d'ustensiles de cuisine, allant des couteaux japonais pour sashimi aux boîtes bento et contenants. Notre objectif est d’être une boutique tout-en-un, vous permettant de commander une large sélection de produits au même endroit.",
        features_text: "Caractéristiques",
        service_title: "Une entreprise multilingue",
        service_text: "Angel Seafoods est une entreprise multilingue capable de vous servir en anglais, japonais, mandarin, cantonais, vietnamien, coréen et français. L’essor de la popularité des aliments asiatiques au Canada nous a amenés à fournir des produits à des personnes de toutes origines et cultures.",
        angel_brand_title: "Angel Brand",
        angel_brand_text: "Angel Brand représente une sélection exclusive de produits disponibles chez Angel. Chaque article reflète notre engagement envers la qualité, l'authenticité et l'unicité.",
        japan_fresh_title: "Japan Fresh",
        japan_fresh_text: "Angel Seafoods propose « Japan Fresh », un service d’expédition aérienne nocturne de fruits de mer frais, vous apportant directement la pêche du jour de Tokyo.",
        delivery_title: "Livraison partout au Canada",
        delivery_text: "Chez Angel, nous livrons nos produits alimentaires haut de gamme plusieurs fois par semaine aux clients de la région du Grand Vancouver, y compris Victoria et Whistler. Nous avons également une succursale à Montréal desservant la plupart des quartiers de cette région, ainsi que la ville d’Ottawa. Grâce à des partenaires logistiques spécialisés, les produits Angel Seafoods sont livrés jusque dans le Yukon, les Territoires du Nord-Ouest et les Maritimes.",
        processing_title: "Transformation traditionnelle",
        processing_text: "Découvrez comment nous garantissons la meilleure qualité à chaque étape grâce à des méthodes traditionnelles de découpe et de préparation du poisson.",
        contact_title: "Contactez-nous",
        contact_text: "Appelez-nous pour passer commande ou poser vos questions. Notre équipe de vente multilingue se fera un plaisir de vous aider en anglais, japonais, mandarin, cantonais, vietnamien, coréen ou français!",
        toll_free_text: "Sans frais Canada"}
};

let currentLang = "en"; // Default language

function switchLanguage() {
    currentLang = currentLang === "en" ? "fr" : "en"; // Toggle between languages

    document.getElementById("nav-about").textContent = translations[currentLang].nav_about;
    document.getElementById("nav-features").textContent = translations[currentLang].nav_features;
    document.getElementById("nav-delivery").textContent = translations[currentLang].nav_delivery;
    document.getElementById("nav-processing").textContent = translations[currentLang].nav_processing;
    document.getElementById("nav-contact").textContent = translations[currentLang].nav_contact;
    document.getElementById("lang-toggle").textContent = translations[currentLang].nav_toggle;

    document.getElementById("hero-quality").textContent = translations[currentLang].hero_quality;
    document.getElementById("hero-reputation").textContent = translations[currentLang].hero_reputation;
    document.getElementById("hero-service").textContent = translations[currentLang].hero_service;

    document.getElementById("about-title").innerHTML = translations[currentLang].about_title;
    document.getElementById("about-text").textContent = translations[currentLang].about_text;

    document.getElementById("fresh-seafood-thumbnail-title").textContent = translations[currentLang].fresh_seafood_title;
    document.getElementById("frozen-seafood-thumbnail-title").textContent = translations[currentLang].frozen_seafood_title;
    document.getElementById("dry-goods-thumbnail-title").textContent = translations[currentLang].dry_goods_title;
    document.getElementById("kitchen-ware-thumbnail-title").textContent = translations[currentLang].kitchen_ware_title;
    document.getElementById("fresh-seafood-title").textContent = translations[currentLang].fresh_seafood_title;
    document.getElementById("fresh-seafood-text").textContent = translations[currentLang].fresh_seafood_text;
    document.getElementById("frozen-seafood-title").textContent = translations[currentLang].frozen_seafood_title;
    document.getElementById("frozen-seafood-text").textContent = translations[currentLang].frozen_seafood_text;
    document.getElementById("dry-goods-title").textContent = translations[currentLang].dry_goods_title;
    document.getElementById("dry-goods-text").textContent = translations[currentLang].dry_goods_text;
    document.getElementById("kitchen-ware-title").textContent = translations[currentLang].kitchen_ware_title;
    document.getElementById("kitchen-ware-text").textContent = translations[currentLang].kitchen_ware_text;

    document.getElementById("features-text").textContent = translations[currentLang].features_text;
    document.getElementById("service-title").textContent = translations[currentLang].service_title;
    document.getElementById("service-text").textContent = translations[currentLang].service_text;
    document.getElementById("angel-brand-title").textContent = translations[currentLang].angel_brand_title;
    document.getElementById("angel-brand-text").textContent = translations[currentLang].angel_brand_text;
    document.getElementById("japan-fresh-title").textContent = translations[currentLang].japan_fresh_title;
    document.getElementById("japan-fresh-text").textContent = translations[currentLang].japan_fresh_text;

    document.getElementById("delivery-title").innerHTML = translations[currentLang].delivery_title;
    document.getElementById("delivery-text").textContent = translations[currentLang].delivery_text;

    document.getElementById("processing-title").innerHTML = translations[currentLang].processing_title;
    document.getElementById("processing-text").innerHTML = translations[currentLang].processing_text;
    
    document.getElementById("contact-title").textContent = translations[currentLang].contact_title;
    document.getElementById("contact-text").textContent = translations[currentLang].contact_text;

    document.getElementById("toll-free-text").textContent = translations[currentLang].toll_free_text;
}

// Attach event listener
document.getElementById("lang-toggle").addEventListener("click", switchLanguage);

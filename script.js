/**
 * ANCHOR CAFE — RAMAPURAM BEACH, CHIRALA (CHORAMANDAL COAST)
 * Vanilla JavaScript Engine: Data Structures, Canvas Waves, Filters, Carousel, Lightbox & 9 Interactive WhatsApp Options
 * WhatsApp Primary: 7702897213 (917702897213)
 * WhatsApp Photo Sharing: 6303301334 (916303301334)
 * Google Maps: https://www.google.com/maps/place/Anchor+cafe/@15.7791544,80.3866496,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4a47ca7c15e715:0xb96388332838b5c9!8m2!3d15.7791544!4d80.3866496
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initCanvasWaves();
  initHeaderScroll();
  initMobileNav();
  initMenuSystem();
  initGalleryLightbox();
  initReviewsCarousel();
  initContactForm();
  initWhatsAppModal();
  initScrollReveal();
});

const WHATSAPP_NUMBER = '917702897213';
const PHONE_NUMBER = '+917702897213';
const DISPLAY_PHONE = '+91 77028 97213';
const GMAPS_URL = 'https://www.google.com/maps/place/Anchor+cafe/@15.7791544,80.3866496,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4a47ca7c15e715:0xb96388332838b5c9!8m2!3d15.7791544!4d80.3866496';

/**
 * 9 Interactive WhatsApp Customer Inquiry Options
 */
const WHATSAPP_INQUIRY_OPTIONS = [
  {
    id: 1,
    title: '1️⃣ Explore Our Menu ☕',
    icon: '☕',
    desc: 'Full menu & prices',
    text: "🌊 Hey Anchor Cafe! I'd love to explore your full menu with prices. What's brewing today? ☕✨"
  },
  {
    id: 2,
    title: '2️⃣ Order Takeaway 🍔',
    icon: '🍔',
    desc: 'Beach bites takeaway order',
    text: "🍟 I'm ready to grab some beach bites! Please help me place a takeaway order. 😋"
  },
  {
    id: 3,
    title: '3️⃣ Best Sellers ⭐',
    icon: '⭐',
    desc: 'First visit must-try drinks & snacks',
    text: "👋 It's my first visit to Anchor Cafe! What are your must-try drinks and snacks? Surprise me with your favorites! ✨"
  },
  {
    id: 4,
    title: "4️⃣ Night Beach Table & Dining 🌙",
    icon: '🌙',
    desc: 'Candlelight dining on the sand & couple date setup',
    text: "🌙 We'd love to reserve a Night-Time Beach Table (Candlelight Dining) on the Ramapuram sand! Please share available evening slots and dinner combos. ✨"
  },
  {
    id: 5,
    title: '5️⃣ Hyderabad Weekend Visit 🚗',
    icon: '🚗',
    desc: 'Outstation trip & sunset seating',
    text: "🌊 We're coming from Hyderabad this weekend! Is there a good spot to enjoy the sunset at Anchor Cafe? ✨"
  },
  {
    id: 6,
    title: '6️⃣ Help Me Find You 📍',
    icon: '📍',
    desc: 'Route & directions near Ramapuram Beach',
    text: "🧭 We're near Ramapuram Beach but can't spot Anchor Cafe. Can you guide us with the easiest route? ⚓"
  },
  {
    id: 7,
    title: '7️⃣ Birthday Beach Events & Lightings 🎉',
    icon: '🎉',
    desc: 'Fairy light canopy, neon marquee & cake party setup',
    text: "🎂 We're planning a Birthday Celebration with Beach Lightings near the water! Please share details on fairy light canopies, neon signage, and party packages. 🎈✨"
  },
  {
    id: 8,
    title: '8️⃣ Group Reservation 👥',
    icon: '👥',
    desc: 'Reserved seating for 8–10 friends',
    text: "🌊 We're visiting with a group of 8–10 friends. Can you reserve seating for us? We'd love to enjoy the beach together! ✨"
  },
  {
    id: 9,
    title: '9️⃣ Beach Campfire & Sports (Cricket / Volleyball) 🔥',
    icon: '🔥',
    desc: 'Bonfire pit, beach volleyball court & cricket kit rental',
    text: "🔥 Hey Anchor Cafe! We're interested in booking a Beach Campfire or Beach Sports (Cricket / Volleyball) at Ramapuram Beach! Tell us what's available and pricing! 🌊🏏🏐"
  }
];

/**
 * 1. Interactive Menu Data
 */
const MENU_DATA = [
  // --- 1. HOT BEVERAGES (Photo 1) ---
  {
    id: 'hb1',
    title: 'Filter Coffee',
    category: 'hot-beverages',
    price: '₹40',
    image: 'assets/images/menu/hb_filter_coffee.jpg',
    description: 'Authentic South Indian filter coffee brewed fresh with rich roasted Arabica-Chicory decoction and frothy milk in traditional brass davarah.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'hb2',
    title: 'Lemon Tea',
    category: 'hot-beverages',
    price: '₹30',
    image: 'assets/images/menu/hb_lemon_tea.jpg',
    description: 'Warm uplifting black tea steeped fresh with citrus lemon slices and honey in a clear tea glass.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'hb3',
    title: 'Green Tea',
    category: 'hot-beverages',
    price: '₹30',
    image: 'assets/images/menu/hb_green_tea.jpg',
    description: 'Steamed delicate whole leaf herbal green tea steeped clear, rich in antioxidants and refreshing coastal vitality.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'hb4',
    title: 'Black Coffee',
    category: 'hot-beverages',
    price: '₹40',
    image: 'assets/images/menu/hb_black_coffee.jpg',
    description: 'Pure, dark aromatic roasted coffee brew served hot and unsweetened for a bold morning seaside pick-me-up.',
    tags: ['Veg'],
    isSpecial: false
  },

  // --- 2. MOJITOS (Photo 3) ---
  {
    id: 'mj1',
    title: 'Mint Lime Mojito',
    category: 'mojitos',
    price: '₹100',
    image: 'assets/images/menu/mj_mint_lime.jpg',
    description: 'Freshly muddled garden mint sprigs, zesty key lime wedges, sparkling soda, and chilled crushed ice.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'mj2',
    title: 'Virgin Strawberry Mojito',
    category: 'mojitos',
    price: '₹100',
    image: 'assets/images/menu/mj_strawberry.jpg',
    description: 'Sweet ripe strawberry puree blended with hand-muddled fresh mint, lime juice, and effervescent sparkling soda.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'mj3',
    title: 'Sunset Glory (Pineapple)',
    category: 'mojitos',
    price: '₹100',
    image: 'assets/images/menu/mj_sunset_pineapple.jpg',
    description: 'Golden tropical pineapple juice infused with fresh mint leaves, lime squeeze, and chilled bubbly club soda.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'mj4',
    title: 'Sunburst (Orange)',
    category: 'mojitos',
    price: '₹100',
    image: 'assets/images/menu/mj_sunburst_orange.jpg',
    description: 'Zesty sun-ripened orange citrus slices muddled with fragrant mint leaves and fizzy sparkling soda.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'mj5',
    title: 'Blue Curacao Mojito',
    category: 'mojitos',
    price: '₹100',
    image: 'assets/images/menu/mj_blue_curacao.jpg',
    description: 'Electric ocean-blue citrus curacao botanical syrup, fresh crushed mint, lime, and fizzy soda over clear ice in a tall glass.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'mj6',
    title: 'Sunrise (Pineapple & Orange)',
    category: 'mojitos',
    price: '₹120',
    image: 'assets/images/menu/mj_sunrise.jpg',
    description: 'Two-tone layered sunrise mocktail blending fresh sweet pineapple juice, citrus orange, crushed mint, and soda.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'mj7',
    title: 'Kiwi Mojito',
    category: 'mojitos',
    price: '₹120',
    image: 'assets/images/menu/mj_kiwi.jpg',
    description: 'Emerald green kiwi fruit pulp shaken with fresh garden mint sprigs, lime wedges, and sparkling soda in a tall glass.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'mj8',
    title: 'Virgin Guava Mojito',
    category: 'mojitos',
    price: '₹120',
    image: 'assets/images/menu/mj_guava.jpg',
    description: 'Sweet pink guava nectar muddled with aromatic mint, a touch of pink salt, lime, and effervescent bubbles.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'mj9',
    title: 'Virgin Mango Mojito',
    category: 'mojitos',
    price: '₹120',
    image: 'assets/images/menu/mj_mango.jpg',
    description: 'Luscious Alphonso mango pulp paired with fresh mint, lime, and crisp soda for a coastal summer sensation in a tall glass.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'mj10',
    title: 'Mint Berry Smash',
    category: 'mojitos',
    price: '₹140',
    image: 'assets/images/menu/mj_berry_smash.jpg',
    description: 'Crushed wild blackberries, raspberries, and strawberries smashed with fresh mint, lime, and sparkling soda in a tall glass.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'mj11',
    title: 'Virgin Jalapeno Guava',
    category: 'mojitos',
    price: '₹140',
    image: 'assets/images/menu/mj_jalapeno_guava.jpg',
    description: 'Sweet tropical pink guava nectar shaken with fresh spicy green jalapeno slices, lime, and crushed mint in a tall glass.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'mj12',
    title: 'Paradise (Guava & Pineapple)',
    category: 'mojitos',
    price: '₹140',
    image: 'assets/images/menu/mj_paradise.jpg',
    description: 'Tropical beach blend of sweet guava nectar, tart golden pineapple juice, muddled mint, and sparkling soda in a tall glass.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'mj13',
    title: 'Guava Pink Lemonade',
    category: 'mojitos',
    price: '₹140',
    image: 'assets/images/menu/mj_pink_lemonade.jpg',
    description: 'Pink watermelon juice and aromatic pink guava nectar shaken with fresh lemon spritz and garden mint in a tall glass.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },

  // --- 3. PREMIUM & SIGNATURE THICK SHAKES (Photo 2 - 27 Flavours) ---
  {
    id: 'sh1',
    title: 'Chocolate Shake',
    category: 'shakes',
    price: '₹80 – ₹120',
    tierDetails: 'Milkshake ₹80 • Blended ₹100 • Thickshake ₹120',
    image: 'assets/images/menu/sh_chocolate.jpg',
    description: 'Rich creamy cocoa delight served in a tall clear glass with premium dark chocolate sauce and dairy cream.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'sh2',
    title: 'Vanilla Shake',
    category: 'shakes',
    price: '₹80 – ₹130',
    tierDetails: 'Milkshake ₹80 • Blended ₹100 • Thickshake ₹130',
    image: 'assets/images/menu/sh_vanilla.jpg',
    description: 'Silky smooth classic Madagascar vanilla bean shake in a tall clear glass topped with rich whipped cream.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'sh3',
    title: 'Orange Shake',
    category: 'shakes',
    price: '₹80 – ₹130',
    tierDetails: 'Milkshake ₹80 • Blended ₹100 • Thickshake ₹130',
    image: 'assets/images/menu/sh_orange.jpg',
    description: 'Tangy citrus orange cream shake in a tall glass blending sunny orange puree with smooth dairy cream.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'sh4',
    title: 'Watermelon Shake',
    category: 'shakes',
    price: '₹80 – ₹130',
    tierDetails: 'Milkshake ₹80 • Blended ₹100 • Thickshake ₹130',
    image: 'assets/images/menu/sh_watermelon.jpg',
    description: 'Cool refreshing pink watermelon pulp whipped into a creamy chilled shake served in a tall glass.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'sh5',
    title: 'Butterscotch Shake',
    category: 'shakes',
    price: '₹80 – ₹130',
    tierDetails: 'Milkshake ₹80 • Blended ₹100 • Thickshake ₹130',
    image: 'assets/images/menu/sh_butterscotch.jpg',
    description: 'Golden caramel butterscotch sauce blended in a tall glass with crunchy caramel nut pralines and vanilla cream.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'sh6',
    title: 'Banana Shake',
    category: 'shakes',
    price: '₹80 – ₹140',
    tierDetails: 'Milkshake ₹80 • Blended ₹100 • Thickshake ₹140',
    image: 'assets/images/menu/sh_banana.jpg',
    description: 'Wholesome fresh yellow ripe bananas pureed with honey and creamy whole milk in a tall clear glass.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'sh7',
    title: 'Mango Shake',
    category: 'shakes',
    price: '₹80 – ₹140',
    tierDetails: 'Milkshake ₹80 • Blended ₹100 • Thickshake ₹140',
    image: 'assets/images/menu/sh_mango.jpg',
    description: 'Rich, luscious golden Alphonso mango fruit pulp blended with velvety thick milk in a tall glass.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'sh8',
    title: 'Strawberry Shake',
    category: 'shakes',
    price: '₹80 – ₹140',
    tierDetails: 'Milkshake ₹80 • Blended ₹100 • Thickshake ₹140',
    image: 'assets/images/menu/sh_strawberry.jpg',
    description: 'Sweet pink strawberry fruit pulp whipped into an ultra-creamy, velvety fruit shake served in a tall glass.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'sh9',
    title: 'Pineapple Shake',
    category: 'shakes',
    price: '₹80 – ₹140',
    tierDetails: 'Milkshake ₹80 • Blended ₹100 • Thickshake ₹140',
    image: 'assets/images/menu/sh_pineapple.jpg',
    description: 'Zesty tropical golden pineapple nectar blended with sweet cream and chilled milk in a tall glass.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'sh10',
    title: 'Guava Shake',
    category: 'shakes',
    price: '₹80 – ₹140',
    tierDetails: 'Milkshake ₹80 • Blended ₹100 • Thickshake ₹140',
    image: 'assets/images/menu/sh_guava.jpg',
    description: 'Fragrant pink tropical guava fruit pulp whipped into a smooth, refreshing seaside shake in a tall glass.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'sh11',
    title: 'Kiwi Shake',
    category: 'shakes',
    price: '₹90 – ₹140',
    tierDetails: 'Milkshake ₹90 • Blended ₹110 • Thickshake ₹140',
    image: 'assets/images/menu/sh_kiwi.jpg',
    description: 'Exotic tangy green kiwi fruit blended thick with chilled sweet milk in a tall clear glass.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'sh12',
    title: 'Litchi Shake',
    category: 'shakes',
    price: '₹90 – ₹140',
    tierDetails: 'Milkshake ₹90 • Blended ₹110 • Thickshake ₹140',
    image: 'assets/images/menu/sh_litchi.jpg',
    description: 'Delicate sweet white lychee fruit nectar whipped into an aromatic, frosty shake in a tall glass.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'sh13',
    title: 'Pista Shake',
    category: 'shakes',
    price: '₹90 – ₹140',
    tierDetails: 'Milkshake ₹90 • Blended ₹110 • Thickshake ₹140',
    image: 'assets/images/menu/sh_pista.jpg',
    description: 'Aromatic roasted green pistachio nuts blended in a tall glass with cardamom-infused sweet cream.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'sh14',
    title: 'Blueberry Shake',
    category: 'shakes',
    price: '₹100 – ₹150',
    tierDetails: 'Milkshake ₹100 • Blended ₹120 • Thickshake ₹150',
    image: 'assets/images/menu/sh_blueberry.jpg',
    description: 'Deep purple wild blueberry fruit puree packed with rich berry flavors and thick cream in a tall glass.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'sh15',
    title: 'Kesar Badam Shake',
    category: 'shakes',
    price: '₹100 – ₹150',
    tierDetails: 'Milkshake ₹100 • Blended ₹120 • Thickshake ₹150',
    image: 'assets/images/menu/sh_kesar_badam.jpg',
    description: 'Royal Kashmiri saffron strands (kesar) and blanched crushed almonds (badam) in rich frothed milk in a tall glass.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'sh16',
    title: 'Black Currant Shake',
    category: 'shakes',
    price: '₹100 – ₹150',
    tierDetails: 'Milkshake ₹100 • Blended ₹120 • Thickshake ₹150',
    image: 'assets/images/menu/sh_black_currant.jpg',
    description: 'Tart and sweet deep violet blackcurrant berries blended into a rich fruit shake in a tall glass.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'sh17',
    title: 'Banana Dry Fruit Shake',
    category: 'shakes',
    price: '₹160 – ₹210',
    tierDetails: 'Milkshake ₹160 • Blended ₹180 • Thickshake ₹210',
    image: 'assets/images/menu/sh_banana_dryfruit.jpg',
    description: 'Fresh ripe bananas blended in a tall glass with whole cashews, almonds, and sweet Medjool dates.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'sh18',
    title: 'Dry Fruit Shake',
    category: 'shakes',
    price: '₹160 – ₹210',
    tierDetails: 'Milkshake ₹160 • Blended ₹190 • Thickshake ₹210',
    image: 'assets/images/menu/sh_dryfruit.jpg',
    description: 'Royal high-energy thickshake in a tall glass loaded with cashews (kaju), badam, kishmish, and pistachios.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'sh19',
    title: 'Banana Bonkers',
    category: 'shakes',
    price: '₹100 – ₹150',
    tierDetails: 'Milkshake ₹100 • Blended ₹120 • Thickshake ₹150',
    image: 'assets/images/menu/sh_banana_bonkers.jpg',
    description: 'Fun caramelized banana shake in a tall glass blended with spiced butterscotch crunch and cookie bits.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'sh20',
    title: 'Kit Kat Shake',
    category: 'shakes',
    price: '₹110 – ₹150',
    tierDetails: 'Milkshake ₹110 • Blended ₹130 • Thickshake ₹150',
    image: 'assets/images/menu/sh_kitkat.jpg',
    description: 'Chilled chocolate fudge thickshake in a tall glass topped with whipped cream, chocolate drizzle, and crisp Kit Kat wafer bars.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'sh21',
    title: 'Oreo Shake',
    category: 'shakes',
    price: '₹110 – ₹150',
    tierDetails: 'Milkshake ₹110 • Blended ₹130 • Thickshake ₹150',
    image: 'assets/images/menu/sh_oreo.jpg',
    description: 'Classic dark cocoa Oreo cookies crushed and blended with sweet vanilla cream, served in a tall glass with an Oreo cookie.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'sh22',
    title: '5 Star Shake',
    category: 'shakes',
    price: '₹110 – ₹150',
    tierDetails: 'Milkshake ₹110 • Blended ₹130 • Thickshake ₹150',
    image: 'assets/images/menu/sh_5star.jpg',
    description: 'Chewy caramel, fluffy nougat, and smooth milk chocolate Cadbury 5 Star bar blended thick in a tall glass.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'sh23',
    title: 'Gems Shake',
    category: 'shakes',
    price: '₹110 – ₹150',
    tierDetails: 'Milkshake ₹110 • Blended ₹130 • Thickshake ₹150',
    image: 'assets/images/menu/sh_gems.jpg',
    description: 'Playful chocolate milkshake served in a tall glass topped with crunchy colorful candy-coated chocolate Gems.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'sh24',
    title: 'Snickers Shake',
    category: 'shakes',
    price: '₹110 – ₹150',
    tierDetails: 'Milkshake ₹110 • Blended ₹130 • Thickshake ₹150',
    image: 'assets/images/menu/sh_snickers.jpg',
    description: 'Loaded Snickers thickshake in a tall glass with roasted crunchy peanuts, golden caramel, and nougat in chocolate milk.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'sh25',
    title: 'Blended Brownie',
    category: 'shakes',
    price: '₹120 – ₹160',
    tierDetails: 'Milkshake ₹120 • Blended ₹140 • Thickshake ₹160',
    image: 'assets/images/menu/sh_blended_brownie.jpg',
    description: 'Decadent chocolate fudge thickshake served in a tall glass topped with fluffy whipped cream, chocolate syrup, and crumbled brownie pieces.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'sh26',
    title: 'Choco Butterscotch',
    category: 'shakes',
    price: '₹120 – ₹160',
    tierDetails: 'Milkshake ₹120 • Blended ₹140 • Thickshake ₹160',
    image: 'assets/images/menu/sh_choco_butterscotch.jpg',
    description: 'Dual harmony of dark cocoa chocolate ganache paired with caramelized butterscotch praline crunch in a tall glass.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'sh27',
    title: 'Choco-Nut Crunch Supreme',
    category: 'shakes',
    price: '₹120 – ₹160',
    tierDetails: 'Milkshake ₹120 • Blended ₹140 • Thickshake ₹160',
    image: 'assets/images/menu/sh_choconut_crunch.jpg',
    description: 'Ultra-luxurious chocolate thickshake in a tall glass with chocolate swirl stripes, whipped cream, roasted crunchy nuts, and choco chips.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },

  // --- 4. ICE CREAMS (Photo 3) ---
  {
    id: 'ic1',
    title: 'Vanilla Ice Cream',
    category: 'icecream',
    price: '₹60',
    image: 'assets/images/menu/ic_vanilla.jpg',
    description: 'Classic creamy scoop made with pure Madagascar vanilla bean and rich fresh milk cream.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'ic2',
    title: 'Chocolate Ice Cream',
    category: 'icecream',
    price: '₹60',
    image: 'assets/images/menu/ic_chocolate.jpg',
    description: 'Indulgent scoop of rich dark cocoa chocolate gelato churned to velvety perfection.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'ic3',
    title: 'Strawberry Ice Cream',
    category: 'icecream',
    price: '₹60',
    image: 'assets/images/menu/ic_strawberry.jpg',
    description: 'Delightful pink strawberry cream scoop with swirls of sweet natural berry puree.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'ic4',
    title: 'Pista Ice Cream',
    category: 'icecream',
    price: '₹60',
    image: 'assets/images/menu/ic_pista.jpg',
    description: 'Fragrant nutty green pistachio ice cream studded with real crunchy pistachio slivers.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'ic5',
    title: 'Butterscotch Ice Cream',
    category: 'icecream',
    price: '₹60',
    image: 'assets/images/menu/ic_butterscotch.jpg',
    description: 'Golden buttery brown sugar ice cream scoop filled with crispy, caramelized praline bits.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'ic6',
    title: 'Kaju Kishmish',
    category: 'icecream',
    price: '₹70',
    image: 'assets/images/menu/ic_kaju_kishmish.jpg',
    description: 'Traditional royal Indian ice cream scoop loaded with whole buttery cashews and sweet golden raisins.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'ic7',
    title: 'Fruit Punch',
    category: 'icecream',
    price: '₹70',
    image: 'assets/images/menu/ic_fruit_punch.jpg',
    description: 'Vibrant medley of seasonal tropical fruits churned into sweet, colorful creamy ice cream sundae scoop.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'ic8',
    title: 'American Dry Fruits',
    category: 'icecream',
    price: '₹70',
    image: 'assets/images/menu/ic_american_dryfruit.jpg',
    description: 'Rich creamy gelato scoop packed with roasted almonds, cashews, pistachios, and dried fruits.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'ic9',
    title: 'Caramel Ice Cream',
    category: 'icecream',
    price: '₹80',
    image: 'assets/images/menu/ic_caramel.jpg',
    description: 'Silky golden dulce de leche caramel swirl gelato topped with sweet golden caramel drizzle.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },

  // --- 5. SNACKS / QUICK BITES (Photo 4) ---
  {
    id: 'sn1',
    title: 'French Fries (150g)',
    category: 'snacks',
    price: '₹90',
    image: 'assets/images/menu/sn_french_fries.jpg',
    description: 'Golden crispy, salted hand-cut potato fries (150g) fried fresh and served with savory dipping sauce.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'sn2',
    title: 'Corn Samosa (4 pcs)',
    category: 'snacks',
    price: '₹70',
    image: 'assets/images/menu/sn_corn_samosa.jpg',
    description: '4 golden flaky pastry triangles stuffed with spiced tender sweet corn and savory herbs, served with green chutney.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'sn3',
    title: 'Corn Roll (5 pcs)',
    category: 'snacks',
    price: '₹110',
    image: 'assets/images/menu/sn_corn_roll.jpg',
    description: '5 crunchy golden crumbed rolls packed with juicy sweet corn filling and aromatic spices.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'sn4',
    title: 'Veg Fingers (5 pcs)',
    category: 'snacks',
    price: '₹110',
    image: 'assets/images/menu/sn_veg_fingers.jpg',
    description: '5 crumb-coated golden vegetable fingers filled with seasoned peas, carrots, and potatoes.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'sn5',
    title: 'Veg Momos',
    category: 'snacks',
    price: '₹130',
    image: 'assets/images/menu/sn_veg_momos.jpg',
    description: 'Steamed delicate dumplings packed with finely minced cabbage, carrots, onions, and spicy red momo chutney.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'sn6',
    title: 'Chicken Nuggets',
    category: 'snacks',
    price: '₹160',
    image: 'assets/images/menu/sn_chicken_nuggets.jpg',
    description: 'Tender seasoned minced chicken formed into bite-sized nuggets, breaded and fried golden crispy with dipping sauce.',
    tags: ['Non-Veg', 'Signature'],
    isSpecial: true
  },
  {
    id: 'sn7',
    title: 'Chicken Popcorn',
    category: 'snacks',
    price: '₹160',
    image: 'assets/images/menu/sn_chicken_popcorn.jpg',
    description: 'Crunchy bite-sized morsels of tender chicken tossed in savory peri-peri seasoning.',
    tags: ['Non-Veg', 'Signature'],
    isSpecial: true
  },
  {
    id: 'sn8',
    title: 'Chicken Momos (5 pcs)',
    category: 'snacks',
    price: '₹140',
    image: 'assets/images/menu/sn_chicken_momos.jpg',
    description: '5 juicy steamed dumplings filled with succulent spiced minced chicken, served with fiery garlic dip.',
    tags: ['Non-Veg'],
    isSpecial: false
  },
  {
    id: 'sn9',
    title: 'Chicken Fingers (5 pcs)',
    category: 'snacks',
    price: '₹130',
    image: 'assets/images/menu/sn_chicken_fingers.jpg',
    description: '5 tender strips of prime chicken breast coated in seasoned crispy golden breadcrumbs.',
    tags: ['Non-Veg'],
    isSpecial: false
  },
  {
    id: 'sn10',
    title: 'Chicken Wings (5 pcs)',
    category: 'snacks',
    price: '₹160',
    image: 'assets/images/menu/sn_chicken_wings.jpg',
    description: '5 crispy chicken wings tossed in rich barbecue glaze and savory herbs, cooked tender and juicy.',
    tags: ['Non-Veg', 'Signature'],
    isSpecial: true
  }
];

/**
 * 2. Glimpses Along the Shore Gallery (Google Maps Customer Uploads — Zero Duplicates)
 */
const GALLERY_DATA = [
  {
    id: 'g1',
    title: 'Sunset View Deck at Ramapuram Beach',
    category: 'sunset',
    src: 'assets/images/hero_coastal_cafe.jpg',
    tag: 'Google Maps Photo • 5.0 ★',
    author: 'Customer Photo (Google Local Guide)',
    featured: true
  },
  {
    id: 'g2',
    title: 'Signature Mojitos & Iced Cold Brews',
    category: 'brews',
    src: 'assets/images/sunset_mojitos.jpg',
    tag: 'Google Maps Photo • 5.0 ★',
    author: 'Customer Photo (Ramapuram Beach Visit)',
    featured: false
  },
  {
    id: 'g3',
    title: 'Gourmet Chocolate Milkshakes & Sundaes',
    category: 'shakes',
    src: 'assets/images/milkshakes_icecreams.jpg',
    tag: 'Google Maps Photo • 5.0 ★',
    author: 'Customer Photo (Google Reviewer)',
    featured: false
  },
  {
    id: 'g4',
    title: 'Single-Origin Pour Over Brewing',
    category: 'brews',
    src: 'assets/images/story_craft_coffee.jpg',
    tag: 'Google Maps Photo • 5.0 ★',
    author: 'Customer Photo (Specialty Coffee Lover)',
    featured: false
  },
  {
    id: 'g5',
    title: 'Beachside Brunch Spread & Savory Snacks',
    category: 'snacks',
    src: 'assets/images/coastal_bites.jpg',
    tag: 'Google Maps Photo • 5.0 ★',
    author: 'Customer Photo (Coromandel Coast Traveler)',
    featured: false
  }
];

/**
 * 3. Customer Reviews Data (Verified Reviews Only — Zero Duplicates)
 */
const REVIEWS_DATA = [
  {
    id: 'r1',
    name: 'Verified Customer',
    location: 'Google Maps Local Guide • 5.0 ★★★★★',
    rating: 5,
    quote: 'Anchor Cafe is hands down the best coastal discovery on Ramapuram Beach! Sitting on the deck with their signature Sunset Mojitos and cold brews while the sea breeze rolls in was pure bliss. Top-notch service and atmosphere!',
    initials: 'VC'
  }
];

/* ==========================================================================
   2. Scroll Progress Bar
   ========================================================================== */
function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgressBar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  }, { passive: true });
}

/* ==========================================================================
   3. Canvas Wave Simulation
   ========================================================================== */
function initCanvasWaves() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let step = 0;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const waves = [
    { wavelength: 0.006, amplitude: 22, speed: 0.02, color: 'rgba(201, 168, 106, 0.12)' },
    { wavelength: 0.009, amplitude: 30, speed: -0.015, color: 'rgba(232, 223, 200, 0.08)' },
    { wavelength: 0.004, amplitude: 38, speed: 0.012, color: 'rgba(11, 37, 69, 0.35)' }
  ];

  function draw() {
    ctx.clearRect(0, 0, width, height);
    step += 1;

    waves.forEach(w => {
      ctx.beginPath();
      ctx.fillStyle = w.color;
      ctx.moveTo(0, height);

      for (let x = 0; x <= width; x += 6) {
        const y = Math.sin(x * w.wavelength + step * w.speed) * w.amplitude + (height * 0.78);
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}

/* ==========================================================================
   4. Header Sticky State & Active Section Highlighting
   ========================================================================== */
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    if (scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   5. Mobile Drawer Navigation
   ========================================================================== */
function initMobileNav() {
  const toggle = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('mobileDrawerOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleDrawer(open) {
    const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
    drawer?.classList.toggle('open', isOpen);
    overlay?.classList.toggle('open', isOpen);
    toggle?.classList.toggle('open', isOpen);
    toggle?.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  const closeBtn = document.getElementById('mobileDrawerClose');

  toggle?.addEventListener('click', () => toggleDrawer());
  closeBtn?.addEventListener('click', () => toggleDrawer(false));
  overlay?.addEventListener('click', () => toggleDrawer(false));
  mobileLinks.forEach(link => link.addEventListener('click', () => toggleDrawer(false)));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer?.classList.contains('open')) {
      toggleDrawer(false);
    }
  });
}

/* ==========================================================================
   6. Interactive Menu System (Zero Duplicate Protection)
   ========================================================================== */
function initMenuSystem() {
  const container = document.getElementById('menuCardsGrid');
  if (!container) return;

  const searchInput = document.getElementById('menuSearchInput');
  const clearBtn = document.getElementById('menuSearchClear');
  const categoryBtns = document.querySelectorAll('.category-tab-btn');
  const dietaryBtns = document.querySelectorAll('.dietary-tag-btn');

  let currentCategory = 'all';
  let currentDietary = 'all';
  let searchQuery = '';

  const MENU_SECTIONS = [
    {
      id: 'hot-beverages',
      icon: '☕',
      title: 'Hot Beverages & Teas',
      subtitle: 'Authentic South Indian filter coffee & hand-steeped teas',
      startingPrice: 'From ₹30'
    },
    {
      id: 'mojitos',
      icon: '🍹',
      title: 'Handcrafted Beach Mojitos & Coolers',
      subtitle: 'Fresh muddled garden mint, key lime & sparkling tropical coolers',
      startingPrice: 'From ₹100'
    },
    {
      id: 'shakes',
      icon: '🥤',
      title: 'Premium Thick Shakes (27 Flavours)',
      subtitle: 'Available in 3 variations: Milkshake • Blended Shake • Thickshake',
      startingPrice: 'From ₹80'
    },
    {
      id: 'icecream',
      icon: '🍨',
      title: 'Artisanal Ice Creams & Sundaes',
      subtitle: 'Velvety gelato scoops, dry fruits & signature sundaes',
      startingPrice: 'From ₹60'
    },
    {
      id: 'snacks',
      icon: '🍟',
      title: 'Crispy Beach Bites & Savory Snacks',
      subtitle: 'Golden fries, steamed & fried momos, chicken wings & samosas',
      startingPrice: 'From ₹70'
    }
  ];

  function renderMenu() {
    if (!container) return;

    // Strict deduplication safeguard
    const seenTitles = new Set();
    const uniqueMenu = MENU_DATA.filter(item => {
      const key = item.title.toLowerCase().trim();
      if (seenTitles.has(key)) return false;
      seenTitles.add(key);
      return true;
    });

    const filtered = uniqueMenu.filter(item => {
      const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
      const matchesDietary = currentDietary === 'all' || item.tags.includes(currentDietary);
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery) || 
        item.description.toLowerCase().includes(searchQuery);

      return matchesCategory && matchesDietary && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="menu-no-results">
          <p style="font-size: 1.25rem; font-family: var(--font-heading); color: var(--color-navy); margin-bottom: 0.5rem;">No coastal delights found</p>
          <p>Try searching for "mojito", "coffee", "thickshake", "ice cream", or reset your filters.</p>
        </div>
      `;
      return;
    }

    // Determine which sections to render
    const sectionsToRender = currentCategory === 'all' 
      ? MENU_SECTIONS 
      : MENU_SECTIONS.filter(s => s.id === currentCategory);

    let html = '<div class="menu-sections-wrapper">';

    sectionsToRender.forEach(sec => {
      const secItems = filtered.filter(item => item.category === sec.id);
      if (secItems.length === 0) return;

      html += `
        <div class="menu-category-section" id="sec-${sec.id}">
          <div class="menu-section-header">
            <div class="menu-section-header-title">
              <span class="menu-cat-icon">${sec.icon}</span>
              <div>
                <h3 class="menu-cat-heading">${sec.title}</h3>
                <p class="menu-cat-sub">${sec.subtitle}</p>
              </div>
            </div>
            <div class="menu-cat-badges">
              <span class="menu-cat-badge">${secItems.length} ${secItems.length === 1 ? 'Item' : 'Items'}</span>
              <span class="menu-cat-badge" style="background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.3); color: #FFFFFF;">${sec.startingPrice}</span>
            </div>
          </div>
          <div class="menu-compact-list">
            ${secItems.map(item => `
              <div class="menu-compact-row" tabindex="0">
                <div class="menu-compact-info">
                  <div class="menu-compact-title-row">
                    <span class="dietary-dot ${item.tags.includes('Non-Veg') ? 'nonveg' : 'veg'}" title="${item.tags.includes('Non-Veg') ? 'Non-Vegetarian' : 'Vegetarian'}"></span>
                    <h4 class="menu-compact-title">${item.title}</h4>
                    ${item.isSpecial ? '<span class="badge-tag badge-signature">⭐ Bestseller</span>' : ''}
                  </div>
                  <p class="menu-compact-desc">${item.description}</p>
                  ${item.tierDetails ? `<div class="menu-compact-tiers"><strong>Variations:</strong> ${item.tierDetails}</div>` : ''}
                </div>
                <div class="menu-compact-action">
                  <span class="menu-compact-price">${item.price}</span>
                  <button type="button" 
                          class="menu-compact-order-btn wa-trigger-btn" 
                          data-custom-text="🌊 Hey Anchor Cafe! I'd like to order ${encodeURIComponent(item.title)} (${item.price}${item.tierDetails ? ' - ' + encodeURIComponent(item.tierDetails) : ''}) at Ramapuram Beach." 
                          aria-label="Order ${item.title} via WhatsApp">
                     <span>Order</span>
                     <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    });

    html += '</div>';
    container.innerHTML = html;

    container.querySelectorAll('.wa-trigger-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const customText = btn.getAttribute('data-custom-text');
        if (customText) {
          window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${customText}`, '_blank');
        } else {
          openWhatsAppModal();
        }
      });
    });
  }

  // Bind the 4 printed menu cards showcase triggers
  document.querySelectorAll('.printed-card-trigger').forEach(card => {
    card.addEventListener('click', () => {
      const imgSrc = card.getAttribute('data-img');
      const title = card.getAttribute('data-title');
      openMenuLightbox(imgSrc, title, 'Anchor Cafe Official Menu Card', 'Authentic printed menu card photographed at Anchor Cafe, Ramapuram Beach, Chirala.');
    });
  });

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderMenu();
    });
  });

  dietaryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dietaryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDietary = btn.getAttribute('data-tag');
      renderMenu();
    });
  });

  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    clearBtn?.classList.toggle('visible', searchQuery.length > 0);
    renderMenu();
  });

  clearBtn?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    searchQuery = '';
    clearBtn.classList.remove('visible');
    renderMenu();
    searchInput?.focus();
  });

  renderMenu();
}

/**
 * Interactive Lightbox for Menu Items & Printed Cards
 */
function openMenuLightbox(src, title, price, desc) {
  const modal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');
  if (!modal || !lightboxImg) return;

  lightboxImg.src = src;
  lightboxImg.alt = title;
  if (lightboxCaption) {
    lightboxCaption.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem;">
        <div>
          <strong style="font-size: 1.15rem; color: #FFFFFF;">${title}</strong>
          ${price ? `<span style="font-size: 1.05rem; color: var(--color-gold); font-weight: 700; margin-left: 0.5rem;">${price}</span>` : ''}
        </div>
        <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("🌊 Hey Anchor Cafe! I'd like to inquire / order: " + title + (price ? ' (' + price + ')' : '') + "! ☕😋")}" 
           target="_blank" 
           rel="noopener" 
           style="font-size: 0.8rem; color: #FFFFFF; background: #25D366; padding: 0.35rem 0.85rem; border-radius: 999px; text-decoration: none; display: inline-flex; align-items: center; gap: 5px; font-weight: 600;">
          <span>Order via WhatsApp</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
      ${desc ? `<p style="font-size: 0.88rem; color: var(--color-sand); margin: 0;">${desc}</p>` : ''}
    `;
  }
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  closeBtn?.focus();
}

/* ==========================================================================
   7. Gallery & Accessible Lightbox (Zero Duplicates Safeguard)
   ========================================================================== */
function initGalleryLightbox() {
  const masonryContainer = document.getElementById('galleryMasonry');
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const modal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  let currentCategory = 'all';
  let currentIndex = 0;
  let activeGalleryItems = [];

  function renderGallery() {
    if (!masonryContainer) return;

    // Strict deduplication safeguard
    const seenImages = new Set();
    const uniqueGallery = GALLERY_DATA.filter(item => {
      const key = item.src.toLowerCase().trim();
      if (seenImages.has(key)) return false;
      seenImages.add(key);
      return true;
    });

    activeGalleryItems = uniqueGallery.filter(item => 
      currentCategory === 'all' || item.category === currentCategory
    );

    masonryContainer.innerHTML = activeGalleryItems.map((item, idx) => `
      <div class="gallery-item ${item.featured ? 'featured' : ''}" 
           data-index="${idx}" 
           tabindex="0" 
           role="button" 
           aria-label="View Google Maps customer photo: ${item.title}">
        <img src="${item.src}" alt="${item.title}" loading="lazy" />
        <div class="gallery-overlay">
          <span class="gallery-tag">${item.tag}</span>
          <h3 class="gallery-caption">${item.title}</h3>
          <span style="font-size: 0.75rem; color: #E8DFC8; margin-top: 0.25rem; display: block;">📷 ${item.author}</span>
        </div>
      </div>
    `).join('');

    const items = masonryContainer.querySelectorAll('.gallery-item');
    items.forEach(el => {
      el.addEventListener('click', () => {
        const index = parseInt(el.getAttribute('data-index'), 10);
        openLightbox(index);
      });
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const index = parseInt(el.getAttribute('data-index'), 10);
          openLightbox(index);
        }
      });
    });
  }

  function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    modal?.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  }

  function closeLightbox() {
    modal?.classList.remove('open');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = activeGalleryItems[currentIndex];
    if (!item) return;

    if (lightboxImg) {
      lightboxImg.src = item.src;
      lightboxImg.alt = item.title;
    }
    if (lightboxCaption) {
      lightboxCaption.innerHTML = `<strong>${item.title}</strong><br><span style="font-size: 0.9rem; color: var(--color-gold);">${item.tag}</span> — <span style="font-size: 0.85rem; color: #E8DFC8;">${item.author}</span><br><a href="${GMAPS_URL}" target="_blank" rel="noopener" style="font-size: 0.8rem; color: var(--color-gold); text-decoration: underline; margin-top: 0.35rem; display: inline-block;">View on Google Maps ↗</a>`;
    }
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + activeGalleryItems.length) % activeGalleryItems.length;
    updateLightboxContent();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % activeGalleryItems.length;
    updateLightboxContent();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      renderGallery();
    });
  });

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', showPrev);
  nextBtn?.addEventListener('click', showNext);

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal?.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  renderGallery();
}

/* ==========================================================================
   8. Customer Reviews Carousel (Exactly 2 Verified Reviews + Auto-Slide Every 3s)
   ========================================================================== */
function initReviewsCarousel() {
  const track = document.getElementById('reviewsTrack');
  const prevBtn = document.getElementById('reviewsPrevBtn');
  const nextBtn = document.getElementById('reviewsNextBtn');
  const dotsContainer = document.getElementById('reviewsDots');
  if (!track) return;

  // Strict deduplication safeguard: only unique verified reviews
  const seenReviews = new Set();
  const uniqueReviews = REVIEWS_DATA.filter(r => {
    const key = (r.name + '::' + r.quote).toLowerCase().trim();
    if (seenReviews.has(key)) return false;
    seenReviews.add(key);
    return true;
  });

  let currentIndex = 0;
  const totalSlides = uniqueReviews.length;
  let autoplayTimer = null;

  track.innerHTML = uniqueReviews.map(r => `
    <div class="review-slide">
      <article class="review-card">
        <div class="review-stars" aria-label="${r.rating} out of 5 stars">
          ${Array.from({ length: r.rating }).map(() => `
            <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          `).join('')}
        </div>
        <p class="review-quote-text">“${r.quote}”</p>
        <div class="review-author-block">
          <div class="review-avatar" aria-hidden="true">${r.initials}</div>
          <div class="review-meta">
            <span class="review-author-name">${r.name}</span>
            <span class="review-author-location">${r.location}</span>
          </div>
        </div>
        <div style="margin-top: 1.25rem;">
          <a href="${GMAPS_URL}" target="_blank" rel="noopener" style="font-size: 0.8rem; color: #1a73e8; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 5px; background: rgba(66, 133, 244, 0.08); padding: 0.35rem 0.85rem; border-radius: 999px;">
            <span>Verified Google Review</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
        </div>
      </article>
    </div>
  `).join('');

  if (dotsContainer) {
    dotsContainer.innerHTML = uniqueReviews.map((_, i) => `
      <button class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Go to review slide ${i + 1}"></button>
    `).join('');
  }

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    const dots = dotsContainer?.querySelectorAll('.carousel-dot');
    dots?.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  // Auto-slide every 3 seconds if multiple reviews
  function startAutoplay() {
    stopAutoplay();
    if (totalSlides > 1) {
      autoplayTimer = setInterval(nextSlide, 3000);
    }
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  const navControls = track.closest('.reviews-carousel-wrapper')?.querySelector('.reviews-nav-controls');
  if (totalSlides <= 1) {
    if (navControls) navControls.style.display = 'none';
  } else {
    if (navControls) navControls.style.display = 'flex';
    startAutoplay();
  }

  nextBtn?.addEventListener('click', () => {
    nextSlide();
    startAutoplay();
  });
  prevBtn?.addEventListener('click', () => {
    prevSlide();
    startAutoplay();
  });

  dotsContainer?.addEventListener('click', (e) => {
    const dot = e.target.closest('.carousel-dot');
    if (dot) {
      currentIndex = parseInt(dot.getAttribute('data-index'), 10);
      updateCarousel();
      startAutoplay();
    }
  });

  // Pause on hover or touch so user can read peacefully
  const carouselWrapper = track.closest('.reviews-carousel-wrapper');
  carouselWrapper?.addEventListener('mouseenter', stopAutoplay);
  carouselWrapper?.addEventListener('mouseleave', startAutoplay);

  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    stopAutoplay();
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) nextSlide();
    if (touchEndX - touchStartX > 50) prevSlide();
    startAutoplay();
  }, { passive: true });
}

/* ==========================================================================
   9. Contact Form Integration
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('tableInquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('formName')?.value || '';
    const phone = document.getElementById('formPhone')?.value || '';
    const guests = document.getElementById('formGuests')?.value || '2 Guests';
    const date = document.getElementById('formDate')?.value || 'Today';
    const note = document.getElementById('formNote')?.value || '';

    const message = `🌊 Hey Anchor Cafe! We're planning a visit to Ramapuram Beach (Choramandal Coast):%0A- Name: ${encodeURIComponent(name)}%0A- Phone: ${encodeURIComponent(phone)}%0A- Guests: ${encodeURIComponent(guests)}%0A- Time/Date: ${encodeURIComponent(date)}%0A- Special Requests: ${encodeURIComponent(note)}%0ASee you soon! ☕✨`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    form.reset();
  });
}

/* ==========================================================================
   10. WhatsApp 9 Interactive Options Selector Modal Engine
   ========================================================================== */
function initWhatsAppModal() {
  const modal = document.getElementById('waInquiryModal');
  const closeBtn = document.getElementById('waModalClose');
  const gridContainer = document.getElementById('waOptionsGrid');
  const triggers = document.querySelectorAll('.wa-modal-trigger');

  function openModal() {
    renderOptions();
    modal?.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  }

  function closeModal() {
    modal?.classList.remove('open');
    document.body.style.overflow = '';
  }

  function renderOptions() {
    if (!gridContainer) return;

    gridContainer.innerHTML = WHATSAPP_INQUIRY_OPTIONS.map(opt => `
      <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(opt.text)}" 
         target="_blank" 
         rel="noopener" 
         class="wa-option-item" 
         aria-label="${opt.title}: ${opt.desc}">
        <span class="wa-option-icon" aria-hidden="true">${opt.icon}</span>
        <div style="flex: 1;">
          <h4 class="wa-option-title">
            <span>${opt.title}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </h4>
          <p class="wa-option-desc">${opt.desc}</p>
          <span class="wa-option-msg-snippet">“${opt.text}”</span>
        </div>
      </a>
    `).join('');
  }

  triggers.forEach(el => {
    el.addEventListener('click', (e) => {
      // Prevent navigation only for elements configured to trigger the 9-options modal
      if (el.tagName === 'A' && el.getAttribute('href') && !el.classList.contains('wa-modal-trigger')) {
        return;
      }
      e.preventDefault();
      openModal();
    });
  });

  closeBtn?.addEventListener('click', closeModal);

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('open')) {
      closeModal();
    }
  });

  window.openWhatsAppModal = openModal;
}

/* ==========================================================================
   11. IntersectionObserver Scroll Reveal
   ========================================================================== */
function initScrollReveal() {
  const elements = document.querySelectorAll('.fade-in-element');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

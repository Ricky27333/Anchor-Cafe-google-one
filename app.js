/**
 * ANCHOR CAFE — RAMAPURAM BEACH, CHIRALA (CHORAMANDAL COAST)
 * Vanilla JavaScript Engine: Data Structures, Canvas Waves, Filters, Carousel, Lightbox & 9 Interactive WhatsApp Options
 * WhatsApp Number: 8008370274 (918008370274)
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

const WHATSAPP_NUMBER = '918008370274';
const PHONE_NUMBER = '+918008370274';
const DISPLAY_PHONE = '+91 80083 70274';

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
    title: "4️⃣ Couple's Sunset Plan ❤️",
    icon: '❤️',
    desc: 'Evening sunset date combo for two',
    text: "🌅 We're planning a beach date this evening. Could you recommend the perfect combo for two? ☕🍹"
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
    title: '7️⃣ Birthday Celebration 🎉',
    icon: '🎉',
    desc: 'Decorations, combos & party setup',
    text: "🎂 We're planning a birthday celebration at Anchor Cafe! Do you have decorations, special combos, or surprise arrangements? 🎈"
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
    title: '9️⃣ Events & Beach Nights 🔥',
    icon: '🔥',
    desc: 'DJ nights, campfire, live music & weekend specials',
    text: "🎶 We're interested in your special events! Do you have DJ Nights, Campfire Nights, Live Music, Beach Events, or Weekend Specials happening? Tell us what's coming up! 🔥🌊"
  }
];

/**
 * 1. Interactive Menu Data
 */
const MENU_DATA = [
  {
    id: 'm1',
    title: 'Ramapuram Sunset Mojito',
    category: 'mojitos',
    price: '₹220',
    description: 'Fresh muddled garden mint, zesty key lime, sparkling soda, and passionfruit sunset syrup over crushed ice.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'm2',
    title: 'Coastal Cold Brew Reserve',
    category: 'brews',
    price: '₹195',
    description: '18-hour steeped single-origin Arabica with notes of caramel and toasted cocoa, served over crystal clear ice rock.',
    tags: ['Chef Special', 'Vegan'],
    isSpecial: true
  },
  {
    id: 'm3',
    title: 'Belgian Chocolate Fudge Milkshake',
    category: 'shakes',
    price: '₹240',
    description: 'Rich thick Belgian chocolate milkshake topped with whipped cream, cocoa drizzle, and handmade ice cream scoops.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  },
  {
    id: 'm4',
    title: 'Blue Bay Coconut Fizz',
    category: 'mojitos',
    price: '₹210',
    description: 'Hydrating tender coconut water, blue curaçao botanical infusion, fresh basil leaves, and fizzy lemon spritz.',
    tags: ['Signature', 'Veg'],
    isSpecial: false
  },
  {
    id: 'm5',
    title: 'Gold Foamed Sea Salt Latte',
    category: 'brews',
    price: '₹230',
    description: 'Double shot espresso infused with steamed oat milk, sea salt caramel foam, and edible gold shimmer.',
    tags: ['Chef Special', 'Veg'],
    isSpecial: true
  },
  {
    id: 'm6',
    title: 'Artisanal Dulce De Leche Ice Cream Sundae',
    category: 'icecream',
    price: '₹210',
    description: 'Double scoop gourmet vanilla bean & caramel gelato served with crushed waffle cone and warm roasted nuts.',
    tags: ['Chef Special', 'Veg'],
    isSpecial: true
  },
  {
    id: 'm7',
    title: 'Lotus Biscoff Crunch Frappe',
    category: 'shakes',
    price: '₹250',
    description: 'Creamy cold frappe blended with spiced speculoos spread, topped with whipped vanilla cream and crushed biscuits.',
    tags: ['Chef Special', 'Veg'],
    isSpecial: true
  },
  {
    id: 'm8',
    title: 'Sourdough Avocado & Feta Crostini',
    category: 'snacks',
    price: '₹280',
    description: 'Rustic wood-fired sourdough with ripe hass avocado, crumbed Greek feta, slow-roasted cherry tomatoes, and micro-herbs.',
    tags: ['Chef Special', 'Veg'],
    isSpecial: true
  },
  {
    id: 'm9',
    title: 'Coromandel Peri-Peri Truffle Fries',
    category: 'snacks',
    price: '₹210',
    description: 'Crisp golden hand-cut potatoes tossed in peri-peri spices, white truffle oil, grated parmesan, and garlic aioli.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'm10',
    title: 'Artisanal Almond Butter Croissant',
    category: 'snacks',
    price: '₹180',
    description: 'Flaky twice-baked butter croissant loaded with frangipane almond cream and toasted sliced almonds.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'm11',
    title: 'Warm Molten Choco Lava Tart',
    category: 'icecream',
    price: '₹260',
    description: 'Decadent dark chocolate tart with a flowing molten core, paired with artisanal Madagascar vanilla bean gelato.',
    tags: ['Chef Special', 'Veg'],
    isSpecial: true
  },
  {
    id: 'm12',
    title: 'Chirala Shoreline Filter Kaapi Fusion',
    category: 'brews',
    price: '₹160',
    description: 'A contemporary artisanal tribute to traditional South Indian decoction, topped with velvety frothed milk and jaggery.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  }
];

/**
 * 2. Glimpses Along the Shore Gallery
 */
const GALLERY_DATA = [
  {
    id: 'g1',
    title: 'Sunset View Deck at Ramapuram Beach',
    category: 'sunset',
    src: 'assets/images/hero_coastal_cafe.jpg',
    tag: 'Google Maps Photo • 5.0 ★',
    author: 'Customer Photo by Sai Teja (Google Local Guide)',
    featured: true
  },
  {
    id: 'g2',
    title: 'Signature Mojitos & Iced Cold Brews',
    category: 'brews',
    src: 'assets/images/sunset_mojitos.jpg',
    tag: 'Google Maps Photo • 5.0 ★',
    author: 'Customer Photo by Divya K. (Ramapuram Beach Visit)',
    featured: false
  },
  {
    id: 'g3',
    title: 'Gourmet Chocolate Milkshakes & Sundaes',
    category: 'shakes',
    src: 'assets/images/milkshakes_icecreams.jpg',
    tag: 'Google Maps Photo • 5.0 ★',
    author: 'Customer Photo by Rajesh M. (Google Reviewer)',
    featured: false
  },
  {
    id: 'g4',
    title: 'Single-Origin Pour Over Brewing',
    category: 'brews',
    src: 'assets/images/story_craft_coffee.jpg',
    tag: 'Google Maps Photo • 5.0 ★',
    author: 'Customer Photo by Vikram R. (Coffee Aficionado)',
    featured: false
  },
  {
    id: 'g5',
    title: 'Beachside Brunch Spread & Savory Snacks',
    category: 'snacks',
    src: 'assets/images/coastal_bites.jpg',
    tag: 'Google Maps Photo • 5.0 ★',
    author: 'Customer Photo by Sneha V. (Coromandel Coast Traveler)',
    featured: false
  }
];

/**
 * 3. Customer Reviews Data
 */
const REVIEWS_DATA = [
  {
    id: 'r1',
    name: 'Ananya Varma',
    location: 'Google Maps Reviewer • Hyderabad',
    rating: 5,
    quote: 'Anchor Cafe is hands down the best coastal discovery on the Coromandel Coast! Sitting on the Ramapuram Beach deck with their signature Sunset Mojito and milkshakes while the sea breeze rolls in was pure bliss.',
    initials: 'AV'
  },
  {
    id: 'r2',
    name: 'Vikramaditya Rao',
    location: 'Google Local Guide • Vijayawada',
    rating: 5,
    quote: 'As a specialty coffee enthusiast, their 18-hour Coastal Cold Brew blew me away. Clean notes, beautiful Choramandal beach atmosphere, and top-tier service. Must visit in Chirala!',
    initials: 'VR'
  },
  {
    id: 'r3',
    name: 'Sneha & Karthik',
    location: 'Google Maps Reviewer • Bangalore',
    rating: 5,
    quote: 'We stopped by on our weekend drive along the Choramandal coastline. The avocado sourdough crostini, artisanal ice cream, and Lotus Biscoff frappe were 10/10.',
    initials: 'SK'
  },
  {
    id: 'r4',
    name: 'Rajesh Chowdary',
    location: 'Google Local Guide • Guntur',
    rating: 5,
    quote: 'The ambiance at dusk with the official Anchor Cafe lights and sea waves crashing right in front is unmatched. Chirala finally has a world-class luxury coffee & mojito haven.',
    initials: 'RC'
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

  toggle?.addEventListener('click', () => toggleDrawer());
  overlay?.addEventListener('click', () => toggleDrawer(false));
  mobileLinks.forEach(link => link.addEventListener('click', () => toggleDrawer(false)));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer?.classList.contains('open')) {
      toggleDrawer(false);
    }
  });
}

/* ==========================================================================
   6. Interactive Menu System
   ========================================================================== */
function initMenuSystem() {
  const container = document.getElementById('menuCardsGrid');
  const searchInput = document.getElementById('menuSearchInput');
  const clearBtn = document.getElementById('menuSearchClear');
  const categoryBtns = document.querySelectorAll('.category-tab-btn');
  const dietaryBtns = document.querySelectorAll('.dietary-tag-btn');

  let currentCategory = 'all';
  let currentDietary = 'all';
  let searchQuery = '';

  function renderMenu() {
    if (!container) return;

    const filtered = MENU_DATA.filter(item => {
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
          <p>Try searching for "mojito", "cold brew", "milkshake", "ice cream", or reset your filters.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(item => `
      <article class="menu-card" data-category="${item.category}" tabindex="0">
        <div>
          <div class="menu-card-header">
            <h3 class="menu-item-title">${item.title}</h3>
            <span class="menu-item-price">${item.price}</span>
          </div>
          <p class="menu-item-desc">${item.description}</p>
        </div>
        <div class="menu-card-footer">
          <div class="menu-item-tags">
            ${item.tags.map(t => {
              const badgeClass = t === 'Veg' ? 'badge-veg' : (t === 'Signature' ? 'badge-signature' : 'badge-special');
              return `<span class="badge-tag ${badgeClass}">${t}</span>`;
            }).join('')}
          </div>
          <button type="button" 
                  class="menu-order-btn wa-trigger-btn" 
                  data-custom-text="🌊 Hey Anchor Cafe! I'd like to place a takeaway order for ${encodeURIComponent(item.title)} (${item.price}). Please confirm available items! 🍟😋" 
                  aria-label="Order ${item.title} via WhatsApp 8008370274">
             <span>Order</span>
             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </article>
    `).join('');

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

/* ==========================================================================
   7. Gallery & Accessible Lightbox
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
  let activeGalleryItems = [...GALLERY_DATA];

  function renderGallery() {
    if (!masonryContainer) return;

    activeGalleryItems = GALLERY_DATA.filter(item => 
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
      lightboxCaption.innerHTML = `<strong>${item.title}</strong><br><span style="font-size: 0.9rem; color: var(--color-gold);">${item.tag}</span> — <span style="font-size: 0.85rem; color: #E8DFC8;">${item.author}</span>`;
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
   8. Customer Reviews Carousel
   ========================================================================== */
function initReviewsCarousel() {
  const track = document.getElementById('reviewsTrack');
  const prevBtn = document.getElementById('reviewsPrevBtn');
  const nextBtn = document.getElementById('reviewsNextBtn');
  const dotsContainer = document.getElementById('reviewsDots');
  if (!track) return;

  let currentIndex = 0;
  const totalSlides = REVIEWS_DATA.length;

  track.innerHTML = REVIEWS_DATA.map(r => `
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
      </article>
    </div>
  `).join('');

  if (dotsContainer) {
    dotsContainer.innerHTML = REVIEWS_DATA.map((_, i) => `
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

  nextBtn?.addEventListener('click', nextSlide);
  prevBtn?.addEventListener('click', prevSlide);

  dotsContainer?.addEventListener('click', (e) => {
    const dot = e.target.closest('.carousel-dot');
    if (dot) {
      currentIndex = parseInt(dot.getAttribute('data-index'), 10);
      updateCarousel();
    }
  });

  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) nextSlide();
    if (touchEndX - touchStartX > 50) prevSlide();
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
  const triggers = document.querySelectorAll('.btn-whatsapp, .wa-modal-trigger');

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
      const customText = el.getAttribute('data-custom-text');
      if (!customText) {
        e.preventDefault();
        openModal();
      }
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

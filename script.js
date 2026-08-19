/**
 * ANCHOR CAFE — RAMAPURAM BEACH, CHIRALA
 * Vanilla JavaScript Engine: Data Structures, Canvas Waves, Filters, Carousel, Lightbox & Micro-Interactions
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
  initScrollReveal();
});

/* ==========================================================================
   DATA STORE (Easily editable data structures for menu, gallery, reviews)
   ========================================================================== */

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
    title: 'Blue Bay Coconut Fizz',
    category: 'mojitos',
    price: '₹210',
    description: 'Hydrating tender coconut water, blue curaçao botanical infusion, fresh basil leaves, and fizzy lemon spritz.',
    tags: ['Signature', 'Veg'],
    isSpecial: false
  },
  {
    id: 'm4',
    title: 'Gold Foamed Sea Salt Latte',
    category: 'brews',
    price: '₹230',
    description: 'Double shot espresso infused with steamed oat milk, sea salt caramel foam, and edible gold shimmer.',
    tags: ['Chef Special', 'Veg'],
    isSpecial: true
  },
  {
    id: 'm5',
    title: 'Belgian Truffle Mocha Shake',
    category: 'shakes',
    price: '₹240',
    description: 'Single-origin espresso blended with dark Callebaut Belgian chocolate, artisanal gelato, and roasted hazelnut brittle.',
    tags: ['Signature', 'Veg'],
    isSpecial: false
  },
  {
    id: 'm6',
    title: 'Lotus Biscoff Crunch Frappe',
    category: 'shakes',
    price: '₹250',
    description: 'Creamy cold frappe blended with spiced speculoos spread, topped with whipped vanilla cream and crushed biscuits.',
    tags: ['Chef Special', 'Veg'],
    isSpecial: true
  },
  {
    id: 'm7',
    title: 'Sourdough Avocado & Feta Crostini',
    category: 'bites',
    price: '₹280',
    description: 'Rustic wood-fired sourdough with ripe hass avocado, crumbed Greek feta, slow-roasted cherry tomatoes, and micro-herbs.',
    tags: ['Chef Special', 'Veg'],
    isSpecial: true
  },
  {
    id: 'm8',
    title: 'Coastal Sea-Salt Truffle Fries',
    category: 'bites',
    price: '₹210',
    description: 'Crisp golden hand-cut potatoes tossed in aromatic white truffle oil, grated parmesan, and herbed garlic aioli.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'm9',
    title: 'Artisanal Almond Butter Croissant',
    category: 'bites',
    price: '₹180',
    description: 'Flaky twice-baked butter croissant loaded with frangipane almond cream and toasted sliced almonds.',
    tags: ['Veg'],
    isSpecial: false
  },
  {
    id: 'm10',
    title: 'Warm Molten Choco Lava Tart',
    category: 'sunset',
    price: '₹260',
    description: 'Decadent dark chocolate tart with a flowing molten core, paired with artisanal Madagascar vanilla bean gelato.',
    tags: ['Chef Special', 'Veg'],
    isSpecial: true
  },
  {
    id: 'm11',
    title: 'Passionfruit Mint Coastal Splash',
    category: 'mojitos',
    price: '₹190',
    description: 'Tangy tropical passionfruit pulp, freshly torn mint sprigs, lime zest, and cold sparkling spring water.',
    tags: ['Vegan'],
    isSpecial: false
  },
  {
    id: 'm12',
    title: 'Chirala Shoreline Filter Kaapi Fusion',
    category: 'brews',
    price: '₹160',
    description: 'A contemporary artisanal tribute to traditional South Indian decoction, topped with velvety frothed milk and palm jaggery.',
    tags: ['Signature', 'Veg'],
    isSpecial: true
  }
];

/**
 * 2. Gallery Data
 */
const GALLERY_DATA = [
  {
    id: 'g1',
    title: 'Golden Hour on the Sea Deck',
    category: 'sunset',
    src: 'assets/images/hero_coastal_cafe.jpg',
    tag: 'Sunset Ambiance',
    featured: true
  },
  {
    id: 'g2',
    title: 'Single-Origin Pour Over Ritual',
    category: 'brews',
    src: 'assets/images/story_craft_coffee.jpg',
    tag: 'Artisan Coffee',
    featured: false
  },
  {
    id: 'g3',
    title: 'Signature Mojitos & Cold Brews',
    category: 'brews',
    src: 'assets/images/sunset_mojitos.jpg',
    tag: 'Beach Drinks',
    featured: false
  },
  {
    id: 'g4',
    title: 'Coastal Brunch & Artisan Bakery',
    category: 'beachfront',
    src: 'assets/images/coastal_bites.jpg',
    tag: 'Gourmet Bites',
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
    location: 'Hyderabad, India',
    rating: 5,
    quote: 'Anchor Cafe is hands down the best coastal discovery in Andhra Pradesh! Sitting on the Ramapuram Beach deck with their signature Sunset Mojito while the breeze rolls in was pure serenity.',
    initials: 'AV'
  },
  {
    id: 'r2',
    name: 'Vikramaditya Rao',
    location: 'Vijayawada, India',
    rating: 5,
    quote: 'As a specialty coffee enthusiast, their 18-hour Coastal Cold Brew blew me away. Super clean notes, stunning minimal luxury interior, and incredibly polite team. An absolute must-visit in Chirala!',
    initials: 'VR'
  },
  {
    id: 'r3',
    name: 'Sneha & Karthik',
    location: 'Bangalore, India',
    rating: 5,
    quote: 'We stopped by on our weekend coastal drive from Hyderabad. The avocado sourdough crostini and Lotus Biscoff frappe were 10/10. The ocean view from the terrace is world-class.',
    initials: 'SK'
  },
  {
    id: 'r4',
    name: 'Rajesh Chowdary',
    location: 'Guntur, India',
    rating: 5,
    quote: 'The ambiance at dusk with the golden pendant lights and sea waves crashing right in front is unmatched. Chirala finally has a world-class luxury coffee haven.',
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
   3. Subtle Canvas Wave Simulation (Lightweight, 60fps)
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

    // Active link highlighting
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

  // Escape key closes drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer?.classList.contains('open')) {
      toggleDrawer(false);
    }
  });
}

/* ==========================================================================
   6. Interactive Menu System (Search, Categories & Dietary Tags)
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
          <p>Try searching for "mojito", "cold brew", "croissant", or reset your filters.</p>
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
          <a href="https://wa.me/919876543210?text=Hi%20Anchor%20Cafe,%20I'd%20love%20to%20order%20the%20${encodeURIComponent(item.title)}" 
             class="menu-order-btn" 
             target="_blank" 
             rel="noopener" 
             aria-label="Order ${item.title} via WhatsApp">
             <span>Order</span>
             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </article>
    `).join('');
  }

  // Event Listeners for Categories
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderMenu();
    });
  });

  // Event Listeners for Dietary Pills
  dietaryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dietaryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDietary = btn.getAttribute('data-tag');
      renderMenu();
    });
  });

  // Search Input Handler
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

  // Initial Render
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
           aria-label="View photo: ${item.title}">
        <img src="${item.src}" alt="${item.title}" loading="lazy" />
        <div class="gallery-overlay">
          <span class="gallery-tag">${item.tag}</span>
          <h3 class="gallery-caption">${item.title}</h3>
        </div>
      </div>
    `).join('');

    // Attach click listeners to gallery items
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
      lightboxCaption.textContent = `${item.title} — ${item.tag}`;
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

  // Filter Buttons
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

  // Render Slides
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

  // Render Dots
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

  // Touch Swipe Support
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
   9. Contact Form & WhatsApp Reservation
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

    const message = `Hi Anchor Cafe! I'd like to reserve a table at Ramapuram Beach:%0A- Name: ${encodeURIComponent(name)}%0A- Phone: ${encodeURIComponent(phone)}%0A- Guests: ${encodeURIComponent(guests)}%0A- Time/Date: ${encodeURIComponent(date)}%0A- Note: ${encodeURIComponent(note)}`;
    
    // Redirect to WhatsApp with pre-filled inquiry
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    form.reset();
  });
}

/* ==========================================================================
   10. IntersectionObserver Scroll Reveal
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

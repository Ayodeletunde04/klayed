/**
 * Klayed Merchant Dashboard — Landing Page Interactions
 * Golden Hour Editorial System
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Scroll-State Observer
  const header = document.querySelector('.site-header');
  const announcement = document.querySelector('.announcement-wrapper');

  if (header) {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const bannerHeight = announcement ? announcement.offsetHeight : 40;
      if (scrollY > bannerHeight) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Interactive Product Suite Tabs
  const tabButtons = document.querySelectorAll('.suite-tab-btn');
  const tabPanels = document.querySelectorAll('.suite-panel');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');

      // Update button active states
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Update panel visibility
      tabPanels.forEach(panel => {
        if (panel.id === `panel-${targetTab}`) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });

  // 3. Interactive Merchant Broadcast & ROI Calculator
  const contactsSlider = document.getElementById('contacts-range');
  const contactsDisplay = document.getElementById('contacts-count-display');
  const waOpensDisplay = document.getElementById('roi-wa-opens');
  const emailOpensDisplay = document.getElementById('roi-email-opens');
  const deliveryTimeDisplay = document.getElementById('roi-delivery-time');
  const revenueLiftDisplay = document.getElementById('roi-revenue-lift');

  function updateCalculator() {
    if (!contactsSlider) return;

    const contacts = parseInt(contactsSlider.value, 10);
    if (contactsDisplay) {
      contactsDisplay.textContent = contacts.toLocaleString() + ' customers';
    }

    // WhatsApp benchmark: 98% delivery & read rate
    const waReads = Math.round(contacts * 0.98);
    // Email benchmark: 21% open rate
    const emailOpens = Math.round(contacts * 0.21);

    // Delivery time calculation at 500 msg/sec Meta Cloud API Tier 4
    const seconds = Math.ceil(contacts / 480);
    let timeStr = `${seconds} seconds`;
    if (seconds >= 60) {
      const mins = (seconds / 60).toFixed(1);
      timeStr = `${mins} min`;
    }

    // Revenue Lift Estimation: 4.8% conversion on WhatsApp vs 1.1% on email, avg order $45
    const waConversions = Math.round(contacts * 0.048);
    const emailConversions = Math.round(contacts * 0.011);
    const extraConversions = Math.max(0, waConversions - emailConversions);
    const estExtraRev = extraConversions * 45;

    if (waOpensDisplay) waOpensDisplay.textContent = waReads.toLocaleString();
    if (emailOpensDisplay) emailOpensDisplay.textContent = emailOpens.toLocaleString();
    if (deliveryTimeDisplay) deliveryTimeDisplay.textContent = timeStr;
    if (revenueLiftDisplay) revenueLiftDisplay.textContent = `+$${estExtraRev.toLocaleString()}`;
  }

  if (contactsSlider) {
    contactsSlider.addEventListener('input', updateCalculator);
    updateCalculator();
  }

  // 4. Copy Code Snippet Interaction
  const copyBtn = document.getElementById('btn-copy-code');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const codeBlock = document.getElementById('code-snippet-body');
      if (codeBlock) {
        navigator.clipboard.writeText(codeBlock.innerText).then(() => {
          const originalText = copyBtn.innerText;
          copyBtn.innerText = 'Copied!';
          setTimeout(() => {
            copyBtn.innerText = originalText;
          }, 2000);
        });
      }
    });
  }

  // 5. Header Theme Toggle Button
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-preview');
      themeToggleBtn.style.transition = 'transform 0.4s ease';
      themeToggleBtn.style.transform = themeToggleBtn.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
    });
  }

  // 6. Sequential Flow Animation Replay Control
  const replayBtn = document.getElementById('btnFlowReplay');
  const stage = document.getElementById('animatedFlowStage');

  if (replayBtn && stage) {
    replayBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const cards = stage.querySelectorAll('.flow-card');
      cards.forEach(card => {
        card.style.animation = 'none';
      });
      // Force DOM reflow to re-trigger CSS keyframe animations immediately
      void stage.offsetHeight;
      cards.forEach(card => {
        card.style.animation = '';
      });
    });
  }
});

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

  // 6. Containerless Animated Campaign Story (Setup -> Preview Pop-up Click -> Success Modal)
  const storyStage = document.getElementById('campaignStoryStage') || document.getElementById('campaignWorkflowStage');
  if (storyStage) {
    const slide1 = document.getElementById('storySlide1') || storyStage.querySelector('.story-slide-setup') || storyStage.querySelector('[data-step="1"]');
    const slide2 = document.getElementById('storySlide2') || storyStage.querySelector('.story-slide-preview') || storyStage.querySelector('[data-step="2"]');
    const slide3 = document.getElementById('storySlide3') || storyStage.querySelector('.story-slide-success') || storyStage.querySelector('[data-step="3"]');
    
    const previewTriggerBtn = document.getElementById('btnPreviewTrigger');
    const setupCursor = document.getElementById('setupClickCursor');
    const phoneOverlay = document.getElementById('waPhoneOverlay');
    const phoneLaunchFloat = document.getElementById('phoneLaunchFloat');
    const launchNowBtn = document.getElementById('btnLaunchCampaignNow');
    const launchCursor = document.getElementById('launchClickCursor') || document.getElementById('clickCursor');
    const restartBtn = document.getElementById('btnSuccessRestart');

    let isPaused = false;
    let currentPhase = 1; // 1: Setup, 2: Preview, 3: Success
    let timelineTimer = null;

    function clearAnimationClasses() {
      if (slide1) {
        slide1.classList.remove('is-active', 'is-leaving', 'active');
      }
      if (slide2) {
        slide2.classList.remove('is-active', 'is-leaving', 'active');
      }
      if (slide3) {
        slide3.classList.remove('is-active', 'is-leaving', 'active');
      }
      if (setupCursor) {
        setupCursor.classList.remove('cursor-arrived', 'cursor-clicking');
      }
      if (previewTriggerBtn) {
        previewTriggerBtn.classList.remove('is-clicked');
      }
      if (phoneOverlay) {
        phoneOverlay.classList.remove('is-popped');
      }
      if (phoneLaunchFloat) {
        phoneLaunchFloat.classList.remove('is-popped');
      }
      if (launchNowBtn) {
        launchNowBtn.classList.remove('is-clicked');
      }
      if (launchCursor) {
        launchCursor.classList.remove('cursor-arrived', 'cursor-clicking');
      }
    }

    function runPhase1() {
      currentPhase = 1;
      clearAnimationClasses();
      if (slide1) slide1.classList.add('is-active');

      // 1. Cursor glides onto "View WhatsApp Preview" button
      timelineTimer = setTimeout(() => {
        if (isPaused) return;
        if (setupCursor) setupCursor.classList.add('cursor-arrived');

        // 2. Cursor clicks the setup button
        timelineTimer = setTimeout(() => {
          if (isPaused) return;
          if (setupCursor) setupCursor.classList.add('cursor-clicking');
          if (previewTriggerBtn) previewTriggerBtn.classList.add('is-clicked');

          // 3. Smooth fade out of Setup card
          timelineTimer = setTimeout(() => {
            if (isPaused) return;
            if (slide1) slide1.classList.add('is-leaving');

            timelineTimer = setTimeout(() => {
              if (isPaused) return;
              runPhase2();
            }, 450);
          }, 550);
        }, 800);
      }, 1100);
    }

    function runPhase2() {
      currentPhase = 2;
      clearAnimationClasses();
      if (slide2) slide2.classList.add('is-active');

      // 1. Show the WhatsApp preview first so the user sees what was configured
      timelineTimer = setTimeout(() => {
        if (isPaused) return;

        // 2. Then an overlay pops up over the preview with the Launch Campaign Now button in the middle
        if (phoneOverlay) phoneOverlay.classList.add('is-popped');
        if (phoneLaunchFloat) phoneLaunchFloat.classList.add('is-popped');

        // 3. Launch cursor glides onto "🚀 Launch Campaign Now" button
        timelineTimer = setTimeout(() => {
          if (isPaused) return;
          if (launchCursor) launchCursor.classList.add('cursor-arrived');

          // 4. Cursor clicks the launch button with pulse ripple
          timelineTimer = setTimeout(() => {
            if (isPaused) return;
            if (launchCursor) launchCursor.classList.add('cursor-clicking');
            if (launchNowBtn) launchNowBtn.classList.add('is-clicked');

            // 5. Slide 2 smoothly transitions out to Success Modal
            timelineTimer = setTimeout(() => {
              if (isPaused) return;
              if (slide2) slide2.classList.add('is-leaving');

              timelineTimer = setTimeout(() => {
                if (isPaused) return;
                runPhase3();
              }, 450);
            }, 700);
          }, 700);
        }, 800);
      }, 1500); // 1.5s delay: displays preview clearly first before overlay appears
    }

    function runPhase3() {
      currentPhase = 3;
      clearAnimationClasses();
      if (slide3) slide3.classList.add('is-active');

      // Progress bar fill re-trigger
      const fillBar = slide3 ? slide3.querySelector('.success-progress-fill') : null;
      if (fillBar) {
        fillBar.style.animation = 'none';
        void fillBar.offsetHeight; // trigger reflow
        fillBar.style.animation = 'progressFill 1.8s ease-out both';
      }

      // Success modal stays visible for celebration, then smoothly loops back to Phase 1
      timelineTimer = setTimeout(() => {
        if (isPaused) return;
        if (slide3) slide3.classList.add('is-leaving');

        timelineTimer = setTimeout(() => {
          if (isPaused) return;
          runPhase1();
        }, 500);
      }, 5000);
    }

    // Interactive overrides:
    if (previewTriggerBtn) {
      previewTriggerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        clearTimeout(timelineTimer);
        runPhase2();
      });
    }

    if (launchNowBtn) {
      launchNowBtn.addEventListener('click', (e) => {
        e.preventDefault();
        clearTimeout(timelineTimer);
        launchNowBtn.classList.add('is-clicked');
        setTimeout(() => {
          runPhase3();
        }, 250);
      });
    }

    if (restartBtn) {
      restartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        clearTimeout(timelineTimer);
        runPhase1();
      });
    }

    // Hover to pause, mouseleave to resume
    storyStage.addEventListener('mouseenter', () => {
      isPaused = true;
    });

    storyStage.addEventListener('mouseleave', () => {
      if (isPaused) {
        isPaused = false;
        // Resume next step after short pause
        clearTimeout(timelineTimer);
        if (currentPhase === 1) {
          runPhase1();
        } else if (currentPhase === 2) {
          runPhase2();
        } else {
          timelineTimer = setTimeout(runPhase1, 1800);
        }
      }
    });

    // Start the story animation loop
    runPhase1();
  }
});

/**
 * Klayed Merchant Dashboard — Landing Page Interactions
 * Golden Hour Editorial System
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Scroll-State Observer
  const header = document.querySelector('.site-header');
  const announcement = document.querySelector('.announcement-wrapper');

  if (header) {
    let ticking = false;
    let isScrolled = false;

    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (!isScrolled && scrollY > 40) {
        isScrolled = true;
        header.classList.add('is-scrolled');
      } else if (isScrolled && scrollY < 15) {
        isScrolled = false;
        header.classList.remove('is-scrolled');
      }
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    onScroll();
  }

  // 2. Feature Spotlight Tabs (The Unified Engine)
  const spotlightTabs = document.querySelectorAll('.spotlight-tab-btn');
  const spotlightViews = document.querySelectorAll('.spotlight-view');

  spotlightTabs.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-spotlight');

      spotlightTabs.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      spotlightViews.forEach(view => {
        if (view.id === `view-spotlight-${target}`) {
          view.classList.add('active');
        } else {
          view.classList.remove('active');
        }
      });
    });
  });

  // Solutions Section (Teams vs Industries Switcher)
  const solModeBtns = document.querySelectorAll('.sol-mode-btn');
  const navTeams = document.getElementById('nav-group-teams');
  const navIndustries = document.getElementById('nav-group-industries');
  const solNavBtns = document.querySelectorAll('.sol-nav-btn');
  const solCards = document.querySelectorAll('.sol-showcase-card');

  // Mode Switcher (By Teams / By Industry)
  solModeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-sol-mode');

      solModeBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      if (mode === 'teams') {
        if (navTeams) navTeams.style.display = 'flex';
        if (navIndustries) navIndustries.style.display = 'none';
        const activeTeamBtn = navTeams ? (navTeams.querySelector('.sol-nav-btn.active') || navTeams.querySelector('.sol-nav-btn')) : null;
        if (activeTeamBtn) activeTeamBtn.click();
      } else {
        if (navTeams) navTeams.style.display = 'none';
        if (navIndustries) navIndustries.style.display = 'flex';
        const activeIndBtn = navIndustries ? (navIndustries.querySelector('.sol-nav-btn.active') || navIndustries.querySelector('.sol-nav-btn')) : null;
        if (activeIndBtn) activeIndBtn.click();
      }
    });
  });

  // Tab Button Click Handler
  solNavBtns.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-sol-tab');
      if (!target) return;

      const parentNav = button.closest('.solutions-tab-nav');
      if (parentNav) {
        parentNav.querySelectorAll('.sol-nav-btn').forEach(btn => {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        });
      } else {
        solNavBtns.forEach(btn => {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        });
      }
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      solCards.forEach(card => {
        if (card.id === `card-sol-${target}`) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    });
  });

  // Solutions Feature Items Accordion/Panel Switcher
  document.querySelectorAll('.sol-showcase-card').forEach(card => {
    const featureItems = card.querySelectorAll('.sol-feature-item');
    const panels = card.querySelectorAll('.sol-feature-panel');

    featureItems.forEach((item, index) => {
      const activate = () => {
        featureItems.forEach(i => {
          i.classList.remove('active');
          i.setAttribute('aria-expanded', 'false');
        });
        panels.forEach(p => {
          p.classList.remove('active');
        });

        item.classList.add('active');
        item.setAttribute('aria-expanded', 'true');

        const targetId = item.getAttribute('data-feature-target');
        let targetPanel = targetId ? card.querySelector(`#${targetId}`) : null;
        if (!targetPanel && panels[index]) {
          targetPanel = panels[index];
        }
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      };

      item.addEventListener('click', activate);
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate();
        }
      });
    });
  });

  // 3. Developer SDK Code Switcher
  const sdkSnippets = {
    curl: `curl -X POST https://api.klayed.com/v1/messages \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "to": "+2348012345678",
    "channel": "whatsapp",
    "fallback": "sms",
    "template": "order_confirmed"
  }'`,
    node: `import { Klayed } from '@klayed/sdk';

const klayed = new Klayed({ apiKey: process.env.KLAYED_API_KEY });

const message = await klayed.messages.create({
  to: '+2348012345678',
  channel: 'whatsapp',
  fallback: 'sms',
  template: 'order_confirmed'
});

console.log(message.id, message.status);`,
    python: `import klayed

client = klayed.Client(api_key="YOUR_API_KEY")

message = client.messages.create(
    to="+2348012345678",
    channel="whatsapp",
    fallback="sms",
    template="order_confirmed"
)

print(message.id, message.status)`,
    go: `package main

import (
  "fmt"
  "github.com/klayed/klayed-go"
)

func main() {
  client := klayed.NewClient("YOUR_API_KEY")
  msg, err := client.Messages.Create(&klayed.MessageParams{
    To:       "+2348012345678",
    Channel:  "whatsapp",
    Fallback: "sms",
    Template: "order_confirmed",
  })
  if err != nil { panic(err) }
  fmt.Println(msg.ID, msg.Status)
}`,
    php: `<?php
use Klayed\\KlayedClient;

$klayed = new KlayedClient('YOUR_API_KEY');

$message = $klayed->messages->create([
    'to'       => '+2348012345678',
    'channel'  => 'whatsapp',
    'fallback' => 'sms',
    'template' => 'order_confirmed'
]);

echo $message->id . ': ' . $message->status;`
  };

  const devTabs = document.querySelectorAll('.dev-lang-tab');
  const codeContent = document.getElementById('code-terminal-content');
  const copySnippetBtn = document.getElementById('btn-copy-snippet');
  const copyBtnText = document.getElementById('copy-btn-text');

  devTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const lang = tab.getAttribute('data-lang');
      devTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      if (codeContent && sdkSnippets[lang]) {
        codeContent.textContent = sdkSnippets[lang];
      }
    });
  });

  if (copySnippetBtn && codeContent) {
    copySnippetBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(codeContent.textContent).then(() => {
        const originalText = copyBtnText ? copyBtnText.textContent : 'Copy';
        if (copyBtnText) copyBtnText.textContent = 'Copied!';
        setTimeout(() => {
          if (copyBtnText) copyBtnText.textContent = originalText;
        }, 2000);
      });
    });
  }

  // 5. Header Theme Toggle Button (Zero-Flicker Native View Transition)
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    try {
      const savedTheme = localStorage.getItem('klayed-theme');
      if (savedTheme === 'dark' || document.documentElement.classList.contains('dark-preview')) {
        document.body.classList.add('dark-preview');
        document.documentElement.classList.add('dark-preview');
      }
    } catch (e) {}

    const applyTheme = (isDark) => {
      document.body.classList.toggle('dark-preview', isDark);
      document.documentElement.classList.toggle('dark-preview', isDark);
      try {
        localStorage.setItem('klayed-theme', isDark ? 'dark' : 'light');
      } catch (e) {}
    };

    themeToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isDark = !document.body.classList.contains('dark-preview');

      // If browser supports the native View Transitions API (Chrome 111+, Safari 18+, Edge),
      // crossfade the entire DOM at GPU compositor level — zero line flicker, zero tearing.
      try {
        if (document.startViewTransition) {
          document.documentElement.classList.add('view-transitioning');
          const transition = document.startViewTransition(() => {
            applyTheme(isDark);
          });
          transition.finished.finally(() => {
            document.documentElement.classList.remove('view-transitioning');
          });
        } else {
          applyTheme(isDark);
        }
      } catch (err) {
        applyTheme(isDark);
      }
    });
  }

  // 6. Interactive Omnichannel Event Orchestrator Mockup
  const orchestrator = document.getElementById('omniOrchestrator');
  if (orchestrator) {
    const tabBtns = orchestrator.querySelectorAll('.omni-tab-btn');
    const triggerNode = document.getElementById('omniTriggerNode');
    const triggerEventName = document.getElementById('triggerEventName');
    const triggerEventSub = document.getElementById('triggerEventSub');
    const triggerIconWrap = document.getElementById('triggerIconWrap');

    const emailSubject = document.getElementById('emailSubject');
    const emailPreview = document.getElementById('emailPreview');
    const emailLatency = document.getElementById('emailLatency');

    const whatsappSubject = document.getElementById('whatsappSubject');
    const whatsappPreview = document.getElementById('whatsappPreview');
    const whatsappLatency = document.getElementById('whatsappLatency');
    const whatsappActions = document.getElementById('whatsappActions');

    const smsSubject = document.getElementById('smsSubject');
    const smsPreview = document.getElementById('smsPreview');
    const smsLatency = document.getElementById('smsLatency');

    const voiceAudioStatus = document.getElementById('voiceAudioStatus');
    const voicePreview = document.getElementById('voicePreview');
    const voiceLatency = document.getElementById('voiceLatency');

    const scenarios = {
      order_placed: {
        trigger: {
          name: 'orders.created',
          sub: 'Sarah Jenkins • #KL-8492',
          icon: '<i class="hgi-stroke hgi-shopping-cart-01" style="font-size: 18px;"></i>'
        },
        email: {
          subject: 'Order Confirmation #KL-8492',
          preview: 'Receipt sent with itemized breakdown & 1-click invoice download.',
          latency: 'Delivered • 240ms'
        },
        whatsapp: {
          subject: '📦 Package En Route',
          preview: '"Hi Sarah! Your order is packing. Tap below to track live courier."',
          actions: '<span class="btn-micro-action">Track Courier 🚚</span><span class="btn-micro-action">Help Desk 💬</span>',
          latency: 'Read • 1.1s'
        },
        sms: {
          subject: 'Direct Carrier Route',
          preview: 'KLAYED: Order #KL-8492 confirmed. Dispatch code: 4920. View: klay.to/8492',
          latency: 'Sent • 85ms'
        },
        voice: {
          status: 'IVR Confirmation Call',
          preview: '"Automated dispatch confirmed Sarah\'s delivery window for tomorrow."',
          latency: 'Completed • 18s'
        }
      },
      auth_2fa: {
        trigger: {
          name: 'auth.verify_otp',
          sub: 'Alex Chen • +1 (415) 890-...',
          icon: '<i class="hgi-stroke hgi-lock" style="font-size: 18px;"></i>'
        },
        email: {
          subject: 'Security Passkey: 839-201',
          preview: 'One-time secure login code requested. Expires in 5 minutes.',
          latency: 'Delivered • 190ms'
        },
        whatsapp: {
          subject: '🔐 2FA Verification',
          preview: '"Your Klayed login code is 839201. Never share this code with anyone."',
          actions: '<span class="btn-micro-action">Copy Code 📋</span><span class="btn-micro-action">Not Me ⚠️</span>',
          latency: 'Delivered • 320ms'
        },
        sms: {
          subject: 'Priority OTP Gateway',
          preview: 'KLAYED: 839-201 is your sign-in verification code. Valid for 5 mins.',
          latency: 'Sent • 42ms'
        },
        voice: {
          status: 'Fallback Voice OTP',
          preview: '"Your verification code is eight, three, nine, two, zero, one."',
          latency: 'Standby / Ready'
        }
      },
      cart_recovery: {
        trigger: {
          name: 'checkout.abandoned',
          sub: 'Amara Okafor • Cart: $148',
          icon: '<i class="hgi-stroke hgi-shopping-basket-01" style="font-size: 18px;"></i>'
        },
        email: {
          subject: 'Still thinking it over?',
          preview: 'Your reserved items are saved. Enjoy free expedited shipping today!',
          latency: 'Delivered • 310ms'
        },
        whatsapp: {
          subject: '✨ Special Offer for Amara',
          preview: '"Hey Amara! You left 2 items in your cart. Here is 10% off: KLAY10"',
          actions: '<span class="btn-micro-action">Complete Order 🛒</span><span class="btn-micro-action">View Cart</span>',
          latency: 'Read • 850ms'
        },
        sms: {
          subject: 'Flash Recovery Alert',
          preview: 'Hi Amara, your cart is reserved for 1 hour. Finish checkout: klay.to/c/928',
          latency: 'Sent • 95ms'
        },
        voice: {
          status: 'VIP Concierge Option',
          preview: '"High-value customer flagged; queued for automated assistance."',
          latency: 'Scheduled'
        }
      }
    };

    let isTransitioning = false;

    function setScenario(scenarioKey) {
      const data = scenarios[scenarioKey];
      if (!data || isTransitioning) return;
      isTransitioning = true;

      // Update tabs smoothly
      tabBtns.forEach(btn => {
        const isActive = btn.getAttribute('data-event') === scenarioKey;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      // Pulse Klayed platform source node smoothly
      const sourceNode = document.getElementById('omniSourceNode');
      if (sourceNode) {
        sourceNode.classList.remove('source-flash');
        void sourceNode.offsetHeight;
        sourceNode.classList.add('source-flash');
      }

      // Smooth crossfade out
      const elementsToFade = [
        triggerEventName,
        triggerEventSub,
        triggerIconWrap,
        emailSubject,
        emailPreview,
        emailLatency,
        whatsappSubject,
        whatsappPreview,
        whatsappLatency,
        whatsappActions,
        smsSubject,
        smsPreview,
        smsLatency,
        voiceAudioStatus,
        voicePreview,
        voiceLatency
      ].filter(Boolean);

      elementsToFade.forEach(el => {
        el.style.transition = 'opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)';
        el.style.opacity = '0';
        el.style.transform = 'translateY(3px)';
      });

      // After soft fade-out, swap data and fade-in with staggered ease
      setTimeout(() => {
        // Trigger node gentle pulse
        if (triggerNode) {
          triggerNode.classList.remove('node-flash');
          void triggerNode.offsetHeight;
          triggerNode.classList.add('node-flash');
        }

        // Update Trigger
        if (triggerEventName) triggerEventName.textContent = data.trigger.name;
        if (triggerEventSub) triggerEventSub.textContent = data.trigger.sub;
        if (triggerIconWrap) triggerIconWrap.innerHTML = data.trigger.icon;

        // Update Email
        if (emailSubject) emailSubject.textContent = data.email.subject;
        if (emailPreview) emailPreview.textContent = data.email.preview;
        if (emailLatency) emailLatency.textContent = data.email.latency;

        // Update WhatsApp
        if (whatsappSubject) whatsappSubject.textContent = data.whatsapp.subject;
        if (whatsappPreview) whatsappPreview.textContent = data.whatsapp.preview;
        if (whatsappLatency) whatsappLatency.textContent = data.whatsapp.latency;
        if (whatsappActions) whatsappActions.innerHTML = data.whatsapp.actions;

        // Update SMS
        if (smsSubject) smsSubject.textContent = data.sms.subject;
        if (smsPreview) smsPreview.textContent = data.sms.preview;
        if (smsLatency) smsLatency.textContent = data.sms.latency;

        // Update Voice
        if (voiceAudioStatus) voiceAudioStatus.textContent = data.voice.status;
        if (voicePreview) voicePreview.textContent = data.voice.preview;
        if (voiceLatency) voiceLatency.textContent = data.voice.latency;

        // Soft fade back in
        requestAnimationFrame(() => {
          elementsToFade.forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, (i % 4) * 20);
          });
        });

        // Trigger staggered card arrival highlights
        const cards = [
          { el: document.getElementById('cardEmail'), delay: 100 },
          { el: document.getElementById('cardWhatsApp'), delay: 220 },
          { el: document.getElementById('cardSMS'), delay: 340 },
          { el: document.getElementById('cardVoice'), delay: 460 }
        ];

        cards.forEach(({ el, delay }) => {
          if (!el) return;
          setTimeout(() => {
            el.classList.remove('packet-arrival');
            void el.offsetHeight;
            el.classList.add('packet-arrival');
            setTimeout(() => el.classList.remove('packet-arrival'), 600);
          }, delay);
        });

        setTimeout(() => {
          isTransitioning = false;
        }, 500);
      }, 190);
    }

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const scenario = btn.getAttribute('data-event');
        setScenario(scenario);
      });
    });

    // Auto rotate scenarios gently every 6.5 seconds, pause on hover
    const scenarioKeys = ['order_placed', 'auth_2fa', 'cart_recovery'];
    let currentIdx = 0;
    let isHovered = false;

    setInterval(() => {
      if (!isHovered) {
        currentIdx = (currentIdx + 1) % scenarioKeys.length;
        setScenario(scenarioKeys[currentIdx]);
      }
    }, 6500);

    orchestrator.addEventListener('mouseenter', () => { isHovered = true; });
    orchestrator.addEventListener('mouseleave', () => { isHovered = false; });
  }

  // 7. Legacy Campaign Story Stage (if present)
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

  // 12. Automated Workflow Builder Interactive Accordions & Item Selection
  const wfGroups = document.querySelectorAll('.wf-group-block');
  wfGroups.forEach(group => {
    const headerRow = group.querySelector('.wf-group-row');
    const chevron = group.querySelector('.wf-chevron-icon');
    const items = group.querySelectorAll('.wf-item-card, .wf-items-stack');

    if (headerRow && chevron) {
      headerRow.addEventListener('click', () => {
        const isCollapsed = group.classList.toggle('is-collapsed');
        if (isCollapsed) {
          chevron.classList.replace('hgi-arrow-up-01', 'hgi-arrow-down-01');
          items.forEach(el => el.style.display = 'none');
        } else {
          chevron.classList.replace('hgi-arrow-down-01', 'hgi-arrow-up-01');
          items.forEach(el => el.style.display = '');
        }
      });
    }

    const cards = group.querySelectorAll('.wf-item-card');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        // Toggle selection highlight
        const wasActive = card.classList.contains('is-active');
        cards.forEach(c => c.classList.remove('is-active'));
        if (!wasActive) {
          card.classList.add('is-active');
        }
      });
    });
  });

  // 13. Header Dropdowns Interactive Handlers (Products & Solutions)
  const navDropdowns = document.querySelectorAll('.nav-item-dropdown');
  if (navDropdowns.length > 0) {
    navDropdowns.forEach(dropdown => {
      const btn = dropdown.querySelector('.nav-link-item');
      if (!btn) return;

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const willOpen = !dropdown.classList.contains('is-open');
        // Close any other open dropdown
        navDropdowns.forEach(other => {
          if (other !== dropdown) {
            other.classList.remove('is-open');
            const otherBtn = other.querySelector('.nav-link-item');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });
        dropdown.classList.toggle('is-open', willOpen);
        btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      });

      // Close dropdown when any link inside it is clicked
      dropdown.querySelectorAll('.nav-dropdown-menu a').forEach(link => {
        link.addEventListener('click', () => {
          dropdown.classList.remove('is-open');
          btn.setAttribute('aria-expanded', 'false');
        });
      });
    });

    // Close all dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      navDropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('is-open');
          const btn = dropdown.querySelector('.nav-link-item');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Connect mega dropdown links that target specific solution tabs
    const solTabTriggers = document.querySelectorAll('[data-sol-tab-trigger]');
    solTabTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const tabTarget = trigger.getAttribute('data-sol-tab-trigger');
        if (tabTarget) {
          const tabBtn = document.querySelector(`.sol-nav-btn[data-sol-tab="${tabTarget}"]`);
          if (tabBtn) {
            tabBtn.click();
          }
        }
      });
    });
  }

  // 10. V2 Developer Section Code Tabs Switcher & Copy Handler
  const v2CodeTabs = document.querySelectorAll('.v2-code-tab');
  const v2CodeBlocks = document.querySelectorAll('.v2-code-block');
  const v2CopyBtn = document.getElementById('v2-copy-btn');
  const v2CopyText = document.getElementById('v2-copy-text');

  if (v2CodeTabs.length) {
    v2CodeTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const lang = tab.getAttribute('data-lang');
        v2CodeTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        v2CodeBlocks.forEach(block => {
          if (block.id === `code-${lang}`) {
            block.classList.add('active');
          } else {
            block.classList.remove('active');
          }
        });
      });
    });
  }

  if (v2CopyBtn) {
    v2CopyBtn.addEventListener('click', () => {
      const activeBlock = document.querySelector('.v2-code-block.active');
      if (activeBlock) {
        const codeText = activeBlock.textContent;
        navigator.clipboard.writeText(codeText).then(() => {
          if (v2CopyText) v2CopyText.textContent = 'Copied!';
          setTimeout(() => {
            if (v2CopyText) v2CopyText.textContent = 'Copy';
          }, 2000);
        }).catch(() => {
          if (v2CopyText) v2CopyText.textContent = 'Copied!';
          setTimeout(() => {
            if (v2CopyText) v2CopyText.textContent = 'Copy';
          }, 2000);
        });
      }
    });
  }

  // 11. Industry Use-Case Journey System ("The Journey" Controller)
  initIndustryJourneySystem();

  // 12. Hero Visual: "One Customer, One Conversation" Animation Controller
  initHeroConversationVisual();
});

/**
 * Hero Visual: "One Customer, One Conversation" Animation Controller
 * Coordinates the sequential multi-channel timeline, campaign dispach,
 * shared inbox view, and auto-advancing interactive pills.
 */
function initHeroConversationVisual() {
  const root = document.getElementById('hero-conversation-visual');
  if (!root) return;

  const tabs = root.querySelectorAll('.khv-tab-pill');
  const scenes = root.querySelectorAll('.khv-scene');
  const spineFill = document.getElementById('khv-spine-fill');
  const spineDot = document.getElementById('khv-spine-dot');
  const msgNodes = root.querySelectorAll('.khv-msg-node');
  const voiceKeypad = document.getElementById('khv-keypad-1');
  const voiceKeypadStatus = document.getElementById('khv-keypad-status');
  const voiceStatusLabel = document.getElementById('khv-voice-status-label');
  const caption1 = document.getElementById('khv-caption-1');
  const caption2 = document.getElementById('khv-caption-2');
  const caption3 = document.getElementById('khv-caption-3');
  const channelIcons = root.querySelectorAll('#khv-topbar-channels .khv-ch-icon');

  const barWa = document.getElementById('khv-bar-wa');
  const barSms = document.getElementById('khv-bar-sms');
  const barEmail = document.getElementById('khv-bar-email');

  let currentScene = 0;
  let activeTimeouts = [];
  let isPaused = false;
  let pauseResumeTimeout = null;

  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function clearAllTimers() {
    activeTimeouts.forEach(t => clearTimeout(t));
    activeTimeouts = [];
    if (pauseResumeTimeout) {
      clearTimeout(pauseResumeTimeout);
      pauseResumeTimeout = null;
    }
  }

  function schedule(fn, delay) {
    const id = setTimeout(fn, delay);
    activeTimeouts.push(id);
    return id;
  }

  function setScene(index, isManual = false) {
    clearAllTimers();
    currentScene = index;

    // Update Tab UI
    tabs.forEach((tab, i) => {
      const active = i === index;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
      tab.setAttribute('tabindex', active ? '0' : '-1');
    });

    // Update Scenes
    scenes.forEach((sc, i) => {
      sc.classList.toggle('active', i === index);
    });

    // Handle Reduced Motion
    if (prefersReducedMotion) {
      msgNodes.forEach(m => m.classList.add('is-visible'));
      if (spineFill) spineFill.style.height = '100%';
      if (caption1) caption1.classList.add('is-visible');
      if (caption2) caption2.classList.add('is-visible');
      if (caption3) caption3.classList.add('is-visible');
      if (barWa) barWa.style.width = '100%';
      if (barSms) barSms.style.width = '100%';
      if (barEmail) barEmail.style.width = '100%';
      return;
    }

    if (index === 0) {
      playScene1();
    } else if (index === 1) {
      playScene2();
    } else if (index === 2) {
      playScene3();
    }
  }

  function playScene1() {
    // Reset state for Scene 1
    msgNodes.forEach(m => m.classList.remove('is-visible'));
    if (caption1) caption1.classList.remove('is-visible');
    if (voiceKeypad) voiceKeypad.classList.remove('is-pressed');
    if (voiceKeypadStatus) voiceKeypadStatus.textContent = 'Press 1';
    if (voiceStatusLabel) voiceStatusLabel.textContent = 'Calling...';
    if (spineFill) spineFill.style.height = '0%';
    if (spineDot) {
      spineDot.classList.remove('is-active');
      spineDot.style.top = '0%';
    }

    // Message 1: Email (0.4s)
    schedule(() => {
      if (msgNodes[0]) msgNodes[0].classList.add('is-visible');
      if (spineFill) spineFill.style.height = '14%';
      if (spineDot) {
        spineDot.classList.add('is-active');
        spineDot.style.top = '14%';
      }
    }, 400);

    // Message 2: WhatsApp Outbound (1.9s)
    schedule(() => {
      if (msgNodes[1]) msgNodes[1].classList.add('is-visible');
      if (spineFill) spineFill.style.height = '33%';
      if (spineDot) spineDot.style.top = '33%';
    }, 1900);

    // Message 3: WhatsApp Inbound (3.4s)
    schedule(() => {
      if (msgNodes[2]) msgNodes[2].classList.add('is-visible');
      if (spineFill) spineFill.style.height = '50%';
      if (spineDot) spineDot.style.top = '50%';
    }, 3400);

    // Message 4: WhatsApp Outbound (4.8s)
    schedule(() => {
      if (msgNodes[3]) msgNodes[3].classList.add('is-visible');
      if (spineFill) spineFill.style.height = '67%';
      if (spineDot) spineDot.style.top = '67%';
    }, 4800);

    // Message 5: SMS (6.3s)
    schedule(() => {
      if (msgNodes[4]) msgNodes[4].classList.add('is-visible');
      if (spineFill) spineFill.style.height = '83%';
      if (spineDot) spineDot.style.top = '83%';
    }, 6300);

    // Message 6: Voice (7.7s)
    schedule(() => {
      if (msgNodes[5]) msgNodes[5].classList.add('is-visible');
      if (spineFill) spineFill.style.height = '98%';
      if (spineDot) spineDot.style.top = '98%';
    }, 7700);

    // Voice Keypad press & Status update (8.7s)
    schedule(() => {
      if (voiceKeypad) voiceKeypad.classList.add('is-pressed');
      if (voiceKeypadStatus) voiceKeypadStatus.textContent = 'Confirmed';
      if (voiceStatusLabel) voiceStatusLabel.textContent = 'Confirmed';
    }, 8700);

    // Channel Icons Pulse Sequence + Caption Reveal (9.3s)
    schedule(() => {
      channelIcons.forEach((icon, i) => {
        schedule(() => {
          icon.classList.add('pulse');
          schedule(() => icon.classList.remove('pulse'), 450);
        }, i * 160);
      });

      if (caption1) caption1.classList.add('is-visible');
    }, 9300);

    // Auto-advance to Scene 2 (after 2s pause, ~11.8s)
    schedule(() => {
      if (!isPaused) setScene(1);
    }, 11800);
  }

  function playScene2() {
    // Reset Scene 2
    if (caption2) caption2.classList.remove('is-visible');
    if (barWa) barWa.style.width = '0%';
    if (barSms) barSms.style.width = '0%';
    if (barEmail) barEmail.style.width = '0%';

    // Progress Bars animate filling
    schedule(() => {
      if (barWa) barWa.style.width = '100%';
      if (barSms) barSms.style.width = '100%';
      if (barEmail) barEmail.style.width = '100%';
    }, 400);

    // Caption fades in
    schedule(() => {
      if (caption2) caption2.classList.add('is-visible');
    }, 1600);

    // Auto-advance to Scene 3 (~8.0s)
    schedule(() => {
      if (!isPaused) setScene(2);
    }, 8000);
  }

  function playScene3() {
    // Reset Scene 3
    if (caption3) caption3.classList.remove('is-visible');

    // Caption fades in
    schedule(() => {
      if (caption3) caption3.classList.add('is-visible');
    }, 1200);

    // Auto-advance loop back to Scene 1 (~8.0s)
    schedule(() => {
      if (!isPaused) setScene(0);
    }, 8000);
  }

  // Clickable Tab Pills
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      setScene(index, true);
    });

    // Keyboard navigation (Arrow keys + Home/End)
    tab.addEventListener('keydown', (e) => {
      let nextIndex = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextIndex = (index + 1) % tabs.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        nextIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (e.key === 'Home') {
        nextIndex = 0;
      } else if (e.key === 'End') {
        nextIndex = tabs.length - 1;
      }

      if (nextIndex !== null) {
        e.preventDefault();
        tabs[nextIndex].focus();
        setScene(nextIndex, true);
      }
    });
  });

  // Pause on hover or focus
  root.addEventListener('mouseenter', () => { isPaused = true; });
  root.addEventListener('mouseleave', () => {
    isPaused = false;
  });
  root.addEventListener('focusin', () => { isPaused = true; });
  root.addEventListener('focusout', () => {
    isPaused = false;
  });

  // Initial trigger
  setScene(0);
}

// ==========================================================================
// CHANNEL FEATURE TILES (2x2 GRID REDESIGN)
// Plays ONCE when tile scrolls into view (~5 seconds), ends on a complete
// final frame that stays frozen, and replays on hover or keyboard focus.
// ==========================================================================
function initChannelTiles() {
  const channelTiles = document.querySelectorAll('.cft-tile');
  if (!channelTiles.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const replayTileAnimation = (tile) => {
    if (prefersReducedMotion) return;
    tile.classList.remove('is-in-view');
    void tile.offsetWidth; // Force DOM reflow to restart CSS keyframe animations cleanly
    tile.classList.add('is-in-view');
  };

  if ('IntersectionObserver' in window) {
    const tileObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in-view');
          tileObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '50px 0px'
    });

    channelTiles.forEach(tile => {
      tileObserver.observe(tile);

      // Replay on hover
      let isReplaying = false;
      tile.addEventListener('mouseenter', () => {
        if (!isReplaying && tile.classList.contains('is-in-view')) {
          isReplaying = true;
          replayTileAnimation(tile);
          setTimeout(() => { isReplaying = false; }, 4000);
        }
      });

      // Replay on keyboard focus inside illustration
      const illusArea = tile.querySelector('.cft-illus');
      if (illusArea) {
        illusArea.addEventListener('focus', () => {
          if (!isReplaying && tile.classList.contains('is-in-view')) {
            isReplaying = true;
            replayTileAnimation(tile);
            setTimeout(() => { isReplaying = false; }, 4000);
          }
        });
      }
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    channelTiles.forEach(tile => tile.classList.add('is-in-view'));
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChannelTiles);
} else {
  initChannelTiles();
}

// ==========================================================================
// CHANNEL CARDS (STACKING SHOWCASE ON SCROLL)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  const stackCards = document.querySelectorAll('.channel-stack-card');
  if (stackCards.length > 0) {
    const onStackScroll = () => {
      stackCards.forEach((card, idx) => {
        const rect = card.getBoundingClientRect();
        const stickyTop = 96 + (idx * 16);
        if (rect.top <= stickyTop + 2) {
          card.classList.add('is-stuck');
        } else {
          card.classList.remove('is-stuck');
        }
      });
    };
    window.addEventListener('scroll', onStackScroll, { passive: true });
    onStackScroll();
  }
});
// ==========================================================================
// 13. INDUSTRY USE-CASE JOURNEY SYSTEM ("THE JOURNEY")
// Reusable data-driven component for 4-step automated customer journeys.
// Takes a data object per tab (headline, subtext, business name, 4 steps, outcome).
// ==========================================================================

const INDUSTRY_JOURNEYS_DATA = {
  ecommerce: {
    label: "Ecommerce",
    headline: "Recover carts, confirm orders, collect reviews. Done.",
    subtext: "Nudge shoppers who left, confirm every payment, share live delivery updates, and ask for a review, all on the channel each customer actually reads.",
    businessName: "Zuri Stores",
    outcome: "From abandoned cart to review, with no one on your team sending a message.",
    steps: [
      {
        label: "Cart left behind",
        trigger: "When a shopper leaves without paying",
        channel: "whatsapp",
        channelLabel: "WhatsApp",
        preview: {
          channel: "whatsapp",
          sender: "Zuri Stores",
          time: "10:14 AM",
          bubbleText: "You left something in your cart. Want to finish your order?",
          quickReplies: ["Complete order", "No thanks"]
        }
      },
      {
        label: "Payment received",
        trigger: "When payment goes through",
        channel: "sms",
        channelLabel: "SMS",
        preview: {
          channel: "sms",
          sender: "ZURISTORES",
          time: "10:18 AM",
          smsTitle: "Payment confirmed",
          smsBody: "N45,000 payment received. Order #8492 confirmed. Thank you!"
        }
      },
      {
        label: "Order shipped",
        trigger: "When the order leaves the warehouse",
        channel: "whatsapp",
        channelLabel: "WhatsApp",
        preview: {
          channel: "whatsapp",
          sender: "Zuri Stores",
          time: "02:30 PM",
          bubbleText: "Your order is on the way.",
          quickReplies: ["Track order", "Change address"]
        }
      },
      {
        label: "After delivery",
        trigger: "Two days after delivery",
        channel: "email",
        channelLabel: "Email",
        preview: {
          channel: "email",
          sender: "Zuri Stores",
          time: "Two days after",
          emailSubject: "How was your order?",
          emailSnippet: "Tap a star to rate your items from Zuri Stores.",
          ratingStars: true,
          btnText: "Submit review"
        }
      }
    ]
  },
  fintech: {
    label: "Fintech",
    headline: "Verify users, alert instantly, stop fraud. Done.",
    subtext: "Deliver login codes that always arrive, tell customers about every transaction, and confirm suspicious activity with a phone call.",
    businessName: "Cedar Pay",
    outcome: "Verified, alerted and protected, on whichever channel reaches the customer first.",
    steps: [
      {
        label: "Login",
        trigger: "When a customer signs in",
        channel: "sms",
        channelLabel: "SMS",
        backupChip: "Voice call if not delivered",
        preview: {
          channel: "sms",
          sender: "CEDARPAY",
          time: "08:12 AM",
          smsTitle: "Security code",
          smsBody: "Your code is 492 013. Do not share it."
        }
      },
      {
        label: "Money moved",
        trigger: "When a transfer is made",
        channel: "whatsapp",
        channelLabel: "WhatsApp",
        preview: {
          channel: "whatsapp",
          sender: "Cedar Pay",
          time: "11:05 AM",
          bubbleText: "You sent N120,000 to Tunde Bello. Balance: N48,500.",
          quickReplies: ["Not me"]
        }
      },
      {
        label: "Something looks wrong",
        trigger: "When a payment looks unusual",
        channel: "voice",
        channelLabel: "Voice",
        preview: {
          channel: "voice",
          sender: "Cedar Pay",
          duration: "00:16",
          transcript: "We noticed a payment of N350,000. Press 1 if this was you, or 2 to block your card.",
          keypadActive: "2",
          resultText: "Card blocked"
        }
      },
      {
        label: "Month end",
        trigger: "On the 1st of every month",
        channel: "email",
        channelLabel: "Email",
        preview: {
          channel: "email",
          sender: "Cedar Pay",
          time: "1st of month",
          emailSubject: "Your October statement is ready",
          emailSnippet: "Review your detailed spending breakdown and transfer summary for October.",
          btnText: "View statement"
        }
      }
    ]
  },
  logistics: {
    label: "Logistics",
    headline: "Track parcels, reach recipients, confirm delivery. Done.",
    subtext: "Keep senders and recipients updated at every stop, call automatically when nobody answers, and send proof when the parcel lands.",
    businessName: "Swiftline Delivery",
    outcome: "Recipients stay informed and nobody is chasing them by phone.",
    steps: [
      {
        label: "Parcel picked up",
        trigger: "When the rider collects the parcel",
        channel: "whatsapp",
        channelLabel: "WhatsApp",
        preview: {
          channel: "whatsapp",
          sender: "Swiftline Delivery",
          time: "09:15 AM",
          bubbleText: "Your parcel is with Swiftline. Track it here.",
          quickReplies: ["Track parcel"]
        }
      },
      {
        label: "Rider close by",
        trigger: "When the rider is 10 minutes away",
        channel: "sms",
        channelLabel: "SMS",
        preview: {
          channel: "sms",
          sender: "SWIFTLINE",
          time: "01:25 PM",
          smsTitle: "Courier arrival",
          smsBody: "Your rider Musa arrives in about 10 minutes."
        }
      },
      {
        label: "Nobody answered",
        trigger: "When the recipient does not pick up",
        channel: "voice",
        channelLabel: "Voice",
        preview: {
          channel: "voice",
          sender: "Swiftline Delivery",
          duration: "00:18",
          transcript: "Your parcel has arrived. Press 1 if you are home, or 2 to reschedule.",
          keypadActive: "1",
          resultText: "Recipient confirmed"
        }
      },
      {
        label: "Delivered",
        trigger: "When the parcel is handed over",
        channel: "email",
        channelLabel: "Email",
        preview: {
          channel: "email",
          sender: "Swiftline Delivery",
          time: "01:42 PM",
          emailSubject: "Delivered: parcel #SW-3071",
          emailSnippet: "Signed by Adaeze",
          btnText: "View proof"
        }
      }
    ]
  },
  healthcare: {
    label: "Healthcare",
    headline: "Book appointments, cut no-shows, follow up. Done.",
    subtext: "Confirm bookings, remind patients the day before, call those without smartphones, and tell them when something is ready, with no medical details in any message.",
    businessName: "Palmview Clinic",
    outcome: "Fewer missed appointments, and patient details never travel in a message.",
    steps: [
      {
        label: "Appointment booked",
        trigger: "When a patient books",
        channel: "sms",
        channelLabel: "SMS",
        preview: {
          channel: "sms",
          sender: "PALMVIEW",
          time: "09:30 AM",
          smsTitle: "Appointment alert",
          smsBody: "Your appointment is booked for Tue 14 Oct, 10:30 AM. Reply C to cancel."
        }
      },
      {
        label: "Day before",
        trigger: "24 hours before the visit",
        channel: "whatsapp",
        channelLabel: "WhatsApp",
        preview: {
          channel: "whatsapp",
          sender: "Palmview Clinic",
          time: "10:30 AM",
          bubbleText: "Reminder: your appointment is tomorrow at 10:30 AM.",
          quickReplies: [
            { text: "Confirm", tapped: true },
            { text: "Reschedule" }
          ]
        }
      },
      {
        label: "No reply",
        trigger: "When a patient has not confirmed",
        channel: "voice",
        channelLabel: "Voice",
        preview: {
          channel: "voice",
          sender: "Palmview Clinic",
          duration: "00:20",
          transcript: "Please press 1 to confirm tomorrow's appointment, or 2 to reschedule.",
          keypadActive: "1",
          resultText: "Patient confirmed"
        }
      },
      {
        label: "After the visit",
        trigger: "When results are ready",
        channel: "email",
        channelLabel: "Email",
        preview: {
          channel: "email",
          sender: "Palmview Clinic",
          time: "Wednesday",
          emailSubject: "Your results are ready",
          emailSnippet: "Sign in to your patient portal to view them.",
          btnText: "Patient portal"
        }
      }
    ]
  },
  education: {
    label: "Education",
    headline: "Admit students, collect fees, keep parents informed. Done.",
    subtext: "Send offer letters, remind parents about fees, alert them the moment a child is absent, and share timetables with a whole class at once.",
    businessName: "Brightpath Academy",
    outcome: "Parents are always informed, with no phone trees and no printed notices.",
    steps: [
      {
        label: "Admission offer",
        trigger: "When a place is offered",
        channel: "email",
        channelLabel: "Email",
        preview: {
          channel: "email",
          sender: "Brightpath Academy",
          time: "Tuesday",
          emailSubject: "Your offer of admission",
          emailSnippet: "We are pleased to offer admission for the upcoming academic year.",
          btnText: "Accept place"
        }
      },
      {
        label: "Fees due",
        trigger: "7 days before the deadline",
        channel: "whatsapp",
        channelLabel: "WhatsApp",
        backupChip: "SMS if not read",
        preview: {
          channel: "whatsapp",
          sender: "Brightpath Academy",
          time: "11:20 AM",
          bubbleText: "Term 2 fees of N180,000 are due on 20 Oct.",
          quickReplies: ["Pay now"]
        }
      },
      {
        label: "Child absent",
        trigger: "When attendance is marked",
        channel: "sms",
        channelLabel: "SMS",
        preview: {
          channel: "sms",
          sender: "BRIGHTPATH",
          time: "08:45 AM",
          smsTitle: "Attendance notification",
          smsBody: "Chidi was marked absent today. Reply to tell us why."
        }
      },
      {
        label: "Exams",
        trigger: "When the timetable is published",
        channel: "whatsapp",
        channelLabel: "WhatsApp",
        preview: {
          channel: "whatsapp",
          sender: "Brightpath Academy",
          time: "02:00 PM",
          broadcastBadge: "Sent to every parent in SS2",
          bubbleText: "SS2 exam timetable is ready.",
          quickReplies: ["View timetable"]
        }
      }
    ]
  },
  hospitality: {
    label: "Hospitality",
    headline: "Check in guests, handle requests, collect feedback. Done.",
    subtext: "Let guests check in with one tap, ask for anything on WhatsApp, get picked up on time, and tell you how the stay went, with no front desk queue.",
    businessName: "Grand Horizon Resort",
    outcome: "Guests check in, ask and give feedback from their phone. Your front desk stays free for the guests who need a person.",
    steps: [
      {
        label: "Before arrival",
        trigger: "The day before the stay",
        channel: "whatsapp",
        channelLabel: "WhatsApp",
        preview: {
          channel: "whatsapp",
          sender: "Grand Horizon Resort",
          time: "10:00 AM",
          bubbleText: "Welcome to Grand Horizon. Check in now and skip the front desk.",
          quickReplies: ["Check in"]
        }
      },
      {
        label: "Room ready",
        trigger: "When the room is cleaned",
        channel: "whatsapp",
        channelLabel: "WhatsApp",
        preview: {
          channel: "whatsapp",
          sender: "Grand Horizon Resort",
          time: "01:30 PM",
          messages: [
            { from: "business", text: "Your room, Penthouse 402, is ready.", time: "1:30 PM" },
            { from: "customer", text: "Can we have late checkout and a poolside table for 8pm?", time: "1:32 PM" },
            { from: "business", text: "Done. Checkout is 2 PM and table 14 is reserved.", time: "1:33 PM" }
          ]
        }
      },
      {
        label: "Airport pickup",
        trigger: "When the driver arrives",
        channel: "sms",
        channelLabel: "SMS",
        preview: {
          channel: "sms",
          sender: "GRANDHORIZON",
          time: "03:15 PM",
          smsTitle: "Chauffeur arrival",
          smsBody: "Your chauffeur has arrived at Arrivals. Look for the Grand Horizon sign."
        }
      },
      {
        label: "After the stay",
        trigger: "The morning after checkout",
        channel: "whatsapp",
        channelLabel: "WhatsApp",
        preview: {
          channel: "whatsapp",
          sender: "Grand Horizon Resort",
          time: "10:00 AM",
          bubbleText: "How was your stay with us?",
          ratingStars: true,
          followUp: {
            text: "Thank you for letting us know! We look forward to welcoming you back.",
            time: "10:02 AM"
          }
        }
      }
    ]
  }
};

/**
 * Returns inline SVG for the 4 communication channels
 */
function getChannelIconSvg(channel) {
  switch (channel) {
    case 'whatsapp':
      return `<svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" aria-hidden="true"><path d="M13.6 2.4A7.9 7.9 0 0 0 8 0C3.6 0 0 3.6 0 8a7.9 7.9 0 0 0 1.2 4.2L0 16l3.9-1.2A7.9 7.9 0 0 0 8 16c4.4 0 8-3.6 8-8 0-2.1-.8-4.1-2.4-5.6zM8 14.7c-1.3 0-2.5-.3-3.6-1l-.3-.2-2.3.7.7-2.2-.2-.3A6.7 6.7 0 0 1 1.3 8c0-3.7 3-6.7 6.7-6.7 1.8 0 3.5.7 4.7 2 1.3 1.2 2 2.9 2 4.7 0 3.7-3 6.7-6.7 6.7z"/></svg>`;
    case 'sms':
      return `<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 10a2 2 0 0 1-2 2H4l-3 3V3a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2z"/></svg>`;
    case 'email':
      return `<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="1" y="2" width="14" height="12" rx="1.5"/><polyline points="15 3 8 9 1 3"/></svg>`;
    case 'voice':
      return `<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14.7 11.3v2a1.3 1.3 0 0 1-1.5 1.4 13.2 13.2 0 0 1-5.8-2 13 13 0 0 1-4-4A13.2 13.2 0 0 1 1.4 2.8 1.3 1.3 0 0 1 2.7 1.3h2a1.3 1.3 0 0 1 1.3 1.1 8.6 8.6 0 0 0 .5 1.9c.2.6 0 1.2-.4 1.6l-.8.8a10.4 10.4 0 0 0 4 4l.8-.8a1.3 1.3 0 0 1 1.6-.4c.6.3 1.2.4 1.9.5a1.3 1.3 0 0 1 1.1 1.3z"/></svg>`;
    default:
      return '';
  }
}

/**
 * Controller for Industry Journey System
 */
function initIndustryJourneySystem(customData) {
  const journeysData = customData || INDUSTRY_JOURNEYS_DATA;

  const sectionEl = document.getElementById('industries');
  if (!sectionEl) return;

  const tabBtns = sectionEl.querySelectorAll('.kij-tab-btn');
  const stageWrapper = sectionEl.querySelector('.kij-stage-wrapper');
  const headlineEl = document.getElementById('kij-headline');
  const subtextEl = document.getElementById('kij-subtext');
  const stepsStack = document.getElementById('kij-steps-stack');
  const spineDot = document.getElementById('kij-spine-dot');
  const phoneScreen = document.getElementById('kij-phone-screen');
  const outcomeText = document.getElementById('kij-outcome-text');
  const illustrationCard = document.getElementById('kij-illustration');

  if (!tabBtns.length || !stageWrapper || !headlineEl || !stepsStack || !phoneScreen) {
    return;
  }

  let activeTabKey = 'ecommerce';
  let activeStepIndex = 0;
  let autoplayTimer = null;
  let isPaused = false;
  let hasUserInteracted = false;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * Generates phone screen markup for active step
   */
  function renderPhoneScreen(step) {
    const p = step.preview;
    const channel = p.channel;

    if (channel === 'whatsapp') {
      const initials = (p.sender || 'ZS').split(' ').map(n => n[0]).join('').slice(0, 2);
      
      const quickRepliesHtml = (p.quickReplies || [])
        .map(qr => {
          const isObj = typeof qr === 'object';
          const text = isObj ? qr.text : qr;
          const isTapped = isObj && qr.tapped;
          return `<span class="kij-pv-qr-pill ${isTapped ? 'is-tapped' : ''}">${isTapped ? '✓ ' : ''}${text}</span>`;
        })
        .join('');

      const broadcastBadgeHtml = p.broadcastBadge ? `
        <div class="kij-pv-wa-broadcast">
          <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor"><path d="M11.5 1a.5.5 0 0 1 .5.5v1.2a6 6 0 0 1 0 10.6v1.2a.5.5 0 0 1-.8.4L8.2 13H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.2l3-1.9a.5.5 0 0 1 .3-.1z"/></svg>
          <span>${p.broadcastBadge}</span>
        </div>
      ` : '';

      const ratingStarsHtml = p.ratingStars ? `
        <div class="kij-stars-row" role="img" aria-label="Five stars">
          <svg class="kij-star-svg" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="kij-star-svg" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="kij-star-svg" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="kij-star-svg" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="kij-star-svg" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
        </div>
      ` : '';

      const followUpHtml = p.followUp ? `
        <div class="kij-pv-wa-bubble" style="margin-top: 4px;">
          <p class="kij-pv-msg">${p.followUp.text}</p>
          <span class="kij-pv-time">${p.followUp.time || ''}</span>
        </div>
      ` : '';

      let messagesHtml = '';
      if (p.messages && p.messages.length) {
        messagesHtml = p.messages.map(m => `
          <div class="kij-pv-wa-bubble ${m.from === 'customer' ? 'is-customer' : ''}">
            <p class="kij-pv-msg">${m.text}</p>
            <span class="kij-pv-time">${m.time || ''}</span>
          </div>
        `).join('');
      } else {
        messagesHtml = `
          <div class="kij-pv-wa-bubble">
            <p class="kij-pv-msg">${p.bubbleText}</p>
            <span class="kij-pv-time">${p.time || ''}</span>
          </div>
        `;
      }

      return `
        <div class="kij-phone-view kij-phone-wa" role="region" aria-label="WhatsApp message from ${p.sender}">
          <div class="kij-pv-head">
            <div class="kij-pv-avatar">${initials}</div>
            <div class="kij-pv-info">
              <div class="kij-pv-title-row">
                <span class="kij-pv-title">${p.sender}</span>
                <svg viewBox="0 0 16 16" width="11" height="11" fill="#22C55E" aria-label="Verified"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-1.03a.75.75 0 0 0-1.06-1.06L6.75 10.16 4.78 8.19a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.75-5.78z"/></svg>
              </div>
              <span class="kij-pv-sub">Official account</span>
            </div>
          </div>
          <div class="kij-pv-body">
            ${broadcastBadgeHtml}
            ${messagesHtml}
            ${ratingStarsHtml}
            ${followUpHtml}
            ${quickRepliesHtml ? `<div class="kij-pv-qr-list">${quickRepliesHtml}</div>` : ''}
          </div>
        </div>
      `;
    }

    if (channel === 'sms') {
      return `
        <div class="kij-phone-view kij-phone-sms" role="region" aria-label="SMS alert from ${p.sender}">
          <div class="kij-pv-sms-badge">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <span>Messages</span>
          </div>
          <div class="kij-pv-sms-card">
            <div class="kij-pv-sms-top">
              <span class="kij-pv-sms-title">${p.smsTitle || 'Alert'}</span>
              <span class="kij-pv-time">${p.time || 'now'}</span>
            </div>
            <strong class="kij-pv-sms-sender">${p.sender}</strong>
            <p class="kij-pv-sms-msg">${p.smsBody}</p>
            <div class="kij-pv-sms-delivered">
              <svg viewBox="0 0 16 16" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="3 8.5 6.5 12 13 4.5"/></svg>
              <span>Delivered</span>
            </div>
          </div>
        </div>
      `;
    }

    if (channel === 'email') {
      const ratingStarsHtml = p.ratingStars ? `
        <div class="kij-stars-row" role="img" aria-label="Five stars">
          <svg class="kij-star-svg" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="kij-star-svg" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="kij-star-svg" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="kij-star-svg" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="kij-star-svg" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
        </div>
      ` : '';

      return `
        <div class="kij-phone-view kij-phone-email" role="region" aria-label="Email update from ${p.sender}">
          <div class="kij-pv-email-topbar">
            <div class="kij-pv-email-icon">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div class="kij-pv-email-meta">
              <span class="kij-pv-email-sender">From: ${p.sender}</span>
              <span class="kij-pv-time">${p.time}</span>
            </div>
          </div>
          <div class="kij-pv-email-card">
            <h4 class="kij-pv-email-subj">${p.emailSubject}</h4>
            <p class="kij-pv-email-snippet">${p.emailSnippet}</p>
            ${ratingStarsHtml}
            ${p.btnText ? `<div class="kij-pv-email-btn">${p.btnText}</div>` : ''}
          </div>
        </div>
      `;
    }

    if (channel === 'voice') {
      const activeKey = p.keypadActive || '1';
      return `
        <div class="kij-phone-view kij-phone-voice" role="region" aria-label="Automated call from ${p.sender}">
          <div class="kij-pv-voice-head">
            <div class="kij-pv-voice-avatar">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div class="kij-pv-voice-meta">
              <span class="kij-pv-voice-name">${p.sender}</span>
              <span class="kij-pv-voice-sub">Automated call</span>
            </div>
            <span class="kij-pv-voice-timer">${p.duration || '00:18'}</span>
          </div>
          <div class="kij-pv-voice-wave" aria-hidden="true">
            <span class="kij-vbar" style="--h: 8px; animation-delay: 0.1s;"></span>
            <span class="kij-vbar" style="--h: 16px; animation-delay: 0.25s;"></span>
            <span class="kij-vbar" style="--h: 24px; animation-delay: 0.4s;"></span>
            <span class="kij-vbar" style="--h: 12px; animation-delay: 0.15s;"></span>
            <span class="kij-vbar" style="--h: 22px; animation-delay: 0.35s;"></span>
            <span class="kij-vbar" style="--h: 15px; animation-delay: 0.2s;"></span>
            <span class="kij-vbar" style="--h: 20px; animation-delay: 0.45s;"></span>
            <span class="kij-vbar" style="--h: 9px; animation-delay: 0.1s;"></span>
          </div>
          <div class="kij-pv-voice-transcript">
            <p class="kij-pv-voice-text">${p.transcript}</p>
          </div>
          <div class="kij-pv-voice-keypad">
            <span class="kij-vkey ${activeKey === '1' ? 'active' : ''}">1</span>
            <span class="kij-vkey ${activeKey === '2' ? 'active' : ''}">2</span>
            <span class="kij-vkey ${activeKey === '3' ? 'active' : ''}">3</span>
          </div>
          ${p.resultText ? `
            <div class="kij-pv-voice-result">
              <svg viewBox="0 0 16 16" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="3 8.5 6.5 12 13 4.5"/></svg>
              <span>${p.resultText}</span>
            </div>
          ` : ''}
        </div>
      `;
    }

    return '';
  }

  /**
   * Positions travelling amber dot along the timeline spine
   */
  function updateSpineDot(stepIndex) {
    if (!spineDot) return;
    const stepBtns = stepsStack.querySelectorAll('.kij-step-btn');
    if (!stepBtns[stepIndex]) return;

    const targetBtn = stepBtns[stepIndex];
    const targetTop = targetBtn.offsetTop + (targetBtn.offsetHeight / 2) - 5;
    spineDot.style.top = `${targetTop}px`;
  }

  /**
   * Sets active step on current tab
   */
  function setActiveStep(stepIndex, isManualClick = false) {
    const data = journeysData[activeTabKey];
    if (!data || !data.steps[stepIndex]) return;

    activeStepIndex = stepIndex;
    const step = data.steps[stepIndex];

    const stepBtns = stepsStack.querySelectorAll('.kij-step-btn');
    stepBtns.forEach((btn, idx) => {
      if (idx === stepIndex) {
        btn.classList.add('is-active');
        btn.setAttribute('aria-current', 'step');
      } else {
        btn.classList.remove('is-active');
        btn.removeAttribute('aria-current');
      }
    });

    updateSpineDot(stepIndex);
    phoneScreen.innerHTML = renderPhoneScreen(step);

    if (isManualClick) {
      hasUserInteracted = true;
      stopAutoplay();
    }
  }

  /**
   * Autoplay scheduler (~2.5s per step, finishes and freezes on step 4)
   */
  function startAutoplay() {
    stopAutoplay();
    if (prefersReducedMotion) {
      setActiveStep(3, false);
      return;
    }

    let nextStep = 0;
    setActiveStep(nextStep, false);

    const advanceStep = () => {
      if (isPaused || hasUserInteracted) return;

      nextStep += 1;
      if (nextStep < 4) {
        setActiveStep(nextStep, false);
        autoplayTimer = setTimeout(advanceStep, 2500);
      } else {
        // Stop on Step 4 (frozen final state)
        stopAutoplay();
      }
    };

    autoplayTimer = setTimeout(advanceStep, 2500);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearTimeout(autoplayTimer);
      autoplayTimer = null;
    }
  }

  /**
   * Renders the tab data (headline, subtext, outcome, 4 steps)
   */
  function renderTab(tabKey, autoStart = true) {
    const data = journeysData[tabKey];
    if (!data) return;

    activeTabKey = tabKey;
    headlineEl.textContent = data.headline;
    subtextEl.textContent = data.subtext;
    if (outcomeText) outcomeText.textContent = data.outcome;

    // Render 4 Step Cards
    stepsStack.innerHTML = data.steps.map((s, idx) => `
      <button type="button" class="kij-step-btn ${idx === 0 ? 'is-active' : ''}" data-step="${idx}" aria-label="Step ${idx + 1}: ${s.label}. ${s.trigger}. Channel: ${s.channelLabel}${s.backupChip ? '. Backup: ' + s.backupChip : ''}">
        <span class="kij-step-label">${s.label}</span>
        <p class="kij-step-trigger">${s.trigger}</p>
        <div class="kij-step-chips-row">
          <span class="kij-step-channel chip-${s.channel}">
            ${getChannelIconSvg(s.channel)}
            <span>${s.channelLabel}</span>
          </span>
          ${s.backupChip ? `<span class="kij-step-backup-chip">${s.backupChip}</span>` : ''}
        </div>
      </button>
    `).join('');

    // Attach step click & keyboard listeners
    const stepBtns = stepsStack.querySelectorAll('.kij-step-btn');
    stepBtns.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        setActiveStep(idx, true);
      });
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          e.preventDefault();
          const nextIdx = (idx + 1) % 4;
          stepBtns[nextIdx].focus();
          setActiveStep(nextIdx, true);
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          e.preventDefault();
          const prevIdx = (idx - 1 + 4) % 4;
          stepBtns[prevIdx].focus();
          setActiveStep(prevIdx, true);
        }
      });
    });

    if (autoStart) {
      startAutoplay();
    } else {
      setActiveStep(0, false);
    }
  }

  /**
   * Tab switcher with 300ms cross-fade
   */
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetInd = btn.getAttribute('data-industry');
      if (targetInd === activeTabKey) return;

      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // 300ms cross-fade transition
      stageWrapper.classList.add('is-switching');
      stopAutoplay();
      hasUserInteracted = false;

      setTimeout(() => {
        renderTab(targetInd, true);
        stageWrapper.classList.remove('is-switching');
      }, 150);
    });
  });

  // Pause on hover or focus
  if (illustrationCard) {
    illustrationCard.addEventListener('mouseenter', () => {
      isPaused = true;
    });
    illustrationCard.addEventListener('mouseleave', () => {
      isPaused = false;
    });
    illustrationCard.addEventListener('focusin', () => {
      isPaused = true;
    });
    illustrationCard.addEventListener('focusout', () => {
      isPaused = false;
    });
  }

  // Initial render (Ecommerce by default)
  renderTab('ecommerce', false);

  // Play once when section enters viewport
  if ('IntersectionObserver' in window) {
    let hasViewTriggered = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasViewTriggered) {
          hasViewTriggered = true;
          startAutoplay();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });

    observer.observe(sectionEl);
  } else {
    startAutoplay();
  }

  // Recalculate spine dot on window resize
  window.addEventListener('resize', () => {
    updateSpineDot(activeStepIndex);
  }, { passive: true });

  // Expose global API so user or subsequent prompts can inspect or override data per tab
  window.KlayedJourneySystem = {
    data: journeysData,
    renderTab: renderTab,
    setTabData: function(tabKey, newData) {
      journeysData[tabKey] = newData;
      if (activeTabKey === tabKey) {
        renderTab(tabKey, true);
      }
    }
  };
}

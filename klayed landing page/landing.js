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
    if (localStorage.getItem('klayed-theme') === 'dark' || document.documentElement.classList.contains('dark-preview')) {
      document.body.classList.add('dark-preview');
      document.documentElement.classList.add('dark-preview');
    }

    const applyTheme = (isDark) => {
      document.body.classList.toggle('dark-preview', isDark);
      document.documentElement.classList.toggle('dark-preview', isDark);
      try {
        localStorage.setItem('klayed-theme', isDark ? 'dark' : 'light');
      } catch (e) {}
    };

    themeToggleBtn.addEventListener('click', () => {
      const isDark = !document.body.classList.contains('dark-preview');

      // If browser supports the native View Transitions API (Chrome 111+, Safari 18+, Edge),
      // crossfade the entire DOM at GPU compositor level — zero line flicker, zero tearing.
      if (document.startViewTransition) {
        document.documentElement.classList.add('view-transitioning');
        const transition = document.startViewTransition(() => {
          applyTheme(isDark);
        });
        transition.finished.finally(() => {
          document.documentElement.classList.remove('view-transitioning');
        });
      } else {
        // Fallback for older browsers
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
});


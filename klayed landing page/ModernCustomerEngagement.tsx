import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { 
  motion, 
  AnimatePresence, 
  useReducedMotion, 
  useInView 
} from 'framer-motion';

/**
 * ============================================================================
 * STAGE & ANIMATION CONFIGURATION CONSTANTS
 * Named constants to easily tweak stage heights, scale values, and motion timings.
 * ============================================================================
 */
export const STAGE_CONFIG = {
  // 1. Stage Heights across responsive breakpoints
  heightDesktop: 520, // Desktop min-height (px)
  heightTablet: 460,  // Tablet min-height (px)
  heightMobile: 400,  // Mobile min-height (px)
  paddingDesktop: 40, // 40px padding on desktop
  paddingMobile: 24,  // 24px padding on mobile

  // 2. Scale & Container Widths
  maxCardWidth: 760,         // ~85% stage width (max-w-[760px])
  marketingFlowMaxWidth: 880,// Flow row spans full usable width up to 880px
  captionBottomMargin: 24,   // Pinned caption chip 24px bottom margin

  // 3. Shared Entrance & Exit Transitions
  easeEntrance: [0.22, 1, 0.36, 1], // Custom cubic-bezier(0.22, 1, 0.36, 1)
  cardEntranceDuration: 0.7,        // Main card entrance: 0.7s
  cardEntranceY: 32,                // translateY 32px
  cardEntranceScale: 0.96,          // scale 0.96 -> 1
  cardEntranceBlur: "6px",          // blur 6px -> 0
  
  innerEntranceDuration: 0.5,       // Inner elements entrance: 0.5s
  innerEntranceY: 20,               // translateY 20px
  innerStartDelay: 0.25,            // Starts 0.25s after card starts
  innerStaggerDelay: 0.12,          // Stagger between inner elements: 0.12s
  
  captionEntranceDuration: 0.5,     // Caption chip duration: 0.5s
  captionEntranceY: 12,             // Caption translateY 12px -> 0
  captionStartDelay: 0.75,          // Caption fades in last

  exitDuration: 0.25,               // Exit duration: 0.25s ease-in
  exitY: -12,                       // Exit moves up 12px
  
  // 4. Per-Illustration Timings & Scale Settings
  // Multi-Channel (Tab 1)
  multiChannelGapY: 56,             // 56px vertical space between gateway & channels
  multiChannelConnectorDuration: 0.4,// Connector line draw down: 0.4s
  multiChannelChannelStagger: 0.12,  // Channel cards stagger: 0.12s
  multiChannelCardHeight: 200,      // Channel cards height: 200px
  
  // Real-time Delivery Tracking (Tab 2)
  deliveryRowHeight: 64,            // Row height increased from 48px to 64px
  deliveryRowStagger: 0.1,          // Row slide-up stagger: 0.1s
  deliveryChipPopDelay: 0.15,       // Status chips pop in 0.15s after row
  
  // Marketing Automation (Tab 3)
  marketingNodeHeight: 240,         // 240px tall nodes
  marketingConnectorDuration: 0.3,  // Connector draws in between nodes: 0.3s
  marketingNodeStagger: 0.32,       // Node stagger
  
  // Customer Segmentation (Tab 4)
  segmentationFilterChipHeight: 44, // Filter chips 44px tall
  segmentationDotSize: 36,          // Dot avatars enlarged to 36px
  segmentationWaveStagger: 0.03,    // Wave stagger per dot from top-left: 0.03s
  
  // Campaign Analytics (Tab 5)
  analyticsCardMinHeight: 400,      // Card at least 400px tall
  analyticsKpiNumberSize: 40,       // KPI numbers ~40px font size
  analyticsKpiCountDuration: 0.8,   // KPI numbers count up over 0.8s
  analyticsChartHeight: 220,        // Bar chart area: 220px tall
  analyticsDividerDuration: 0.4,    // Divider line draw: 0.4s
  analyticsBarStagger: 0.08,        // Bars grow upward stagger: 0.08s
  analyticsBarGrowDuration: 0.6,    // Bar grow duration: 0.6s
  
  // Auto-advance loop
  autoAdvanceTotalMs: 6000,         // Total 6s loop
  autoAdvanceDelayMs: 1250,         // Progress line fills only after entrance lands
};

/**
 * ============================================================================
 * COPY & CONTENT DICTIONARY
 * Single centralized object for copy editing (No jargon, 100% merchant-friendly).
 * ============================================================================
 */
export const ENGAGEMENT_COPY = {
  header: {
    pill: "Built different",
    title: "Built For Modern Customer Engagement",
    subtext: "Ditch fragmented point tools. Klayed provides a unified engine designed for speed, resilience, and actionable business insights.",
    cta: "Explore The Platform"
  },
  tabs: [
    {
      id: "multichannel",
      title: "Multi-channel communication",
      description: "Send across SMS, WhatsApp, Email, and Voice through one uniform API endpoint.",
      resultChip: "Write once. Reach customers on every channel.",
      composer: {
        title: "New Announcement",
        message: "Your order #1042 has shipped. Track your delivery live.",
        sendBtn: "Send to all"
      },
      channels: {
        whatsapp: { title: "WhatsApp", preview: "Your order #1042 has shipped. Track your delivery live.", status: "Delivered" },
        sms: { title: "SMS", preview: "Klayed Store: Your order #1042 has shipped.", status: "Delivered" },
        email: { title: "Email", subject: "Order #1042 has shipped!", preview: "Track your items now.", status: "Opened" },
        voice: { title: "Voice Call", caller: "Klayed Dispatch", status: "Ringing..." }
      }
    },
    {
      id: "delivery-tracking",
      title: "Real-time delivery tracking",
      description: "Sub-second carrier delivery receipts, bounce analysis, and dynamic route switching.",
      resultChip: "Failed messages are re-sent automatically.",
      header: {
        title: "Live Delivery Telemetry",
        latency: "18ms latency",
        health: "98.4% on time"
      },
      rows: [
        { name: "Chioma Okon", initials: "CO", phone: "0803 214 9811", channel: "WhatsApp", status: "Read", color: "purple" },
        { name: "Emeka Obi", initials: "EO", phone: "0802 881 2045", channel: "SMS", status: "Delivered", color: "blue" },
        { name: "Babatunde Adeleke", initials: "BA", phone: "0812 559 4022", channel: "WhatsApp", status: "Auto-switched to SMS", color: "teal", failover: true },
        { name: "Amina Bello", initials: "AB", phone: "0813 902 4411", channel: "Email", status: "Opened", color: "rose" }
      ],
      failoverBanner: "Auto-failover: Switched failed WhatsApp to MTN SMS in 340ms"
    },
    {
      id: "marketing-automation",
      title: "Marketing automation",
      description: "Visual event-driven builders to nurture leads and re-engage lapsed customers.",
      resultChip: "Set it once. It runs 24/7.",
      steps: [
        { label: "Customer leaves cart", sub: "₦38,500 in bag", badge: "Trigger" },
        { label: "Wait 45 minutes", sub: "Auto countdown", badge: "Delay" },
        { label: "Cart over ₦20,000?", sub: "Yes, VIP cart", badge: "Condition" },
        { label: "Send WhatsApp offer", sub: "10% off coupon", badge: "Action" }
      ],
      whatsappMsg: "You forgot your items! Here is 10% off your order.",
      recoveredValue: "+₦45,000 recovered automatically"
    },
    {
      id: "team-inbox",
      title: "Shared team inbox",
      description: "Enable support and sales teams to collaborate seamlessly with zero message collisions.",
      resultChip: "Never answer the same customer twice.",
      customer: {
        name: "Folake (Lagos)",
        initials: "FL",
        message: "How much is delivery to Ikeja?"
      },
      agents: {
        ada: { name: "Ada", initials: "AD", status: "Ada is replying now...", replyText: "Delivery to Ikeja is ₦2,500. Same-day delivery!" },
        tunde: { name: "Tunde", initials: "TU", blockedNotice: "Ada is already on this" }
      }
    },
    {
      id: "customer-segmentation",
      title: "Customer segmentation",
      description: "Slice audiences by purchasing frequency, country, and behavior with instant syncing.",
      resultChip: "Message the right people, not everyone.",
      filters: [
        { id: "freq", label: "Frequent buyers" },
        { id: "lagos", label: "Lagos customers" },
        { id: "cart", label: "Abandoned cart" }
      ],
      groupName: "VIP Campaign Audience",
      matchedCount: "2,480 customers matched",
      sendBtn: "Send campaign"
    },
    {
      id: "campaign-analytics",
      title: "Campaign analytics",
      description: "Audit open rates, link clicks, conversion ROI, and deliverability health at a glance.",
      resultChip: "Know what works, then do more of it.",
      kpis: [
        { label: "Open rate", value: "64.8%", numeric: 64.8, suffix: "%", change: "+12%" },
        { label: "Link clicks", value: "28.4%", numeric: 28.4, suffix: "%", change: "+8%" },
        { label: "Return on spend", value: "4.8x", numeric: 4.8, suffix: "x", change: "+18%" }
      ],
      chart: {
        days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        bestDayTooltip: "Friday: your best day to send",
        footer: "Highest converting window: Friday 6:00 PM – 9:00 PM (WAT) • 4.8x ROI"
      }
    }
  ]
};

/**
 * ============================================================================
 * LUCIDE-STYLE VECTOR ICONS (No emojis, crisp 1.8-2px stroke)
 * ============================================================================
 */
const CheckIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const DoubleCheckIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6L7 17l-5-5" />
    <path d="M22 10l-7.5 7.5L13 16" />
  </svg>
);

const SendIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const PhoneCallIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const MailIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const MessageSquareIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);

const XIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const RefreshCwIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
  </svg>
);

const ShoppingBagIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);

const ClockIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const FilterIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

const ZapIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const UsersIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);

const ActivityIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const ArrowUpRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

/**
 * ============================================================================
 * PINNED RESULT CHIP (Holds at bottom of the stage with 24px margin)
 * ============================================================================
 */
export const ResultChip: React.FC<{ text: string }> = ({ text }) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: STAGE_CONFIG.captionEntranceY }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: prefersReduced ? 0.2 : STAGE_CONFIG.captionEntranceDuration,
        delay: prefersReduced ? 0 : STAGE_CONFIG.captionStartDelay,
        ease: STAGE_CONFIG.easeEntrance
      }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#171717]/95 backdrop-blur-md border border-[#E8A33D]/35 shadow-[0_0_24px_rgba(232,163,61,0.22)] whitespace-nowrap"
    >
      <span className="w-2.5 h-2.5 rounded-full bg-[#E8A33D] shadow-[0_0_8px_#E8A33D]" />
      <span className="text-sm sm:text-base font-semibold text-white/95 tracking-tight">
        {text}
      </span>
    </motion.div>
  );
};

/**
 * ============================================================================
 * 1. MULTI-CHANNEL COMMUNICATION
 * Layout: Gateway card on top (~60% width), 56px vertical connector gap,
 * 4 tall channel cards (~20% width each, 200px tall) in one row beneath.
 * ============================================================================
 */
export const MultiChannelIllustration: React.FC<{ active: boolean }> = ({ active }) => {
  const prefersReduced = useReducedMotion();
  const copy = ENGAGEMENT_COPY.tabs[0];
  const [pulseSend, setPulseSend] = useState(false);
  const [channelsLanded, setChannelsLanded] = useState(false);

  useEffect(() => {
    if (!active) {
      setPulseSend(false);
      setChannelsLanded(false);
      return;
    }
    const t1 = setTimeout(() => setPulseSend(true), 1200);
    const t2 = setTimeout(() => setChannelsLanded(true), 1800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [active]);

  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[460px] lg:min-h-[520px] p-6 lg:p-10 flex flex-col items-center justify-center pb-20 select-none overflow-hidden">
      
      {/* Main Group (Scales to 85% width: max-w-[760px]) */}
      <motion.div
        key={`mc-group-${active}`}
        initial={prefersReduced ? { opacity: 0 } : { 
          opacity: 0, 
          y: STAGE_CONFIG.cardEntranceY, 
          scale: STAGE_CONFIG.cardEntranceScale, 
          filter: `blur(${STAGE_CONFIG.cardEntranceBlur})` 
        }}
        animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: prefersReduced ? 0.2 : STAGE_CONFIG.cardEntranceDuration, ease: STAGE_CONFIG.easeEntrance }}
        className="w-full max-w-[760px] flex flex-col items-center"
      >
        {/* Top: Gateway Card (~60% width) */}
        <div className="w-full sm:w-[62%] max-w-[480px] p-4 sm:p-5 rounded-2xl bg-[#171717] border border-white/[0.08] shadow-2xl flex flex-col gap-3.5 z-10">
          <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.06]">
            <span className="text-xs font-semibold text-white/50 uppercase tracking-wider flex items-center gap-1.5">
              <ZapIcon className="w-3.5 h-3.5 text-[#E8A33D]" />
              {copy.composer.title}
            </span>
            <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#E8A33D]/15 text-[#E8A33D] border border-[#E8A33D]/30">
              All 4 Channels
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05] min-h-[58px] flex items-center">
            <p className="text-sm sm:text-base text-white/95 font-medium leading-snug">
              "{copy.composer.message}"
            </p>
          </div>

          <motion.div
            animate={pulseSend && !prefersReduced ? { scale: [1, 0.96, 1] } : {}}
            transition={{ duration: 0.3 }}
            className="w-full py-2.5 sm:py-3 rounded-xl bg-[#E8A33D] text-[#111110] font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(232,163,61,0.35)]"
          >
            <SendIcon className="w-4 h-4" />
            <span>{copy.composer.sendBtn}</span>
          </motion.div>
        </div>

        {/* 56px Vertical Connector Lines (Desktop only) */}
        <div className="hidden sm:block relative w-full h-[56px] my-0 pointer-events-none">
          <svg viewBox="0 0 760 56" fill="none" className="w-full h-full">
            {/* Guide tracks */}
            <path d="M 380 0 C 380 28, 86 28, 86 56" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
            <path d="M 380 0 C 380 28, 282 28, 282 56" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
            <path d="M 380 0 C 380 28, 478 28, 478 56" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
            <path d="M 380 0 C 380 28, 674 28, 674 56" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />

            {/* Animated drawing lines */}
            <motion.path
              d="M 380 0 C 380 28, 86 28, 86 56"
              stroke="#E8A33D"
              strokeWidth="2"
              strokeDasharray="400"
              initial={{ strokeDashoffset: 400 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: STAGE_CONFIG.multiChannelConnectorDuration, delay: 0.65, ease: "easeOut" }}
            />
            <motion.path
              d="M 380 0 C 380 28, 282 28, 282 56"
              stroke="#E8A33D"
              strokeWidth="2"
              strokeDasharray="400"
              initial={{ strokeDashoffset: 400 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: STAGE_CONFIG.multiChannelConnectorDuration, delay: 0.65, ease: "easeOut" }}
            />
            <motion.path
              d="M 380 0 C 380 28, 478 28, 478 56"
              stroke="#E8A33D"
              strokeWidth="2"
              strokeDasharray="400"
              initial={{ strokeDashoffset: 400 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: STAGE_CONFIG.multiChannelConnectorDuration, delay: 0.65, ease: "easeOut" }}
            />
            <motion.path
              d="M 380 0 C 380 28, 674 28, 674 56"
              stroke="#E8A33D"
              strokeWidth="2"
              strokeDasharray="400"
              initial={{ strokeDashoffset: 400 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: STAGE_CONFIG.multiChannelConnectorDuration, delay: 0.65, ease: "easeOut" }}
            />
          </svg>

          {/* Travelling dots along connector */}
          {pulseSend && !prefersReduced && (
            <>
              <motion.div
                initial={{ top: 0, left: "50%", opacity: 1 }}
                animate={{ top: 54, left: "11.3%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute w-2.5 h-2.5 rounded-full bg-[#E8A33D] shadow-[0_0_10px_#E8A33D] -translate-x-1/2 -translate-y-1/2"
              />
              <motion.div
                initial={{ top: 0, left: "50%", opacity: 1 }}
                animate={{ top: 54, left: "37.1%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute w-2.5 h-2.5 rounded-full bg-[#E8A33D] shadow-[0_0_10px_#E8A33D] -translate-x-1/2 -translate-y-1/2"
              />
              <motion.div
                initial={{ top: 0, left: "50%", opacity: 1 }}
                animate={{ top: 54, left: "62.9%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute w-2.5 h-2.5 rounded-full bg-[#E8A33D] shadow-[0_0_10px_#E8A33D] -translate-x-1/2 -translate-y-1/2"
              />
              <motion.div
                initial={{ top: 0, left: "50%", opacity: 1 }}
                animate={{ top: 54, left: "88.7%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute w-2.5 h-2.5 rounded-full bg-[#E8A33D] shadow-[0_0_10px_#E8A33D] -translate-x-1/2 -translate-y-1/2"
              />
            </>
          )}
        </div>

        {/* Bottom: 4 Channel Cards in One Row (2x2 on mobile, 4 columns on desktop) */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-3 sm:mt-0">
          
          {/* Card 1: WhatsApp */}
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: STAGE_CONFIG.innerEntranceY }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: STAGE_CONFIG.innerEntranceDuration, delay: 0.85, ease: STAGE_CONFIG.easeEntrance }}
            className="h-[190px] sm:h-[200px] p-4 rounded-2xl bg-[#142319] border border-[#22C55E]/30 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-[#22C55E] text-[#111] flex items-center justify-center font-bold text-xs mb-3 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                WA
              </div>
              <span className="text-xs font-bold text-[#22C55E] block uppercase tracking-wider">{copy.channels.whatsapp.title}</span>
              <p className="text-xs sm:text-sm text-white/90 font-medium line-clamp-2 mt-1 leading-snug">
                {copy.channels.whatsapp.preview}
              </p>
            </div>
            <div className="pt-2 border-t border-white/[0.06] flex items-center gap-1.5 text-[#22C55E] text-xs font-bold">
              <DoubleCheckIcon className="w-4 h-4" />
              <span>{channelsLanded ? copy.channels.whatsapp.status : "Sending..."}</span>
            </div>
          </motion.div>

          {/* Card 2: SMS */}
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: STAGE_CONFIG.innerEntranceY }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: STAGE_CONFIG.innerEntranceDuration, delay: 0.85 + STAGE_CONFIG.multiChannelChannelStagger, ease: STAGE_CONFIG.easeEntrance }}
            className="h-[190px] sm:h-[200px] p-4 rounded-2xl bg-[#171717] border border-white/[0.08] flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-[#E8A33D] text-[#111] flex items-center justify-center font-bold text-xs mb-3 shadow-[0_0_15px_rgba(232,163,61,0.3)]">
                SMS
              </div>
              <span className="text-xs font-bold text-[#E8A33D] block uppercase tracking-wider">{copy.channels.sms.title}</span>
              <p className="text-xs sm:text-sm text-white/90 font-medium line-clamp-2 mt-1 leading-snug">
                {copy.channels.sms.preview}
              </p>
            </div>
            <div className="pt-2 border-t border-white/[0.06] flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
              <CheckIcon className="w-4 h-4" />
              <span>{channelsLanded ? copy.channels.sms.status : "Sending..."}</span>
            </div>
          </motion.div>

          {/* Card 3: Email */}
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: STAGE_CONFIG.innerEntranceY }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: STAGE_CONFIG.innerEntranceDuration, delay: 0.85 + STAGE_CONFIG.multiChannelChannelStagger * 2, ease: STAGE_CONFIG.easeEntrance }}
            className="h-[190px] sm:h-[200px] p-4 rounded-2xl bg-[#171717] border border-white/[0.08] flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-xs mb-3 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                <MailIcon className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-sky-400 block uppercase tracking-wider">{copy.channels.email.title}</span>
              <p className="text-xs sm:text-sm text-white/90 font-medium line-clamp-2 mt-1 leading-snug">
                {copy.channels.email.subject}
              </p>
            </div>
            <div className="pt-2 border-t border-white/[0.06] flex items-center gap-1.5 text-white/60 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>{channelsLanded ? copy.channels.email.status : "Queued"}</span>
            </div>
          </motion.div>

          {/* Card 4: Voice */}
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: STAGE_CONFIG.innerEntranceY }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: STAGE_CONFIG.innerEntranceDuration, delay: 0.85 + STAGE_CONFIG.multiChannelChannelStagger * 3, ease: STAGE_CONFIG.easeEntrance }}
            className="h-[190px] sm:h-[200px] p-4 rounded-2xl bg-[#171717] border border-white/[0.08] flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-xs mb-3 shadow-[0_0_15px_rgba(244,63,94,0.3)]">
                <PhoneCallIcon className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-rose-400 block uppercase tracking-wider">{copy.channels.voice.title}</span>
              <p className="text-xs sm:text-sm text-white/90 font-medium line-clamp-2 mt-1 leading-snug">
                {copy.channels.voice.caller}
              </p>
            </div>
            <div className="pt-2 border-t border-white/[0.06] flex items-center gap-1.5 text-[#E8A33D] text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-[#E8A33D] animate-ping" />
              <span>{copy.channels.voice.status}</span>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Pinned Result Chip */}
      <ResultChip text={copy.resultChip} />
    </div>
  );
};

/**
 * ============================================================================
 * 2. REAL-TIME DELIVERY TRACKING
 * Layout: Table card at 85% width (max-w-[760px]), 4 rows with 64px row height,
 * Header enters first, rows stagger, status chips pop in, self-healing banner slides in.
 * ============================================================================
 */
export const DeliveryTrackingIllustration: React.FC<{ active: boolean }> = ({ active }) => {
  const prefersReduced = useReducedMotion();
  const copy = ENGAGEMENT_COPY.tabs[1];
  const [rerouted, setRerouted] = useState(false);

  useEffect(() => {
    if (!active) {
      setRerouted(false);
      return;
    }
    const timer = setTimeout(() => setRerouted(true), 2400);
    return () => clearTimeout(timer);
  }, [active]);

  const avatarColorMap: Record<string, { bg: string; text: string; border: string }> = {
    purple: { bg: "bg-purple-500/20", text: "text-purple-300", border: "border-purple-500/30" },
    blue: { bg: "bg-blue-500/20", text: "text-blue-300", border: "border-blue-500/30" },
    teal: { bg: "bg-teal-500/20", text: "text-teal-300", border: "border-teal-500/30" },
    rose: { bg: "bg-rose-500/20", text: "text-rose-300", border: "border-rose-500/30" }
  };

  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[460px] lg:min-h-[520px] p-6 lg:p-10 flex flex-col items-center justify-center pb-20 select-none">
      
      {/* Table Card (85% width: max-w-[760px]) */}
      <motion.div
        key={`dt-card-${active}`}
        initial={prefersReduced ? { opacity: 0 } : { 
          opacity: 0, 
          y: STAGE_CONFIG.cardEntranceY, 
          scale: STAGE_CONFIG.cardEntranceScale, 
          filter: `blur(${STAGE_CONFIG.cardEntranceBlur})` 
        }}
        animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: prefersReduced ? 0.2 : STAGE_CONFIG.cardEntranceDuration, ease: STAGE_CONFIG.easeEntrance }}
        className="w-full max-w-[760px] bg-[#171717] border border-white/[0.08] rounded-2xl p-5 sm:p-6 shadow-2xl flex flex-col gap-3.5"
      >
        {/* Header: Title + Latency chip */}
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: STAGE_CONFIG.innerEntranceDuration, delay: STAGE_CONFIG.innerStartDelay, ease: STAGE_CONFIG.easeEntrance }}
          className="flex items-center justify-between pb-3 border-b border-white/[0.06]"
        >
          <div className="flex items-center gap-2.5">
            <ActivityIcon className="w-4 h-4 text-[#E8A33D]" />
            <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
              {copy.header.title}
            </h3>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-white/5 border border-white/10 text-white/60">
              ● {copy.header.latency}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] flex items-center gap-1">
              <CheckIcon className="w-3.5 h-3.5" />
              {copy.header.health}
            </span>
          </div>
        </motion.div>

        {/* 4 Rows (64px row height) */}
        <div className="flex flex-col gap-2.5">
          {copy.rows.map((row, idx) => {
            const colors = avatarColorMap[row.color] || avatarColorMap.purple;
            const isRow3 = row.failover;

            return (
              <motion.div
                key={row.phone}
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: STAGE_CONFIG.innerEntranceY }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: STAGE_CONFIG.innerEntranceDuration, 
                  delay: STAGE_CONFIG.innerStartDelay + (idx + 1) * STAGE_CONFIG.deliveryRowStagger, 
                  ease: STAGE_CONFIG.easeEntrance 
                }}
                className={`h-[64px] min-h-[64px] px-4 rounded-xl border flex items-center justify-between transition-all ${
                  isRow3 && rerouted
                    ? 'bg-emerald-500/10 border-emerald-500/30'
                    : isRow3
                    ? 'bg-rose-500/5 border-rose-500/20'
                    : 'bg-white/[0.02] border-white/[0.05]'
                }`}
              >
                {/* Left: Avatar + Name + Phone */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-9 h-9 rounded-full ${colors.bg} ${colors.text} ${colors.border} border font-bold text-xs flex items-center justify-center flex-shrink-0`}>
                    {row.initials}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm sm:text-[15px] font-semibold text-white tracking-tight truncate">
                      {row.name}
                    </h4>
                    <span className="text-xs sm:text-[13px] font-mono text-white/50 block">
                      {row.phone}
                    </span>
                  </div>
                </div>

                {/* Right: Channel badge & Status chip popping in */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-white/40 hidden sm:inline-block">
                    {isRow3 && rerouted ? "SMS" : row.channel}
                  </span>

                  <motion.div
                    initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.35, 
                      delay: STAGE_CONFIG.innerStartDelay + (idx + 1) * STAGE_CONFIG.deliveryRowStagger + STAGE_CONFIG.deliveryChipPopDelay 
                    }}
                  >
                    {isRow3 ? (
                      rerouted ? (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] flex items-center gap-1.5 shadow-[0_0_12px_rgba(34,197,94,0.25)]">
                          <CheckIcon className="w-3.5 h-3.5" /> SMS Delivered
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-500/15 border border-rose-500/30 text-rose-400 flex items-center gap-1.5">
                          <XIcon className="w-3.5 h-3.5" /> WhatsApp Failed
                        </span>
                      )
                    ) : row.status === "Read" ? (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] flex items-center gap-1.5">
                        <DoubleCheckIcon className="w-3.5 h-3.5" /> Read
                      </span>
                    ) : row.status === "Delivered" ? (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] flex items-center gap-1.5">
                        <CheckIcon className="w-3.5 h-3.5" /> Delivered
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/15 border border-sky-500/30 text-sky-400">
                        {row.status}
                      </span>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Self-Healing Banner (Slides up from bottom last) */}
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.8, ease: STAGE_CONFIG.easeEntrance }}
          className="p-3 rounded-xl bg-[#E8A33D]/10 border border-[#E8A33D]/30 flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-[#E8A33D]"
        >
          <div className="flex items-center gap-2">
            <RefreshCwIcon className={`w-4 h-4 ${!rerouted ? 'animate-spin' : ''}`} />
            <span>{copy.failoverBanner}</span>
          </div>
          <span className="text-[11px] font-bold bg-black/40 px-2.5 py-0.5 rounded text-white/90">
            Auto-Resolved
          </span>
        </motion.div>
      </motion.div>

      {/* Pinned Result Chip */}
      <ResultChip text={copy.resultChip} />
    </div>
  );
};

/**
 * ============================================================================
 * 3. MARKETING AUTOMATION
 * Layout: Full usable width up to 880px, single row of 4 nodes (240px tall, ~22% width),
 * 40px icons, connector lines draw between nodes (0.3s), last node glow pulse,
 * uplift chip underneath, vertically centered as one group.
 * ============================================================================
 */
export const MarketingAutomationIllustration: React.FC<{ active: boolean }> = ({ active }) => {
  const prefersReduced = useReducedMotion();
  const copy = ENGAGEMENT_COPY.tabs[2];
  const icons = [ShoppingBagIcon, ClockIcon, FilterIcon, MessageSquareIcon];

  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[460px] lg:min-h-[520px] p-6 lg:p-10 flex flex-col items-center justify-center pb-20 select-none">
      
      {/* Vertically Centered Group (Flow row + Uplift chip) */}
      <motion.div
        key={`ma-group-${active}`}
        initial={prefersReduced ? { opacity: 0 } : { 
          opacity: 0, 
          y: STAGE_CONFIG.cardEntranceY, 
          scale: STAGE_CONFIG.cardEntranceScale, 
          filter: `blur(${STAGE_CONFIG.cardEntranceBlur})` 
        }}
        animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: prefersReduced ? 0.2 : STAGE_CONFIG.cardEntranceDuration, ease: STAGE_CONFIG.easeEntrance }}
        className="w-full max-w-[880px] flex flex-col items-center gap-6"
      >
        {/* Desktop Single Row of 4 Nodes + Horizontal Connectors */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-3 items-center relative">
          {copy.steps.map((step, idx) => {
            const Icon = icons[idx];
            const isLast = idx === 3;
            const nodeDelay = STAGE_CONFIG.innerStartDelay + idx * STAGE_CONFIG.marketingNodeStagger;

            return (
              <React.Fragment key={step.label}>
                {/* Node Box (240px tall) */}
                <motion.div
                  initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: STAGE_CONFIG.innerEntranceY }}
                  animate={
                    isLast && !prefersReduced
                      ? { 
                          opacity: 1, 
                          y: 0,
                          boxShadow: [
                            "0 0 0px rgba(232,163,61,0)",
                            "0 0 30px rgba(232,163,61,0.45)",
                            "0 0 15px rgba(232,163,61,0.2)"
                          ]
                        }
                      : { opacity: 1, y: 0 }
                  }
                  transition={{ duration: STAGE_CONFIG.innerEntranceDuration, delay: nodeDelay, ease: STAGE_CONFIG.easeEntrance }}
                  className={`h-[220px] sm:h-[240px] p-5 rounded-2xl border flex flex-col items-center justify-between text-center relative shadow-xl ${
                    isLast
                      ? 'bg-[#18261C] border-[#E8A33D] shadow-[0_0_20px_rgba(232,163,61,0.25)]'
                      : 'bg-[#171717] border-white/[0.08]'
                  }`}
                >
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                    isLast ? 'bg-[#E8A33D]/20 text-[#E8A33D]' : 'bg-white/5 text-white/40'
                  }`}>
                    {step.badge}
                  </span>

                  <div className="flex flex-col items-center">
                    {/* 40px Icon */}
                    <div className={`w-14 h-14 rounded-2xl mb-3 flex items-center justify-center ${
                      isLast 
                        ? 'bg-[#E8A33D] text-[#111] shadow-[0_0_20px_rgba(232,163,61,0.4)]' 
                        : 'bg-white/5 text-white/80 border border-white/10'
                    }`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight">
                      {step.label}
                    </h4>
                  </div>

                  <span className={`text-xs font-semibold ${isLast ? 'text-emerald-400' : 'text-white/50'}`}>
                    {step.sub}
                  </span>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Uplift Chip Fading in Underneath */}
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 1.25, ease: STAGE_CONFIG.easeEntrance }}
          className="w-full max-w-lg p-3.5 sm:p-4 rounded-2xl bg-[#142319] border border-[#22C55E]/30 flex items-center justify-between gap-4 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#22C55E] text-[#111] font-extrabold text-xs flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
              WA
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#22C55E] block uppercase tracking-wider">Direct WhatsApp Offer</span>
              <p className="text-xs sm:text-sm font-semibold text-white">
                "{copy.whatsappMsg}"
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 px-3.5 py-1.5 rounded-xl bg-[#22C55E] text-[#111] font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-[0_0_20px_rgba(34,197,94,0.35)]">
            <ArrowUpRightIcon className="w-4 h-4" />
            <span>{copy.recoveredValue}</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Pinned Result Chip */}
      <ResultChip text={copy.resultChip} />
    </div>
  );
};

/**
 * ============================================================================
 * 4. SHARED TEAM INBOX (Reference Illustration)
 * Two teammates, no double replies.
 * ============================================================================
 */
export const SharedInboxIllustration: React.FC<{ active: boolean }> = ({ active }) => {
  const prefersReduced = useReducedMotion();
  const copy = ENGAGEMENT_COPY.tabs[3];

  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[460px] lg:min-h-[520px] p-6 lg:p-10 flex flex-col items-center justify-center pb-20 select-none">
      
      {/* Main Card (85% width: max-w-[760px]) */}
      <motion.div
        key={`si-card-${active}`}
        initial={prefersReduced ? { opacity: 0 } : { 
          opacity: 0, 
          y: STAGE_CONFIG.cardEntranceY, 
          scale: STAGE_CONFIG.cardEntranceScale, 
          filter: `blur(${STAGE_CONFIG.cardEntranceBlur})` 
        }}
        animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: prefersReduced ? 0.2 : STAGE_CONFIG.cardEntranceDuration, ease: STAGE_CONFIG.easeEntrance }}
        className="w-full max-w-[760px] bg-[#171717] border border-white/[0.08] rounded-2xl p-5 sm:p-6 shadow-2xl flex flex-col gap-3.5"
      >
        {/* Top bar with team status */}
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <UsersIcon className="w-4 h-4 text-[#E8A33D]" />
            <span className="text-sm sm:text-base font-bold text-white">Customer Support Team</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-white/50">Online:</span>
            <div className="flex items-center -space-x-1.5">
              <div className="w-7 h-7 rounded-full bg-[#E8A33D] text-[#111] text-xs font-bold flex items-center justify-center border-2 border-[#171717]">
                {copy.agents.ada.initials}
              </div>
              <div className="w-7 h-7 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center border-2 border-[#171717]">
                {copy.agents.tunde.initials}
              </div>
            </div>
          </div>
        </div>

        {/* Customer Incoming Query */}
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: STAGE_CONFIG.innerEntranceY }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: STAGE_CONFIG.innerEntranceDuration, delay: STAGE_CONFIG.innerStartDelay, ease: STAGE_CONFIG.easeEntrance }}
          className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-start gap-3"
        >
          <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-300 font-bold text-xs flex items-center justify-center flex-shrink-0">
            {copy.customer.initials}
          </div>
          <div>
            <span className="text-xs font-semibold text-white/80">{copy.customer.name}</span>
            <p className="text-sm sm:text-base font-medium text-white/95 mt-0.5">
              "{copy.customer.message}"
            </p>
          </div>
        </motion.div>

        {/* Ada Claiming & Typing */}
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: STAGE_CONFIG.innerEntranceY }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: STAGE_CONFIG.innerEntranceDuration, delay: STAGE_CONFIG.innerStartDelay + STAGE_CONFIG.innerStaggerDelay, ease: STAGE_CONFIG.easeEntrance }}
          className="p-3.5 rounded-xl bg-[#E8A33D]/10 border border-[#E8A33D]/30 flex items-center justify-between"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#E8A33D] text-[#111] text-xs font-bold flex items-center justify-center">
              {copy.agents.ada.initials}
            </div>
            <span className="text-sm font-semibold text-[#E8A33D]">
              {copy.agents.ada.status}
            </span>
          </div>
          <span className="text-xs font-bold text-[#E8A33D] bg-black/40 px-2 py-0.5 rounded">
            🔒 Thread Locked
          </span>
        </motion.div>

        {/* Tunde Blocked Warning Toast */}
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: STAGE_CONFIG.innerEntranceY }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: STAGE_CONFIG.innerEntranceDuration, delay: STAGE_CONFIG.innerStartDelay + STAGE_CONFIG.innerStaggerDelay * 2, ease: STAGE_CONFIG.easeEntrance }}
          className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-between text-xs sm:text-sm font-semibold text-rose-300"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-[11px] font-bold flex items-center justify-center">
              {copy.agents.tunde.initials}
            </div>
            <span>{copy.agents.tunde.name} opened ticket</span>
          </div>
          <span className="text-xs font-bold bg-rose-500/20 px-2.5 py-0.5 rounded text-rose-300">
            {copy.agents.tunde.blockedNotice}
          </span>
        </motion.div>

        {/* Ada Sent Reply */}
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: STAGE_CONFIG.innerEntranceY }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: STAGE_CONFIG.innerEntranceDuration, delay: STAGE_CONFIG.innerStartDelay + STAGE_CONFIG.innerStaggerDelay * 3, ease: STAGE_CONFIG.easeEntrance }}
          className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between"
        >
          <p className="text-sm sm:text-base font-medium text-emerald-300">
            "{copy.agents.ada.replyText}"
          </p>
          <DoubleCheckIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
        </motion.div>
      </motion.div>

      {/* Pinned Result Chip */}
      <ResultChip text={copy.resultChip} />
    </div>
  );
};

/**
 * ============================================================================
 * 5. CUSTOMER SEGMENTATION
 * Layout: 44px tall filter chips enter first. Dot grid card at 85% width (36px dots,
 * 8 cols x 4 rows) enters with wave stagger from top-left. Matching dots highlight,
 * matched-count line enters last.
 * ============================================================================
 */
export const CustomerSegmentationIllustration: React.FC<{ active: boolean }> = ({ active }) => {
  const prefersReduced = useReducedMotion();
  const copy = ENGAGEMENT_COPY.tabs[4];
  const [filterStep, setFilterStep] = useState(0);

  useEffect(() => {
    if (!active) {
      setFilterStep(0);
      return;
    }
    const t1 = setTimeout(() => setFilterStep(1), 1200);
    const t2 = setTimeout(() => setFilterStep(2), 2000);
    const t3 = setTimeout(() => setFilterStep(3), 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [active]);

  const initialsList = [
    "AO", "BE", "CH", "DA", "EK", "FA", "GB", "HA",
    "IB", "JO", "KA", "LU", "MO", "NE", "OK", "PA",
    "RA", "SE", "TI", "UM", "VI", "WA", "YA", "ZA",
    "AD", "TU", "FL", "CO", "BA", "EO", "AB", "KD"
  ];

  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[460px] lg:min-h-[520px] p-6 lg:p-10 flex flex-col items-center justify-center pb-20 select-none">
      
      {/* Main Group (85% width: max-w-[760px]) */}
      <motion.div
        key={`cs-group-${active}`}
        initial={prefersReduced ? { opacity: 0 } : { 
          opacity: 0, 
          y: STAGE_CONFIG.cardEntranceY, 
          scale: STAGE_CONFIG.cardEntranceScale, 
          filter: `blur(${STAGE_CONFIG.cardEntranceBlur})` 
        }}
        animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: prefersReduced ? 0.2 : STAGE_CONFIG.cardEntranceDuration, ease: STAGE_CONFIG.easeEntrance }}
        className="w-full max-w-[760px] flex flex-col items-center gap-4"
      >
        {/* Filter Chips (44px tall, enter first) */}
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: STAGE_CONFIG.innerEntranceY }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: STAGE_CONFIG.innerEntranceDuration, delay: STAGE_CONFIG.innerStartDelay, ease: STAGE_CONFIG.easeEntrance }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {copy.filters.map((f, i) => {
            const isSelected = filterStep >= i + 1;
            return (
              <span
                key={f.id}
                className={`h-[44px] px-5 rounded-full text-xs sm:text-sm font-semibold flex items-center transition-all border ${
                  isSelected
                    ? 'bg-[#E8A33D] text-[#111110] border-[#E8A33D] shadow-[0_0_20px_rgba(232,163,61,0.35)]'
                    : 'bg-white/5 text-white/50 border-white/10'
                }`}
              >
                {isSelected ? '✓ ' : ''}{f.label}
              </span>
            );
          })}
        </motion.div>

        {/* Dot Grid Card (~85% width, enlarged 36px dots, 8x4 grid) */}
        <div className="w-full p-5 sm:p-6 rounded-2xl bg-[#171717] border border-white/[0.08] shadow-2xl flex flex-col items-center">
          <div className="grid grid-cols-8 gap-2.5 sm:gap-3 mb-4">
            {initialsList.map((initials, idx) => {
              const col = idx % 8;
              const row = Math.floor(idx / 8);
              const waveDelay = STAGE_CONFIG.innerStartDelay + 0.1 + (col + row) * STAGE_CONFIG.segmentationWaveStagger;

              const isMatch = idx % 3 === 0;
              const isDimmed = filterStep > 0 && !isMatch;

              return (
                <motion.div
                  key={idx}
                  initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: isDimmed ? 0.15 : 1,
                    scale: isDimmed ? 0.75 : isMatch && filterStep === 3 ? 1.15 : 1
                  }}
                  transition={{ 
                    duration: 0.35,
                    delay: prefersReduced ? 0 : waveDelay 
                  }}
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold transition-all ${
                    isMatch && filterStep === 3
                      ? 'bg-[#E8A33D] text-[#111] shadow-[0_0_15px_#E8A33D]'
                      : 'bg-white/10 text-white/75'
                  }`}
                >
                  {initials}
                </motion.div>
              );
            })}
          </div>

          {/* Matched Count Line (Enters last, sits under the grid) */}
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.85, ease: STAGE_CONFIG.easeEntrance }}
            className="w-full p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-between"
          >
            <div>
              <span className="text-xs font-semibold text-white/40 block uppercase tracking-wider">{copy.groupName}</span>
              <strong className="text-base sm:text-lg font-bold text-white tracking-tight">
                {copy.matchedCount}
              </strong>
            </div>

            <button
              type="button"
              className="px-4 py-2 rounded-xl bg-[#E8A33D] text-[#111] font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(232,163,61,0.3)] hover:brightness-105 transition-all"
            >
              {copy.sendBtn}
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Pinned Result Chip */}
      <ResultChip text={copy.resultChip} />
    </div>
  );
};

/**
 * ============================================================================
 * 6. CAMPAIGN ANALYTICS
 * Layout: Card at 85% width (max-w-[760px], at least 400px tall).
 * Big KPI numbers (~40px) count up over 0.8s, divider draws left to right,
 * 220px tall bar chart grows from baseline, Friday turns amber & pulses once.
 * ============================================================================
 */
export const CampaignAnalyticsIllustration: React.FC<{ active: boolean }> = ({ active }) => {
  const prefersReduced = useReducedMotion();
  const copy = ENGAGEMENT_COPY.tabs[5];
  const barHeights = [42, 60, 55, 74, 98, 58, 48];

  const [counterProgress, setCounterProgress] = useState(0);

  useEffect(() => {
    if (!active) {
      setCounterProgress(0);
      return;
    }

    let start: number | null = null;
    let animId: number;
    const duration = STAGE_CONFIG.analyticsKpiCountDuration * 1000;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min(elapsed / duration, 1);
      setCounterProgress(pct);

      if (pct < 1) {
        animId = requestAnimationFrame(step);
      }
    };

    const delayTimer = setTimeout(() => {
      animId = requestAnimationFrame(step);
    }, STAGE_CONFIG.innerStartDelay * 1000);

    return () => {
      clearTimeout(delayTimer);
      cancelAnimationFrame(animId);
    };
  }, [active]);

  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[460px] lg:min-h-[520px] p-6 lg:p-10 flex flex-col items-center justify-center pb-20 select-none">
      
      {/* Main Card (85% width: max-w-[760px], min-height >= 400px) */}
      <motion.div
        key={`ca-card-${active}`}
        initial={prefersReduced ? { opacity: 0 } : { 
          opacity: 0, 
          y: STAGE_CONFIG.cardEntranceY, 
          scale: STAGE_CONFIG.cardEntranceScale, 
          filter: `blur(${STAGE_CONFIG.cardEntranceBlur})` 
        }}
        animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: prefersReduced ? 0.2 : STAGE_CONFIG.cardEntranceDuration, ease: STAGE_CONFIG.easeEntrance }}
        className="w-full max-w-[760px] min-h-[400px] bg-[#171717] border border-white/[0.08] rounded-2xl p-6 sm:p-7 shadow-2xl flex flex-col justify-between gap-6"
      >
        {/* Top: 3 KPI Tiles (Enters first, numbers count up from 0) */}
        <div className="grid grid-cols-3 gap-3 text-center">
          {copy.kpis.map((kpi, i) => {
            const currentNumeric = (kpi.numeric * counterProgress).toFixed(1);
            const displayVal = counterProgress === 1 ? kpi.value : `${currentNumeric}${kpi.suffix}`;

            return (
              <motion.div
                key={kpi.label}
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: STAGE_CONFIG.innerEntranceY }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: STAGE_CONFIG.innerEntranceDuration, 
                  delay: STAGE_CONFIG.innerStartDelay + i * STAGE_CONFIG.innerStaggerDelay, 
                  ease: STAGE_CONFIG.easeEntrance 
                }}
              >
                <span className="text-xs font-semibold text-white/50 block mb-1 uppercase tracking-wider">
                  {kpi.label}
                </span>
                <div className="flex items-center justify-center gap-1.5 flex-wrap">
                  <span className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-white tracking-tight leading-none">
                    {displayVal}
                  </span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    {kpi.change}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Divider line drawing left to right */}
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: STAGE_CONFIG.analyticsDividerDuration, delay: 0.6, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="w-full h-px bg-white/[0.08]"
        />

        {/* Bar Chart Area (220px tall area, wider bars, 16px gaps) */}
        <div className="relative h-[220px] w-full flex flex-col justify-end pt-8">
          
          {/* Tooltip positioned directly above Friday (index 4) */}
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 1.15 }}
            className="absolute top-0 left-[64%] -translate-x-1/2 px-3 py-1 rounded-lg bg-[#E8A33D] text-[#111110] font-bold text-xs tracking-tight shadow-[0_0_15px_rgba(232,163,61,0.4)] whitespace-nowrap z-10"
          >
            <span>{copy.chart.bestDayTooltip}</span>
          </motion.div>

          {/* 7 Bars (Mon - Sun) */}
          <div className="flex items-end justify-between gap-3 sm:gap-4 h-[160px] px-2">
            {copy.chart.days.map((day, idx) => {
              const isFriday = idx === 4;
              const height = barHeights[idx];
              const barDelay = 0.7 + idx * STAGE_CONFIG.analyticsBarStagger;

              return (
                <div key={day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                  <motion.div
                    initial={prefersReduced ? { opacity: 0 } : { scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ 
                      duration: STAGE_CONFIG.analyticsBarGrowDuration, 
                      delay: barDelay, 
                      ease: STAGE_CONFIG.easeEntrance 
                    }}
                    style={{ 
                      height: `${height}%`, 
                      transformOrigin: "bottom" 
                    }}
                    className={`w-full rounded-t-lg transition-all ${
                      isFriday
                        ? 'bg-[#E8A33D] shadow-[0_0_24px_rgba(232,163,61,0.5)]'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  />
                  <span className={`text-xs font-mono ${isFriday ? 'text-[#E8A33D] font-bold' : 'text-white/40'}`}>
                    {day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer line fading in at the end */}
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.25 }}
          className="text-center text-xs font-semibold text-white/50 pt-2 border-t border-white/[0.04]"
        >
          {copy.chart.footer}
        </motion.div>
      </motion.div>

      {/* Pinned Result Chip */}
      <ResultChip text={copy.resultChip} />
    </div>
  );
};

/**
 * Stage illustration router for the 6 tabs
 */
const ActiveIllustrationRouter: React.FC<{ tabId: string; active: boolean }> = ({ tabId, active }) => {
  switch (tabId) {
    case 'multichannel':
      return <MultiChannelIllustration active={active} />;
    case 'delivery-tracking':
      return <DeliveryTrackingIllustration active={active} />;
    case 'marketing-automation':
      return <MarketingAutomationIllustration active={active} />;
    case 'team-inbox':
      return <SharedInboxIllustration active={active} />;
    case 'customer-segmentation':
      return <CustomerSegmentationIllustration active={active} />;
    case 'campaign-analytics':
      return <CampaignAnalyticsIllustration active={active} />;
    default:
      return null;
  }
};

/**
 * ============================================================================
 * MAIN COMPONENT: BUILT FOR MODERN CUSTOMER ENGAGEMENT
 * ============================================================================
 */
export const ModernCustomerEngagement: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const tabButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(sectionRef, { margin: '-10% 0px -10% 0px' });

  const activeTab = useMemo(() => ENGAGEMENT_COPY.tabs[activeIndex], [activeIndex]);

  const handleSelectTab = useCallback((index: number) => {
    setActiveIndex(index);
    setProgress(0);

    if (tabButtonRefs.current[index]) {
      tabButtonRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const next = (index + 1) % ENGAGEMENT_COPY.tabs.length;
      handleSelectTab(next);
      tabButtonRefs.current[next]?.focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = (index - 1 + ENGAGEMENT_COPY.tabs.length) % ENGAGEMENT_COPY.tabs.length;
      handleSelectTab(prev);
      tabButtonRefs.current[prev]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      handleSelectTab(0);
      tabButtonRefs.current[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      handleSelectTab(ENGAGEMENT_COPY.tabs.length - 1);
      tabButtonRefs.current[ENGAGEMENT_COPY.tabs.length - 1]?.focus();
    }
  };

  // Auto-advance loop: Progress line starts filling only after entrance finishes
  useEffect(() => {
    if (prefersReducedMotion || !isInView || isPaused) {
      return;
    }

    const entranceTimer = setTimeout(() => {
      const intervalMs = 50;
      const remainingMs = STAGE_CONFIG.autoAdvanceTotalMs - STAGE_CONFIG.autoAdvanceDelayMs;
      const step = (intervalMs / remainingMs) * 100;

      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            handleSelectTab((activeIndex + 1) % ENGAGEMENT_COPY.tabs.length);
            return 0;
          }
          return prev + step;
        });
      }, intervalMs);

      return () => clearInterval(timer);
    }, STAGE_CONFIG.autoAdvanceDelayMs);

    return () => clearTimeout(entranceTimer);
  }, [activeIndex, isInView, isPaused, prefersReducedMotion, handleSelectTab]);

  return (
    <section
      ref={sectionRef}
      id="engagement-platform"
      aria-label={ENGAGEMENT_COPY.header.title}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      className="relative w-full bg-[#0E0E0E] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
    >
      <div 
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#E8A33D]/[0.035] blur-[140px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        {/* Header & CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-[#E8A33D] mb-4 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]" />
              {ENGAGEMENT_COPY.header.pill}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
              {ENGAGEMENT_COPY.header.title}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed font-normal">
              {ENGAGEMENT_COPY.header.subtext}
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="#explore"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#E8A33D] hover:bg-[#d8932e] text-[#111110] font-bold text-sm sm:text-base transition-all duration-200 shadow-[0_0_30px_rgba(232,163,61,0.25)] hover:shadow-[0_0_40px_rgba(232,163,61,0.4)]"
            >
              <span>{ENGAGEMENT_COPY.header.cta}</span>
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Fixed Height Illustration Stage Card (Min 520px desktop, 460px tablet, 400px mobile) */}
        <div 
          role="tabpanel"
          id={`panel-${activeTab.id}`}
          aria-labelledby={`tab-${activeTab.id}`}
          className="relative w-full min-h-[400px] md:min-h-[460px] lg:min-h-[520px] rounded-[24px] bg-[#141414] border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden flex items-center justify-center"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E8A33D]/35 to-transparent z-10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: STAGE_CONFIG.exitY }}
              transition={{ duration: prefersReducedMotion ? 0.2 : STAGE_CONFIG.exitDuration, ease: "easeIn" }}
              className="w-full h-full flex items-center justify-center"
            >
              <ActiveIllustrationRouter tabId={activeTab.id} active={true} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 6 Tabs Grid with Vertical Loader Line */}
        <div
          role="tablist"
          aria-label="Features of modern engagement"
          aria-orientation="horizontal"
          className="grid grid-flow-col auto-cols-[82%] sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory scrollbar-none"
        >
          {ENGAGEMENT_COPY.tabs.map((tab, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={tab.id}
                ref={el => (tabButtonRefs.current[index] = el)}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => handleSelectTab(index)}
                onKeyDown={e => handleKeyDown(e, index)}
                className={`group relative text-left p-6 rounded-2xl transition-all duration-300 snap-center outline-none focus-visible:ring-2 focus-visible:ring-[#E8A33D] ${
                  isActive
                    ? 'bg-white/[0.035] border border-white/[0.09] shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
                    : 'bg-transparent border border-transparent hover:bg-white/[0.015]'
                }`}
              >
                {/* 3px Left Vertical Loader Progress Line */}
                <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-white/10 overflow-hidden">
                  {isActive && (
                    <motion.div
                      className="w-full bg-[#E8A33D] rounded-full"
                      style={{ height: `${progress}%` }}
                      transition={{ duration: 0.05, ease: 'linear' }}
                    />
                  )}
                </div>

                <div className="pl-3 flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full transition-colors ${
                      isActive ? 'bg-[#E8A33D] shadow-[0_0_8px_#E8A33D]' : 'bg-white/20 group-hover:bg-white/40'
                    }`} />
                    <h3 className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                      isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                    }`}>
                      {tab.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-normal">
                    {tab.description}
                  </p>

                  <div className={`mt-2 inline-flex items-center gap-1.5 text-xs font-bold transition-all duration-200 ${
                    isActive ? 'text-[#E8A33D] opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'
                  }`}>
                    <span>Learn more</span>
                    <span>&gt;</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ModernCustomerEngagement;

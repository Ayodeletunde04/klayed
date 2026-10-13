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
  stageBg: "#0E0E0E", // Stage background: #0E0E0E (no outer container border or box)

  // 2. Focal Card & Supporting Tiles Style Tokens
  focalCard: {
    bg: "#1A1A1A",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    radius: "20px",
    glow: "0 0 80px rgba(232, 163, 61, 0.18)",
    ring: "0 0 0 1px rgba(232, 163, 61, 0.25)",
    maxWidth: 580,
    mobileMaxWidthPercentage: "90%",
  },
  supportingTile: {
    radius: "16px",
    bg: "rgba(255, 255, 255, 0.03)",
    border: "1px solid rgba(255, 255, 255, 0.06)",
    bands: {
      green: { wash: "rgba(52, 211, 153, 0.05)", border: "rgba(52, 211, 153, 0.25)", color: "#34D399" },
      amber: { wash: "rgba(232, 163, 61, 0.05)", border: "rgba(232, 163, 61, 0.25)", color: "#E8A33D" },
      blue: { wash: "rgba(96, 165, 250, 0.05)", border: "rgba(96, 165, 250, 0.25)", color: "#60A5FA" },
      rose: { wash: "rgba(244, 114, 182, 0.05)", border: "rgba(244, 114, 182, 0.25)", color: "#F472B6" },
      violet: { wash: "rgba(167, 139, 250, 0.05)", border: "rgba(167, 139, 250, 0.25)", color: "#A78BFA" },
    },
  },
  depthMask: "radial-gradient(ellipse at center, black 35%, transparent 80%)",
  maxCardWidth: 760,         // Stage max card width
  captionBottomMargin: 24,   // Pinned caption chip 24px bottom margin

  // 3. Shared Entrance & Exit Transitions
  easeEntrance: [0.22, 1, 0.36, 1], // Custom cubic-bezier(0.22, 1, 0.36, 1)
  tileFieldDuration: 0.8,           // Tile field fades in first: 0.8s
  tileWaveStagger: 0.02,            // Wave stagger from center outward: 0.02s per tile
  focalEntranceDuration: 0.6,       // Focal card enters: 0.6s
  focalEntranceY: 24,               // translateY 24px -> 0
  
  captionEntranceDuration: 0.5,     // Caption chip duration: 0.5s
  captionEntranceY: 12,             // Caption translateY 12px -> 0
  captionStartDelay: 0.75,          // Caption fades in last

  exitDuration: 0.25,               // Exit duration: 0.25s ease-in
  exitY: -12,                       // Exit moves up 12px
  
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

const LockIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);

const BarChartIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

export interface TileItem {
  id: string;
  label: string;
  subLabel?: string;
  icon?: React.ReactNode;
  band: 'green' | 'amber' | 'blue' | 'rose' | 'violet';
  col: number;
  row: number;
  highlight?: 'green' | 'amber' | 'blue' | 'rose' | null;
  tick?: boolean;
}

const BAND_CLASSES = {
  green: "bg-[#34D399]/[0.05] border-[#34D399]/25 text-[#34D399]/70",
  amber: "bg-[#E8A33D]/[0.05] border-[#E8A33D]/25 text-[#E8A33D]/70",
  blue: "bg-[#60A5FA]/[0.05] border-[#60A5FA]/25 text-[#60A5FA]/70",
  rose: "bg-[#F472B6]/[0.05] border-[#F472B6]/25 text-[#F472B6]/70",
  violet: "bg-[#A78BFA]/[0.05] border-[#A78BFA]/25 text-[#A78BFA]/70",
};

const HIGHLIGHT_CLASSES = {
  green: "bg-[#34D399]/20 !border-[#34D399] !text-[#34D399] shadow-[0_0_20px_rgba(52,211,153,0.35)] scale-[1.04]",
  amber: "bg-[#E8A33D]/25 !border-[#E8A33D] !text-[#E8A33D] shadow-[0_0_25px_rgba(232,163,61,0.45)] scale-[1.04]",
  blue: "bg-[#60A5FA]/25 !border-[#60A5FA] !text-[#60A5FA] shadow-[0_0_25px_rgba(96,165,250,0.45)] scale-[1.04]",
  rose: "bg-[#F472B6]/25 !border-[#F472B6] !text-[#F472B6] shadow-[0_0_25px_rgba(244,114,182,0.45)] scale-[1.04]",
};

export const TileField: React.FC<{ tiles: TileItem[] }> = ({ tiles }) => {
  const prefersReduced = useReducedMotion();

  return (
    <div 
      className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none z-0"
      style={{
        maskImage: 'radial-gradient(ellipse at center, black 35%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 35%, transparent 80%)'
      }}
    >
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 sm:gap-3.5 w-full max-w-[860px] p-4 sm:p-6">
        {tiles.map((tile) => {
          const dist = Math.hypot(tile.col - 1.5, tile.row - 1.5);
          const falloff = dist < 1.0 ? 0.95 : dist < 1.8 ? 0.58 : 0.22;
          const isHighlighted = !!tile.highlight;
          const highlightClass = tile.highlight ? HIGHLIGHT_CLASSES[tile.highlight] : '';

          return (
            <motion.div
              key={tile.id}
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={{
                opacity: isHighlighted ? 1 : falloff,
                scale: isHighlighted ? 1.04 : 1
              }}
              transition={{
                duration: 0.5,
                delay: prefersReduced ? 0 : dist * STAGE_CONFIG.tileWaveStagger,
                ease: STAGE_CONFIG.easeEntrance
              }}
              className={`h-[72px] sm:h-[80px] px-3.5 py-2.5 rounded-2xl border backdrop-blur-sm flex items-center gap-2.5 transition-all duration-500 ${BAND_CLASSES[tile.band]} ${highlightClass}`}
            >
              {tile.icon && <div className="flex-shrink-0">{tile.icon}</div>}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs sm:text-[13px] font-semibold truncate block text-white/80">
                    {tile.label}
                  </span>
                  {tile.tick && <CheckIcon className="w-3.5 h-3.5 text-[#34D399] flex-shrink-0" />}
                </div>
                {tile.subLabel && (
                  <span className="text-[10px] sm:text-xs opacity-60 truncate block font-mono">
                    {tile.subLabel}
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

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
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#1A1A1A]/95 backdrop-blur-md border border-[#E8A33D]/35 shadow-[0_0_24px_rgba(232,163,61,0.22)] whitespace-nowrap"
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
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!active) {
      setPulseSend(false);
      setStep(0);
      return;
    }
    const t0 = setTimeout(() => setPulseSend(true), 1100);
    const t1 = setTimeout(() => setStep(1), 1400); // WhatsApp green tick
    const t2 = setTimeout(() => setStep(2), 1750); // SMS green tick
    const t3 = setTimeout(() => setStep(3), 2100); // Email green tick
    const t4 = setTimeout(() => setStep(4), 2450); // Voice green tick
    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [active]);

  // Supporting tiles: Staggered grid around focal card with row color bands
  // Row 0: WhatsApp green, Row 1: SMS amber, Row 2: Email blue, Row 3: Voice rose, outer: violet
  const tiles: TileItem[] = [
    // Row 0: Green Band (WhatsApp / RCS)
    { id: 'mc-wa', label: 'WhatsApp', subLabel: 'Meta API', icon: <PhoneCallIcon className="w-3.5 h-3.5 text-[#34D399]" />, band: 'green', col: 0, row: 0, highlight: step >= 1 ? 'green' : null, tick: step >= 1 },
    { id: 'mc-rcs', label: 'RCS', subLabel: 'Verified Sender', icon: <MessageSquareIcon className="w-3.5 h-3.5 text-[#34D399]" />, band: 'green', col: 1, row: 0 },
    { id: 'mc-wa2', label: 'WhatsApp Bot', subLabel: 'Interactive', icon: <PhoneCallIcon className="w-3.5 h-3.5 text-[#34D399]" />, band: 'green', col: 2, row: 0 },
    { id: 'mc-rcs2', label: 'RCS Carousel', subLabel: 'Rich Card', icon: <MessageSquareIcon className="w-3.5 h-3.5 text-[#34D399]" />, band: 'green', col: 3, row: 0 },

    // Row 1: Amber Band (SMS)
    { id: 'mc-sms', label: 'SMS', subLabel: 'DND Bypass', icon: <MessageSquareIcon className="w-3.5 h-3.5 text-[#E8A33D]" />, band: 'amber', col: 0, row: 1, highlight: step >= 2 ? 'green' : null, tick: step >= 2 },
    { id: 'mc-otp', label: 'SMS OTP', subLabel: '99.98% SLA', icon: <ZapIcon className="w-3.5 h-3.5 text-[#E8A33D]" />, band: 'amber', col: 1, row: 1 },
    { id: 'mc-flash', label: 'Flash SMS', subLabel: 'Direct Screen', icon: <MessageSquareIcon className="w-3.5 h-3.5 text-[#E8A33D]" />, band: 'amber', col: 2, row: 1 },
    { id: 'mc-short', label: 'Shortcode', subLabel: 'Two-Way', icon: <MessageSquareIcon className="w-3.5 h-3.5 text-[#E8A33D]" />, band: 'amber', col: 3, row: 1 },

    // Row 2: Blue Band (Email)
    { id: 'mc-email', label: 'Email', subLabel: 'Inbox Placed', icon: <MailIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, band: 'blue', col: 0, row: 2, highlight: step >= 3 ? 'green' : null, tick: step >= 3 },
    { id: 'mc-trans', label: 'Transactional', subLabel: 'DKIM Verified', icon: <MailIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, band: 'blue', col: 1, row: 2 },
    { id: 'mc-news', label: 'Newsletter', subLabel: 'Dedicated IP', icon: <MailIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, band: 'blue', col: 2, row: 2 },
    { id: 'mc-batch', label: 'Email Batch', subLabel: 'High Speed', icon: <MailIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, band: 'blue', col: 3, row: 2 },

    // Row 3: Rose Band (Voice) & Violet (Push / Telegram / In-app)
    { id: 'mc-voice', label: 'Voice', subLabel: 'Dispatched', icon: <PhoneCallIcon className="w-3.5 h-3.5 text-[#F472B6]" />, band: 'rose', col: 0, row: 3, highlight: step >= 4 ? 'green' : null, tick: step >= 4 },
    { id: 'mc-ivr', label: 'Voice IVR', subLabel: 'Interactive', icon: <PhoneCallIcon className="w-3.5 h-3.5 text-[#F472B6]" />, band: 'rose', col: 1, row: 3 },
    { id: 'mc-push', label: 'Push', subLabel: 'APNs / FCM', icon: <ZapIcon className="w-3.5 h-3.5 text-[#A78BFA]" />, band: 'violet', col: 2, row: 3 },
    { id: 'mc-inapp', label: 'In-app', subLabel: 'Realtime Web', icon: <ShoppingBagIcon className="w-3.5 h-3.5 text-[#A78BFA]" />, band: 'violet', col: 3, row: 3 },
  ];

  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[460px] lg:min-h-[520px] p-6 lg:p-10 flex flex-col items-center justify-center pb-20 select-none overflow-hidden">
      {/* Background Supporting Tiles Field */}
      <TileField tiles={tiles} />

      {/* Bright Focal Card in Centre */}
      <motion.div
        key={`mc-focal-${active}`}
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: STAGE_CONFIG.cardEntranceY }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReduced ? 0.2 : STAGE_CONFIG.cardEntranceDuration, ease: STAGE_CONFIG.easeEntrance }}
        className="w-full max-w-[540px] p-5 sm:p-6 rounded-[20px] bg-[#1A1A1A] border border-white/[0.12] shadow-[0_0_80px_rgba(232,163,61,0.18)] ring-1 ring-[#E8A33D]/25 relative z-10 flex flex-col gap-4 text-white"
      >
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
          <span className="text-xs font-semibold text-white/50 uppercase tracking-wider flex items-center gap-1.5">
            <ZapIcon className="w-3.5 h-3.5 text-[#E8A33D]" />
            {copy.composer.title}
          </span>
          <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#E8A33D]/15 text-[#E8A33D] border border-[#E8A33D]/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D] animate-pulse" />
            All 4 Channels Active
          </span>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] min-h-[64px] flex items-center">
          <p className="text-sm sm:text-base text-white font-medium leading-snug">
            "{copy.composer.message}"
          </p>
        </div>

        {/* 4 Main Channels Status Pills */}
        <div className="grid grid-cols-4 gap-2 py-1">
          <div className={`p-2 rounded-lg text-center transition-all duration-300 ${step >= 1 ? 'bg-[#34D399]/15 border border-[#34D399]/40 text-[#34D399]' : 'bg-white/[0.02] border border-white/[0.06] text-white/40'}`}>
            <span className="text-[11px] font-bold block">WhatsApp</span>
            <span className="text-[10px] font-mono">{step >= 1 ? '✓ Delivered' : 'Queued'}</span>
          </div>
          <div className={`p-2 rounded-lg text-center transition-all duration-300 ${step >= 2 ? 'bg-[#34D399]/15 border border-[#34D399]/40 text-[#34D399]' : 'bg-white/[0.02] border border-white/[0.06] text-white/40'}`}>
            <span className="text-[11px] font-bold block">SMS</span>
            <span className="text-[10px] font-mono">{step >= 2 ? '✓ Delivered' : 'Queued'}</span>
          </div>
          <div className={`p-2 rounded-lg text-center transition-all duration-300 ${step >= 3 ? 'bg-[#34D399]/15 border border-[#34D399]/40 text-[#34D399]' : 'bg-white/[0.02] border border-white/[0.06] text-white/40'}`}>
            <span className="text-[11px] font-bold block">Email</span>
            <span className="text-[10px] font-mono">{step >= 3 ? '✓ Delivered' : 'Queued'}</span>
          </div>
          <div className={`p-2 rounded-lg text-center transition-all duration-300 ${step >= 4 ? 'bg-[#34D399]/15 border border-[#34D399]/40 text-[#34D399]' : 'bg-white/[0.02] border border-white/[0.06] text-white/40'}`}>
            <span className="text-[11px] font-bold block">Voice</span>
            <span className="text-[10px] font-mono">{step >= 4 ? '✓ Delivered' : 'Queued'}</span>
          </div>
        </div>

        <motion.div
          animate={pulseSend && !prefersReduced ? { scale: [1, 0.97, 1] } : {}}
          transition={{ duration: 0.3 }}
          className="w-full py-2.5 sm:py-3 rounded-xl bg-[#E8A33D] text-[#111110] font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(232,163,61,0.35)]"
        >
          <SendIcon className="w-4 h-4" />
          <span>{copy.composer.sendBtn}</span>
        </motion.div>
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
  const [trackStep, setTrackStep] = useState(0);
  const [reroutedState, setReroutedState] = useState<'failed' | 'rerouting' | 'delivered'>('failed');

  useEffect(() => {
    if (!active) {
      setTrackStep(0);
      setReroutedState('failed');
      return;
    }
    // Track stepper on focal card lights up
    const t1 = setTimeout(() => setTrackStep(1), 800);  // Sent
    const t2 = setTimeout(() => setTrackStep(2), 1500); // Delivered
    const t3 = setTimeout(() => setTrackStep(3), 2200); // Read

    // Nearby rose tile fails, then reroutes amber, then delivers green
    const tr1 = setTimeout(() => setReroutedState('rerouting'), 2400);
    const tr2 = setTimeout(() => setReroutedState('delivered'), 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(tr1);
      clearTimeout(tr2);
    };
  }, [active]);

  // Background customer status tiles (Green success, Rose failed -> turns Amber -> Green, Blue sent)
  const tiles: TileItem[] = [
    // Row 0: Green Band (Success - Delivered / Read)
    { id: 'dt-1', label: 'Fatima A.', subLabel: '+234 802 • Delivered', icon: <CheckIcon className="w-3.5 h-3.5 text-[#34D399]" />, band: 'green', col: 0, row: 0, tick: true },
    { id: 'dt-2', label: 'Chidi O.', subLabel: '+234 814 • Read', icon: <DoubleCheckIcon className="w-3.5 h-3.5 text-[#34D399]" />, band: 'green', col: 1, row: 0, tick: true },
    { id: 'dt-3', label: 'Emeka K.', subLabel: '+234 901 • Delivered', icon: <CheckIcon className="w-3.5 h-3.5 text-[#34D399]" />, band: 'green', col: 2, row: 0, tick: true },
    { id: 'dt-4', label: 'Kemi B.', subLabel: '+234 805 • Read', icon: <DoubleCheckIcon className="w-3.5 h-3.5 text-[#34D399]" />, band: 'green', col: 3, row: 0, tick: true },

    // Row 1: Blue Band (Sent / Processing)
    { id: 'dt-5', label: 'Aisha M.', subLabel: '+234 809 • Sent', icon: <ClockIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, band: 'blue', col: 0, row: 1 },
    { id: 'dt-6', label: 'Babatunde E.', subLabel: '+234 703 • Sent', icon: <ClockIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, band: 'blue', col: 1, row: 1 },
    { id: 'dt-7', label: 'Ngozi U.', subLabel: '+234 818 • Sent', icon: <ClockIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, band: 'blue', col: 2, row: 1 },
    { id: 'dt-8', label: 'Dapo T.', subLabel: '+234 806 • Sent', icon: <ClockIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, band: 'blue', col: 3, row: 1 },

    // Row 2: Rose Band -> Dynamic Re-routing story tile!
    { 
      id: 'dt-reroute', 
      label: 'Kolawole A.', 
      subLabel: reroutedState === 'delivered' ? '+234 705 • Airtel Delivered' : reroutedState === 'rerouting' ? '+234 705 • Re-routing Airtel' : '+234 705 • MTN Failed',
      icon: reroutedState === 'delivered' ? <CheckIcon className="w-3.5 h-3.5 text-[#34D399]" /> : reroutedState === 'rerouting' ? <RefreshCwIcon className="w-3.5 h-3.5 text-[#E8A33D] animate-spin" /> : <XIcon className="w-3.5 h-3.5 text-[#F472B6]" />,
      band: reroutedState === 'delivered' ? 'green' : reroutedState === 'rerouting' ? 'amber' : 'rose', 
      col: 0, 
      row: 2, 
      highlight: reroutedState === 'delivered' ? 'green' : reroutedState === 'rerouting' ? 'amber' : 'rose',
      tick: reroutedState === 'delivered'
    },
    { id: 'dt-10', label: 'Halima R.', subLabel: '+234 816 • Delivered', icon: <CheckIcon className="w-3.5 h-3.5 text-[#34D399]" />, band: 'green', col: 1, row: 2, tick: true },
    { id: 'dt-11', label: 'Zainab L.', subLabel: '+234 902 • Delivered', icon: <CheckIcon className="w-3.5 h-3.5 text-[#34D399]" />, band: 'green', col: 2, row: 2, tick: true },
    { id: 'dt-12', label: 'Kunle P.', subLabel: '+234 808 • Read', icon: <DoubleCheckIcon className="w-3.5 h-3.5 text-[#34D399]" />, band: 'green', col: 3, row: 2, tick: true },

    // Row 3: Amber / Green Band (Re-routed & Delivered)
    { id: 'dt-13', label: 'Segun A.', subLabel: '+234 812 • Re-routed', icon: <CheckIcon className="w-3.5 h-3.5 text-[#E8A33D]" />, band: 'amber', col: 0, row: 3, tick: true },
    { id: 'dt-14', label: 'Blessing O.', subLabel: '+234 903 • Delivered', icon: <CheckIcon className="w-3.5 h-3.5 text-[#34D399]" />, band: 'green', col: 1, row: 3, tick: true },
    { id: 'dt-15', label: 'Yusuf I.', subLabel: '+234 708 • Delivered', icon: <CheckIcon className="w-3.5 h-3.5 text-[#34D399]" />, band: 'green', col: 2, row: 3, tick: true },
    { id: 'dt-16', label: 'Mary J.', subLabel: '+234 807 • Read', icon: <DoubleCheckIcon className="w-3.5 h-3.5 text-[#34D399]" />, band: 'green', col: 3, row: 3, tick: true },
  ];

  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[460px] lg:min-h-[520px] p-6 lg:p-10 flex flex-col items-center justify-center pb-20 select-none overflow-hidden">
      {/* Background Supporting Tiles Field */}
      <TileField tiles={tiles} />

      {/* Bright Focal Card in Centre */}
      <motion.div
        key={`dt-focal-${active}`}
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: STAGE_CONFIG.cardEntranceY }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReduced ? 0.2 : STAGE_CONFIG.cardEntranceDuration, ease: STAGE_CONFIG.easeEntrance }}
        className="w-full max-w-[560px] p-5 sm:p-6 rounded-[20px] bg-[#1A1A1A] border border-white/[0.12] shadow-[0_0_80px_rgba(232,163,61,0.18)] ring-1 ring-[#E8A33D]/25 relative z-10 flex flex-col gap-4 text-white"
      >
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <ActivityIcon className="w-4 h-4 text-[#E8A33D]" />
            <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
              {copy.header.title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-white/5 border border-white/10 text-white/60">
              ● {copy.header.latency}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E8A33D]/15 border border-[#E8A33D]/30 text-[#E8A33D] shadow-[0_0_12px_rgba(232,163,61,0.25)]">
              98.4% delivered
            </span>
          </div>
        </div>

        {/* Customer Message Row */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 font-bold flex items-center justify-center text-xs">
              TO
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">Tunde O.</span>
                <span className="text-[11px] font-mono text-white/50">+234 803 219 8834</span>
              </div>
              <span className="text-xs text-white/60 flex items-center gap-1 mt-0.5">
                WhatsApp • MTN Nigeria
              </span>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-white/60">
            10:42 AM
          </span>
        </div>

        {/* Sent -> Delivered -> Read Stepper Track */}
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] flex flex-col gap-2">
          <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">
            Live Delivery Track
          </span>
          <div className="grid grid-cols-3 gap-2 text-center pt-1">
            {/* Step 1: Sent */}
            <div className={`p-2.5 rounded-xl border transition-all duration-500 ${trackStep >= 1 ? 'bg-[#34D399]/15 border-[#34D399] text-[#34D399]' : 'bg-white/[0.02] border-white/10 text-white/30'}`}>
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckIcon className="w-3.5 h-3.5" />
                <span className="text-xs font-bold">Sent</span>
              </div>
              <span className="text-[10px] font-mono opacity-80 block">10:42:01</span>
            </div>

            {/* Step 2: Delivered */}
            <div className={`p-2.5 rounded-xl border transition-all duration-500 ${trackStep >= 2 ? 'bg-[#34D399]/15 border-[#34D399] text-[#34D399]' : 'bg-white/[0.02] border-white/10 text-white/30'}`}>
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckIcon className="w-3.5 h-3.5" />
                <span className="text-xs font-bold">Delivered</span>
              </div>
              <span className="text-[10px] font-mono opacity-80 block">10:42:03</span>
            </div>

            {/* Step 3: Read */}
            <div className={`p-2.5 rounded-xl border transition-all duration-500 ${trackStep >= 3 ? 'bg-[#34D399]/15 border-[#34D399] text-[#34D399] shadow-[0_0_15px_rgba(52,211,153,0.3)]' : 'bg-white/[0.02] border-white/10 text-white/30'}`}>
              <div className="flex items-center justify-center gap-1 mb-1">
                <DoubleCheckIcon className="w-3.5 h-3.5" />
                <span className="text-xs font-bold">Read</span>
              </div>
              <span className="text-[10px] font-mono opacity-80 block">10:43:15</span>
            </div>
          </div>
        </div>

        {/* Self-healing Failover Banner */}
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-amber-300">
            <RefreshCwIcon className="w-3.5 h-3.5 animate-spin" />
            <span>Automatic Route Failover Active</span>
          </div>
          <span className="font-mono text-amber-400 font-bold">
            &lt; 1.8s switch
          </span>
        </div>
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
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!active) {
      setActiveStep(0);
      return;
    }
    const t1 = setTimeout(() => setActiveStep(1), 900);  // Node 1: Cart left
    const t2 = setTimeout(() => setActiveStep(2), 1600); // Node 2: Wait 45m
    const t3 = setTimeout(() => setActiveStep(3), 2300); // Node 3: Over 20k
    const t4 = setTimeout(() => setActiveStep(4), 3000); // Focal node opens recovered!
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [active]);

  // Background automation nodes and ideas connected to focal card
  const tiles: TileItem[] = [
    // Row 0: Rose Band (Flow Ideas)
    { id: 'ma-bday', label: 'Birthday Offer', subLabel: 'Automated SMS', icon: <ZapIcon className="w-3.5 h-3.5 text-[#F472B6]" />, band: 'rose', col: 0, row: 0 },
    { id: 'ma-win', label: 'Win-back 30d', subLabel: 'Discount flow', icon: <ShoppingBagIcon className="w-3.5 h-3.5 text-[#F472B6]" />, band: 'rose', col: 1, row: 0 },
    { id: 'ma-vip', label: 'VIP Welcome', subLabel: 'Tier 1 Gift', icon: <ZapIcon className="w-3.5 h-3.5 text-[#F472B6]" />, band: 'rose', col: 2, row: 0 },
    { id: 'ma-rev', label: 'Review Request', subLabel: 'Post-delivery', icon: <MessageSquareIcon className="w-3.5 h-3.5 text-[#F472B6]" />, band: 'rose', col: 3, row: 0 },

    // Row 1: Flow Sequence Nodes (Light up in order!)
    { 
      id: 'ma-node1', 
      label: 'Customer leaves cart', 
      subLabel: 'Trigger: Checkout exit', 
      icon: <ShoppingBagIcon className="w-3.5 h-3.5 text-[#E8A33D]" />, 
      band: 'amber', 
      col: 0, 
      row: 1, 
      highlight: activeStep >= 1 ? 'amber' : null,
      tick: activeStep >= 1
    },
    { 
      id: 'ma-node2', 
      label: 'Wait 45 minutes', 
      subLabel: 'Delay window', 
      icon: <ClockIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, 
      band: 'blue', 
      col: 1, 
      row: 1, 
      highlight: activeStep >= 2 ? 'blue' : null,
      tick: activeStep >= 2
    },
    { 
      id: 'ma-node3', 
      label: 'Cart > ₦20,000?', 
      subLabel: 'Condition: High value', 
      icon: <FilterIcon className="w-3.5 h-3.5 text-[#A78BFA]" />, 
      band: 'violet', 
      col: 2, 
      row: 1, 
      highlight: activeStep >= 3 ? 'violet' : null,
      tick: activeStep >= 3
    },
    { id: 'ma-ship', label: 'Order shipped', subLabel: 'Fulfillment webhook', icon: <CheckIcon className="w-3.5 h-3.5 text-[#34D399]" />, band: 'green', col: 3, row: 1 },

    // Row 2: Blue Band
    { id: 'ma-price', label: 'Price drop alert', subLabel: 'Wishlist trigger', icon: <ZapIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, band: 'blue', col: 0, row: 2 },
    { id: 'ma-lead', label: 'Lead score > 80', subLabel: 'CRM webhook', icon: <FilterIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, band: 'blue', col: 1, row: 2 },
    { id: 'ma-sub', label: 'Subscription renewal', subLabel: '7-day reminder', icon: <ClockIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, band: 'blue', col: 2, row: 2 },
    { id: 'ma-cross', label: 'Cross-sell', subLabel: 'Matching sneakers', icon: <ShoppingBagIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, band: 'blue', col: 3, row: 2 },

    // Row 3: Violet Band
    { id: 'ma-survey', label: 'NPS Survey', subLabel: '30 days after buy', icon: <MessageSquareIcon className="w-3.5 h-3.5 text-[#A78BFA]" />, band: 'violet', col: 0, row: 3 },
    { id: 'ma-browse', label: 'Browse dropoff', subLabel: 'Viewed 3+ times', icon: <ClockIcon className="w-3.5 h-3.5 text-[#A78BFA]" />, band: 'violet', col: 1, row: 3 },
    { id: 'ma-reorder', label: 'Replenishment', subLabel: 'Monthly restock', icon: <RefreshCwIcon className="w-3.5 h-3.5 text-[#A78BFA]" />, band: 'violet', col: 2, row: 3 },
    { id: 'ma-refer', label: 'Refer a friend', subLabel: 'Give ₦5k, get ₦5k', icon: <ZapIcon className="w-3.5 h-3.5 text-[#A78BFA]" />, band: 'violet', col: 3, row: 3 },
  ];

  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[460px] lg:min-h-[520px] p-6 lg:p-10 flex flex-col items-center justify-center pb-20 select-none overflow-hidden">
      {/* Background Supporting Tiles Field */}
      <TileField tiles={tiles} />

      {/* Bright Focal Card in Centre: The Active WhatsApp Offer Node with Phone-Style Preview */}
      <motion.div
        key={`ma-focal-${active}`}
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: STAGE_CONFIG.cardEntranceY }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReduced ? 0.2 : STAGE_CONFIG.cardEntranceDuration, ease: STAGE_CONFIG.easeEntrance }}
        className="w-full max-w-[540px] p-5 sm:p-6 rounded-[20px] bg-[#1A1A1A] border border-white/[0.12] shadow-[0_0_80px_rgba(232,163,61,0.18)] ring-1 ring-[#E8A33D]/25 relative z-10 flex flex-col gap-4 text-white"
      >
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#34D399]/20 border border-[#34D399]/40 flex items-center justify-center">
              <PhoneCallIcon className="w-3.5 h-3.5 text-[#34D399]" />
            </span>
            <div>
              <span className="text-[11px] font-bold text-[#34D399] uppercase tracking-wider block">
                ACTIVE NODE • INSTANT SEND
              </span>
              <h3 className="text-sm font-bold text-white">
                Personalized WhatsApp Offer
              </h3>
            </div>
          </div>

          <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#E8A33D]/15 text-[#E8A33D] border border-[#E8A33D]/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D] animate-ping" />
            Live Flow
          </span>
        </div>

        {/* Phone-Style Preview of the message */}
        <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs text-emerald-400 font-semibold">
            <span>WhatsApp Preview</span>
            <span className="font-mono text-[11px] text-white/50">Delivered just now</span>
          </div>
          <div className="p-3.5 rounded-lg bg-[#142319] border border-[#22C55E]/30 text-white/95 text-xs sm:text-sm leading-relaxed">
            "Hey Tunde! You left 2 items in your cart. Use code <span className="font-bold text-[#E8A33D]">KLAYED10</span> for 10% off before they sell out! 🛍️ klayed.co/cart"
          </div>
        </div>

        {/* Recovered Value Badge */}
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: activeStep >= 4 ? 1 : 0.6, scale: activeStep >= 4 ? 1 : 0.98 }}
          transition={{ duration: 0.4 }}
          className={`p-3 sm:p-3.5 rounded-xl border flex items-center justify-between transition-all duration-500 ${
            activeStep >= 4 
              ? 'bg-[#E8A33D]/15 border-[#E8A33D] shadow-[0_0_24px_rgba(232,163,61,0.25)]' 
              : 'bg-white/[0.02] border-white/10'
          }`}
        >
          <div className="flex items-center gap-2">
            <ZapIcon className="w-4 h-4 text-[#E8A33D]" />
            <span className="text-xs sm:text-sm font-semibold text-white/90">
              Recovered Revenue Pill
            </span>
          </div>
          <strong className="text-sm sm:text-base font-extrabold text-[#E8A33D] tracking-tight">
            +₦45,000 recovered
          </strong>
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
  const [tundeState, setTundeState] = useState<'idle' | 'approaching' | 'blocked'>('idle');
  const [showToast, setShowToast] = useState(false);
  const [adaSent, setAdaSent] = useState(false);

  useEffect(() => {
    if (!active) {
      setTundeState('idle');
      setShowToast(false);
      setAdaSent(false);
      return;
    }
    // Tunde moves toward focal card
    const t1 = setTimeout(() => setTundeState('approaching'), 1000);
    // Collision detection triggers toast
    const t2 = setTimeout(() => {
      setShowToast(true);
      setTundeState('blocked');
    }, 1800);
    // Tunde drifts back & Ada sends reply
    const t3 = setTimeout(() => {
      setTundeState('idle');
      setAdaSent(true);
    }, 2700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [active]);

  // Background conversation tiles in blue, violet and rose bands fading to edges
  const tiles: TileItem[] = [
    // Row 0: Blue Band
    { id: 'si-1', label: 'Tunde B.', subLabel: 'Invoice request #883', icon: <MailIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, band: 'blue', col: 0, row: 0 },
    { id: 'si-2', label: 'Amina S.', subLabel: 'Refund processed', icon: <CheckIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, band: 'blue', col: 1, row: 0, tick: true },
    { id: 'si-3', label: 'Kemi O.', subLabel: 'Address updated', icon: <MessageSquareIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, band: 'blue', col: 2, row: 0 },
    { id: 'si-4', label: 'Chidi N.', subLabel: 'Payment receipt', icon: <CheckIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, band: 'blue', col: 3, row: 0, tick: true },

    // Row 1: Violet Band
    { id: 'si-5', label: 'Emeka O.', subLabel: 'Delivery ETA question', icon: <ClockIcon className="w-3.5 h-3.5 text-[#A78BFA]" />, band: 'violet', col: 0, row: 1 },
    { id: 'si-6', label: 'Folake A.', subLabel: 'Thanks for the quick reply!', icon: <DoubleCheckIcon className="w-3.5 h-3.5 text-[#A78BFA]" />, band: 'violet', col: 1, row: 1 },
    { id: 'si-7', label: 'Dayo L.', subLabel: 'Order status check', icon: <MessageSquareIcon className="w-3.5 h-3.5 text-[#A78BFA]" />, band: 'violet', col: 2, row: 1 },
    { id: 'si-8', label: 'Ibrahim K.', subLabel: 'Tracking code issue', icon: <ZapIcon className="w-3.5 h-3.5 text-[#A78BFA]" />, band: 'violet', col: 3, row: 1 },

    // Row 2: Rose Band
    { id: 'si-9', label: 'Kolawole M.', subLabel: 'Can I change color?', icon: <MessageSquareIcon className="w-3.5 h-3.5 text-[#F472B6]" />, band: 'rose', col: 0, row: 2 },
    { id: 'si-10', label: 'Zainab K.', subLabel: 'Received my parcel 🎉', icon: <CheckIcon className="w-3.5 h-3.5 text-[#F472B6]" />, band: 'rose', col: 1, row: 2, tick: true },
    { id: 'si-11', label: 'Bola T.', subLabel: 'Discount code query', icon: <ZapIcon className="w-3.5 h-3.5 text-[#F472B6]" />, band: 'rose', col: 2, row: 2 },
    { id: 'si-12', label: 'Uche E.', subLabel: 'Bank transfer query', icon: <ClockIcon className="w-3.5 h-3.5 text-[#F472B6]" />, band: 'rose', col: 3, row: 2 },

    // Row 3: Blue / Violet Band
    { id: 'si-13', label: 'Bayo D.', subLabel: 'Inquiry on enterprise plan', icon: <MailIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, band: 'blue', col: 0, row: 3 },
    { id: 'si-14', label: 'Ngozi J.', subLabel: 'Confirmed receipt', icon: <CheckIcon className="w-3.5 h-3.5 text-[#A78BFA]" />, band: 'violet', col: 1, row: 3, tick: true },
    { id: 'si-15', label: 'Segun P.', subLabel: 'Urgent assistance needed', icon: <ZapIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, band: 'blue', col: 2, row: 3 },
    { id: 'si-16', label: 'Fatima H.', subLabel: 'Delivery scheduled for 4PM', icon: <ClockIcon className="w-3.5 h-3.5 text-[#A78BFA]" />, band: 'violet', col: 3, row: 3 },
  ];

  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[460px] lg:min-h-[520px] p-6 lg:p-10 flex flex-col items-center justify-center pb-20 select-none overflow-hidden">
      {/* Background Supporting Tiles Field */}
      <TileField tiles={tiles} />

      {/* Floating Teammate Tunde drifting toward focal card */}
      <motion.div
        animate={
          prefersReduced
            ? {}
            : tundeState === 'approaching'
            ? { x: 20, y: -10, opacity: 1, scale: 1.05 }
            : tundeState === 'blocked'
            ? { x: -10, y: 0, opacity: 0.8, scale: 0.95 }
            : { x: -60, y: 20, opacity: 0.5, scale: 0.9 }
        }
        transition={{ duration: 0.6, ease: STAGE_CONFIG.easeEntrance }}
        className="absolute top-12 left-8 sm:left-24 z-20 hidden sm:flex items-center gap-2 p-2 px-3 rounded-full bg-[#1A1A1A] border border-white/20 shadow-xl"
      >
        <div className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-300 font-bold text-xs flex items-center justify-center border border-blue-500/40">
          TU
        </div>
        <span className="text-xs font-semibold text-white/80">Tunde</span>
      </motion.div>

      {/* Collision Toast */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-8 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-full bg-[#1A1A1A] border border-[#E8A33D]/60 shadow-[0_0_30px_rgba(232,163,61,0.35)] flex items-center gap-2"
        >
          <LockIcon className="w-3.5 h-3.5 text-[#E8A33D]" />
          <span className="text-xs sm:text-sm font-bold text-[#E8A33D]">
            Ada is already on this
          </span>
        </motion.div>
      )}

      {/* Bright Focal Card in Centre: Active Conversation with Ada replying */}
      <motion.div
        key={`si-focal-${active}`}
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: STAGE_CONFIG.cardEntranceY }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReduced ? 0.2 : STAGE_CONFIG.cardEntranceDuration, ease: STAGE_CONFIG.easeEntrance }}
        className="w-full max-w-[560px] p-5 sm:p-6 rounded-[20px] bg-[#1A1A1A] border border-white/[0.12] shadow-[0_0_80px_rgba(232,163,61,0.18)] ring-1 ring-[#E8A33D]/25 relative z-10 flex flex-col gap-4 text-white"
      >
        {/* Header with Lock Badge */}
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 font-bold flex items-center justify-center text-xs">
              CE
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">Chioma Eze</span>
                <span className="text-[11px] font-mono text-white/50">+234 802 441 9021</span>
              </div>
              <span className="text-xs text-white/60">Order #8821 Confirmation</span>
            </div>
          </div>

          <div className="px-3 py-1 rounded-full bg-[#E8A33D]/15 border border-[#E8A33D]/40 text-[#E8A33D] font-bold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(232,163,61,0.25)]">
            <LockIcon className="w-3.5 h-3.5" />
            <span>Thread Locked</span>
          </div>
        </div>

        {/* Incoming Customer Message */}
        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col gap-1">
          <div className="flex items-center justify-between text-xs text-white/50">
            <span>Chioma Eze</span>
            <span className="font-mono text-[11px]">2m ago</span>
          </div>
          <p className="text-xs sm:text-sm text-white/90 leading-snug">
            "{copy.customer.message}"
          </p>
        </div>

        {/* Ada's Reply with Double Checks */}
        <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs text-emerald-400 font-semibold">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Ada (Replying now)</span>
            </div>
            <div className="flex items-center gap-1">
              <DoubleCheckIcon className="w-4 h-4 text-emerald-400" />
              <span className="text-[11px] font-mono">{adaSent ? 'Sent' : 'Drafting'}</span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-emerald-200/95 font-medium leading-snug">
            "{copy.agents.ada.replyText}"
          </p>
        </div>
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
  const [highlightFridayTile, setHighlightFridayTile] = useState(false);

  useEffect(() => {
    if (!active) {
      setCounterProgress(0);
      setHighlightFridayTile(false);
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

    const fridayTimer = setTimeout(() => {
      setHighlightFridayTile(true);
    }, 1400);

    return () => {
      clearTimeout(delayTimer);
      clearTimeout(fridayTimer);
      cancelAnimationFrame(animId);
    };
  }, [active]);

  // Background mini-metric tiles in green, blue and violet bands
  const tiles: TileItem[] = [
    // Row 0: Green Band
    { id: 'ca-1', label: 'Delivered', subLabel: '99.94% SLA', icon: <CheckIcon className="w-3.5 h-3.5 text-[#34D399]" />, band: 'green', col: 0, row: 0, tick: true },
    { id: 'ca-2', label: 'Revenue', subLabel: '+₦1.2M lift', icon: <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#34D399]" />, band: 'green', col: 1, row: 0 },
    { id: 'ca-3', label: 'Active Contacts', subLabel: '14,820 Lagos', icon: <UsersIcon className="w-3.5 h-3.5 text-[#34D399]" />, band: 'green', col: 2, row: 0 },
    { id: 'ca-4', label: 'Delivery Rate', subLabel: '99.8% MTN/Airtel', icon: <CheckIcon className="w-3.5 h-3.5 text-[#34D399]" />, band: 'green', col: 3, row: 0, tick: true },

    // Row 1: Amber Band -> Best day: Friday matches focal card!
    { 
      id: 'ca-bestday', 
      label: 'Best day: Friday', 
      subLabel: '98% peak conversion', 
      icon: <BarChartIcon className="w-3.5 h-3.5 text-[#E8A33D]" />, 
      band: 'amber', 
      col: 0, 
      row: 1, 
      highlight: highlightFridayTile ? 'amber' : null,
      tick: highlightFridayTile
    },
    { id: 'ca-6', label: 'Peak Hour', subLabel: '7:00 PM West Africa', icon: <ClockIcon className="w-3.5 h-3.5 text-[#E8A33D]" />, band: 'amber', col: 1, row: 1 },
    { id: 'ca-7', label: 'Flash Sale', subLabel: '4.8x ROI average', icon: <ZapIcon className="w-3.5 h-3.5 text-[#E8A33D]" />, band: 'amber', col: 2, row: 1 },
    { id: 'ca-8', label: 'Avg Order Value', subLabel: '+38% WhatsApp', icon: <ShoppingBagIcon className="w-3.5 h-3.5 text-[#E8A33D]" />, band: 'amber', col: 3, row: 1 },

    // Row 2: Blue Band
    { id: 'ca-9', label: 'Top Channel', subLabel: 'WhatsApp (74%)', icon: <PhoneCallIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, band: 'blue', col: 0, row: 2 },
    { id: 'ca-10', label: 'CTR Lift', subLabel: '+18.4% Rich Links', icon: <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, band: 'blue', col: 1, row: 2 },
    { id: 'ca-11', label: 'Read Rate', subLabel: '94% in 5 mins', icon: <DoubleCheckIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, band: 'blue', col: 2, row: 2 },
    { id: 'ca-12', label: 'Customer Reps', subLabel: '3.2k automated', icon: <ActivityIcon className="w-3.5 h-3.5 text-[#60A5FA]" />, band: 'blue', col: 3, row: 2 },

    // Row 3: Violet Band
    { id: 'ca-13', label: 'Unsubscribes', subLabel: '0.4% (Industry low)', icon: <FilterIcon className="w-3.5 h-3.5 text-[#A78BFA]" />, band: 'violet', col: 0, row: 3 },
    { id: 'ca-14', label: 'Bounce Rate', subLabel: '0.06% clean list', icon: <CheckIcon className="w-3.5 h-3.5 text-[#A78BFA]" />, band: 'violet', col: 1, row: 3 },
    { id: 'ca-15', label: 'Cost Per Msg', subLabel: '₦3.20 lowest', icon: <ZapIcon className="w-3.5 h-3.5 text-[#A78BFA]" />, band: 'violet', col: 2, row: 3 },
    { id: 'ca-16', label: 'Verified Opt-in', subLabel: '92% consent', icon: <DoubleCheckIcon className="w-3.5 h-3.5 text-[#A78BFA]" />, band: 'violet', col: 3, row: 3 },
  ];

  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[460px] lg:min-h-[520px] p-6 lg:p-10 flex flex-col items-center justify-center pb-20 select-none overflow-hidden">
      {/* Background Supporting Tiles Field */}
      <TileField tiles={tiles} />

      {/* Bright Focal Card in Centre: KPI Tiles + Mon to Sun Bar Chart with Friday in Amber */}
      <motion.div
        key={`ca-focal-${active}`}
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: STAGE_CONFIG.cardEntranceY }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReduced ? 0.2 : STAGE_CONFIG.cardEntranceDuration, ease: STAGE_CONFIG.easeEntrance }}
        className="w-full max-w-[580px] p-5 sm:p-6 rounded-[20px] bg-[#1A1A1A] border border-white/[0.12] shadow-[0_0_80px_rgba(232,163,61,0.18)] ring-1 ring-[#E8A33D]/25 relative z-10 flex flex-col gap-5 text-white"
      >
        {/* Top: 3 KPI Tiles Counting Up */}
        <div className="grid grid-cols-3 gap-2.5 text-center">
          {copy.kpis.map((kpi) => {
            const currentNumeric = (kpi.numeric * counterProgress).toFixed(1);
            const displayVal = counterProgress === 1 ? kpi.value : `${currentNumeric}${kpi.suffix}`;

            return (
              <div key={kpi.label} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="text-[11px] font-semibold text-white/50 block mb-1 uppercase tracking-wider">
                  {kpi.label}
                </span>
                <div className="flex items-center justify-center gap-1 flex-wrap">
                  <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-none">
                    {displayVal}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                    {kpi.change}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mon to Sun Bar Chart with Friday in Amber */}
        <div className="relative h-[160px] w-full flex flex-col justify-end pt-6 px-2">
          {/* Tooltip positioned directly above Friday (index 4) */}
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.9 }}
            className="absolute top-0 left-[64%] -translate-x-1/2 px-2.5 py-0.5 rounded-lg bg-[#E8A33D] text-[#111110] font-bold text-[11px] tracking-tight shadow-[0_0_15px_rgba(232,163,61,0.4)] whitespace-nowrap z-10"
          >
            <span>{copy.chart.bestDayTooltip}</span>
          </motion.div>

          {/* 7 Bars */}
          <div className="flex items-end justify-between gap-3 h-[120px] px-2">
            {copy.chart.days.map((day, idx) => {
              const isFriday = idx === 4;
              const height = barHeights[idx];
              const barDelay = 0.5 + idx * STAGE_CONFIG.analyticsBarStagger;

              return (
                <div key={day} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
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
                  <span className={`text-[11px] font-mono ${isFriday ? 'text-[#E8A33D] font-bold' : 'text-white/40'}`}>
                    {day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer info line */}
        <div className="text-center text-[11px] font-semibold text-white/50 pt-2 border-t border-white/[0.06]">
          {copy.chart.footer}
        </div>
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
      className="relative w-full bg-white dark:bg-[#0E0E0E] text-slate-900 dark:text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden select-none transition-colors duration-300"
    >
      <div 
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#E8A33D]/[0.035] blur-[140px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        {/* Header & CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8A33D]/10 border border-[#E8A33D]/25 text-xs font-semibold text-[#B45309] dark:text-[#E8A33D] mb-4 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]" />
              {ENGAGEMENT_COPY.header.pill}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              {ENGAGEMENT_COPY.header.title}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-white/60 leading-relaxed font-normal">
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
          className="relative w-full min-h-[400px] md:min-h-[460px] lg:min-h-[520px] rounded-[24px] bg-white dark:bg-[#0E0E0E] overflow-hidden flex items-center justify-center transition-colors duration-300"
        >

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

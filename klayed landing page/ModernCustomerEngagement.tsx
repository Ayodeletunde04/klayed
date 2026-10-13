import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { 
  motion, 
  AnimatePresence, 
  useReducedMotion, 
  useInView 
} from 'framer-motion';

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
      customers: [
        { name: "Chioma Okon", initials: "CO", phone: "0803 214 9811" },
        { name: "Babatunde Adeleke", initials: "BA", phone: "0812 559 4022" }
      ],
      stat: {
        value: "98.4%",
        label: "Delivered on time"
      }
    },
    {
      id: "marketing-automation",
      title: "Marketing automation",
      description: "Visual event-driven builders to nurture leads and re-engage lapsed customers.",
      resultChip: "Set it once. It runs 24/7.",
      steps: [
        { label: "Customer leaves cart", sub: "₦38,500 in bag" },
        { label: "Wait 45 minutes", sub: "Auto countdown" },
        { label: "Cart over ₦20,000?", sub: "Yes, VIP cart" },
        { label: "Send WhatsApp offer", sub: "10% off coupon" }
      ],
      whatsappMsg: "You forgot your items! Here is 10% off your order.",
      recoveredValue: "+₦45,000 recovered"
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
        ada: { name: "Ada", initials: "AD", status: "Replying now...", replyText: "Delivery to Ikeja is ₦2,500. Same-day delivery!" },
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
      matchedCount: "2,480 customers",
      sendBtn: "Send campaign"
    },
    {
      id: "campaign-analytics",
      title: "Campaign analytics",
      description: "Audit open rates, link clicks, conversion ROI, and deliverability health at a glance.",
      resultChip: "Know what works, then do more of it.",
      kpis: [
        { label: "Open rate", value: "64.8%", change: "+12%" },
        { label: "Link clicks", value: "28.4%", change: "+8%" },
        { label: "Return on spend", value: "4.8x", change: "+18%" }
      ],
      chart: {
        days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        bestDayTooltip: "Friday: your best day to send"
      }
    }
  ]
};

const DURATION_MS = 6000;

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

const ArrowUpRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

/**
 * ============================================================================
 * RESULT CHIP (Every illustration holds this at the bottom)
 * ============================================================================
 */
const ResultChip: React.FC<{ text: string }> = ({ text }) => (
  <motion.div
    initial={{ opacity: 0, y: 8, scale: 0.96 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.35, delay: 0.4 }}
    className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-[#E8A33D]/30 shadow-[0_0_20px_rgba(232,163,61,0.15)]"
  >
    <span className="w-2 h-2 rounded-full bg-[#E8A33D] animate-ping" />
    <span className="text-sm sm:text-base font-semibold text-white/90 tracking-tight">
      {text}
    </span>
  </motion.div>
);

/**
 * ============================================================================
 * 1. MULTI-CHANNEL COMMUNICATION
 * Story: One message becomes four.
 * ============================================================================
 */
export const MultiChannelIllustration: React.FC<{ active: boolean }> = ({ active }) => {
  const prefersReduced = useReducedMotion();
  const copy = ENGAGEMENT_COPY.tabs[0];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 select-none">
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        
        {/* Left: Composer Card */}
        <motion.div
          key={`composer-${active}`}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="md:col-span-5 p-5 rounded-2xl bg-[#171717] border border-white/[0.08] shadow-2xl flex flex-col gap-4"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
            <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">
              {copy.composer.title}
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#E8A33D]/10 text-[#E8A33D]">
              All channels
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05] min-h-[72px]">
            <p className="text-sm sm:text-base text-white/90 font-medium leading-snug">
              "{copy.composer.message}"
            </p>
          </div>

          <motion.div
            animate={active && !prefersReduced ? { scale: [1, 0.96, 1] } : {}}
            transition={{ duration: 0.35, delay: 1.2 }}
            className="w-full py-3 rounded-xl bg-[#E8A33D] text-[#111110] font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(232,163,61,0.3)]"
          >
            <SendIcon className="w-4 h-4" />
            <span>{copy.composer.sendBtn}</span>
          </motion.div>
        </motion.div>

        {/* Right: 4 Channel Preview Cards */}
        <div className="md:col-span-7 flex flex-col gap-2.5">
          {/* WhatsApp Preview */}
          <motion.div
            key={`wa-${active}`}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-3.5 rounded-xl bg-[#142319] border border-[#22C55E]/30 flex items-center justify-between gap-3 shadow-lg"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#22C55E] text-[#111] flex items-center justify-center font-bold text-xs flex-shrink-0">
                WA
              </div>
              <div className="min-w-0">
                <span className="text-xs font-semibold text-[#22C55E] block">{copy.channels.whatsapp.title}</span>
                <p className="text-sm text-white/90 truncate font-medium">{copy.channels.whatsapp.preview}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[#22C55E] text-xs font-semibold flex-shrink-0">
              <DoubleCheckIcon className="w-4 h-4" />
              <span>{copy.channels.whatsapp.status}</span>
            </div>
          </motion.div>

          {/* SMS Preview */}
          <motion.div
            key={`sms-${active}`}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-3.5 rounded-xl bg-[#181818] border border-white/[0.08] flex items-center justify-between gap-3 shadow-lg"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#E8A33D] text-[#111] flex items-center justify-center font-bold text-xs flex-shrink-0">
                SMS
              </div>
              <div className="min-w-0">
                <span className="text-xs font-semibold text-[#E8A33D] block">{copy.channels.sms.title}</span>
                <p className="text-sm text-white/90 truncate font-medium">{copy.channels.sms.preview}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-emerald-400 text-xs font-semibold flex-shrink-0">
              <CheckIcon className="w-4 h-4" />
              <span>{copy.channels.sms.status}</span>
            </div>
          </motion.div>

          {/* Email Preview */}
          <motion.div
            key={`email-${active}`}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="p-3.5 rounded-xl bg-[#181818] border border-white/[0.08] flex items-center justify-between gap-3 shadow-lg"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                <MailIcon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-semibold text-sky-400 block">{copy.channels.email.title}</span>
                <p className="text-sm text-white/90 truncate font-medium">{copy.channels.email.subject}</p>
              </div>
            </div>
            <span className="text-xs text-white/50 font-medium">{copy.channels.email.status}</span>
          </motion.div>

          {/* Voice Preview */}
          <motion.div
            key={`voice-${active}`}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="p-3.5 rounded-xl bg-[#181818] border border-white/[0.08] flex items-center justify-between gap-3 shadow-lg"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-rose-500 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                <PhoneCallIcon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-semibold text-rose-400 block">{copy.channels.voice.title}</span>
                <p className="text-sm text-white/90 truncate font-medium">{copy.channels.voice.caller}</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#E8A33D] animate-pulse">{copy.channels.voice.status}</span>
          </motion.div>
        </div>

      </div>

      <ResultChip text={copy.resultChip} />
    </div>
  );
};

/**
 * ============================================================================
 * 2. REAL-TIME DELIVERY TRACKING
 * Story: You always know where a message is, and it fixes itself if it fails.
 * ============================================================================
 */
export const DeliveryTrackingIllustration: React.FC<{ active: boolean }> = ({ active }) => {
  const prefersReduced = useReducedMotion();
  const copy = ENGAGEMENT_COPY.tabs[1];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 select-none">
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        
        {/* Left: 2 Delivery Track Lanes */}
        <div className="md:col-span-8 flex flex-col gap-4">
          
          {/* Lane 1: Chioma Okon (Success track) */}
          <motion.div
            key={`lane1-${active}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-4 sm:p-5 rounded-2xl bg-[#171717] border border-white/[0.08] shadow-xl"
          >
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-purple-500/20 text-purple-300 font-bold text-xs flex items-center justify-center border border-purple-500/30">
                  {copy.customers[0].initials}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white">{copy.customers[0].name}</h4>
                  <span className="text-xs text-white/40">{copy.customers[0].phone}</span>
                </div>
              </div>
              <span className="text-xs font-semibold text-[#22C55E] bg-[#22C55E]/10 px-2.5 py-1 rounded-full border border-[#22C55E]/20">
                Delivered
              </span>
            </div>

            {/* Step rail */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs pt-2 border-t border-white/[0.05]">
              <div className="flex items-center gap-1.5 justify-center text-emerald-400 font-medium">
                <CheckIcon className="w-3.5 h-3.5" /> Sent
              </div>
              <div className="flex items-center gap-1.5 justify-center text-emerald-400 font-medium">
                <CheckIcon className="w-3.5 h-3.5" /> Delivered
              </div>
              <div className="flex items-center gap-1.5 justify-center text-emerald-400 font-bold">
                <DoubleCheckIcon className="w-4 h-4" /> Read
              </div>
            </div>
          </motion.div>

          {/* Lane 2: Babatunde Adeleke (Auto-Failover track) */}
          <motion.div
            key={`lane2-${active}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="p-4 sm:p-5 rounded-2xl bg-[#171717] border border-white/[0.08] shadow-xl"
          >
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-teal-500/20 text-teal-300 font-bold text-xs flex items-center justify-center border border-teal-500/30">
                  {copy.customers[1].initials}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white">{copy.customers[1].name}</h4>
                  <span className="text-xs text-white/40">{copy.customers[1].phone}</span>
                </div>
              </div>
              <span className="text-xs font-semibold text-[#E8A33D] bg-[#E8A33D]/10 px-2.5 py-1 rounded-full border border-[#E8A33D]/30">
                Auto-switched to SMS
              </span>
            </div>

            {/* Failover sequence */}
            <div className="flex items-center justify-between gap-2 text-xs pt-2 border-t border-white/[0.05]">
              <div className="flex items-center gap-1 text-rose-400 font-medium">
                <XIcon className="w-3.5 h-3.5" /> WhatsApp Failed
              </div>
              <div className="flex items-center gap-1 text-[#E8A33D] font-medium">
                <RefreshCwIcon className="w-3.5 h-3.5 animate-spin" /> Auto-reroute
              </div>
              <div className="flex items-center gap-1 text-emerald-400 font-bold">
                <CheckIcon className="w-3.5 h-3.5" /> SMS Delivered
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right: Big Metric Card */}
        <motion.div
          key={`stat-${active}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="md:col-span-4 p-6 rounded-2xl bg-[#171717] border border-white/[0.08] flex flex-col items-center justify-center text-center shadow-2xl h-full min-h-[160px]"
        >
          <span className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
            Delivery Health
          </span>
          <span className="text-4xl sm:text-5xl font-extrabold text-[#E8A33D] tracking-tight">
            {copy.stat.value}
          </span>
          <span className="text-sm font-semibold text-emerald-400 mt-2 flex items-center gap-1">
            <CheckIcon className="w-4 h-4" /> {copy.stat.label}
          </span>
        </motion.div>

      </div>

      <ResultChip text={copy.resultChip} />
    </div>
  );
};

/**
 * ============================================================================
 * 3. MARKETING AUTOMATION
 * Story: Recover a lost sale without lifting a finger.
 * ============================================================================
 */
export const MarketingAutomationIllustration: React.FC<{ active: boolean }> = ({ active }) => {
  const copy = ENGAGEMENT_COPY.tabs[2];
  const icons = [ShoppingBagIcon, ClockIcon, FilterIcon, MessageSquareIcon];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 select-none">
      <div className="w-full max-w-3xl flex flex-col gap-6">
        
        {/* 4 Large Connected Nodes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 relative">
          {copy.steps.map((step, idx) => {
            const Icon = icons[idx];
            const isLast = idx === 3;

            return (
              <motion.div
                key={`node-${idx}-${active}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.12 }}
                className={`p-4 rounded-2xl border flex flex-col items-center text-center transition-all ${
                  isLast 
                    ? 'bg-[#18261C] border-[#22C55E]/40 shadow-[0_0_25px_rgba(34,197,94,0.15)]' 
                    : 'bg-[#171717] border-white/[0.08]'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl mb-3 flex items-center justify-center ${
                  isLast ? 'bg-[#22C55E] text-[#111]' : 'bg-white/5 text-white/80'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white tracking-tight leading-tight">
                  {step.label}
                </h4>
                <span className="text-xs text-white/50 mt-1">{step.sub}</span>
              </motion.div>
            );
          })}
        </div>

        {/* WhatsApp Message & Money Recovered Counter */}
        <motion.div
          key={`pop-${active}`}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="p-4 sm:p-5 rounded-2xl bg-[#142319] border border-[#22C55E]/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#22C55E] text-black font-extrabold flex items-center justify-center flex-shrink-0">
              WA
            </div>
            <div>
              <span className="text-xs font-semibold text-[#22C55E]">Automated WhatsApp Message</span>
              <p className="text-sm sm:text-base font-semibold text-white">
                "{copy.whatsappMsg}"
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 px-4 py-2 rounded-xl bg-[#22C55E] text-[#111] font-bold text-sm sm:text-base flex items-center gap-1.5 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            <ArrowUpRightIcon className="w-4 h-4" />
            <span>{copy.recoveredValue}</span>
          </div>
        </motion.div>

      </div>

      <ResultChip text={copy.resultChip} />
    </div>
  );
};

/**
 * ============================================================================
 * 4. SHARED TEAM INBOX
 * Story: Two teammates, no double replies.
 * ============================================================================
 */
export const SharedInboxIllustration: React.FC<{ active: boolean }> = ({ active }) => {
  const copy = ENGAGEMENT_COPY.tabs[3];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 select-none">
      <div className="w-full max-w-2xl bg-[#171717] border border-white/[0.08] rounded-2xl p-5 sm:p-6 shadow-2xl flex flex-col gap-4">
        
        {/* Top bar with team status */}
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <UsersIcon className="w-4 h-4 text-[#E8A33D]" />
            <span className="text-sm font-semibold text-white">Customer Support Team</span>
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
        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-300 font-bold text-xs flex items-center justify-center flex-shrink-0">
            {copy.customer.initials}
          </div>
          <div>
            <span className="text-xs font-semibold text-white/80">{copy.customer.name}</span>
            <p className="text-sm sm:text-base font-medium text-white/95 mt-0.5">
              "{copy.customer.message}"
            </p>
          </div>
        </div>

        {/* Ada Claiming & Typing */}
        <motion.div
          key={`ada-${active}`}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="p-3.5 rounded-xl bg-[#E8A33D]/10 border border-[#E8A33D]/30 flex items-center justify-between"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#E8A33D] text-[#111] text-xs font-bold flex items-center justify-center">
              {copy.agents.ada.initials}
            </div>
            <span className="text-sm font-semibold text-[#E8A33D]">
              {copy.agents.ada.name} is replying...
            </span>
          </div>
          <span className="text-xs font-bold text-[#E8A33D] bg-black/40 px-2 py-0.5 rounded">
            🔒 Thread Locked
          </span>
        </motion.div>

        {/* Tunde Blocked Warning Toast */}
        <motion.div
          key={`tunde-${active}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.4 }}
          className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-between text-xs sm:text-sm font-semibold text-rose-300"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-[11px] font-bold flex items-center justify-center">
              {copy.agents.tunde.initials}
            </div>
            <span>{copy.agents.tunde.name} opened ticket</span>
          </div>
          <span className="text-xs font-bold bg-rose-500/20 px-2 py-0.5 rounded text-rose-300">
            {copy.agents.tunde.blockedNotice}
          </span>
        </motion.div>

        {/* Ada Sent Reply */}
        <motion.div
          key={`reply-${active}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.6 }}
          className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between"
        >
          <p className="text-sm font-medium text-emerald-300">
            "{copy.agents.ada.replyText}"
          </p>
          <DoubleCheckIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
        </motion.div>

      </div>

      <ResultChip text={copy.resultChip} />
    </div>
  );
};

/**
 * ============================================================================
 * 5. CUSTOMER SEGMENTATION
 * Story: From a crowd to the right audience.
 * ============================================================================
 */
export const CustomerSegmentationIllustration: React.FC<{ active: boolean }> = ({ active }) => {
  const copy = ENGAGEMENT_COPY.tabs[4];
  const [filterStep, setFilterStep] = useState(0);

  useEffect(() => {
    if (!active) return;
    const t1 = setTimeout(() => setFilterStep(1), 800);
    const t2 = setTimeout(() => setFilterStep(2), 1800);
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
    "RA", "SE", "TI", "UM", "VI", "WA", "YA", "ZA"
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 select-none">
      <div className="w-full max-w-2xl flex flex-col gap-5 items-center">
        
        {/* 3 Interactive Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {copy.filters.map((f, i) => {
            const isSelected = filterStep >= i + 1;
            return (
              <span
                key={f.id}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all border ${
                  isSelected
                    ? 'bg-[#E8A33D] text-[#111110] border-[#E8A33D] shadow-[0_0_15px_rgba(232,163,61,0.3)]'
                    : 'bg-white/5 text-white/50 border-white/10'
                }`}
              >
                {isSelected ? '✓ ' : ''}{f.label}
              </span>
            );
          })}
        </div>

        {/* Dynamic Avatar Cloud & Target Box */}
        <div className="w-full p-6 rounded-2xl bg-[#171717] border border-white/[0.08] flex flex-col items-center justify-center shadow-2xl">
          <div className="grid grid-cols-8 sm:grid-cols-12 gap-2 sm:gap-2.5 mb-5">
            {initialsList.map((initials, idx) => {
              const isMatch = idx % 3 === 0;
              const isDimmed = filterStep > 0 && !isMatch;

              return (
                <motion.div
                  key={idx}
                  animate={{
                    scale: isDimmed ? 0.75 : isMatch && filterStep === 3 ? 1.15 : 1,
                    opacity: isDimmed ? 0.15 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold transition-colors ${
                    isMatch && filterStep === 3
                      ? 'bg-[#E8A33D] text-[#111] shadow-[0_0_12px_#E8A33D]'
                      : 'bg-white/10 text-white/70'
                  }`}
                >
                  {initials}
                </motion.div>
              );
            })}
          </div>

          {/* Group audience outcome card */}
          <motion.div
            key={`match-${active}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-between"
          >
            <div>
              <span className="text-xs font-semibold text-white/40 block">{copy.groupName}</span>
              <strong className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {copy.matchedCount}
              </strong>
            </div>

            <button
              type="button"
              className="px-4 py-2 rounded-xl bg-[#E8A33D] text-[#111] font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(232,163,61,0.25)]"
            >
              {copy.sendBtn}
            </button>
          </motion.div>
        </div>

      </div>

      <ResultChip text={copy.resultChip} />
    </div>
  );
};

/**
 * ============================================================================
 * 6. CAMPAIGN ANALYTICS
 * Story: See what works at a glance.
 * ============================================================================
 */
export const CampaignAnalyticsIllustration: React.FC<{ active: boolean }> = ({ active }) => {
  const copy = ENGAGEMENT_COPY.tabs[5];
  const barHeights = [45, 62, 58, 76, 98, 60, 52];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 select-none">
      <div className="w-full max-w-2xl bg-[#171717] border border-white/[0.08] rounded-2xl p-5 sm:p-6 shadow-2xl flex flex-col gap-6">
        
        {/* 3 KPI Tiles */}
        <div className="grid grid-cols-3 gap-3 pb-5 border-b border-white/[0.06] text-center">
          {copy.kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
            >
              <span className="text-xs font-semibold text-white/50 block mb-1">{kpi.label}</span>
              <div className="flex items-center justify-center gap-1.5 flex-wrap">
                <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">{kpi.value}</span>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                  {kpi.change}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Weekly Bar Chart with Friday Tooltip */}
        <div className="relative pt-6">
          {/* Tooltip positioned directly above Friday (index 4) */}
          <motion.div
            key={`tooltip-${active}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.45 }}
            className="absolute top-0 left-[62%] -translate-x-1/2 px-3 py-1 rounded-lg bg-[#E8A33D] text-[#111110] font-bold text-xs tracking-tight shadow-[0_0_15px_rgba(232,163,61,0.4)] whitespace-nowrap"
          >
            <span>{copy.chart.bestDayTooltip}</span>
          </motion.div>

          <div className="flex items-end justify-between gap-3 h-28 sm:h-32 px-2">
            {copy.chart.days.map((day, idx) => {
              const isFriday = idx === 4;
              const height = barHeights[idx];

              return (
                <div key={day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.5, delay: idx * 0.06 }}
                    className={`w-full rounded-t-lg transition-all ${
                      isFriday
                        ? 'bg-[#E8A33D] shadow-[0_0_20px_rgba(232,163,61,0.45)]'
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

      </div>

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

  useEffect(() => {
    if (prefersReducedMotion || !isInView || isPaused) {
      return;
    }

    const intervalMs = 50;
    const step = (intervalMs / DURATION_MS) * 100;

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

        {/* Big Illustration Stage Card */}
        <div 
          role="tabpanel"
          id={`panel-${activeTab.id}`}
          aria-labelledby={`tab-${activeTab.id}`}
          className="relative w-full h-[400px] sm:h-[460px] rounded-[24px] bg-[#141414] border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden flex items-center justify-center"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E8A33D]/35 to-transparent" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="w-full h-full"
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
                className={`group relative text-left pl-5 py-2 flex flex-col justify-start transition-opacity duration-300 snap-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A33D] rounded-lg ${
                  isActive ? 'opacity-100' : 'opacity-40 hover:opacity-75'
                }`}
              >
                <div 
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/[0.08] rounded-full overflow-hidden"
                  aria-hidden="true"
                >
                  {isActive && (
                    <motion.div
                      className="w-full bg-[#E8A33D] origin-top"
                      style={{
                        height: prefersReducedMotion ? '100%' : `${progress}%`,
                      }}
                      transition={{ ease: 'linear' }}
                    />
                  )}
                </div>

                <div className="flex items-center gap-2.5 mb-2">
                  <div className={`transition-colors duration-200 ${isActive ? 'text-[#E8A33D]' : 'text-white/60'}`}>
                    <ZapIcon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {tab.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-[13px] text-white/60 leading-relaxed font-normal">
                  {tab.description}
                </p>

                <div className="min-h-[22px] mt-2.5 flex items-center">
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#E8A33D] hover:underline"
                    >
                      <span>Learn more</span>
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.span>
                  )}
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

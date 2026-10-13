import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { 
  motion, 
  AnimatePresence, 
  useReducedMotion, 
  useInView 
} from 'framer-motion';

/**
 * ============================================================================
 * TAB CONFIGURATION & CONTENT DATA
 * Edit titles, copy, icons, and illustration parameters here.
 * ============================================================================
 */
export interface TabItem {
  id: string;
  title: string;
  description: string;
  learnMoreUrl: string;
  icon: (props: { className?: string; active?: boolean }) => JSX.Element;
}

export const TABS: TabItem[] = [
  {
    id: 'multichannel',
    title: 'Multi-channel communication',
    description: 'Send across SMS, WhatsApp, Email, and Voice through one uniform API endpoint.',
    learnMoreUrl: '#multichannel',
    icon: ({ className }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    id: 'delivery-tracking',
    title: 'Real-time delivery tracking',
    description: 'Sub-second carrier delivery receipts, bounce analysis, and dynamic route switching.',
    learnMoreUrl: '#delivery-tracking',
    icon: ({ className }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'marketing-automation',
    title: 'Marketing automation',
    description: 'Visual event-driven builders to nurture leads and re-engage lapsed customers.',
    learnMoreUrl: '#marketing-automation',
    icon: ({ className }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'team-inbox',
    title: 'Shared team inbox',
    description: 'Enable support and sales teams to collaborate seamlessly with zero message collisions.',
    learnMoreUrl: '#team-inbox',
    icon: ({ className }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 'customer-segmentation',
    title: 'Customer segmentation',
    description: 'Slice audiences by purchasing frequency, country, and behavior with instant syncing.',
    learnMoreUrl: '#customer-segmentation',
    icon: ({ className }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    id: 'campaign-analytics',
    title: 'Campaign analytics',
    description: 'Audit open rates, link clicks, conversion ROI, and deliverability health at a glance.',
    learnMoreUrl: '#campaign-analytics',
    icon: ({ className }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const AUTOPLAY_DURATION_MS = 6000;

/**
 * ============================================================================
 * ILLUSTRATION 1: MULTI-CHANNEL COMMUNICATION
 * ============================================================================
 */
const MultiChannelIllustration: React.FC = () => {
  const channels = [
    { label: 'SMS', color: '#E8A33D', sub: '99.8% Open' },
    { label: 'WhatsApp', color: '#25D366', sub: 'Verified Tier 3' },
    { label: 'Email', color: '#60A5FA', sub: 'Zero Spam' },
    { label: 'Voice', color: '#F472B6', sub: 'PSTN Direct' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 select-none overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Central API Origin Node */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="z-10 px-5 py-2.5 rounded-xl bg-[#1A1A1A] border border-[#E8A33D]/40 shadow-[0_0_25px_rgba(232,163,61,0.2)] flex items-center gap-3 mb-10"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#E8A33D] animate-ping" />
        <div>
          <span className="text-[11px] font-mono text-[#E8A33D] tracking-wider uppercase font-semibold block">Unified Gateway</span>
          <span className="text-xs font-mono text-white/90 font-medium">POST /v1/messages/dispatch</span>
        </div>
      </motion.div>

      {/* Grid of channels */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl z-10">
        {channels.map((chan, idx) => (
          <motion.div
            key={chan.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + idx * 0.1 }}
            className="group relative p-4 rounded-xl bg-[#171717]/90 border border-white/10 flex flex-col items-center text-center shadow-lg"
          >
            <motion.div
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: idx * 0.5,
              }}
              style={{ backgroundColor: chan.color }}
              className="w-8 h-8 rounded-full mb-3 flex items-center justify-center text-black font-bold text-xs shadow-[0_0_15px_currentColor]"
            >
              ●
            </motion.div>
            <span className="text-sm font-semibold text-white tracking-tight">{chan.label}</span>
            <span className="text-[11px] text-white/50 mt-1">{chan.sub}</span>

            {/* Simulated live payload packet */}
            <motion.div
              animate={{
                y: [-30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: idx * 0.45,
                ease: 'easeInOut',
              }}
              className="absolute -top-3 w-2 h-2 rounded-full bg-[#E8A33D] shadow-[0_0_8px_#E8A33D]"
            />
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-7 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-white/70 flex items-center gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        Zero orchestration overhead • 99.999% SLA
      </motion.div>
    </div>
  );
};

/**
 * ============================================================================
 * ILLUSTRATION 2: REAL-TIME DELIVERY TRACKING
 * ============================================================================
 */
const DeliveryTrackingIllustration: React.FC = () => {
  const [latency, setLatency] = useState(240);

  useEffect(() => {
    const timer = setInterval(() => {
      setLatency(prev => (prev >= 580 ? 240 : prev + 34));
    }, 280);
    return () => clearInterval(timer);
  }, []);

  const logs = [
    { id: 'msg_9821', dest: '+234 803 *** 4410', status: 'Read', badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', route: 'Primary Direct' },
    { id: 'msg_9822', dest: '+1 (415) *** 8920', status: 'Delivered', badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', route: 'Direct Route' },
    { id: 'msg_9823', dest: '+44 7700 *** 0192', status: 'Rerouted (Auto-Failover)', badge: 'bg-[#E8A33D]/20 text-[#E8A33D] border-[#E8A33D]/40', route: 'Carrier Failover' },
    { id: 'msg_9824', dest: '+254 712 *** 8831', status: 'Delivered', badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', route: 'Safaricom Direct' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center p-6 select-none">
      <div className="w-full max-w-xl bg-[#141414] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
        <div className="px-5 py-3 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono font-medium text-white/80">Live Telemetry & Ingestion</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#E8A33D]">
            <span>Dispatch Latency:</span>
            <span className="font-semibold text-white bg-white/10 px-1.5 py-0.5 rounded">{latency}ms</span>
          </div>
        </div>

        <div className="divide-y divide-white/[0.06]">
          {logs.map((row, i) => (
            <motion.div
              key={row.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="px-5 py-3 flex items-center justify-between text-xs hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-white/40">{row.id}</span>
                <span className="font-mono text-white/90">{row.dest}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline text-[11px] text-white/40">{row.route}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${row.badge}`}>
                  ✓ {row.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-5 flex items-center gap-3 px-4 py-2 rounded-lg bg-[#E8A33D]/10 border border-[#E8A33D]/30 text-xs text-[#E8A33D]"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D] animate-ping" />
        Dynamic carrier self-healing triggered in 12ms (Zero dropped packets)
      </motion.div>
    </div>
  );
};

/**
 * ============================================================================
 * ILLUSTRATION 3: MARKETING AUTOMATION
 * ============================================================================
 */
const MarketingAutomationIllustration: React.FC = () => {
  const nodes = [
    { title: 'Trigger', desc: 'Cart Abandoned ($140)', icon: '⚡' },
    { title: 'Wait', desc: 'Delay 45 Minutes', icon: '⏳' },
    { title: 'Decision', desc: 'High Value Cart?', icon: '⚖️' },
    { title: 'Action', desc: 'Send WhatsApp + 10%', icon: '🚀' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center p-6 select-none overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-2 w-full max-w-2xl relative">
        <div className="hidden sm:block absolute top-1/2 left-8 right-8 h-0.5 bg-white/10 -translate-y-1/2 z-0">
          <motion.div
            animate={{
              left: ['0%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 -translate-y-1/2 w-8 h-1 bg-[#E8A33D] rounded-full shadow-[0_0_12px_#E8A33D]"
          />
        </div>

        {nodes.map((node, i) => (
          <motion.div
            key={node.title}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15 }}
            className={`z-10 w-full sm:w-36 p-3.5 rounded-xl border bg-[#161616] transition-all text-center flex flex-col items-center ${
              i === 3 
                ? 'border-[#E8A33D]/60 shadow-[0_0_20px_rgba(232,163,61,0.2)]' 
                : 'border-white/10 hover:border-white/20'
            }`}
          >
            <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-sm mb-2">
              {node.icon}
            </div>
            <span className="text-xs font-semibold text-white">{node.title}</span>
            <span className="text-[10px] text-white/50 mt-1 leading-tight">{node.desc}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-8 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-white/60 font-mono"
      >
        <span>Conversion Uplift:</span>
        <span className="text-emerald-400 font-bold">+28.4% recovered revenue</span>
      </motion.div>
    </div>
  );
};

/**
 * ============================================================================
 * ILLUSTRATION 4: SHARED TEAM INBOX
 * ============================================================================
 */
const SharedInboxIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center p-6 select-none">
      <div className="w-full max-w-lg bg-[#151515] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
        <div className="px-4 py-3 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8A33D]" />
            <span className="text-xs font-semibold text-white">VIP Support Queue</span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            Collision Protection Active
          </span>
        </div>

        <div className="p-4 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-start gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-300 font-bold flex items-center justify-center text-xs flex-shrink-0">
              EK
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-white/90">Emeka Kalu</span>
                <span className="text-[10px] text-white/40 font-mono">1m ago</span>
              </div>
              <p className="text-xs text-white/60 mt-1 line-clamp-1">
                "Hi, our enterprise team is looking to activate the Voice fallback SIP trunk."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="p-3 rounded-lg bg-[#E8A33D]/10 border border-[#E8A33D]/30 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#E8A33D] text-black text-[11px] font-bold flex items-center justify-center">
                A
              </span>
              <span className="text-xs text-[#E8A33D] font-medium">Adaeze is drafting a response...</span>
            </div>
            <span className="flex items-center gap-1 text-[10px] font-mono text-[#E8A33D] bg-black/40 px-2 py-0.5 rounded">
              🔒 Thread Locked
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-[11px] text-white/40"
          >
            <span>Agent Tunde attempted access</span>
            <span className="text-rose-400 font-mono text-[10px]">Access Blocked (Collision Prevented)</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

/**
 * ============================================================================
 * ILLUSTRATION 5: CUSTOMER SEGMENTATION
 * ============================================================================
 */
const CustomerSegmentationIllustration: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'freq' | 'ng'>('all');

  useEffect(() => {
    const cycle = setInterval(() => {
      setActiveFilter(prev => (prev === 'all' ? 'freq' : prev === 'freq' ? 'ng' : 'all'));
    }, 2000);
    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center p-6 select-none">
      <div className="flex items-center gap-2 mb-6 z-10 flex-wrap justify-center">
        {[
          { key: 'all', label: 'All Users (14,200)' },
          { key: 'freq', label: 'Frequent Buyers (>3 orders)' },
          { key: 'ng', label: 'Lagos & Abuja High LTV' },
        ].map(filter => (
          <button
            key={filter.key}
            type="button"
            className={`px-3 py-1 rounded-full text-xs transition-all font-medium border ${
              activeFilter === filter.key
                ? 'bg-[#E8A33D] text-[#0E0E0E] border-[#E8A33D] font-semibold shadow-[0_0_15px_rgba(232,163,61,0.3)]'
                : 'bg-white/5 text-white/60 border-white/10'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-md h-36 bg-[#141414] border border-white/10 rounded-xl overflow-hidden flex items-center justify-center p-4">
        <div className="grid grid-cols-8 gap-3 sm:gap-4">
          {Array.from({ length: 32 }).map((_, i) => {
            const isHighlighted =
              activeFilter === 'all'
                ? i % 3 === 0
                : activeFilter === 'freq'
                ? i % 2 === 0
                : i < 16;

            return (
              <motion.div
                key={i}
                animate={{
                  scale: isHighlighted ? [1, 1.3, 1] : 0.8,
                  opacity: isHighlighted ? 1 : 0.2,
                }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  isHighlighted 
                    ? 'bg-[#E8A33D] shadow-[0_0_8px_#E8A33D]' 
                    : 'bg-white/20'
                }`}
              />
            );
          })}
        </div>
      </div>

      <div className="mt-5 text-xs text-white/60 font-mono flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        Synced to Meta CAPI, Braze, and BigQuery instantly
      </div>
    </div>
  );
};

/**
 * ============================================================================
 * ILLUSTRATION 6: CAMPAIGN ANALYTICS
 * ============================================================================
 */
const CampaignAnalyticsIllustration: React.FC = () => {
  const bars = [42, 68, 55, 92, 78, 64, 88];

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center p-6 select-none">
      <div className="w-full max-w-lg bg-[#141414] border border-white/10 rounded-xl p-5 shadow-2xl">
        <div className="grid grid-cols-3 gap-3 pb-5 border-b border-white/10 text-center">
          <div>
            <span className="text-[11px] text-white/40 block">Open Rate</span>
            <span className="text-base sm:text-lg font-bold text-white tracking-tight">64.8%</span>
          </div>
          <div>
            <span className="text-[11px] text-white/40 block">Click-Through</span>
            <span className="text-base sm:text-lg font-bold text-[#E8A33D] tracking-tight">28.4%</span>
          </div>
          <div>
            <span className="text-[11px] text-white/40 block">ROI Lift</span>
            <span className="text-base sm:text-lg font-bold text-emerald-400 tracking-tight">4.8x</span>
          </div>
        </div>

        <div className="pt-5 flex items-end justify-between gap-3 h-28 px-2">
          {bars.map((val, idx) => {
            const isHighlight = idx === 3;
            return (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${val}%` }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className={`w-full rounded-t-md transition-all ${
                    isHighlight
                      ? 'bg-[#E8A33D] shadow-[0_0_15px_rgba(232,163,61,0.4)]'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                />
                <span className="text-[10px] font-mono text-white/40">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'][idx]}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 text-[11px] font-mono text-white/50">
        Aggregated across 2.4M customer events • Verified Deliverability 99.94%
      </div>
    </div>
  );
};

const ActiveIllustration: React.FC<{ tabId: string }> = ({ tabId }) => {
  switch (tabId) {
    case 'multichannel':
      return <MultiChannelIllustration />;
    case 'delivery-tracking':
      return <DeliveryTrackingIllustration />;
    case 'marketing-automation':
      return <MarketingAutomationIllustration />;
    case 'team-inbox':
      return <SharedInboxIllustration />;
    case 'customer-segmentation':
      return <CustomerSegmentationIllustration />;
    case 'campaign-analytics':
      return <CampaignAnalyticsIllustration />;
    default:
      return null;
  }
};

/**
 * ============================================================================
 * MAIN EXPORT
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

  const activeTab = useMemo(() => TABS[activeIndex], [activeIndex]);

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
      const next = (index + 1) % TABS.length;
      handleSelectTab(next);
      tabButtonRefs.current[next]?.focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = (index - 1 + TABS.length) % TABS.length;
      handleSelectTab(prev);
      tabButtonRefs.current[prev]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      handleSelectTab(0);
      tabButtonRefs.current[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      handleSelectTab(TABS.length - 1);
      tabButtonRefs.current[TABS.length - 1]?.focus();
    }
  };

  useEffect(() => {
    if (prefersReducedMotion || !isInView || isPaused) {
      return;
    }

    const intervalMs = 50;
    const step = (intervalMs / AUTOPLAY_DURATION_MS) * 100;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          handleSelectTab((activeIndex + 1) % TABS.length);
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
      aria-label="Built For Modern Customer Engagement"
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-[#E8A33D] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]" />
              Built different
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
              Built For Modern <br className="hidden sm:inline" />
              Customer Engagement
            </h2>

            <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed font-normal">
              Ditch fragmented point tools. Klayed provides a unified engine designed for speed, 
              resilience, and actionable business insights.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="../Klayed dashboard/index.html"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#E8A33D] hover:bg-[#d8932e] text-[#111110] font-semibold text-sm transition-all duration-200 shadow-[0_0_30px_rgba(232,163,61,0.25)] hover:shadow-[0_0_40px_rgba(232,163,61,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E0E0E] focus-visible:ring-[#E8A33D]"
            >
              <span>Explore The Platform</span>
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <div 
          role="tabpanel"
          id={`engagement-panel-${activeTab.id}`}
          aria-labelledby={`engagement-tab-${activeTab.id}`}
          className="relative w-full h-[360px] sm:h-[420px] rounded-[20px] bg-[#141414] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden flex items-center justify-center"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E8A33D]/30 to-transparent" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="w-full h-full"
            >
              <ActiveIllustration tabId={activeTab.id} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          role="tablist"
          aria-label="Features of modern engagement"
          aria-orientation="horizontal"
          className="grid grid-flow-col auto-cols-[82%] sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory scrollbar-none"
        >
          {TABS.map((tab, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={tab.id}
                ref={el => (tabButtonRefs.current[index] = el)}
                role="tab"
                id={`engagement-tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`engagement-panel-${tab.id}`}
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
                    <tab.icon className="w-4 h-4" active={isActive} />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
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

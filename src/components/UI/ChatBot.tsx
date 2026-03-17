import React, { useState, useRef, useEffect } from 'react';
import {
    Box, Typography, IconButton, TextField, Chip, Paper,
    Fade, Avatar, useTheme, Tooltip,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import MinimizeIcon from '@mui/icons-material/Remove';

// ─── FAQ Knowledge Base ───────────────────────────────────────────────────────

interface FaqEntry {
    keywords: string[];
    answer: string;
    followUp?: string[];
}

const FAQ_DB: FaqEntry[] = [
    {
        keywords: ['genxbill', 'billing', 'invoice', 'inventory', 'invoicing', 'bill'],
        answer: `**GenXBill** is our open-source billing & inventory management suite for Windows. It includes:\n• Smart invoicing & receipt generation\n• Real-time inventory tracking\n• HR & employee management\n• Business intelligence reports\n• 100% offline-first (no cloud required)\n\nBuilt with Flutter + Hive. Completely free!`,
        followUp: ['How do I download GenXBill?', 'Is GenXBill free?', 'What OS does GenXBill support?'],
    },
    {
        keywords: ['fambudget', 'fam budget', 'family', 'budget', 'finance', 'budgeting', 'expense', 'spending'],
        answer: `**FamBudget** is a privacy-focused desktop app for family finance management.\n• Visual budgeting with donut charts\n• Financial goal tracking\n• Multi-currency support\n• Shared family wallets\n• 100% local storage — your data *never* leaves your device\n\nFree to download from GitHub!`,
        followUp: ['Is FamBudget free?', 'Does FamBudget sync to cloud?', 'What platforms does FamBudget support?'],
    },
    {
        keywords: ['genxlink', 'remote desktop', 'remote', 'rdp', 'vnc', 'screen share', 'access'],
        answer: `**GenXLink** is a cross-platform remote desktop app built in Rust for maximum performance.\n• End-to-End encrypted\n• Ultra-low latency\n• Advanced NAT traversal\n• No relay server required\n• Works on slow connections\n\nCurrently in active development.`,
        followUp: ['When will GenXLink be released?', 'Is GenXLink open source?'],
    },
    {
        keywords: ['neuralcore', 'neural', 'ai', 'llm', 'local ai', 'machine learning', 'edge ai', 'offline ai'],
        answer: `**NeuralCore** is our next-gen local AI processing unit for edge devices.\n• Runs LLMs locally — no internet needed\n• Privacy-first by design\n• Optimized for resource-constrained hardware\n• Supports popular open-source models\n\nCurrently in R&D phase. Stay tuned!`,
        followUp: ['When is NeuralCore launching?', 'What models does NeuralCore support?'],
    },
    {
        keywords: ['product', 'products', 'what do you make', 'what do you build', 'portfolio', 'apps', 'software'],
        answer: `We currently have **4 products** in our portfolio:\n\n1. **GenXBill** — Open-source billing & inventory for Windows\n2. **FamBudget** — Privacy-first family finance manager\n3. **GenXLink** — Encrypted remote desktop (in Rust)\n4. **NeuralCore** — Local AI edge processing unit\n\nAsk me about any of them!`,
        followUp: ['Tell me about GenXBill', 'Tell me about FamBudget', 'Tell me about GenXLink'],
    },
    {
        keywords: ['service', 'services', 'what do you offer', 'hire', 'consulting', 'development'],
        answer: `We offer **3 core services**:\n\n1. **Custom Engineering** — Rust, C++, Flutter, web platforms built to spec\n2. **Privacy Audits & Architecture** — Local-first redesign, GDPR compliance, E2E encryption\n3. **Performance Optimization** — Electron apps, WebAssembly, 60fps UI refactoring\n\nInterested? Email us at genxisinnovation@outlook.com`,
        followUp: ['How much do services cost?', 'How do I hire GenXis?', 'What tech stack do you use?'],
    },
    {
        keywords: ['custom engineering', 'custom software', 'custom development', 'build for me'],
        answer: `Our **Custom Engineering** service covers:\n• Low-level system programming (Rust, C, C++)\n• Cross-platform desktop apps (Flutter, Electron, Tauri)\n• Full-stack web applications (React, Next.js, Node)\n• Embedded systems & IoT firmware\n• API design & microservices\n\nWe deliver robust, well-documented code. Reach out to discuss your project!`,
    },
    {
        keywords: ['privacy audit', 'gdpr', 'privacy', 'data privacy', 'encryption', 'security audit'],
        answer: `Our **Privacy Audit & Architecture** service includes:\n• Full codebase privacy review\n• Local-first architecture redesign\n• End-to-end encryption implementation\n• GDPR & data sovereignty compliance\n• Zero-knowledge system design\n\nWe help you build systems your users can *trust*.`,
    },
    {
        keywords: ['performance', 'optimization', 'slow', 'speed', 'fast', 'wasm', 'webassembly', 'electron'],
        answer: `Our **Performance Optimization** service covers:\n• Deep profiling of Electron / web desktop apps\n• WebAssembly (WASM) migration for CPU-intensive tasks\n• Rendering pipeline optimization (60fps UI)\n• Bundle size reduction\n• Memory leak detection & fixes\n\nWe've made Electron apps feel like native code!`,
    },
    {
        keywords: ['price', 'pricing', 'cost', 'free', 'paid', 'how much', 'rate', 'charge'],
        answer: `**Products are all free** — GenXBill, FamBudget, GenXLink, and NeuralCore are open-source or freely available.\n\n**Services (consulting & custom engineering)** are priced per project based on scope. We offer:\n• Fixed-price contracts for well-defined projects\n• Hourly rates for ongoing work\n\nContact us at genxisinnovation@outlook.com for a quote!`,
        followUp: ['How do I get a quote?', 'How do I contact GenXis?'],
    },
    {
        keywords: ['contact', 'email', 'reach', 'get in touch', 'talk', 'message', 'connect'],
        answer: `You can reach us at:\n\n📧 **Email:** genxisinnovation@outlook.com\n🐙 **GitHub:** github.com/lalupj07\n📍 **Location:** Kerala, India\n\nOr use the [Contact page](/contact) on our site. We typically respond within 24–48 hours!`,
        followUp: ['Where are you located?', 'What are your working hours?'],
    },
    {
        keywords: ['location', 'india', 'kerala', 'where', 'based', 'founded'],
        answer: `GenXis Innovations is based in **Kerala, India** 🇮🇳\n\nWe are proudly an Indian software lab, building world-class privacy-first software. We work remotely with clients globally!`,
    },
    {
        keywords: ['open source', 'github', 'source code', 'repo', 'repository'],
        answer: `Yes, several of our projects are **open source**! Check out:\n\n🐙 **GitHub:** [github.com/lalupj07](https://github.com/lalupj07)\n\nGenXBill and FamBudget source code is available there. We welcome contributions!`,
        followUp: ['How do I contribute?', 'What license do you use?'],
    },
    {
        keywords: ['tech stack', 'technology', 'built with', 'rust', 'flutter', 'react', 'typescript'],
        answer: `Our tech stack includes:\n\n**Languages:** Rust 🦀, Flutter/Dart, TypeScript, C++\n**Frontend:** React, Next.js, MUI, Framer Motion\n**Backend:** Node.js, Axum (Rust), PostgreSQL\n**Desktop:** Flutter, Tauri, Electron\n**Mobile:** Flutter\n\nWe choose the right tool for each job, with a strong preference for performance and privacy.`,
    },
    {
        keywords: ['download', 'install', 'get', 'where to download'],
        answer: `You can download our products from **GitHub**:\n\n🐙 [github.com/lalupj07](https://github.com/lalupj07)\n\nLook for the Releases section in each repository for installable binaries. All products are free!`,
    },
    {
        keywords: ['about', 'who are you', 'who is genxis', 'founder', 'team', 'company'],
        answer: `**GenXis Innovations** is a privacy-first software lab founded by **Lalu James** in Kerala, India.\n\nWe believe technology should *empower* users — not surveil them. Everything we build follows a Local-First philosophy: your data stays on your device.\n\nOur mission: Build the future of secure, intelligent, and private digital ecosystems. 🚀`,
        followUp: ['What products do you have?', 'What services do you offer?'],
    },
    {
        keywords: ['local first', 'local-first', 'offline', 'no cloud', 'data privacy', 'self-hosted'],
        answer: `**Local-First** is our core design philosophy. It means:\n\n• Your data is stored on **your device**, not our servers\n• Apps work **fully offline** without an internet connection\n• You own your data — we can't access it even if we wanted to\n• Sync (when available) is opt-in and encrypted\n\nThis is the future of software — and it's what makes GenXis different.`,
    },
    {
        keywords: ['hello', 'hi', 'hey', 'howdy', 'greet', 'good morning', 'good evening', 'good afternoon'],
        answer: `👋 Hello! I'm **GenXis Bot**, your AI assistant for all things GenXis Innovations.\n\nI can help you with:\n• Our products (GenXBill, FamBudget, GenXLink, NeuralCore)\n• Our services (Custom Engineering, Privacy Audits, Performance Optimization)\n• Pricing, contact info, and more!\n\nWhat would you like to know?`,
        followUp: ['What products do you have?', 'What services do you offer?', 'How do I contact you?'],
    },
    {
        keywords: ['thanks', 'thank you', 'thank', 'thx', 'appreciate', 'helpful'],
        answer: `You're very welcome! 😊 Is there anything else I can help you with?\n\nFeel free to ask about our products, services, or just say hi anytime!`,
    },
    {
        keywords: ['bye', 'goodbye', 'see you', 'cya', 'take care', 'later'],
        answer: `Goodbye! 👋 Thanks for visiting GenXis Innovations. \n\nDon't hesitate to reach out if you need anything — genxisinnovation@outlook.com. Have a great day! 🚀`,
    },
];

const SUGGESTED_QUESTIONS = [
    'What products do you have?',
    'What services do you offer?',
    'Tell me about GenXBill',
    'How much does it cost?',
    'How do I contact you?',
    'What is your tech stack?',
];

// ─── Message Matching ─────────────────────────────────────────────────────────

function getBotResponse(userInput: string): { answer: string; followUp?: string[] } {
    const lower = userInput.toLowerCase().trim();

    let bestMatch: FaqEntry | null = null;
    let bestScore = 0;

    for (const entry of FAQ_DB) {
        let score = 0;
        for (const kw of entry.keywords) {
            if (lower.includes(kw)) score += kw.length; // longer keyword matches score more
        }
        if (score > bestScore) {
            bestScore = score;
            bestMatch = entry;
        }
    }

    if (bestMatch && bestScore > 0) {
        return { answer: bestMatch.answer, followUp: bestMatch.followUp };
    }

    return {
        answer: `I'm not sure about that, but I'd love to help! 🤔\n\nFor specific questions, reach out directly:\n📧 **genxisinnovation@outlook.com**\n\nOr try asking me about our products, services, or pricing!`,
        followUp: ['What products do you have?', 'What services do you offer?', 'How do I contact you?'],
    };
}

// Simple markdown-like renderer for bold and newlines
function RenderAnswer({ text }: { text: string }) {
    const lines = text.split('\n');
    return (
        <>
            {lines.map((line, i) => {
                const parts = line.split(/\*\*(.*?)\*\*/g);
                return (
                    <React.Fragment key={i}>
                        {parts.map((part, j) =>
                            j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                        )}
                        {i < lines.length - 1 && <br />}
                    </React.Fragment>
                );
            })}
        </>
    );
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface Message {
    id: string;
    role: 'user' | 'bot';
    text: string;
    followUp?: string[];
    timestamp: Date;
}

// ─── Main ChatBot Component ───────────────────────────────────────────────────

const ChatBot: React.FC = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const [open, setOpen] = useState(false);
    const [minimized, setMinimized] = useState(false);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [unread, setUnread] = useState(1);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '0',
            role: 'bot',
            text: `👋 Hi! I'm **GenXis Bot**. Ask me anything about our products, services, pricing, or tech stack!`,
            followUp: SUGGESTED_QUESTIONS.slice(0, 3),
            timestamp: new Date(),
        },
    ]);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (open) {
            setUnread(0);
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [open]);

    useEffect(() => {
        if (open && !minimized) {
            bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, open, minimized, isTyping]);

    const sendMessage = (text: string) => {
        if (!text.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            text: text.trim(),
            timestamp: new Date(),
        };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            const { answer, followUp } = getBotResponse(text);
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'bot',
                text: answer,
                followUp,
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
            if (!open) setUnread(n => n + 1);
        }, 800 + Math.random() * 600);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage(input);
        }
    };

    const accent = isDark ? '#00F0FF' : theme.palette.primary.main;
    const panelBg = isDark ? '#0f1723' : '#ffffff';
    const headerBg = isDark
        ? 'linear-gradient(135deg, #0d1b2a 0%, #1a2744 100%)'
        : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`;

    return (
        <>
            {/* ── Chat Panel ── */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.92 }}
                        animate={minimized
                            ? { opacity: 1, y: 0, scale: 1, height: 60 }
                            : { opacity: 1, y: 0, scale: 1, height: 'auto' }}
                        exit={{ opacity: 0, y: 40, scale: 0.92 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                        style={{
                            position: 'fixed',
                            bottom: 96,
                            right: 24,
                            zIndex: 1300,
                            width: 360,
                            maxWidth: 'calc(100vw - 32px)',
                            borderRadius: 20,
                            overflow: 'hidden',
                            boxShadow: isDark
                                ? '0 24px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,240,255,0.12)'
                                : '0 24px 60px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)',
                        }}
                    >
                        <Paper elevation={0} sx={{ bgcolor: panelBg, borderRadius: 'inherit', overflow: 'hidden' }}>

                            {/* Header */}
                            <Box sx={{
                                background: headerBg,
                                px: 2.5, py: 1.8,
                                display: 'flex', alignItems: 'center', gap: 1.5,
                                borderBottom: `1px solid rgba(255,255,255,0.08)`
                            }}>
                                <Box sx={{ position: 'relative' }}>
                                    <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.15)', width: 38, height: 38 }}>
                                        <SmartToyIcon sx={{ fontSize: 22, color: '#fff' }} />
                                    </Avatar>
                                    <Box sx={{
                                        position: 'absolute', bottom: 1, right: 1,
                                        width: 9, height: 9, borderRadius: '50%',
                                        bgcolor: '#4caf50', border: '2px solid white'
                                    }} />
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 700, lineHeight: 1.2 }}>
                                        GenXis Bot
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.75)' }}>
                                        AI Assistant · Online
                                    </Typography>
                                </Box>
                                <Tooltip title="Minimize">
                                    <IconButton size="small" onClick={() => setMinimized(v => !v)} sx={{ color: 'rgba(255,255,255,0.8)', '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.1)' } }}>
                                        <MinimizeIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Close">
                                    <IconButton size="small" onClick={() => setOpen(false)} sx={{ color: 'rgba(255,255,255,0.8)', '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.1)' } }}>
                                        <CloseIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                            </Box>

                            {/* Messages (hidden when minimized) */}
                            <Fade in={!minimized}>
                                <Box>
                                    {/* Suggested pills (top) */}
                                    {messages.length === 1 && (
                                        <Box sx={{ px: 2, pt: 1.5, pb: 0.5, display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                                            {SUGGESTED_QUESTIONS.map((q) => (
                                                <Chip
                                                    key={q}
                                                    label={q}
                                                    size="small"
                                                    onClick={() => sendMessage(q)}
                                                    sx={{
                                                        cursor: 'pointer', fontSize: '0.72rem',
                                                        bgcolor: isDark ? 'rgba(0,240,255,0.08)' : 'rgba(0,120,255,0.07)',
                                                        color: accent, borderColor: `${accent}40`,
                                                        border: '1px solid',
                                                        '&:hover': { bgcolor: isDark ? 'rgba(0,240,255,0.18)' : 'rgba(0,120,255,0.15)' }
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    )}

                                    {/* Message list */}
                                    <Box sx={{
                                        height: 320, overflowY: 'auto', px: 2, py: 1.5,
                                        display: 'flex', flexDirection: 'column', gap: 1.5,
                                        '&::-webkit-scrollbar': { width: 4 },
                                        '&::-webkit-scrollbar-thumb': { borderRadius: 2, bgcolor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.15)' }
                                    }}>
                                        <AnimatePresence initial={false}>
                                            {messages.map((msg) => (
                                                <motion.div
                                                    key={msg.id}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                >
                                                    <Box sx={{ display: 'flex', gap: 1, flexDirection: msg.role === 'user' ? 'row-reverse' : 'row', alignItems: 'flex-end' }}>
                                                        {/* Avatar */}
                                                        <Avatar sx={{
                                                            width: 28, height: 28, flexShrink: 0,
                                                            bgcolor: msg.role === 'bot'
                                                                ? (isDark ? 'rgba(0,240,255,0.15)' : 'rgba(0,120,255,0.12)')
                                                                : (isDark ? 'rgba(191,0,255,0.2)' : '#e3f2fd'),
                                                        }}>
                                                            {msg.role === 'bot'
                                                                ? <SmartToyIcon sx={{ fontSize: 16, color: accent }} />
                                                                : <PersonIcon sx={{ fontSize: 16, color: isDark ? '#bf00ff' : '#1976d2' }} />
                                                            }
                                                        </Avatar>

                                                        {/* Bubble */}
                                                        <Box sx={{
                                                            maxWidth: '78%',
                                                            px: 1.8, py: 1.2,
                                                            borderRadius: msg.role === 'user'
                                                                ? '18px 18px 4px 18px'
                                                                : '18px 18px 18px 4px',
                                                            bgcolor: msg.role === 'user'
                                                                ? (isDark ? 'rgba(0,240,255,0.15)' : theme.palette.primary.main)
                                                                : (isDark ? 'rgba(255,255,255,0.05)' : '#f5f7fa'),
                                                            border: msg.role === 'bot'
                                                                ? `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'}`
                                                                : 'none',
                                                        }}>
                                                            <Typography variant="body2" sx={{
                                                                fontSize: '0.84rem', lineHeight: 1.7,
                                                                color: msg.role === 'user'
                                                                    ? (isDark ? accent : '#fff')
                                                                    : 'text.primary',
                                                                whiteSpace: 'pre-line',
                                                            }}>
                                                                <RenderAnswer text={msg.text} />
                                                            </Typography>

                                                            {/* Follow-up chips */}
                                                            {msg.followUp && msg.followUp.length > 0 && (
                                                                <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.6 }}>
                                                                    {msg.followUp.map((q) => (
                                                                        <Chip
                                                                            key={q}
                                                                            label={q}
                                                                            size="small"
                                                                            onClick={() => sendMessage(q)}
                                                                            sx={{
                                                                                cursor: 'pointer', fontSize: '0.7rem',
                                                                                height: 22,
                                                                                bgcolor: isDark ? 'rgba(0,240,255,0.1)' : 'rgba(0,0,0,0.05)',
                                                                                color: accent,
                                                                                border: `1px solid ${accent}30`,
                                                                                '&:hover': { bgcolor: isDark ? 'rgba(0,240,255,0.2)' : 'rgba(0,0,0,0.1)' }
                                                                            }}
                                                                        />
                                                                    ))}
                                                                </Box>
                                                            )}
                                                        </Box>
                                                    </Box>
                                                </motion.div>
                                            ))}

                                            {/* Typing indicator */}
                                            {isTyping && (
                                                <motion.div key="typing" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                                                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
                                                        <Avatar sx={{ width: 28, height: 28, bgcolor: isDark ? 'rgba(0,240,255,0.15)' : 'rgba(0,120,255,0.12)' }}>
                                                            <SmartToyIcon sx={{ fontSize: 16, color: accent }} />
                                                        </Avatar>
                                                        <Box sx={{
                                                            px: 2, py: 1.2, borderRadius: '18px 18px 18px 4px',
                                                            bgcolor: isDark ? 'rgba(255,255,255,0.05)' : '#f5f7fa',
                                                            border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'}`,
                                                            display: 'flex', gap: 0.5, alignItems: 'center'
                                                        }}>
                                                            {[0, 0.2, 0.4].map(delay => (
                                                                <motion.div
                                                                    key={delay}
                                                                    animate={{ y: [0, -5, 0] }}
                                                                    transition={{ repeat: Infinity, duration: 0.7, delay, ease: 'easeInOut' as const }}
                                                                    style={{ width: 6, height: 6, borderRadius: '50%', background: accent }}
                                                                />
                                                            ))}
                                                        </Box>
                                                    </Box>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                        <div ref={bottomRef} />
                                    </Box>

                                    {/* Input */}
                                    <Box sx={{
                                        px: 2, pb: 2, pt: 1,
                                        borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                                        display: 'flex', gap: 1, alignItems: 'center'
                                    }}>
                                        <TextField
                                            inputRef={inputRef}
                                            fullWidth
                                            size="small"
                                            placeholder="Ask me anything..."
                                            value={input}
                                            onChange={e => setInput(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                            InputProps={{ sx: { borderRadius: 6, fontSize: '0.86rem' } }}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    bgcolor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)',
                                                    '&:hover fieldset': { borderColor: accent },
                                                    '&.Mui-focused fieldset': { borderColor: accent },
                                                }
                                            }}
                                        />
                                        <IconButton
                                            onClick={() => sendMessage(input)}
                                            disabled={!input.trim() || isTyping}
                                            sx={{
                                                bgcolor: accent, color: isDark ? '#000' : '#fff',
                                                width: 38, height: 38, flexShrink: 0,
                                                transition: 'all 0.2s ease',
                                                '&:hover': { bgcolor: accent, transform: 'scale(1.08)' },
                                                '&.Mui-disabled': { bgcolor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', color: 'text.disabled' }
                                            }}
                                        >
                                            <SendIcon sx={{ fontSize: 18 }} />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Fade>
                        </Paper>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── FAB Button ── */}
            <Box sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1300 }}>
                <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    animate={!open ? { y: [0, -4, 0] } : {}}
                    transition={!open ? { repeat: Infinity, duration: 2.5, ease: 'easeInOut' as const } : {}}
                >
                    <Box
                        component="button"
                        id="chatbot-toggle-button"
                        aria-label="Open GenXis AI chatbot"
                        onClick={() => { setOpen(v => !v); setMinimized(false); }}
                        sx={{
                            width: 58, height: 58, borderRadius: '50%', border: 'none',
                            cursor: 'pointer', position: 'relative',
                            background: isDark
                                ? 'linear-gradient(135deg, #00F0FF 0%, #bf00ff 100%)'
                                : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                            boxShadow: isDark
                                ? '0 8px 24px rgba(0,240,255,0.4), 0 4px 12px rgba(191,0,255,0.3)'
                                : '0 8px 24px rgba(76,110,245,0.4)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            transition: 'box-shadow 0.3s ease',
                            '&:hover': {
                                boxShadow: isDark
                                    ? '0 12px 32px rgba(0,240,255,0.55), 0 6px 16px rgba(191,0,255,0.45)'
                                    : '0 12px 32px rgba(76,110,245,0.55)',
                            }
                        }}
                    >
                        <AnimatePresence mode="wait">
                            {open
                                ? <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                    <CloseIcon sx={{ color: '#fff', fontSize: 26 }} />
                                </motion.div>
                                : <motion.div key="bot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                    <SmartToyIcon sx={{ color: '#fff', fontSize: 28 }} />
                                </motion.div>
                            }
                        </AnimatePresence>

                        {/* Unread badge */}
                        {!open && unread > 0 && (
                            <Box sx={{
                                position: 'absolute', top: -3, right: -3,
                                width: 20, height: 20, borderRadius: '50%',
                                bgcolor: '#ff4444', border: '2px solid white',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Typography variant="caption" sx={{ fontSize: '0.65rem', color: '#fff', fontWeight: 700, lineHeight: 1 }}>
                                    {unread}
                                </Typography>
                            </Box>
                        )}

                        {/* Pulse ring */}
                        {!open && (
                            <motion.div
                                animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                                transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' as const }}
                                style={{
                                    position: 'absolute', inset: 0, borderRadius: '50%',
                                    border: `2px solid ${isDark ? '#00F0FF' : theme.palette.primary.main}`,
                                    pointerEvents: 'none',
                                }}
                            />
                        )}
                    </Box>
                </motion.div>
            </Box>
        </>
    );
};

export default ChatBot;

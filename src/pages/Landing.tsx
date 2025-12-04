import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Zap, MessageSquare, Code } from 'lucide-react';
import { motion } from 'framer-motion';

export function Landing() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-4xl"
                >
                    <div className="mb-6 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
                        <span className="flex h-2 w-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
                        <span className="text-sm font-medium text-purple-200">New: Perplexity Integration Live</span>
                    </div>

                    <h1 className="mb-8 text-5xl font-bold tracking-tight text-white sm:text-7xl">
                        Optimize Your Brand for the <br />
                        <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                            AI Economy
                        </span>
                    </h1>

                    <p className="mb-10 text-xl text-slate-300 sm:text-2xl">
                        The first multi-platform marketing automation solution. Generate AI-optimized assets and track performance across ChatGPT, Claude, Gemini, and Perplexity.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <Link
                            to="/onboarding"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-slate-900 transition-all hover:bg-slate-200"
                        >
                            Start Optimizing
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                        <button className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10">
                            View Demo
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Feature Sections */}
            <div className="space-y-32 py-24">
                {/* Feature 1: Multi-Platform */}
                <section className="container mx-auto px-4">
                    <div className="flex flex-col items-center gap-16 lg:flex-row">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="flex-1"
                        >
                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400">
                                <Globe className="h-8 w-8" />
                            </div>
                            <h2 className="mb-6 text-4xl font-bold text-white">Complete Visibility Across the AI Ecosystem</h2>
                            <p className="mb-8 text-lg text-slate-400 leading-relaxed">
                                Don't just optimize for one. Citara gives you simultaneous control over how your brand appears on ChatGPT, Claude, Gemini, and Perplexity. Ensure consistent messaging regardless of which AI assistant your customers prefer.
                            </p>
                            <ul className="space-y-4">
                                {['Unified Dashboard', 'Cross-Platform Sync', 'Brand Voice Consistency'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300">
                                        <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="flex-1"
                        >
                            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                                {/* Abstract UI representation */}
                                <div className="relative h-full w-full rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-6">
                                    <div className="mb-4 flex gap-2">
                                        <div className="h-3 w-3 rounded-full bg-red-500/50"></div>
                                        <div className="h-3 w-3 rounded-full bg-yellow-500/50"></div>
                                        <div className="h-3 w-3 rounded-full bg-green-500/50"></div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-2 w-3/4 rounded bg-white/10"></div>
                                        <div className="h-2 w-1/2 rounded bg-white/10"></div>
                                        <div className="h-2 w-full rounded bg-white/10"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Feature 2: AI Content Gen */}
                <section className="container mx-auto px-4">
                    <div className="flex flex-col-reverse items-center gap-16 lg:flex-row">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="flex-1"
                        >
                            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                                <div className="relative flex h-full items-center justify-center">
                                    <MessageSquare className="h-32 w-32 text-purple-400/50" />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="flex-1"
                        >
                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-400">
                                <Zap className="h-8 w-8" />
                            </div>
                            <h2 className="mb-6 text-4xl font-bold text-white">Citation-Optimized Content Generation</h2>
                            <p className="mb-8 text-lg text-slate-400 leading-relaxed">
                                Stop guessing what AI wants. Our engine generates articles, knowledge schemas, and data structures specifically designed to be picked up as high-authority citations by LLMs.
                            </p>
                            <ul className="space-y-4">
                                {['Schema.org Implementation', 'Fact-Checkable Formats', 'Context-Rich Snippets'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300">
                                        <div className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* Feature 3: Micro-Tools */}
                <section className="container mx-auto px-4">
                    <div className="flex flex-col items-center gap-16 lg:flex-row">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="flex-1"
                        >
                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/20 text-green-400">
                                <Code className="h-8 w-8" />
                            </div>
                            <h2 className="mb-6 text-4xl font-bold text-white">Deploy Interactive Micro-Tools</h2>
                            <p className="mb-8 text-lg text-slate-400 leading-relaxed">
                                Move beyond static text. Create and deploy interactive calculators, configurators, and lookup tools that AI agents can "call" directly to answer user queries with precision.
                            </p>
                            <ul className="space-y-4">
                                {['Function Calling Ready', 'React Component Generation', 'Instant Deployment'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300">
                                        <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="flex-1"
                        >
                            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-green-500/10 to-teal-500/10 p-8">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                                <div className="relative flex h-full flex-col justify-center gap-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-6">
                                    <div className="flex justify-between text-sm text-slate-300">
                                        <span>Inputs</span>
                                        <span>Outputs</span>
                                    </div>
                                    <div className="h-2 w-full rounded bg-green-500/20">
                                        <div className="h-full w-2/3 rounded bg-green-500"></div>
                                    </div>
                                    <div className="h-2 w-full rounded bg-green-500/20">
                                        <div className="h-full w-1/3 rounded bg-green-500"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>

            {/* CTA Section */}
            <section className="relative py-32 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto px-4"
                >
                    <h2 className="mb-8 text-4xl font-bold text-white sm:text-5xl">Ready to Dominate the AI Era?</h2>
                    <p className="mb-10 mx-auto max-w-2xl text-xl text-slate-300">
                        Join forward-thinking brands that are already optimizing their presence for the next generation of search.
                    </p>
                    <Link
                        to="/onboarding"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-slate-900 transition-all hover:bg-slate-200"
                    >
                        Get Started Now
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}

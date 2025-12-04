import { motion } from 'framer-motion';

export function About() {
    return (
        <div className="container mx-auto px-4 py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-5xl font-bold text-white mb-8 text-center">About Citara</h1>

                <div className="prose prose-invert prose-lg mx-auto">
                    <p className="text-xl text-slate-300 leading-relaxed mb-12 text-center">
                        We are building the operating system for the AI economy. Our mission is to ensure that every brand has a voice in the conversations of the future.
                    </p>

                    <div className="grid gap-12 md:grid-cols-2 mb-16">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                            <p className="text-slate-400">
                                As search evolves from links to answers, the way brands are discovered is fundamentally changing. We envision a world where businesses can transparently understand and ethically influence how they are represented by artificial intelligence.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Our Technology</h2>
                            <p className="text-slate-400">
                                Citara is powered by a proprietary engine that reverse-engineers LLM retrieval patterns. We don't just guess what works; we analyze millions of AI responses to determine exactly what drives citation and positive sentiment.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
                        <h2 className="text-2xl font-bold text-white mb-6">Join the Revolution</h2>
                        <p className="text-slate-400 mb-8">
                            We're a team of engineers, data scientists, and marketers passionate about the future of information.
                        </p>
                        <div className="flex justify-center gap-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-1">12+</div>
                                <div className="text-sm text-slate-500">Team Members</div>
                            </div>
                            <div className="w-px bg-white/10"></div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-1">4</div>
                                <div className="text-sm text-slate-500">Global Offices</div>
                            </div>
                            <div className="w-px bg-white/10"></div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-1">$10M+</div>
                                <div className="text-sm text-slate-500">Funding</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

import { motion } from 'framer-motion';
import { Globe, Zap, MessageSquare, Code, Shield, Cpu } from 'lucide-react';

export function Features() {
    const features = [
        {
            icon: Globe,
            title: "Multi-Platform Optimization",
            description: "Simultaneously optimize your brand presence across ChatGPT, Claude, Gemini, and Perplexity. Ensure consistent messaging no matter where your customers search.",
            color: "text-blue-400",
            bg: "bg-blue-500/10"
        },
        {
            icon: MessageSquare,
            title: "Citation-Ready Content",
            description: "Generate content specifically structured for LLM consumption. Our engine produces schema-rich articles that AI models love to cite.",
            color: "text-purple-400",
            bg: "bg-purple-500/10"
        },
        {
            icon: Code,
            title: "Interactive Micro-Tools",
            description: "Deploy lightweight, functional tools that AI agents can use to answer specific user queries, increasing your authority score.",
            color: "text-green-400",
            bg: "bg-green-500/10"
        },
        {
            icon: Zap,
            title: "Real-Time Sentiment Analysis",
            description: "Track how your brand is perceived by AI models. Get instant alerts on sentiment shifts and hallucination risks.",
            color: "text-amber-400",
            bg: "bg-amber-500/10"
        },
        {
            icon: Shield,
            title: "Brand Safety Guardrails",
            description: "Proactively monitor for off-brand associations and competitor encroachment within AI responses.",
            color: "text-red-400",
            bg: "bg-red-500/10"
        },
        {
            icon: Cpu,
            title: "API-First Architecture",
            description: "Seamlessly integrate Citara into your existing marketing stack with our robust API and webhooks.",
            color: "text-cyan-400",
            bg: "bg-cyan-500/10"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
            >
                <h1 className="text-5xl font-bold text-white mb-6">Powerful Features for the AI Era</h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    Everything you need to measure, manage, and maximize your brand's visibility in the age of artificial intelligence.
                </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                    >
                        <div className={`w-12 h-12 rounded-lg ${feature.bg} ${feature.color} flex items-center justify-center mb-6`}>
                            <feature.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

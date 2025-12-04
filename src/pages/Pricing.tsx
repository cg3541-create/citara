import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Pricing() {
    const plans = [
        {
            name: "Starter",
            price: "$299",
            description: "Essential tools for single-platform optimization and monitoring.",
            features: [
                "Single Platform Optimization",
                "Weekly Performance Reports",
                "Basic Content Generation",
                "14-Day Free Trial"
            ],
            cta: "Start Free Trial",
            popular: false
        },
        {
            name: "Growth",
            price: "$799",
            description: "Complete multi-platform campaigns with advanced analytics.",
            features: [
                "Multi-Platform Campaigns",
                "Advanced Analytics Dashboard",
                "Real-time Sentiment Tracking",
                "All Platforms (Gemini, Perplexity)",
                "14-Day Free Trial"
            ],
            cta: "Start Free Trial",
            popular: true
        },
        {
            name: "Enterprise",
            price: "$2,499",
            description: "Full-scale solution with custom asset generation and API access.",
            features: [
                "Custom Asset Generation",
                "Full API Access",
                "Dedicated Account Manager",
                "White-label Reports",
                "Unlimited Micro-Tools"
            ],
            cta: "Schedule Demo",
            popular: false
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
                <h1 className="text-5xl font-bold text-white mb-6">Simple, Transparent Pricing</h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    All plans include a 14-day free trial with full access to asset generation and analytics.
                </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative p-8 rounded-2xl border ${plan.popular ? 'border-purple-500 bg-purple-500/10' : 'border-white/10 bg-white/5'} flex flex-col`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                Most Popular
                            </div>
                        )}
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-4xl font-bold text-white">{plan.price}</span>
                            {plan.price !== "Custom" && <span className="text-slate-400">/month</span>}
                        </div>
                        <p className="text-slate-400 mb-8">{plan.description}</p>

                        <ul className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300">
                                    <Check className="w-5 h-5 text-green-400 shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Link
                            to="/onboarding"
                            className={`w-full py-3 rounded-lg font-semibold text-center transition-colors ${plan.popular
                                ? 'bg-purple-500 hover:bg-purple-600 text-white'
                                : 'bg-white text-slate-900 hover:bg-slate-200'
                                }`}
                        >
                            {plan.cta}
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

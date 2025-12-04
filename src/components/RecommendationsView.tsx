import { useState } from 'react';
import { ArrowRight, Sparkles, Target, Video, CheckCircle2, Play, FileText, Image as ImageIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface WorkflowStep {
    id: number;
    title: string;
    description: string;
    icon: any;
    status: 'pending' | 'ready';
}

interface Recommendation {
    id: number;
    title: string;
    description: string;
    impact: string;
    icon: any;
    color: string;
    bg: string;
    strategy: {
        why: string;
        how: string;
    };
    workflow: WorkflowStep[];
}

export function RecommendationsView() {
    const [selectedStrategy, setSelectedStrategy] = useState<Recommendation | null>(null);

    const recommendations: Recommendation[] = [
        {
            id: 1,
            title: "Expand to Video Content",
            description: "Your technical documentation on Gemini is performing well. Convert this into a short-form video series for YouTube Shorts to capture visual learners.",
            impact: "High",
            icon: Video,
            color: "text-red-400",
            bg: "bg-red-500/10",
            strategy: {
                why: "Video content has 12x higher engagement rates for technical tutorials. Your text content is already validated, making this a low-risk, high-reward expansion.",
                how: "We'll use the existing documentation as a script source, generate AI voiceovers, and pair them with code snippets and stock visuals."
            },
            workflow: [
                { id: 1, title: "Extract Key Concepts", description: "Analyze documentation to identify 3 core topics.", icon: FileText, status: 'ready' },
                { id: 2, title: "Generate Scripts", description: "Draft 60-second scripts for each topic.", icon: FileText, status: 'pending' },
                { id: 3, title: "Select Visuals", description: "Match code blocks with background assets.", icon: ImageIcon, status: 'pending' },
                { id: 4, title: "Render Video", description: "Compile voiceover, visuals, and captions.", icon: Video, status: 'pending' }
            ]
        },
        {
            id: 2,
            title: "Refine Tone for Claude",
            description: "Engagement on Claude is lower than expected. Adjusting the tone to be more analytical and detailed could improve relevance score by 15%.",
            impact: "Medium",
            icon: Target,
            color: "text-orange-400",
            bg: "bg-orange-500/10",
            strategy: {
                why: "Claude's user base prefers in-depth, nuanced analysis over marketing fluff. Your current tone is too promotional.",
                how: "We'll rewrite the brand overview using a 'Technical/Analytical' persona, focusing on data points and architectural benefits."
            },
            workflow: [
                { id: 1, title: "Analyze Current Tone", description: "Score current assets against Claude best practices.", icon: Target, status: 'ready' },
                { id: 2, title: "Rewrite Content", description: "Regenerate assets with 'Analytical' persona.", icon: FileText, status: 'pending' },
                { id: 3, title: "A/B Test", description: "Deploy new variation and track engagement.", icon: Sparkles, status: 'pending' }
            ]
        },
        {
            id: 3,
            title: "Create Interactive Demos",
            description: "The ROI Calculator has a 45% engagement rate. Build more micro-tools like a 'Savings Estimator' to drive further interaction.",
            impact: "High",
            icon: Sparkles,
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            strategy: {
                why: "Interactive tools drive 3x more time-on-page than static text. Users are actively looking for utility.",
                how: "We'll identify common user calculations in your domain and generate lightweight React components to solve them."
            },
            workflow: [
                { id: 1, title: "Identify Opportunities", description: "Scan search queries for 'calculator' or 'estimator'.", icon: Target, status: 'ready' },
                { id: 2, title: "Generate Logic", description: "Create formulas for Savings Estimator.", icon: FileText, status: 'pending' },
                { id: 3, title: "Build Component", description: "Generate React code for the tool.", icon: Sparkles, status: 'pending' }
            ]
        }
    ];

    if (selectedStrategy) {
        return (
            <div className="animate-fade-in space-y-6">
                <button
                    onClick={() => setSelectedStrategy(null)}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                >
                    <ArrowRight className="h-4 w-4 rotate-180" />
                    Back to Recommendations
                </button>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Strategy Overview */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${selectedStrategy.bg} ${selectedStrategy.color}`}>
                                        <selectedStrategy.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-white">{selectedStrategy.title}</h2>
                                        <span className="text-sm text-slate-400">Strategic Initiative</span>
                                    </div>
                                </div>
                                <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                                    {selectedStrategy.impact} Impact
                                </span>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-2">Why This Strategy?</h3>
                                    <p className="text-slate-200 leading-relaxed">{selectedStrategy.strategy.why}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-2">Execution Plan</h3>
                                    <p className="text-slate-200 leading-relaxed">{selectedStrategy.strategy.how}</p>
                                </div>
                            </div>
                        </div>

                        {/* Workflow Steps */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                            <h3 className="text-lg font-semibold text-white mb-6">Draft Workflow</h3>
                            <div className="space-y-4">
                                {selectedStrategy.workflow.map((step, index) => (
                                    <div key={step.id} className="relative flex gap-4">
                                        {/* Connector Line */}
                                        {index !== selectedStrategy.workflow.length - 1 && (
                                            <div className="absolute left-5 top-10 bottom-[-16px] w-0.5 bg-white/10" />
                                        )}

                                        <div className={cn(
                                            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2",
                                            step.status === 'ready'
                                                ? "border-purple-500 bg-purple-500/20 text-purple-400"
                                                : "border-white/10 bg-white/5 text-slate-500"
                                        )}>
                                            <step.icon className="h-4 w-4" />
                                        </div>

                                        <div className="flex-1 pt-2 pb-6">
                                            <div className="flex items-center justify-between mb-1">
                                                <h4 className="font-medium text-white">{step.title}</h4>
                                                {step.status === 'ready' && (
                                                    <span className="flex items-center gap-1 text-xs text-purple-400">
                                                        <CheckCircle2 className="h-3 w-3" />
                                                        Ready
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-slate-400">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Actions Panel */}
                    <div className="space-y-6">
                        <div className="rounded-xl border border-white/10 bg-white/5 p-6 sticky top-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Actions</h3>
                            <div className="space-y-3">
                                <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-purple-500 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-purple-600">
                                    <Play className="h-4 w-4" />
                                    Execute Workflow
                                </button>
                                <button className="w-full flex items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white">
                                    Customize Steps
                                </button>
                            </div>

                            <div className="mt-6 pt-6 border-t border-white/10">
                                <h4 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">Estimated Results</h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Time to Launch</span>
                                        <span className="text-white">~15 mins</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Proj. Engagement</span>
                                        <span className="text-green-400">+25%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* AI Strategist Header Card */}
            <div className="col-span-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
                <div className="flex items-start justify-between">
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <Sparkles className="h-5 w-5" />
                            <h3 className="font-bold">AI Strategist Insights</h3>
                        </div>
                        <p className="max-w-xl text-purple-100">
                            Based on your recent performance, we've identified 3 key opportunities to optimize your presence across AI platforms.
                        </p>
                    </div>
                    <button className="rounded-lg bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/30">
                        Auto-Apply All
                    </button>
                </div>
            </div>

            {recommendations.map((rec) => {
                const Icon = rec.icon;
                return (
                    <div key={rec.id} className="group flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10">
                        <div>
                            <div className="mb-4 flex items-start justify-between">
                                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${rec.bg} ${rec.color}`}>
                                    <Icon className="h-5 w-5" />
                                </div>
                                <span className="rounded-full bg-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-400">
                                    {rec.impact} Impact
                                </span>
                            </div>
                            <h4 className="mb-2 font-semibold text-white">{rec.title}</h4>
                            <p className="text-sm text-slate-400">{rec.description}</p>
                        </div>

                        <button
                            onClick={() => setSelectedStrategy(rec)}
                            className="mt-6 flex w-full items-center justify-between rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition-colors group-hover:bg-white/5 group-hover:text-white"
                        >
                            <span>View Strategy</span>
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

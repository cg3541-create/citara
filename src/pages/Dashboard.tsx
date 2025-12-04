import { useState, useEffect } from 'react';
import { BarChart3, FileText, Settings, Download, Share2, TrendingUp, Lightbulb } from 'lucide-react';
import { DashboardChart } from '../components/DashboardChart';
import { AssetPreview } from '../components/AssetPreview';
import { CampaignSummaryCard } from '../components/CampaignSummaryCard';
import { ResultsView } from '../components/ResultsView';
import { RecommendationsView } from '../components/RecommendationsView';
import { cn } from '../lib/utils';
import { generateAssets, type GeneratedAsset } from '../lib/assetGenerator';

export function Dashboard() {
    const [activeTab, setActiveTab] = useState<'analytics' | 'assets' | 'results' | 'recommendations'>('analytics');
    const [assets, setAssets] = useState<GeneratedAsset[]>([]);

    useEffect(() => {
        const savedPlatforms = localStorage.getItem('citara_platforms');
        const savedBusiness = localStorage.getItem('citara_business');
        const savedCampaigns = localStorage.getItem('citara_campaigns');

        if (savedPlatforms && savedBusiness && savedCampaigns) {
            try {
                const platforms = JSON.parse(savedPlatforms);
                const business = JSON.parse(savedBusiness);
                const campaigns = JSON.parse(savedCampaigns);

                const generated = generateAssets(platforms, business, campaigns);
                setAssets(generated);
            } catch (e) {
                console.error('Failed to parse onboarding data', e);
            }
        }
    }, []);

    const CAMPAIGNS = [
        {
            title: "Q4 Brand Awareness",
            platform: "Multi-platform",
            status: "active" as const,
            metrics: { reach: "125K", engagement: "4.2%", sentiment: 88 },
            trend: "up" as const
        },
        {
            title: "Product Launch Alpha",
            platform: "45K",
            status: "completed" as const,
            metrics: { reach: "45K", engagement: "6.8%", sentiment: 94 },
            trend: "up" as const
        },
        {
            title: "Technical Documentation",
            platform: "Gemini",
            status: "active" as const,
            metrics: { reach: "12K", engagement: "15.5%", sentiment: 91 },
            trend: "neutral" as const
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                    <p className="text-slate-400">Track your AI presence and manage assets.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white">
                        <Share2 className="h-4 w-4" />
                        Share Report
                    </button>
                    <button className="flex items-center gap-2 rounded-lg bg-purple-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-600">
                        <Download className="h-4 w-4" />
                        Export Data
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                    { label: 'Total Mentions', value: '2,543', change: '+12%', color: 'text-purple-400' },
                    { label: 'Sentiment Score', value: '92/100', change: '+5%', color: 'text-green-400' },
                    { label: 'Asset Citations', value: '856', change: '+24%', color: 'text-blue-400' },
                    { label: 'Active Platforms', value: '4/4', change: '100%', color: 'text-orange-400' },
                ].map((stat, i) => (
                    <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
                        <p className="text-sm text-slate-400">{stat.label}</p>
                        <div className="mt-2 flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-white">{stat.value}</span>
                            <span className={cn("text-xs font-medium", stat.color)}>{stat.change}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tabs */}
            <div className="mb-8 border-b border-white/10 overflow-x-auto">
                <div className="flex gap-8 min-w-max">
                    <button
                        onClick={() => setActiveTab('analytics')}
                        className={cn(
                            "flex items-center gap-2 border-b-2 pb-4 text-sm font-medium transition-colors",
                            activeTab === 'analytics'
                                ? "border-purple-500 text-purple-400"
                                : "border-transparent text-slate-400 hover:text-white"
                        )}
                    >
                        <BarChart3 className="h-4 w-4" />
                        Analytics Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('assets')}
                        className={cn(
                            "flex items-center gap-2 border-b-2 pb-4 text-sm font-medium transition-colors",
                            activeTab === 'assets'
                                ? "border-purple-500 text-purple-400"
                                : "border-transparent text-slate-400 hover:text-white"
                        )}
                    >
                        <FileText className="h-4 w-4" />
                        Generated Assets
                    </button>
                    <button
                        onClick={() => setActiveTab('results')}
                        className={cn(
                            "flex items-center gap-2 border-b-2 pb-4 text-sm font-medium transition-colors",
                            activeTab === 'results'
                                ? "border-purple-500 text-purple-400"
                                : "border-transparent text-slate-400 hover:text-white"
                        )}
                    >
                        <TrendingUp className="h-4 w-4" />
                        Results Summary
                    </button>
                    <button
                        onClick={() => setActiveTab('recommendations')}
                        className={cn(
                            "flex items-center gap-2 border-b-2 pb-4 text-sm font-medium transition-colors",
                            activeTab === 'recommendations'
                                ? "border-purple-500 text-purple-400"
                                : "border-transparent text-slate-400 hover:text-white"
                        )}
                    >
                        <Lightbulb className="h-4 w-4" />
                        AI Recommendations
                    </button>
                    <button
                        className="flex items-center gap-2 border-b-2 border-transparent pb-4 text-sm font-medium text-slate-400 transition-colors hover:text-white"
                    >
                        <Settings className="h-4 w-4" />
                        Settings
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="animate-fade-in">
                {activeTab === 'analytics' && (
                    <div className="space-y-8">
                        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                            <h3 className="mb-6 text-lg font-semibold text-white">Weekly Brand Mentions</h3>
                            <DashboardChart />
                        </div>

                        <div>
                            <h3 className="mb-4 text-lg font-semibold text-white">Campaign Performance</h3>
                            <div className="grid gap-6 md:grid-cols-3">
                                {CAMPAIGNS.map((campaign, i) => (
                                    <CampaignSummaryCard key={i} {...campaign} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'assets' && <AssetPreview assets={assets} />}

                {activeTab === 'results' && <ResultsView assets={assets} />}

                {activeTab === 'recommendations' && <RecommendationsView />}
            </div>
        </div>
    );
}

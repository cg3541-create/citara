import { TrendingUp, TrendingDown, Minus, Zap, BarChart2 } from 'lucide-react';
import type { GeneratedAsset } from '../lib/assetGenerator';

interface ResultsViewProps {
    assets: GeneratedAsset[];
}

export function ResultsView({ assets }: ResultsViewProps) {
    if (assets.length === 0) {
        return (
            <div className="text-center text-slate-400 py-12">
                No results available yet. Generate assets to see performance data.
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="grid gap-4">
                {assets.map((asset) => {
                    const Icon = asset.icon;
                    const metrics = asset.metrics || { ctr: '0%', engagement: '0%', conversions: '0%', trend: 'neutral' };

                    return (
                        <div key={asset.id} className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">{asset.title}</h4>
                                    <div className="flex items-center gap-2 text-sm text-slate-400">
                                        <span>{asset.platform}</span>
                                        <span>•</span>
                                        <span className="capitalize">{asset.type}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
                                <div className="text-center">
                                    <p className="text-xs text-slate-400">CTR</p>
                                    <p className="font-bold text-white">{metrics.ctr}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-xs text-slate-400">Engagement</p>
                                    <p className="font-bold text-white">{metrics.engagement}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-xs text-slate-400">Conversions</p>
                                    <div className="flex items-center gap-1">
                                        <p className="font-bold text-white">{metrics.conversions}</p>
                                        {metrics.trend === 'up' && <TrendingUp className="h-3 w-3 text-green-400" />}
                                        {metrics.trend === 'down' && <TrendingDown className="h-3 w-3 text-red-400" />}
                                        {metrics.trend === 'neutral' && <Minus className="h-3 w-3 text-slate-400" />}
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white">
                                        <BarChart2 className="h-3 w-3" />
                                        Analyze
                                    </button>
                                    <button className="flex items-center gap-2 rounded-lg bg-purple-500/20 px-3 py-2 text-xs font-medium text-purple-300 transition-colors hover:bg-purple-500/30 hover:text-purple-200">
                                        <Zap className="h-3 w-3" />
                                        Boost
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

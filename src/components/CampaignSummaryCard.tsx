import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '../lib/utils';

interface CampaignSummaryCardProps {
    title: string;
    platform: string;
    status: 'active' | 'completed' | 'paused';
    metrics: {
        reach: string;
        engagement: string;
        sentiment: number;
    };
    trend: 'up' | 'down' | 'neutral';
}

export function CampaignSummaryCard({ title, platform, status, metrics, trend }: CampaignSummaryCardProps) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10">
            <div className="mb-4 flex items-start justify-between">
                <div>
                    <h4 className="font-semibold text-white">{title}</h4>
                    <span className="text-xs text-slate-400">{platform}</span>
                </div>
                <span className={cn(
                    "rounded-full px-2 py-1 text-[10px] font-medium uppercase tracking-wider",
                    status === 'active' ? "bg-green-500/10 text-green-400" :
                        status === 'completed' ? "bg-blue-500/10 text-blue-400" :
                            "bg-slate-500/10 text-slate-400"
                )}>
                    {status}
                </span>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-4">
                <div>
                    <p className="text-xs text-slate-400">Reach</p>
                    <p className="text-lg font-bold text-white">{metrics.reach}</p>
                </div>
                <div>
                    <p className="text-xs text-slate-400">Engagement</p>
                    <p className="text-lg font-bold text-white">{metrics.engagement}</p>
                </div>
                <div>
                    <p className="text-xs text-slate-400">Sentiment</p>
                    <div className="flex items-center gap-1">
                        <p className="text-lg font-bold text-white">{metrics.sentiment}%</p>
                        {trend === 'up' && <TrendingUp className="h-3 w-3 text-green-400" />}
                        {trend === 'down' && <TrendingDown className="h-3 w-3 text-red-400" />}
                        {trend === 'neutral' && <Minus className="h-3 w-3 text-slate-400" />}
                    </div>
                </div>
            </div>
        </div>
    );
}

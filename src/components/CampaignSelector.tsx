import { Check } from 'lucide-react';
import { campaigns } from '../lib/mockData';
import { cn } from '../lib/utils';

interface CampaignSelectorProps {
    selectedCampaigns: string[];
    onToggle: (id: string) => void;
}

export function CampaignSelector({ selectedCampaigns, onToggle }: CampaignSelectorProps) {
    return (
        <div className="space-y-4">
            {campaigns.map((campaign) => {
                const isSelected = selectedCampaigns.includes(campaign.id);

                return (
                    <button
                        key={campaign.id}
                        onClick={() => onToggle(campaign.id)}
                        className={cn(
                            "flex w-full items-center justify-between rounded-xl border p-6 text-left transition-all",
                            isSelected
                                ? "border-purple-500 bg-purple-500/10"
                                : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                        )}
                    >
                        <div>
                            <h3 className={cn("font-semibold", isSelected ? "text-white" : "text-slate-300")}>
                                {campaign.title}
                            </h3>
                            <p className="mt-1 text-sm text-slate-400">{campaign.description}</p>
                        </div>

                        <div className={cn(
                            "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors",
                            isSelected
                                ? "border-purple-500 bg-purple-500 text-white"
                                : "border-slate-600 bg-transparent"
                        )}>
                            {isSelected && <Check className="h-4 w-4" />}
                        </div>
                    </button>
                );
            })}
        </div>
    );
}

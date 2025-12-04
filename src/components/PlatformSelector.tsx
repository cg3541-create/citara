import { Check } from 'lucide-react';
import { platforms } from '../lib/mockData';
import { cn } from '../lib/utils';

interface PlatformSelectorProps {
    selectedPlatforms: string[];
    onToggle: (id: string) => void;
}

export function PlatformSelector({ selectedPlatforms, onToggle }: PlatformSelectorProps) {
    return (
        <div className="grid gap-4 sm:grid-cols-2">
            {platforms.map((platform) => {
                const isSelected = selectedPlatforms.includes(platform.id);
                const Icon = platform.icon;

                return (
                    <button
                        key={platform.id}
                        onClick={() => onToggle(platform.id)}
                        className={cn(
                            "group relative flex items-start gap-4 rounded-xl border p-6 text-left transition-all",
                            isSelected
                                ? "border-purple-500 bg-purple-500/10"
                                : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                        )}
                    >
                        <div className={cn(
                            "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-colors",
                            isSelected ? "bg-purple-500 text-white" : "bg-white/10 text-slate-400"
                        )}>
                            <Icon className="h-6 w-6" />
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <h3 className={cn("font-semibold", isSelected ? "text-white" : "text-slate-300")}>
                                    {platform.name}
                                </h3>
                                {isSelected && (
                                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500">
                                        <Check className="h-3 w-3 text-white" />
                                    </div>
                                )}
                            </div>
                            <p className="mt-1 text-sm text-slate-400">{platform.description}</p>
                        </div>
                    </button>
                );
            })}
        </div>
    );
}

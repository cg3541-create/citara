import { type LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    className?: string;
}

export function FeatureCard({ title, description, icon: Icon, className }: FeatureCardProps) {
    return (
        <div className={cn(
            "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-purple-500/50 hover:bg-white/10",
            className
        )}>
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl transition-all group-hover:bg-purple-500/30" />

            <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 group-hover:text-purple-300">
                    <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
                <p className="text-slate-400">{description}</p>
            </div>
        </div>
    );
}

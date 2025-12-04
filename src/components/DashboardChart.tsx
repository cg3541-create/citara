import { mockAnalytics } from '../lib/mockData';

export function DashboardChart() {
    // Simple SVG chart implementation since we don't have a charting library installed
    // and want to keep dependencies low for this prototype.
    const maxMentions = Math.max(...mockAnalytics.map(d => d.mentions));

    return (
        <div className="w-full">
            <div className="flex h-64 items-end gap-2 sm:gap-4">
                {mockAnalytics.map((data, index) => {
                    const height = (data.mentions / maxMentions) * 100;
                    return (
                        <div key={index} className="group relative flex h-full flex-1 items-end">
                            <div
                                className="w-full rounded-t-lg bg-purple-500/20 transition-all hover:bg-purple-500/40"
                                style={{ height: `${height}%` }}
                            >
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded bg-slate-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap z-10">
                                    {data.mentions} mentions
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mt-2 flex gap-2 sm:gap-4">
                {mockAnalytics.map((data, index) => (
                    <div key={index} className="flex-1 text-center text-xs text-slate-500">
                        {data.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

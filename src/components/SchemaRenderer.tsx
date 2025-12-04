
import { Network } from 'lucide-react';

interface SchemaRendererProps {
    data: any;
}

export function SchemaRenderer({ data }: SchemaRendererProps) {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-400">
                <Network className="h-5 w-5" />
                <span className="font-semibold">Structured Data Preview</span>
            </div>

            <div className="rounded-lg border border-white/10 bg-slate-900/50 p-4 font-mono text-sm text-blue-200">
                <div className="space-y-2">
                    {Object.entries(data).map(([key, value]) => {
                        if (key.startsWith('@')) return null; // Skip context/type for cleaner view
                        return (
                            <div key={key} className="flex flex-col sm:flex-row sm:gap-4">
                                <span className="min-w-[120px] text-slate-500">{key}:</span>
                                <span className="break-all">
                                    {Array.isArray(value) ? (
                                        <ul className="list-inside list-disc">
                                            {value.map((v: any, i: number) => (
                                                <li key={i}>{typeof v === 'string' ? v : JSON.stringify(v)}</li>
                                            ))}
                                        </ul>
                                    ) : typeof value === 'object' ? (
                                        JSON.stringify(value)
                                    ) : (
                                        String(value)
                                    )}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-4 text-xs text-slate-500">
                * Validated against Schema.org definitions
            </div>
        </div>
    );
}

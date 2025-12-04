import { Copy } from 'lucide-react';
import type { GeneratedAsset } from '../lib/assetGenerator';
import { ArticleRenderer } from './ArticleRenderer';
import { InteractiveToolRenderer } from './InteractiveToolRenderer';
import { SchemaRenderer } from './SchemaRenderer';

interface AssetPreviewProps {
    assets: GeneratedAsset[];
}

export function AssetPreview({ assets }: AssetPreviewProps) {
    if (assets.length === 0) {
        return (
            <div className="text-center text-slate-400 py-12">
                No assets generated yet. Complete the onboarding flow to see your optimized content.
            </div>
        );
    }

    return (
        <div className="grid gap-6 lg:grid-cols-2">
            {assets.map((asset) => {
                const Icon = asset.icon;
                return (
                    <div key={asset.id} className="rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10">
                        <div className="mb-4 flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white line-clamp-1">{asset.title}</h4>
                                    <span className="text-xs text-slate-400">{asset.platform} Optimization</span>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white">
                                <Copy className="h-3 w-3" />
                                Copy
                            </button>
                        </div>

                        <div className="rounded-lg bg-slate-950/30 p-4">
                            {asset.type === 'article' && <ArticleRenderer content={asset.content} />}
                            {asset.type === 'tool' && asset.data && <InteractiveToolRenderer data={asset.data} />}
                            {asset.type === 'schema' && asset.data && <SchemaRenderer data={asset.data} />}

                            {/* Fallback for missing data or unknown types */}
                            {asset.type === 'tool' && !asset.data && (
                                <code className="text-xs text-slate-400 font-mono block whitespace-pre-wrap">
                                    {asset.content}
                                </code>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

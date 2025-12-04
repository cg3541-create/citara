import { FileText, Code, Database, type LucideIcon } from 'lucide-react';

export interface GeneratedAsset {
    id: string;
    type: 'article' | 'schema' | 'tool';
    title: string;
    platform: string;
    icon: LucideIcon;
    content: string;
    // New fields for rich rendering
    data?: any;
    // New fields for results summary
    metrics?: {
        ctr: string;
        engagement: string;
        conversions: string;
        trend: 'up' | 'down' | 'neutral';
    };
}

interface BusinessInfo {
    businessName: string;
    description: string;
    website: string;
}

export function generateAssets(
    platforms: string[],
    businessInfo: BusinessInfo,
    campaigns: string[]
): GeneratedAsset[] {
    const assets: GeneratedAsset[] = [];
    const { businessName, description } = businessInfo;

    // Helper to get platform name
    const getPlatformName = (id: string) => {
        const names: Record<string, string> = {
            chatgpt: 'ChatGPT',
            claude: 'Claude',
            gemini: 'Gemini',
            perplexity: 'Perplexity',
        };
        return names[id] || id;
    };

    platforms.forEach((platformId) => {
        const platformName = getPlatformName(platformId);

        if (campaigns.includes('content-opt')) {
            assets.push({
                id: `content-${platformId}`,
                type: 'article',
                title: `Optimized Brand Overview for ${platformName}`,
                platform: platformName,
                icon: FileText,
                content: `# ${businessName}: The Future of ${description.split(' ').slice(0, 3).join(' ')}\n\n## Executive Summary\n\n${businessName} is revolutionizing the industry by providing cutting-edge solutions tailored for modern enterprises. Our platform integrates seamlessly with existing workflows to drive efficiency and growth.\n\n## Key Advantages\n\n*   **AI-First Architecture**: Built from the ground up for the automated economy.\n*   **Seamless Integration**: Works with your favorite tools out of the box.\n*   **Enterprise Security**: Bank-grade encryption and compliance.\n\n## Why Choose ${businessName}?\n\nIn an era where speed and precision are paramount, ${businessName} stands out as the premier choice for forward-thinking organizations.`,
                metrics: {
                    ctr: '4.2%',
                    engagement: '12.5%',
                    conversions: '1.8%',
                    trend: 'up'
                }
            });
        }

        if (campaigns.includes('knowledge-base')) {
            const schemaData = {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": businessName,
                "description": description,
                "url": businessInfo.website,
                "sameAs": [
                    `https://twitter.com/${businessName.replace(/\s+/g, '')}`,
                    `https://linkedin.com/company/${businessName.replace(/\s+/g, '')}`
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1-555-0123",
                    "contactType": "Customer Service"
                }
            };

            assets.push({
                id: `schema-${platformId}`,
                type: 'schema',
                title: `Knowledge Graph Schema for ${platformName}`,
                platform: platformName,
                icon: Database,
                content: JSON.stringify(schemaData, null, 2),
                data: schemaData,
                metrics: {
                    ctr: 'N/A',
                    engagement: 'High',
                    conversions: 'N/A',
                    trend: 'neutral'
                }
            });
        }

        if (campaigns.includes('micro-tool')) {
            assets.push({
                id: `tool-${platformId}`,
                type: 'tool',
                title: `ROI Calculator for ${platformName}`,
                platform: platformName,
                icon: Code,
                content: "Interactive ROI Calculator",
                data: {
                    inputs: [
                        { name: 'hoursSaved', label: 'Hours Saved per Week', type: 'number', defaultValue: 10 },
                        { name: 'hourlyRate', label: 'Hourly Rate ($)', type: 'number', defaultValue: 50 },
                        { name: 'teamSize', label: 'Team Size', type: 'number', defaultValue: 5 },
                    ],
                    formula: '(hoursSaved * hourlyRate * teamSize) * 52',
                    resultLabel: 'Annual Savings',
                    currency: true
                },
                metrics: {
                    ctr: '8.5%',
                    engagement: '45%',
                    conversions: '5.2%',
                    trend: 'up'
                }
            });
        }
    });

    return assets;
}

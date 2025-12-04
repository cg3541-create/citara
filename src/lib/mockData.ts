import { Globe, Zap, MessageSquare, Search } from "lucide-react";

export const platforms = [
    {
        id: "chatgpt",
        name: "ChatGPT",
        icon: MessageSquare,
        color: "text-green-400",
        description: "Optimize for OpenAI's GPT-4 models",
    },
    {
        id: "claude",
        name: "Claude",
        icon: Zap,
        color: "text-orange-400",
        description: "Target Anthropic's Claude 3 family",
    },
    {
        id: "gemini",
        name: "Gemini",
        icon: Globe,
        color: "text-blue-400",
        description: "Reach Google's Gemini ecosystem",
    },
    {
        id: "perplexity",
        name: "Perplexity",
        icon: Search,
        color: "text-teal-400",
        description: "Capture citation-based search traffic",
    },
];

export const campaigns = [
    {
        id: "content-opt",
        title: "Content Optimization",
        description: "Generate citation-friendly articles and schemas.",
    },
    {
        id: "micro-tool",
        title: "Micro-Tool Creation",
        description: "Build interactive tools for function calling.",
    },
    {
        id: "knowledge-base",
        title: "Knowledge Base",
        description: "Enhance structured data for AI training.",
    },
];

export const mockAnalytics = [
    { name: "Mon", mentions: 400, sentiment: 85 },
    { name: "Tue", mentions: 300, sentiment: 88 },
    { name: "Wed", mentions: 550, sentiment: 92 },
    { name: "Thu", mentions: 450, sentiment: 89 },
    { name: "Fri", mentions: 600, sentiment: 95 },
    { name: "Sat", mentions: 350, sentiment: 87 },
    { name: "Sun", mentions: 400, sentiment: 90 },
];

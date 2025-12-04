import Markdown from 'react-markdown';

interface ArticleRendererProps {
    content: string;
}

export function ArticleRenderer({ content }: ArticleRendererProps) {
    return (
        <div className="prose prose-invert max-w-none prose-headings:text-purple-100 prose-p:text-slate-300 prose-strong:text-purple-200 prose-li:text-slate-300">
            <Markdown>{content}</Markdown>
        </div>
    );
}

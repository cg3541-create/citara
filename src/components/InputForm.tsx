
interface InputFormProps {
    formData: {
        businessName: string;
        description: string;
        website: string;
    };
    onChange: (field: string, value: string) => void;
}

export function InputForm({ formData, onChange }: InputFormProps) {
    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <label htmlFor="businessName" className="text-sm font-medium text-slate-300">
                    Business Name
                </label>
                <input
                    id="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => onChange('businessName', e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="e.g. Acme Corp"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="website" className="text-sm font-medium text-slate-300">
                    Website URL
                </label>
                <input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => onChange('website', e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="https://example.com"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium text-slate-300">
                    Business Description
                </label>
                <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => onChange('description', e.target.value)}
                    rows={4}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="Describe your products, services, and target audience..."
                />
            </div>
        </div>
    );
}

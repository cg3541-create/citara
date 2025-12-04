import { useState, useEffect } from 'react';
import { Calculator, RefreshCw } from 'lucide-react';

interface ToolInput {
    name: string;
    label: string;
    type: 'number' | 'text';
    defaultValue: number | string;
}

interface ToolData {
    inputs: ToolInput[];
    formula: string;
    resultLabel: string;
    currency?: boolean;
}

interface InteractiveToolRendererProps {
    data: ToolData;
}

export function InteractiveToolRenderer({ data }: InteractiveToolRendererProps) {
    const [values, setValues] = useState<Record<string, number | string>>({});
    const [result, setResult] = useState<number | null>(null);

    useEffect(() => {
        const initialValues: Record<string, number | string> = {};
        data.inputs.forEach(input => {
            initialValues[input.name] = input.defaultValue;
        });
        setValues(initialValues);
    }, [data]);

    useEffect(() => {
        if (Object.keys(values).length === 0) return;

        try {
            // Safe evaluation of simple math formulas
            // In a real app, use a proper math parser
            const formula = data.formula;
            const evalFn = new Function(...Object.keys(values), `return ${formula}`);
            const res = evalFn(...Object.values(values));
            setResult(res);
        } catch (e) {
            console.error('Calculation error', e);
            setResult(null);
        }
    }, [values, data.formula]);

    const handleChange = (name: string, value: string) => {
        setValues(prev => ({
            ...prev,
            [name]: Number(value)
        }));
    };

    return (
        <div className="rounded-lg border border-white/10 bg-slate-900/50 p-6">
            <div className="mb-6 flex items-center gap-2 text-purple-400">
                <Calculator className="h-5 w-5" />
                <span className="font-semibold">Interactive Preview</span>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                    {data.inputs.map((input) => (
                        <div key={input.name} className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">
                                {input.label}
                            </label>
                            <input
                                type="number"
                                value={values[input.name] || ''}
                                onChange={(e) => handleChange(input.name, e.target.value)}
                                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white transition-colors focus:border-purple-500 focus:outline-none"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col justify-center rounded-xl bg-purple-500/10 p-6 text-center">
                    <span className="mb-2 text-sm font-medium text-purple-300">
                        {data.resultLabel}
                    </span>
                    <div className="text-4xl font-bold text-white">
                        {result !== null ? (
                            data.currency ?
                                new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(result) :
                                result.toLocaleString()
                        ) : (
                            <RefreshCw className="mx-auto h-8 w-8 animate-spin opacity-50" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

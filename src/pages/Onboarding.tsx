import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { PlatformSelector } from '../components/PlatformSelector';
import { InputForm } from '../components/InputForm';
import { CampaignSelector } from '../components/CampaignSelector';
import { cn } from '../lib/utils';

const STEPS = [
    { id: 'platforms', title: 'Select Platforms', description: 'Choose where you want to optimize your brand.' },
    { id: 'business', title: 'Business Details', description: 'Tell us about your company and products.' },
    { id: 'campaigns', title: 'Choose Campaigns', description: 'Select the type of optimization you need.' },
    { id: 'generating', title: 'Generating Assets', description: 'AI is analyzing and creating your content.' },
];

export function Onboarding() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
    const [businessInfo, setBusinessInfo] = useState({
        businessName: '',
        description: '',
        website: '',
    });
    const [selectedCampaigns, setSelectedCampaigns] = useState<string[]>([]);
    // const [isGenerating, setIsGenerating] = useState(false);

    const handleNext = () => {
        if (currentStep < STEPS.length - 1) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    // Simulation of asset generation
    useEffect(() => {
        if (currentStep === 3) {
            // setIsGenerating(true);
            const timer = setTimeout(() => {
                // Save data for dashboard
                localStorage.setItem('citara_platforms', JSON.stringify(selectedPlatforms));
                localStorage.setItem('citara_business', JSON.stringify(businessInfo));
                localStorage.setItem('citara_campaigns', JSON.stringify(selectedCampaigns));

                // setIsGenerating(false);
                navigate('/dashboard');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [currentStep, navigate]);

    const togglePlatform = (id: string) => {
        setSelectedPlatforms(prev =>
            prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
        );
    };

    const toggleCampaign = (id: string) => {
        setSelectedCampaigns(prev =>
            prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
        );
    };

    const updateBusinessInfo = (field: string, value: string) => {
        setBusinessInfo(prev => ({ ...prev, [field]: value }));
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 0:
                return <PlatformSelector selectedPlatforms={selectedPlatforms} onToggle={togglePlatform} />;
            case 1:
                return <InputForm formData={businessInfo} onChange={updateBusinessInfo} />;
            case 2:
                return <CampaignSelector selectedCampaigns={selectedCampaigns} onToggle={toggleCampaign} />;
            case 3:
                return (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                        <div className="relative mb-6">
                            <div className="absolute inset-0 animate-ping rounded-full bg-purple-500/20"></div>
                            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-purple-500/10 text-purple-500">
                                <Loader2 className="h-10 w-10 animate-spin" />
                            </div>
                        </div>
                        <h3 className="mb-2 text-2xl font-bold text-white">Optimizing Your Brand</h3>
                        <p className="max-w-md text-slate-400">
                            We're analyzing your business and generating optimized content for the selected AI platforms...
                        </p>

                        <div className="mt-8 w-full max-w-md space-y-3">
                            <div className="flex items-center gap-3 text-sm text-slate-300">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                <span>Analyzing website content</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-300">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                <span>Generating knowledge schemas</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-300">
                                <Loader2 className="h-4 w-4 animate-spin text-purple-500" />
                                <span>Creating interactive micro-tools</span>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto max-w-3xl px-4 py-12">
            {/* Progress Steps */}
            <div className="mb-12">
                <div className="flex items-center justify-between">
                    {STEPS.map((step, index) => {
                        const isActive = index === currentStep;
                        const isCompleted = index < currentStep;

                        return (
                            <div key={step.id} className="flex flex-1 flex-col items-center">
                                <div className={cn(
                                    "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-bold transition-all",
                                    isActive ? "border-purple-500 bg-purple-500 text-white" :
                                        isCompleted ? "border-purple-500 bg-purple-500 text-white" :
                                            "border-slate-700 bg-slate-800 text-slate-500"
                                )}>
                                    {isCompleted ? <CheckCircle2 className="h-5 w-5" /> : index + 1}
                                </div>
                                <span className={cn(
                                    "mt-2 text-xs font-medium transition-colors hidden sm:block",
                                    isActive ? "text-white" : "text-slate-500"
                                )}>
                                    {step.title}
                                </span>
                            </div>
                        );
                    })}
                </div>
                <div className="relative mt-4 h-1 w-full rounded-full bg-slate-800">
                    <div
                        className="absolute h-full rounded-full bg-purple-500 transition-all duration-500"
                        style={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}
                    />
                </div>
            </div>

            {/* Step Content */}
            <div className="mb-8">
                <h2 className="mb-2 text-3xl font-bold text-white">{STEPS[currentStep].title}</h2>
                <p className="text-slate-400">{STEPS[currentStep].description}</p>
            </div>

            <div className="min-h-[400px] rounded-2xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-sm">
                {renderStepContent()}
            </div>

            {/* Navigation Buttons */}
            {currentStep < 3 && (
                <div className="mt-8 flex justify-between">
                    <button
                        onClick={handleBack}
                        disabled={currentStep === 0}
                        className={cn(
                            "flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-colors",
                            currentStep === 0
                                ? "cursor-not-allowed text-slate-600"
                                : "text-slate-300 hover:bg-white/5 hover:text-white"
                        )}
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={
                            (currentStep === 0 && selectedPlatforms.length === 0) ||
                            (currentStep === 1 && !businessInfo.businessName) ||
                            (currentStep === 2 && selectedCampaigns.length === 0)
                        }
                        className="flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-bold text-slate-950 transition-all hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {currentStep === 2 ? 'Generate Assets' : 'Continue'}
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            )}
        </div>
    );
}

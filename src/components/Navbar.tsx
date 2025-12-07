import { Link } from 'react-router-dom';
import { CitaraLogo } from './CitaraLogo';
import { cn } from '../lib/utils';

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link to="/" className="flex items-center gap-3 text-xl font-bold text-white group">
                    <CitaraLogo className="w-8 h-8 transition-transform group-hover:scale-110 duration-300" />
                    Citara
                </Link>
                <div className="flex items-center gap-6">
                    <Link to="/features" className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
                        Features
                    </Link>
                    <Link to="/pricing" className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
                        Pricing
                    </Link>
                    <Link to="/about" className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
                        About
                    </Link>
                    <Link
                        to="/onboarding"
                        className={cn(
                            "rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition-all hover:bg-slate-200",
                            "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                        )}
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
}

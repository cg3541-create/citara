import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { StarBackground } from './StarBackground';

export function Layout() {
    return (
        <div className="min-h-screen text-slate-200 antialiased selection:bg-purple-500/30">
            <StarBackground />
            <Navbar />
            <main className="pt-20">
                <Outlet />
            </main>
            <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
                <p>&copy; 2025 Citara AI. All rights reserved.</p>
            </footer>
        </div>
    );
}

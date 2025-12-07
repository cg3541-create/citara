import { motion } from 'framer-motion';

export function CitaraLogo({ className = "w-8 h-8" }: { className?: string }) {
    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                <defs>
                    <linearGradient id="logo-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#a855f7" /> {/* purple-500 */}
                        <stop offset="1" stopColor="#3b82f6" /> {/* blue-500 */}
                    </linearGradient>
                </defs>

                {/* Main 4-point star */}
                <motion.path
                    d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                    stroke="url(#logo-gradient)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* Central glow/dot */}
                <motion.circle
                    cx="12"
                    cy="12"
                    r="1"
                    fill="white"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                />
            </svg>

            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full -z-10" />
        </div>
    );
}

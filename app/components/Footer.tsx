"use client";

import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon, GlobeAltIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa"; // Assuming react-icons is available or will be installed

export function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative py-6.5 sm:py-9 border-t border-gray-600 bg-transparent text-white"
        >
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-end">
                    {/* Left Section */}
                    <div className="text-center lg:text-left">
                        <div className="text-white mb-3 text-xl sm:text-2xl font-bold">SPKZ</div>
                        <p className="text-gray-300 text-sm sm:text-base">The Speakeasy Token</p>
                    </div>

                    {/* Center Section */}
                    <div className="text-center">
                          

                        <p className="text-gray-300 mb-3 text-base sm:text-lg">
                            Part of the{" "}
                            <a
                                href="https://www.Mostro.xyz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-400 transition-colors duration-300"
                            >
                                Mostro.xyz
                            </a>{" "}
                            ecosystem
                        </p>
                        <p className="text-gray-400 text-sm sm:text-base opacity-70">
                            © 2025 SPKZ. Built on Solana via Pump.fun
                        </p>
                    </div>

                    {/* Right Section - Links */}
                    <div className="text-center lg:text-right">

                        <p className="text-gray-400 text-xs sm:text-sm opacity-70 leading-tight">
                            SPKZ token is a utility token and not a financial instrument.<br className="hidden sm:block" />
                            Nothing on this site constitutes financial advice.
                        </p>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}

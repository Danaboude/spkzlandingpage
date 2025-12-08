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
                           <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-center gap-1 sm:gap-2 md:gap-3 mb-4">
                            <a
                                href="https://pump.fun/"
                                className="flex items-center gap-1 sm:gap-2 md:gap-3 px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-[#8AD4F7] hover:bg-blue-400 rounded-lg transition-all duration-300 text-black hover:text-gray-800 text-xs sm:text-sm md:text-base font-medium hover:scale-105"
                                title="Pump.fun link"
                            >
                                <GlobeAltIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                Pump.fun
                            </a>
                            <a
                                href="https://www.Revelcy.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 sm:gap-2 md:gap-3 px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-[#8AD4F7] hover:bg-blue-400 rounded-lg transition-all duration-300 text-black hover:text-gray-800 text-xs sm:text-sm md:text-base font-medium hover:scale-105"
                            >
                                <ArrowTopRightOnSquareIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                Revelcy
                            </a>
                            <a
                                href="https://x.com/mostroxyz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 sm:gap-2 md:gap-3 px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-[#8AD4F7] hover:bg-blue-400 rounded-lg transition-all duration-300 text-black hover:text-gray-800 text-xs sm:text-sm md:text-base font-medium hover:scale-105"
                            >
                                <XMarkIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                Twitter/X
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-1 sm:gap-2 md:gap-3 px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-[#8AD4F7] hover:bg-blue-400 rounded-lg transition-all duration-300 text-black hover:text-gray-800 text-xs sm:text-sm md:text-base font-medium hover:scale-105"
                                title="Gated Discord (coming soon)"
                            >
                                <FaDiscord className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> {/* Using react-icons for Discord */}
                                Discord
                            </a>
                        </div>

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

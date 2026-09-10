"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "lime" | "outline" | "white" | "outline-white";
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-between gap-3 px-6 py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none cursor-pointer select-none active:scale-[0.98] group";

  const variants = {
    primary: "bg-[#1d6ff0] text-white hover:bg-[#1255cc] shadow-[#1d6ff0]/20 hover:shadow-[#1d6ff0]/30",
    secondary: "bg-[#152956] text-white hover:bg-[#0f1d3e] shadow-[#152956]/20",
    lime: "bg-[#9ac936] text-white hover:bg-[#8bb42f] shadow-[#9ac936]/20",
    outline: "border-2 border-[#1d6ff0] text-[#1d6ff0] bg-transparent hover:bg-[#1d6ff0] hover:text-white hover:shadow-[#1d6ff0]/25",
    white: "bg-white text-[#152956] border border-slate-200/80 hover:bg-slate-50 shadow-brand-950/10",
    "outline-white": "border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#1d6ff0] hover:shadow-white/20",
  };

  const content = (
    <>
      <span className="tracking-wide">{children}</span>
      <motion.div
        className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 text-current group-hover:bg-white group-hover:text-primary transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
      </motion.div>
    </>
  );

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
}


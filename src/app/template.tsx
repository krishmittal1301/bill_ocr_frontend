"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.75 }}
        >
          {children}
        </motion.div>
  );
}

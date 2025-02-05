'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"

import { Input } from "@/components/ui/input"
import Link from "next/link"
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function ShoppingCart() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div 
      className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h1 className="mb-12 text-3xl font-normal" variants={itemVariants}>Your shopping cart</motion.h1>
      
      {/* Header */}
      <motion.div className="hidden grid-cols-[2fr,1fr,1fr] gap-4 border-b pb-4 text-sm text-gray-500 md:grid" variants={itemVariants}>
        <div>Product</div>
        <div className="text-center">Quantity</div>
        <div className="text-right">Total</div>
      </motion.div>

      {/* Products */}
      <motion.div className="divide-y" variants={containerVariants}>
        {/* Graystone vase */}
        <motion.div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-[2fr,1fr,1fr]" variants={itemVariants}>
          <div className="flex gap-4">
            <motion.div 
              className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/grass.png"
                alt="Graystone vase"
                fill
                className="object-cover"
              />
            </motion.div>
            <div>
              <h3 className="text-lg font-normal">Graystone vase</h3>
              <p className="mt-1 text-sm text-gray-500">
                A timeless ceramic vase with a tri color grey glaze.
              </p>
              <p className="mt-1 text-sm">£85</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Input
              type="number"
              min="1"
              defaultValue="1"
              className="w-20 text-center transition-all duration-300 focus:ring-2 focus:ring-[#2A254B] focus:border-transparent"
            />
          </div>
          <div className="flex items-center justify-end text-lg">£85</div>
        </motion.div>

        {/* Basic white vase */}
        <motion.div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-[2fr,1fr,1fr]" variants={itemVariants}>
          <div className="flex gap-4">
            <motion.div 
              className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/bottle.png"
                alt="Basic white vase"
                fill
                className="object-cover"
              />
            </motion.div>
            <div>
              <h3 className="text-lg font-normal">Basic white vase</h3>
              <p className="mt-1 text-sm text-gray-500">
                Beautiful and simple this is one for the classics
              </p>
              <p className="mt-1 text-sm">£85</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Input
              type="number"
              min="1"
              defaultValue="1"
              className="w-20 text-center transition-all duration-300 focus:ring-2 focus:ring-[#2A254B] focus:border-transparent"
            />
          </div>
          <div className="flex items-center justify-end text-lg">£125</div>
        </motion.div>
      </motion.div>

      {/* Summary */}
      <motion.div className="mt-8 space-y-4 border-t pt-8" variants={containerVariants}>
        <motion.div className="flex justify-end gap-4 text-lg" variants={itemVariants}>
          <span>Subtotal</span>
          <span>£210</span>
        </motion.div>
        <motion.p className="text-right text-sm text-gray-500" variants={itemVariants}>
          Taxes and shipping are calculated at checkout
        </motion.p>
        <motion.div className="flex justify-end" variants={itemVariants}>
          <Link href="/">
            <Button 
              className="rounded-none bg- px-8 text-white  bg-slate-600 hover:bg-slate-900 /90 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Go to checkout
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
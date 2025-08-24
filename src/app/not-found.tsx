'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Triangle } from 'lucide-react';

export default function NotFoundPage() {
  const router = useRouter();

  // Triangle positions for decorative motion
  const triangles = [
    { x: -100, y: -50, rotate: 0 },
    { x: 120, y: -80, rotate: 45 },
    { x: -80, y: 120, rotate: 30 },
    { x: 100, y: 100, rotate: -20 },
  ];

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-background px-4 relative overflow-hidden">
      
      {/* Background Triangles */}
      {triangles.map((t, i) => (
        <motion.div
          key={i}
          className="absolute text-orange-400 opacity-50"
          initial={{ x: t.x, y: t.y, rotate: t.rotate, scale: 0 }}
          animate={{ x: t.x + 10, y: t.y + 10, rotate: t.rotate + 360, scale: 1 }}
          transition={{ duration: 3 + i, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        >
          <Triangle size={40} />
        </motion.div>
      ))}

      {/* 404 Heading */}
      <motion.h1
        className="text-8xl md:text-[12rem] font-extrabold text-center bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent"
        initial={{ scale: 0, rotate: -20, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        404
      </motion.h1>

      {/* Oops Text */}
      <motion.p
        className="text-2xl md:text-3xl mb-8 text-center text-gray-900 font-semibold max-w-2xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
      >
        Oops! The page you are looking for doesn’t exist. Maybe you took a wrong turn?
      </motion.p>

      {/* Buttons */}
      <div className="flex gap-4">
        <motion.div
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            style={{ backgroundColor: '#FF6B1B', color: 'white' }}
            onClick={() => router.back()}
          >
            Go Back
          </Button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            style={{ backgroundColor: '#FF6B1B', color: 'white' }}
            onClick={() => router.push('/')}
          >
            Home
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

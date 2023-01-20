import { motion } from 'framer-motion';
import Photos from '../images/bwphotos.png'

export default function Hero() {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#c0c0c0'] text-5xl font-bold">
            Memories
        </h3>
        
        <motion.img
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            src={Photos} alt="vintage photos" className="md:-0 flex-shrink-0 w-56 h-56 object-cover md:rounded-none md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Share your favorite moments.</h4>
            <p className="text-sm">A place to share your favorite memories as a collection of photos for others to see.</p>
        </div>
    
    </div>
  );
}
// src={Photos} alt="vintage photos" className="mt-20 md:-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
// src/pages/Home.jsx
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const images = [
  '/images/background.jpg',
  '/images/boys.jpg',
  '/images/girls.jpg',
  '/images/boys1.jpg'
];

const Home = () => {
  const controls = useAnimation();
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const animateImages = async () => {
      try {
        while (true) {
          // Fade in the current image
          await controls.start({ opacity: 1, transition: { duration: 1 } });

          // Wait for 2 seconds before starting to fade out
          await new Promise(resolve => setTimeout(resolve, 2000));

          // Fade out the current image
          await controls.start({ opacity: 0, transition: { duration: 1 } });

          // Update the current image
          setCurrentImage(prevImage => (prevImage + 1) % images.length);

          // Wait for 1 second before fading in the next image
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      } catch (error) {
        console.error('Error during animation:', error);
      }
    };

    // Start animation after component mounts
    animateImages();

    // Cleanup animation on component unmount
    return () => controls.stop();
  }, [controls]);

  return (
    <div className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        animate={controls}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      />
      <div className="z-10 text-center space-y-6 p-6 bg-black bg-opacity-50 rounded-lg">
        <motion.h1 
          className="text-4xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          مرحباً بكم في نادي الرشاد البرحيلي
        </motion.h1>
        <motion.p 
          className="text-xl lg:text-2xl text-white mb-8 drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          نحن نعمل على بناء مستقبل أفضل لكرة القدم
        </motion.p>
        <motion.a
          href="/new-player"
          className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-500 transition-colors transform hover:scale-105"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          انضم إلينا الآن
        </motion.a>
      </div>
    </div>
  );
};

export default Home;

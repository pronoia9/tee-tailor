import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store/index';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header>
            <img className='w-8 h-8 object-contain' src='./logo.png' alt='logo' />
          </motion.header>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;

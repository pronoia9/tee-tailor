import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import config from '../config/config';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components';
import { download } from '../assets';

const Customizer = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div className='absoule top-0 left-0 z-10' key='custom' {...slideAnimation('left')}>
            <div className='flex items-center min-h-screen'>
              <div className='editortabs-container tabs'>
                {EditorTabs.map((tab) => (
                  <Tab key={tab.name} tab={tab} handleClick={() => {}} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className='absolute z-10 top-5 right-5' {...fadeAnimation}>
            <CustomButton
              type='filled'
              title='Go Back'
              handleClick={() => (state.intro = true)}
              customStyles='w-fit px-4 py-2.5 font-bold text-sm'
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;

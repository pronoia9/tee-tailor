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
  return <div>Customizer</div>;
};

export default Customizer;

import React from 'react';

import CustomButton from './CustomButton';

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className='filepicker-container'>
      <div className='flex-1 flex-col'>
        <input id='file-upload' type='file' accept='image/*' onChange={(e) => setFile(e.target.files[0])} />
        <label className='filepicker-label' htmlFor='file-upload'>Upload File</label>

        <p className='mt-2 text-gray-500 text-xs truncate'>{file === '' ? 'No file selected' : file.name}</p>
      </div>
    </div>
  );
};

export default FilePicker;

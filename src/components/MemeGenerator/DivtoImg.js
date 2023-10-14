import React from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const DivtoImg = ({divToCaptureRef}) => {
//   const divToCaptureRef = useRef(null);

  const handleDownload = async () => {
    
    const divToCapture = divToCaptureRef.current;

    if (!divToCapture) return;

    try {
        const canvas = await html2canvas(divToCapture, { useCORS: true });

      // Convert the canvas to a data URL (JPG format)
      const dataURL = canvas.toDataURL('image/jpeg');

      // Create a Blob from the data URL
      const blob = await fetch(dataURL).then((res) => res.blob());

      // Save the Blob as a file
      saveAs(blob, 'captured-image.jpg');
    } catch (error) {
      console.error('Error capturing and downloading:', error);
    }
  };

  return (
    <div className='download-button'>
      <button onClick={handleDownload}>Download as JPG</button>
    </div>
  );
};

export default DivtoImg;

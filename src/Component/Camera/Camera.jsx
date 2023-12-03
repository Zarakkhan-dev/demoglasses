import { useEffect, useRef } from 'react';

import SliderGlasses from  "../SliderGlasses/SliderGlasses"
const Camera = () => {
  const videoRef = useRef();

  useEffect(() => {
    const getMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          console.log("camera is on ")
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    getMedia();
  }, []);
  
  return (
    <div className='screen'>
      <div className="VideoFrame">
      <video ref={videoRef} className='Video-Display' ></video>
      </div>
      <div className="Frames-image">
    <SliderGlasses/>
    </div>
    </div>
  );
};

export default Camera;

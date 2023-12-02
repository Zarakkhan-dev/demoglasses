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
      <div className="img-glasses">
    {/* <SliderGlasses/> */}
    </div>
    </div>
  );
};

export default Camera;

import { useState } from "react";

const RandomColor = () => {

  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [color, setColor] = useState('#000000')


  return (
    <div
      className='text-center mt-20'
      style={{
        height: '100vh',
        width: '100vw',
        background: color,
      }}
    >
      <button className='mt-10 mr-2 px-2 py-1 rounded-lg bg-white cursor-pointer hover:bg-amber-100'>
        Generate Hexa Color
      </button>
      <button className='mt-10 mr-2 px-2 py-1 rounded-lg bg-white cursor-pointer hover:bg-amber-100'>
        Generate RGB Color
      </button>
      <button className='mt-10 mr-2 px-2 py-1 rounded-lg bg-white cursor-pointer hover:bg-amber-100'>
        Generate Random Color
      </button>
    </div>
  );
}
export default RandomColor;
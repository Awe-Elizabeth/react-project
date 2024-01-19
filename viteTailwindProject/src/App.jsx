import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with tailwind</h1>
//       <Card username = "Lizzy" post='Software Developer' url='https://images.pexels.com/photos/7606074/pexels-photo-7606074.jpeg?auto=compress&cs=tinysrgb&w=600'/>
      
//     </>
//   )
// }

function App (){
  const [color, setColor] = useState('olive');

  // function changeColor (color){
  //   setColor(color);
  // }

  return(
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap, justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor('red')}
           className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' 
           style={{backgroundColor: 'red'}}
          >Red</button>
          <button onClick={() => setColor('green')} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' style={{backgroundColor: 'green'}}
          >Green</button>
          <button onClick={() => setColor('blue')} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' style={{backgroundColor: 'blue'}}
          >blue</button>
          <button onClick={() => setColor('orange')} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' style={{backgroundColor: 'orange'}}
          >orange</button>
          <button onClick={() => setColor('purple')} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' style={{backgroundColor: 'purple'}}
          >purple</button>
          <button onClick={() => setColor('grey')} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' style={{backgroundColor: 'grey'}}
          >grey</button>
        </div>
      </div>
    </div>
  )
}

export default App

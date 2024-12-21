import axios from 'axios'
import React, { useState } from 'react'

const App = () => {
  const [images, setimages] = useState([])

  const submitHandler = async ()=> {

    const response = await axios.get('https://picsum.photos/v2/list')
    console.log(response.data);
    setimages(response.data);
    
    
  }

  return (
    <div className='p-10'>
      <button className='px-16 py-2 rounded-md bg-blue-500 text-white text-2xl ml-60' onClick={()=>{
        submitHandler()
      }}>Get DATA </button>
      <div className='p-5'>
        {images.map(function(info){
          return <div className='flex justify-between p-7 bg-gray-200 items-center mb-3 rounded-md'>
            <img className='h-60 w-60 rounded-xl object-cover object-center' src={info.download_url} alt="" />
            <h1 className=' text-2xl font-medium'>{info.author}</h1>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
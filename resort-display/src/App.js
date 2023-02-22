import React, {useState,useEffect}from 'react';
import Loading from './Loading';
import Resorts from './Resorts';

const url = 'https://course-api.com/react-tours-project'


function App() {
  const [loading, setloading] = useState(true);
  const [resorts, setResorts] = useState([]);
  const removeResort = (id) => {
    const newResort = resorts.filter((resort) => resort.id !== id)
    setResorts(newResort)
    
  }
  const fetchResort = async ()=>{
    try {
      setloading(true);
      const response =await fetch(url)
      const resorts = await response.json()
      setloading(false);
      setResorts(resorts);
      console.log(resorts)
      
    } catch (error) {
      setloading(false)
      console.log(error)
    }
  }
  useEffect (()=>{
    fetchResort();
  },[]) 
  if (loading){
    return(
      <main>
        <Loading />
      </main>
    )
  }
  if (resorts.length === 0){
    return(
      <main>
        <div>
          <h2 className='title'>there are no more items left..</h2>
          <button className='btn' onClick={()=> fetchResort ()}>Refresh</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Resorts resorts = {resorts} removeResort= {removeResort} />
    </main>
  )
}

export default App
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main1 from './Main1'
import Barside from './Barside'
import Footer from './Footer'

function App() {
  const [data,setData]=useState(null)
  const[loading,setLoading]=useState(false)

  const [showmodal, setshowmodal] = useState(false)
  function handleshowmodal(){
    setshowmodal(!showmodal)
  }
  
  useEffect(()=>{
    const NASA_KEY=import.meta.env.VITE_NASA_API_KEY
    async function fetchAPIData(){
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
      const today=(new Date()).toDateString()
      const localkey=`NASA-${today}`
      if(localStorage.getItem(localkey)){
        const apiData=JSON.parse(localStorage.getItem(localkey))
        setData(apiData)
        return
      }
      localStorage.clear()
    try{
      const res = await fetch(url)
      const apiData= await res.JSON()
      setData(apiData)
      localStorage. setItem(localkey,jSON.stringify(apiData))     
      console.log(data)

    }
    catch(err){
      console.log(err)
    }
    }
    fetchAPIData()
    console.log(data);
    
  }
,[])

  return (
    <> 
    {data !=null?(<Main1 data={data}/>):
    <div className='loadingState'>
      <i className='fa-solid fa-gear'></i>


    </div>
    }
    
     {showmodal  && (<Barside
     data={data} 
     handleshowmodal={handleshowmodal}/>)}
     
      {data &&(<Footer showmodal={showmodal} handleshowmodal={handleshowmodal}
      data={data}/>)}
    
    </>
  )
}

export default App

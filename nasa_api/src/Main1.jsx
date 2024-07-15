

function Main1(props) {
  const{data}=props
  return (
    
    <div className="imagecontainer">
      <img className="backgroundimage" src={data.hdurl } alt={data.title||'bgimage'}></img>

    </div>
        
   
  )
}

export default Main1
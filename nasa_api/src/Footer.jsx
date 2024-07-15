

function Footer(props) {
  const{showmodal,handleshowmodal,data}=props;
  return (
    <footer>
      <div className="bggradient">
        <div>
        <h2>{data.title}</h2>
        <h1>APOD PROJECT</h1>
         </div>
        <button onClick={handleshowmodal}>
          
          <i className="fa-solid fa-circle-info"></i>
            
        </button>
        </div>
   

    </footer>
    
  )
}

export default Footer
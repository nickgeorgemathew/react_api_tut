

function Barside(props) {
  const{handleshowmodal,data}=props;
  return (
   
    <div className="sidebar">
       <div className="bgoverlay">
      
      </div>
      <div className="sidebarcontents"> 
        <h2>{data.date}</h2>
      <div className="descriptionContainer">
     
      <p className="description">description</p>
      <p>{data.explanation}</p>
    </div>
    <button onClick={handleshowmodal}>
      
      <i className="fa-solid fa-arrow-right"></i>
    </button>
    </div>
    </div>
  )
}

export default Barside
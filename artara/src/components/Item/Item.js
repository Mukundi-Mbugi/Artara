import React from "react";
import { useEffect } from "react";

function Item({ image, showCard,setShowCard }) {
  return (
    <div key={image.id} className="image" >
          <img src={image.url} alt="avatar" id="avatar" onClick={() => setShowCard(!showCard)}/>
    {showCard ? <div>
      <div className="card" key={image.id}>
        <div className="card-image">
          <h4>{image.title}</h4>
          <img src={image.url} alt="avatar" id="avatar" />
        </div>
      </div>
    </div>: null}
    </div>
  )
}

export default Item;

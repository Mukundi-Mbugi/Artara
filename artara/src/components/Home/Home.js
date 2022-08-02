import React from "react";
import Navbar from "../Navbar/Navbar";
import './Home.css'
import Item from "../Item/Item";
import {useEffect} from "react";

function Home({images}) {
  function showImage(img) {
    console.log(img);
  }

  console.log(images);
  return (
    <div className="container gallery-container">
      {images.map(image => (
        <div key={image.id} className="image" onClick={showImage}>
          <img src={image.url} alt="avatar" id="avatar" />
          {/* <Item image={image} showImage={showImage} /> */}
        </div>
        
      ))}
    </div>
  );
}

export default Home;

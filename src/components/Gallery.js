import React from "react";
import { useEffect, useState } from "react";

const Gallery = ()=>{
    const[ImageDatas, setImageData] = useState([]);

  const getImage = async() =>{
    const ImageData = await fetch('https://api.unsplash.com/photos/?client_id=9oGtm_Gg7WnqSt8upbTQYIlXBxKWgQjkpOXDWDRI9UA');
    const ImageResponse = await ImageData.json();
    setImageData(ImageResponse);
  }
  useEffect(() =>{
    getImage();
  }, [] );
  return(
    <div className="w-[100vw] flex items-center justify-center min-h-10">
        <div className="w-[70%] grid grid-cols-4 gap-5">
          {ImageDatas.map((image,index)=>
          <div className=" h-30 w-35">
             <img src={image.links.download}></img>
          </div>
          )}  
        </div>
      </div>
  );
}

export default Gallery;
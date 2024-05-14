import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";
import "bootstrap/dist/css/bootstrap.css"

const Gallery = ({picture}) => {
   const { pic, setPic } = useContext(GalleryContext);

   const likeOption = (id) => {
    const likedPic = pic.map(picture => {
      if (picture.id === id) {
        return {
          ...picture, liked: !picture.liked
        };
      }
      return picture;
    });

    setPic (likedPic);
   }

    return (
        <>
        <div className=" col-md-3 p-3 ">
            <div className=" container">
                <img className="foto" src={picture.src.tiny} />
                <img className="top-right" onClick={() => {
                  likeOption(picture.id)}
                  } 
                  src = {
                    picture.liked 
                    ? "src/assets/icons/heart-filled.svg"
                    : "src/assets/icons/heart.svg"
                  } />
                
                    <p className="card-text centered">{picture.alt}</p>
                </div>
            </div> 
        </>
    );




};
export default Gallery;

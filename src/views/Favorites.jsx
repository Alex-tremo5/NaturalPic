import Gallery from "../components/Gallery";
import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";

const Favorites = () => {
  const { pic } = useContext(GalleryContext)
  return (
    <div className="App">
      <h1>Favorite photos</h1>
      <div className="row m-1">
        {pic && 
          pic.filter(picture => picture.liked == true).map((picture) => (
            <Gallery picture={picture} key={picture.id} />
          ))
        }
      </div>
    </div>
  );
};
export default Favorites;
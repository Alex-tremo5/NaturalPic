import Gallery from "../components/Gallery";
import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";

const Home = () => {

  const {pic} = useContext(GalleryContext)
  return (
    <div className="App ">
      <h1>Natural Pic</h1>
    <div className="  row m-1">
        {pic && pic.map(picture =>(
        <Gallery picture={picture} key={picture.id}/>        
       ))}
    </div>
    </div>
  );
};


export default Home;




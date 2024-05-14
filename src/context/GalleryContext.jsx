import { createContext, useEffect, useState } from "react";
import photos from "../assets/json/photos.json";

export const GalleryContext = createContext();

const GalleryProvider = ({children}) => {
    const [pic, setPic] = useState([]);

    useEffect(() => {
        // const {pic = []} = {...photos};
        setPic(photos.photos)
    }, []);

    const values = {pic,setPic};
    return <GalleryContext.Provider value={values}> {children}</GalleryContext.Provider>
};

export default GalleryProvider;
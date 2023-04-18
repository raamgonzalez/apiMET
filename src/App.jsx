import { useEffect, useState } from "react";
import { getRandomPicture } from "./services/getRandomPicture";
import './styles.css'
import { usePictureData } from "./hooks/usePictureData";
import AditionalsImages from "./components/AditionalsImages";


export function App () {
    const [searchPicture, setSearchPicture] = useState()
    const {picture, loading} = usePictureData()

    // const {title, primaryImage, additionalImages} = picture

    return (
        <>
            <main>
                <h1>ApiMOMA</h1>

                {/* <input type="text" onChange={(e) => setSearchPicture(e.target.value)} /> */}
                {loading? <h1>Loading...</h1> : null}
                    <section>
                        {/* <h2>{picture.artistDisplayName}</h2> */}
                        <p>{picture.title}</p>
                        {
                            picture.primaryImage? <img src={picture.primaryImage} alt={`Work done by ${picture.artistDisplayName}, by name ${picture.title} `} /> : 'No hay imagen'
                        }
                        <AditionalsImages picture={picture}/>   
                    </section>
            </main>
        </>
    );
}
import { useState } from "react";
import { getRandomPicture } from "./services/getRandomPicture";
import './index.css'
import { usePictureData } from "./hooks/usePictureData";
import AditionalsImages from "./components/AditionalsImages";
import InformationNav from "./components/InformationNav";


export function App () {
    const {picture, loading, setPicture} = usePictureData()

    const handleRandomPicture = async () => {
        const newPicture = await getRandomPicture()
        setPicture(newPicture)
    }

    return (
        <>
            <h1 className="text__font text-4xl my-10 font-light">Api<span className="block my-2">MOMA</span></h1>
            <button className="hover:underline bg-red-200 p-2 hover:scale-95" onClick={handleRandomPicture}>Random picture</button>
            <main className="m-0 flex flex-row justify-center align-top gap-20">
                {/* <input type="text" onChange={(e) => setSearchPicture(e.target.value)} /> */}
                {loading? <h1>Loading...</h1> : null}
                    <section className="modify__width my-15 text-left self-start grow-0">
                        <h2 className="text-2xl mb-2">Artist: <span className="ml-1 italic underline">{picture.artistDisplayName || 'Unknown artist'}</span></h2>
                        <p className= "text-2xl">Title: <span className="ml-1 italic">{picture.title}</span></p>
                        <p className="text-2xl">Date: <span className="ml-1 italic">{picture.objectDate}</span></p>
                        {
                            picture.primaryImage? <img className="my-10 italic shadow-xl" src={picture.primaryImage} alt={`Work done by ${picture.artistDisplayName}, by name ${picture.title} `} /> : 'No image found'
                        }
                        <AditionalsImages picture={picture}/>   
                    </section>
                    <InformationNav picture={picture}/>
            </main>
        </>
    );
}
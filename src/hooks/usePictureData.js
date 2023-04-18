import {useEffect, useState} from 'react'
import { getRandomPicture } from '../services/getRandomPicture'

export function usePictureData(){

    const [picture, setPicture] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
            getRandomPicture()
            .then((picture) => {
                setPicture(picture)
                setLoading(false)
            })
    },[])

    return {picture, loading, setPicture}
}


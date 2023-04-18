const DATABASE_ENDPOINT = `https://collectionapi.metmuseum.org/public/collection/v1/objects`


export const getRandomPicture = async () => {

    const randomId =  () => Math.floor(Math.random() * 471581)
    
    try {
        const res =  await fetch(`${DATABASE_ENDPOINT}/${randomId()}`)    
        const data = await res.json()
        
        if(res.status === 404){
            return getRandomPicture()
        }
        return data
    }
    catch (error) {
        console.log('error', error)
    }
}



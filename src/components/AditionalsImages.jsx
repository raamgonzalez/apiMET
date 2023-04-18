import React from 'react'

const AditionalsImages = (props) => {

    const {picture: {additionalImages}, title} = props

    
    return (
        <section className='flex flex-row flex-wrap gap-5 mb-36'>
            { 
                additionalImages && additionalImages.map((image, index) => <img src={image} alt={`Image additional by title ${title}`} key={index}/>)
            }
        </section>
    )
}

export default AditionalsImages
import React from 'react'

const AditionalsImages = (props) => {

    const {picture: {additionalImages}, title} = props
    console.log(additionalImages)

    
    return (
        <section>

            {/* <img src={additionalImages}/> */}
            { 
                additionalImages && additionalImages.map((image, index) => <img src={image} alt={`Image additional by title ${title}`} key={index}/>)
            }
        </section>
    )
}

export default AditionalsImages
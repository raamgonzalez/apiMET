import React from 'react'

const InformationNav = (props) => {

const {picture: {department, culture, medium, dimensions, city, classification, objectURL}} = props
console.log(objectURL)


return (
    <section className='aditional w-96 h-96 self-start text-left'>
        <h2 className='text-2xl mb-2 underline'>Información</h2> 
        <p className='text-xl'>Art Department: <span className='ml-1 italic'>{department || 'No information'}</span></p>
        <p className='text-xl'>Culture: <span className='ml-1 italic'>{culture || 'No information'}</span></p>
        <p className='text-xl'>Materials: <span className='ml-1 italic'>{medium || 'No information'}</span></p>
        <p className="text-xl">Dimension: <span className="ml-1 italic">{dimensions || 'No information'}</span></p>
        <p className="text-xl">Created in : <span className="ml-1 italic">{city || 'No information'}</span></p>
        <p className="text-xl">Classification : <span className="ml-1 italic">{classification || 'No information'}</span></p>
        <p className='text-xl'>Link to picture: <a className='ml-1 italic underline' href={objectURL || 'No information'} target='_blank' rel='noopener noreferrer'>Link</a></p>
    </section>
)
}

export default InformationNav
import React from 'react'

const InformationNav = (props) => {

const {picture: {department, culture, medium}} = props


return (
    <section className='w-96 h-96 self-start text-left'>
        <h2 className='text-2xl mb-2 underline'>Información</h2> 
        <p className='text-xl'>Materials: <span className='ml-1 italic'>{medium}</span></p>
        <p className='text-xl'>Art Department: <span className='ml-1 italic'>{department}</span></p>
        <p className='text-xl'>Culture: <span className='ml-1 italic'>{culture || 'No defined'}</span></p>
    </section>
)
}

export default InformationNav
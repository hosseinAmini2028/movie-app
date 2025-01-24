import React from 'react'

export default function SectionTitle({title} : {title : string}) {
  return (
    <h2 className='text-primary text-3xl font-semibold mb-10'>{title}</h2>
  )
}

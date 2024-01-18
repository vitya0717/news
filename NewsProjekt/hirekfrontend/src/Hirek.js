import React from 'react'
import Cards from './Cards'

const Hirek = ({szotar, currentLanguage}) => {
  return (
    <div className='container border border-light rounded p-3'>
        <Cards szotar={szotar} currentLanguage={currentLanguage}/>
    </div>
  )
}

export default Hirek
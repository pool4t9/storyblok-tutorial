import React from 'react'

const BannerSummary = ({ blok }) => {
    console.log(blok)
    const { image } = blok
    return (
        <div className='banner_summary'>
            <img src={image.filename} alt={image.name} />
        </div>
    )
}

export default BannerSummary
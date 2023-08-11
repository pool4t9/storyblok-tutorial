import React from 'react'

import { storyblokEditable } from '@storyblok/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation } from 'react-router-dom'

const ImageLink = ({ blok, key }) => {
    const { link, icon, image } = blok;
    const location = useLocation();

    return (
        <div {...storyblokEditable(blok)} className='image-link'>
            {link.linktype === 'story' && (
                <Link to={link.cached_url || '/'}>
                    {icon.icon && icon.icon !== '' ? (
                        <>
                            <FontAwesomeIcon fontSize={20} icon={`${icon.type} ${icon.icon}`} />
                        </>
                    ) : (
                        <img src={image.filename} alt={image.alt} />
                    )}
                </Link>
            )}

            {link.url && (
                <a href={link.url} target='_blank' rel="noreferrer">
                    {icon.icon !== '' && icon.icon ? (
                        <>
                            <FontAwesomeIcon fontSize={20} icon={`${icon.type} ${icon.icon}`} />
                        </>
                    ) : (
                        <img src={image.filename} alt={image.alt} />
                    )}
                </a>
            )}
        </div>
    )
}

// export const Pattern = ({ img, position, mobile }) => {
//     return (
//         <picture className={`container pattern-wrapper ${!mobile ? ('mobile-ban') : ''}`}>
//             {mobile && (
//                 <source media="(max-width: 575px)" srcSet={`/images/${img.replace('.svg', '-sm.svg')}`}></source>
//             )}
//             <img src={`/images/${img}`} className={`pattern pattern-${position}`} alt='' />
//         </picture>
//     )
// }

export default ImageLink
import React, { useEffect, useState } from 'react';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import { useLocation } from 'react-router-dom';

const Header = ({ blok, slug, language, footer, fixed }) => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { logo, navigation } = blok;

    useEffect(() => {
        if (location) setIsMenuOpen(false);
    }, [location]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'initial';
    }, [isMenuOpen]);

    return (
        <div {...storyblokEditable(blok)} className={`header-wrapper ${fixed ? 'is-fixed' : ''}`}>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='header'>
                            <div className='logo'>
                                {logo.map((blok) => (<StoryblokComponent blok={blok} key={blok._uid} />))}
                            </div>
                            <div className={`navigation-container ${isMenuOpen ? 'is-open' : ''}`}>
                                <div className='navigation-menu'>
                                    <img
                                        className='navigation-menu-icon'
                                        src='/images/menu-icon.svg'
                                        alt='menu icon'
                                        onClick={() => setIsMenuOpen(true)}
                                    />
                                </div>
                                {navigation.map((blok) => (
                                    <StoryblokComponent
                                        blok={blok}
                                        key={blok._uid}
                                        nav={true}
                                        slug={slug}
                                        language={language}
                                        logo={logo}
                                        onCloseMenu={() => setIsMenuOpen(false)}
                                        footer={footer}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

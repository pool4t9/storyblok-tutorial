import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

const NavigationItem = ({ blok, nav, onSelectSubNavigation, selectedNavigation }) => {
    const { link, navigation, image } = blok;
    const { url, cached_url, linktype } = link;
    const location = useLocation();

    const target_url = cached_url || url;

    if (selectedNavigation && selectedNavigation !== target_url) return <></>;
    if (selectedNavigation === target_url) {
        return (
            <>
                <div className='navigation-item navigate sub' onClick={() => onSelectSubNavigation()}>
                    <img className='navigate-forward reverse' src='/images/ChevronRightSmall.svg' alt='forward' />
                    <span>Back</span>
                </div>
                {navigation && navigation.map((o) => <StoryblokComponent
                    key={o._uid}
                    blok={o}
                    className={selectedNavigation === target_url ? 'open' : ''}
                    onSelectSubNavigation={() => onSelectSubNavigation('')}
                />)}
            </>
        );
    }

    if (linktype === 'story' && nav) {
        return (
            <NavLink
                className={({ isActive }) => {
                    const linkClasses = ['navigation-item'];
                    if (isActive) linkClasses.push('active');
                    if (navigation) linkClasses.push('navigate');
                    return linkClasses.join(' ');
                }}
                to={target_url}
            >
                {blok.name}
            </NavLink>
        );
    }
    if (linktype === 'story' && !nav) {
        return (
            <Link
                {...storyblokEditable(blok)}
                className='navigation-item'
                to={target_url}
            >
                {image && image.filename && <img src={image.filename} alt={image.alt} />}
                <span>{blok.name}</span>
            </Link>
        );
    }
    return (
        <Link
            {...storyblokEditable(blok)}
            className='navigation-item'
            to={target_url}
            target='_blank'
            rel='noreferrer'
        >
            {image && image.filename && <img src={image.filename} alt={image.alt} />}
            {blok.name}
        </Link>
    );
};

export default NavigationItem;

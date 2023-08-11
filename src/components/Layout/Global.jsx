import React, { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import { useStoryblok } from '../../hooks/useStoryblok';

const Global = ({ blok }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const language = 'en'
    const { banner, header, summary, footer, popup } = blok;
    const version = window.location.search.includes('_storyblok') ? 'draft' : 'published';
    const slug = useMemo(() => location.pathname)
    const story = useStoryblok(slug, {
        version: version,
        fallback_lang: 'en',
        language: 'en',
        resolve_relations: 'portfolio_card.category,article.author,article.article_type,knowledge_bytes.topics'
    }, {});
    console.log({ banner, header, summary, footer, popup }, '{ banner, header, summary, footer, popup }')
    return (
        <>

            <div{...storyblokEditable(blok)}>
                {header?.map((blok) => (
                    <StoryblokComponent
                        blok={blok}
                        key={blok._uid}
                        slug={slug}
                        language={language}
                        footer={footer}
                    // fixed={isFixed}
                    />
                ))}
                {banner?.map((blok) => (<StoryblokComponent blok={blok} key={blok._uid} />))}
                {summary?.map((blok) => (<StoryblokComponent blok={blok} key={blok._uid} />))}
                {/* {!(location.pathname.includes('ui-kit-pages/layout') || location.pathname.includes('ui-kit-pages/etp-layout')) &&
                    <StoryblokComponent
                        blok={{ ...story?.content, name: story?.name, first_published_at: story?.first_published_at }}
                        slug={slug}
                        language={language}
                    />
                }
                {footer.map((blok) => (
                    <StoryblokComponent blok={blok} key={blok._uid} language={language} slug={slug} />
                ))}
                {version === 'published' && popup?.map((blok) => (
                    <StoryblokComponent blok={blok} key={blok._uid} language={language} slug={slug} />
                ))} */}
            </div>
        </>
    )
}

export default Global;
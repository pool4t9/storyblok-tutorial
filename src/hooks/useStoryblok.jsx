import { useState, useEffect } from 'react'
import { registerStoryblokBridge, getStoryblokApi } from '@storyblok/react'

export const useStoryblok = (slug, apiOptions = {}, bridgeOptions = {}) => {
    let [story, setStory] = useState();

    useEffect(() => {
        const storyblokApi = getStoryblokApi()

        async function fetchData() {
            try {
                const story = await storyblokApi.get(`cdn/stories/${slug}`, apiOptions)
                setStory(story.data.story)
            } catch (er) {
                if (er.code === 'ERR_BAD_REQUEST') {
                    //   const notFoundURL = isETPSubdomain() ? 'cdn/stories/etps-new/not-found' : 'cdn/stories/not-found'
                    //   const { data } = await storyblokApi.get(notFoundURL, apiOptions)

                    //   setStory(data.story)
                }
            }
        }

        fetchData()

    }, [slug])

    if (story && story.id) registerStoryblokBridge(story.id, (story) => {
        setStory(story)
    }, bridgeOptions)

    return story
}



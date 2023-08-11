import { useState } from 'react'
import './App.css'
import { StoryblokComponent, useStoryblok } from '@storyblok/react';

function App() {
  const [count, setCount] = useState(0)
  const story = useStoryblok('ui-kit-pages/layout', { version: 'published', fallback_lang: 'en', language:'en' });
  if (!story || !story.content) {
    return <div></div>;
  }
  return (
    <>
      <StoryblokComponent blok={story.content} />
    </>
  )
}

export default App

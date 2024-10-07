import dynamic from 'next/dynamic'
import React from 'react'
import { tv } from 'tailwind-variants'

import { type IYoutubePlayerProps } from './types'

const YoutubeIframe = dynamic(async () => await import('./YoutubeIframe'), {
  ssr: false,
})

function getVideoIdFromString(stringValue: string) {
  if (stringValue.startsWith('http') || stringValue.includes('youtube')) {
    const url = new URL(stringValue)
    return url.searchParams.get('v') ?? ''
  }
  return stringValue
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  video: IYoutubePlayerProps
  scale?: 'proportional' | 'full'
}

const playerClassVariant = tv({
  base: 'bg-gray-dark animation-shimmer overflow-hidden w-full relative card',
  variants: {
    scale: {
      proportional: 'aspect-video',
      full: 'h-full',
    },
  },
})

const YoutubePlayer: React.FC<Props> = ({
  video,
  scale = 'proportional',
  className,
  ...rest
}) => {
  return (
    <div
      className={playerClassVariant({
        className,
        scale,
      })}
      {...rest}
    >
      <YoutubeIframe {...video} id={getVideoIdFromString(video.id)} />
    </div>
  )
}

export default YoutubePlayer

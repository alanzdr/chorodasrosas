'use client'

import React, { useEffect, useMemo } from 'react'
import { useIntersectObserver } from 'zelindro-ui/hooks'

import { type IYoutubePlayerProps } from './types'

const YoutubePlayer: React.FC<IYoutubePlayerProps> = ({
  title,
  id,
  enabled,
  autoplay = false,
  controls = true,
  loop = false,
  mute = false,
  showinfo = true,
}) => {
  const [isVideoShowing, reference] = useIntersectObserver()
  const iframeRef = React.useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (isVideoShowing) {
      if (enabled && !autoplay) return
      const message = {
        event: 'command',
        func: enabled ? 'playVideo' : 'pauseVideo',
        args: '',
      }
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify(message),
        '*'
      )
    }
  }, [autoplay, enabled, isVideoShowing])

  const params = useMemo(() => {
    const obj: any = {
      rel: false,
      enablejsapi: true,
      controls,
      loop,
      mute,
      showinfo,
    }

    for (const key in obj) {
      obj[key] = String(Number(obj[key]))
    }

    return new URLSearchParams({
      playlist: id,
      ...obj,
    } as unknown as Record<string, string>)
  }, [controls, id, loop, mute, showinfo])

  return (
    <div ref={reference} className="absolute left-0 top-0 h-full w-full">
      {isVideoShowing && (
        <iframe
          ref={iframeRef}
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${id}?${params.toString()}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}
    </div>
  )
}

export default YoutubePlayer

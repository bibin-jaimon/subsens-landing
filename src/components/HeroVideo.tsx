import { useRef, useState, useEffect } from 'react'

const POSTER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='390' height='844' viewBox='0 0 390 844'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%231a1a1e'/%3E%3Cstop offset='50%25' stop-color='%23232326'/%3E%3Cstop offset='100%25' stop-color='%23161618'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='390' height='844'/%3E%3Ctext x='195' y='380' fill='%23FF9500' font-family='system-ui' font-size='28' font-weight='600' text-anchor='middle'%3ESubSens%3C/text%3E%3Ctext x='195' y='420' fill='%23A1A1A6' font-family='system-ui' font-size='14' text-anchor='middle'%3EApp Demo%3C/text%3E%3Ccircle cx='195' cy='500' r='40' fill='%23FF9500' opacity='0.3'/%3E%3Ccircle cx='195' cy='500' r='24' fill='%23FF9500'/%3E%3Cpath d='M185 492l20 16-20 16z' fill='white'/%3E%3C/svg%3E"

const VIDEO_PATH = `${import.meta.env.BASE_URL}videos/demo.mp4`

interface HeroVideoProps {
  className?: string
}

export function HeroVideo({ className = '' }: HeroVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [inView, setInView] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setInView(true)
      },
      { rootMargin: '100px', threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView || !videoRef.current || hasError) return
    videoRef.current.src = VIDEO_PATH
    videoRef.current.load()
  }, [inView, hasError])

  return (
    <div ref={containerRef} className={`relative overflow-hidden rounded-[32px] ${className}`}>
      <img
        src={POSTER}
        alt="SubSens app demo"
        className={`absolute inset-0 w-full h-full object-cover rounded-[32px] transition-opacity duration-500 ${
          loaded && !hasError ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />
      <video
        ref={videoRef}
        poster={POSTER}
        className={`absolute inset-0 w-full h-full object-cover rounded-[32px] transition-opacity duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        playsInline
        autoPlay
        muted
        loop
        preload="metadata"
        onLoadedData={() => setLoaded(true)}
        onCanPlay={() => setLoaded(true)}
        onError={() => setHasError(true)}
      />
    </div>
  )
}

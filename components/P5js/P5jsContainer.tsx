import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import type p5Types from 'p5'
import { setup, draw, windowResized, mousePressed } from './sketch'

// dynamic import를 다르게 처리
const Sketch = dynamic(() => import('react-p5').then(mod => mod.default), {
    ssr: false,
    loading: () => <div>Loading...</div>
})

export default function P5jsContainer() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    if (!mounted) return null

    return (
        <div className="w-full h-screen">
            <Sketch
                setup={setup}
                draw={draw}
                windowResized={windowResized}
                mousePressed={mousePressed}
            />
        </div>
    )
}
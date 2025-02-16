import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import type p5Types from 'p5'
import { setup, draw, windowResized, mousePressed } from './sketch'

// react-p5를 import하는 방식 수정
const Sketch = dynamic(() => import('react-p5').then((mod) => {
    return mod.default || mod
}), {
    ssr: false,
    loading: () => <div>Loading...</div>
})
export default function P5jsContainer() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])
    // 컴포넌트가 마운트되기 전에는 렌더링하지 않음
    if (!mounted) return null

    // props 타입 정의
    const sketchProps = {
        setup: setup,
        draw: draw,
        windowResized: windowResized,
        mousePressed: mousePressed
    }

    return (
        <div className="w-full h-screen">
            <Sketch {...sketchProps} />
        </div>
    )
}
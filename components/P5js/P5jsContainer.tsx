import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import type p5Types from 'p5'
import { setup, draw, windowResized, mousePressed } from './sketch'

// react-p5를 import하는 방식 수정
const Sketch = dynamic(() => import('react-p5'), {
    ssr: false,
    loading: () => <div>Loading...</div>
})

export default function P5jsContainer() {
    // props 타입 정의
    const sketchProps = {
        setup: (p5: p5Types, canvasParentRef: Element) => setup(p5, canvasParentRef),
        draw: (p5: p5Types) => draw(p5),
        windowResized: (p5: p5Types) => windowResized(p5),
        mousePressed: (p5: p5Types) => mousePressed(p5)
    }

    return (
        <div className="w-full h-screen">
            <Sketch {...sketchProps} />
        </div>
    )
}
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { setup, draw, windowResized, mousePressed } from './sketch'

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false
})

export default function P5jsContainer() {
    return (<div className="w-full h-[500px]">
        <Sketch setup={setup} draw={draw} windowResized={windowResized} mousePressed={mousePressed}
        /></div>)
}
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { setup, draw, windowResized, mousePressed } from './sketch'

// const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
//     ssr: false
// })

// export default function P5jsContainer() {
//     return (<div className="w-full h-[500px]">
//         <Sketch setup={setup} draw={draw} windowResized={windowResized} mousePressed={mousePressed}
//         /></div>)
// }

// react-p5를 import하는 방식 수정
const Sketch = dynamic(() => import('react-p5'), {
    ssr: false,
    loading: () => <div>Loading...</div>
})

export default function P5jsContainer() {
    // props를 객체로 전달
    const props = {
        setup: setup,
        draw: draw,
        windowResized: windowResized,
        mousePressed: mousePressed
    }

    return (
        <div className="w-full h-screen">
            <Sketch {...props} />
        </div>
    )
}
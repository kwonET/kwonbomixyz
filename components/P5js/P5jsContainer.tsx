import { useEffect, useState, useRef } from 'react'
import p5Types from 'p5'
import { setup, draw, windowResized, mousePressed } from './sketch'

export default function P5jsContainer() {
    const canvasRef = useRef<HTMLDivElement>(null)
    const [mounted, setMounted] = useState(false)
    const p5InstanceRef = useRef<any>(null) // p5 인스턴스 참조 추가

    useEffect(() => {
        if (typeof window === 'undefined') return

        async function loadP5() {
            const p5 = (await import('p5')).default

            p5InstanceRef.current = new p5((p: p5Types) => {
                p.setup = () => {
                    if (canvasRef.current) {
                        setup(p, canvasRef.current)
                    }
                }
                p.draw = () => {
                    draw(p)
                }

                p.windowResized = () => {
                    if (canvasRef.current) {
                        windowResized(p)
                    }
                }

                p.mousePressed = () => {
                    mousePressed(p)
                }
            })
        }
        setMounted(true)
        loadP5()

        return () => {
            if (p5InstanceRef.current) {
                p5InstanceRef.current.remove()
            } setMounted(false)
        }
    }, [])


    return (
        <div ref={canvasRef} className="w-full h-screen">
            {!mounted && <div>Loading...</div>}
        </div>
    )
}
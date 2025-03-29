
import { useEffect, useState, useRef } from 'react'
import p5Types from 'p5'
import { setup, draw, windowResized, mousePressed } from './sketch'

export default function P5jsContainer() {
    const canvasRef = useRef<HTMLDivElement>(null)
    const [mounted, setMounted] = useState(false)
    const p5InstanceRef = useRef<any>(null) // p5 인스턴스 참조 추가

    useEffect(() => {
        if (typeof window === 'undefined') {
            console.log('window undefined');
            return;
        }

        async function loadP5() {
            try {
                const p5Module = await import('p5');
                const p5 = p5Module.default

                console.log('p5 module loaded:', !!p5);

                p5InstanceRef.current = new p5((p: p5Types) => {
                    console.log('p5 instance created');
                    p.setup = () => {
                        if (canvasRef.current) {
                            const canvas = p.createCanvas(
                                canvasRef.current.offsetWidth || 800,
                                canvasRef.current.offsetHeight || 600
                            );
                            canvas.parent(canvasRef.current);

                            const canvasElement = document.getElementById('defaultCanvas0');
                            if (canvasElement) {
                                canvasElement.style.visibility = 'visible';
                                canvasElement.removeAttribute('data-hidden');
                            }

                            if (typeof setup === 'function') {
                                setup(p, canvasRef.current);
                            }
                        }
                    }
                    p.draw = () => {
                        if (typeof draw === 'function') {
                            draw(p);
                        }
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
                if (typeof window !== 'undefined') {
                    (window as any).p5Instance = p5InstanceRef.current;
                }
            }
            catch (error) {
                console.error('Error in P5', error);
            }
        }
        setMounted(true)
        loadP5()

        return () => {
            if (p5InstanceRef.current) {
                p5InstanceRef.current.remove()
            } setMounted(false)
        }
    }, [])


    useEffect(() => {
        if (p5InstanceRef.current && p5InstanceRef.current.canvas) {
            p5InstanceRef.current.canvas.style('visibility', 'visible');
            p5InstanceRef.current.canvas.attribute('data-hidden', 'false');
        }
    }, [mounted])

    return (
        <div ref={canvasRef} className="w-full h-screen">
            {!mounted && <div>Loading...</div>}
        </div>
    )
}
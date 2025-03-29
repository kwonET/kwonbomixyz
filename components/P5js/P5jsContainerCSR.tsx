import dynamic from "next/dynamic";
import * as React from 'react'

const P5jsContainerCSR = dynamic(() => import('./P5jsContainer'), {
    ssr: false
})
export default P5jsContainerCSR;
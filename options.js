import * as Tone from 'tone'

Tone.Transport.bpm.value = 100

const pulseOptions = {
    oscillator: {
        type: "pulse"
    },
    envelope:{
        release: 0.07
    }
}

const triangleOptions = {
    oscillator: {
        type: "triangle"
    },
    envelope:{
        release: 0.07
    }
}

const squareOptions = {
    oscillator: {
        type: "square"
    },
    envelope: {
        release: 0.07
    }
}

export default { pulseOptions, triangleOptions, squareOptions }
import * as Tone from 'tone'
import 'regenerator-runtime/runtime'
import Options from './options'

const pulseSynth    = new Tone.Synth(Options.pulseOptions)
const squareSynth   = new Tone.Synth(Options.squareOptions)
const triangleSynth = new Tone.Synth(Options.triangleOptions)
const noiseSynth    = new Tone.NoiseSynth()

let song = {}
let pulsePart    = new Tone.Part()
let squarePart   = new Tone.Part()
let trianglePart = new Tone.Part()
let noisePart    = new Tone.Part()

const button = document.querySelector("button")

button.addEventListener("click", async () => {
    await Tone.start()
    const osc = new Tone.FMOscillator("Bb4").toDestination().start()
    osc.frequency.rampTo("D2", 3)
})

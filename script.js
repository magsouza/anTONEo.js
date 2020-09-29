import * as Tone from 'tone'
import 'regenerator-runtime/runtime'
import Options from './options'
import songs from './songs'

Tone.Transport.bpm.value = 100

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

function setSong() {

    song = songs[0]

    pulsePart.removeAll()
    squarePart.removeAll()
    trianglePart.removeAll()
    noisePart.removeAll()

    if (song.pulse != null) {
        pulsePart = new Tone.Part((time, note) => {
            pulseSynth.triggerAttackRelease(note.name, note.duration, time, note.velocity)
        }, song.pulse)
      }
      
      if(song.square != null) {
        squarePart = new Tone.Part((time, note) => {
            squareSynth.triggerAttackRelease(note.name, note.duration, time, note.velocity)
        }, song.square)
      }
      
      if(song.triangle != null) {
        trianglePart = new Tone.Part((time, note) => {
            triangleSynth.triggerAttackRelease(note.name, note.duration, time, note.velocity)
        }, song.triangle)
      }
      
      if(song.noise != null) {
        noisePart = new Tone.Part((time, note) => {
            noiseSynth.triggerAttackRelease(note.duration, time, note.velocity)
        }, song.noise)
      }
}

function start() {
    if(song.pulse != null)    pulsePart.start(0)
    if(song.square != null)   squarePart.start(0)
    if(song.triangle != null) trianglePart.start(0)
    if(song.noise != null)    noisePart.start(0)
}

function stop() {
    if(song.pulse != null)    pulsePart.stop(0)
    if(song.square != null)   squarePart.stop(0)
    if(song.triangle != null) trianglePart.stop(0)
    if(song.noise != null)    noisePart.stop(0)
}

setSong()

button.addEventListener('click', () => {
    if (Tone.Transport.state == 'started') {
        Tone.Transport.stop()
        button.textContent = 'Restart'
        stop()
    } else {
        Tone.Transport.start('+0.1', 0)
        start()
        Tone.Transport.stop('+' + song.length)
        button.textContent = 'Stop'
    }
})

Tone.Transport.on('stop', () => { button.textContent = 'Restart' })

/*
button.addEventListener("click", async () => {
    await Tone.start()
    const osc = new Tone.FMOscillator("Bb4").toDestination().start()
    osc.frequency.rampTo("D2", 3)
})
*/
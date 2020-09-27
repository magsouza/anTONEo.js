import * as Tone from 'tone'
import 'regenerator-runtime/runtime'

// const sampler = new Sampler(
//   {
//     A1: "A1.mp3"
//   },
//   {
//     onload: () => {
//       document.querySelector("button").removeAttribute("disabled");
//     }
//   }
// )

document.querySelector("button").addEventListener("click", async () => {
    await Tone.start()
    const osc = new Tone.FMOscillator("Bb4").toDestination().start()
    osc.frequency.rampTo("D2", 3)
})

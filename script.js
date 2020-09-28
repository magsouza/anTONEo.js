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
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now()
    synth.triggerAttack("E5", now);
    synth.triggerAttack("E5", now + 0.3);
    synth.triggerAttack("E5", now + 0.6);
    synth.triggerAttack("C5", now + 0.9);
    synth.triggerAttack("E5", now + 1.2);
    synth.triggerAttack("G5", now + 1.5);
    synth.triggerAttack("G4", now + 1.8);
    synth.triggerRelease(["E5", "E5", "E5", "E5", "C5", "G5", "G4"], now + 2);
})

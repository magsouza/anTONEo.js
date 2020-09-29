import ZeldaSynth1 from 'notes/zelda/synth1.json'
import ZeldaSynth2 from 'notes/zelda/synth2.json'
import ZeldaBass1 from 'notes/zelda/bass1.json'
import ZeldaBass2 from 'notes/zelda/bass2.json'
import MarioSynth1 from 'notes/mario/synth1.json'
import MarioSynth2 from 'notes/mario/synth2.json'
import MarioBass1 from 'notes/mario/bass1.json'
import MarioBass2 from 'notes/mario/bass2.json'
import MetroidSynth1 from 'notes/metroid/synth1.json'
import MetroidSynth2 from 'notes/metroid/synth2.json'
import KirbySynth1 from 'notes/kirby/synth1.json'
import KirbySynth2 from 'notes/kirby/synth2.json'
import KirbyBass1 from 'notes/kirby/bass1.json'
import KirbyBass2 from 'notes/kirby/bass2.json'

const songs = [
  {
    'pulse': ZeldaSynth1,
    'square': ZeldaSynth2,
    'triangle': ZeldaBass1,
    'noise': ZeldaBass2,
    'length': '39'
  },
  {
    'pulse': MarioSynth1,
    'square': MarioSynth2,
    'triangle': MarioBass1,
    'noise': MarioBass2,
    'length': '85'
  },
  {
    'pulse': MetroidSynth1,
    'square': MetroidSynth2,
    'triangle': null,
    'noise': null,
    'length': '102'
  },
  {
    'pulse': KirbySynth1,
    'square': KirbySynth2,
    'triangle': KirbyBass1,
    'noise': KirbyBass2,
    'length': '96'
  }
]

export default songs
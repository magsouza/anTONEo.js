import * as Tone from 'tone'
import 'regenerator-runtime/runtime'

var pulseSynth    = new Tone.Synth(pulseOptions).fan(pulseAnalyser).toMaster();
var squareSynth   = new Tone.Synth(squareOptions).fan(squareAnalyser).toMaster();
var triangleSynth = new Tone.Synth(triangleOptions).fan(triangleAnalyser).toMaster();
var noiseSynth    = new Tone.NoiseSynth().fan(noiseAnalyser).toMaster();

var song = {};
var pulsePart    = new Tone.Part();
var squarePart   = new Tone.Part();
var trianglePart = new Tone.Part();
var noisePart    = new Tone.Part();


function setSong() {
  
  song = songs[1]
  pulsePart.removeAll();
  squarePart.removeAll();
  trianglePart.removeAll();
  noisePart.removeAll();
  
  if(song.pulse != null) {
    pulsePart = new Tone.Part(function(time, note){
      pulseSynth.triggerAttackRelease(note.name, note.duration, time, note.velocity);
    }, song.pulse);
  }
  
  if(song.square != null) {
    squarePart = new Tone.Part(function(time, note){
      squareSynth.triggerAttackRelease(note.name, note.duration, time, note.velocity);
    }, song.square);
  }
  
  if(song.triangle != null) {
    trianglePart = new Tone.Part(function(time, note){
      triangleSynth.triggerAttackRelease(note.name, note.duration, time, note.velocity);
    }, song.triangle);
  }
  
  if(song.noise != null) {
    noisePart = new Tone.Part(function(time, note){
      noiseSynth.triggerAttackRelease(note.duration, time, note.velocity);
    }, song.noise);
  }
  
}

function start() {

  if(song.pulse != null)    pulsePart.start(0);
  if(song.square != null)   squarePart.start(0);
  if(song.triangle != null) trianglePart.start(0);
  if(song.noise != null)    noisePart.start(0); 
  
}

function stop() {

  if(song.pulse != null)    pulsePart.stop(0);
  if(song.square != null)   squarePart.stop(0);
  if(song.triangle != null) trianglePart.stop(0);
  if(song.noise != null)    noisePart.stop(0);
  
}

button.addEventListener('click', function(){
  
  if(Tone.Transport.state == 'started') {
    Tone.Transport.stop();
    button.textContent = 'Restart'; 

    stop();

  } else {
    
    Tone.Transport.start('+0.1', 0);   
    
    start();
    
    Tone.Transport.stop('+' + song.length);
    
    button.textContent = 'Stop'; 
  }
})


Tone.Transport.on('stop', function(){
  button.textContent = 'Restart'; 
})
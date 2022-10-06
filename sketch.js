let mySound;
function preload() {
  soundFormats('mp3', 'ogg');
 mySound = loadSound('audios/playCancion');
 mySoundB = loadSound('audios/playCancionB');
 mySoundC = loadSound('audios/playCancionC');
 mySoundD = loadSound('audios/playCancionD');
 mySoundE = loadSound('audios/playCancionE');
 mySoundF = loadSound('audios/playCancionF');


}

function setup (){
    let cnv = createCanvas( 400, 100);


    let cards = selectAll('.card');
    console.log('...', cards);

    cards[0].mouseClicked(playCancion);
    cards[1].mouseClicked(playCancionB);
    cards[2].mouseClicked(playCancionC);
    cards[3].mouseClicked(playCancionD);
    cards[4].mouseClicked(playCancionE);
    cards[5].mouseClicked(playCancionF);

}

function playCancion() {
  if(mySound.isPlaying()===false){
  mySound.play();
  }
}

function playCancionB() {
  if(mySoundB.isPlaying()===false){
  mySoundB.play();
  }
}

function playCancionC() {
  if(mySoundC.isPlaying()===false){
  mySoundC.play();
  }
}
function playCancionD() {
  if(mySoundD.isPlaying()===false){
  mySoundD.play();
  }
}
function playCancionE() {
  if(mySoundE.isPlaying()===false){
  mySoundE.play();
  }
}
function playCancionF() {
  if(mySoundF.isPlaying()===false){
  mySoundF.play();
  }
}


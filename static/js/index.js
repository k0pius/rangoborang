
$(document).ready( function() {

    // This controls the button for the c note.

    // This variable calls the cNote audio element in the HTML.
    var cNote = document.getElementById('cAudio');

    // This turns our <div id= "c"> into a button that plays our audio file when the box is pressed.
    $('.c').mouseover(function(){

        // This is a property that scrubs the audio file back to its start.
        cNote.currentTime = 0;

        // This plays the audio file.
        cNote.play();
    });

    $('.c').mousedown(function(){ // This function is for chords on click
      cNote.currentTime = 0;
      eNote.currentTime = 0;
      gNote.currentTime = 0;
      cNote.play();
      eNote.play();
      gNote.play();
    });

    // This controls the button for the d note.

    var dNote = document.getElementById('dAudio');

    $('.d').mouseover(function(){
        dNote.currentTime = 0;
        dNote.play();
    });

    $('.d').mousedown(function(){
      dNote.currentTime = 0;
      fNote.currentTime = 0;
      aNote.currentTime = 0;
      dNote.play();
      fNote.play();
      aNote.play();
    });

    // This controls the button for the e note.

    var eNote = document.getElementById('eAudio');

    $('.e').mouseover(function(){
        eNote.currentTime = 0;
        eNote.play();
    });

    $('.e').mousedown(function(){
      eNote.currentTime = 0;
      gNote.currentTime = 0;
      bNote.currentTime = 0;
      eNote.play();
      gNote.play();
      bNote.play();
    });

    // This controls the button for the f note.

    var fNote = document.getElementById('fAudio');

    $('.f').mouseover(function(){
        fNote.currentTime = 0;
        fNote.play();
    });

    $('.f').mousedown(function(){
      fNote.currentTime = 0;
      aNote.currentTime = 0;
      cNote.currentTime = 0;
      fNote.play();
      aNote.play();
      cNote.play();
    });

    // This controls the button for the g note.

    var gNote = document.getElementById('gAudio');

    $('.g').mouseover(function(){
        gNote.currentTime = 0;
        gNote.play();
    });

    $('.g').mousedown(function(){
      gNote.currentTime = 0;
      bNote.currentTime = 0;
      dNote.currentTime = 0;
      gNote.play();
      bNote.play();
      dNote.play();
    });

    // This controls the button for the a note.

    var aNote = document.getElementById('aAudio');

    $('.a').mouseover(function(){
        aNote.currentTime = 0;
        aNote.play();
    });

    $('.a').mousedown(function(){
      aNote.currentTime = 0;
      cNote.currentTime = 0;
      eNote.currentTime = 0;
      aNote.play();
      cNote.play();
      eNote.play();
    });

    // This controls the button for the b note.

    var bNote = document.getElementById('bAudio');

    $('.b').mouseover(function(){
        bNote.currentTime = 0;
        bNote.play();
    });

    $('.b').mousedown(function(){
      bNote.currentTime = 0;
      dNote.currentTime = 0;
      fNote.currentTime = 0;
      bNote.play();
      dNote.play();
      fNote.play();
    });

    // THESE ARE THE KEYCODE EVENTS TO PLAY THE NOTES
    document.addEventListener('keydown', function(event) {
      if(event.code === 'KeyC' || event.code === 'Backquote') {
        $('.c').toggleClass('hover');
        cNote.currentTime = 0;
        cNote.play();
      }else if(event.code === 'KeyD' || event.code === 'Digit2') {
        $('.d').toggleClass('hover');
        dNote.currentTime = 0;
        dNote.play();
      }else if(event.code === 'KeyE' || event.code === 'Digit4') {
        $('.e').toggleClass('hover');
        eNote.currentTime = 0;
        eNote.play();
      }else if(event.code === 'KeyF' || event.code === 'Digit6') {
        $('.f').toggleClass('hover');
        fNote.currentTime = 0;
        fNote.play();
      }else if(event.code === 'KeyG' || event.code === 'Digit8') {
        $('.g').toggleClass('hover');
        gNote.currentTime = 0;
        gNote.play();
      }else if(event.code === 'KeyA' || event.code === 'Digit0') {
        $('.a').toggleClass('hover');
        aNote.currentTime = 0;
        aNote.play();
      }else if(event.code === 'KeyB' || event.code === 'Equal') {
        $('.b').toggleClass('hover');
        bNote.currentTime = 0;
        bNote.play();
      };
    });

    document.addEventListener('keyup', function(event) {
      if(event.code === 'KeyC' || event.code === 'Backquote') {
        $('.c').removeClass('hover');
      }else if(event.code === 'KeyD' || event.code === 'Digit2') {
        $('.d').removeClass('hover');
      }else if(event.code === 'KeyE' || event.code === 'Digit4') {
        $('.e').removeClass('hover');
      }else if(event.code === 'KeyF' || event.code === 'Digit6') {
        $('.f').removeClass('hover');
      }else if(event.code === 'KeyG' || event.code === 'Digit8') {
        $('.g').removeClass('hover');
      }else if(event.code === 'KeyA' || event.code === 'Digit0') {
        $('.a').removeClass('hover');
      }else if(event.code === 'KeyB' || event.code === 'Equal') {
        $('.b').removeClass('hover');
      };
    });

});

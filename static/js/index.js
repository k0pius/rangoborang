
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
      $(this).toggleClass('z');
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
      $(this).toggleClass('z');
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
      $(this).toggleClass('z');
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
      $(this).toggleClass('z');
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
      $(this).toggleClass('z');
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
      $(this).toggleClass('z');
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
      $(this).toggleClass('z');
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

// Animated Cursor !
    var playground = document.querySelector('html');
    var cursorArray = ['url("./static/media/mwand/Layer1.png"), auto',
                  'url("./static/media/mwand/Layer2.png"), auto',
                  'url("./static/media/mwand/Layer3.png"), auto',
                  'url("./static/media/mwand/Layer4.png"), auto',
                  'url("./static/media/mwand/Layer5.png"), auto',
                  'url("./static/media/mwand/Layer5.png"), auto',
                  'url("./static/media/mwand/Layer6.png"), auto',
                  'url("./static/media/mwand/Layer7.png"), auto',
                  'url("./static/media/mwand/Layer8.png"), auto',
                  'url("./static/media/mwand/Layer9.png"), auto',
                  'url("./static/media/mwand/Layer10.png"), auto'];
    i = 0;
    (function cursor(){
      playground.style.cursor  = cursorArray[i];
      i++;
      if(i == cursorArray.length){
        i = 0;
      }
       setTimeout(cursor, 65);
      })();

});

//------------------------Cursor Trail------------------------------------------

// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
   // of the mouse, set with a mousemove event listener below
var dots = [],
    mouse = {
      x: 1000,
      y: 6000
    };

// The Dot object used to scaffold the dots
var Dot = function() {
  this.x = 1000;
  this.y = 6000;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  }());
};
// The Dot.prototype.draw() method sets the position of
  // the object's <div> node
Dot.prototype.draw = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 200; i++) {
  var d = new Dot();
  dots.push(d);
}

// This is the screen redraw function
function draw() {
  // Make sure the mouse position is set everytime
    // draw() is called.
  var x = mouse.x,
      y = mouse.y;

  // This loop is where all the 90s magic happens
  dots.forEach(function(dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];

    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .5;
    y += (nextDot.y - dot.y) * .5;

  });
}

addEventListener("mousemove", function(event) {
  //event.preventDefault();
  mouse.x = event.pageX+52;
  mouse.y = event.pageY+70;
});

// animate() calls draw() then recursively calls itself
  // everytime the screen repaints via requestAnimationFrame().
function animate() {
  draw();
  requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();

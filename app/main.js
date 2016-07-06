// time is fixed, so just implement the drap
// drag event； not like city picker

// drag
'use strict';
require('./style.css');

console.log('test');

// $('.am-picker-move').on('drag',(e)=>{
//   console.log('11')
// })
var a = 100;
$('.am-picker-move').on('mousewheel',(e)=> {
  var e = window.event || e; // old IE support
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  if(delta==1) {
    a -=100;
  } else if(delta==-1) {
    a +=100
  }
  var position = `translateY(${a}px)`;
  $('.am-picker-move').css('transform',position)
})

// var syntheticEvent = new WheelEvent();
// console.log(syntheticEvent.deltaY);

// var myimage = document.getElementById("test-wheel");
// if (myimage.addEventListener) {
// 	// IE9, Chrome, Safari, Opera
// 	myimage.addEventListener("mousewheel", MouseWheelHandler, false);
// 	// Firefox
// 	myimage.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
// }
// // IE 6/7/8
// else myimage.attachEvent("onmousewheel", MouseWheelHandler);
//
// function MouseWheelHandler(e) {
// 	// cross-browser wheel delta
// 	var e = window.event || e; // old IE support
// 	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//   console.log(delta)
//
// return false;
// }

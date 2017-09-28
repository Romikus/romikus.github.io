//const clearance = 3; // clearance between top/bottom/right container side and scroller
//const scroll = document.querySelector('.scroll');
//const thumb = document.querySelector('.thumb');
//const scrollHeight = scroll.clientHeight;
//const thumbHeight = scroll.clientHeight * scroll.clientHeight / scroll.scrollHeight;
//const scrollPaddingRirht = getComputedStyle(scroll, null).paddingRight;
//const factor = (scrollHeight - thumbHeight)/(scroll.scrollHeight - scrollHeight);
//
//thumb.style.height = (thumbHeight - 2*clearance) + 'px';
//thumb.style.transform = `
//    matrix3d(
//      1, 0, 0, 0,
//      0, 1, 0, 0,
//      0, 0, 1, 0,
//      0, 0, 0, -1
//    )
//    scale(${1/factor})
//    translateZ(${1 - 1/factor}px)
//    translateZ(-2px)
//  `;
//thumb.style.top = (-(thumbHeight - clearance) - ((thumbHeight)/factor - (thumbHeight) )*0.5) + 'px';
//thumb.style.right = -(0.5*(thumb.clientWidth+thumb.clientWidth*factor) + parseFloat(scrollPaddingRirht) + clearance)/factor + 'px';


const clearance = 3; // clearance between top/bottom/right container side and scroller
const scroll = document.querySelectorAll('.scroll');
const thumb = document.querySelectorAll('.thumb');

for (var i = 0; i < scroll.length; i++) {
  const scrollHeight = scroll[i].clientHeight;
  const thumbHeight = scroll[i].clientHeight * scroll[i].clientHeight / scroll[i].scrollHeight;
  const scrollPaddingRirht = getComputedStyle(scroll[i], null).paddingRight;
  const factor = (scrollHeight - thumbHeight)/(scroll[i].scrollHeight - scrollHeight);
  
  thumb[i].style.height = (thumbHeight - 2*clearance) + 'px';
  thumb[i].style.transform = `
    matrix3d(
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, -1
    )
    scale(${1/factor})
    translateZ(${1 - 1/factor}px)
    translateZ(-2px)
  `;
  
  const scrollPos = scroll[i].getBoundingClientRect();
  const thumbPos = thumb[i].getBoundingClientRect();
  thumb[i].style.top = (-clearance)/factor + 'px';
//  thumb[i].style.right = -(parseFloat(scrollPaddingRirht) + clearance)/factor + 'px';
  thumb[i].style.right = -((thumbPos.right - thumbPos.right) + parseFloat(scrollPaddingRirht) + clearance)/factor + 'px';
//  thumb[i].style.right = 0;
  
}
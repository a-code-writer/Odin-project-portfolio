/******/ (() => { // webpackBootstrap
/*!******************!*\
  !*** ./index.js ***!
  \******************/
document.getElementById('arrow').addEventListener('click', () => {
    let arrow = document.getElementById('arrow');
    if(arrow.classList.contains('rotate')){
        arrow.classList.remove('rotate');
    } else {
        arrow.classList.add('rotate');
    }
    let options = document.getElementById('options');
    if(options.classList.contains('hidden')){
        options.classList.remove('hidden');
    } else {
        options.classList.add('hidden');
    }
})

//for the image slider, either find a way to make any images inside 'picture' div to adhere to the size of
//'picture' or add a class to all images and set a css rule to the class
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSx3RSIsInNvdXJjZXMiOlsid2VicGFjazovL2Ryb3BfZG93bl9tZW51X2FuZF9pbWFnZV9zbGlkZXIvLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJyb3cnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGxldCBhcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJvdycpO1xyXG4gICAgaWYoYXJyb3cuY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3RhdGUnKSl7XHJcbiAgICAgICAgYXJyb3cuY2xhc3NMaXN0LnJlbW92ZSgncm90YXRlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFycm93LmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9ucycpO1xyXG4gICAgaWYob3B0aW9ucy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKXtcclxuICAgICAgICBvcHRpb25zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG59KVxyXG5cclxuLy9mb3IgdGhlIGltYWdlIHNsaWRlciwgZWl0aGVyIGZpbmQgYSB3YXkgdG8gbWFrZSBhbnkgaW1hZ2VzIGluc2lkZSAncGljdHVyZScgZGl2IHRvIGFkaGVyZSB0byB0aGUgc2l6ZSBvZlxyXG4vLydwaWN0dXJlJyBvciBhZGQgYSBjbGFzcyB0byBhbGwgaW1hZ2VzIGFuZCBzZXQgYSBjc3MgcnVsZSB0byB0aGUgY2xhc3MiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
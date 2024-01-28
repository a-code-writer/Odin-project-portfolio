let display = document.getElementById('display');
let colorBtn = document.getElementById('colorBtn');
let body = document.getElementById('body');

let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

let hexColor=[];

colorBtn.addEventListener('click', ()=>{
    hexColor = [];
    for(let i = 0; i < 6; i++){
        hexColor.push(hex[Math.floor(Math.random() * 15)]);
    }
    let color = hexColor.join("")
    body.style.backgroundColor = `#${color}`
    display.textContent = `Background Color: ${color}`;
})

console.log('hi there')




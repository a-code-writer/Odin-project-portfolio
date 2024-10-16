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
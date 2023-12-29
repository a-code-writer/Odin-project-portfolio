const createRestaurantHomepage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const image = document.createElement('img');
    image.src = 'https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2022/03/25095927/lamias.jpg';
    image.height = "300";
    pageContent.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = 'Restaurant Page';
    pageContent.appendChild(headline);

    const copy = document.createElement('p');
    copy.textContent = "Welcome to our restaurant";
    pageContent.appendChild(copy);
    content.appendChild(pageContent)
}

export default createRestaurantHomepage
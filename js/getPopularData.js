const top_rated_api_url = 'https://api.rawg.io/api/games?key=cb97c37fb7a240e8bb7c42e4c27a5623&platforms=187&dates=2023-01-01,2023-06-01&ordering=-rating';

function createNode(element) {
    return document.createElement(element);
}

function addClass(element, className) {
    return element.classList.add(className);
}

async function getPopular() {
    const response = await fetch(top_rated_api_url);
    const data = await response.json()

    const stackContentContainer = document.getElementById('top-rated');

    for(let count = 0; count < 5; count++) {
        /* Create thumbnail div */
        let thumbnailWrapper = createNode('div');
        addClass(thumbnailWrapper, 'thumbnail-wrapper');
        thumbnailWrapper.setAttribute('id', 'stack-thumbnail');

        /* Create thumbnail img element, set img src, and append to thumbnail div */
        const itemThumbnail = createNode('img');
        itemThumbnail.src = data.results[count].background_image;
        thumbnailWrapper.appendChild(itemThumbnail);

        /* Create block text div */
        let blockText = createNode('div');
        addClass(blockText, 'block-text');

        /* Create time wrapper div and append time element */
        let timeWrapper = createNode('div');
        addClass(timeWrapper, 'time-wrapper');
        const time = createNode('time');
        time.innerHTML = '2d';
        timeWrapper.appendChild(time);

        /* Create title div, set name, and append title element */
        let titleWrapper = createNode('div');
        addClass(titleWrapper, 'title-wrapper');
        const title = createNode('h3');
        title.innerHTML = data.results[count].name + ' Review';
        titleWrapper.appendChild(title);

        /* Create comments wrapper and append comments element */
        let commentsWrapper = createNode('div');
        addClass(commentsWrapper, 'comments-wrapper');
        const comments = createNode('i');
        addClass(comments, 'fa');
        addClass(comments, 'fa-comments-o');
        comments.innerHTML = 101;
        commentsWrapper.appendChild(comments);

        /* Append time wrapper, title, and desc to block text */
        blockText.appendChild(timeWrapper);
        blockText.appendChild(titleWrapper);
        blockText.appendChild(commentsWrapper);

        /* Create stack wrapper for block text and thumbnail */
        let stackItemWrapper = createNode('div');
        addClass(stackItemWrapper, 'stack-item-wrapper');

        /* Append thumbnail and block text divs to wrapper */
        stackItemWrapper.appendChild(thumbnailWrapper);
        stackItemWrapper.appendChild(blockText);

        /*Append stack wrapper to container */
        stackContentContainer.appendChild(stackItemWrapper);
    } 
}
getPopular();
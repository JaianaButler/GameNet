const top_rated_api_url = 'https://api.rawg.io/api/games?key=cb97c37fb7a240e8bb7c42e4c27a5623&dates=2023-01-01,2023-06-01&ordering=-rating';

function createNode(element) {
    return document.createElement(element);
}

function addClass(element, className) {
    return element.classList.add(className);
}

async function getTopRated() {
    const response = await fetch(top_rated_api_url);
    const data = await response.json()

    const stackContentContainer = document.getElementById('top-rated');

    for(let count = 0; count < 5; count++) {
        /* Create thumbnail div */

        /* Create img element and append to thumbnail div */

        /* Create title div */
        let stackItemTitle = createNode('div');
        addClass(stackItemTitle, 'stack-item-title');

        /* Create h3 element and append to title div */
        const itemName = document.createElement('h3');
        itemName.innerHTML = data.results[count].name;

        stackItemTitle.appendChild(itemName);

        /* Create wrapper for title and thumbnail */
        let stackItemWrapper = createNode('div');
        addClass(stackItemWrapper, 'stack-item-wrapper');

        /* Append title and thumbnail divs to wrapper */
        stackItemWrapper.appendChild(stackItemTitle)
        
        /*Append wrapper to container */
        stackContentContainer.appendChild(stackItemWrapper);
    } 
}
getTopRated();
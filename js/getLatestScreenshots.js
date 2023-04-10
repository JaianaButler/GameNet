const latest_screenshots_api_url = 'https://api.rawg.io/api/games/906547/screenshots?key=cb97c37fb7a240e8bb7c42e4c27a5623';

async function getLatestScreenshots() {
    const response = await fetch(latest_screenshots_api_url);
    const data = await response.json()
    //console.log(data);
    const headerImage = document.createElement('img');
    headerImage.src = data.results[1].image;
    document.getElementById('header-thumbnail').appendChild(headerImage);
}
getLatestScreenshots();


/*fetch("https://rawg-video-games-database.p.rapidapi.com/games/3328", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
		"x-rapidapi-key": "79d884f68cmsh7b9b7ad7a0b244ep16be2djsned6542ee7705"
	}
})
.then(response => response.json())
.then(function(data) {
    let game = data.results;
    let jumbo = document.querySelector(".jumbotron");

    let img = createNode("img");
    img.src = game.background_image;
    img.style.width = "100%";
    img.style.height = "100%";
    append(jumbo, img);
})
.catch(err => {
	console.log(err);
});

function createNode(element) {
    return document.createElement(element);
}

function addClass(element, className) {
    return element.classList.add(className);
}

function append(parent, element) {
    return parent.appendChild(element);
}
*/
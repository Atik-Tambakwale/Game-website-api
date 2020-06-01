let gameUrl = 'https://api.rawg.io/api/games';
let gameName = 'https://api.rawg.io/api/games/grand-theft-auto-v';

let searchgame = document.querySelector("#searchGames");

searchgame.addEventListener("keyup", (e) => {
    let searchGame = e.target.value;
    gameSearch(searchGame);
});

let gameDetail = async () => {
    let gameData = await window.fetch(gameUrl);
    let gameResponseData = await gameData.json();
    console.log(gameResponseData);
    let gameInfo = gameResponseData.results;
    let gameOutput = [];
    for (let x of gameInfo) {
        gameOutput += `
                <div style="display: flex;
    background-color: rgba(192, 192, 192, 0.4);
    color: #ffffff;
    width: 76%;
    margin: 0 auto;
    margin-left: 22px;
    padding: 30px;
    margin: 10px;
    border-radius: 10px;">
                    <div id="gD-1">
                        <img src="${x.background_image}" alt="" class="gD1-img">
                    </div>
                    <div id="gD-2">
                        <h1 class="gd2-h1">${x.name}</h1>
                        <span class="gd2-span1">Release date: ${x.released}</span>
                        <span class="gd2-span2">Rating: ${x.rating}/${x.rating_top}</span>
                        <span class="gd2-span3">Reviews: ${x.reviews_count}</span>
                        <a onClick="">more details</a>
                    </div >
                </div > `;

        document.getElementById("gameDetail-1").innerHTML = gameOutput;

    }
}
gameDetail();

let searchBeerButton = document.querySelector(".searchBeerButton")
let outputContainer = document.querySelector('.output-beer')
let appContainer = document.querySelector('.app-container')

const beer = new punkBeer;
const beerUI = new UI;


window.addEventListener('resize', () => {
    console.log("Window Width: " + window.innerWidth)
})


searchBeerButton.addEventListener('click', function (event) {
    event.preventDefault();
    let input = document.querySelector('.beerInput');

    beer.getBeer(input.value).then((beer) => {
            beerUI.insertBeer(beer);
            window.setInterval(() => {
                input.addEventListener('click', () => {
                    let beerCard = document.querySelector('.card-container')
                    if (outputContainer.contains(beerCard)) {
                        beerCard.setAttribute('class', 'card-container-styles')
                        beerUI.fixCardWidths(beerCard);
                    } //End IF

                }) //End Event listener on the output container
            }, 1000) // End Set Interval   
            input.value = ''
            beerUI.beerMessage('btn btn-success', beer.beerData.image_url, 'Beer Successfully Added!');
        })
        .catch(beer => {
            console.log('No Such Beer Found')
        })
}) //END SEARCH BEER EVENT LISTENER
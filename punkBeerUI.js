class UI {
    constructor() {
        this.output = document.querySelector(".output-beer")
    }

    trackBeerPosition(pageCoordinateX, pageCoordinateY) {
        /*Somehow track where a new beerCard was inserted, get it's coordinates. Than come up with some code that will move the page to those exact coordinates so that the user can view the new beer that was added */
    }

    insertBeer(beer) {
        console.log(beer.beerData)
        this.output.innerHTML += `
            <div class="card-container"><a name="${beer.beerData.name}"></a>
                <div class="card">
                    <img class="img-thumbnail" src="${beer.beerData.image_url}" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text">Beer Name: <br> ${beer.beerData.name}</p>
                        <p class="card-text">About This Beer: <br> ${beer.beerData.description}</p>
                        <p class="card-text">First Brewed: <br> ${beer.beerData.first_brewed}</p>
                        <p class="card-text">Brewer's Tips: <br> ${beer.beerData.brewers_tips}</p>
                    </div>
                </div>
            </div>
        `
    } //END INSERTBEER PROTOTYPE

    fixCardWidths(beerCard) {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 700) {

                console.log("Less Than 700 Applied: " + window.innerWidth)
            } else if (window.innerWidth >= 700) {
                console.log("Greater Than 700 Applied: " + window.innerWidth)
            }
        })
    } //END FIX CARD WIDTHS PROTOTYPE

    beerMessage(classNameStyle, beerImage, message) {
        let div = document.createElement('div');
        div.setAttribute('class', 'beer-message')
        div.setAttribute('class', classNameStyle); //For Bootstrap Button
        div.style.wdith = '30%';

        let image = document.createElement('img');
        image.setAttribute('class', 'img-thumbnail')
        image.style.width = '10%';
        image.setAttribute('src', beerImage);
        div.appendChild(image);
        div.appendChild(document.createTextNode(message));

        document.querySelector('.app-container').insertBefore(div, this.output)
        document.querySelector('.beerInput').addEventListener('click', () => {
            div.remove();
        })
    } //end Beer Message Prototype

} //End UI CLASS

/*<div class="card" style="width: 18rem;"> 
<img class="card-img-top img-thumbnail rounded-float-left" src="${beer.beerData.image_url}" alt="Card image cap">

            if (window.matchMedia("(max-width:600px)").matches) {
            } else if (window.matchMedia("(min-width:601px)").matches) {

Version 1
    window.addEventListener('resize', () => {
        if (window.innerWidth < 600) {
            this.output.classList.remove('col-6');
            this.output.classList.add('col-12');
            console.log("Less Than 600 Applied: " + window.innerWidth)
        } else {
            if (this.output.classList != 'col-6 cards-container') {
                this.output.classList.add('col-6');
                console.log("Greater Than 600 Applied: " + window.innerWidth)
            }
        }
    }
)
End Version 1

Version 2
    fixCardWidths(beerCards) {
        window.setInterval(() => {
            if (window.innerWidth < 700) {
                if (beerCards.className === 'col-6') {
                    beerCards.removeAttribute('class');
                }
                beerCards.setAttribute('class', 'col-12');
                console.log("Less Than 700 Applied: " + window.innerWidth)
                console.log(beerCards.classList)
            } else {
                if (beerCards.className === 'col-12') {
                    beerCards.removeAttribute('class')
                }
                beerCards.setAttribute('class', 'col-6');
                console.log("Greater Than 700 Applied: " + window.innerWidth)
                console.log(beerCards.classList)
            }
        }, 1000) //END FIX CARD WIDTHS PROTOTYPE
    }
End Version 2

*/
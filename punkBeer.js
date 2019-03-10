class punkBeer {

    async getBeer() {
        const response = await fetch("https://api.punkapi.com/v2/beers/random");
        const responseData = await response.json();

        return {
            beerData: responseData[0],
        }

    }
}
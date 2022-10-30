const housesDiv = document.querySelector('.house-cards')


function makeHouseCard (houses) {
    
    const houseHTMLElements = 
    `
    <div class="house-card" id="house-num-${houses['house_id']}">
        <div>
            <img class="card-pic" src="${houses['img']}" alt="House Photo">
        </div>
        <h2>${houses['address']}</h2>
        <h3>Notes:</h3>
        <p>${houses['notes']}</p>
    </div>
    `
    // ^^^ add radio button for updated contacted -- how do I make it so the radio buttons correspond to true/false in sql????

    return houseHTMLElements
}

function getAllHouses() {
    axios.get('/api/getHouses') .then(res => {
            for (let i =0; i < res.data.length; i++) {
                const house = res.data[i];
                const houseHTML = makeHouseCard(house)
                housesDiv.innerHTML += houseHTML
            }
        }) 
    }



getAllHouses()



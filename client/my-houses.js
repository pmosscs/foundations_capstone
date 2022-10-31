/************* DOCUMENT SELECTORS *************/
const housesDiv = document.querySelector('.house-cards')
const contactedCard = document.querySelector('.contacted-cards')
const archivedCards = document.querySelector('.archived-cards')
const liveCards = document.querySelector('.house-cards')
const vewArchivedBtn = document.querySelector('.view-btn')
const goBackBtn = document.querySelector('.go-back')
const getAddressesBtn = document.querySelector('.get-addresses')
const addressesDiv = document.querySelector('.address-div')
const goBack2Btn = document.querySelector('.go-back-2')


/************* CREATE CARD FUNCTIONS *************/
 // ^^^ Maybe use a drop down menu for updates like DNC, offer sent, offer accepted, no reply. What about names?
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
        <button onclick="deleteHouse(${houses['house_id']})">Delete</button>
        <button onclick="archiveHouse(${houses['house_id']}, true)" id="archive-btn">Archive</button>
        <button onclick="contactedBtn(${houses['house_id']}, false)" id="contact-btn">Contacted</button>
    </div>
    `
    return houseHTMLElements
}

function makeContactedHouseCard (houses) {
    
    const contactedHTMLElements = 
    `
    <div class="contacted-house-card" id="house-num-${houses['house_id']}">
        <div>
            <img class="card-pic" src="${houses['img']}" alt="House Photo">
        </div>
        <h2>${houses['address']}</h2>
        <h2 class="card-subtitle">Contacted</h2>
        <h3>Notes:</h3>
        <p>${houses['notes']}</p>
        <button onclick="deleteHouse(${houses['house_id']})">Delete</button>
        <button onclick="archiveHouse(${houses['house_id']}, true)" id="archive-btn">Archive</button>
        <button onclick="undoContacted(${houses['house_id']}, true)" id="undo-btn">Undo Contacted</button>
    </div>
    `
    return contactedHTMLElements
}

function makeArchivedCards(houses) {
    const archivedHTMLElements = 
    `
    <div class="contacted-house-card" id="house-num-${houses['house_id']}">
        <div>
            <img class="card-pic" src="${houses['img']}" alt="House Photo">
        </div>
        <h2>${houses['address']}</h2>
        <h2 class="card-subtitle">Archived</h2>
        <h3>Notes:</h3>
        <p>${houses['notes']}</p>
        <button onclick="deleteHouse(${houses['house_id']})">Delete</button>
    </div>
        <button onclick="undoArchive(${houses['house_id']}, true)">Undo Archive</button>
    `
    return archivedHTMLElements
}

function getAddressHTML (houses) {
    const addressesHTML =
    `
    <h4>${houses['address']}</h4>
    `
    return addressesHTML
}


/************* GET FUNCTIONS ON LOAD *************/
function getAllContactedHouses() {
    axios.get('/api/getContactedHouses').then(res => {
            for (let i =0; i < res.data.length; i++) {
                const chouse = res.data[i];
                const houseHTML = makeContactedHouseCard(chouse)
                contactedCard.innerHTML += houseHTML
            }
        }).catch(err => console.log(err))
}


function getAllHouses() {
    axios.get('/api/getHouses').then(res => {
            for (let i =0; i < res.data.length; i++) {
                const house = res.data[i];
                const houseHTML = makeHouseCard(house)
                housesDiv.innerHTML += houseHTML
            }
        }) 
}

function getArchivedHouses() {
    axios.get('/api/getArchived').then(res => {
        for (let i = 0; i < res.data.length; i++) {
            const house = res.data[i];
            const archivedHTML = makeArchivedCards(house)
            archivedCards.innerHTML += archivedHTML
        }
    })
}

function getAddress() {
    axios.get('/api/getAddresses').then(res => {
        for (let i = 0; i < res.data.length; i++) {
            const house = res.data[i];
            const addressHTML = getAddressHTML(house)
            addressesDiv.innerHTML += addressHTML
        }
    })
}


/************* CARD BUTTON FUNCTIONS *************/
function deleteHouse(id) {
    axios.delete(`/api/houses/${id}`)
    .then(() => location.reload())
    .catch(err => console.log(err))
}

function contactedBtn(id, change) {
    axios.put(`/api/houses/${id}`, change)
    .then(() => location.reload())
    .catch(err => console.log(err))
}

function undoContacted(id, change) {
    axios.put(`/api/houses/undo/${id}`, change)
    .then(() => location.reload())
    .catch(err => console.log(err))
}

function archiveHouse(id, change) {
    axios.put(`/api/houses/archive/${id}`, change)
    .then(() => location.reload())
    .catch(err => console.log(err))
}

function undoArchive(id, change) {
    axios.put(`/api/houses/undoArchive/${id}`, change)
    .then(() => location.reload())
    .catch(err => console.log(err))
}


/************* EVENT FUNCTIONS *************/
function viewArchived() {
    archivedCards.classList.toggle('hidden')
    contactedCard.classList.toggle('hidden')
    liveCards.classList.toggle('hidden')
    vewArchivedBtn.classList.toggle('hidden')
    goBackBtn.classList.toggle('hidden')
    getAddressesBtn.classList.toggle('hidden')    
}

function goBack() {
    archivedCards.classList.toggle('hidden')
    contactedCard.classList.toggle('hidden')
    liveCards.classList.toggle('hidden')
    vewArchivedBtn.classList.toggle('hidden')
    goBackBtn.classList.toggle('hidden')
    getAddressesBtn.classList.toggle('hidden')
}

function getAddresses() {
    addressesDiv.classList.toggle('hidden')
    contactedCard.classList.toggle('hidden')
    liveCards.classList.toggle('hidden')
    vewArchivedBtn.classList.toggle('hidden')
    goBack2Btn.classList.toggle('hidden')
    getAddressesBtn.classList.toggle('hidden')
}

function goBack2 () {
    addressesDiv.classList.toggle('hidden')
    contactedCard.classList.toggle('hidden')
    liveCards.classList.toggle('hidden')
    vewArchivedBtn.classList.toggle('hidden')
    goBack2Btn.classList.toggle('hidden')
    getAddressesBtn.classList.toggle('hidden')
}



/************* EVENT HANDLERS *************/
vewArchivedBtn.addEventListener('click', viewArchived)
goBackBtn.addEventListener('click', goBack)
getAddressesBtn.addEventListener('click', getAddresses)
goBack2Btn.addEventListener('click', goBack2)



/************* PAGE CALLS *************/
getAllHouses()
getAllContactedHouses()
getArchivedHouses()
getAddress()
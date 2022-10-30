

const addBtn = document.querySelector('.formBtn')

/** Post to use during event handler **/
const addHouse = (body) => {
    axios.post("/api/addHouse", body).then().catch(err => console.log(err))
}

/** The event handler that uses the post function **/
const submitHouse = (event) => {
    event.preventDefault()

    let address = document.querySelector('.address-input')
    let notes = document.querySelector('.notes-input')
    let img = document.querySelector('.img-input')

    let houseObj = {
        address: address.value,
        notes: notes.value,
        img: img.value
    }
   
    addHouse(houseObj)

    address.value = ''
    notes.value = ''
    img.value = ''
}

addBtn.addEventListener('submit', submitHouse);
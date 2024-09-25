console.log("in renderChair!!!!!")

const renderChair = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/chairs')
    const data = await response.json()

    console.log(data)

    const chairContent = document.getElementById('chair-content')
    let chair
    if (data) {
        chair = data.find(chair => chair.id === requestedID)
    }

    if (chair) {
        document.getElementById('image').src = chair.image
        document.getElementById('name').textContent = chair.name
        document.getElementById('designer').textContent = 'Designed by: ' + chair.designer
        document.getElementById('year').textContent = 'Year: ' + chair.year
        document.getElementById('materials').textContent = 'Materials Used: ' + chair.materials
        document.title = `Chairs - ${chair.name}`      
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Chairs Available 😞'
        chairContent.appendChild(message)       
    }

}

renderChair()
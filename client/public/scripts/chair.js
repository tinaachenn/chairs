const renderChair = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/chairs')
    const data = await response.json()

    const chairContent = document.getElementById('chair-content')
    let chair
    if (data) {
        chair = data.find(chair => chair.id === requestedID)
    }

    if (chair) {
        document.getElementById('image').src = chair.image
        document.getElementById('name').textContent = chair.name
        document.getElementById('submittedBy').textContent = 'Submitted by: ' + chair.submittedBy
        document.getElementById('pricePoint').textContent = 'Price: ' + chair.pricePoint
        document.getElementById('audience').textContent = 'Great For: ' + chair.audience
        document.getElementById('description').textContent = chair.description
        document.title = `UnEarthed - ${chair.name}`      
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Chairs Available 😞'
        chairContent.appendChild(message)       
    }

}

renderChair()
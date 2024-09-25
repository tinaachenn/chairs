// contain all the JavaScript code to add elements to the <main> element

console.log("in renderChairs")

const renderChairs = async () => {
    
    const response = await fetch('/chairs')
    const data = await response.json()

    // console.log(data)
    const mainContent = document.getElementById('main-content')

    if (data) {

        data.map(chair => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${chair.image})`

            const name = document.createElement('h3')
            name.textContent = chair.name
            bottomContainer.appendChild(name)

            const designer = document.createElement('p')
            designer.textContent = 'Designed by: ' + chair.designer
            bottomContainer.appendChild(designer)

            const year = document.createElement('p')
            year.textContent = 'Year: ' + chair.year
            bottomContainer.appendChild(year)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/chairs/${chair.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer) 
            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Chairs Available 😞'
        mainContent.appendChild(message)
    }
}

// const requestedUrl = window.location.href.split('/').pop()

// if (requestedUrl) {
//     window.location.href = '../404.html'
//   }
//   else {
    renderChairs()

//   }
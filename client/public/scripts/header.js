// contain all the JavaScript code to add elements to the <header> element

// const header = document.querySelector('header')

// const headerContainer = document.createElement('div')
// headerContainer.className = 'header-container'

// const headerLeft = document.createElement('div')
// headerLeft.className = 'header-left'

// const headerLogo = document.createElement('img')
// headerLogo.src = '/logo.png'

// const headerTitle = document.createElement('h1')
// headerTitle.textContent = 'Chairs'

// headerLeft.appendChild(headerLogo)
// headerLeft.appendChild(headerTitle)

// const headerRight = document.createElement('div')
// headerRight.className = 'header-right'

// const headerButton = document.createElement('button')
// headerButton.textContent = 'Home'


const headerButton = document.querySelector('button')
console.log(headerButton)
headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/'
})

// headerRight.appendChild(headerButton)

// headerContainer.appendChild(headerLeft)
// headerContainer.appendChild(headerRight)

// header.appendChild(headerContainer)


// contain all the JavaScript code to add elements to the <main> element

const renderChairs = async () => {
    try {
        const response = await fetch('/chairs');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        const mainContent = document.getElementById('main-content');
        if (data && data.length > 0) {
            data.forEach(chair => {
                const card = document.createElement('div');
                card.classList.add('card');

                const topContainer = document.createElement('div');
                topContainer.classList.add('top-container');
                topContainer.style.backgroundImage = `url(${chair.image})`;

                const bottomContainer = document.createElement('div');
                bottomContainer.classList.add('bottom-container');

                const name = document.createElement('h3');
                name.textContent = chair.name;
                bottomContainer.appendChild(name);

                const pricePoint = document.createElement('p');
                pricePoint.textContent = 'Price: ' + chair.pricePoint;
                bottomContainer.appendChild(pricePoint);

                const audience = document.createElement('p');
                audience.textContent = 'Great For: ' + chair.audience;
                bottomContainer.appendChild(audience);

                const link = document.createElement('a');
                link.textContent = 'Read More >';
                link.setAttribute('role', 'button');
                link.href = `/chairs/${chair.id}`;
                bottomContainer.appendChild(link);

                card.appendChild(topContainer);
                card.appendChild(bottomContainer);
                mainContent.appendChild(card);
            });
        } else {
            const message = document.createElement('h2');
            message.textContent = 'No Chairs Available 😞';
            mainContent.appendChild(message);
        }
    } catch (error) {
        console.error('Error fetching chairs:', error);
        const mainContent = document.getElementById('main-content');
        const message = document.createElement('h2');
        message.textContent = 'Error fetching chairs 😞';
        mainContent.appendChild(message);
    }
};


const requestedUrl = window.location.pathname.split('/').pop();

if (requestedUrl && !/^[0-9]+$/.test(requestedUrl)) {
    window.location.href = '../404.html';
} else {
    renderChairs();
}

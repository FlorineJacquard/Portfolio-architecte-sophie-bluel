




async function fetchWorks() {
    const r = await fetch('http://localhost:5678/api/works', {
        method: 'GET',
        headers: {
            "Accept": "application/json",
        },
    });

    if (r.ok) {
        return r.json();
    }

    throw new Error('Impossible de contacter le serveur');
}

function displayElements (works) {
    const gallery = document.getElementsByClassName("gallery")
    
    works.forEach(work => {
        const figure = document.createElement("figure")
  
        const image = document.createElement("img")
        image.src = work.imageUrl

        const figcaption = document.createElement("figcaption")
        figcaption.textContent = work.title
        
        figure.appendChild(image)
        figure.appendChild(figcaption)

        gallery[0].appendChild(figure)

    });
}
fetchWorks().then(works => displayElements(works));



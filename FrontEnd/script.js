




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
        figure.classList.add("work")
  
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


/* au clic sur un autre bouton que le bouton "tous", le bouton change de couleur car le filtre active est déplacé */


   const buttons = Array.from(document.getElementsByClassName("filter"));
   
    buttons.forEach(button => {
        button.addEventListener("click", function(){
            const buttonActive = Array.from(document.getElementsByClassName("active"))
            buttonActive.forEach(element => {
                element.classList.remove("active")
            })
            button.classList.add("active")
        })
    })


   

/* au clic sur le filtre objet, s'affichent seulement les catégories objet de l'API */

const buttonsAPI = Array.from(document.getElementsByClassName("filter"));


buttonsAPI.forEach(bouton => {
    bouton.addEventListener("click", function() {

    const gallery = document.getElementsByClassName("gallery")[0];
    gallery.innerHTML = '';
    })
})


const premierBouton = buttonsAPI[0];
console.log(premierBouton);

premierBouton.addEventListener("click", function(){
    fetchWorks().then(works => displayElements(works));
    
})


const ButtonCategoryObject = buttonsAPI[1]

ButtonCategoryObject.addEventListener("click", function(){
    //appel api
    fetchWorks().then(works => {
        // création du tableau filtré 
       const filteredWorks = []

       works.forEach(element => {
        if (element.categoryId === 1 ) {
            filteredWorks.push(element)
        }
       })
       displayElements(filteredWorks)
    });
    
})


const buttonCategoryAppartement = buttonsAPI[2]

buttonCategoryAppartement.addEventListener("click", function() {
    fetchWorks().then(works => {
        const filteredArray = []
        
        works.forEach(work => {
            if (work.categoryId === 2) {
                filteredArray.push(work)
            }
        })
        displayElements(filteredArray)
    })
} )




// j'écoute lme click sur le bouton 
// quand je clique je déclnche l'appel api avec ma fonction fetchWorks
// je créer une boite pour mettre mes éléments trié
// pour chaque works de la réponse je fais : 
// si le work en question appartient à la catégorie 3 
//alors je le met dans ma boite triée
// une fois que ma boite est trié je l'affiche dans la console
// c'est bien je suis tyrès forte 

const buttonCategoryHotel = buttonsAPI[3]
buttonCategoryHotel.addEventListener("click", function() {
    fetchWorks().then(works => {
        console.log(works)
        const filteredArray = []

        works.forEach(element => {
            if (element.categoryId === 3) {
                console.log(element.title)
                filteredArray.push(element)
            }
        })
        displayElements(filteredArray)
    })
})







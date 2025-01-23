
const mainDiv = document.getElementById('box')
//  for(let i= 1;i<=10;i++){
//     const myDiv = document.createElement('div');
// const para = document.createElement("p")
// para.classList.add('usha')
// para.textContent = "Hello Everyone"

// const image = document.createElement('img')
// image.src = 
//             "https://i.pinimg.com/originals/0f/0d/ff/0f0dffa3fdfef353cab1266ad7c78d88.jpg "
// image.alt = "teddybear"
// myDiv.append(image, para)
// mainDiv.appendChild(myDiv)

//  }

const Heros = [
    {
        Title:"Chiranjeevi",
        imagelink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp7Kna6GYPoPYAkVfX_y8tzk7xEiwE3fvfQ&s",
        year:1970,
        
        
    },
    {
        Title:"Prabhas",
        imagelink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSXRKWw4Zix9b-GDAdlLWDEVyLaVP9DBqIvA&s",
        year:1969,
        
    },
    {
        Title:"Maheshbabu",
        imagelink:"https://e7.pngegg.com/pngimages/212/536/png-clipart-mahesh-babu-video-film-andala-rakshasi-tollywood-bollywood-stars-biography-purple-tshirt-thumbnail.png",
        year:1970,
        
    },
    {
        Title:"Ram pothineni",
        imagelink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9R25QvpaQXlA7vf0-EgFqLfQ-ShHxkBaA7A&s"
        
    },
    {
        Title:"Dulqar Salman",
        imagelink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeS1C1vqPBk05mFaFiwhP6CRIrjfL_D2GsRw&s"
        
    },
    {
        Title:"Pawan Kalyan",
        imagelink:"https://w7.pngwing.com/pngs/878/278/png-transparent-man-wearing-black-crew-neck-top-and-silver-colored-dog-tag-necklace-pawan-kalyan-agnyaathavaasi-tollywood-film-high-definition-video-actor-thumbnail.png"
        
    },
    {
        Title:"Ram charan",
        imagelink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgljJO95eW0GNHUPpiAl23X51TrOtZ7_GOkg&s"
    },
    {
        Title:"Ram charan",
        imagelink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgljJO95eW0GNHUPpiAl23X51TrOtZ7_GOkg&s"
    },
    
]
function displayData ()
{
    Heros.forEach((val) => {
        
        const herosDiv= document.createElement('div');
        herosDiv.classList.add('Heros')
        const herosImg = document.createElement('img');
        herosImg.src=val.imagelink;
        herosImg.alt=val.Title;
        const heropara=document.createElement('p')
        heropara.textContent=val.Title;
        const year = document.createElement('p')
        year.textContent=val.year
      herosDiv.append(herosImg,heropara,year);
        mainDiv.appendChild(herosDiv)

        
    });
}

displayData()
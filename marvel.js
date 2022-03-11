const timeStamp = '1645124138';
const apiKey = '8a2fadc476d0fc20630892a3c0890c97';
const md5 = '02b3febd93a146ddf2c4cdd8085e1c82';

fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=100`
).then((resposta)=> {
    return resposta.json();
}).then((jsonParsed) =>{
   const divHero = document.querySelector('#herois');
console.log(jsonParsed)
   jsonParsed.data.results.forEach(element => {
       
    if (element.thumbnail.path != "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && element.thumbnail.path != "https://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708" ) {
        const imageSrc = element.thumbnail.path +'.'+ element.thumbnail.extension
        const nameHero = element.name
        createDivHero(imageSrc, nameHero, divHero);
       }
   }); 
})

function createDivHero(imageSrc, nameHero, divToAppend) {
    const divPai = document.createElement('div')
    const divFilho = document.createElement('div')
    const textName = document.createElement('text')
    const img = document.createElement('img')

    textName.textContent=nameHero
    img.src = imageSrc

    divFilho.appendChild(img)
    divFilho.appendChild(textName)
    divPai.appendChild(divFilho)
    divToAppend.appendChild(divPai)

    divPai.classList.add("personagem");
}
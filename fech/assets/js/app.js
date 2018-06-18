const inputText= document.querySelector("input");
const boton= document.getElementById("buscar-gif");
const containerImage= document.getElementById("img")

inputText.addEventListener("click", event=>{
  let gif= document.getElementById("gif-text").value="";
    console.log(gif)
})

fetch(`https://api.giphy.com/v1/gifs/trending?api_key=qGfs8n75RXQjRDXfiAZYistSGYAmey7O&limit=25&rating=G`)
  .then(respgif => respgif.json())
  .then(datos =>{
    console.log(datos);
    renderInfo(datos);
  })

  const renderInfo= datos =>{
    containerImage.innerHTML += `<img src="${datos.url}">`;
  }
  
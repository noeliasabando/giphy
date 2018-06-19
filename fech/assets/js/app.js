const inputText= document.querySelector("input");
const boton= document.getElementById("buscar-gif");
const containerImage= document.getElementById("img")

boton.addEventListener("click", event=>{
  let gif= document.getElementById("gif-text").value;
  inputText.value="";
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=qGfs8n75RXQjRDXfiAZYistSGYAmey7O&q=${gif}&limit=25&offset=0&rating=G&lang=es`)
  .then(response => response.json())
  .then(datos =>{
    console.log(datos);
    renderInfo(datos);
  })
})


const renderInfo= datos =>{
  containerImage.innerHTML="";
  datos.data.forEach((gif)=>{
    containerImage.innerHTML += `<img src="${gif.images.fixed_width.url}">`;
  })   
}
  
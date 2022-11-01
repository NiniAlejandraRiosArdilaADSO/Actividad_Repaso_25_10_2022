addEventListener("DOMContentLoaded", (e)=>{
if (dato) {
    
}
   
   
   
   
    let formulario= document.querySelector("#myForm")
    formulario.addEventListener("submit", (e)=>{
        e.preventDefault();
        let dato = Object.fromEntries(new FormData(e.target))
        let nombre = dato.name;
        document.querySelector("#respuesta").insertAdjacentHTML("beforebegin", `${nombre} ${dato.horas}`)
    })

})
const producto = [
{"id":1,"nombre": "Whal Magic Clip","precio": 15000,"descripcion":'asdasasdsadasdasdasdasdadasdasdasdasda',"categoria":"Clipper","cantidad":1,"imagen":"./assets/img/0001.jpeg"},
{"id":2, "nombre": "Babyliss Goldfx", "precio": 22000, "descripcion":'asdasasdsadasdasdasdasdadasdasdasdasda', "categoria":"Clipper" ,"cantidad":1,"imagen":"./assets/img/0002.jpeg"},
{"id":3, "nombre": "Eurostil k-3600", "precio": 7000,"descripcion":'asdasasdsadasdasdasdasdadasdasdasdasda', "categoria":"Clipper" ,"cantidad":1,"imagen":"./assets/img/0003.jpeg"},
{"id":4, "nombre": "Yasaka", "precio": 6400,"descripcion":'asdasasdsadasdasdasdasdadasdasdasdasda', "categoria":"Clipper" ,"cantidad":1,"imagen":"./assets/img/0004.jpeg"},
{"id":5, "nombre": "Whal Super Taper", "precio": 9540, "descripcion":'asdasasdsadasdasdasdasdadasdasdasdasda', "categoria":"Clipper" ,"cantidad":1,"imagen":"./assets/img/0005.jpeg"}]



export const getFetch  = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(producto)
    }, 2000)
})
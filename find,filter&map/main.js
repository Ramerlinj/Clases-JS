//find

const usuarios = [
    { id:1, name: 'Juan', age: 25 },
    { id:2, name: 'Pedro', age: 30 },
    { id:3, name: 'Maria', age: 20 },
    { id:4, name: 'Ana', age: 35 },
    { id:5, name: 'Ana', age: 32 }

]

const usuariosEncontrados = usuarios.find(usuarios => usuarios.name === 'Ana');

document.write(`El usuario encontrado es: ${usuariosEncontrados.name} y su edad es: ${usuariosEncontrados.age} <br/>`);


//filter

const productos =[
    {id:1, name: 'Laptop', price: 1000},
    {id:2, name: 'Mouse', price: 20},
    {id:3, name: 'Keyboard', price: 52},
    {id:4, name: 'Monitor', price: 211},
    {id:5, name: 'PC', price: 1200}
]

const productosPreciosBajos = productos.filter(productos => productos.price < 500)

document.write('<br>Los productos con precio menor a 500 son: <br>');

//forEach
//forEach es un metodo que nos permite recorrer un arreglo y ejecutar una funcion por cada elemento del arreglo

//ForEach(elemento, indice, array) => {}
productosPreciosBajos.forEach((producto, index) => {
    document.write(`${index + 1}. El producto es: ${producto.name} y su precio es: ${producto.price} <br>`);
})

//Map

const nombreProductos = productos.map(productos => productos.price % 2===0 ? productos.name : null)
document.write(`<br>Los nombres de los productos son: ${nombreProductos} <br>`);

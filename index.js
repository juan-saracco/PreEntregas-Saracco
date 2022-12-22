//simulador de carrito de compras anteojos
alert('bienvenidos al simulador de filtrado de anteojos')

//declaro mi array 'anteojos' vacio
const anteojos =[]

//armo la clase constructora 
class anteojo{
    constructor(modelo, color, precio, material){
        this.modelo = modelo;
        this.color = color;
        this.precio = parseFloat(precio);
        this.material = material;
        this.id = anteojos.length + 1;
    }
}

//armo los objetos a traves de la clase constructora utilizando el operador new y los pusheo al array 'anteojos'
anteojos.push(new anteojo('redondo', 'blanco', 4000, 'acetato'));
anteojos.push(new anteojo('cuadrado', 'negro', 5000, 'metal'));
anteojos.push(new anteojo('redondo', 'gris', 5500, 'madera'));
anteojos.push(new anteojo('rectangular', 'rojo', 3500, 'acetato'));
anteojos.push(new anteojo('redondo', 'verde', 4300, 'metal'));
anteojos.push(new anteojo('cuadrado', 'azul', 4800, 'madera'));
anteojos.push(new anteojo('cuadrado', 'amarillo', 5100, 'acetato'));
anteojos.push(new anteojo('rectangular', 'negro', 8400, 'titanio'));
anteojos.push(new anteojo('cuadrado', 'verde', 6000, 'metal'));
anteojos.push(new anteojo('redondo', 'rosa', 4700, 'acetato'));

console.log(anteojos);

//creo una funcion para filtrar por menor precio

function filtrarMenor(arr, filtro){
   return arr.filter(el=>{
    return el.precio < filtro});
};

//guardo la funcion en una constante
const menorPrecio = filtrarMenor(anteojos, parseFloat(prompt('ingresa el precio que estas dispuesto a pagar($3500-$8400)')));

//muestro en consola los elemntos que cumplen el filtro
console.log(menorPrecio);


//creo una funcion para filtrar por color
function filtrarColor(arr, filtro){
    return arr.filter(el=>{
        return el.color == filtro.toLowerCase()
    })
};

//guardo la funcion en una constante 
const color = filtrarColor(anteojos, prompt('ingresa el color del anteojo que mas te guste'));

//muestro en consola los elementos que cumplen el filtro
console.log(color);

//armo una funcion para filtrar por forma
function filtrarForma(arr, filtro){
    return arr.filter(el=>{
        return el.modelo ==filtro.toLowerCase();
    })
}

//guardo la funcion en una const
const filtradoForma = filtrarForma(anteojos, prompt('ingresa la forma (redondo, cuadrado o rectangular)'));

//muestro por consola los que cumplen la condicion
console.log(filtradoForma);





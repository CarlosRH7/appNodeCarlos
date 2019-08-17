// var numeros = [6, 5, 3, 1, 8, 7, 2, 4];

// for( var i =0; i < numeros.length; i++){
//     alert(numeros[i]);
// }

// function promedio(num1, num2, num3, num4, num5){

// }

// promedio(7, 5, 8, 9, 10);


// Imprimir lo numeros del 1 al 1000
// multiplos de 3 (3, 6, 9, 12, ....) = Fizz
// multiplos de 5 (5, 10. 15, ...) = buzz

// multiplos de 3 y 5 (15, 30..) = fizzBuzz


// for(var i=1; i<=100; i++){
//     if(i%3==0){
//         console.log('Fizz');
//     }else{
//         console.log(i);
//     }
// }




// EdadIan 19
// EdadBeto 23

// var edadIan = 18;
// var edadBeto = 23;

// console.log('Edad de Ian:' + edadIan);


var factura = {
    emisor:{
        nombre:'casa campesino',
        direccion:'colonia centro',
        telefono:'123456789',
        rs:'Moral'
    },
    receptor:{
        nombre:'Carlos',
        direccion:'colonia Ramos',
        telefono:'09876543',
        rs:'Fisica'
    },
    concepto:[
        {descripcion:'pala', cantidad:2, precio:200},
        {descripcion:'Lampara', cantidad:1, precio:90},
        {descripcion:'tornillos', cantidad:20, precio:1},
        {descripcion:'caguamas', cantidad:24, precio:190},
    ],
    datos:{
        iva:16,
        pago:'efectivo'
    }
};

// console.log(factura.concepto.length);
let total = 0;

for (let index = 0; index < factura.concepto.length; index++) {
    console.log(factura.concepto[index].descripcion);
    var cantidad = factura.concepto[index].cantidad;
    var precio = factura.concepto[index].precio;

    var result = cantidad * precio;
    total += result;
}
// var iva = factura.datos.iva;
var totalMasIva = total+(total*.16)
console.log(totalMasIva);

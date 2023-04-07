
// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
function ParImpar(n){
    if (n%2 ===0){
        console.log(` ${n} es par`)
    }
    else {
        console.log(` ${n} es impar`)
    }
}

ParImpar(4)
ParImpar(17)

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function Mayor(n1,n2){
    if (n1 > n2){
        console.log(` ${n1} es mayor a ${n2}`)
    }
    else if(n2 > n1) {
        console.log(`${n2} es mayor a ${n1}`)
    }

    else {
        console.log("Los números son iguales")
    }
}

Mayor(10,9)
Mayor(2,200)
Mayor(4,4)

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
function MultiploCinco(x){
    if (x%5 ===0){
        console.log(` ${x} es múltiplo de cinco`)
    }
    else {
        console.log(` ${x} no es múltiplo de cinco`)
    }
}

MultiploCinco(25)
MultiploCinco(14)

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
function ListaHasta(x){
    for (let i=0; i<=x; i++){
        console.log(i)
    }
}

ListaHasta(10)

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
function RepetirPalabra(palabra,n){
    for (let i=0; i<=n; i++){
        console.log(palabra)
    }
}

RepetirPalabra("Hola",5)

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
function RecorreArray(array){
    for (const elemento of array) {
        console.log(elemento)
    }
}

let array1 = ["Hola","Mundo",1,2,3,"Chau"]
RecorreArray(array1)

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
function ArrayDiez(array){
    for (let i=0; i<=9; i++){
        if(i !==4){
            console.log(array[i])
        }
    }
}

let array2 = [1,2,3,4,5,6,7,8,9,10]
ArrayDiez(array2)

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
function MultiplicarArray(array,n){
    for (let i=0; i < array.length; i++){
        console.log(array[i] * n)
    }
}


let array3 = [1,2,3,4,5,6,7,8,9,10]
MultiplicarArray(array3,2)
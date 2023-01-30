
/* ARREGLOS

METODOS PARA HACER ARREGLOS
*/

/* CAJERO ELECTRONICO QUE ME PERMITE INGRESAR UN USUARIO, CONTRASEÑA Y LAS SIGUIENTES ACCIONES 
- CONSULTAR
- CONSIGNAR
- RETIRAR
- TRANSFERIR */

let saldoCuenta = 0
let valor = 0
let repetir = (true)

while (repetir) {
    
let menu = prompt (`Selecciones una opción \n1. Consultar saldo \n2. Retirar \n3. Retirar \n4. Transferir \n5. Salir`)
switch (parseInt(menu)) {
    case 1:
        alert (`Su saldo es: $  + saldoCuenta`)
        break;
    case 2:
        valor = prompt(`Ingrese el valor a retirar: $ `)
        if (valor > saldoCuenta){
            alert(`Saldo insuficiente.`)
        }else{
            alert (`Su retiro fue exitoso. Nuevo saldo es: $  ${saldoCuenta = saldoCuenta - valor})`)
            alert (`Su retiro fue exitoso. Nuevo saldo es: $  ${saldoCuenta -= valor}`)
        }
        break;
    case 3:
        valor = prompt(`Ingrese el valor a consignar: `)
        saldoCuenta += valor
        alert ("Su nuevo saldo es:  $ " + saldoCuenta)
        break;
    case 4:
        valor = prompt(`Ingrese el valor a transferir: `)
        if (valor > saldoCuenta){
            alert(`Saldo insuficiente.`)
        }else{
            alert (`Transferencia exitosa. Nuevo saldo es: $ + (saldoCuenta = saldoCuenta - valor)`)
        }
    case 5:
        repetir = false
        break;
       
    
}
}
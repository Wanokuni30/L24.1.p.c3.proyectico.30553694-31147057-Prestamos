import Dt_prestamos from "./Dt_prestamos.js";
import Dt_oficina from "./Dt_oficina.js";
import Cl_oficina from "./Cl_oficina.js";

let oficina = new Cl_oficina(Dt_oficina.montoDisponible, Dt_oficina.porcComisionMensual);

Dt_prestamos.forEach((p) => oficina.agregarPrestamo(p.cliente, p.codigo, p.prestamo, p.meses));

let montoFinal = () => {
    let acumulador = 0;
    oficina.prestamos.forEach((p) =>{
        acumulador += p.prestamo;
    });
    return oficina.montoDisponible - acumulador;
};

let clientes2Meses = () => {
    let clientes = [];
    oficina.prestamos.forEach((p) =>{
        if (p.meses == 2) clientes.push(p);
    });
    return clientes;
};

let prestamoMinimo = () => {
    let menor = Infinity;
    oficina.prestamos.forEach((p) => {
        if (p.prestamo < menor) menor = p.prestamo;
    });
    return menor;
};
let clientesPrestamoMinimo = () => {
    let clientes = [];
    oficina.prestamos.forEach((p) => {
        if (p.prestamo == prestamoMinimo()) clientes.push(p);
    });
    return clientes;
};

let salida = document.getElementById("salida");

salida.innerHTML = "Resultados";
salida.innerHTML += "<br> Datos de los clientes:" + JSON.stringify(oficina.prestamos);
salida.innerHTML += "<br> Monto final en la oficina:" + JSON.stringify(montoFinal());
salida.innerHTML += "<br> Clientes que recibieron el préstamo mínimo:" + JSON.stringify(clientesPrestamoMinimo());
salida.innerHTML += "<br> Clientes que pidieron préstamos por 2 meses:" + JSON.stringify(clientes2Meses());


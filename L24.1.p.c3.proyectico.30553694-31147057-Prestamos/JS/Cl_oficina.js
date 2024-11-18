import Cl_prestamo from "./Cl_prestamo.js";

export default class Cl_oficina {
    constructor(montoDisponible, porcComisionMensual){
        this.montoDisponible = montoDisponible;
        this.porcComisionMensual = porcComisionMensual;
        this.prestamos = [];
    }
    set montoDisponible(mtcj) {
        this._montoDisponible = +mtcj;

    } 

    get montoDisponible() {
        return this._montoDisponible;
    } 

    set porcComisionMensual(pcCM) {
        this._porcComisionMensual = +pcCM;
    } 

    get porcComisionMensual() {
        return this._porcComisionMensual;
    }
    agregarPrestamo(cliente, codigo, prestamo, meses){
        let p = new Cl_prestamo(cliente, codigo, prestamo, meses);
        this.prestamos.push(p);
    }
}
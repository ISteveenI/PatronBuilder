"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computadora = void 0;
class Computadora {
    constructor() {
        this.partes = [];
    }
    agregarParte(parte) {
        this.partes.push(parte);
    }
    mostrarPartes() {
        console.log("Partes de la computadora: " + this.partes.join(", "));
    }
}
exports.Computadora = Computadora;

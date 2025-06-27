"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructorComputadoraGaming = void 0;
const Computadora_1 = require("./Computadora");
class ConstructorComputadoraGaming {
    constructor() {
        this.computadora = new Computadora_1.Computadora();
    }
    agregarCPU() {
        this.computadora.agregarParte("Intel i9 CPU");
    }
    agregarTarjetaGrafica() {
        this.computadora.agregarParte("NVIDIA RTX 4080");
    }
    agregarMemoriaRAM() {
        this.computadora.agregarParte("32GB RAM");
    }
    agregarAlmacenamiento() {
        this.computadora.agregarParte("Disco SSD de 2TB");
    }
    obtenerComputadora() {
        return this.computadora;
    }
}
exports.ConstructorComputadoraGaming = ConstructorComputadoraGaming;

import { ConstructorComputadora } from "./ConstructorComputadora";
// Director que usa un ConstructorComputadora para construir una computadora siguiendo un orden definido
export class TiendaComputadoras {
  // Método que recibe un constructor y ejecuta los pasos de construcción
  construir(constructor: ConstructorComputadora) {
    constructor.agregarCPU();
    constructor.agregarTarjetaGrafica();
    constructor.agregarMemoriaRAM();
    constructor.agregarAlmacenamiento();
  }
}

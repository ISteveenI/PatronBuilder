// Director que invoca los metodos definidos en la interfaz (Constructor computadora) 
import { ConstructorComputadora } from "./ConstructorComputadora";
export class TiendaComputadoras {
  // Método que recibe un constructor y ejecuta los pasos de construcción
  construir(constructor: ConstructorComputadora) {
    constructor.agregarCPU();
    constructor.agregarTarjetaGrafica();
    constructor.agregarMemoriaRAM();
    constructor.agregarAlmacenamiento();
  }
}
//Director usa la interfaz, pero el comportamiento lo define la clase concreta (ConstructorComputadoraGaming)


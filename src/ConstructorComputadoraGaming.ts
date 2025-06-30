import { ConstructorComputadora } from "./ConstructorComputadora";
import { Computadora } from "./Computadora";
// ConcreteBuilder especifico que implementa la construcción de una computadora Gaming
export class ConstructorComputadoraGaming implements ConstructorComputadora {
  // Instancia de la computadora que se va a construir
  private computadora: Computadora;

  constructor() {
    this.computadora = new Computadora();
  }
  //Builder concreto que implementan los pasos de construcción con componentes específicos para su tipo.
  // Agregar CPU específica para Gaming
  agregarCPU(): void {
    this.computadora.agregarParte("Intel i9 CPU");
  }
  // Agregar tarjeta gráfica potente para Gaming
  agregarTarjetaGrafica(): void {
    this.computadora.agregarParte("NVIDIA RTX 4080");
  }
  // Agregar memoria RAM de alto rendimiento
  agregarMemoriaRAM(): void {
    this.computadora.agregarParte("32GB RAM");
  }
  // Agregar disco de almacenamiento 
  agregarAlmacenamiento(): void {
    this.computadora.agregarParte("Disco SSD de 2TB");
  }
  // Devuelve la computadora construida
  obtenerComputadora(): Computadora {
    return this.computadora;
  }
}

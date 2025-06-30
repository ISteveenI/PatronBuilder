import { Computadora } from "./Computadora";
// Builder (Interfaz) que define los métodos para construir las partes de una computadora
export interface ConstructorComputadora {
  agregarCPU(): void;
  agregarTarjetaGrafica(): void;
  agregarMemoriaRAM(): void;
  agregarAlmacenamiento(): void;
// Método para obtener la computadora construida
  obtenerComputadora(): Computadora;
}

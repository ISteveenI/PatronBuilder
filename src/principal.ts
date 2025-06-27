// Uso de todo el patrón
import { TiendaComputadoras } from "./TiendaComputadoras";
import { ConstructorComputadoraGaming } from "./ConstructorComputadoraGaming";
// Se crea una instancia del Director
const tienda = new TiendaComputadoras();
// Se crea un constructor concreto para computadoras Gaming
const constructorGaming = new ConstructorComputadoraGaming();
// El director construye la computadora utilizando el constructor
tienda.construir(constructorGaming);
// Se obtiene la computadora construida
const computadoraGaming = constructorGaming.obtenerComputadora();
// Se muestran las partes de la computadora construida
computadoraGaming.mostrarPartes();

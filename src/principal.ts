// Uso de todo el patrón
import { TiendaComputadoras } from "./TiendaComputadoras";
import { ConstructorComputadoraGaming } from "./ConstructorComputadoraGaming";
// Se crea una instancia del Director
const tienda = new TiendaComputadoras();
// Se crea una instancia del constructor concreto (ConstructorComputadoraGaming)
const constructorGaming = new ConstructorComputadoraGaming();
// El director (TiendaComputadoras) ejecuta los pasos en orden (construye la computadora) utilizando el constructor 
tienda.construir(constructorGaming);
// Se obtiene la computadora construida
const computadoraGaming = constructorGaming.obtenerComputadora();
// Finalmente, el cliente recibe la computadora construida y la usa.
computadoraGaming.mostrarPartes();

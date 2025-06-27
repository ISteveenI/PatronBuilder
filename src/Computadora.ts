// Clase Computadora (Producto a construir) representa el objeto complejo que se va a construir paso a paso
export class Computadora {
  // Lista donde se guardan las partes de la computadora
  public partes: string[] = [];
  // Método para añadir una parte a la computadora
  agregarParte(parte: string) {
    this.partes.push(parte);
  }
  // Método para mostrar todas las partes añadidas
  mostrarPartes() {
    console.log("Partes de la computadora: " + this.partes.join(", "));
  }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TiendaComputadoras_1 = require("./TiendaComputadoras");
const ConstructorComputadoraGaming_1 = require("./ConstructorComputadoraGaming");
const tienda = new TiendaComputadoras_1.TiendaComputadoras();
const constructorGaming = new ConstructorComputadoraGaming_1.ConstructorComputadoraGaming();
tienda.construir(constructorGaming);
const computadoraGaming = constructorGaming.obtenerComputadora();
computadoraGaming.mostrarPartes();

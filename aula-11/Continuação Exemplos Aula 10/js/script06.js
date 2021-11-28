"use strict";
import { Bolinha } from './Bolinha.js';

//instanciando objeto
let b = new Bolinha("blue", 10, 20, 30);
console.log(b.bcor); //get bcor retorna a cor da bola
b.bcor = "red"; //set bcor, define a cor da bola

console.log(b);
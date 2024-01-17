"use strict";
/**
 * This is a simple sum function that returns the sum of two numbers.
 *
 * @param parcelas
 * @returns hbhbfjhb
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOnly = void 0;
function sumOnly(...parcelas) {
  return parcelas.reduce((total, parcela) => total + parcela);
}
exports.sumOnly = sumOnly;

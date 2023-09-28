/**
 * This is a simple sum function that returns the sum of two numbers.
 *
 * @param parcelas
 * @returns
 */

export function sumOnly(...parcelas: number[]): number {
  return parcelas.reduce((total, parcela) => total + parcela);
}

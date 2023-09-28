
import { sumOnly } from "../domain/calc";

/**
 * Suite of tests for the sumOnly function.
 */


describe("sumOnly", () => {

    test("verifica resultado", () => {
        let result = sumOnly(1, 2, 3, 4, 5);
        expect(result).toBe(15);
    });

    test("verifica resultado com 1 parcela", () => {
        let result = sumOnly(1);
        expect(result).toBe(1);
    });

    test("verifica resultado com 2 parcelas", () => {
        let result = sumOnly(7, 10);
        expect(result).toBe(17);
    });

});
export const description = `
**Brute Force - All Pairs**

Compara TODOS os intervalos da primeira lista com TODOS da segunda.
Simples mas ineficiente para listas grandes.

**Complexidade:** O(n × m) tempo, O(1) espaço (sem contar resultado)
`;

/**
 * Interval List Intersections - Brute Force
 */
export function solution(input: {
    firstList: number[][];
    secondList: number[][];
}): number[][] {
    const { firstList, secondList } = input;
    const result: number[][] = [];

    for (const [start1, end1] of firstList) {
        for (const [start2, end2] of secondList) {
            const start = Math.max(start1, start2);
            const end = Math.min(end1, end2);

            if (start <= end) {
                result.push([start, end]);
            }
        }
    }

    return result;
}


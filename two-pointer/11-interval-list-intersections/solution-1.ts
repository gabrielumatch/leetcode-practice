export const description = `
**Two Pointers - Merge Intervals**

**O Problema:**
Encontrar todas as interseções entre duas listas de intervalos ordenados.

**Estratégia:**
1. Dois ponteiros (i, j) para percorrer as duas listas
2. Para cada par de intervalos, calcula a interseção:
   - start = max(interval1.start, interval2.start)
   - end = min(interval1.end, interval2.end)
   - Se start <= end: há interseção!
3. Move o ponteiro do intervalo que termina primeiro
4. Por quê? O intervalo que termina antes não pode mais ter interseções

**Exemplo:**
firstList = [[0, 2], [5, 10]]
secondList = [[1, 5], [8, 12]]

i=0, j=0: [0,2] vs [1,5]
  - interseção: [max(0,1), min(2,5)] = [1, 2] ✓
  - [0,2] termina antes → i++

i=1, j=0: [5,10] vs [1,5]
  - interseção: [max(5,1), min(10,5)] = [5, 5] ✓
  - [1,5] termina antes → j++

i=1, j=1: [5,10] vs [8,12]
  - interseção: [max(5,8), min(10,12)] = [8, 10] ✓
  - [5,10] termina antes → i++

Resultado: [[1,2], [5,5], [8,10]]

**Complexidade:** O(n + m) tempo, O(1) espaço (sem contar resultado)
`;

/**
 * Interval List Intersections - Two Pointers
 */
export function solution(input: {
    firstList: number[][];
    secondList: number[][];
}): number[][] {
    const { firstList, secondList } = input;
    const result: number[][] = [];

    let i = 0;
    let j = 0;

    while (i < firstList.length && j < secondList.length) {
        const [start1, end1] = firstList[i];
        const [start2, end2] = secondList[j];

        // Calcula interseção
        const start = Math.max(start1, start2);
        const end = Math.min(end1, end2);

        // Se há interseção (start <= end)
        if (start <= end) {
            result.push([start, end]);
        }

        // Move o ponteiro do intervalo que termina primeiro
        if (end1 < end2) {
            i++;
        } else {
            j++;
        }
    }

    return result;
}


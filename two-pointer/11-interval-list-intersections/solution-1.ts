export const description = `
**Two Pointers - Merge Intervals**

**O Problema (em português simples):**
Você tem duas listas de intervalos. Cada intervalo é [início, fim].
Precisa encontrar TODAS as partes que os intervalos das duas listas têm em COMUM.

**O que é um intervalo?**
[0, 5] significa: números de 0 até 5 (incluindo 0 e 5)
Visual: |------| (de 0 a 5)

**O que é interseção?**
A parte que dois intervalos têm em comum!

**Exemplo Visual:**
firstList:  [0, 2]     |--|
            [5, 10]            |-----|
            
secondList: [1, 5]      |----|
            [8, 12]               |-----|

Interseções:
- [0,2] com [1,5] → parte comum: [1, 2] ✓
- [5,10] com [1,5] → parte comum: [5, 5] ✓ (só o ponto 5)
- [5,10] com [8,12] → parte comum: [8, 10] ✓

**Como calcular a interseção?**
Dados dois intervalos [a1, b1] e [a2, b2]:
- Início da interseção = max(a1, a2)  ← o maior início
- Fim da interseção = min(b1, b2)     ← o menor fim
- Se início <= fim: há interseção!

**Exemplo Passo a Passo:**

firstList = [[0, 2], [5, 10]]
secondList = [[1, 5], [8, 12]]

**Passo 1: i=0 [0,2] vs j=0 [1,5]**
   Início: max(0, 1) = 1
   Fim: min(2, 5) = 2
   Como 1 <= 2: há interseção! → [1, 2]
   [0,2] termina em 2, [1,5] termina em 5
   Como 2 < 5, move i (primeira lista) → i++

**Passo 2: i=1 [5,10] vs j=0 [1,5]**
   Início: max(5, 1) = 5
   Fim: min(10, 5) = 5
   Como 5 <= 5: há interseção! → [5, 5] (só o ponto 5)
   [5,10] termina em 10, [1,5] termina em 5
   Como 5 < 10, move j (segunda lista) → j++

**Passo 3: i=1 [5,10] vs j=1 [8,12]**
   Início: max(5, 8) = 8
   Fim: min(10, 12) = 10
   Como 8 <= 10: há interseção! → [8, 10]
   [5,10] termina em 10, [8,12] termina em 12
   Como 10 < 12, move i → i++

**Resultado final:** [[1,2], [5,5], [8,10]]

**Por que move o que termina primeiro?**
Porque o intervalo que já terminou não pode mais ter interseções com os próximos!

**Casos Especiais:**

**Sem interseção:**
[1, 3] e [5, 7] → max(1,5)=5, min(3,7)=3 → 5 > 3 ✗ Sem interseção!

**Interseção de um ponto:**
[5, 5] e [5, 5] → max(5,5)=5, min(5,5)=5 → 5 <= 5 ✓ Interseção: [5, 5]

**Interseção completa:**
[2, 6] e [3, 4] → max(2,3)=3, min(6,4)=4 → 3 <= 4 ✓ Interseção: [3, 4]

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


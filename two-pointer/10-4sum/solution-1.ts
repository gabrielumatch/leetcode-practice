export const description = `
**Two Pointers - Nested Loops (Otimizado)**

**O Problema (em português simples):**
Encontrar 4 números DIFERENTES no array que somam exatamente o target.

**Analogia:**
Imagine você tem uma lista de preços e quer comprar 4 itens que somam exatamente R$ 100,00.
Precisamos encontrar todas as combinações possíveis!

**Exemplo Prático:**
Array: [1, 0, -1, 0, -2, 2]
Target: 0

Queremos: 4 números que somam 0

Possíveis respostas:
- [-2, -1, 1, 2] → -2 + (-1) + 1 + 2 = 0 ✓
- [-2, 0, 0, 2] → -2 + 0 + 0 + 2 = 0 ✓  
- [-1, 0, 0, 1] → -1 + 0 + 0 + 1 = 0 ✓

**Importante:**
- Os 4 números devem vir de POSIÇÕES diferentes no array
- Mas o VALOR pode repetir (ex: usar dois zeros)
- Não pode usar a mesma posição duas vezes

**Como funciona (passo a passo detalhado):**

Array original: [1, 0, -1, 0, -2, 2]
Array ordenado: [-2, -1, 0, 0, 1, 2]
                 ↑   ↑   ↑  ↑  ↑  ↑
                 0   1   2  3  4  5  (índices)

**Passo 1: Fixa i=0 (valor -2), j=1 (valor -1)**
   Queremos: target - (-2) - (-1) = 0 + 2 + 1 = 3
   Precisamos de 2 números que somam 3

   Two pointers: left=2 (valor 0), right=5 (valor 2)
   - Soma: 0 + 2 = 2 < 3 → precisa aumentar → left++
   
   left=3 (valor 0), right=5 (valor 2)
   - Soma: 0 + 2 = 2 < 3 → precisa aumentar → left++
   
   left=4 (valor 1), right=5 (valor 2)
   - Soma: 1 + 2 = 3 == 3 ✓ ENCONTROU!
   - Resposta: [-2, -1, 1, 2]

**Passo 2: Fixa i=0 (valor -2), j=2 (valor 0)**
   Queremos: target - (-2) - 0 = 0 + 2 = 2
   Precisamos de 2 números que somam 2

   Two pointers: left=3 (valor 0), right=5 (valor 2)
   - Soma: 0 + 2 = 2 == 2 ✓ ENCONTROU!
   - Resposta: [-2, 0, 0, 2]

**E assim por diante...**

**A ideia:**
- Dois loops fixam os 2 primeiros números
- Two pointers procuram os 2 últimos números que completam a soma

**Complexidade:** O(n³) tempo, O(1) espaço (ou O(n) se contar ordenação)
`;

/**
 * 4Sum - Two Pointers Approach
 *
 * Extensão do 3Sum: fixa dois números e usa two pointers para os outros dois
 */
export function solution(input: { nums: number[]; target: number }): number[][] {
    const { nums, target } = input;
    const result: number[][] = [];

    if (nums.length < 4) return result;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 3; i++) {
        // Pula duplicatas do primeiro elemento
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < nums.length - 2; j++) {
            // Pula duplicatas do segundo elemento
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let left = j + 1;
            let right = nums.length - 1;
            const twoSumTarget = target - nums[i] - nums[j];

            while (left < right) {
                const sum = nums[left] + nums[right];

                if (sum < twoSumTarget) {
                    left++;
                } else if (sum > twoSumTarget) {
                    right--;
                } else {
                    // Encontrou quádrupla!
                    result.push([nums[i], nums[j], nums[left], nums[right]]);

                    // Pula duplicatas do left
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    // Pula duplicatas do right
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }

                    left++;
                    right--;
                }
            }
        }
    }

    return result;
}


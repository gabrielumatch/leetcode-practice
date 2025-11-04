export const description = `
**Dutch National Flag - Two Pointers**

**O Problema:**
Array tem apenas 0s, 1s e 2s. Ordenar in-place: todos 0s, depois 1s, depois 2s.

**Estratégia:**
Três ponteiros: left (onde colocar 0s), right (onde colocar 2s), current (iterador).
- Se nums[current] == 0: troca com left, left++, current++
- Se nums[current] == 1: current++ (já está no lugar)
- Se nums[current] == 2: troca com right, right-- (não incrementa current!)

**Complexidade:** O(n) tempo, O(1) espaço
`;

/**
 * Sort Colors - Dutch National Flag Algorithm
 *
 * Três regiões: [0s][1s][2s]
 * left marca fim dos 0s
 * right marca início dos 2s
 * current percorre
 */
export function solution(nums: number[]): number[] {
    let left = 0;      // Fim dos 0s (próxima posição para 0)
    let right = nums.length - 1;  // Início dos 2s (próxima posição para 2)
    let current = 0;   // Iterador

    while (current <= right) {
        if (nums[current] === 0) {
            // Move 0 para a esquerda
            [nums[left], nums[current]] = [nums[current], nums[left]];
            left++;
            current++;
        } else if (nums[current] === 1) {
            // 1 já está no lugar certo (meio)
            current++;
        } else {
            // nums[current] === 2: move 2 para a direita
            // NÃO incrementa current! Pode ter trocado com 0 ou 1
            [nums[right], nums[current]] = [nums[current], nums[right]];
            right--;
        }
    }

    return nums;
}


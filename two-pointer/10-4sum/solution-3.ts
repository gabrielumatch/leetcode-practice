export const description = `
**Brute Force - 4 Loops Aninhados**

**O Problema:**
Testa TODAS as combinações possíveis de 4 números sem nenhuma otimização.

**Estratégia:**
4 loops aninhados que testam cada combinação possível:
- i: primeiro número (0 até n-4)
- j: segundo número (i+1 até n-3)
- k: terceiro número (j+1 até n-2)
- l: quarto número (k+1 até n-1)

**Exemplo:**
Array: [1, 0, -1, 0, -2, 2], target = 0

Testa TODAS as combinações:
- i=0, j=1, k=2, l=3 → [1, 0, -1, 0] → soma = 0? ✓
- i=0, j=1, k=2, l=4 → [1, 0, -1, -2] → soma = -2? ✗
- i=0, j=1, k=2, l=5 → [1, 0, -1, 2] → soma = 2? ✗
- ... (continua testando todas)
- i=0, j=1, k=3, l=4 → [1, 0, 0, -2] → soma = -1? ✗
- ... (milhares de combinações)

**Desvantagens:**
- Muito lento para arrays grandes (O(n⁴))
- Não aproveita que o array pode ser ordenado
- Testa muitas combinações desnecessárias

**Complexidade:** O(n⁴) tempo, O(1) espaço (ou O(n) para duplicatas)
`;

/**
 * 4Sum - Brute Force Approach
 * 
 * Testa TODAS as combinações possíveis com 4 loops aninhados
 */
export function solution(input: { nums: number[]; target: number }): number[][] {
    const { nums, target } = input;
    const result: number[][] = [];
    const seen = new Set<string>();
    
    if (nums.length < 4) return result;
    
    const n = nums.length;
    
    // 4 loops aninhados testando todas as combinações
    for (let i = 0; i < n - 3; i++) {
        for (let j = i + 1; j < n - 2; j++) {
            for (let k = j + 1; k < n - 1; k++) {
                for (let l = k + 1; l < n; l++) {
                    const sum = nums[i] + nums[j] + nums[k] + nums[l];
                    
                    if (sum === target) {
                        // Cria quádrupla ordenada para evitar duplicatas
                        const quad = [nums[i], nums[j], nums[k], nums[l]].sort((a, b) => a - b);
                        const key = quad.join(',');
                        
                        if (!seen.has(key)) {
                            seen.add(key);
                            result.push(quad);
                        }
                    }
                }
            }
        }
    }
    
    return result.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        if (a[1] !== b[1]) return a[1] - b[1];
        if (a[2] !== b[2]) return a[2] - b[2];
        return a[3] - b[3];
    });
}


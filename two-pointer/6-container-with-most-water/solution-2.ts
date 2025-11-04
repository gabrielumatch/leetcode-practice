export const description = `
**Brute Force - Nested Loops**

Testa TODOS os pares possíveis de barras e encontra a maior área.
Mais simples de entender, mas muito menos eficiente.

**Complexidade:** O(n²) tempo, O(1) espaço
`;

/**
 * Container With Most Water - Brute Force
 *
 * Abordagem diferente: testa todos os pares possíveis
 * Mais lento mas mais fácil de entender
 */
export function solution(height: number[]): number {
    let maxArea = 0;

    // Testa todos os pares possíveis
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            // Calcula área para este par
            const width = j - i;
            const minHeight = Math.min(height[i], height[j]);
            const area = minHeight * width;

            // Atualiza máximo
            maxArea = Math.max(maxArea, area);
        }
    }

    return maxArea;
}


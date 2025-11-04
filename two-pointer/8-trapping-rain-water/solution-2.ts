export const description = `
**Pre-compute Max Heights**

Calcula maxLeft e maxRight para cada posição ANTES.
Depois calcula água: min(maxLeft[i], maxRight[i]) - height[i]

**Complexidade:** O(n) tempo, O(n) espaço
`;

/**
 * Trapping Rain Water - Pre-compute Approach
 * Estratégia diferente:
 * 1. Primeiro loop: calcula maxLeft para cada posição
 * 2. Segundo loop: calcula maxRight para cada posição
 * 3. Terceiro loop: calcula água em cada posição
 */
export function solution(height: number[]): number {
    const n = height.length;
    const maxLeft = new Array(n).fill(0);
    const maxRight = new Array(n).fill(0);

    // Calcula maxLeft: maior barra à esquerda de cada posição
    maxLeft[0] = height[0];
    for (let i = 1; i < n; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
    }

    // Calcula maxRight: maior barra à direita de cada posição
    maxRight[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        maxRight[i] = Math.max(maxRight[i + 1], height[i]);
    }

    // Calcula água: min(maxLeft, maxRight) - height
    let water = 0;
    for (let i = 0; i < n; i++) {
        water += Math.min(maxLeft[i], maxRight[i]) - height[i];
    }

    return water;
}


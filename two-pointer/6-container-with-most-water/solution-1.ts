export const description = `
**Two Pointers - Greedy**

**O Problema:**
Imagine barras verticais em posições diferentes. Entre 2 barras, a água forma um retângulo.
A água NÃO pode transbordar - é limitada pela MENOR barra.

**Exemplo:**
Barras em índices 1 (altura 8) e 8 (altura 7):
- Largura = 8 - 1 = 7
- Altura da água = min(8, 7) = 7 (limitada pela menor!)
- Área = 7 × 7 = 49

**A Solução:**
1. Dois ponteiros nas extremidades (left=0, right=n-1)
2. Calcula área: min(height[left], height[right]) × (right - left)
3. Move o ponteiro da MENOR altura (greedy)
4. Por quê? Se mover o maior, a área não aumenta (limitada pela menor)

**Complexidade:** O(n) tempo, O(1) espaço
`;

/**
 * Container With Most Water - Two Pointers
 *
 * Problema: Dado array de alturas, encontrar 2 linhas que formam
 * o container com maior área (água).
 *
 * Área = min(height[left], height[right]) * (right - left)
 *
 * Estratégia: Começar nas extremidades, sempre mover o ponteiro
 * da menor altura (greedy) porque a área é limitada pela menor.
 */
export function solution(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        // Calcula área atual
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        const area = minHeight * width;

        // Atualiza máximo
        maxArea = Math.max(maxArea, area);

        // Move o ponteiro da menor altura (greedy)
        // Se mover o maior, a área não aumenta (limitada pela menor)
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

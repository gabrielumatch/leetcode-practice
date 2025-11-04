export const description = `
**Two Pointers - Greedy**

**O Problema:**
Imagine barras de diferentes alturas. A água fica "presa" entre as barras.
A água em cada posição é limitada pela MENOR barra mais alta dos dois lados.

**Exemplo Visual:**
Array: [0,1,0,2,1,0,1,3,2,1,2,1]

Representação (água = X):
         X
    X    XX X
_X_XX_X_XXXXXX
0 1 0 2 1 0 1 3 2 1 2 1

Água na posição i = min(maior à esquerda, maior à direita) - height[i]
Se negativo, não tem água.

**A Solução:**
1. Dois ponteiros: left e right nas extremidades
2. Mantém maxLeft e maxRight (maiores barras encontradas)
3. Move o ponteiro da menor altura (greedy)
4. Calcula água: min(maxLeft, maxRight) - height[atual]

**Complexidade:** O(n) tempo, O(1) espaço
`;

/**
 * Trapping Rain Water - Two Pointers
 *
 * Estratégia:
 * 1. Dois ponteiros nas extremidades
 * 2. Mantém maxLeft e maxRight (maiores barras até agora)
 * 3. Move o ponteiro da menor altura
 * 4. Água = min(maxLeft, maxRight) - height[atual]
 */
export function solution(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let maxLeft = 0;
    let maxRight = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            // Processa lado esquerdo
            if (height[left] >= maxLeft) {
                maxLeft = height[left];
            } else {
                // Água presa aqui!
                water += maxLeft - height[left];
            }
            left++;
        } else {
            // Processa lado direito
            if (height[right] >= maxRight) {
                maxRight = height[right];
            } else {
                // Água presa aqui!
                water += maxRight - height[right];
            }
            right--;
        }
    }

    return water;
}


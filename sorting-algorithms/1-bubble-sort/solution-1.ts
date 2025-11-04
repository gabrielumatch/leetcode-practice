export const description = `
**Bubble Sort - Versão Simples e Explicada**

Bubble Sort é um dos algoritmos de ordenação mais simples de entender.

**Como funciona:**
1. Compara elementos adjacentes (um ao lado do outro)
2. Se o da esquerda for maior que o da direita, troca eles
3. Repete isso passando por todo o array várias vezes
4. A cada "passada", o maior elemento "flutua" até o final (como uma bolha)
5. Continua até não fazer mais nenhuma troca

**Exemplo passo a passo:**
Array inicial: [64, 34, 25, 12]

Passada 1:
- Compara 64 e 34: 64 > 34 → troca → [34, 64, 25, 12]
- Compara 64 e 25: 64 > 25 → troca → [34, 25, 64, 12]
- Compara 64 e 12: 64 > 12 → troca → [34, 25, 12, 64] ✓ 64 já está no lugar certo!

Passada 2:
- Compara 34 e 25: 34 > 25 → troca → [25, 34, 12, 64]
- Compara 34 e 12: 34 > 12 → troca → [25, 12, 34, 64] ✓ 34 já está no lugar certo!

Passada 3:
- Compara 25 e 12: 25 > 12 → troca → [12, 25, 34, 64] ✓ Pronto! Ordenado!

**Complexidade:**
- Tempo: O(n²) - para arrays grandes é lento
- Espaço: O(1) - não usa espaço extra
`;

/**
 * Bubble Sort - Versão mais simples e didática
 *
 * @param nums Array de números para ordenar
 * @returns Array ordenado (modifica o array original)
 */
export function solution(nums: number[]): number[] {
    // Criar uma cópia para não modificar o array original
    const arr = [...nums];
    const n = arr.length;

    // Para cada posição do array (n passadas)
    for (let i = 0; i < n; i++) {
        // Flag para verificar se houve alguma troca nesta passada
        let swapped = false;

        // Comparar elementos adjacentes
        // A cada passada, o último elemento já está no lugar certo,
        // então podemos ignorar os últimos i elementos
        for (let j = 0; j < n - 1 - i; j++) {
            // Se o elemento atual é maior que o próximo
            if (arr[j] > arr[j + 1]) {
                // Troca os elementos
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // Se não houve troca nesta passada, o array já está ordenado!
        // Podemos parar mais cedo (otimização)
        if (!swapped) {
            break;
        }
    }

    return arr;
}


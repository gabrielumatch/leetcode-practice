export const description = `
**Selection Sort - Versão Simples e Explicada**

Selection Sort é um algoritmo de ordenação intuitivo e fácil de entender.

**Como funciona:**
1. Encontra o menor elemento na parte não ordenada do array
2. Troca ele com o primeiro elemento da parte não ordenada
3. Agora a primeira posição está correta! Avança para a próxima
4. Repete até ordenar tudo

**Exemplo passo a passo:**
Array inicial: [64, 25, 12, 22, 11]

Passada 1 (posição 0):
- Parte não ordenada: [64, 25, 12, 22, 11]
- Menor elemento: 11 (índice 4)
- Troca 64 com 11 → [11, 25, 12, 22, 64] ✓ Posição 0 correta!

Passada 2 (posição 1):
- Parte não ordenada: [25, 12, 22, 64]
- Menor elemento: 12 (índice 2)
- Troca 25 com 12 → [11, 12, 25, 22, 64] ✓ Posição 1 correta!

Passada 3 (posição 2):
- Parte não ordenada: [25, 22, 64]
- Menor elemento: 22 (índice 3)
- Troca 25 com 22 → [11, 12, 22, 25, 64] ✓ Posição 2 correta!

Passada 4 (posição 3):
- Parte não ordenada: [25, 64]
- Menor elemento: 25 (já está na posição certa)
- Não precisa trocar → [11, 12, 22, 25, 64] ✓ Pronto! Ordenado!

**Complexidade:**
- Tempo: O(n²) - sempre faz n² comparações, mesmo se já estiver ordenado
- Espaço: O(1) - não usa espaço extra

**Selection Sort vs Bubble Sort - Quando usar cada um?**

📊 **Selection Sort - Vantagens:**
- ✅ **Menos trocas**: Faz no máximo n-1 trocas (sempre uma por posição)
- ✅ **Melhor para memória**: Quando escrever na memória é custoso (ex: discos, memória flash)
- ✅ **Previsível**: Sempre faz o mesmo número de operações, fácil de prever o tempo

📊 **Bubble Sort - Vantagens:**
- ✅ **Pode parar mais cedo**: Se o array já estiver ordenado, para na primeira passada
- ✅ **Estável**: Mantém a ordem de elementos iguais (importante para objetos)
- ✅ **Adaptativo**: Funciona bem com arrays quase ordenados

**Exemplo prático:**
Array: [64, 25, 12, 22, 11]

**Bubble Sort:**
- Faz muitas comparações E muitas trocas
- Pode fazer 3-4 trocas na primeira passada só para mover o 64
- Total: ~20 comparações + ~10 trocas

**Selection Sort:**
- Faz muitas comparações MAS poucas trocas
- Encontra o menor (11 comparações), depois troca apenas 1 vez
- Total: ~20 comparações + apenas 4 trocas

**Resumo:**
- Use **Selection Sort** quando: trocar é caro (memória lenta), você quer poucas trocas
- Use **Bubble Sort** quando: o array pode já estar ordenado, você precisa de estabilidade
`;

/**
 * Selection Sort - Versão mais simples e didática
 *
 * @param nums Array de números para ordenar
 * @returns Array ordenado (modifica o array original)
 */
export function solution(nums: number[]): number[] {
    // Criar uma cópia para não modificar o array original
    const arr = [...nums];
    const n = arr.length;

    // Para cada posição do array (de 0 até n-2, pois a última já estará correta)
    for (let i = 0; i < n - 1; i++) {
        // Assumir que o menor elemento está na posição atual
        let minIndex = i;

        // Procurar o menor elemento na parte não ordenada (da posição i+1 até o final)
        for (let j = i + 1; j < n; j++) {
            // Se encontrou um elemento menor que o atual mínimo
            if (arr[j] < arr[minIndex]) {
                // Atualizar o índice do menor elemento
                minIndex = j;
            }
        }

        // Se o menor elemento não está na posição atual, trocar
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}


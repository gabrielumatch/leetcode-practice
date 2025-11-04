export const description = `
**Radix Sort - Versão Simples e Explicada**

Radix Sort ordena números dígito por dígito, da direita para a esquerda (ou vice-versa)!

**Como funciona:**
1. Ordena pelos dígitos menos significativos primeiro (unidades)
2. Depois ordena pelos próximos dígitos (dezenas, centenas, etc.)
3. Usa Counting Sort como algoritmo estável para ordenar cada dígito
4. Continua até ordenar pelo dígito mais significativo
5. Resultado: array ordenado!

**Exemplo passo a passo:**
Array inicial: [170, 45, 75, 90, 802, 24, 2, 66]

**Passo 1 - Ordenar por dígito das unidades (1º dígito):**
Conta frequências de cada dígito (0-9):
- 0: aparece em 170, 90, 802
- 2: aparece em 802, 2
- 4: aparece em 24
- 5: aparece em 45, 75
- 6: aparece em 66
- 7: aparece em 75

Após Counting Sort por unidades:
[170, 90, 802, 2, 24, 45, 75, 66]
✓ Ordenado por último dígito!

**Passo 2 - Ordenar por dígito das dezenas (2º dígito):**
Conta frequências:
- 0: aparece em 802, 2
- 2: aparece em 24
- 4: aparece em 45
- 6: aparece em 66
- 7: aparece em 170, 75, 90

Após Counting Sort por dezenas:
[802, 2, 24, 45, 66, 170, 75, 90]
✓ Ordenado por dois últimos dígitos!

**Passo 3 - Ordenar por dígito das centenas (3º dígito):**
Conta frequências:
- 0: aparece em 2, 24, 45, 66, 75, 90 (números com menos de 3 dígitos)
- 1: aparece em 170
- 8: aparece em 802

Após Counting Sort por centenas:
[2, 24, 45, 66, 75, 90, 170, 802]
✓ Pronto! Ordenado!

**Complexidade de Tempo:**
- **Melhor caso**: O(d × (n + k)) - onde d é número de dígitos, k é base (10)
- **Caso médio**: O(d × (n + k)) - sempre faz d passadas de Counting Sort
- **Pior caso**: O(d × (n + k)) - sempre faz d passadas de Counting Sort

**Por quê O(d × (n + k))?**
- d = número de dígitos do maior número
- Cada passada usa Counting Sort: O(n + k) onde k = 10 (dígitos 0-9)
- Total: d × O(n + k) = O(d × (n + k))
- Exemplo: números até 999 (3 dígitos), 100 elementos → 3 × (100 + 10) = 330

**Complexidade de Espaço:**
- **O(n + k)** - precisa de array auxiliar para Counting Sort
- Onde k = 10 (dígitos 0-9), então na prática O(n)

**Radix Sort vs Outros Algoritmos:**

📊 **Radix Sort - Vantagens:**
- ✅ **Linear quando d é pequeno**: O(d × n) quando d << n
- ✅ **Sem comparações**: Não compara elementos entre si
- ✅ **Estável**: Mantém ordem de elementos iguais
- ✅ **Previsível**: Performance consistente

📊 **Radix Sort - Desvantagens:**
- ❌ **Apenas números inteiros**: Não funciona bem com decimais ou strings
- ❌ **Depende do número de dígitos**: Pior quando números são muito grandes
- ❌ **Espaço extra**: Precisa de O(n) espaço para Counting Sort

**Quando usar?**
- Números inteiros não negativos
- Quando o range de dígitos é limitado
- Quando você sabe que números têm poucos dígitos
- Como parte de algoritmos mais complexos

**Otimizações comuns:**
- Usar base maior (ex: 256 em vez de 10) para reduzir número de passadas
- Ordenar do dígito mais significativo para o menos (MSD Radix)
- Para números negativos, usar offset ou tratar separadamente
`;

/**
 * Função auxiliar para obter o dígito em uma posição específica
 * 
 * @param num Número
 * @param place Posição do dígito (1 = unidades, 2 = dezenas, 3 = centenas, etc.)
 * @returns Dígito na posição especificada
 */
function getDigit(num: number, place: number): number {
    // Divide por 10^(place-1) e pega o resto da divisão por 10
    // Exemplo: getDigit(123, 2) → (123 / 10) % 10 = 12 % 10 = 2
    return Math.floor(Math.abs(num) / Math.pow(10, place - 1)) % 10;
}

/**
 * Função auxiliar para contar quantos dígitos tem um número
 * 
 * @param num Número
 * @returns Número de dígitos
 */
function digitCount(num: number): number {
    if (num === 0) return 1;
    // Exemplo: 123 → log10(123) = 2.08 → floor = 2 → +1 = 3 dígitos
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * Função auxiliar para encontrar o número com mais dígitos
 * 
 * @param nums Array de números
 * @returns Número máximo de dígitos
 */
function mostDigits(nums: number[]): number {
    let maxDigits = 0;
    for (let num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num));
    }
    return maxDigits;
}

/**
 * Radix Sort - Versão mais simples e didática
 *
 * @param nums Array de números para ordenar (assume números não negativos)
 * @returns Array ordenado (modifica o array original)
 */
export function solution(nums: number[]): number[] {
    // Criar uma cópia para não modificar o array original
    const arr = [...nums];
    const n = arr.length;

    // Se o array estiver vazio ou tiver apenas 1 elemento, já está ordenado
    if (n <= 1) {
        return arr;
    }

    // Encontrar o número máximo de dígitos
    // Isso determina quantas passadas precisamos fazer
    const maxDigits = mostDigits(arr);

    // Para cada posição de dígito (da direita para a esquerda)
    // Começa do dígito menos significativo (unidades) e vai até o mais significativo
    for (let k = 1; k <= maxDigits; k++) {
        // Criar buckets para cada dígito (0 a 9)
        const digitBuckets: number[][] = Array.from({ length: 10 }, () => []);

        // Distribuir números nos buckets baseado no dígito atual
        for (let i = 0; i < n; i++) {
            // Pega o dígito na posição k
            const digit = getDigit(arr[i], k);
            // Coloca o número no bucket correspondente
            digitBuckets[digit].push(arr[i]);
        }

        // Reconstruir o array juntando os buckets na ordem
        // Como Counting Sort é estável, mantém a ordem dos passos anteriores
        let arrIndex = 0;
        for (let i = 0; i < 10; i++) {
            // Pega todos os números do bucket i e coloca no array
            for (let j = 0; j < digitBuckets[i].length; j++) {
                arr[arrIndex] = digitBuckets[i][j];
                arrIndex++;
            }
        }
    }

    return arr;
}


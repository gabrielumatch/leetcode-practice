export const description = `
**Recursive kSum - Generalization**

**A Ideia (em português simples):**
Ao invés de fixar 2 números manualmente, usa RECURSÃO para reduzir o problema:
- 4Sum → precisa de 4 números
- Fixa 1 número → agora precisa de 3 números (3Sum)
- Fixa mais 1 número → agora precisa de 2 números (2Sum)
- 2Sum resolve com two pointers! (CASO BASE - para aqui!)

**Por que paramos em 2Sum?**
- 2Sum é o menor problema que faz sentido: "encontrar 2 números que somam X"
- 1Sum seria: "encontrar 1 número igual a X" → isso é só buscar no array, não é "soma"
- 0Sum não existe: "encontrar 0 números que somam X" → não faz sentido
- Two pointers é a solução ÓTIMA para 2Sum (O(n) tempo, O(1) espaço)
- Continuar recursão além disso seria ineficiente e desnecessário!

**Vantagem:**
Funciona para QUALQUER k (2Sum, 3Sum, 4Sum, 5Sum, etc.) sem mudar a lógica!

**Exemplo Passo a Passo:**

Array: [1, 0, -1, 0, -2, 2] ordenado: [-2, -1, 0, 0, 1, 2]
Target: 0

**Chamada inicial:** kSum(0, 4, 0)
"Preciso de 4 números que somam 0"

**Nível 1 (4Sum):**
- Fixa i=0: valor -2
- Agora precisa de 3 números que somam: 0 - (-2) = 2
- Chama: kSum(1, 3, 2) ← "Preciso de 3 números que somam 2"

  **Nível 2 (3Sum):**
  - Fixa i=1: valor -1
  - Agora precisa de 2 números que somam: 2 - (-1) = 3
  - Chama: kSum(2, 2, 3) ← "Preciso de 2 números que somam 3"

    **Nível 3 (2Sum):**
    - Two pointers: left=2 (0), right=5 (2)
    - Soma: 0 + 2 = 2 < 3 → left++
    - left=3 (0), right=5 (2)
    - Soma: 0 + 2 = 2 < 3 → left++
    - left=4 (1), right=5 (2)
    - Soma: 1 + 2 = 3 == 3 ✓
    - Retorna: [[1, 2]]

  - Adiciona o -1: [[-1, 1, 2]]

- Adiciona o -2: [[-2, -1, 1, 2]] ✓

**A Mágica:**
A função kSum funciona para QUALQUER k >= 2:
- **k=2 (CASO BASE)**: usa two pointers - para aqui!
- **k>2 (RECURSÃO)**: fixa 1 número e chama kSum(k-1)

**Por que k=2 é o caso base?**
- 2Sum é o menor problema "de soma" que faz sentido
- Two pointers é a solução mais eficiente (O(n) tempo)
- Se continuássemos para k=1: seria apenas "buscar número X" → não é soma!
- Se continuássemos para k=0: não existe "0 números que somam X"

**Árvore de Recursão (visual):**

Nível 1: kSum(0, 4, 0) - "4 números que somam 0"
  |
  +-- Fixa -2 → Nível 2: kSum(1, 3, 2) - "3 números que somam 2"
       |
       +-- Fixa -1 → Nível 3: kSum(2, 2, 3) - "2 números que somam 3"
            |
            +-- Two pointers encontra: [1, 2]
            +-- Retorna: [[-1, 1, 2]]
       |
       +-- Fixa 0 → Nível 3: kSum(3, 2, 2) - "2 números que somam 2"
            |
            +-- Two pointers encontra: [0, 2]
            +-- Retorna: [[0, 0, 2]]
  |
  +-- Fixa -1 → Nível 2: kSum(2, 3, 1) - "3 números que somam 1"
       +-- ... (continua recursivamente)

**Por que usar recursão?**
- **Código mais limpo**: uma função para todos os kSum
- **Reutilizável**: funciona para 2Sum, 3Sum, 4Sum, 5Sum, etc.
- **Fácil de entender**: divide o problema em subproblemas menores

**Diferença da Solution 1:**
- Solution 1: fixa 2 números com loops, depois usa two pointers
- Solution 2: fixa 1 número por vez, recursivamente, até chegar em 2Sum

**Complexidade:** O(n³) tempo, O(k) espaço (recursão)
`;

/**
 * 4Sum - Recursive kSum Approach
 *
 * Generaliza para qualquer k: 4Sum chama 3Sum, que chama 2Sum
 */
export function solution(input: { nums: number[]; target: number }): number[][] {
    const { nums, target } = input;

    if (nums.length < 4) return [];

    nums.sort((a, b) => a - b);

    function kSum(start: number, k: number, target: number): number[][] {
        const result: number[][] = [];

        if (k === 2) {
            // Two pointers para 2Sum
            let left = start;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[left] + nums[right];

                if (sum < target) {
                    left++;
                } else if (sum > target) {
                    right--;
                } else {
                    result.push([nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                }
            }
        } else {
            // Para k > 2, recursivamente reduz para k-1
            for (let i = start; i < nums.length - k + 1; i++) {
                if (i > start && nums[i] === nums[i - 1]) continue;

                const subResults = kSum(i + 1, k - 1, target - nums[i]);

                for (const subResult of subResults) {
                    result.push([nums[i], ...subResult]);
                }
            }
        }

        return result;
    }

    return kSum(0, 4, target);
}


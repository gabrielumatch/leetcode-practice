/**
 * Clone Graph
 * LeetCode #133
 */

export class GraphNode {
    val: number;
    neighbors: GraphNode[];

    constructor(val?: number, neighbors?: GraphNode[]) {
        this.val = val ?? 0;
        this.neighbors = neighbors ?? [];
    }
}

export function createGraph(adjList: number[][]): GraphNode | null {
    if (adjList.length === 0) return null;

    const nodes: GraphNode[] = [];
    for (let i = 0; i < adjList.length; i++) {
        nodes.push(new GraphNode(i + 1));
    }

    for (let i = 0; i < adjList.length; i++) {
        for (const neighbor of adjList[i]) {
            nodes[i].neighbors.push(nodes[neighbor - 1]);
        }
    }

    return nodes[0];
}

export const testCases = [
    { input: [[2, 4], [1, 3], [2, 4], [1, 3]], expected: [[2, 4], [1, 3], [2, 4], [1, 3]], label: 'Example 1' },
    { input: [[]], expected: [[]], label: 'Example 2 (single node)' },
    { input: [], expected: [], label: 'Example 3 (empty)' },
];


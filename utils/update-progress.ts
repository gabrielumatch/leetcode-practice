import { readdirSync, existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { Glob } from 'bun';

interface CategoryProgress {
    name: string;
    folder: string;
    solved: number;
    total: number;
}

const CATEGORIES = [
    { name: 'Sorting Algorithms', folder: 'sorting-algorithms' },
    { name: 'Two Pointers', folder: 'two-pointer' },
    { name: 'Sliding Window', folder: 'sliding-window' },
    { name: 'Fast & Slow Pointers', folder: 'fast-slow-pointers' },
    { name: 'Binary Search', folder: 'binary-search' },
    { name: 'Hash Tables', folder: 'hash-tables' },
    { name: 'Linked Lists', folder: 'linked-lists' },
    { name: 'Stacks & Queues', folder: 'stacks-queues' },
    { name: 'Tree Fundamentals', folder: 'tree-fundamentals' },
    { name: 'Trees (DFS/BFS)', folder: 'trees' },
    { name: 'Binary Search Trees', folder: 'binary-search-trees' },
    { name: 'Heaps', folder: 'heaps' },
    { name: 'Graphs', folder: 'graphs' },
    { name: 'Dynamic Programming', folder: 'dynamic-programming' },
    { name: 'Backtracking', folder: 'backtracking' },
    { name: 'Greedy', folder: 'greedy' },
    { name: 'Bit Manipulation', folder: 'bit-manipulation' },
];

function countSolvedProblems(categoryFolder: string, rootDir: string): number {
    const categoryPath = join(rootDir, categoryFolder);

    if (!existsSync(categoryPath)) {
        return 0;
    }

    try {
        const entries = readdirSync(categoryPath, { withFileTypes: true });
        const problemFolders = entries.filter(e => e.isDirectory());

        let solvedCount = 0;
        for (const folder of problemFolders) {
            const problemPath = join(categoryPath, folder.name);
            const glob = new Glob('solution-*.ts');
            const solutions = Array.from(glob.scanSync(problemPath));

            if (solutions.length > 0) {
                solvedCount++;
            }
        }

        return solvedCount;
    } catch {
        return 0;
    }
}

function generateProgressBar(solved: number, total: number): string {
    const filled = '✅'.repeat(solved);
    const empty = '⬜'.repeat(total - solved);
    return filled + empty;
}

function generateProgressLine(category: CategoryProgress): string {
    const checkbox = category.solved === category.total ? 'x' : ' ';
    const progressBar = generateProgressBar(category.solved, category.total);
    return `- [${checkbox}] **[${category.name}](./${category.folder}/)** (${category.solved}/${category.total}) ${progressBar}`;
}

export async function updateCategoryProgress(categoryFolder: string, rootDir: string = process.cwd()): Promise<void> {
    const categoryPath = join(rootDir, categoryFolder);
    const readmePath = join(categoryPath, 'README.md');

    if (!existsSync(readmePath)) {
        return;
    }

    const solved = countSolvedProblems(categoryFolder, rootDir);
    const total = 10;
    const progressBar = generateProgressBar(solved, total);
    const newProgressLine = `## Progress: ${solved}/${total} ${progressBar}`;

    // Read current README
    let readme = readFileSync(readmePath, 'utf-8');

    // Replace progress line
    const progressRegex = /## Progress: \d+\/\d+ [✅⬜]+/;

    if (progressRegex.test(readme)) {
        readme = readme.replace(progressRegex, newProgressLine);
        writeFileSync(readmePath, readme, 'utf-8');
        console.log(`📊 Category README.md updated: ${categoryFolder} (${solved}/${total})`);
    }
}

export async function updateProgress(rootDir: string = process.cwd()): Promise<void> {
    const readmePath = join(rootDir, 'README.md');

    if (!existsSync(readmePath)) {
        console.warn('⚠️  README.md not found in root, skipping progress update');
        return;
    }

    // Count solved problems for each category
    const progress: CategoryProgress[] = CATEGORIES.map(cat => ({
        name: cat.name,
        folder: cat.folder,
        solved: countSolvedProblems(cat.folder, rootDir),
        total: 10,
    }));

    // Calculate totals
    const totalSolved = progress.reduce((sum, cat) => sum + cat.solved, 0);
    const totalProblems = progress.reduce((sum, cat) => sum + cat.total, 0);
    const percentage = totalProblems > 0 ? ((totalSolved / totalProblems) * 100).toFixed(2) : '0.00';

    // Generate new progress section
    const progressLines = progress.map(generateProgressLine);
    const newProgressSection = [
        '## 📋 Progress',
        '',
        ...progressLines,
        '',
        `**Total: ${totalSolved}/${totalProblems}** (${percentage}%)`,
    ].join('\n');

    // Read current README
    let readme = readFileSync(readmePath, 'utf-8');

    // Replace progress section
    const progressRegex = /## 📋 Progress\n\n[\s\S]*?\n\n\*\*Total:.*?\n/;

    if (progressRegex.test(readme)) {
        readme = readme.replace(progressRegex, newProgressSection + '\n');
        writeFileSync(readmePath, readme, 'utf-8');
        console.log('📊 Root README.md updated');
    } else {
        console.warn('⚠️  Could not find progress section in README.md');
    }
}


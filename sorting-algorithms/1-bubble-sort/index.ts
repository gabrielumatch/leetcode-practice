import { runBenchmark } from '../../utils/runner';

// Run benchmark with optional filters:
// bun index.ts --solution 2 --test-case 0
// bun index.ts -s 2 -t 0
// bun index.ts --skip-benchmark
await runBenchmark(import.meta.dir);


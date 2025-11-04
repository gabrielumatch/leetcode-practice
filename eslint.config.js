import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
    eslint.configs.recommended,
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: './tsconfig.json',
            },
            globals: {
                console: 'readonly',
                process: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
        },
        rules: {
            // ========================================
            // INDENTATION (4 spaces - primary enforcer)
            // ========================================
            'indent': ['error', 4, { 
                'SwitchCase': 1,
                'ignoredNodes': ['PropertyDefinition'],
            }],

            // ========================================
            // TYPESCRIPT SPECIFIC
            // ========================================
            '@typescript-eslint/no-unused-vars': ['error', {
                'argsIgnorePattern': '^_',
                'varsIgnorePattern': '^_',
            }],
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-non-null-assertion': 'off',

            // ========================================
            // PREVENT COMMON MISTAKES
            // ========================================
            'no-constant-condition': 'error',       // Catch infinite loops: while(true)
            'no-dupe-keys': 'error',                // Duplicate object keys
            'no-duplicate-case': 'error',           // Duplicate switch cases
            'no-ex-assign': 'error',                // Reassigning exceptions
            'no-func-assign': 'error',              // Reassigning functions
            'no-unreachable': 'error',              // Code after return/throw
            'no-unsafe-negation': 'error',          // if (!key in obj) instead of !(key in obj)
            'use-isnan': 'error',                   // Require isNaN() instead of === NaN
            'valid-typeof': 'error',                // Valid typeof comparisons

            // ========================================
            // BEST PRACTICES FOR ALGORITHMS
            // ========================================
            'eqeqeq': ['error', 'always'],          // Always use === and !==
            'no-eval': 'error',                     // Never use eval
            'no-implied-eval': 'error',             // No setTimeout with strings
            'no-return-assign': 'error',            // No assignments in return
            'no-self-compare': 'error',             // x === x is likely a bug
            'no-unmodified-loop-condition': 'error', // Loop condition never changes
            'no-loop-func': 'error',                // Functions in loops can cause bugs
            'no-param-reassign': 'warn',            // Avoid reassigning parameters
            'prefer-const': 'error',                // Use const when var is never reassigned
            'no-var': 'error',                      // Always use let/const, never var

            // ========================================
            // ARRAY & OBJECT SAFETY
            // ========================================
            'array-callback-return': 'error',       // map/filter/etc must return
            'no-array-constructor': 'error',        // Use [] instead of new Array()
            'no-sparse-arrays': 'error',            // [1,,3] is confusing

            // ========================================
            // CONTROL FLOW
            // ========================================
            'default-case': 'warn',                 // Switch should have default
            'no-fallthrough': 'error',              // No fallthrough in switch without comment
            'no-empty': ['error', { 
                'allowEmptyCatch': true 
            }],

            // ========================================
            // CODE STYLE (consistency)
            // ========================================
            'semi': ['error', 'always'],            // Always use semicolons
            'quotes': ['error', 'single', {         // Single quotes preferred
                'avoidEscape': true,
                'allowTemplateLiterals': true,
            }],
            'comma-dangle': ['error', {             // Consistent trailing commas
                'arrays': 'always-multiline',
                'objects': 'always-multiline',
                'imports': 'always-multiline',
                'exports': 'always-multiline',
                'functions': 'never',
            }],
            'no-trailing-spaces': 'error',          // Clean up trailing spaces
            'eol-last': ['error', 'always'],        // File should end with newline

            // ========================================
            // PERFORMANCE & OPTIMIZATION
            // ========================================
            'no-await-in-loop': 'warn',             // Can cause performance issues
            'no-console': 'off',                    // Allow console (needed for LeetCode)
        },
    },
    {
        // Ignore files
        ignores: [
            'node_modules/**',
            'dist/**',
            'build/**',
            '*.config.js',
            '*.config.ts',
        ],
    },
];


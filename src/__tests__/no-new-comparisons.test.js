const {RuleTester} = require('eslint');
const noNewArrayOrObjectComparisonsRule = require('../no-new-comparisons');

const ruleTester = new RuleTester({
    parserOptions: {ecmaVersion: 2015},
});

ruleTester.run(
    'no-new-array-comparisons',
    noNewArrayOrObjectComparisonsRule,
    {
        valid: [
            {code: 'const bla = foo === arr;'},
            {code: 'if (bla === arr){}'},
        ],
        invalid: [
            {
                code: 'const foo = bla === [];',
                errors: 1,
            },
            {
                code: 'if (bla === []){}',
                errors: 1,
            },
            {
                code: 'if ([] === bla){}',
                errors: 1,
            },
            {
                code: 'const foo = ["abc"] === foo;',
                errors: 1,
            },
            {
                code: 'const foo = {} === bar;',
                errors: 1,
            },
            {
                code: 'const foo = bar === {foo: 123};',
                errors: 1,
            },
            {
                code: 'if (foo === {}){}',
                errors: 1,
            },
            {
                code: 'if({} === foo){}',
                errors: 1,
            },
        ],
    },
);

console.log('All tests passed');

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Prevents direct comparisons with new arrays',
            fixable: 'code',
            recommended: true,
            schema: [],
        },
    },
    create(context) {
        return {
            BinaryExpression(node) {
                if (
                    node.operator === '===' &&
                    (node.right.type === 'ArrayExpression' || node.left.type === 'ArrayExpression'
                        || node.right.type === 'ObjectExpression' || node.left.type === 'ObjectExpression')
                ) {
                    context.report({
                        node,
                        message: 'Comparison of a value with a newly created array or object',
                    });
                }
            },
        };
    },
};

const noNewArrayOrObjectComparisonsRule = require('./no-new-comparisons');

const plugin = {
    rules: {'no-new-array-or-object-comparisons': noNewArrayOrObjectComparisonsRule},
};

module.exports = plugin;

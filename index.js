if (require('fs').accessSync) {
    module.exports = require('bindings')('nodex25x.node');
} else {
    console.log('Cannot export bindings (no fs access).');
}

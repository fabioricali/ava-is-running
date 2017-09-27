module.exports = function () {
    return Object.prototype.hasOwnProperty.call(process.env, 'AVA_PATH');
};
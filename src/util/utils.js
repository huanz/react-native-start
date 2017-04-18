
const toString = Object.prototype.toString;

function isType(type) {
    return val => {
        return toString.call(val) === `[object ${type}]`;
    };
}

function isTypeof(type) {
    return val => {
        return typeof val === type.toLowerCase();
    };
}

let utils = {};

['Object', 'Function', 'Date', 'Array', 'ArrayBuffer'].forEach(type => {
    utils[`is${type}`] = isType(type);
});

['String', 'Number', 'Undefined'].forEach(type => {
    utils[`is${type}`] = isTypeof(type);
});

export default utils;
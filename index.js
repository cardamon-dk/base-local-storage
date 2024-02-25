"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    set: function set(key, value, expireSeconds) {
        var data = {
            value: value,
            expire: expireSeconds ? new Date().getTime() + expireSeconds * 1000 : null
        };
        localStorage.setItem(key, JSON.stringify(data));
    },

    get: function get(key) {
        var cachedData = localStorage.getItem(key);
        if (!cachedData) {
            return null;
        }

        var _JSON$parse = JSON.parse(cachedData),
            value = _JSON$parse.value,
            expire = _JSON$parse.expire;

        if (expire && new Date().getTime() > expire) {
            localStorage.removeItem(key);
            return null;
        }

        return value;
    },

    remove: function remove(key) {
        localStorage.removeItem(key);
    },

    clearAll: function clearAll() {
        localStorage.clear();
    }
};
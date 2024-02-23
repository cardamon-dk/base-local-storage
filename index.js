export default {
    set: function (key, value, expireSeconds) {
        const data = {
            value,
            expire: expireSeconds ? new Date().getTime() + expireSeconds * 1000 : null,
        }
        localStorage.setItem(key, JSON.stringify(data))
    },

    get: function (key) {
        const cachedData = localStorage.getItem(key)
        if (!cachedData) {
            return null
        }

        const { value, expire } = JSON.parse(cachedData)

        if (expire && new Date().getTime() > expire) {
            localStorage.removeItem(key)
            return null
        }

        return value
    },

    remove: function (key) {
        localStorage.removeItem(key)
    },

    clearAll: function () {
        localStorage.clear()
    },
}

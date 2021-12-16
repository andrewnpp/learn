
var RecentCounter = function() {
    this.counter = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.counter.push(t);
    let index = 0;
    while (this.counter[index] < t - 3000) {
        index++;
    }
    return this.counter.length - index;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

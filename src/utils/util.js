'use strict';

class Util {
    constructor(start, end) {

        this.start = start;
        this.end = end;
    }

    DatesInInterval() {

        var dates = [];
        console.log('start util: ' + Date.parse(this.start));
        console.log('end util: ' + Date.parse(this.end));

        if (Date.parse(this.start)) {
            dates.push(this.start);
        }
        if (Date.parse(this.end)) {
            dates.push(this.end);
        }
        return dates;
    }
}

export { Util }
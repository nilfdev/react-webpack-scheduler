'use strict';

class Util {
    constructor(start, end) {

        this.start = this.props.start;
        this.end = this.props.end;
        console.log('start ' + this.start);
        console.log('end ' +this.end);
    }

    DatesInInterval() {

        let dates = [];
        for (let i=this.start; i<= this.end; i++){
            dates.push(i);
        }
     
        return dates;
    }
}

export { Util }
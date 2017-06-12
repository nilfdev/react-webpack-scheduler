'use strict';

class DateService {

    static toDate(string) {
        let date = new Date(string);
        if (Object.prototype.toString.call(date) === '[object Date]') {
            return date;
        }
        return null;
    }

    static isWeekend(date) {
        let day = new Date(date).getDay();
        return day == 6 || day == 0;
    }

    static addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    static format(date) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()] + ' ' +
            date.getUTCFullYear() + "." +
            ("0" + (date.getUTCMonth() + 1)).slice(-2) + "." +
            ("0" + date.getUTCDate()).slice(-2);
    }
}

export { DateService }
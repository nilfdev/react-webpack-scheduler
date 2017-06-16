import moment from 'moment';

const toDate = (string) => {
   return moment(string);
}

const isWeekend = (string) => {
    let day = moment(string).weekday();
    return day == 6 || day == 0;
}

const format = (string) => {
    let date = moment(string);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.weekday()] + ' ' + date.format('YYYY.MM.DD');
}

const formatParam = (string) => {
    let date = moment(string);
    return date.format('YYYY/MM/DD')
}

const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

const getDatesBetween = (start, end) => {
    let startDate = toDate(start);
    let endDate = toDate(end);

    let dates = new Array();
    while (startDate && endDate && startDate <= endDate) {
        dates.push(startDate);
        startDate = addDays(startDate, 1);
    }
    return dates
}
   
export {toDate, isWeekend, format, formatParam, addDays, getDatesBetween};
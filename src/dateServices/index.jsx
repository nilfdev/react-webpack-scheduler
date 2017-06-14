const toDate = (string) => {
    let date = new Date(string);
    if (Object.prototype.toString.call(date) === '[object Date]') {
        return date;
    }
    return null;
}

const isWeekend = (date) => {
    let day = new Date(date).getDay();
    return day == 6 || day == 0;
}

const format = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()] + ' ' +
        date.getUTCFullYear() + '.' +
        ("0" + (date.getUTCMonth() + 1)).slice(-2) + '.' +
        ("0" + date.getUTCDate()).slice(-2);
}

const formatParam = (string) => {
    let date = new Date(string);
    return date.getUTCFullYear() + '/' +
        ("0" + (date.getUTCMonth() + 1)).slice(-2) + '/' +
        ("0" + date.getUTCDate()).slice(-2);
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
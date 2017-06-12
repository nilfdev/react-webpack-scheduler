export const toDate = ({ string }) => {
    let date = new Date(string);
    if (Object.prototype.toString.call(date) === '[object Date]') {
        return date;
    }
    return null;
}
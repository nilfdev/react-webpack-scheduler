'use strict'

import { DateService } from '../services/dateService';

class PeriodService {
    static getDates(start, end) {
        let startDate = DateService.toDate(start);
        let endDate = DateService.toDate(end);

        let dates = new Array();
        while (startDate && endDate && startDate <= endDate) {
            dates.push(startDate);
            startDate = DateService.addDays(startDate, 1);
        }
        return dates
    }

}

export { PeriodService }
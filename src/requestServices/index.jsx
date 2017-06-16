  import moment from 'moment';

  const getRequest = (requests, teamMember, date)=> {
        let gridDate = moment(date, 'YYYY.MM.DD');
        for (let i = 0; i < requests.length; i++) {
            if (requests[i].user == teamMember) {
                let requestDate = moment(requests[i].date, 'YYYY.MM.DD');
                if (requestDate.isSame(gridDate)) {
                    return requests[i];
                }
            }
        }
        return null;
    }

export {getRequest}
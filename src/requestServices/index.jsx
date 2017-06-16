  import moment from 'moment';

  const getRequest = (requests, teamMember, date)=> {
        let gridDate = moment(date);
        for (let i = 0; i < requests.length; i++) {
            if (requests[i].user == teamMember) {
                if (moment(requests[i].date).isSame(gridDate)) {
                    return requests[i];
                }
            }
        }
        return null;
    }

export {getRequest}
  const getRequest = (requests, teamMember, date)=> {
        let gridDate = new Date(date);

        for (let i = 0; i < requests.length; i++) {

            if (requests[i].user == teamMember) {
                let requestDate = new Date(requests[i].date);

                if (requestDate.getDate() == gridDate.getDate()) {
                    return requests[i];
                }
            }
        }
        return null;
    }

export {getRequest}
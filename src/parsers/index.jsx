
const parseTeams = (response) => {
    let teams = [];
    if(!response || !response.body || !response.body.rows){
        return teams;
    }
    for(let team of response.body.rows){
        teams.push({_id: team.id, name: team.doc.name, members: team.doc.members});
    }
    return teams;
}

const parseRequests = (response) => {
    let requests = [];
    if(!response || !response.body || !response.body.rows){
        return requests;
    }

    for(let request of response.body.rows){
        requests.push({id: request.id, date: request.key, user: request.value.user, status: request.value.status});
    }

    return requests;
}

export {parseTeams, parseRequests};
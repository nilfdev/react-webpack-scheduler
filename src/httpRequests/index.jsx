import request from 'superagent';

const Get = (url, callback) => {
    request
        .get(url)
        .accept('application/json')
        .end(function(err, res){
                if(err) {
                    throw err;
                }
                callback(res);
            });
        //.send({message: this.state.message})
        //.withCredentials()
}

const Post = () => {

}

export {Get, Post}
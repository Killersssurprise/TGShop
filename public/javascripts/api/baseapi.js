let host = 'http://127.0.0.1:3000';

const endpoint = '/put-goods-api?';
class Good{

    GET(){

    }

    POST(queryString){
        return fetch(`${host}${encodeURI(queryString)}`, {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
            //make sure to serialize your JSON body

        })
    }


}
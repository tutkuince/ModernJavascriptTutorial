// Ajax, callback and http requests

class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    // Get Request
    get(url, callback) {
        this.xhr.open("GET", url, true);

        // this.xhr.onload = function () {
        //     console.log(this);
        //     // if (this.xhr.status === 200){   // Cannot read property 'status' of undefined
        //     //                                 // at XMLHttpRequest.xhr.onload
        //     //     console.log(this.xhr.responseText);
        //     // }
        //
        //     // if (this.status === 200){    // GOOD!
        //     //     console.log(this.responseText);
        //     // }
        //
        //     if (this.xhr.status === 200){
        //         console.log(this.xhr.responseText);
        //     }
        //
        // }.bind(this);   // GOOD!

        this.xhr.onload = () => {   // same with bind()
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText);    // after request completed
            } else {
                // Error
                callback("An Error occurred!", null);
            }
        };

        this.xhr.send();
    }

    // Post Request
    post(url, data, callback){
        this.xhr.open("POST", url, true);
        this.xhr.setRequestHeader("Content-type", "application/json");

        this.xhr.onload = () => {
            if (this.xhr.status === 201){
                // Success
                callback(null, this.xhr.responseText);
            } else {
                // Error
                callback("An error occurred! ( POST Request )", null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
}

const request = new Request();

// const albums = request.get("https://jsonplaceholder.typicode.com/albums/1", function (err, response) {
//     if (err === null) {
//         // Success
//         console.log(response);
//     } else {
//         // Error
//         console.log(err);
//     }
// });

const album = {
    userId: 2,
    title: "Title Test"
}

request.post("https://jsonplaceholder.typicode.com/albums", album, function (err, response) {
   if (err === null)
       console.log(response);   // success
    else
       console.log(err);    // Error
});
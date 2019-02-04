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
                callback("An Error occurred! - ( GET )", null);
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

    // Put Request
    put(url, data, callback){
        this.xhr.open("PUT", url, true);
        this.xhr.setRequestHeader("Content-type", "application/json");

        this.xhr.onload = () => {
            if (this.xhr.status === 200){
                callback(null, this.xhr.responseText);  // Success
            } else {
                callback("An error occurred! ( PUT Request )", null);   // Error
            }
        }
        this.xhr.send(JSON.stringify(data));    // DO NOT FORGET!!!
    }

    // Delete Request
    delete(url, callback){
        this.xhr.open("DELETE", url, true);

        this.xhr.onload = function () {
            if (this.xhr.status === 200) {
                callback(null, "Data has been deleted!");  // success
            } else {
                callback("An error occurred! - ( DELETE Request )", null);  // error
            }
        }.bind(this);

        this.xhr.send();
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

// const album = {
//     userId: 2,
//     title: "Title Test"
// }
//
// request.post("https://jsonplaceholder.typicode.com/albums", album, function (err, response) {
//    if (err === null)
//        console.log(response);   // success
//     else
//        console.log(err);    // Error
// });

// request.put("https://jsonplaceholder.typicode.com/albums/1", {userId: 1, title: "Test Title"}, function (err, response) {
//     if (err === null)
//         console.log(response);  // success
//     else
//         console.log(err);
// });


request.delete("https://jsonplaceholder.typicode.com/albums/1", function (err, response) {
    if (err === null)
        console.log(response);  // success
    else
        console.log(err);   // error
});
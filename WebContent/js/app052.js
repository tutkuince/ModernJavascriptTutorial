class Request {

    // get(url) {   // GET Request
    //
    //     return new Promise(((resolve, reject) => {
    //         fetch(url)
    //             .then(response => {
    //                 if (!response.ok)
    //                     throw Error("An error occurred! Error Code: " + response.status);
    //
    //                 return response.json();
    //             })
    //             .then(data => resolve(data))
    //             .catch(err => reject(err));
    //     }));
    //
    // }

    async get(url) {
        const response = await fetch(url);  // Response Object
        const data = await response.json(); // JSON Object
        return data;
    }

    // post(url, data) {   // POST Request
    //     return new Promise((resolve, reject) => {
    //         fetch(url, {
    //             method: "POST",
    //             body: JSON.stringify(data),
    //             headers: {
    //                 "Content-type": "application/json; charset=UTF-8"
    //             }
    //         })
    //             .then(response => {
    //                 if (!response.ok)
    //                     throw Error("An error occurred! Error Code: " + response.status);
    //
    //                 return response.json();
    //             })
    //             .then(data => resolve(data))
    //             .catch(err => reject(err));
    //     });
    // }

    async post(url, data) {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }); // Response Object

        const jsonData = await response.json();

        return jsonData;
    }


    // put(url, data) {
    //     return new Promise((resolve, reject) => {
    //         fetch(url, {
    //             method: "PUT",
    //             body: JSON.stringify(data),
    //             headers: {
    //                 "Content-type": "application/json; charset=UTF-8"
    //             }
    //         })
    //             .then(response => {
    //                 if (!response.ok)
    //                     throw Error("An error occurred! Error Code: " + response.status);
    //
    //                 return response.json();
    //             })
    //             .then(data => resolve(data))
    //             .catch(err => reject(err));
    //     });
    // }

    async put(url, data) {
        const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }); // Response Object
        const jsonData = await response.json(); // JSON Object

        return jsonData;
    }


    // delete(url) {
    //     return new Promise((resolve, reject) => {
    //         fetch(url, {
    //             method: "DELETE"
    //         })
    //             .then(response => {
    //                 if (!response.ok)
    //                     throw Error("An error occurred! Error Code: " + response.status);
    //
    //                 resolve("Selected data has been deleted!");
    //             })
    //             .catch(err => reject(err));
    //     });
    // }

    async delete(url) {
        const response = await fetch(url, {
            method: "DELETE"
        }); // Response Object

        // const jsonData = await response.json();
        // return jsonData;

        return "Selected data has been deleted!";
    }
}

const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums")
//     .then(response => console.log(response))
//     .catch(err => console.log(err));

// request.post("https://jsonplaceholder.typicode.com/albums", {userId: 1, title: "Test Title"})
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

// request.put("https://jsonplaceholder.typicode.com/albums/1", {userId: 1, title: "Test Title"})
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

request.delete("https://jsonplaceholder.typicode.com/albums/1")
    .then(response => console.log(response))
    .catch(err => console.error(err));
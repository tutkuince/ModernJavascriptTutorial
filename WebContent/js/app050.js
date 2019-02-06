class Request {

    get(url) {   // GET Request

        return new Promise(((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (!response.ok)
                        throw Error("An error occurred! Error Code: " + response.status);

                    return response.json();
                })
                .then(data => resolve(data))
                .catch(err => reject(err));
        }));

    }

    post(url, data) {   // POST Request
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => {
                    if (!response.ok)
                        throw Error("An error occurred! Error Code: " + response.status);

                    return response.json();
                })
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => {
                    if (!response.ok)
                        throw Error("An error occurred! Error Code: " + response.status);

                    return response.json();
                })
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "DELETE"
            })
                .then(response => {
                    if (!response.ok)
                        throw Error("An error occurred! Error Code: " + response.status);

                    resolve("Selected data has been deleted!");
                })
                .catch(err => reject(err));
        });
    }
}

const request = new Request();

let albums;

// request.get("https://jsonplaceholder.typicode.com/albums")
//     .then(data => {
//         albums = data;
//         console.log(albums);
//     })
//     .catch(err => console.log(err));

// console.log(albums); // asynchronous

// request.post("https://jsonplaceholder.typicode.com/albums", {userId: 1, title: "Test Title"})
//     .then(data => {
//         albums = data;
//         console.log(albums);
//     }).catch(err => console.log(err));

// request.put("https://jsonplaceholder.typicode.com/albums/1", {userId: 1, title: "Test Title"})
//     .then(data => {
//         albums = data;
//         console.log(albums);
//     })
//     .catch(err => console.log(err));

request.delete("https://jsonplaceholder.typicode.com/albums/1")
    .then(message => console.log(message))
    .catch(err => console.log(err));
class Request {

    get(url) {   // GET Request

        return new Promise(((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
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
                .then(response => response.json())
                .then(data => resolve(data))
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

request.post("https://jsonplaceholder.typicode.com/albums", {userId: 1, title: "Test Title"})
    .then(data => {
        albums = data;
        console.log(albums);
    }).catch(err => console.log(err));


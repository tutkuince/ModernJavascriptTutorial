// Http Status
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error


// readyState
// Holds the status of the XMLHttpRequest.
//
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

document.getElementById("btn").addEventListener("click", function () {
    // XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // xhr.onreadystatechange = function () {
    //     // console.log(this.readyState);
    //     // console.log(this.status);
    //
    //     if (this.status == 200 && this.readyState == 4){
    //         // Response is ready
    //         console.log(this.responseText);
    //     }
    // }


    // When readystate is 3, onprogress() function will run
    xhr.onprogress = function () {
        console.log("Processing request");
    }

    // When readystate is 4, onload() function will run
    xhr.onload = function () {
        // console.log(this.readyState);   // when response is ready onload() will run

        if (this.status == 200) {
            console.log(this.responseText);
            document.querySelector("#ajax").textContent = this.responseText;
        }
    }

    xhr.open("GET", "resources/041textfile.txt", true);

    xhr.send();


});

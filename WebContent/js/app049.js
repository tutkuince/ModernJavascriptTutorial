// function getTextFile() { // Local Text File
//     fetch("resources/049fetch.txt")
//         .then(response => response.text())
//         .then(data => console.log(data))
//         .catch(err => console.log(err));
// }

// getTextFile();

// function getJSONFile() {    // Local JSON File
//     fetch("resources/049student.json")
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err));
// }
//
// getJSONFile();


function getExternalAPI(){  // External JSON File
    fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => {
            console.log("1 EURO: " + data.rates.TRY + "TL");
        })
        .catch(err => console.log(err));
}

getExternalAPI();
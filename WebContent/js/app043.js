document.getElementById("change").addEventListener("click", change);

function change() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.exchangeratesapi.io/latest", true);

    xhr.onload = function () {
        if (this.status == 200){
            const response = JSON.parse(this.responseText);
            const rate = response.rates.TRY;
            const amount = Number(document.getElementById("amount").value);

            document.getElementById("tl").value = rate * amount;
        }
    }

    xhr.send();
}
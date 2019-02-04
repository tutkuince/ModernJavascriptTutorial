document.getElementById("ajax").addEventListener("click", getAllEmployees);

function getAllEmployees() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "resources/042employees.json", true);

    xhr.onload = function () {
        let list = document.getElementById("employees");

        if (this.status == 200){
            const employees = JSON.parse(this.responseText);

            employees.forEach(e => {
                list.innerHTML += `
                    <tr>
                        <td>${e.name}</td>
                        <td>${e.department}</td>
                        <td>${e.salary}</td>
                    </tr>
                `;
            });
        }
    }

    xhr.send(); // get
}
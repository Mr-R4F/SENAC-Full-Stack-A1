const showResults = document.getElementById("btn-showResults");
const form = document.getElementById("product-form");
const results = document.getElementById("results");

axios.get("http://localhost:9000/api/v1/products")
    .then((response) => {
        const data = response.data.data;
        console.log("Resposta da API:", data);

        if (!Array.isArray(data) || data.length === 0) {
            results.innerHTML = "Nenhum dado encontrado.";
            return;
        }

        const table = document.createElement("table");
        table.style.border = "1px solid #ccc";
        table.style.borderCollapse = "collapse";
        table.style.marginTop = "10px";

        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");

        Object.keys(data[0]).forEach((key) => {
            const th = document.createElement("th");
            th.style.border = "1px solid #ccc";
            th.textContent = key.toUpperCase();
            th.style.padding = "8px";
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement("tbody");
        data.forEach((item) => {
            const row = document.createElement("tr");

            Object.values(item).forEach((value) => {
                const td = document.createElement("td");
                td.style.border = "1px solid #ccc";
                td.textContent = value;
                td.style.padding = "8px";
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        results.innerHTML = "";
        results.appendChild(table);
    })
    .catch((err) => {
        console.error('No Products found', err);
        results.innerHTML = 'No Products found';
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const description = document.getElementById("desc").value;

    axios.post("http://localhost:9000/api/v1/products", {
        name,
        description
    })
        .then((response) => {
            console.log('Product created successfully', response.data);

        })
        .catch((err) => {
            console.error('An error ocurried', err);
        });
});
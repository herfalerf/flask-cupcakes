const BASE_URL = "http://127.0.0.1:5000/";

function generateCupcakeHTML(cupcake) {
  return `
    <div data-cupcake-id=${cupcake.id}>
        <li>
            ${cupcake.flavor} / ${cupcake.size} / ${cupcake.rating}
            <button class="dlete-button">X</button>
        </li>
            <img class="Cupcake-img"
                src="${cupcake.image}"
                alt="(no iamge provided)">
    </div>
    `;
}

async function getCakes() {
  const response = await axios.get(`${BASE_URL}/api/cupcakes`);

  for (let cupcakeData of response.data.cupcakes) {
    let newCupcake = $(generateCupcakeHTML(cupcakeData));
    $("#cupcakes-list").append(newCupcake);
  }
}

$(getCakes);

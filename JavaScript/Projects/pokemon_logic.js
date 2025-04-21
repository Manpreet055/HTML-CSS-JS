/* const image = document.querySelector(".image");
const searchButton = document.querySelector(".search");

async function pokemon() {
  try {
    const pokemonName = document
      .querySelector(".pokemonName")
      .value.toLowerCase();
      const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        if (!response.ok) {
      throw new Error("This pokemon does not exist..");
    }
    const data = await response.json();
    image.src = data.sprites.front_default;
    image.style.display = "block";
    console.log(data);
} catch (error) {
    console.error(error);
}
}

searchButton.addEventListener("click", () => {
  pokemon();
}); */

const image = document.querySelector(".image");
const button = document.querySelector(".search");
button.addEventListener("click", () => {
  pokemon();
});
async function pokemon() {
  try {
    const pokemonName = document
      .querySelector(".pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new Error("This pokemon is not exist..");
    }
    const data = await response.json();
    console.log(data);
    image.src = data.sprites.front_default;
    image.style.display = "block";
} catch (error) {
    console.error(error);
    image.style.display = "none";
  }
}

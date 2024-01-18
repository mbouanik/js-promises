const res = axios
  .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then((res) => {
    return res;
  });
const btn = document.querySelector("button");
const cards = document.querySelector(".cards");
btn.addEventListener("click", (evt) => {
  console.log("clicked");
  res
    .then((res) => {
      return axios.get(
        `https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`,
      );
    })
    .then((res) => {
      console.log(res.data);
      console.log(res.data.cards[0].code);
      const template = document.createElement("template");

      template.innerHTML = `<img src="${res.data.cards[0].image}">`;
      const t = template.content;
      cards.prepend(t);
    });
});

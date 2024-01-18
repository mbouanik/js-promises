const url = `http://numbersapi.com/42/`;

function facts_about_num(num) {
  return axios.get(`http://numbersapi.com/${num}/`);
}

facts_about_num(42)
  .then((res) => {
    console.log(res.data);
    return facts_about_num(66);
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

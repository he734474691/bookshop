const axios = require("axios");

function login(data, callback, err) {
  axios
    .post(
      "https://mockapi.eolinker.com/mjqkpnF3cae93ccfd1219112d1885d270a76a9e0102a985/login",
      data
    )
    .then(callback)
    .catch(err);
}

export { login };

function tokenSpotify() {
  if (!localStorage.getItem("tokenBM")) {
    let key = process.env.REACT_APP_SK;
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ${key}`);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    let urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow"
    };
    return fetch("https://accounts.spotify.com/api/token", requestOptions)
      .then(response => response.text())
      .then(result => {
        let res = JSON.parse(result);
        localStorage.setItem("tokenBM", res.access_token);
      })
      .catch(error => console.error(error));
  }
}
export default tokenSpotify;

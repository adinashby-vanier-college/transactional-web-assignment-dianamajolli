const API_KEY = "a532733febc143feb306567cce782947";
const URL = `https://timezone.abstractapi.com/v1/current_time/?api_key=${API_KEY}&location=Montreal`;

function time_api() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const time = new Date(data.datetime);
      if(!data.hasOwnProperty("error"))
      {
        const options = {
          hour: "numeric",
          minute: "numeric",
          //second: "numeric",
          timeZoneName: "short",
        };
        const formattedTime = time.toLocaleString("en-US", options);
        document.getElementById("time").textContent = formattedTime;
      }
      setTimeout(time_api, 1000);
    })
    .catch((error) => console.error(error));
}

time_api();
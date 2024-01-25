const API_KEY = "1274a24bdaec41089f894b30e19942b6";
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
      setTimeout(time_api, 10000);
    })
    .catch((error) => console.error(error));
}

time_api();
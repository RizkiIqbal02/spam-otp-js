const { default: axios } = require("axios");

const data = { "phone_number_country_code": "62", "phone_number": 87819471008, "type": "register" }
axios.post('https://m.misteraladin.com/api/members/v2/otp/request', data, {
    headers: {
        Host: "m.misteraladin.com",
        "accept-language": "id",
        "sec-ch-ua-mobile": "?1",
        "content-type": "application/json",
        "accept": "application/json, text/plain, */*",
        "user-agent": "Mozilla/5.0 (Linux; Android 11; CPH2325) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 Mobile Safari/537.36",
        "x-platform": "mobile-web",
        "sec-ch-ua-platform": "Android",
        origin: "https://m.misteraladin.com",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        referer: "https://m.misteraladin.com/account",
        "accept-encoding": "gzip, deflate, br"
    }
}).then((response) => {
    console.log(response.data);
}).catch((error) => {
    console.log(error);
});


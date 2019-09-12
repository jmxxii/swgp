export var WebServices = {
    callWebService_GET: function(url, body) {
        return fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.text()) // Convert to text instead of res.json()
            .then((text) => {
                return text;
            })
            .then(response => JSON.parse(response)) // Parse the text.
            .then((jsonRes) => {
                return jsonRes;
            })
    }
}
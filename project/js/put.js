(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/` + 1, {
            method: 'PUT',
            body: JSON.stringify({
                "name": "John doe",//5
                "age": 5,
                "gender": "Male"
              }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => {
            // check for response OK (200)
            if (response.status !== 200) {
                console.error(`status: ${response.status}`);
                return;
            }
            // convert json response into object
            return response.json();
        }).then(data => {
            console.log(data);
        }).then(document.write("Successful put!")
        ).catch(error => {
            console.error(error);
        });
})();
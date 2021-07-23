(() => {
    fetch("https://jsonplaceholder.typicode.com/users", { //1
    method: 'post', //2
    headers: {
      "Content-type": "application/json" //3
    },
    body: JSON.stringify( //4
      {
        "name": "John doe",//5
        "age": 5,
        "gender": "Male"
      }
    )
  })
  .then(res => res.json())
  .then((data) => console.log(`Request succeeded with JSON response ${data}`)).then(document.write("Successful Post!"))
  .catch((error) => console.log(`Request failed ${error}`))
})();
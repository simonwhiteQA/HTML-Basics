(() => {
let id = 1; //1
fetch("https://jsonplaceholder.typicode.com/users/${id}"+id, {  //2
    method: 'delete'  //3
  })
  .then((data) => {
    console.log(`Request succeeded with JSON response ${data}`);
    // some function to execute if successful
  })
  .then(document.write("Succesful Delete!")
  ).catch((error) => {
    //some function to execute if error
  });

})();
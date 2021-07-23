(() => {

    let container = document.querySelector("#container");
    
    fetch(`https://jsonplaceholder.typicode.com/users`) // 1
    .then((response) => {
        if (response.status !== 200) {  //  2
            console.error(`status: ${reponse.status}`);
            return;
        }
        return response.json() // 3
        .then(data => console.info(data)) // 4
    }).catch((err)=> console.error(`${err}`)); // 5
 
})();
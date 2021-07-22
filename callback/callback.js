const increase = (val) => {
    alert(`The new value is ${val+10}`);
}

const parent = (child) => {
    let value = parseInt(prompt("Please enter a value"));
    child(value);
}

parent(increase);
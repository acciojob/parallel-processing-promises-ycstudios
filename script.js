const output = document.getElementById('output');

let arr = [1, 2, 3, 4];

let p1 = new Promise((resolve) => 
    setTimeout(() => {
        resolve(arr);
    }, 3000)
).then((arr) => {
    return new Promise((resolve) => {
        const filteredResult = arr.filter((value) => value % 2 === 0);
        setTimeout(() => {
            output.innerHTML + = `Filtered Result: ${filteredResult}`;
            resolve(filteredResult);
        }, 1000);
    });
}).then((filteredResult) => {
    return new Promise((resolve) => {
        const multipliedResult = filteredResult.map((value) => value * 2);
        setTimeout(() => {
            output.innerHTML+ = `Multiplied Result: ${multipliedResult}`;
            resolve(multipliedResult);
        }, 2000);
    });
})
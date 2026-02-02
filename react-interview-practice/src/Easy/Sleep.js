/**
* @param {number} millis
* @return {Promise<number>}
*/

async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(millis), millis);
    });
}

let t = Date.now();

sleep(100).then((res) => {
    console.log(res);
    console.log(Date.now() - t);
})
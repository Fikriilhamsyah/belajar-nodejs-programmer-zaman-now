// javascript module langsung membaca bahwa default code adalah async

function samplePromise(name){
    return Promise.resolve(`Hallo ${name}`);
}

const name = await samplePromise("Fikri");
console.info(name);
function samplePromise(name){
    return Promise.resolve(`Hallo ${name}`);
}

async function run(){
    const name = await samplePromise("Fikri");
    console.info(name);
}

run();
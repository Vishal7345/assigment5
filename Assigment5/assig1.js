function createCounter(){

    let count=0;

    return function(){

        count++ ;

        console.log(`Click count: ${count} `)
    };
}

let clickCounter=createCounter();

clickCounter();
clickCounter();
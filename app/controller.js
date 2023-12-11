const generator = require('../public/JS/generator.js');

const randomObject = {

    home: (req, res) => {  

        let randomObject = generator.generatorOneObject(2);
        let multipleObject = generator.generatorMultipleObject(2, 2);
        let simpleArray = generator.randomElementInArray(4);
    
        console.log(randomObject);
        console.log(multipleObject);
        console.log(simpleArray);
    
        res.send('');

    }

};

module.exports = randomObject;

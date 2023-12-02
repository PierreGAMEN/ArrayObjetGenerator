
const data = require('./data.js');

const arrayGenerator = {

    


    Generator: (NbKeyPerObject) => {
        let obj = {};
        for(let i = 0; i <= NbKeyPerObject+1; i++) {
            let newKey = data.clés[arrayGenerator.randomValue(data.clés)];
            obj[newKey] = data.valeurs[arrayGenerator.randomValue(data.valeurs)];
        }
        return obj;
    },
    
    randomValue: (arrayValue) => {
        return Math.floor(Math.random() * arrayValue.length);
    }
    
    
    }

    

module.exports = arrayGenerator

const data = require('./data.js');

const arrayGenerator = {

    generatorOneObject: (NbKeyPerObject) => {
        let obj = {};
        for(let i = 0; i < NbKeyPerObject; i++) {
            let newKey = data.clés[arrayGenerator.randomValue(data.clés)];
            obj[newKey] = data.valeurs[arrayGenerator.randomValue(data.valeurs)];
        }
        console.log(obj);
    },
    
    randomValue: (arrayValue) => {
        return Math.floor(Math.random() * arrayValue.length);
    }, 

    generatorMultipleObjetct: (NbObject, NbKeyPerObject) => {
        let result = []; 
    
        for (let j = 0; j < NbObject; j++) {
            let obj = {};
    
            for (let i = 0; i < NbKeyPerObject; i++) {
                let newKey = data.clés[arrayGenerator.randomValue(data.clés)];
                obj[newKey] = data.valeurs[arrayGenerator.randomValue(data.valeurs)];
            }
    
            result.push(obj); 
        }
    
        console.log(result); 
    }

    
    }
 
module.exports = arrayGenerator
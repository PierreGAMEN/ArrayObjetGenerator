
const data = require('./data.js');

const arrayGenerator = {

    generatorOneObject: (NbKeyPerObject) => {
        let obj = {};
        for(let i = 0; i < NbKeyPerObject; i++) {
            let newKey = data.keys[arrayGenerator.randomValue(data.keys)];
            obj[newKey] = data.values[arrayGenerator.randomValue(data.values)];
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
                let newKey = data.keys[arrayGenerator.randomValue(data.keys)];
                obj[newKey] = data.values[arrayGenerator.randomValue(data.values)];
            }
    
            result.push(obj); 
        }
    
        console.log(result); 
    },

    
    }
 
module.exports = arrayGenerator
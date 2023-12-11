
const data = require('../../data/data.js');

const arrayGenerator = {

    generatorOneObject: (NbKeyPerObject) => {
        let obj = {};
        for(let i = 0; i < NbKeyPerObject; i++) {
            let newKey = data.keys[arrayGenerator.randomValue(data.keys)];
            obj[newKey] = data.values[arrayGenerator.randomValue(data.values)];
        }
        return(obj);
    },
    
    randomValue: (arrayValue) => {
        return Math.floor(Math.random() * arrayValue.length);
    }, 

    generatorMultipleObject: (NbObject, NbKeyPerObject) => {
        let result = []; 
    
        for (let j = 0; j < NbObject; j++) {
            let obj = {};
    
            for (let i = 0; i < NbKeyPerObject; i++) {
                let newKey = data.keys[arrayGenerator.randomValue(data.keys)];
                obj[newKey] = data.values[arrayGenerator.randomValue(data.values)];
            }
    
            result.push(obj); 
        }
    
        return(result); 
    },

    randomElementInArray: (numberOfElement) => {
        let array = [];
        for (let i = 0; i < numberOfElement; i++) {
            let element = data.values[arrayGenerator.randomValue(data.values)]
            array.push(element)
        }
        return array
    },



    
    }
 
module.exports = arrayGenerator
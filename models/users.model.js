const { v4: uuidv4 } = require('uuid');

const users = [
    {
        id : uuidv4(),
        name : 'muktar',
        email : 'ibnemuktar@gmail.com'
    },
    {
        id : uuidv4(),
        name : 'junaid',
        email : 'junaid@gmail.com'
    }
]


module.exports = users;
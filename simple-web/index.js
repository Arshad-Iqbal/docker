const express = require('express');

const app = express();


//route handler
app.get('/',(request,response) => {
    response.send('Hi there');
});

app.listen(8080,() =>{
    console.log('Listening on port 8080');
});

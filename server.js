const express = require('express');
const app = express();

//port 
const PORT = process.env.PORT || 3000;


//test
app.get('/', (req, res) => {
        res.send('hello world')
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
}); 




const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;
 app.use(express.static('public'));
 app.use(express.urlencoded({ extended:true }));
 app.use(express.json());


 require('./routes/apiRouter')(app);
 require('./routes/htmlRouter')(app);

app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);







const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/router');
const r=require('./math/rev');
app.get('/', (req, res) => {
  res.send('Hello World!');
}
);
app.use(express.json());
app.post("/rev", (req, res) => {
    let a=req.body.v;
    let value = parseInt(a);
    let result = r(value);
    res.json({
        api: 'reverse of a number /api/rev',
        value : value,
        reverse: result
    });
}
);


app.use('/api', router);

app.listen(port, () => {
    console.log(`\n\t  app listening at http://localhost:${port} \n`);
    });

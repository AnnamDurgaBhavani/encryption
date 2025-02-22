
const express = require('express');
const route = express.Router();
const {factorial,mul} = require('../math/fact');
const add=require('../math/sum');

route.get('/fruits', (req, res) => {
    res.json({
        fruits: ['🍏apple', '🍌banana', '🍈orange']
    });

});

route.get("/fact", (req, res) => {
    let a= req.query.f;
    let value = parseInt(a);

    let op = factorial(value);

    res.json({
        api: 'factorial of a number /api/fact',
        value : value,
        factorial: op
    });
});

route.get("/sum/:a", (req, res) => {
    let num = req.params.a;
    let value = parseInt(num);
    let result = add(value);
    res.json({
        api: 'sum of a number /api/sum/:a',
        value : value,
        sum: result
    });
}
);

route.get("/cont/:a/:b", (req, res) => {
    let x = req.params.a;
    let y = req.params.b;
    let value1 = parseInt(x);
    let value2 = parseInt(y);
    let result = value1 + value2;
    res.json({
        api: 'sum of two numbers /api/cont/:a/:b',
        value1 : value1,
        value2 : value2,
        sum: result
    });
}
);

route.post("/mul", (req, res) => {
    let a=req.query.x;
    let b=req.query.y;
    let value1 = parseInt(a);
    let value2 = parseInt(b);
    let result = mul(value1,value2);
    res.json({
        api: 'multiplication of two numbers /api/mul?x=5&y=9',
        value1 : value1,
        value2 : value2,
        mul: result
    });
}
);

module.exports = route;
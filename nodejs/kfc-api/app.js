let express = require('express');
let app = express();
let port = 4545;
const bodyParser = require('body-parser');
const cors = require('cors');
let {dbConnect,getData,postData} = require('./controller/dbController')


/// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
 
app.get('/',(req,res) => {
    res.send('Hi from express')
})

/// all location 

app.get('/location',async (req,res) => {
    let query = {}
    if(req.query.stateId){
        query={state_id: Number(req.query.stateId)}
    }
    else{
        query = {}
    }
    let collection = "location"
    let output = await getData(collection,query) 
    res.send(output)
})


/// all menutypes                   

app.get('/menu', async (req,res) => {
    let query = {};
    if(req.query.menuId){
        query={menu_id: Number(req.query.menuId)}
    }
    else{
        query = {}
    }
    let collection = "menu";
    let output = await getData(collection,query);
    res.send(output)
})

/// orders

app.get('/orders', async (req,res) => {
    let query = {};
    if(req.query.email){
        query={email:req.query.email}
    }
    else{
        query = {}
    }
    let collection = "orders";
    let output = await getData(collection,query);
    res.send(output)
})

/// placeOrders

app.post('/placeOrder',async(req,res) => {
    let data = req.body;
    let collection = "orders";
    let response = await postData(collection,data)
    res.send(response)
})


//menu details

app.post('/menuDetails',async(req,res) => {
    if(Array.isArray(req.body.id)){
        let query = {menu_id:{$in:req.body.id}};
        let collection = 'menu';
        let output = await getData(collection,query);
        res.send(output)
    }
    else {
        res.send('Please Pass data  in form of array')
    }
})


app.listen(port,(err) => {
    dbConnect()
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})
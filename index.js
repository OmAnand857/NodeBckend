import express from "express";
import bodyParser from "body-parser";
const port = 3000;
const app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

let memoryArray = []; // can have const db=db.connect(){..blah..blah} using array for now

app.post('/form',(req,res)=>{
    const formData = req.body;
    console.log(formData);
    memoryArray.push(formData);
    res.render('success.ejs',{
        name : formData.name,
        email: formData.email,
        phoneNumber:formData.phoneNumber,
        password:formData.password,
        period : formData.checkbox
    });
})
app.get('/',(req,res)=>{
        res.render('index.ejs');
})

app.listen(port, () => {
    console.log(`Server running at ${port}`)
  })

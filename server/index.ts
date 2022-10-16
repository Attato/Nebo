import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const database = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cinema'
})

app.post('/register', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;   
    const password = req.body.password;

    database.query("INSERT INTO user (username, email, password) VALUES (?, ?, ?)", 
    [username, email, password], 
    (err, result) => {
        console.log(err);
    })
})

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    database.query("SELECT * FROM user WHERE username = ? AND password = ?", 
    [username, password], 
    (err, result) => {
        if (err) {
            res.send({error: err})
        }
        
        if(Array.isArray(result) && result.length > 0) {
            res.send(result)
        } else {
            res.send({message: "* Неправильный логин или пароль"})
        }
    })
})
app.listen(3001, () => {
    console.log("Живём? Живём. 3001");
})
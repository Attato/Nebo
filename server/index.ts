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
    const email = req.body.username;
    const password = req.body.password;

    database.query("SELECT * FROM user WHERE email = ? AND password = ?", 
    [email, password], 
    (err, result) => {
        if (err) {
            res.send({error: err})
        }
        
        if(result) {
            res.send(result)
        } else {
            res.send({message: "Неправильный логин или пароль"})
        }
    })
})
app.listen(3001, () => {
    console.log("Живём? Живём. 3001");
})
const express = require('express');
const app = express();


app.use(express.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.post('/api/books', (req, res, next) => {
    const newBook = req.body; // d'autres truc , base de donné etc ...//
   
    res.status(201).json({
        message: 'Livre créé avec succès !',
        book: newBook 
    });
});

app.get('/api/books', (req, res, next) => {
    const books = [
        {
            _id: 'oeihfzeoi',
            title: 'Mon premier livre',
            description: 'Les informations de mon premier livre',
            imageUrl: 'https://example.com/image1.jpg',
            price: 4900,
            userId: 'qsomihvqios',
        },
        {
            _id: 'oeihfzeomoihi',
            title: 'Mon deuxième livre',
            description: 'Les informations de mon deuxième livre',
            imageUrl: 'https://example.com/image2.jpg',
            price: 2900,
            userId: 'qsomihvqios',
        },
    ];
    res.status(200).json(books);
});

module.exports = app;
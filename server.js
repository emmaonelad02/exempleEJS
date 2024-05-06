const express = require('express');
const app = express();

const PORT = 3000;
const copyright = "Bb Zahra";

// Dire à express de considérer le dossier public comme une dossier contenant des fichiers
app.use('/public', express.static('public'));


// pour dire que les vues seront dans le dossier ./views
app.set('views', './views');


app.get('/', (req, res) =>{
    const title = 'Isep TV Show';
    const films = [
        {
            ID: 1,
            Title:"One piece",
            Year: 2003,
            Author: "DX",

        },

        {
            ID: 2,
            Title:"Two piece",
            Year: 2021,
            Author: "Art",

        },
    ];

    const data = {
        title :title,
        nom:'Bb Zahra',
         copyright: copyright,
         films: films,
        };
    res.render('accueil.ejs', data);
});


/* 
app.get('/', (req, res)=>{
    res.render('accueil.ejs');
});
 */

app.listen(PORT, ()=>{
    console.log("Server is listening on port:" + PORT);
});
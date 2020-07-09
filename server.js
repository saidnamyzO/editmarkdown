const express = require('express');
const articleRouter = require('./routes/articles'); // require articles router
const app = express();

// set view engine to ejs type files (???is this a MIDDLEWARE???)
app.set('view engine', 'ejs');

// set articles routes from articles/
app.use('/articles', articleRouter);

// create route
app.get('/', (req, res) => {
    const sections = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Qué son las funciones flecha, o arrow functions, disponibles en Javascript a partir de la actualización ES6 del lenguaje'
    }, {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Traducción del inglés-Una expresión de función invocada de inmediato es un lenguaje de lenguaje de programación JavaScript que produce un alcance léxico utilizando el alcance de la función de JavaScript'
    }];
    // render index file from views
    res.render('articles/index', { articles: sections });
});

app.listen(5000);

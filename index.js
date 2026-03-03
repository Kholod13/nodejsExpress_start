//Node JS Express - Start

const express = require('express');

const app = express();

app.set('view engine', 'ejs');
//указываем папку в которой будут работать статичиские файлы (стили например)
app.use(express.static('public'));

//__dirname - константа которая указывает на полный путь текущей папки
app.get('/', (req, res) => {
    res.render('index');
})
app.get('/about', (req, res) => {
    res.render('about');
})
//передаем username внутрь шаблона(страницы)
app.get('/user/:username', (req, res) => {
    res.render('user', { username: req.params.username });
})

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Express server on http://localhost:${PORT}`);
});
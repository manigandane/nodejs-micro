const app = require('express')();
const appId = process.env.APPID;

app.get('/', (req, res) => {
    res.send(`app: ${appId} home page`);
});

app.get('/admin', (req, res) => {
    res.send(`app: ${appId} admin page`);
});

app.get('/app1', (req, res) => {
    res.send(`app: ${appId} app1 page`);
});

app.get('/app2', (req, res) => {
    res.send(`app: ${appId} app2 page`);
});

app.listen(appId, () => {
    console.log(`Listening on port ${appId}`);
});
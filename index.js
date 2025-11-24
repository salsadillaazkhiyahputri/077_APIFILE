const experess = require('express');
const connectDatabase = require('./config/db');

const app = experess(); 
const PORT = 3000;

app.use(experess.json());
app.use(experess.urlencoded({ extended: false }));

async function startServer() {
    await connectDatabase();
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

startServer();
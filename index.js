require(dotenv).config()
const server = require('./api/server.js');

const PORT = process.env.PORT || 5000;
server.listen(port, () => console.log(`::: Server Running on Port ${PORT}`));
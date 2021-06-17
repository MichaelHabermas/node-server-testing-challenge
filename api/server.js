require('dotenv').config();
const server = require('./api/server');

const PORT = process.env.PORT || 7000;

server.listen(PORT, () => {
	console.log(`\n*** Server Running on http://localhost:${PORT}***\n`);
});

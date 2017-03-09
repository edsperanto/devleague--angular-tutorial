const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

if(!module.parent) {
	app.listen(PORT, _ => {
		console.log(`Server listening on ${PORT}`);
	});
}

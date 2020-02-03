const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const uri = process.env.uri;
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
console.log("db connected");
client.connect(async err => {
	const collection = client.db("test").collection("users");
	const docs = await client
		.db("test")
		.collection("users")
		.find();

	console.log(docs);

	// perform actions on the collection object
	client.close();
});

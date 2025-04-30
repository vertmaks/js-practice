const badJson = '{"name": "Bob", "age": 25,}';

try {
  console.log(JSON.parse(badJson));
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

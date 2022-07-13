require("./config/database");
const app = require("./app");

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App stated at port ${port}`);
});

module.exports = app;

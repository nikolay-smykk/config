const app = require("express")();

app.get("/", (req, res) =>
  res.json({
    message: "Docker run start 🐳"
  })
);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

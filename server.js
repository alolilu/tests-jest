const express = require("express");
const app = express();

app.get("/login", (req, res) => {
  res.send(`
        <form>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Mot de passe" />
            <button type="submit">Se connecter</button>
        </form>
    `);
});

app.listen(3000, () =>
  console.log("✅ Serveur lancé sur http://localhost:3000")
);

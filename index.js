<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Gagnez 100 $ par mois - Vous êtes au bon endroit !</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #0f172a;
      color: #fff;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 500px;
      margin: auto;
      background: #1e293b;
      padding: 20px;
      border-radius: 10px;
    }
    h1 {
      color: #facc15;
    }
    .info-form {
      margin-top: 20px;
    }
    input {
      padding: 10px;
      width: calc(100% - 20px);
      margin-bottom: 10px;
      border-radius: 5px;
      border: none;
    }
    button {
      padding: 10px;
      width: 100%;
      background-color: #facc15;
      border: none;
      color: #000;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: #eab308;
    }
    footer {
      margin-top: 28px;
      font-size: 12px;
      color: #94a3b8;
      text-align: center;
    }
  </style>
</head>
<body>
<h1>Salut ! Vous avez un compte Money ?</h1>
    <p>Je peux vous aider à gagner jusqu'à <strong>100 par mois</strong> facilement.</p>

    <p>Voici quelques comptes Money populaires que vous pouvez utiliser :</p>
    <ol>
      <li>Compte Money
        <ul>
          <li>Orange Money</li>
          <li>Vodacom Money</li>
          <li>Airtel Money</li>
        </ul>
      </li>
    </ol>

    <div class="info-form">
      <label for="money-account">Entrez votre compte Money :</label>
      <input type="text" id="money-account" name="money-account" placeholder="Ex: 120" />
      <button type="button" onclick="submitAccount()">Envoyer</button>
    </div>

    <p>Pour plus d'informations, envoyez-moi un email à :</p>
    <a href="https://www.facebook.com/profile.php?id=61575712077012" target="_blank">
      <img src="https://i.ibb.co/6HYNqhq/image.jpg" alt="facebook" width="50" />
    </a>

    <footer>
      &#169; 2025 Offre d'argent facile. Tous droits réservés.
    </footer>
  </div>

  <script>
    function submitAccount() {
      const input = document.getElementById('money-account');
      const value = input.value.trim();
      if (!value) {
        alert('Veuillez entrer votre compte Money.');
        input.focus();
        return;
      }alert('Merci ! Votre compte Money est bien reçu : ' + value);
      input.value = '';
    }
  </script>
</body>
</html>

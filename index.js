
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Gagnez 100 $ par mois - Vous êtes au bon endroit !</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #0f172a;
      color: #fff;
      margin: 0;
      padding: 40px 20px;
      display: flex;
      justify-content: center;
      min-height: 100vh;
      align-items: center;
    }
    .container {
      max-width: 480px;
      width: 100%;
      background: #1e293b;
      padding: 30px 25px;
      border-radius: 12px;
      box-shadow: 0 0 15px rgba(250, 204, 21, 0.5);
      box-sizing: border-box;
    }
    h1 {
      color: #facc15;
      margin-bottom: 12px;
      font-size: 1.8rem;
      line-height: 1.2;
    }
    p {
      color: #cbd5e1;
      font-size: 1rem;
      margin: 10px 0 20px;
    }
    strong {
      color: #facc15;
    }
    ol {
      padding-left: 20px;
      margin-bottom: 20px;
    }
    ol li {
      margin-bottom: 8px;
      font-weight: 600;
      color: #e0e7ff;
    }
    ol li ul {
      list-style-type: disc;
      margin-left: 20px;
      margin-top: 5px;
      color: #9ca3af;
      font-weight: normal;
    }
    label {
      display: block;
      margin-bottom: 6px;
      font-weight: 600;
      colo

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Gagnez 100 $ par mois - Vous êtes au bon endroit !</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #0f172a;
      color: #fff;
      margin: 0;
      padding: 40px 20px;
      display: flex;
      justify-content: center;
      min-height: 100vh;
      align-items: center;
    }
    .container {
      max-width: 480px;
      width: 100%;
      background: #1e293b;
      padding: 30px 25px;
      border-radius: 12px;
      box-shadow: 0 0 15px rgba(250, 204, 21, 0.5);
      box-sizing: border-box;
    }
    h1 {
      color: #facc15;
      margin-bottom: 12px;
      font-size: 1.8rem;
      line-height: 1.2;
    }
    p {
      color: #cbd5e1;
      font-size: 1rem;
      margin: 10px 0 20px;
    }
    strong {
      color: #facc15;
    }
    ol {
      padding-left: 20px;
      margin-bottom: 20px;
    }
    ol li {
      margin-bottom: 8px;
      font-weight: 600;
      color: #e0e7ff;
    }
    ol li ul {
      list-style-type: disc;
      margin-left: 20px;
      margin-top: 5px;
      color: #9ca3af;
      font-weight: normal;
    }
    label {
      display: block;
      margin-bottom: 6px;
      font-weight: 600;
      colo
      oney</li>
          <li>Airtel Money</li>
        </ul>
      </li>
    </ol>

    <form id="money-form" aria-describedby="feedback">
      <label for="money-account">Entrez votre compte Money :</label>
      <input
        type="text"
        id="money-account"
        name="money-account"
        placeholder="Ex: +243 834254854"
        aria-required="true"
        autocomplete="tel"
        pattern="^\+?\d{6,14}$"
        title="Veuillez entrer un numéro de téléphone valide, ex: +243834254854"
        />
      <button type="submit">Envoyer</button>
      <div id="feedback" class="feedback" role="alert" aria-live="polite"></div>
    </form>

    <div class="contact">
      <p>Pour plus d'informations, envoyez-moi un email à :</p>
      <a href="https://www.facebook.com/profile.php?id=61575712077012" target="_blank" rel="noopener noreferrer" aria-label="Page Facebook">
        <img src="https://i.ibb.co/6HYNqhq/image.jpg" alt="facebook" />
      </a>
    </div>

    <footer>
      &#169; 2025 Offre d'argent facile. Tous droits réservés.
    </footer>
  </section>

  <script>
    document.getElementById('money-form').addEventListener('submit', function(event) {
      event.preventDefault();
      const input = document.getElementById('money-account');
      const feedback = document.getElementById('feedback');
      const value = input.value.trim();

      // Simple validation : not empty and matches regex (only digits with optional +)
      const phonePattern = /^\+?\d{6,14}$/;
      if (!value) {
        feedback.textContent = 'Veuillez entrer votre compte Money.';
        input.focus();
        return;
      }
      if (!phonePattern.test(value.replace(/\s+/g, ''))) {
        feedback.textContent = 'Format invalide. Ex: +243834254854';
        input.focus();

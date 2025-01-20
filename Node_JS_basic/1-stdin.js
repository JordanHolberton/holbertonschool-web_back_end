// Configure l'encodage de stdin en 'utf8' pour interpréter l'entrée comme une chaîne de caractères
process.stdin.setEncoding('utf8');

// Affiche le message initial demandant le nom de l'utilisateur
console.log('Welcome to Holberton School, what is your name?');

// Écoute les données d'entrée de stdin
process.stdin.on('data', (data) => {
  // Supprime les espaces blancs en début et fin de chaîne
  const input = data.toString().trim();

  // Affiche le nom de l'utilisateur
  console.log(`Your name is: ${input}`);

  // Affiche le message de fermeture
  console.log('This important software is now closing');

  // Termine le processus
  process.exit();
});

// Écoute l'événement 'end' pour gérer le message de fermeture lorsque l'entrée se termine
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

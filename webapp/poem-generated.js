const poems = [
    "Poetry does not want followers, it wants lovers. 'Federico Garcia Loeca'",
    "It is typical of those with narrow minds to attack everything that does not fit in their head. 'Antonio Machado'",
    "The book is strength, it is value, it is power, it is food, a torch of thought and a spring of love. 'Rúben Dario",
    "It takes courage to grow up and become who you really are. 'E.E. Cummings'",
    "There is no more unhappy man than the one for whom indecision has become a habit. 'Henrich Heine'",
    "A slave is one who waits for someone to come and set him free. 'Ezra Pound'",
    "When our ideas collide with reality, what has to be reviewed are the ideas. 'Jorge Luis Borges'",
    "Hello? I'm Mom Universe. Yes, the kids are playing swords. Sorry, playing with swords. They're bleeding. Oh no! They're dead. Don't call back. Sorry, I panicked. 'Garnet' ",
    "La poesía no quiere adeptos, quiere amantes. 'Federico Garcia Loeca'",
    "Es propio de aquellos con mentes estrechas embestir contra todo aquello que no les cabe en la cabeza. 'Antonio Machado'",
    "El libro es fuerza, es valor, es poder, es alimento, antorcha del pensamiento y manantial del amor. 'Rúben Dario",
    "Requiere coraje crecer y convertirte en lo que realmente eres. 'E.E. Cummings'",
    "No hay hombre más infeliz que aquel para quien la indecisión se ha hecho costumbre. 'Henrich Heine'",
  ];
  
  const randomPoem = () => {
    const poem = poems[Math.floor(Math.random() * poems.length)];

    return poem;
    //console.log(poem);
  };
  
  module.exports = randomPoem;
  
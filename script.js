class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo.toLowerCase()) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'um ataque desconhecido';
    }
    return `O ${this.tipo} atacou usando ${ataque}`;
  }
}

document.getElementById('formHeroi').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const idade = parseInt(document.getElementById('idade').value);
  const tipo = document.getElementById('tipo').value;

  const heroi = new Heroi(nome, idade, tipo);
  document.getElementById('resultado').textContent = heroi.atacar();
});

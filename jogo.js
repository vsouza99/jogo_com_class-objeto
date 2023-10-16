class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      console.log(`o ${this.tipo} atacou usando ${this.ataqueTipo()}`);
    }
  
    ataqueTipo() {
      switch (this.tipo) {
        case "mago":
          return "magia";
        case "guerreiro":
          return "espada";
        case "monge":
          return "artes marciais";
        default:
          return "shuriken";
      }
    }
  }
  
  const guerreiro = new Heroi("Gandalf", 1000, "guerreiro");
  const mago = new Heroi("Merlin", 500, "mago");
  const monge = new Heroi("Bruce Lee", 40, "monge");
  const ninja = new Heroi("Ronin", 25, "ninja");
  
  guerreiro.atacar();
  mago.atacar();
  monge.atacar();
  ninja.atacar();
  
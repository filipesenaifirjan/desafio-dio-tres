class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch(this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'atacou';
      }
  
      return `O ${this.tipo} atacou usando ${ataque}`;
    }
  }
  
  function atacar() {
    const form = document.getElementById('hero-form');
    const nome = form.nome.value;
    const idade = form.idade.value;
    const tipo = form.tipo.value;
    
    const heroi = new Hero(nome, idade, tipo);
    const mensagem = heroi.atacar();
    exibirModal(mensagem);
  }
  
  function exibirModal(mensagem) {
    const modal = document.getElementById('modal');
    const mensagemElement = document.getElementById('mensagem');
    mensagemElement.textContent = mensagem;
    modal.style.display = 'block';
  }
  
  function fecharModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  
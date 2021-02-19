module.exports = class Tarefa {
  constructor(titulo, descricao, status, datacriacao) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.status = status;
    this.datacriacao = datacriacao;
  }
};
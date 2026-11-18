export const ACOES_TAREFA = {
  ADICIONAR_TAREFA: 'ADICIONAR_TAREFA',
  ALTERNAR_TAREFA: 'ALTERNAR_TAREFA',
  EXCLUIR_TAREFA: 'EXCLUIR_TAREFA',
};

export function tarefasReducer(estado, acao) {
  switch (acao.tipo) {
    case ACOES_TAREFA.ADICIONAR_TAREFA: {
      const tituloFormatado = acao.dados.trim();
      if (!tituloFormatado) return estado;

      const novaTarefa = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        titulo: tituloFormatado,
        concluida: false,
      };

      return [novaTarefa, ...estado];
    }

    case ACOES_TAREFA.ALTERNAR_TAREFA:
      return estado.map((tarefa) =>
        tarefa.id === acao.dados
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      );

    case ACOES_TAREFA.EXCLUIR_TAREFA:
      return estado.filter((tarefa) => tarefa.id !== acao.dados);

    default:
      return estado;
  }
}
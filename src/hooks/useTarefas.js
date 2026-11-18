import { useReducer, useCallback, useMemo } from 'react';
import { tarefasReducer, ACOES_TAREFA } from '../reducers/tarefasReducer';

const TAREFAS_INICIAIS = [
  { id: '1', titulo: 'Organizar estrutura de pastas no Expo', concluida: true },
  { id: '2', titulo: 'Otimizar lista com React.memo e useCallback', concluida: false },
];

export function useTarefas() {
  const [tarefas, despachar] = useReducer(tarefasReducer, TAREFAS_INICIAIS);

  const adicionarTarefa = useCallback((titulo) => {
    despachar({ tipo: ACOES_TAREFA.ADICIONAR_TAREFA, dados: titulo });
  }, []);

  const alternarTarefa = useCallback((id) => {
    despachar({ tipo: ACOES_TAREFA.ALTERNAR_TAREFA, dados: id });
  }, []);

  const excluirTarefa = useCallback((id) => {
    despachar({ tipo: ACOES_TAREFA.EXCLUIR_TAREFA, dados: id });
  }, []);

  const estatisticas = useMemo(() => {
    const total = tarefas.length;
    const concluidas = tarefas.filter((tarefa) => tarefa.concluida).length;

    return {
      total,
      concluidas,
      pendentes: total - concluidas,
    };
  }, [tarefas]);

  return {
    tarefas,
    estatisticas,
    adicionarTarefa,
    alternarTarefa,
    excluirTarefa,
  };
}
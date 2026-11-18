import { useCallback } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { ItemTarefa } from './ItemTarefa';

export function ListaTarefas({ tarefas, aoAlternarTarefa, aoExcluirTarefa }) {
  const renderizarItem = useCallback(
    ({ item }) => (
      <ItemTarefa
        tarefa={item}
        aoAlternar={aoAlternarTarefa}
        aoExcluir={aoExcluirTarefa}
      />
    ),
    [aoAlternarTarefa, aoExcluirTarefa]
  );

  const extrairChave = useCallback((item) => item.id, []);

  return (
    <FlatList
      data={tarefas}
      renderItem={renderizarItem}
      keyExtractor={extrairChave}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={estilos.conteudoLista}
      ListEmptyComponent={
        <Text style={estilos.textoVazio}>Nenhuma tarefa cadastrada.</Text>
      }
    />
  );
}

const estilos = StyleSheet.create({
  conteudoLista: {
    paddingBottom: 24,
  },
  textoVazio: {
    textAlign: 'center',
    color: '#94A3B8',
    marginTop: 32,
    fontSize: 15,
  },
});
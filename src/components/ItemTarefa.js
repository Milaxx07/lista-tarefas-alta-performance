import { memo } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';

function ItemTarefaComponente({ tarefa, aoAlternar, aoExcluir }) {
  return (
    <View style={[estilos.cartao, tarefa.concluida && estilos.cartaoConcluido]}>
      <Pressable
        style={estilos.areaConclusao}
        onPress={() => aoAlternar(tarefa.id)}
      >
        <View
          style={[
            estilos.caixaSelecao,
            tarefa.concluida && estilos.caixaSelecionada,
          ]}
        >
          {tarefa.concluida && <Text style={estilos.simboloCheck}>✓</Text>}
        </View>

        <Text
          style={[estilos.titulo, tarefa.concluida && estilos.tituloConcluido]}
        >
          {tarefa.titulo}
        </Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          estilos.botaoExcluir,
          pressed && estilos.botaoExcluirPressionado,
        ]}
        onPress={() => aoExcluir(tarefa.id)}
        hitSlop={8}
        accessibilityLabel={`Excluir tarefa ${tarefa.titulo}`}
      >
        <Text style={estilos.textoExcluir}>✕</Text>
      </Pressable>
    </View>
  );
}

export const ItemTarefa = memo(ItemTarefaComponente);

const estilos = StyleSheet.create({
  cartao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 10,
    gap: 10,
  },
  cartaoConcluido: {
    backgroundColor: '#F8FAFC',
  },
  areaConclusao: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  caixaSelecao: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  caixaSelecionada: {
    backgroundColor: '#2563EB',
  },
  simboloCheck: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },
  titulo: {
    flex: 1,
    fontSize: 15,
    color: '#1E293B',
  },
  tituloConcluido: {
    textDecorationLine: 'line-through',
    color: '#94A3B8',
  },
  botaoExcluir: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoExcluirPressionado: {
    backgroundColor: '#FECACA',
  },
  textoExcluir: {
    color: '#DC2626',
    fontSize: 13,
    fontWeight: '700',
  },
});
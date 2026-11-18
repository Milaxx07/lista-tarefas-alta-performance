import { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function EstatisticasTarefasComponente({ estatisticas }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.textoEstatistica}>
        Total: <Text style={estilos.textoNegrito}>{estatisticas.total}</Text>
      </Text>
      <Text style={estilos.textoEstatistica}>
        Concluídas:{' '}
        <Text style={estilos.textoNegrito}>{estatisticas.concluidas}</Text>
      </Text>
      <Text style={estilos.textoEstatistica}>
        Pendentes:{' '}
        <Text style={estilos.textoNegrito}>{estatisticas.pendentes}</Text>
      </Text>
    </View>
  );
}

export const EstatisticasTarefas = memo(EstatisticasTarefasComponente);

const estilos = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E2E8F0',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginBottom: 16,
  },
  textoEstatistica: {
    fontSize: 13,
    color: '#475569',
  },
  textoNegrito: {
    fontWeight: '700',
    color: '#0F172A',
  },
});
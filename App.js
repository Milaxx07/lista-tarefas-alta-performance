import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { useTarefas } from './src/hooks/useTarefas';
import { FormularioTarefa } from './src/components/FormularioTarefa';
import { EstatisticasTarefas } from './src/components/EstatisticasTarefas';
import { ListaTarefas } from './src/components/ListaTarefas';

export default function App() {
  const {
    tarefas,
    estatisticas,
    adicionarTarefa,
    alternarTarefa,
    excluirTarefa,
  } = useTarefas();

  return (
    <SafeAreaView style={estilos.areaSegura}>
      <StatusBar barStyle="dark-content" backgroundColor="#F1F5F9" />
      <View style={estilos.container}>
        <View style={estilos.cabecalho}>
          <Text style={estilos.titulo}>Minhas Tarefas</Text>
          <Text style={estilos.subtitulo}>
            Melhores Práticas e Alta Performance
          </Text>
        </View>

        <FormularioTarefa aoAdicionarTarefa={adicionarTarefa} />
        <EstatisticasTarefas estatisticas={estatisticas} />
        <ListaTarefas
          tarefas={tarefas}
          aoAlternarTarefa={alternarTarefa}
          aoExcluirTarefa={excluirTarefa}
        />
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  cabecalho: {
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F172A',
  },
  subtitulo: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 2,
  },
});
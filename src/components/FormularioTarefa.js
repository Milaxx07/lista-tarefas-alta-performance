import { useState, memo } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';

function FormularioTarefaComponente({ aoAdicionarTarefa }) {
  const [titulo, setTitulo] = useState('');

  const lidarComEnvio = () => {
    if (!titulo.trim()) return;
    aoAdicionarTarefa(titulo);
    setTitulo('');
  };

  return (
    <View style={estilos.container}>
      <TextInput
        style={estilos.campoTexto}
        placeholder="Digite uma nova tarefa..."
        placeholderTextColor="#94A3B8"
        value={titulo}
        onChangeText={setTitulo}
        onSubmitEditing={lidarComEnvio}
        returnKeyType="done"
      />
      <Pressable
        style={({ pressed }) => [
          estilos.botao,
          pressed && estilos.botaoPressionado,
        ]}
        onPress={lidarComEnvio}
      >
        <Text style={estilos.textoBotao}>Adicionar</Text>
      </Pressable>
    </View>
  );
}

export const FormularioTarefa = memo(FormularioTarefaComponente);

const estilos = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  campoTexto: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#1E293B',
  },
  botao: {
    backgroundColor: '#2563EB',
    borderRadius: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoPressionado: {
    backgroundColor: '#1D4ED8',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
  },
});
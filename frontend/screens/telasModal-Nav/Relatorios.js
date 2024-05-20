import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { styles } from '../../styles/telasNav/relatoriosStyles';
import Navbar from '../../components/NavbarPrincipal';
import Menu from '../../components/Menu';

export default function Relatorios() {
    const [metricaSelecionada, setMetricaSelecionada] = useState('ROI');
    const [filtroSelecionado, setFiltroSelecionado] = useState('Último Mês');
    const [nomeRelatorio, setNomeRelatorio] = useState('');
    const [modalVisivel, setModalVisivel] = useState(false);
    const [relatoriosGerados, setRelatoriosGerados] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        carregarRelatorios();
    }, []);

    const carregarRelatorios = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://048ed71d-0b9a-4df7-a77e-690e34981c6b-00-rcgu688ubyui.janeway.repl.co/relatorios');
            setRelatoriosGerados(response.data);
            setError(null);
        } catch (error) {
            console.error('Erro ao carregar relatórios:', error);
            setError('Erro ao carregar relatórios.');
        } finally {
            setLoading(false);
        }
    };

    const gerarRelatorio = async () => {
        const novoRelatorio = {
            nome: nomeRelatorio,
            metrica: metricaSelecionada,
            filtro: filtroSelecionado,
            desempenho: '85%',
            roi: '$1500'
        };

        try {
            setLoading(true);
            const response = await axios.post('https://048ed71d-0b9a-4df7-a77e-690e34981c6b-00-rcgu688ubyui.janeway.repl.co/gerar-relatorio', novoRelatorio);
            setRelatoriosGerados([...relatoriosGerados, response.data]);
            setNomeRelatorio('');
            setMetricaSelecionada('ROI');
            setFiltroSelecionado('Último Mês');
            setError(null);
            alert('Relatório gerado com sucesso!');
        } catch (error) {
            console.error('Erro ao gerar relatório:', error);
            setError('Erro ao gerar relatório.');
        } finally {
            setLoading(false);
        }
    };

    const alternarModal = () => {
        setModalVisivel(!modalVisivel);
    };

    return (
        <View style={{ flex: 1 }}>
            <Navbar logoSource={require('../../assets/logos/Logo-ConversaoInteligente.png')} />
            <View style={styles.container}>
                <Text style={styles.title}>Relatórios Personalizados</Text>
                <Text style={styles.subtitle}>
                    Gere e visualize relatórios personalizados sobre o desempenho das suas campanhas de marketing.
                </Text>

                <Text style={styles.sectionTitle}>Selecione as Métricas</Text>
                <Picker
                    selectedValue={metricaSelecionada}
                    style={styles.picker}
                    onValueChange={(itemValue) => setMetricaSelecionada(itemValue)}
                >
                    <Picker.Item label="ROI" value="ROI" />
                    <Picker.Item label="Desempenho" value="Performance" />
                    <Picker.Item label="Custo por Aquisição" value="CPA" />
                    <Picker.Item label="Conversão" value="Conversion" />
                </Picker>

                <Text style={styles.sectionTitle}>Aplicar Filtros</Text>
                <Picker
                    selectedValue={filtroSelecionado}
                    style={styles.picker}
                    onValueChange={(itemValue) => setFiltroSelecionado(itemValue)}
                >
                    <Picker.Item label="Última Semana" value="Last Week" />
                    <Picker.Item label="Último Mês" value="Last Month" />
                    <Picker.Item label="Último Trimestre" value="Last Quarter" />
                    <Picker.Item label="Último Ano" value="Last Year" />
                </Picker>

                <Text style={styles.sectionTitle}>Nome do Relatório</Text>
                <TextInput
                    label="Nome do Relatório"
                    value={nomeRelatorio}
                    onChangeText={text => setNomeRelatorio(text)}
                    style={styles.input}
                />

                <Button mode="contained" onPress={gerarRelatorio} style={styles.button} disabled={loading}>
                    {loading ? 'Gerando...' : 'Gerar Relatório'}
                </Button>

                {error && <Text style={styles.errorText}>{error}</Text>}

                <TouchableOpacity onPress={alternarModal} style={styles.modalButton}>
                    <Text style={styles.modalButtonText}>Visualizar Relatórios Gerados</Text>
                </TouchableOpacity>

                <Modal visible={modalVisivel} animationType="slide">
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Relatórios Gerados</Text>
                        {relatoriosGerados.length === 0 ? (
                            <Text style={styles.emptyMessage}>Nenhum relatório gerado.</Text>
                        ) : (
                            relatoriosGerados.map((relatorio, index) => (
                                <View key={index} style={styles.report}>
                                    <Text style={styles.reportText}>Nome: {relatorio.nome}</Text>
                                    <Text style={styles.reportText}>Métrica: {relatorio.metrica}</Text>
                                    <Text style={styles.reportText}>Filtro: {relatorio.filtro}</Text>
                                    <Text style={styles.reportText}>Desempenho: {relatorio.desempenho}</Text>
                                    <Text style={styles.reportText}>ROI: {relatorio.roi}</Text>
                                </View>
                            ))
                        )}
                        <Button onPress={alternarModal} mode="contained" style={styles.modalCloseButton}>
                            Fechar
                        </Button>
                    </View>
                </Modal>
            </View>
            <Menu />
        </View>
    );
}

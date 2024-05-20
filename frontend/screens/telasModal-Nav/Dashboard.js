import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import { DataTable } from 'react-native-paper';
import Navbar from '../../components/NavbarPrincipal';
import Menu from '../../components/Menu';
import { styles } from '../../styles/telasNav/dashboardStyles';

export default function Dashboard () {
    return(
        <View style={{ flex: 1 }}>
            <Navbar logoSource={require('../../assets/logos/Logo-ConversaoInteligente.png')} />
                        <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.title}>Dashboard</Text>
                    <Text style={styles.subtitle}>Visualize e Analise os  dados coletados {'\n'} pela plataforma</Text>
                    
                    <Text style={styles.chartTitle}>Desempenho das Campanhas</Text>
                    <LineChart
                    data={{
                        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
                        datasets: [
                        {
                            data: [20, 45, 28, 80, 99, 43],
                        },
                        ],
                    }}
                    width={styles.chart.width}
                    height={styles.chart.height}
                    yAxisLabel="$"
                    chartConfig={{
                        backgroundColor: "blue",
                        backgroundGradientFrom: "blue",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                        borderRadius: 16,
                        },
                        propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726",
                        },
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                    />

                    <Text style={styles.chartTitle}>ROI das Campanhas</Text>
                    <BarChart
                    data={{
                        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
                        datasets: [
                        {
                            data: [30, 50, 40, 95, 85, 55],
                        },
                        ],
                    }}
                    width={styles.chart.width}
                    height={styles.chart.height}
                    yAxisLabel="$"
                    chartConfig={{
                        backgroundColor: "blue",
                        backgroundGradientFrom: "#ffa726",
                        backgroundGradientTo: "blue",
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                        borderRadius: 16,
                        },
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                    />

                    <Text style={styles.chartTitle}>Distribuição de Clientes</Text>
                    <PieChart
                    data={[
                        {
                        name: "Cliente A",
                        population: 21500000,
                        color: "#f00",
                        legendFontColor: "white",
                        legendFontSize: 15,
                        },
                        {
                        name: "Cliente B",
                        population: 2800000,
                        color: "#0f0",
                        legendFontColor: "white",
                        legendFontSize: 15,
                        },
                        {
                        name: "Cliente C",
                        population: 527612,
                        color: "#00f",
                        legendFontColor: "white",
                        legendFontSize: 15,
                        },
                        {
                        name: "Cliente D",
                        population: 8538000,
                        color: "#ff0",
                        legendFontColor: "white",
                        legendFontSize: 15,
                        },
                    ]}
                    width={styles.chart.width}
                    height={220}
                    chartConfig={{
                        backgroundColor: "#ffffff",
                        backgroundGradientFrom: "#ffffff",
                        backgroundGradientTo: "#ffffff",
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    }}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="2"
                    absolute
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                    />

<Text style={styles.tableTitle}>Dados Recentes</Text>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title><Text style={styles.headerText}>Campanha</Text></DataTable.Title>
            <DataTable.Title><Text style={styles.headerText}>Data</Text></DataTable.Title>
            <DataTable.Title numeric><Text style={styles.headerText}>ROI</Text></DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell><Text style={styles.cellText}>Campanha A</Text></DataTable.Cell>
            <DataTable.Cell><Text style={styles.cellText}>01/05/2024</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={styles.cellText}>$1200</Text></DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell><Text style={styles.cellText}>Campanha B</Text></DataTable.Cell>
            <DataTable.Cell><Text style={styles.cellText}>02/05/2024</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={styles.cellText}>$1300</Text></DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell><Text style={styles.cellText}>Campanha C</Text></DataTable.Cell>
            <DataTable.Cell><Text style={styles.cellText}>03/05/2024</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={styles.cellText}>$1400</Text></DataTable.Cell>
          </DataTable.Row>
        </DataTable>

        <View style={styles.filterSection}>
          <Text style={styles.filterTitle}>Filtragem e Segmentação</Text>
        </View>
      </ScrollView>
    </View>
            <Menu/>
        </View>
    );
};
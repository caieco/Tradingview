import ApexCharts from "react-apexcharts";

export default function chart(props) {

    const options = {
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
                enabled: false // Desabilitar o tooltip temporariamente
            }
        }
    };

    const series = [{
        data: props.data
    }];

    return (
        <ApexCharts
            options={options}
            series={series}
            type="candlestick"
            width={1440}
            height={680} />
    );
}


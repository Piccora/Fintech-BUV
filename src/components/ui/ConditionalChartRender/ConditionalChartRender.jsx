import Chart from "react-google-charts"

export function ConditionalChartRender(data) {
    return <Chart chartType={data.data.chartType} width="auto" height="auto" data={data.data.data} options={data.data.options} />
}
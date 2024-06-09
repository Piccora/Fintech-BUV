import Chart from "react-google-charts"

export function ConditionalChartRender(data) {
    console.log(data)
    return <Chart chartType={data.data.chartType} width="80%" height="500" data={data.data.data} options={data.data.options} />
}
import Chart from "react-google-charts"

export function ConditionalChartRender(data) {
    return data.data.data.length != 0 ? <Chart chartType={data.data.chartType} width="auto" height="auto" data={data.data.data} options={data.data.options} /> : <></>
}
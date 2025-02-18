import { useEffect, useRef } from "react"
import * as echarts from "echarts";
const Polyline = () => {
  const chartRef = useRef(null)

  useEffect(() => {
    let chartInstance = echarts.init(chartRef.current);
    const option = {
      title: {
        text: '文章浏览量排行榜'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        top: '5%',
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'Search Engine',
          type: 'line',
          stack: 'Total',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };

    chartInstance.setOption(option);
  }, [])
  return <div style={{ textAlign: "center", width: '100%' }} className="px-2">

    <div ref={chartRef} style={{ height: "400px", width: '40vw', justifyContent: 'center' }}></div>
  </div>

}
export default Polyline
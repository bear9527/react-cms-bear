
import DemoColumn from "./DemoColumn"
import ChartWaterFull from "./ChartWaterFull"
const Home = () => {

    return <div className="mt-4 w-full w-1/1">
        <h1 className="text-3xl font-bold underline">
            欢迎光临小而美的内容管理平台！
        </h1>
            <div
                className='flex'
            >
                <div className="w-1/2">

                    <ChartWaterFull />
                </div>
                <div className="w-1/2">
                    <DemoColumn className="w-1/2" />
                </div>
            </div>
    </div>
}


export default Home
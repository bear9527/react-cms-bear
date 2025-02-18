
import DemoColumn from "./DemoColumn"
import ChartWaterFull from "./ChartWaterFull"
const Home = () => {

    return <div className="mt-4">
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
            <div
                className='flex w-full'
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
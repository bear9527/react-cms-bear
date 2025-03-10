
import DemoColumn from "./DemoColumn"
import ChartWaterFull from "./ChartWaterFull"
import HomeWebSocket from "./say"
import { useState } from "react";
import { Button, Modal } from 'antd';
const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);
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

        <Button color="pink" variant="outlined"
            onClick={() => setModalOpen(true)}>
            聊天室
        </Button>

        <Modal
            title="WebSocket 聊天室："
            centered
            open={modalOpen}
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
        >
            <HomeWebSocket></HomeWebSocket>
        </Modal>
    </div>
}


export default Home
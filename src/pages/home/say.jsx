

import { useState } from "react";
import { Button, Modal, Input } from 'antd';
const HomeWebSocket = () => {
    const [message, setMessage] = useState('welcome');
    var socket
    if (!window.WebSocket) {
        window.WebSocket = window.MozWebSocket
    }
    if (window.WebSocket) {
        socket = new WebSocket("ws://localhost:8888/ws")
        socket.onmessage = function (event) {
            var ta = document.getElementById('responseTest')
            ta.innerText = ta.innerText + '\n' + event.data
        }
        socket.onopen = function (event) {
            var ta = document.getElementById('responseTest')
            ta.innerText = '连接开启!'
        }
        socket.onclose = function (event) {
            var ta = document.getElementById('responseTest')
            ta.innerText = '连接关闭!'
        }
    } else {
        alert('你的浏览器不支持WebSocket')
    }
    function send(message) {
        console.log('send khd', message);
        if (!window.WebSocket) {
            return
        }
        if (socket.readyState === WebSocket.OPEN) {
            const msg = document.querySelector("#srk").value
            console.log('srk msg', msg);
            socket.send(msg)
        } else {
            console.log('连接没有开启')
        }
    }
    return <div>
        <div>
            {/* <h3>WebSocket 聊天室：</h3> */}
            {/* <textarea id="responseTest" className="w-300px"></textarea> */}
            {/* <Input id="responseTest" type="text" className="w-300px h-500px" /> */}
            <div id="responseTest"  className="w-300 mh-10 bg-gray-600 text-white" >
                
            </div>
            <br />
            <Input type="text" className="w-300px" id="srk" />
            <Button onClick={() => send(message)}>发送消息</Button>
            {/* <input type="button" value="清空聊天记录" onclick="javascript:document.getElementById('responseTest').value=''" /> */}
        </div>

    </div>
}


export default HomeWebSocket
import { Table, Space, Button } from "antd";
import { AntDesignOutlined } from '@ant-design/icons';
import { useState, useEffect } from "react";
import { getMenus } from "@/api/menu";
const data = [
    {
        id: '1',
        key: '1',
        name: '我是一个文章',
        description: 'New York No. 1 Lake Park',
        creator: 'bear',
        createDate: '2020-1-1',
    },
    {
        id: '2',
        key: '2',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London No. 1 Lake Park',
    },
    {
        id: '3',
        key: '3',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sydney No. 1 Lake Park',
    },
];
const Contents = () => {
    const [dataList, setDataList] = useState(data)
    const columns = [
        {
            title: '标题',
            dataIndex: 'title',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'description',
            className: 'column-money',
            dataIndex: 'description',
            align: 'right',
        },
        {
            title: '操作',
            dataIndex: 'id',
            render: (id) => <div>
                <a href={'/menuDetail/' + id}>编辑</a> | <a-button type="link" onClick={() => handlerDelete(id)}>删除</a-button>
            </div>,
        },
    ];
    const handlerDelete = (id) => {
        console.log('setDataList', id);
        setDataList(dataList.filter(item => item.id != id))
    }



    useEffect(() => {

        getMenus().then((res) => {
            console.log('getMenus', res);

            setDataList(res.data)
        });
    }, [])


    return <>
        <Space className="mb-4">
            <Button type="primary" size="large" icon={<AntDesignOutlined />}
            >
                <a href={'/editMenuDetail'}>???</a>
                
            </Button>
            <Button size="large">Button</Button>
        </Space>
        <Table
            columns={columns}
            dataSource={dataList}
            rowKey={(record)=> record.id}
            bordered
        />
    </>
}


export default Contents
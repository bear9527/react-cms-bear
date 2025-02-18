import { Table } from "antd";
import { useState } from "react";
const data = [
    {
        id: '1',
        key: '1',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
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
const User = () => {
    const [dataList, setDataList] = useState(data)
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Cash Assets',
            className: 'column-money',
            dataIndex: 'money',
            align: 'right',
        },
        {
            title: '操作',
            dataIndex: 'id',
            render: (id) => <div>
                <a href={'/userDetail/' + id}>编辑</a> | <a-button type="link" onClick={()=>handlerDelete(id)}>删除</a-button>
            </div>,
        },
    ];
    const handlerDelete = (id) => {
        console.log('setDataList', id);
        setDataList(dataList.filter(item=>item.id != id))
    }
    return <>

        <Table
            columns={columns}
            dataSource={dataList}
            bordered
        />
    </>
}


export default User
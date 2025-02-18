import { Table, Select } from "antd";
import { useState, useEffect } from "react";
// import { getUserInfo } from "../api/user";
// import { getCateList } from "../api/articles";
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
const Articles = () => {
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
                <a href={'/articleDetail/' + id}>编辑</a> | <a-button type="link" onClick={()=>handlerDelete(id)}>删除</a-button>
            </div>,
        },
    ];
    const handlerDelete = (id) => {
        console.log('setDataList', id);
        setDataList(dataList.filter(item=>item.id != id))
    }


    const currentCate = "Yiminghe";
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
    const cateOptions = [
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
    ]
    

    useEffect(()=>{
  
        // getCateList().then((res)=>{
        //   console.log('getCateList', res);
        // //   dispatch(setMyInfo(res))
        // });
      }, [])


    return <>
         <Select
            defaultValue={currentCate}
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
                ...cateOptions
            ]}
        />
        <Table
            columns={columns}
            dataSource={dataList}
            bordered
        />
    </>
}


export default Articles
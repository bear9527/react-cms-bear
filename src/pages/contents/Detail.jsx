import {
    Form,
    Input, Button, message
} from "antd";
import Editor from "@/components/Editor";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { editMenu, getMenuInfo } from "@/api/menu"
const EditMenuDetail = () => {
    const params = useParams();
    const [content, setContent] = useState('');
    const [form] = Form.useForm();
    // const init = useCallback(()=>{

    //     console.log('params',params);
    //     if(params.id){

    //     }
    // }, [params.id])
    // init();
    const getMenuInfoFn = async (id) =>{
        const {data} = await getMenuInfo({id: id});
        console.log('getMenuInfoFn res', data);
        form.setFieldsValue({ title: data.title, description: data.description, id: id });
    }
    useEffect(() => {

        console.log('params', params);
        if (params.id) {
            getMenuInfoFn(params.id)
        }
    }, [params.id])
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 16 },
    };
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    const onFinish = async (values) => {
        const params = { ...values.menu  }
        console.log('onFinish',params);
        const res = await editMenu(params);
        console.log('res', res.status);
        if (res.status == 0) {
            
            message.info(res.message);
            window.location.href = "/menu"
        }
    };
    const contentChange = (value) => {
        console.log('contentChange', value);
        setContent(value)
    };


    return <>
        <div style={{ display: 'flex', width: '100%' }}>
            <Form
                {...layout}
                name="nest-messages"
                form={form}
                onFinish={onFinish}
                style={{ margin: 'auto' }}
                validateMessages={validateMessages}
            >
                <Form.Item name="title" label="title" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                {/* <Form.Item name={['menu', 'description']} label="Description" rules={[{  }]}>
                    <Input />
                </Form.Item> */}
                <Form.Item name="description" label="Description">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name="img" label="img">
                    <Input />
                </Form.Item>
                {/* <Form.Item  name={['menu', 'content']} label={null}>
                    <Editor content={content} onChange={contentChange}></Editor>
                </Form.Item> */}
                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </>
}


export default EditMenuDetail
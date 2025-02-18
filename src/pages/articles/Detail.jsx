import { Form,
    Input, Button
} from "antd";
import Editor from "@/components/Editor";
const ArticleDetail = () => {


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

    const onFinish = (values) => {
        console.log(values);
    };


    return <>
        <div style={{ display: 'flex', width: '100%' }}>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{  margin: 'auto' }}
                validateMessages={validateMessages}
            >
                <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'website']} label="Website">
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Introduction">
                    <Input.TextArea />
                </Form.Item>

                <Form.Item label={null}>
                    <Editor></Editor>
                </Form.Item>
                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </>
}


export default ArticleDetail
// import { Link, useSearchParams } from "react-router-dom";
import { login, ILoginInfo, regUser } from "../api/user";
import { Button, Form, Input, Tabs, Image, Col, Divider, Row } from "antd";
import { setToken } from "../utils/auth";
import { setToken as setStoreToken } from "../store/modules/userStore";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import bgLeft from '../static/img/bg-left.png'; // 引入图片
const { TabPane } = Tabs;

const Login = () => {
  const dispatch = useDispatch();
  const navgate = useNavigate();
  // const [params] = useSearchParams();
  // const id = params.get("id");

  const onFinish = (values: ILoginInfo) => {
    console.log("Success:", values);
    reqLogin(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const reqLogin = async (values: ILoginInfo) => {
    try {
      const resLogin = await login(values);
      if (!resLogin.status) {
        console.log("login", resLogin);
        setToken(resLogin.data);
        dispatch(setStoreToken(resLogin.data));

        navgate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const reqReg = async (values: any) => {
    console.log('params', values);
    const _value = {
      username: 'bear9527',
      password: '123456',
      email: '123456@qq.com',
    }
    try {
      const resLogin = await regUser(_value as any);
      if (!resLogin.status) {
        console.log("reg", resLogin);
        setToken(resLogin.data);
        dispatch(setStoreToken(resLogin.data));

        navgate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex " >
      <div className="left-bg  flex-2" >
        <Image
          width={498}
          src={bgLeft}
          preview={false}
        />
      </div>
      <div className="right-bg flex-1 " >
        <Row>
          <Col offset={8} className="relative">
            <div className="login-wrap w-[350px] absolute top-80 shadow-2xl rounded-md font-serif font-bold" >
              <Tabs defaultActiveKey="1">
                {/* 登录 */}
                <TabPane tab="用户注册" key="1">
                  <Form
                    name="basic"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="用户名"
                      name="username"
                      rules={[{ required: true }]}
                    >
                      <Input className="space-x-1" type="text" placeholder="请输入用户名" />
                    </Form.Item>

                    <Form.Item
                      label="密 &nbsp;  &nbsp;码"
                      name="password"
                      rules={[{ required: true, message: "Please input your password!" }]}
                    >
                      <Input type="password" placeholder="请输入密码" />
                    </Form.Item>

                    {/* <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                      <Button type="primary" htmlType="submit">
                        submit
                      </Button>
                    </Form.Item>
                  </Form>
                </TabPane>
                {/* 注册 */}
                <TabPane tab="用户登录" key="2">
                  <Form
                    name="basic"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="用户名"
                      name="username"
                      rules={[{ required: true }]}
                    >
                      <Input className="space-x-1" type="text" placeholder="请输入用户名" />
                    </Form.Item>

                    <Form.Item
                      label="密 &nbsp;  &nbsp;码"
                      name="password"
                      rules={[{ required: true, message: "Please input your password!" }]}
                    >
                      <Input type="password" placeholder="请输入密码" />
                    </Form.Item>

                    {/* <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                      <Button type="primary" onClick={reqReg}>
                        submit
                      </Button>
                    </Form.Item>
                  </Form>
                </TabPane>
              </Tabs>
            </div>
          </Col>
        </Row>
      </div>
    </div >

  );
};
export default Login;
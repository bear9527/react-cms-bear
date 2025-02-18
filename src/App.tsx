
// import "./App.css";
import { Suspense } from "react";
import { Link, useRoutes } from "react-router-dom";
import routers from "./routers";
function App() {
  // 使用 useRoutes 获取路由组件
  const element = useRoutes(routers);
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>{element}</Suspense>
    </div>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import SiderMenu from "../components/layout/sider-menu/SiderMenu";
import { useState } from "react";

const Home = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <>
      <Layout style={{
           
            minHeight: "100vh",

          }}>
        <Layout.Sider
          collapsed={collapsed}
          onCollapse={(collapseValue) => setCollapsed(collapseValue)}
          style={{
            overflow: "auto",
            height: "100%",
            position: 'fixed',
          }}
          collapsible
        >
          <SiderMenu />
        </Layout.Sider>
        <Layout.Content
          style={{
            height:"100%",
            padding:24,
            marginLeft: !collapsed ? 200 : 80,
            transition: "margin 0.3s ease"
          }}
        >
          <Outlet />
        </Layout.Content>
      </Layout>
    </>
  );
};

export default Home;

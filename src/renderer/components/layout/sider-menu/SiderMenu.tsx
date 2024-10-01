import {
  MdOutlineHomeWork,
  MdPersonOutline,
  MdOutlineSpaceDashboard,
  MdOutlineSettings,
} from "react-icons/md";
import siderMenuData from "../../../data/siderMenu.json";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const RenderIcon = (iconName: string): JSX.Element | undefined => {
  switch (iconName) {
    case "SpaceDashboardOutlined":
      return <MdOutlineSpaceDashboard />;
    case "SettingsOutlinedIcon":
      return <MdOutlineSettings />;
    case "PersonOutlined":
      return <MdPersonOutline />;
    case "HomeWorkOutlined":
      return <MdOutlineHomeWork />;
    default:
      return;
  }
};

const items = siderMenuData.map((menuItem) => {
  return {
    key: menuItem.name,
    label: <Link to={menuItem.link}> {menuItem.name}</Link>,
    icon: RenderIcon(menuItem.icon),
  };
});

const SiderMenu = () => {
  return <Menu 
  defaultSelectedKeys={['0']}
  style={{height:"100%"}} mode="vertical" items={items} />;
};

export default SiderMenu;

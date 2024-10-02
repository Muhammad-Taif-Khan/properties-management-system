import { CheckCard } from "@ant-design/pro-components";
import PageMetadataHeader from "../components/layout/page-header/PageMetadataHeader";
import { Divider, Space, Typography } from "antd";
import { getLocalStorageItem, setLocalStorageItem } from "../utils/localStorage";
const { Text } = Typography;

interface SectionDescriptionProps {
  details: string;
}

const SectionDescription = ({
  details,
}: SectionDescriptionProps): JSX.Element => {
  return (
    <>
      <Text >{details}</Text>
    </>
  );
};
interface SettingsProps{
setAppTheme: (value:string)=>void;
}

const Settings = ({setAppTheme}: SettingsProps): JSX.Element => {
 
  return (
    <>
      <PageMetadataHeader pageName={"Settings"} 
      pageDescription="Set all your preferences and customize app in one place"
      />
      <Divider  orientation={"left"}>Appearance</Divider>
      <Space direction="vertical" size={"large"}>
        <SectionDescription
          details={
            `Customize the look and feel of the app by selecting your preferred theme.
             Switch between light and dark modes to match your environment and improve visual comfort.`
          }
        />
        <CheckCard.Group onChange={(checkValue)=>{
          setLocalStorageItem("appTheme", checkValue);
          setAppTheme(getLocalStorageItem("appTheme"));
        }} defaultValue={getLocalStorageItem("appTheme") || "light"} multiple={false}>
          <CheckCard
            size="small"
            value={"light"}
            title={"Light Mode"}
          />
          <CheckCard value={"dark"} size="small" title={"Dark"} />
        </CheckCard.Group>
      </Space>
    </>
  );
};

export default Settings;


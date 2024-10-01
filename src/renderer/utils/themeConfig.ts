
import { theme } from "antd";


export function setThemeConfig(appTheme:string | "dark" | "light"|null):{
    algorithm :any,
    token:{
        colorBgBase:string|undefined

    }
    } | undefined{
    if(appTheme === "dark"){
        return {
            algorithm: theme.darkAlgorithm,
            token:{
                    colorBgBase:"#0e0f14"
            }
        }
    }
    if(appTheme === "light"){
        return {
            algorithm: theme.defaultAlgorithm,
            token:{
                    colorBgBase:undefined,
            }
        }
    }

}
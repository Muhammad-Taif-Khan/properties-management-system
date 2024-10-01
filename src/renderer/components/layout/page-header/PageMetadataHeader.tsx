import {PageHeader} from '@ant-design/pro-components'
import { Button } from 'antd'
import {  useNavigate } from 'react-router-dom'
interface PageMDProps {
  pageName: string
}

const PageMetadataHeader = ({pageName}: PageMDProps) => {
  const navigate = useNavigate()
  return (
    <>
    <PageHeader  onBack={():void=> navigate(-1)} title={pageName} extra={<Button type='primary'>Test</Button>}>
    </PageHeader>
    </>
  )
}

export default PageMetadataHeader
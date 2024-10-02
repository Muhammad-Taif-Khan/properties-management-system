import {PageHeader} from '@ant-design/pro-components'

import {  useNavigate } from 'react-router-dom'
interface PageMDProps {
  pageName: string,
  pageDescription: string
}

const PageMetadataHeader = ({pageName, pageDescription}: PageMDProps) => {
  const navigate = useNavigate()
  return (
    <>
    <PageHeader
      onBack={():void => navigate(-1)} title={pageName}
      subTitle={pageDescription}
      >
    </PageHeader>
    </>
  )
}

export default PageMetadataHeader

import PageMetadataHeader from "../components/layout/page-header/PageMetadataHeader"
import tenantsData from "../data/tenants.json"
import { Button, Divider, Flex, Space, Table, TableProps, Tag } from "antd"
import Title from "antd/es/typography/Title";
import {addMonths, formatDate, isAfter, isBefore, isToday} from "date-fns";
import {MdAdd} from "react-icons/md";
import TenantAddModalForm, { FormElementsTypes } from "../components/tenants/TenantAddModalForm";
import { useState } from "react";

const Tenants = () => {

  interface ColumnsDataType{
    key: string,
    name: string,
    phone: string,
    leaseAgreement: string,
    leaseStartAt:string,
    rentAmount: number,
    dueDate?: string,
    rentStatus?: string,
  }

  const [data, setData] = useState<ColumnsDataType[]>(tenantsData.map((tenant) => {
          return {...tenant, key:tenant.id}
    }));

  const columns:TableProps<ColumnsDataType>["columns"] = [{
    title:"Name",
    dataIndex: "name",
    key:"name",
  },
  {
    title:"Phone",
    dataIndex: "phone",
    key:"phone",

  },
  {
    title:"Lease Agreement",
    dataIndex: "leaseAgreement",
    key:"leaseAgreement",
    ellipsis:true,
    render:(value)=> <a>{value}</a>
  },
  {
    title:"Rent Amount",
    dataIndex: "rentAmount",
    key:"rentAmount",
    render:(value)=> <span>{`Rs.${value}`}</span>
  },
  {
    title:"Lease Start At",
    dataIndex: "leaseStartAt",
    key:"leaseStartAt",
    render:(value)=> <span>{new Date(value).toISOString().split('T')[0]}</span>
  },
  {
    title:"Due Date",
    dataIndex: "dueDate",
    key:"dueDate",
    render:(_, {leaseStartAt}):any => formatDate(addMonths(leaseStartAt,1),"yyyy-MM-dd")
  },
  {
    title:"Rent Status",
    dataIndex: "rentStatus",
    key:"rentStatus",
    render:(_, {leaseStartAt}):JSX.Element | undefined => {
      const dateAfterOneMonth = addMonths(leaseStartAt, 1);
      

        if(isToday(dateAfterOneMonth)){
          return <Tag color={"yellow"}>Due</Tag>;
        }
       else if(isBefore(dateAfterOneMonth, new Date())){

         return <Tag color={"error"}>overdue</Tag>;
        }
        else if(isAfter(dateAfterOneMonth, new Date())){
          return <Tag color={"geekblue"}>upcoming</Tag>;
        }
      
    }
  }
];

function onNewTenantAdd(entry:FormElementsTypes):void {
  setData([...data, {...entry, key:entry.id}]);
}

const TableToolBar = ():JSX.Element=>{
 return (
 <Flex align="center" justify="space-between" vertical={false}>
    <Title level={4}>All Tenants</Title>
    <TenantAddModalForm onNewEntry={onNewTenantAdd} trigger={<Button key={'2-btn'} type="primary" icon={<MdAdd/>}>Add Tenant</Button>}/>
    
  </Flex>)
}


  return (
    <>
  
    <PageMetadataHeader pageName="Tenants"
     pageDescription="Manage tenant profiles, track rent payments, and access lease agreements—all in one place"/>
    <Divider style={{visibility:"hidden"}}/>
    <Space direction="vertical">
    <TableToolBar/> 
    <Table
    size="small" columns={columns}  dataSource={data}/>
    </Space>
    </>
  )
}

export default Tenants
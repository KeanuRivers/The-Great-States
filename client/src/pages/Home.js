import React from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space, Button, } from 'antd';
import { Descriptions } from "antd";
import { useQuery } from "@apollo/client";
import headerimage from "../assets/images/area51.jpeg"



const data = Array.from({
length: 10,
}).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: 'https://joeschmoe.io/api/v1/random',
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

const HomePage = () => (
  <div>
    <img
src={headerimage}
alt="Area51"
className="img-fluid thumbnail"
id="profileimg"
/>
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 5,
    }}
    dataSource={data}
    // footer={
    //   <div>
    //     <b>ant design</b> footer part
    //   </div>
    // }
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <Button onClick={()=> {
            console.log('click') 
          }} shape="circle" icon={<StarOutlined />} />,
          <Button onClick={()=> {
            console.log('click') 
          }} shape="circle" icon={<MessageOutlined />} />,
          <Button  onClick={()=> {
            console.log('click') 
          }} shape="circle" icon={<LikeOutlined />} />
        ]}
        // extra={
        //   <img
        //     width={272}
        //     alt="logo"
        //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        //   />
        // }
      >
        <List.Item.Meta
          // avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  /></div>
);
export default HomePage;


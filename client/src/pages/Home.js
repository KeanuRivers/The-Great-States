import React from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space, Button, } from 'antd';
import { Descriptions } from "antd";
import { useQuery } from "@apollo/client";
import headerimage from "../assets/images/area51.jpeg"
import { QUERY_MYTH } from "../utils/queries";



const HomePage = () => {
  const {loading,data}= useQuery(QUERY_MYTH)
  console.log(data)
  const myths = data?.myths || []
  return (
    <div>
      <img
        src={headerimage}
        alt="Area51"
        className="img-fluid thumbnail"
        id="profileimg" />
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 5,
        }}
        dataSource={myths}
        // footer={
        //   <div>
        //     <b>ant design</b> footer part
        //   </div>
        // }
        renderItem={(item) => (
          <List.Item
            key={item.name}
            actions={[
              <Button onClick={() => {
                console.log('click');
              } } shape="circle" icon={<StarOutlined />} />,
              <Button onClick={() => {
                console.log('click');
              } } shape="circle" icon={<MessageOutlined />} />,
              <Button onClick={() => {
                console.log('click');
              } } shape="circle" icon={<LikeOutlined />} />
            ]}
          >
            <List.Item.Meta
              // avatar={<Avatar src={item.avatar} />}
              title={item.name}
              description={item.mythText} />
            {item.content}
          </List.Item>
        )} /></div>
  );
};
export default HomePage;


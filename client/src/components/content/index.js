import React from 'react';
import { HeartOutlined, DislikeOutlined, LikeOutlined, CommentOutlined } from '@ant-design/icons';
import { Avatar, Card, List } from 'antd';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  // {
  //   title: 'Title 5',
  // },
  // {
  //   title: 'Title 6',
  // },
];

const { Meta } = Card;

const content: React.FC = () => (
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card
    style={{ width: 200 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <LikeOutlined key="liked" />,
      <DislikeOutlined key="dislike"/>,
      <HeartOutlined key="favorite"/>,
      <CommentOutlined key="comments"/>
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Arizona"
      description="This is the description"
    />
  </Card>
      </List.Item>
    )}
  />
);

export default content;
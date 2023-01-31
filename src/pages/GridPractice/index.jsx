import {
  Col,
  message,
  notification,
  Row,
  Breadcrumb,
  Badge,
  Avatar,
  Carousel,
  Tabs,
  Menu,
} from 'antd';
const { TabPane } = Tabs;
import React, { useEffect } from 'react';
import { WhatsAppOutlined } from '@ant-design/icons';
const GridPractice = () => {
  //   const menu = (
  //     <Menu
  //       items={[
  //         {
  //           label: (
  //             <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
  //               General
  //             </a>
  //           ),
  //         },
  //         {
  //           label: (
  //             <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
  //               Layout
  //             </a>
  //           ),
  //         },
  //         {
  //           label: (
  //             <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
  //               Navigation
  //             </a>
  //           ),
  //         },
  //       ]}
  //     />
  //   );
  function callback(key) {
    console.log(key);
  }
  //   useEffect(() => {
  //     message.success('hello im success message');
  //     message.error('something went wrong');
  //     notification.success({
  //       message: 'success Title',
  //       description:
  //         'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  //       duration: 10,
  //     });
  //     notification.error({
  //       message: 'error Title',
  //       description:
  //         'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  //       duration: 5,
  //       placement: 'bottomRight',
  //     });
  //     notification.info({
  //       message: 'info Title',
  //       description:
  //         'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  //       duration: 5,
  //       placement: 'topLeft',
  //     });
  //   }, []);

  return (
    <>
      {/* practice of grids */}
      {/* 24 is gap in x-axis 12 is gap in y-axis */}
      <Row gutter={[24, 12]}>
        <Col xl={8} lg={8} md={8} sm={24} xs={24}>
          <div className="bg-blue-600 w-full h-12" />
        </Col>
        <Col xl={8} lg={8} md={8} sm={24} xs={24}>
          <div className="bg-blue-600 w-full h-12" />
        </Col>
        <Col xl={8} lg={8} md={8} sm={24} xs={24}>
          <div className="bg-blue-600 w-full h-12" />
        </Col>
      </Row>

      {/* <Row gutter={[12, 12]}>
        <Col xl={4} lg={4} md={8} sm={24} xs={24}>
          <div className="bg-pink-100 w-40 h-40" />
        </Col>
        <Col xl={4} lg={4} md={8} sm={24} xs={24}>
          <div className="bg-green-100 w-40 h-40" />
        </Col>
        <Col xl={4} lg={4} md={8} sm={24} xs={24}>
          <div className="bg-red-100 w-40 h-40" />
        </Col>
        <Col xl={4} lg={4} md={8} sm={24} xs={24}>
          <div className="bg-yellow-100 w-40 h-40" />
        </Col>
        <Col xl={4} lg={4} md={8} sm={24} xs={24}>
          <div className="bg-blue-100 w-40 h-40" />
        </Col>
        <Col xl={4} lg={4} md={8} sm={24} xs={24}>
          <div className="bg-purple-100 w-40 h-40" />
        </Col>
      </Row> */}
      {/* practice of bread crumbs */}
      {/* <Breadcrumb>
        <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Component</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item overlay={menu}>
          <a href="">General</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Button</Breadcrumb.Item>
      </Breadcrumb> */}

      {/* practice of badges */}
      <div style={{ marginTop: '20px' }}>
        <Badge
          count={5}
          offset={[10, 10]}
          style={{ marginTop: '2px', position: 'absolute', right: '0' }}
        >
          <Avatar icon={<WhatsAppOutlined />} size={33} />
        </Badge>

        {/* practice of Carousel */}
        {/* <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel> */}

        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default GridPractice;

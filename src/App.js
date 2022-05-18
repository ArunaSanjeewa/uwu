import React, { Component } from "react";
import Navbar from "./Components/Navbar";

import {
  UserOutlined,
  CustomerServiceOutlined,
  MailOutlined,
  TeamOutlined,
  ReadOutlined,
  BookOutlined,
  UngroupOutlined,
} from "@ant-design/icons";

// import { span, injectIntl } from 'react-intl';

// import * as utils from '../utils';
import "./App.css";

import {
  Layout,
  Menu,
  Avatar,
  Statistic,
  Drawer,
  Button,
  Carousel,
  Footer,
  Row,
  Col,
  Card,
  Timeline,
  List,
  Typography,
  Divider,
} from "antd";

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "500px",
  textAlign: "center",
  background: "#364d79",
};
const data = [
  "Call for papers",
  "Special Journal for this month",
  "Application call for Awards.",
  "Best Students awards.",
  "Welfare Programme 2022.",
];
class App extends Component {
  render() {
    const { Header, Content, Footer, Sider } = Layout;
    return (
      <>
        <Navbar />
        <Carousel autoplay>
        <div>
            <img
              style={contentStyle}
              alt="logo"
              src="${process.env.BASE_URL}/images/banner-irc.jpg"
            />
          </div>
          <div>
            <img
              style={contentStyle}
              alt="logo"
              src="${process.env.PUBLIC_URL}/images/slider-main-_Gate.jpg"
            />
          </div>
        
          <div>
            <img
              style={contentStyle}
              alt="logo"
              src="http://www.uwu.ac.lk/wp-content/uploads/UWU-Web-banner-ARF.jpg"
            />
          </div>
          <div>
            <img
              style={contentStyle}
              alt="logo"
              src="http://www.uwu.ac.lk/wp-content/uploads/slider-main-Structure.jpg"
            />
          </div>
        </Carousel>

        <br></br>
        {/* Content */}
        <div className="site-card-wrapper">
          <Row>
            <Col span={4}>
              <Card
                title="Virtual Learning"
                bordered={false}
                style={{ textAlign: "center" }}
                
              >
                <Avatar
                style={{ backgroundColor: '#f99e2a', verticalAlign: 'middle' }}
                  shape="square"
                  size={64}
                  icon={<CustomerServiceOutlined />}
                />
              </Card>
            </Col>
            <Col span={4}>
              <Card
                title="Library"
                bordered={false}
                style={{ textAlign: "center" }}
              >
                <Avatar      style={{ backgroundColor: '#f99e2a', verticalAlign: 'middle' }}
                shape="square" size={64} icon={<ReadOutlined />} />
              </Card>
            </Col>
            <Col span={4}>
              <Card
                title="Staff Email"
                bordered={false}
                style={{ textAlign: "center" }}
              >
                <Avatar      style={{ backgroundColor: '#f99e2a', verticalAlign: 'middle' }}
                shape="square" size={64} icon={<MailOutlined />} />
              </Card>
            </Col>
            <Col span={4}>
              <Card
                title="Student Email"
                bordered={false}
                style={{ textAlign: "center" }}
              >
                <Avatar      style={{ backgroundColor: '#f99e2a', verticalAlign: 'middle' }}
                shape="square" size={64} icon={<TeamOutlined />} />
              </Card>
            </Col>
            <Col span={4}>
              <Card
                title="CODL @ UWU"
                bordered={false}
                style={{ textAlign: "center" }}
              >
                <Avatar      style={{ backgroundColor: '#f99e2a', verticalAlign: 'middle' }}
                shape="square" size={64} icon={<BookOutlined />} />
              </Card>
            </Col>
            <Col span={4}>
              <Card
                title="UWU ICC"
                bordered={false}
                style={{ textAlign: "center" }}
              >
                <Avatar      style={{ backgroundColor: '#f99e2a', verticalAlign: 'middle' }}
                shape="square" size={64} icon={<UngroupOutlined />} />
              </Card>
            </Col>
          </Row>
        </div>
        {/* content */}
        <br></br>
        <Row style={{ padding: 25, backgroundColor: "#f4ffff" }}>
          <Col span={8}>
            <Row gutter={16}>
              <Col span={12}>
                <Statistic title="Graduates" value={5026} />
              </Col>

              <Col span={12}>
                <Statistic title="Publications" value={1631} />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Statistic title="Faculties" value={4} />
              </Col>

              <Col span={12}>
                <Statistic title="Active Students" value={5026} />
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <>
              {/* <Divider orientation="left">Default Size</Divider> */}
            
              <List
                size="large"
                style={{marginRight:25}}
                header={<div>Important Notice</div>}
                // footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </>
          </Col>
          <Col span={8}>
            <Timeline>
              <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item>
                Solve initial network problems 2015-09-01
              </Timeline.Item>
              <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
              <Timeline.Item>
                Network problems being solved 2015-09-01
              </Timeline.Item>
            </Timeline>
          </Col>
        </Row>

        {/* ************** */}
        <br></br>
        <Footer>
          <div className="footer-wrap">
            <Row>
              <Col md={6} sm={24} xs={24}>
                <div className="footer-center">
                
                  <div>
                    <a
                      target="_blank "
                      href="https://github.com/ant-design/ant-design-landing"
                    >
                      <span id="app.footer.repo" />
                    </a>
                  </div>
                  <div className="">
				<img alt="logo" height="50px" src="images/logo_uwu.jpg"/>
				</div>
        <h2>Uva Wellassa University</h2>
                  <div>
                    <a target="_blank " href="https://github.com/ant-motion">
                      <span id="app.footer.template" />Apply for Phd
                    </a>
                  </div>
                  <div>
                    <a
                      href="http://ant-design-landing.gitee.io/"
                      target="_blank "
                    >
                      <span id="app.footer.chinamirror" />Apply for M.Phill
                    </a>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={24} xs={24}>
                <div className="footer-center">
                  <h2>
                    <span id="app.footer.links" />
                  </h2>
                  <div>
                    <a target="_blank " href="http://ant.design">
                      News and Events
                    </a>
                  </div>
                  <div>
                    <a target="_blank " href="https://pro.ant.design/">
                      Policies and FAQs
                    </a>
                  </div>
                  <div>
                    <a href="http://mobile.ant.design">Notice to the Public</a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      rel="noopener"
                      href="http://motion.ant.design"
                    >
                      Short Term Courses
                    </a>
                   
                    <span id="app.footer.motion" />
                  </div>

                  <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/dvajs/dva"
                    >
                      Student Statistics
                    </a>
                    
                    <span id="app.footer.dva" />
                  </div>
                  <div>
                    <a target="_blank " href="http://ant.design">
                      News and Events
                    </a>
                  </div>
                  <div>
                    <a target="_blank " href="https://pro.ant.design/">
                      Policies and FAQs
                    </a>
                  </div>
                  <div>
                    <a href="http://mobile.ant.design">Notice to the Public</a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      rel="noopener"
                      href="http://motion.ant.design"
                    >
                      Short Term Courses
                    </a>
                   
                    <span id="app.footer.motion" />
                  </div>

                  <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/dvajs/dva"
                    >
                      Student Statistics
                    </a>
                    
                    <span id="app.footer.dva" />
                  </div>
                </div>
              </Col>
              <Col md={6} sm={24} xs={24}>
                <div className="footer-center">
                  <h2>
                    <span id="app.footer.community" />
                  </h2>
                  <div>
                    <a target="_blank " href="http://ant.design">
                      News and Events
                    </a>
                  </div>
                  <div>
                    <a target="_blank " href="https://pro.ant.design/">
                      Policies and FAQs
                    </a>
                  </div>
                  <div>
                    <a href="http://mobile.ant.design">Notice to the Public</a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      rel="noopener"
                      href="http://motion.ant.design"
                    >
                      Short Term Courses
                    </a>
                   
                    <span id="app.footer.motion" />
                  </div>

                  <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/dvajs/dva"
                    >
                      Student Statistics
                    </a>
                    
                    <span id="app.footer.dva" />
                  </div>
                  <div>
                    <a
                      target="_blank"
                      rel="noopener"
                      href="https://github.com/ant-design/ant-design-landing/issues"
                    >
                      <span id="app.footer.issues" />
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      rel="noopener"
                      href={`http://ant.design/docs/spec/work-with-us${
                        true ? "-cn" : ""
                      }`}
                    >
                      <span id="app.footer.work-with-us" />
                    </a>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={24} xs={24}>
                <div className="footer-center">
                  <h2>
                    <img
                      className="title-icon"
                      height={70}
                      src="images/mohe_.png"
                      alt="AFX Cloud"
                    />
                    <img
                      className="title-icon"
                      height={70}
                      src="images/ugc_.png"
                      alt="AFX Cloud"
                    />
                    {/* <img
                      className="title-icon"
                      height={30}
                      src="http://www.uwu.ac.lk/wp-content/uploads/hetc_.png"
                      alt="AFX Cloud"
                    />
                     <img
                      className="title-icon"
                      height={30}
                      src="http://www.uwu.ac.lk/wp-content/uploads/learn_.png"
                      alt="AFX Cloud"
                    /> */}
                    <span id="app.footer.more-product" />
                  </h2>
                  {/* <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://yuque.com/"
                    >
                      <span id="app.footer.yuque" />
                    </a>
                    <span> - </span>
                    <span id="app.footer.yuque.slogan" />
                  </div>
                   */}
                  <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://antv.alipay.com/"
                    >
                      Location
                    </a>
                    {/* <span> - </span> */}
                    <span id="app.footer.data-vis" />
                  </div>
                  <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://eggjs.org/"
                    >
                      Contact us
                    </a>
                    {/* <span> - </span> */}
                    <span id="app.footer.eggjs" />
                  </div>
                  <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://xcloud.alipay.com/"
                    >
                      <span id="app.footer.xcloud" />
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="bottom-bar">
            Made by Aruna Withanage
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://yuque.com/afx/blog"
            > */}
            {/* </a> */}
          </div>
        </Footer>
      </>
    );
  }
}

export default App;

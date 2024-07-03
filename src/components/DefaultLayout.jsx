import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; // 导入i18n配置
// 公用头部组件
const HeaderComponent = () => {
  const location = useLocation();
  const [lang, setLang] = useState({
    lang: 'zh',
    label: '中文'
  });
  const [langList] = useState([
    {
      lang: 'zh',
      label: '中文'
    },
    {
      lang: 'en',
      label: 'English'
    }
  ])
  const toggleLang = (lang) => {
    setLang(lang)
    i18n.changeLanguage(lang.lang)
  }
  const { t } = useTranslation();
  // debugger
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <span className="fs-4">BanffNB666</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="/#" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              {t('首页')}
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/#roomsFeatures"
              className={location.pathname === "/roomsFeatures" ? "nav-link active" : "nav-link"}
            >
              {t('房间特征')}
            </a>
          </li>
          <li className="nav-item">
            <a href="/#bookNow" className={location.pathname === "/bookNow" ? "nav-link active" : "nav-link"}>
              Book Now
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/#sendUsAMessage"
              className={location.pathname === "/sendUsAMessage" ? "nav-link active" : "nav-link"}
            >
              Send us a message
            </a>
          </li>
        </ul>
        <DropdownButton style={{marginLeft: '16px'}} title={lang.label}>
          {
            langList.map((item, index) => {
              return <Dropdown.Item key={index} onClick={ ()=>{toggleLang(item)} }>{item.label}</Dropdown.Item>
            })
          }
        </DropdownButton>
      </header>
    </div>
  );
}

// 公用尾部组件
const FooterComponent = () => {
  return (
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-md-5 d-flex flex-column justify-content-center">
            <h5 className="mb-4">FrontDesk Open hours</h5>
            <p className="mb-0">Monday - Thursday 10am-6:30pm</p>
            <p className="mb-0">Friday - 10am-5:30pm</p>
            <p className="mb-0">Monday - 10am-3pm (alternating)</p>
            <p className="mb-0">Sunday - ClOSED</p>
          </div>
          <div className="col-md-7">
            <img src="/1.jpg" style={{width:'300px', height: '200px', background: '#f5f5f5'}} className="rounded float-end img-fluid" alt="..."></img>
          </div>
        </div>
      </footer>
    </div>
  );
}

// 高阶组件
const withLayout = (Component) => {
  return () => 
    <div>
      <HeaderComponent />
      <Component />
      <FooterComponent />
    </div>
}

export default withLayout;

import React, { useState } from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Images from "./index-sections/Images.js";
import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Tabs from "./index-sections/Tabs.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import Typography from "./index-sections/Typography.js";
import Javascript from "./index-sections/Javascript.js";
import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import SignUp from "./index-sections/SignUp.js";
import Examples from "./index-sections/Examples.js";
import Download from "./index-sections/Download.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import JSTitle from "./index-sections/JSTitle.js";
import JSList from "./index-sections/JSList.js";
import CampDataList from "../data/campData.json";
import JSNavbar from "components/Navbars/JSNavbar";

// reactstrap components
import {
  Container,
  Row,
  Nav,
  Navbar,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  const [area, setArea] = useState("서울특별시");
  
  const areaUpdate = e => {    
    setArea(e);
  }

  return (
    <>
      
      {/* <IndexNavbar /> */}
      {/* {<JSNavbar/>} */}
      
      <Navbar expand="lg" color="info">
        <Container>
          <div class="justify-content-end collapse navbar-collapse">
            <Nav navbar>              
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>{area}</p>
                </DropdownToggle>
                <DropdownMenu>                
                  <DropdownItem onClick={function(evt){areaUpdate(this.option)}} option="서울특별시">                  
                    서울특별시
                  </DropdownItem>
                  <DropdownItem onClick={function(evt){areaUpdate(this.option)}} option="인천광역시">                
                    인천광역시
                  </DropdownItem>
                  <DropdownItem onClick={function(evt){areaUpdate(this.option)}} option="대전광역시">                
                    대전광역시
                  </DropdownItem>
                  <DropdownItem onClick={function(evt){areaUpdate(this.option)}} option="대구광역시">                
                    대구광역시
                  </DropdownItem>
                  <DropdownItem onClick={function(evt){areaUpdate(this.option)}} option="울산광역시">                
                    울산광역시
                  </DropdownItem>
                  <DropdownItem onClick={function(evt){areaUpdate(this.option)}} option="부산광역시">                
                    부산광역시
                  </DropdownItem>
                  <DropdownItem onClick={function(evt){areaUpdate(this.option)}} option="충청북도">                
                    충청북도
                  </DropdownItem>
                  <DropdownItem onClick={function(evt){areaUpdate(this.option)}} option="충청남도">                
                    충청남도
                  </DropdownItem>
                  <DropdownItem onClick={function(evt){areaUpdate(this.option)}} option="경상북도">                
                    경상북도
                  </DropdownItem>
                  <DropdownItem onClick={function(evt){areaUpdate(this.option)}} option="경상남도">                
                    경상남도
                  </DropdownItem>
                  <DropdownItem onClick={function(evt){areaUpdate(this.option)}} option="전라북도">                
                    전라북도
                  </DropdownItem>
                  <DropdownItem onClick={function(evt){areaUpdate(this.option)}} option="전라남도">                
                    전라남도
                  </DropdownItem>
                  <DropdownItem onClick={function(evt){areaUpdate(this.option)}} option="경기도">                
                    경기도
                  </DropdownItem>
                  <DropdownItem onClick={function(evt){areaUpdate(this.option)}} option="강원도">                
                    강원도
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </div>
        </Container>
      </Navbar>
      
      <div className="wrapper">        
        {/* <IndexHeader /> */}
        <JSTitle />        
        <div className="main">
        <div className="section section-tabs">
          <Container>
            <Row> 
              {console.log(CampDataList)}
              {CampDataList.records.map((list, key) => (
                <JSList  
                  area = {area}                
                  data = {list}
                  key = {key}
                />
              ))}                   
            </Row>
          </Container>
        </div>

          
        </div>
        
      </div>
    </>
  );
}

export default Index;

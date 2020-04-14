import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../css/TabNav.css";
import TabDevices from "./tabs_nav/TabDevices";
import TabPrice from "./tabs_nav/TabPrice";
import TabDoor from "./tabs_nav/TabDoor";
import TabDoorContent from "./tab_content/TabDoorContent";
import TabDevicesContent from "./tab_content/TabDevicesContent";
import TabPriceContent from "./tab_content/TabPriceContent";

class TabComponent extends Component {
  state = {
    tabIndex: 0,
  };
  render() {
    return (
      <div>
        <Tabs
          className="tabs"
          selectedIndex={this.state.tabIndex}
          onSelect={(tabIndex) => this.setState({ tabIndex })}
        >
          <TabList className="tabs-nav-container">
            <Tab
              className={`${
                this.state.tabIndex === 0 ? "tab-selected active" : null
              }`}
            >
              <TabDoor />
              <p>
                <strong>
                  No commitments
                  <br />
                  Cancel online at anytime
                </strong>
              </p>
            </Tab>
            <Tab
              className={`${
                this.state.tabIndex === 1 ? "tab-selected active" : null
              }`}
            >
              <TabDevices />
              <p style={{ marginTop: "-5.3125rem" }}>
                <strong>Watch anywhere</strong>
              </p>
            </Tab>
            <Tab
              className={`${
                this.state.tabIndex === 2 ? "tab-selected active" : null
              }`}
            >
              <TabPrice />
              <p>
                <strong>Pick your price</strong>
              </p>
            </Tab>
          </TabList>
          <TabPanel>
            <TabDoorContent />
          </TabPanel>
          <TabPanel>
            <TabDevicesContent />
          </TabPanel>
          <TabPanel>
            <TabPriceContent />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default TabComponent;

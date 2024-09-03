import React from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const TabBooking = () => {
  return (
    <div className="flex ">
      <Tabs defaultActiveKey="1" tabPosition="top" className="custom-tabs">
        <TabPane tab="Current Booking" key="1" >
          Current Booking
        </TabPane>
        <TabPane tab="Booking History" key="2">
          Booking History
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TabBooking;

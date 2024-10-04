import React from "react";
import { Tabs } from "antd";
import BookTable from "./BookTable";
import BookHistory from "./BookHistory";
const { TabPane } = Tabs;

const TabBooking = () => {
  return (
    <div className="flex px-20">
      <Tabs defaultActiveKey="1" tabPosition="top" className="custom-tabs">
        <TabPane tab="Current Booking" key="1" >
          <BookTable/>
        </TabPane>
        <TabPane tab="Booking History" key="2">
          <BookHistory/>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TabBooking;

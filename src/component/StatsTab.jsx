import React from "react";
import { Tabs } from "antd";
import BarChartComp from "./BarChartComp";
import PieChartComp from "./PieChartComp";

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: "Pie Chart",
    children: <PieChartComp />,
    forceRender: true,
  },
  {
    key: "2",
    label: "Bar Chart",
    children: <BarChartComp />,
    forceRender: true,
  },
];

const StatsTab = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-lightGray p-6">
        <h1 className="text-center">
          Welcome to the TravelEase Admin Dashboard! Manage your system
          effectively and ensure seamless travel experiences for your customers
        </h1>
      </div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default StatsTab;

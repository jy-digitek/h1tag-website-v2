import React from "react";

import { render } from "react-dom";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";

export default function Tabs2() {
  return (
    <div>
      <Tabs
        defaultTab="one"
        onChange={(tabId) => {
          console.log(tabId);
        }}
        vertical
      >
        <TabList>
          <Tab tabFor="one">Tab 1</Tab>
          <Tab tabFor="two">Tab 2</Tab>
          <Tab tabFor="three">Tab 3</Tab>
        </TabList>
        <TabPanel tabId="one">
          <p>
            Tab 1 During your Digital Marketing Course, you will learn different
            techniques of Digital Marketing and how to apply them in real life.
            We will make you a skilled professional, and you will acquire the
            skills you need to{" "}
          </p>
        </TabPanel>
        <TabPanel tabId="two">
          <p>
            Tab 2 content During your Digital Marketing Course, you will learn
            different techniques of Digital Marketing and how to apply them in
            real life. We will make you a skilled professional, and you will
            acquire the skills you need to succeed in life. You can choose from
            a variety of courses that H1 Tags is offering.
          </p>
        </TabPanel>
        <TabPanel tabId="three">
          <p>
            Tab 3 During your Digital Marketing Course, you will learn different
            techniques of Digital Marketing and how to apply them in real life.
            We will make you a skilled professional, and you will acquire the
            skills you need to succeed in life. You can{" "}
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

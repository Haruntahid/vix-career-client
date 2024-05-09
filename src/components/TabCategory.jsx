import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function TabCategory() {
  return (
    <div className="mt-20 container mx-auto">
      <h1 className="text-2xl font-semibold text-center text-txt-color capitalize lg:text-4xl ">
        Explore Jobs By <span className="text-btn-color">Categories</span>
      </h1>

      <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
        Three categories available for the time being. They are Web Development,
        Graphics Design and Digital Marketing. Browse them by clicking on the
        tabs below.
      </p>
      <Tabs>
        <div className="flex items-center justify-center">
          <TabList>
            <Tab>On-Site Job</Tab>
            <Tab>Remote Job</Tab>
            <Tab>Hybrid</Tab>
            <Tab>Part-Time</Tab>
          </TabList>
        </div>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TabCategory;

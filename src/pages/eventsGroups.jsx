import React, { useState } from 'react'
import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tab, tabClasses } from '@mui/base/Tab';
import { buttonClasses } from '@mui/base/Button';
import EventList from '../components/EventList';
import GroupList from '../components/GroupList';

const EventsGroups = () => {

  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
 };

  return (
    <div className="eg-container">
      {activeTab === 1 ? <h2>Events in Bayero University Kano</h2> : <h2>Groups in Bayero University Kano</h2>}
      <Tabs defaultValue={activeTab} onChange={handleTabChange}>
            <TabsList className="CustomTabsList">
              <Tab className="CustomTab" value={1} selected={activeTab === 1}>
                Events
              </Tab>
              <Tab className="CustomTab" value={2} selected={activeTab === 2}>
                Groups
              </Tab>
            </TabsList>
            <TabPanel className="CustomTabPanel" value={1}>
                <EventList />
            </TabPanel>
            <TabPanel className="CustomTabPanel" value={2}>
                <GroupList />
            </TabPanel>
          </Tabs>
          <Styles />
    </div>
  )
}

function Styles() {

  return (
    <style>
      {`
      .CustomTabsList {
        min-width: 200px;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        justify-content: start;
        align-content: space-between;
      }

      .CustomTab {
        font-family: 'IBM Plex Sans', sans-serif;
        color: black;
        cursor: pointer;
        font-size: 0.875rem;
        font-weight: bold;
        background-color: transparent;
        width: fit-content;
        line-height: 1.5;
        padding: 2px 2px;
        margin-right: 50px;
        border: none;
      }

      .CustomTab:hover {
        color: #3D64FF;
      }

      .CustomTab:focus {
        color: #3D64FF;
        border-bottom: 3px solid #3D64FF;
      }

      .CustomTab.${tabClasses.selected} {
        border-bottom: 3px solid #3D64FF;
      }

      .CustomTab.${buttonClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .CustomTabPanel {
        width: 100%;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
      }
      `}
    </style>
  );
}


export default EventsGroups
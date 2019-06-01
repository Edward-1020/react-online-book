import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LIST_VIEW, CHART_VIEW } from './utility'
import PriceList from './components/PriceList';
import ViewTab from './components/ViewTab';

const items = [
  {
    'id': 1,
    'title': '去云南旅游',
    'price': 200,
    'date': '2018-09-10',
    'category': {
      'id': '1',
      'name': '旅行',
      'type': 'outcome',
      'iconName': 'ios-plane'
    }
  },
  {
    'id': 2,
    'title': '去云南旅游',
    'price': 300,
    'date': '2018-09-10',
    'category': {
      'id': '1',
      'name': '旅行',
      'type': 'outcome',
      'iconName': 'ios-plane'
    }
  }
]

function App() {
  return (
    <div className="App">
      <ViewTab
        activeTab={LIST_VIEW}
        onTabChange={(view) => {console.log(view)}}/>
      <PriceList
        items={items}
        onModifyItem={(item) => {alert(item.id)}}
        onDeleteItem={(item) => {alert(item.id)}}/>
    </div>
  );
}

export default App;

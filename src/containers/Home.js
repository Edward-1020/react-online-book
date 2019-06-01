import React from 'react';
import { LIST_VIEW, CHART_VIEW } from '../utility'
import PriceList from '../components/PriceList';
import ViewTab from '../components/ViewTab';
import MonthPicker from '../components/MonthPicker';

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

class Home extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div className="row mb-5">
                
                </div>
                <div className="row">
                    <div className="col">
                        <MonthPicker
                            year={2018}
                            month={8}
                            onChange={() => {}}
                        />
                    </div>
                    <div className="col">
                    </div>
                </div>
                <div className="content-area py-3 px-3">
                    <ViewTab
                        activeTab={LIST_VIEW}
                        onTabChange={() => {}}
                    />
                    <PriceList
                        items={items}
                        onModifyItem={() => {}}
                        onDeleteItem={() => {}}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default Home;
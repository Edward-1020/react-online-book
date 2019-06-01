import React from 'react';
import { LIST_VIEW, CHART_VIEW, parseToYearAndMonth } from '../utility'
import PriceList from '../components/PriceList';
import ViewTab from '../components/ViewTab';
import MonthPicker from '../components/MonthPicker';

const categories = {
    "1": {
        'id': '1',
        'name': '旅行',
        'type': 'outcome',
        'iconName': 'ios-plane'
    },
    "2": {
        'id': '1',
        'name': '旅行',
        'type': 'outcome',
        'iconName': 'ios-plane'
    }
}
const items = [
    {
      'id': 1,
      'title': '去云南旅游',
      'price': 200,
      'date': '2018-09-10',
      'cid': 1
    },
    {
      'id': 2,
      'title': '去云南旅游',
      'price': 300,
      'date': '2018-09-10',
      'cid': 2
    }
]

class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            items,
            categories,
            currentDate: parseToYearAndMonth(),
            tabView: LIST_VIEW
        }
    }
    changeView = () => {

    }
    changeDate = () => {

    }
    modifyItem = () => {

    }
    deleteItem = () => {

    }
    render () {
        const { items, currentDate, tabView } = this.state;
        const itemsWithCategory = items.map(item => {
            item.category = categories[item.cid];
            return item;
        })

        return (
            <React.Fragment>
                <div className="row mb-5">
                
                </div>
                <div className="row">
                    <div className="col">
                        <MonthPicker
                            year={currentDate.year}
                            month={currentDate.month}
                            onChange={this.changeDate}
                        />
                    </div>
                    <div className="col">
                    </div>
                </div>
                <div className="content-area py-3 px-3">
                    <ViewTab
                        activeTab={tabView}
                        onTabChange={this.changeView}
                    />
                    <PriceList
                        items={itemsWithCategory}
                        onModifyItem={this.modifyItem}
                        onDeleteItem={this.deleteItem}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default Home;
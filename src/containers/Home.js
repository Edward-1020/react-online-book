import React from 'react';
import { LIST_VIEW, CHART_VIEW, parseToYearAndMonth, padLeft } from '../utility'
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
const newItem = {
    'id': 2,
    'title': '去云南旅游',
    'price': 300,
    'date': '2018-09-10',
    'cid': 2
}
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
    changeView = (view) => {
        this.setState({
            tabView: view
        })
    }
    changeDate = (year, month) => {
        this.setState({
            currentDate: {year, month}
        });
    }
    modifyItem = (modifyItem) => {
        const modifiedItems = this.state.items.map((item) => {
            if (item.id === modifyItem.id) {
                return {
                    ...item,
                    title: '更新后的标题'
                }
            } else {
                return item
            }
        });
        this.setState({
            items: modifiedItems
        })
    }
    createItem = () => {
        this.setState({
            items: [newItem, ...this.state.items]
        })
    }
    deleteItem = (deletedItem) => {
        const filteredItems = this.state.items.filter(item => item.id !== deletedItem.id);
        this.setState({
            items: filteredItems
        })
    }
    render () {
        const { items, currentDate, tabView } = this.state;
        const itemsWithCategory = items.map(item => {
            item.category = categories[item.cid];
            return item;
        }).filter(item => {
            return item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
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
                    {
                        tabView === LIST_VIEW ?
                        <PriceList
                            items={itemsWithCategory}
                            onModifyItem={this.modifyItem}
                            onDeleteItem={this.deleteItem}
                        /> : <h1>这里是图标区域</h1>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Home;
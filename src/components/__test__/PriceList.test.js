import React from 'react';
import { shallow } from 'enzyme';
import PriceList from '../PriceList';
import Ionicon from 'react-ionicons';
import { items, categories } from '../../containers/Home';

const itemsWithCategory = items.map(item => {
    item.category = categories[item.cid];
    return item;
}).filter(item => {
    return item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
});

const props = {
    items: itemsWithCategory,
    onModifyItem: () => {},
    onDeleteItem: () => {}
}
let wrapper
describe('test PriceList component', () => {
    beforeEach(() => {
        wrapper = shallow(<PriceList {...props} />)
    })
    it('snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
    it('correct length', () => {
        expect(wrapper.find('.list-group-item').length).toEqual(itemsWithCategory.length)
    })
    it('should render correct icon', () => {
        const iconList = wrapper.find('.list-group-item').first().find(Ionicon)
        expect(iconList.length).toEqual(3)
        expect(iconList.first().props().icon).toEqual(itemsWithCategory[0].category.iconName)
    })
})
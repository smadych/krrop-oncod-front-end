import { shallowMount } from '@vue/test-utils';
import Header from '@/layout/common/Header.vue';

describe('Header', () => {
    const headerWrapper = shallowMount(Header);

    it('logo is render', () => {
        expect(headerWrapper.find('.logo').exists()).toBeTruthy();
    }),

    it('search input is render', () => {
        expect(headerWrapper.find('.search').exists()).toBeTruthy();
    }),

    it('full name field is not empty', () => {
        expect(headerWrapper.find('.full-name').text()).toBe('');
    }),

    it('initials field is not empty', () => {
        expect(headerWrapper.find('.initials').text()).toBe('');
    })
}), 

describe('Header logic', () => {
    const headerWrapper = shallowMount(Header);

    it('find method', () => {
        console.log(headerWrapper.vm.$data);
        // expect(headerWrapper.vm.$data)
    })
})
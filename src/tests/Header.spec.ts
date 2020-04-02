import { shallowMount } from '@vue/test-utils';
import Header from '@/layout/common/Header.vue';

let headerWrapper: any = '';

beforeEach(() => {
    headerWrapper = shallowMount(Header);
})

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
});

describe('Header logic', () => {
    it('define function', () => {
        expect(headerWrapper.vm.logOut).toBeDefined();
    }),

    it('check method click', () => {
        const mockFucn = jest.fn();
        (headerWrapper.vm as any).logOut = mockFucn;
        headerWrapper.find('.logo').trigger('click');
        mockFucn();
        expect((headerWrapper.vm as any).logOut.mock.calls.length).toBe(1);
    })
});
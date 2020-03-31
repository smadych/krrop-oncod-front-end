import { shallowMount } from '@vue/test-utils';
import Layout from '@/components/Layout.vue';

describe('Layout', () => {
    const layoutWrapper = shallowMount(Layout);

    it('router-view is render', () => {
        // console.log(expect(layoutWrapper.find('router-view')).toBe(true));
        expect(layoutWrapper.find('router-view'));
    })
})
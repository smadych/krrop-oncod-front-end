import { shallowMount } from '@vue/test-utils';
import Layout from '@/components/Layout.vue';

describe('Layout', () => {
    const layoutWrapper = shallowMount(Layout);

    it('router-view is render', () => {
        expect(layoutWrapper.find('router-view'));
    })
})
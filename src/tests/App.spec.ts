import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App', () => {
    const appWrapper = shallowMount(App);

    it('component id render', () => {
        expect(appWrapper.find('#app').isVisible()).toBeTruthy();
    })
})
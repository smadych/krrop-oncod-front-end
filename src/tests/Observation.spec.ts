import { shallowMount } from '@vue/test-utils';
import Observation from '@/components/operator/Observation.vue';

describe('Header', () => {
    const observationWrapper = shallowMount(Observation);

    it('check the titleArr array', () => {
        expect(observationWrapper.vm.$data.titleArr).toHaveLength(4);
    }),

    it('check the temporaryData array', () => {
        expect(observationWrapper.vm.$data.temporaryData).toHaveLength(2);
    })
})
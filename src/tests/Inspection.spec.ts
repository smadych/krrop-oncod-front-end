import { shallowMount } from '@vue/test-utils';
import Inspection from '@/components/operator/Inspection.vue';

describe('Header', () => {
    const inspectionWrapper = shallowMount(Inspection);

    it('check the titleArr array', () => {
        expect(inspectionWrapper.vm.$data.titleArr).toHaveLength(5);
    }),

    it('check the temporaryData array', () => {
        expect(inspectionWrapper.vm.$data.temporaryData).toHaveLength(2);
    })
})
import { shallowMount } from '@vue/test-utils';
import Treatment from '@/components/operator/Treatment.vue';

describe('Treatment', () => {
    const treatmentWrapper = shallowMount(Treatment);

    it('check the titleArr array', () => {
        expect(treatmentWrapper.vm.$data.titleArr).toHaveLength(5);
    }),

    it('check the temporaryData array', () => {
        expect(treatmentWrapper.vm.$data.temporaryData).toHaveLength(2);
    })
})
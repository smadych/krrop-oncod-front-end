import { shallowMount } from '@vue/test-utils';
import SelfData from '@/components/operator/SelfData.vue';

describe('Header', () => {
    const selfDataWrapper = shallowMount(SelfData);

    it('number of elements in self-data-wrap', () => {
        expect(selfDataWrapper.findAll('.self-data-wrap > *')).toHaveLength(4);
    }),

    it('number of elements in address-wrap', () => {
        expect(selfDataWrapper.findAll('.address-wrap > *')).toHaveLength(2);
    }),

    it('number of elements in profession-wrap', () => {
        expect(selfDataWrapper.findAll('.profession-wrap > *')).toHaveLength(1);
    }),

    it('number of elements in checkbox-wrap', () => {
        expect(selfDataWrapper.findAll('.checkbox-wrap > *')).toHaveLength(4);
    })
})
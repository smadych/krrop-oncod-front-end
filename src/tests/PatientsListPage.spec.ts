import { shallowMount } from '@vue/test-utils';
import PatientsListPage from '@/layout/operator/PatientsListPage.vue';
import jest from 'jest';

describe('PatientsListPage', () => {

    const patientsListPageWrapper = shallowMount(PatientsListPage);

    it('title is render', () => {
       expect(patientsListPageWrapper.find('#title').text()).toBe('Пациенты');
    }),

    it('filters is render', () => {
        expect(patientsListPageWrapper.findAll('.filters > *')).toHaveLength(4);
    }),
     
    it('table is render', () => {
        expect(patientsListPageWrapper.findAll('table > *')).toHaveLength(2);
    }),

    it('table titles is render', () => {
        expect(patientsListPageWrapper.findAll('table thead > *')).toHaveLength(7);
    })
})
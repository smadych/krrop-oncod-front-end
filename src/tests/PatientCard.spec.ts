import { shallowMount } from '@vue/test-utils';
import PatientCard from '@/layout/operator/PatientCard.vue';

describe('PatientCard', () => {
    const patientCardWrapper = shallowMount(PatientCard);

    it('link-beck button is render', () => {
      expect(patientCardWrapper.find('.link-back').text()).toBe('< Пациенты');
    }),

    it('patient id, is not empty', () => {
        expect(patientCardWrapper.find('.id-patient').text()).toBe('BM4976');
    }),

    it('patient name, is not empty', () => {
        const name = 'Маркова Александра Константиновна'
        expect(patientCardWrapper.find('.patient-name').text()).toBe(name);
    }),

    it('status of tracking', () => {
        expect(patientCardWrapper.find('.status-patient').text()).toBe('Наблюдение');
    }),

    it('diagnosis is not empty', () => {
        const diagnosis = 'ЗН молочной железы неуточненной части';
        expect(patientCardWrapper.find('.diagnosis').text()).toBe(diagnosis);
    }),

    it('region is not empty', () => {
        const region = 'Кировоградский район';
        expect(patientCardWrapper.find('.region').text()).toBe(region);
    }),

    it('number of elements', () => {
        expect(patientCardWrapper.findAll('nav > *')).toHaveLength(4);
    }),

    it('number of elements', () => {
        expect(patientCardWrapper.findAll('nav > *')).toHaveLength(4);
    })
})
import { shallowMount } from '@vue/test-utils';
import Authorization from '@/layout/Authorization.vue';

describe('Authorization', () => {
    const authWrapper = shallowMount(Authorization);
    const loginForm = authWrapper.find('#login-form');

    it('are on new form fields login and pass fields empty', async () => {
        loginForm.trigger('submit');
        await authWrapper.vm.$nextTick();
        const loginErrorMessage = authWrapper.find('#empty-email-span');
        expect(loginErrorMessage.text()).toBe('Введите электронную почту');
    }),

    it('is incorrect login handled',  async () => {
        authWrapper.find('#input-login').setValue('qwewer.com');
        loginForm.trigger('submit');
        await authWrapper.vm.$nextTick();
        const loginErrorMessage = authWrapper.find('#invalid-email-span');
        expect(loginErrorMessage.text()).toBe('Введите корректную электронную почту');
    }),
        
    it('is password to short lenght handled', async () => {
        authWrapper.find('#input-pass').setValue('12');
        const errMessage = authWrapper.find('.error-pass');
        loginForm.trigger('submit');
        await authWrapper.vm.$nextTick();
        expect(errMessage.text()).toBe('Пароль слишком короткий');
    })
})

import { mount, shallowMount } from '@vue/test-utils';
import Authorization from '@/layout/Authorization.vue';
import { expect } from 'chai';

describe('Authorization', () => {
    it('are on new form fields login and pass fields empty', async () => {
        
        //Arrange
        const authWrapper = shallowMount(Authorization);
                            
        //Act
        const loginForm = authWrapper.find('#login-form');
            
        loginForm.trigger('submit');
        

        await authWrapper.vm.$nextTick();
        const loginErrorMessage = authWrapper.find('#invalid-email-span');
      
        expect(loginErrorMessage.text()).to.equal('Введите электронную почту');
        }
    )

    it('is incorrect login handled',  async () => {

        

        //Assert        
        }
    )
/*
    it('is password to short lenght handled', () => {
        //Arrange
        const authWrapper = mount(Authorization);
        
        const loginField =authWrapper.find('#input-login');
        
        const passField =authWrapper.find('#input-pass');

        loginField.text = "email@gmail.com";
        passField.text = "12";

        //Act
        const loginButton = wrapper.find('#login-button');
            
        loginButton.trigger('click');
        

        //Assert

        expect(p.text()).toBe('message');
        }
    )
    */
})

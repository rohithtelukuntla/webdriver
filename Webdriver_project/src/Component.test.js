// import { $, expect } from '@wdio/globals'
// const LoginPage = require( './pageobjects/login.page' );
// const SecurePage = require('./pageobjects/secure.page');

describe('Component Rendering Test', () => {
    it('should render button component to the DOM and assert', () => {
        const component = document.createElement('button')
        component.innerHTML = 'Hello World!'
        document.body.appendChild(component)

        expect(component).toBeInTheDocument()

        component.remove()
        expect(component).not.toBeInTheDocument()
    })
})

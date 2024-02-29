const LoginPage = require('../pages/login.page')
describe('demo test', ()=>{
    it('login test',async () => {
        browser.url('https://the-internet.herokuapp.com/login')
        await LoginPage.login('tomsmith','SuperSecretPassword!')
        await LoginPage.checkMessage('You logged into a secure area!')
        // await browser.pause(10000);
        // await $('#username').setValue('tomsmith');
        // await browser.pause(10000);
        // await $('#password').setValue('SuperSecretPassword!');
        // await browser.pause(10000);
        // await $('button[type=submit]').click();
        // await browser.pause(10000);
        // await $('#flash').getText();
        // await expect($('#flash')).toHaveTextContaining('You logged into a secure area!')
    })
})
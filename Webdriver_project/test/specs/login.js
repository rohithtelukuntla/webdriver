describe("login", () => {
  it("tests login", async () => {
    await browser.setWindowSize(790, 607)
    await browser.url("https://the-internet.herokuapp.com/login")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    await browser.$("#username").click()
    await browser.$("#username").setValue("tomsmith")
    await browser.$("//*[@id=\"login\"]/div[2]/div").click()
    await browser.$("#password").click()
    await browser.$("#password").setValue("S")
    await browser.$("#password").setValue("")
    await browser.$("//*[@id=\"content\"]/div/h4/em[2]").click()
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("//*[@id=\"login\"]/div[2]/div").click()
    await browser.$("#password").click()
    await browser.$("#password").setValue("SuperSecretPassword!")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
  });
});

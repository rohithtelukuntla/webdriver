describe("first demo",function(){
    it("sample demo", async ()=>{
       browser.url("https://www.google.com")
       await browser.pause(5000)
       await $('[name="q"]').setValue("webdriverio")

    //    await $('[name="btnK"]').click()
      //  await $('[type="submit"]').click();
       browser.keys('Enter')
      //  await browser.pause(30000)
  })
})
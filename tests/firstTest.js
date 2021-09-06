require('geckodriver')
const { Builder,By,Key } = require("selenium-webdriver")
//const assert = require('assert')
let should = require('chai').should()

describe("Add To Do Test",()=>{
    it("Successfully Adds To Do",async ()=>{
        let driver = await new Builder().forBrowser("firefox").build()

        await driver.get('https://lambdatest.github.io/sample-todo-app/')
        await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium', Key.RETURN);
        
        let todoText = await driver.findElement(By.xpath('//li[last()]/span')).getText().then((value) => {return value})
        todoText.should.equal('Learn Selenium')
        await driver.quit()

    })
})

// let example = async () => {
//     //launch browser
//     let driver = await new Builder().forBrowser("firefox").build()

//     //navigate to our app location
//     await driver.get('https://lambdatest.github.io/sample-todo-app/')

//     //add to do
//     await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium', Key.RETURN);

//     //assert added
//     let todoText = await driver.findElement(By.xpath('//li[last()]/span')).getText().then((value) => {return value})
//     //assert.strictEqual(todoText, "Learn Selenium")

//     //assert should
//     todoText.should.equal('Learn Selenium')
//     //close browser
//     await driver.quit()
// }

// example()
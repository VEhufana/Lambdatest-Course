require('geckodriver')
const { Builder,By,Key } = require("selenium-webdriver")
const LT_CAPABILITIES = require('../capabilities.js')
let should = require('chai').should()

const USERNAME = LT_CAPABILITIES.capabilities.user
const KEY = LT_CAPABILITIES.capabilities.accessKey
const GRID_HOST = "hub.lambdatest.com/wd/hub"

const GRID_URL = "https://" + USERNAME + ":" + KEY + "@" + GRID_HOST

describe("Add Another To Do Test",()=>{
    beforeEach(function(){
        LT_CAPABILITIES.capabilities.name = this.currentTest.title
        driver = new Builder().usingServer(GRID_URL).withCapabilities(LT_CAPABILITIES.capabilities).build();
        }
    )

    afterEach(()=>{
        driver.quit()
    }
    )
    it("Successfully Add Another To Do",async ()=>{
        //let driver = await new Builder().forBrowser("firefox").build()
       
        await driver.get('https://lambdatest.github.io/sample-todo-app/')
        await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium', Key.RETURN);
        
        let todoText = await driver.findElement(By.xpath('//li[last()]/span')).getText().then((value) => {return value})
        todoText.should.equal('Learn Selenium')

    })
    it("Successfully Add Another To Do",async ()=>{
        //let driver = await new Builder().forBrowser("firefox").build()
       
        await driver.get('https://lambdatest.github.io/sample-todo-app/')
        await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium', Key.RETURN);
        
        let todoText = await driver.findElement(By.xpath('//li[last()]/span')).getText().then((value) => {return value})
        todoText.should.equal('Learn Seleniums')

    })
})
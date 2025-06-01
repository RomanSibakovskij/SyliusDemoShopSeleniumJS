"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger = require("./utils/Logger");

class SingleCategoryDashboardPage extends BasePage{

    constructor(driver) {
        super(driver);

        //single category dashboard page web element
        this._singleCategoryDashboardPageTitle = By.xpath("//h1");
        this._singleCategoryDashboardPageSubtitle = By.xpath("//div[@class='col-12 col-lg-9']/div[@class='mb-4']/div");
        this._singleCategoryDashboardPageSearchInputField = By.xpath("//input[@id='criteria_search_value']");
        this._singleCategoryDashboardPageSearchButton = By.xpath("//button[@class='btn btn btn-outline-secondary btn-sm']");
        this._singleCategoryDashboardPageSearchCloseButton = By.xpath("//a[@class='btn btn btn-outline-secondary btn-sm']");
        this._singleCategoryDashboardPageShowSubtext = By.xpath("//div[@class='col-auto d-flex gap-2']/div[1]//span");
        this._singleCategoryDashboardPageShowDropdownButton = By.xpath("//div[@class='col-auto d-flex gap-2']/div[1]/button");
        this._singleCategoryDashboardPageShow27Option = By.xpath("//div[@class='dropdown-menu dropdown-menu-end show']/a[2]");
        this._singleCategoryDashboardPageSortBySubtext = By.xpath("//div[@class='col-auto d-flex gap-2']/div[2]//span");
        this._singleCategoryDashboardPageSortByDropdownMenu = By.xpath("//div[@class='col-auto d-flex gap-2']/div[2]/button");
        //sort by dropdown option elements
        this._singleCategoryDashboardPageSortByPositionOption = By.xpath("//div[@class='dropdown-menu dropdown-menu-end show']/a[1]");
        this._singleCategoryDashboardPageSortByNameAZOption = By.xpath("//div[@class='dropdown-menu dropdown-menu-end show']/a[2]");
        this._singleCategoryDashboardPageSortByNameZAOption = By.xpath("//div[@class='dropdown-menu dropdown-menu-end show']/a[3]");
        this._singleCategoryDashboardPageSortByNewestOption = By.xpath("//div[@class='dropdown-menu dropdown-menu-end show']/a[4]");
        this._singleCategoryDashboardPageSortByOldestOption = By.xpath("//div[@class='dropdown-menu dropdown-menu-end show']/a[5]");
        this._singleCategoryDashboardPageSortByCheapestOption = By.xpath("//div[@class='dropdown-menu dropdown-menu-end show']/a[6]");
        this._singleCategoryDashboardPageSortByMostExpensiveOption = By.xpath("//div[@class='dropdown-menu dropdown-menu-end show']/a[7]");
        //product list elements
        this._singleCategoryDashboardPageProductImageElements = By.xpath("//div[@class='products-grid']//img");
        this._singleCategoryDashboardPageProductLinkElements = By.xpath("//div[@class='products-grid']//a[@class='link-reset']");
        this._singleCategoryDashboardPageProductNameElements = By.xpath("//div[@class='products-grid']//div[@class='h6 text-break']");
        this._singleCategoryDashboardPageProductUnitPriceElements = By.xpath("//div[@class='products-grid']//span");
        this._singleCategoryDashboardPagePaginationButtonElements = By.xpath("//ul[@class='pagination justify-content-center mt-4']/li//a");

        //search input queries
        this._summerEleganceSearchQuery = "Classic Summer Elegance";
        this._seasideStrollSearchQuery = "Seaside Stroll Midi";
    }

    //click 'Show' dropdown button
    async clickShowDropdownButton(){
        const showDropdownButton = await this.driver.findElement(this._singleCategoryDashboardPageShowDropdownButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: showDropdownButton }).click().perform();
    }

    //single category dashboard page show dropdown option link click method
    async clickShow27Option() {
        const showOptionLink = await this.driver.findElement(this._singleCategoryDashboardPageShow27Option);
        showOptionLink.click();
    }

    //single category dashboard page sort by dropdown option link click methods

    //click 'Sort by' dropdown button
    async clickSortByDropdownButton(){
        const sortByDropdownButton = await this.driver.findElement(this._singleCategoryDashboardPageSortByDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: sortByDropdownButton }).click().perform();
    }

    //single category dashboard page sort by dropdown option link click methods
    async clickSortByPositionOption() {
        const sortByPositionOptionLink = await this.driver.findElement(this._singleCategoryDashboardPageSortByPositionOption);
        await this.driver.executeScript("arguments[0].click();", sortByPositionOptionLink);
    }
    async clickSortByNameAZOption() {
        const sortByNameAZOptionLink = await this.driver.findElement(this._singleCategoryDashboardPageSortByNameAZOption);
        await this.driver.executeScript("arguments[0].click();", sortByNameAZOptionLink);
    }
    async clickSortByNameZAOption() {
        const sortByNameZAOptionLink = await this.driver.findElement(this._singleCategoryDashboardPageSortByNameZAOption);
        await this.driver.executeScript("arguments[0].click();", sortByNameZAOptionLink);
    }
    async clickSortByNewestOption() {
        const sortByNewestOptionLink = await this.driver.findElement(this._singleCategoryDashboardPageSortByNewestOption);
        await this.driver.executeScript("arguments[0].click();", sortByNewestOptionLink);
    }
    async clickSortByOldestOption() {
        const sortByOldestOptionLink = await this.driver.findElement(this._singleCategoryDashboardPageSortByOldestOption);
        await this.driver.executeScript("arguments[0].click();", sortByOldestOptionLink);
    }
    async clickSortByCheapestOption() {
        const sortByCheapestOptionLink = await this.driver.findElement(this._singleCategoryDashboardPageSortByCheapestOption);
        await this.driver.executeScript("arguments[0].click();", sortByCheapestOptionLink);
    }
    async clickSortByExpensiveOption() {
        const sortByExpensiveOptionLink = await this.driver.findElement(this._singleCategoryDashboardPageSortByMostExpensiveOption);
        await this.driver.executeScript("arguments[0].click();", sortByExpensiveOptionLink);
    }

    //single category dashboard page set product link click method
    async clickSetSingleCategoryProductLink(index) {
        //find and list elements
        const singleCategoryProductLink = await this.driver.findElements(this._singleCategoryDashboardPageProductLinkElements);
        //assert list elements isn't empty
        if (singleCategoryProductLink.length === 0) {throw new Error("No product links found on single category dashboard page.");}

        //choose set product
        const setProductLink = singleCategoryProductLink[index];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", setProductLink);
        await this.driver.executeScript("arguments[0].click();", setProductLink);
    }

    //input "Classic Summer Elegance" into search input field
    async inputClassicSummerIntoSearchInputField(){
        const searchInputField = await this.driver.findElement(this._singleCategoryDashboardPageSearchInputField);
        const classicSummerQuery = this._summerEleganceSearchQuery;
        Logger.info("Set input search query: ", classicSummerQuery);
        await searchInputField.sendKeys(classicSummerQuery);
    }

    //input "Seaside Stroll Midi" into search input field
    async inputSeasideStrollIntoSearchInputField(){
        const searchInputField = await this.driver.findElement(this._singleCategoryDashboardPageSearchInputField);
        const seasideStrollQuery = this._seasideStrollSearchQuery;
        Logger.info("Set input search query: ", seasideStrollQuery);
        await searchInputField.sendKeys(seasideStrollQuery);
    }

    //click 'Search' button method
    async clickSearchButton(){
        const searchButton = await this.driver.findElement(this._singleCategoryDashboardPageSearchButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: searchButton }).click().perform();
    }

    //single category dashboard page getters
    async getSingleCategoryDashboardPageTitle(){
        const singleCategoryDashboardPageTitle = await this.driver.findElement(this._singleCategoryDashboardPageTitle);
        return await singleCategoryDashboardPageTitle.getText();
    }
    async getSingleCategoryDashboardPageSubtitle(){
        const singleCategoryDashboardPageSubtitle = await this.driver.findElement(this._singleCategoryDashboardPageSubtitle);
        return await singleCategoryDashboardPageSubtitle.getText();
    }
    async getSingleCategoryDashboardShowSubtext(){
        const singleCategoryDashboardPageShowSubtext = await this.driver.findElement(this._singleCategoryDashboardPageShowSubtext);
        return await singleCategoryDashboardPageShowSubtext.getText();
    }
    async getSingleCategoryDashboardSortBySubtext(){
        const singleCategoryDashboardPageSortBySubtext = await this.driver.findElement(this._singleCategoryDashboardPageSortBySubtext);
        return await singleCategoryDashboardPageSortBySubtext.getText();
    }

    //single category dashboard page product data getters
    async getSingleCategoryProductName() {
        const elements = await this.driver.findElements(this._singleCategoryDashboardPageProductNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get single category product name(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getSingleCategoryProductUnitPrice() {
        const elements = await this.driver.findElements(this._singleCategoryDashboardPageProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get single category product unit price(s):', error.message);
                    return '';
                }
            })
        );
    }

    //single category dashboard page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isSingleCategoryDashboardPagePageWebElementDisplayed(){
        const elementsToCheck = [
            this._singleCategoryDashboardPageTitle,
            this._singleCategoryDashboardPageSubtitle,
            this._singleCategoryDashboardPageSearchInputField,
            this._singleCategoryDashboardPageSearchButton,
            this._singleCategoryDashboardPageSearchCloseButton,
            this._singleCategoryDashboardPageShowSubtext,
            this._singleCategoryDashboardPageShowDropdownButton,
            this._singleCategoryDashboardPageSortBySubtext,
            this._singleCategoryDashboardPageSortByDropdownMenu,
            this._singleCategoryDashboardPageProductImageElements,
            this._singleCategoryDashboardPageProductLinkElements,
            this._singleCategoryDashboardPageProductNameElements,
            this._singleCategoryDashboardPageProductUnitPriceElements,
            this._singleCategoryDashboardPagePaginationButtonElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { SingleCategoryDashboardPage }
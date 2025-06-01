"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger  = require("./utils/Logger");

class HomePage extends BasePage{

    constructor(driver){
        super(driver)

        //home page web elements
        this._homePageMainImage = By.xpath("//div[@class='d-flex justify-content-center align-items-center position-relative']/img[1]");
        this._homePageMainImageLogo = By.xpath("//div[@class='d-flex justify-content-center align-items-center position-relative']/img[2]");
        //latest deals section
        this._homePageLatestDealsSectionSubtitle = By.xpath("//div[@class='container mb-6'][1]/h2");
        //product card elements
        this._homePageLatestDealsProductImageElements = By.xpath("//div[@class='container mb-6'][1]//div[@class='products-grid']//img");
        this._homePageLatestDealsProductNameLinkElements = By.xpath("//div[@class='container mb-6'][1]//div[@class='products-grid']//a[@class='link-reset']");
        this._homePageLatestDealsProductSpringSaleElements = By.xpath("//div[@class='container mb-6'][1]//div[@class='products-grid']//div[@class='mb-3']");
        this._homePageLatestDealsProductAddToWishlistButtonElements = By.xpath("//div[@class='container mb-6'][1]//div[@class='products-grid']//div[@class='my-3']/a");
        this._homePageLatestDealsProductUnitPriceElements = By.xpath("//div[@class='container mb-6'][1]//div[@class='products-grid']//span");
        //new collection section
        this._homePageNewCollectionSectionSubtitle = By.xpath("//div[@class='container mb-6'][2]//h2");
        //product image elements
        this._homePageNewCollectionProductImageElements = By.xpath("//div[@class='container mb-6'][2]//img");
        //product card elements
        this._homePageNewCollectionProductNameLinkElements = By.xpath("//div[@class='container mb-6'][2]//div[@class='products-grid']//a[@class='link-reset']");
        this._homePageNewCollectionProductAddToWishlistButtonElements = By.xpath("//div[@class='container mb-6'][2]//div[@class='products-grid']//div[@class='my-3']/a");
        this._homePageNewCollectionProductUnitPriceElements = By.xpath("//div[@class='container mb-6'][2]//div[@class='products-grid']//span");
        //latest products section
        this._homePageLatestProductsSectionSubtitle = By.xpath("//div[@class='container mb-6'][3]/h2");
        //product card elements
        this._homePageLatestProductsProductImageElements = By.xpath("//div[@class='container mb-6'][3]//img");
        this._homePageLatestProductsProductNameLinkElements = By.xpath("//div[@class='container mb-6'][3]//a[@class='link-reset']");
        this._homePageLatestProductsProductSpringSaleElements = By.xpath("//div[@class='container mb-6'][3]//div[@class='mb-3']");
        this._homePageLatestProductsAddToWishlistButtonElements = By.xpath("//div[@class='container mb-6'][1]//div[@class='products-grid']//div[@class='my-3']/a");
        this._homePageLatestProductsProductUnitPriceElements = By.xpath("//div[@class='container mb-6'][3]//span");

    }

    //home page latest deals product name link click method
    async clickLatestDealsProductNameLink(index) {
        //find and list elements
        const setLatestDealsProductNameLink = await this.driver.findElements(this._homePageLatestDealsProductNameLinkElements);
        //assert list elements isn't empty
        if (setLatestDealsProductNameLink.length === 0) {throw new Error("No 'latest deals' links found in latest deals section.");}

        //choose set product
        const latestDealsProductLink = setLatestDealsProductNameLink[index];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", latestDealsProductLink);
        await this.driver.executeScript("arguments[0].click();", latestDealsProductLink);
    }

    //home page latest deals product add to wishlist button click method
    async clickLatestDealsAddToWishlistLink(index) {
        //find and list elements
        const setLatestDealsProductAddToWishlistButton = await this.driver.findElements(this._homePageLatestDealsProductAddToWishlistButtonElements);
        //assert list elements isn't empty
        if (setLatestDealsProductAddToWishlistButton.length === 0) {throw new Error("No 'latest deals' add to wishlist buttons found in latest deals section.");}

        //choose set product
        const latestDealsProductAddToWishlistButton = setLatestDealsProductAddToWishlistButton[index];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", latestDealsProductAddToWishlistButton);
        await this.driver.executeScript("arguments[0].click();", latestDealsProductAddToWishlistButton);
    }

    //home page latest product name link click method
    async clickLatestProductNameLink(index) {
        //find and list elements
        const setLatestProductNameLink = await this.driver.findElements(this._homePageLatestProductsProductNameLinkElements);
        //assert list elements isn't empty
        if (setLatestProductNameLink.length === 0) {throw new Error("No 'latest product' links found in latest product section.");}

        //choose set product
        const latestProductLink = setLatestProductNameLink[index];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", latestProductLink);
        await this.driver.executeScript("arguments[0].click();", latestProductLink);
    }

    //home page product cards data getters
    //latest deals
    async getHomePageLatestDealsProductName() {
        const elements = await this.driver.findElements(this._homePageLatestDealsProductNameLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get latest deals product name(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getHomePageLatestDealsProductSpringSaleText() {
        const elements = await this.driver.findElements(this._homePageLatestDealsProductSpringSaleElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get latest deals product spring sale(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getHomePageLatestDealsProductUnitPrice() {
        const elements = await this.driver.findElements(this._homePageLatestDealsProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get latest deals product unit price(s):', error.message);
                    return '';
                }
            })
        );
    }

    //new collection
    async getHomePageNewCollectionProductName() {
        const elements = await this.driver.findElements(this._homePageNewCollectionProductNameLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get new collection product name(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getHomePageNewCollectionProductUnitPrice() {
        const elements = await this.driver.findElements(this._homePageNewCollectionProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get new collection product unit price(s):', error.message);
                    return '';
                }
            })
        );
    }

    //latest products
    async getHomePageLatestProductsProductName() {
        const elements = await this.driver.findElements(this._homePageLatestProductsProductNameLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get latest products product name(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getHomePageLatestProductsProductSpringSale() {
        const elements = await this.driver.findElements(this._homePageLatestProductsProductSpringSaleElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get latest products product spring sale(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getHomePageLatestProductsProductUnitPrice() {
        const elements = await this.driver.findElements(this._homePageLatestProductsProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get latest products product unit price(s):', error.message);
                    return '';
                }
            })
        );
    }

    //home page text element getters
    async getHomePageLatestDealsSectionSubtitle(){
        const latestDealsSectionSubtitle = await this.driver.findElement(this._homePageLatestDealsSectionSubtitle);
        return await latestDealsSectionSubtitle.getText();
    }
    async getHomePageNewCollectionSectionSubtitle(){
        const newCollectionSectionSubtitle = await this.driver.findElement(this._homePageNewCollectionSectionSubtitle);
        return await newCollectionSectionSubtitle.getText();
    }
    async getHomePageLatestProductsSectionSubtitle(){
        const latestProductsSectionSubtitle = await this.driver.findElement(this._homePageLatestProductsSectionSubtitle);
        return await latestProductsSectionSubtitle.getText();
    }

    //home page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isHomePagePageWebElementDisplayed(){
        const elementsToCheck = [
            this._homePageMainImage,
            this._homePageMainImageLogo,
            this._homePageLatestDealsSectionSubtitle,
            this._homePageLatestDealsProductImageElements,
            this._homePageLatestDealsProductNameLinkElements,
            //this._homePageLatestDealsProductSpringSaleElements,
            this._homePageLatestDealsProductAddToWishlistButtonElements,
            this._homePageLatestDealsProductUnitPriceElements,
            this._homePageNewCollectionSectionSubtitle,
            this._homePageNewCollectionProductImageElements,
            this._homePageNewCollectionProductNameLinkElements,
            this._homePageNewCollectionProductAddToWishlistButtonElements,
            this._homePageNewCollectionProductUnitPriceElements,
            this._homePageLatestProductsSectionSubtitle,
            this._homePageLatestProductsProductImageElements,
            this._homePageLatestProductsProductNameLinkElements,
            //this._homePageLatestProductsProductSpringSaleElements,
            this._homePageLatestProductsAddToWishlistButtonElements,
            this._homePageLatestProductsProductUnitPriceElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { HomePage }
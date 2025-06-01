"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger = require("./utils/Logger");

class WishlistPage extends BasePage{

    constructor(driver) {
        super(driver);

        //wishlist page web elements
        this._wishlistPageTitle = By.xpath("//h1");
        this._wishlistPageClearWishlistLink = By.xpath("//div[@class='d-flex flex-column flex-lg-row justify-content-between gap-2']/a");
        this._wishlistPageAddAnotherWishlistButton = By.xpath("//button[@id='create_new_wishlist_button']");
        //wishlist table elements
        this._wishlistPageTableItemSubtext = By.xpath("//div[@class='bb-wishlist-item-image']/span");
        this._wishlistPageTableAllItemsCheckbox = By.xpath("//input[@id='toggle-checkboxes']");
        this._wishlistPageTableItemCheckboxElements = By.xpath("//div[@class='form-check']/input");
        this._wishlistPageTableProductImgElements = By.xpath("//div[@class='bb-wishlist-item-image']/img");
        this._wishlistPageTableProductNameLinkElements = By.xpath("//div[@class='bb-wishlist-item-name']/a");
        this._wishlistPageTableProductSizeDropdownMenu = By.xpath("//div[@class='bb-wishlist-variant-option']/select");
        this._wishlistPageTableProductUnitPriceSubtext = By.xpath("//div[@class='bb-wishlist-item-price']/span");
        this._wishlistPageTableProductUnitPriceElements = By.xpath("//div[@class='bb-wishlist-item-price']/b");
        this._wishlistPageTableProductQtySubtext = By.xpath("//div[@class='bb-wishlist-item-quantity']/span");
        this._wishlistPageTableProductQtyInputFieldElements = By.xpath("//div[@class='bb-wishlist-item-quantity']/input");
        this._wishlistPageTableActionsSubtext = By.xpath("//div[@class='bb-wishlist-item-actions']/span");
        this._wishlistPageTableRemoveButtonElements = By.xpath("//div[@class='bb-wishlist-item-actions']/a");
        //new wishlist modal elements
        this._wishlistPageNewWishlistModalTitle= By.xpath("//form[@id='create_new_wishlist']/header");
        this._wishlistPageNewWishlistModalInputField = By.xpath("//form[@id='create_new_wishlist']//input");
        this._wishlistPageNewWishlistModalCancelButton = By.xpath("//form[@id='create_new_wishlist']//button[1]");
        this._wishlistPageNewWishlistModalPerformButton = By.xpath("//form[@id='create_new_wishlist']//button[2]");
        //button elements
        this._wishlistPageBulkActionsDropdownMenu = By.xpath("//div[@class='dropdown bb-colective-actions enabled']/button"); //activated after item checkbox selection
        this._wishlistPageBulkActionsAddToCartOptionButton = By.xpath("//ul[@class='dropdown-menu p-2 show']/li[1]/button"); //activated after bulk actions dropdown menu click
        this._wishlistPageImportFromCSVButton = By.xpath("//div[@class='bb-wishlist-actions flex-column flex-lg-row align-items-stretch align-items-lg-center gap-2']/a");
        this._wishlistPageAddWishlistItemsToCartButton = By.xpath("//button[@id='wishlist_collection_addAll']");

        //new wishlist title data
        this._newWishlistTitle = "New test wishlist";
    }

    //wishlist page product data getters
    async getWishlistPageProductName(){
        const elements = await this.driver.findElements(this._wishlistPageTableProductNameLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get wishlist page product name(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getWishlistPageProductUnitPrice(){
        const elements = await this.driver.findElements(this._wishlistPageTableProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get wishlist page product unit price(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getWishlistPageProductQuantity(){
        const elements = await this.driver.findElements(this._wishlistPageTableProductQtyInputFieldElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getDomAttribute("value");
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get wishlist page product quantity(ies):', error.message);
                    return '';
                }
            })
        );
    }

    //click 'Add all wishlist items to cart' button method
    async clickAddWishlistItemsToCartButton(){
        const addWishlistItemsToCartButton = await this.driver.findElement(this._wishlistPageAddWishlistItemsToCartButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: addWishlistItemsToCartButton }).click().perform();
    }

    //click all items checkbox button method
    async clickAllItemsCheckbox(){
        const allItemsCheckbox = await this.driver.findElement(this._wishlistPageTableAllItemsCheckbox);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: allItemsCheckbox }).click().perform();
    }

    //click bulk actions dropdown menu method
    async clickBulkActionsDropdownMenu(){
        const bulkActionsDropdownMenu = await this.driver.findElement(this._wishlistPageBulkActionsDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: bulkActionsDropdownMenu }).click().perform();
    }

    //click 'Add to cart' bulk actions menu button
    async clickAddToCartBulkButton(){
        const addToCartBulkButton = await this.driver.findElement(this._wishlistPageBulkActionsAddToCartOptionButton);
        addToCartBulkButton.click();
    }

    //click 'Clear wishlist' link method
    async clickClearWishlistLink(){
        const clearWishlistLink = await this.driver.findElement(this._wishlistPageClearWishlistLink)
        clearWishlistLink.click();
    }

    //click 'Add another wishlist' button method
    async clickAddAnotherWishlistButton(){
        const addAnotherWishlistButton = await this.driver.findElement(this._wishlistPageAddAnotherWishlistButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: addAnotherWishlistButton }).click().perform();
    }

    //input new wishlist title into wishlist title input field method
    async inputNewWishlistTitleIntoWishlistTitleInputField(){
        const newWishlistTitleInputField = await this.driver.findElement(this._wishlistPageNewWishlistModalInputField);
        const newWishlistTitle = this._newWishlistTitle;
        Logger.info("Generated new wishlist title: " + newWishlistTitle);
        await newWishlistTitleInputField.sendKeys(newWishlistTitle);
    }

    //click new wishlist modal 'Perform' button method
    async clickPerformButton(){
        const newWishlistModalPerformButton = await this.driver.findElement(this._wishlistPageNewWishlistModalPerformButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: newWishlistModalPerformButton }).click().perform();
    }

    //wishlist page text element getters
    async getWishlistPageTitle(){
        const wishlistPageTitle = await this.driver.findElement(this._wishlistPageTitle);
        return await wishlistPageTitle.getText();
    }
    async getWishlistPageTableItemSubtext(){
        const wishlistPageTableItemSubtext = await this.driver.findElement(this._wishlistPageTableItemSubtext);
        return await wishlistPageTableItemSubtext.getText();
    }
    async getWishlistPageTableProductUnitPriceSubtext(){
        const wishlistPageTableProductUnitPriceSubtext = await this.driver.findElement(this._wishlistPageTableProductUnitPriceSubtext);
        return await wishlistPageTableProductUnitPriceSubtext.getText();
    }
    async getWishlistPageTableProductQtySubtext(){
        const wishlistPageTableProductQtySubtext = await this.driver.findElement(this._wishlistPageTableProductQtySubtext);
        return await wishlistPageTableProductQtySubtext.getText();
    }
    async getWishlistPageTableActionsSubtext(){
        const wishlistPageTableActionsSubtext = await this.driver.findElement(this._wishlistPageTableActionsSubtext);
        return await wishlistPageTableActionsSubtext.getText();
    }
    async getNewWishlistModalTitle(){
        const wishlistModalTitle = await this.driver.findElement(this._wishlistPageNewWishlistModalTitle);
        return await wishlistModalTitle.getText();
    }

    //wishlist page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isWishlistPageWebElementDisplayed(){
        const elementsToCheck = [
            this._wishlistPageTitle,
            this._wishlistPageClearWishlistLink,
            this._wishlistPageAddAnotherWishlistButton,
            this._wishlistPageTableItemSubtext,
            this._wishlistPageTableAllItemsCheckbox,
            this._wishlistPageTableItemCheckboxElements,
            this._wishlistPageTableProductImgElements,
            this._wishlistPageTableProductNameLinkElements,
            //this._wishlistPageTableProductSizeDropdownMenu,
            this._wishlistPageTableProductUnitPriceSubtext,
            this._wishlistPageTableProductUnitPriceElements,
            this._wishlistPageTableProductQtySubtext,
            this._wishlistPageTableProductQtyInputFieldElements,
            this._wishlistPageTableActionsSubtext,
            this._wishlistPageTableRemoveButtonElements,
            this._wishlistPageImportFromCSVButton,
            this._wishlistPageAddWishlistItemsToCartButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isNewWishlistModalWebElementDisplayed(){
        const elementsToCheck = [
            this._wishlistPageNewWishlistModalTitle,
            this._wishlistPageNewWishlistModalInputField,
            this._wishlistPageNewWishlistModalCancelButton,
            this._wishlistPageNewWishlistModalPerformButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { WishlistPage }
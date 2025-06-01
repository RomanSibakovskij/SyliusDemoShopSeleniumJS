"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger = require("./utils/Logger");

class ShoppingCartPage extends BasePage{

    constructor(driver) {
        super(driver);

        //shopping cart page web elements
        this._shoppingCartPageTitle = By.xpath("//h1");
        this._shoppingCartPageSubtitle = By.xpath("//div[@class='mb-5']/div");
        //table elements
        this._shoppingCartPageTableItemSubtext = By.xpath("//table[@class='table align-middle']/thead//th[2]");
        this._shoppingCartPageTableSubscriptionSubtext = By.xpath("//table[@class='table align-middle']/thead//th[3]");
        this._shoppingCartPageTableUnitPriceSubtext = By.xpath("//table[@class='table align-middle']/thead//th[4]");
        this._shoppingCartPageTableQtySubtext = By.xpath("//table[@class='table align-middle']/thead//th[5]");
        this._shoppingCartPageTableTotalSubtext = By.xpath("//table[@class='table align-middle']/thead//th[6]");
        //table list elements
        this._shoppingCartPageTableRemoveButtonElements = By.xpath("//table[@class='table align-middle']/tbody/tr/td[1]/button");
        this._shoppingCartPageTableProductImageElements = By.xpath("//table[@class='table align-middle']/tbody/tr/td[2]//img");
        this._shoppingCartPageTableProductNameLinkElements = By.xpath("//table[@class='table align-middle']/tbody/tr/td[2]//a");
        this._shoppingCartPageTableProductDescriptionElements = By.xpath("//table[@class='table align-middle']/tbody/tr/td[2]//small");
        this._shoppingCartPageTableProductSubscriptionElements = By.xpath("//table[@class='table align-middle']/tbody/tr/td[3]");
        this._shoppingCartPageTableProductUnitPriceElements = By.xpath("//table[@class='table align-middle']/tbody/tr/td[4]/span");
        this._shoppingCartPageTableProductQtyInputFieldElements = By.xpath("//table[@class='table align-middle']/tbody/tr/td[5]//input");
        this._shoppingCartPageTableProductTotalPriceElements = By.xpath("//table[@class='table align-middle']/tbody/tr/td[6]/span");
        //table singular elements
        this._shoppingCartPageTableCouponInputField = By.xpath("//input[@id='sylius_shop_cart_promotionCoupon']");
        this._shoppingCartPageTableApplyCouponButton = By.xpath("//button[@class='btn btn-outline-gray']");
        this._shoppingCartPageTableClearCartButton = By.xpath("//button[@class='btn btn-light']");
        //summary section
        this._shoppingCartPageSummarySubtitle = By.xpath("//h3");
        this._shoppingCartPageItemsTotalSubtext = By.xpath("//div[@class='p-4 bg-light mb-4 rounded-3']/div[1]/div[1]");
        this._shoppingCartPageItemsTotalPrice = By.xpath("//div[@class='p-4 bg-light mb-4 rounded-3']/div[1]/div[2]");
        this._shoppingCartPageEstimatedCostSubtext = By.xpath("//div[@class='p-4 bg-light mb-4 rounded-3']/div[2]/div[1]");
        this._shoppingCartPageEstimatedCost = By.xpath("//div[@class='p-4 bg-light mb-4 rounded-3']/div[2]/div[2]");
        this._shoppingCartPageTaxesTotalSubtext = By.xpath("//div[@class='p-4 bg-light mb-4 rounded-3']/div[3]/div[1]");
        this._shoppingCartPageTaxesTotal = By.xpath("//div[@class='p-4 bg-light mb-4 rounded-3']/div[3]/div[2]");
        this._shoppingCartPageOrderTotalSubtext = By.xpath("//div[@class='p-4 bg-light mb-4 rounded-3']/div[4]/div[1]");
        this._shoppingCartPageOrderTotalPrice = By.xpath("//div[@class='p-4 bg-light mb-4 rounded-3']/div[4]/div[2]");
        //button elements
        this._shoppingCartPageClearCartButton = By.xpath("//button[@class='btn btn-light']");
        this._shoppingCartPageCheckoutButton = By.xpath("//button[@class='btn btn-primary']");
        this._shoppingCartPagePaypalCheckoutButton = By.xpath("//div[@id='paypal-button-container']/div");
        //may like section
        this._shoppingCartPageMayLikeSectionSubtitle = By.xpath("//div[@class='container mb-6']/h2");
        //list elements
        this._shoppingCartPageMayLikeProductImageElements = By.xpath("//div[@class='container mb-6']//img");
        this._shoppingCartPageMayLikeProductNameElements = By.xpath("//div[@class='container mb-6']//div[@class='h6 text-break']");
        this._shoppingCartPageMayLikeProductSpringSaleElements = By.xpath("//div[@class='products-grid']//div[@class='mb-3']");
        this._shoppingCartPageMayLikeProductUnitPriceElements = By.xpath("//div[@class='container mb-6']//span");
        //shopping cart info box text element
        this._shoppingCartInfoBoxText = By.xpath("//div[@class='alert alert-info']");

        //set quantity input field
        this._setQuantity = 7;
    }

    //input quantity into quantity input field
    async inputQuantityIntoQuantityInputField(index){
        const quantityInputField = await this.driver.findElements(this._shoppingCartPageTableProductQtyInputFieldElements);
        const setQtyInputField = quantityInputField[index];
        await setQtyInputField.clear();
        const setQuantity = this._setQuantity;
        Logger.info("Set quantity input: ", setQuantity);
        await new Promise(resolve => setTimeout(resolve, 900));
        await setQtyInputField.sendKeys(setQuantity);
    }

    //click 'Checkout' button method
    async clickCheckoutButton(){
        const checkoutButton = await this.driver.findElement(this._shoppingCartPageCheckoutButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: checkoutButton }).click().perform();
    }

    //click 'Remove' product button method
    async clickRemoveProductButton(index){
        const removeButtonElements = await this.driver.findElements(this._shoppingCartPageTableRemoveButtonElements);
        const setRemoveButton = removeButtonElements[index];
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: setRemoveButton }).click().perform();
    }

    //click 'Clear Cart' button method
    async clickClearCartButton(){
        const clearCartButton = await this.driver.findElement(this._shoppingCartPageClearCartButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: clearCartButton }).click().perform();
    }

    //shopping cart page product data getters
    async getShoppingCartTableProductName() {
        const elements = await this.driver.findElements(this._shoppingCartPageTableProductNameLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart table product name(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getShoppingCartTableProductDescription() {
        const elements = await this.driver.findElements(this._shoppingCartPageTableProductDescriptionElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart table product description(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getShoppingCartTableProductUnitPrice() {
        const elements = await this.driver.findElements(this._shoppingCartPageTableProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart table product unit price(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getShoppingCartTableProductQuantity() {
        const elements = await this.driver.findElements(this._shoppingCartPageTableProductQtyInputFieldElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getDomAttribute("value");
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart table product quantity(ies):', error.message);
                    return '';
                }
            })
        );
    }

    async getShoppingCartTableProductTotalPrice() {
        const elements = await this.driver.findElements(this._shoppingCartPageTableProductTotalPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart table product total price(s):', error.message);
                    return '';
                }
            })
        );
    }

    //summary section
    async getShoppingCartItemsTotalPrice(){
        const shoppingCartItemsTotalPrice = await this.driver.findElement(this._shoppingCartPageItemsTotalPrice);
        return await shoppingCartItemsTotalPrice.getText();
    }
    async getShoppingCartEstimatedCost(){
        const shoppingCartEstimatedCost = await this.driver.findElement(this._shoppingCartPageEstimatedCost);
        return await shoppingCartEstimatedCost.getText();
    }
    async getShoppingCartTaxesTotal(){
        const shoppingCartTaxesTotal = await this.driver.findElement(this._shoppingCartPageTaxesTotal);
        const fullText = await shoppingCartTaxesTotal.getText();
        //split the text after ":"
        return fullText.split(':')[0];
    }
    async getShoppingCartOrderTotalPrice(){
        const shoppingCartOrderTotalPrice = await this.driver.findElement(this._shoppingCartPageOrderTotalPrice);
        return await shoppingCartOrderTotalPrice.getText();
    }

    //may like section
    async getShoppingCartMayLikeSectionProductName() {
        const elements = await this.driver.findElements(this._shoppingCartPageMayLikeProductNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart may like section product name(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getShoppingCartMayLikeSectionProductSpringSale() {
        const elements = await this.driver.findElements(this._shoppingCartPageMayLikeProductSpringSaleElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart may like section product spring sale tag(s) text:', error.message);
                    return '';
                }
            })
        );
    }

    async getShoppingCartMayLikeSectionProductUnitPrice() {
        const elements = await this.driver.findElements(this._shoppingCartPageMayLikeProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart may like section product unit price(s):', error.message);
                    return '';
                }
            })
        );
    }

    //shopping cart text element getters
    async getShoppingCartTitle(){
        const shoppingCartTitle = await this.driver.findElement(this._shoppingCartPageTitle);
        return await shoppingCartTitle.getText();
    }
    async getShoppingCartSubtitle(){
        const shoppingCartSubtitle = await this.driver.findElement(this._shoppingCartPageSubtitle);
        return await shoppingCartSubtitle.getText();
    }
    //table elements
    async getShoppingCartTableItemSubtext(){
        const shoppingCartTableItemSubtext = await this.driver.findElement(this._shoppingCartPageTableItemSubtext);
        return await shoppingCartTableItemSubtext.getText();
    }
    async getShoppingCartTableUnitPriceSubtext(){
        const shoppingCartTableUnitPriceSubtext = await this.driver.findElement(this._shoppingCartPageTableUnitPriceSubtext);
        return await shoppingCartTableUnitPriceSubtext.getText();
    }
    async getShoppingCartTableSubscriptionSubtext(){
        const shoppingCartTableSubscriptionSubtext = await this.driver.findElement(this._shoppingCartPageTableSubscriptionSubtext);
        return await shoppingCartTableSubscriptionSubtext.getText();
    }
    async getShoppingCartTableQtySubtext(){
        const shoppingCartTableQtySubtext = await this.driver.findElement(this._shoppingCartPageTableQtySubtext);
        return await shoppingCartTableQtySubtext.getText();
    }
    async getShoppingCartTableTotalSubtext(){
        const shoppingCartTableTotalSubtext = await this.driver.findElement(this._shoppingCartPageTableTotalSubtext);
        return await shoppingCartTableTotalSubtext.getText();
    }
    //summary section
    async getShoppingCartPageSummarySubtitle(){
        const shoppingCartPageSummarySubtitle = await this.driver.findElement(this._shoppingCartPageSummarySubtitle);
        return await shoppingCartPageSummarySubtitle.getText();
    }
    async getShoppingCartPageItemsTotalSubtext(){
        const shoppingCartPageItemsTotalSubtext = await this.driver.findElement(this._shoppingCartPageItemsTotalSubtext);
        return await shoppingCartPageItemsTotalSubtext.getText();
    }
    async getShoppingCartPageEstCostSubtext(){
        const shoppingCartPageEstCostSubtext = await this.driver.findElement(this._shoppingCartPageEstimatedCostSubtext);
        return await shoppingCartPageEstCostSubtext.getText();
    }
    async getShoppingCartPageTaxesTotalSubtext(){
        const shoppingCartPageTaxesTotalSubtext = await this.driver.findElement(this._shoppingCartPageTaxesTotalSubtext);
        const fullText = await shoppingCartPageTaxesTotalSubtext.getText();
        return fullText.split('\n')[0];
    }
    async getShoppingCartPageOrderTotalSubtext(){
        const shoppingCartPageOrderTotalSubtext = await this.driver.findElement(this._shoppingCartPageOrderTotalSubtext);
        return await shoppingCartPageOrderTotalSubtext.getText();
    }
    //may like section
    async getShoppingCartPageMayLikeSectionSubtitle(){
        const shoppingCartPageMayLikeSectionSubtitle = await this.driver.findElement(this._shoppingCartPageMayLikeSectionSubtitle);
        return await shoppingCartPageMayLikeSectionSubtitle.getText();
    }

    //shopping cart info box text getter
    async getShoppingCartInfoBoxText(){
        const shoppingCartInfoBoxText = await this.driver.findElement(this._shoppingCartInfoBoxText);
        return await shoppingCartInfoBoxText.getText();
    }

    //shopping cart page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isShoppingCartPageWebElementDisplayed(){
        const elementsToCheck = [
            this._shoppingCartPageTitle,
            this._shoppingCartPageSubtitle,
            this._shoppingCartPageTableItemSubtext,
            this._shoppingCartPageTableUnitPriceSubtext,
            this._shoppingCartPageTableQtySubtext,
            this._shoppingCartPageTableTotalSubtext,
            this._shoppingCartPageTableRemoveButtonElements,
            this._shoppingCartPageTableProductImageElements,
            this._shoppingCartPageTableProductNameLinkElements,
            this._shoppingCartPageTableProductDescriptionElements,
            this._shoppingCartPageTableSubscriptionSubtext,
            this._shoppingCartPageTableProductUnitPriceElements,
            this._shoppingCartPageTableProductSubscriptionElements,
            this._shoppingCartPageTableProductQtyInputFieldElements,
            this._shoppingCartPageTableProductTotalPriceElements,
            this._shoppingCartPageTableCouponInputField,
            this._shoppingCartPageTableApplyCouponButton,
            this._shoppingCartPageTableClearCartButton,
            this._shoppingCartPageSummarySubtitle,
            this._shoppingCartPageItemsTotalSubtext,
            this._shoppingCartPageItemsTotalPrice,
            this._shoppingCartPageEstimatedCostSubtext,
            this._shoppingCartPageEstimatedCost,
            this._shoppingCartPageTaxesTotalSubtext,
            this._shoppingCartPageTaxesTotal,
            this._shoppingCartPageOrderTotalSubtext,
            this._shoppingCartPageOrderTotalPrice,
            this._shoppingCartPageClearCartButton,
            this._shoppingCartPageCheckoutButton,
            this._shoppingCartPagePaypalCheckoutButton,
            this._shoppingCartPageMayLikeSectionSubtitle,
            this._shoppingCartPageMayLikeProductImageElements,
            this._shoppingCartPageMayLikeProductNameElements,
            //this._shoppingCartPageMayLikeProductSpringSaleElements,
            this._shoppingCartPageMayLikeProductUnitPriceElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { ShoppingCartPage }
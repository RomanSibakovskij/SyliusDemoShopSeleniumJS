"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger = require("./utils/Logger");

class SingleProductPage extends BasePage{

    constructor(driver) {
        super(driver);

        //single product page web elements
        this._singleProductPageTitle = By.xpath("//h1");
        this._singleProductPageReviewStarsElements = By.xpath("//div[@class='row mb-2']/div[1]//label");
        this._singleProductPageReviewStarsCounter = By.xpath("//div[@class='row mb-2']/div[2]");
        this._singleProductPageAddReviewLink = By.xpath("//div[@class='row mb-2']//a");
        //product data elements
        this._singleProductPageProductMainImage = By.xpath("//div[@class='col pe-lg-5 pe-xxl-5']//img");
        this._singleProductPageProductImageElements = By.xpath("//div[@class='d-flex flex-column gap-3 gap-xxl-4']//img");
        this._singleProductPageProductUnitPrice = By.xpath("//div[@class='fs-3']");
        this._singleProductPageProductSizeSubtext = By.xpath("//form/div[1]/div[1]/label");
        this._singleProductPageProductSizeDropdownMenu = By.xpath("//form/div[1]/div[1]/select");
        this._singleProductPageProductSizeLOption = By.xpath("//form/div[1]/div[1]/select/option[3]");
        this._singleProductPageProductHeightSubtext = By.xpath("//form/div[1]/div[2]/label");
        this._singleProductPageProductHeightDropdownMenu = By.xpath("//form/div[1]/div[2]/select");
        this._singleProductPageProductHeightRegularOption = By.xpath("//form/div[1]/div[2]/select/option[2]");
        this._singleProductPageProductQuantitySubtext = By.xpath("//form/div[2]/div/label");
        this._singleProductPageProductQuantityInputField = By.xpath("//input[@id='sylius_shop_add_to_cart_cartItem_quantity']");
        this._singleProductPageProductAddToCartButton = By.xpath("//button[@id='add-to-cart-button']");
        this._singleProductPageProductAddToWishlistButton = By.xpath("//form[@name='add_to_wishlist']/button");
        this._singleProductPageProductPaypalCheckoutButton = By.xpath("//div[@id='paypal-button-container']");
        this._singleProductPageProductShortDescription = By.xpath("//div[@class='sticky-top pt-2']/div[7]");
        this._singleProductPageProductTag = By.xpath("//small[@class='text-body-tertiary']");
        //details section
        this._singleProductPageProductDetailsDropdownButton = By.xpath("//div[@class='accordion-item'][1]//button");
        this._singleProductPageProductDetailsDropdownSubtext = By.xpath("//div[@class='accordion-item'][1]/h2");
        this._singleProductPageProductDescription = By.xpath("//div[@id='details']");
        //attributes section
        this._singleProductPageProductAttributesDropdownButton = By.xpath("//div[@class='accordion-item'][2]//button");
        this._singleProductPageProductAttributesDropdownSubtext = By.xpath("//div[@class='accordion-item'][2]/h2");
        this._singleProductPageProductBrand = By.xpath("//div[@id='attributes']//table/tbody/tr[1]/td");
        this._singleProductPageProductCollection = By.xpath("//div[@id='attributes']//table/tbody/tr[2]/td");
        this._singleProductPageProductMaterial = By.xpath("//div[@id='attributes']//table/tbody/tr[3]/td");
        //reviews section
        this._singleProductPageProductReviewsDropdownButton = By.xpath("//div[@class='accordion-item'][3]//button");
        this._singleProductPageProductReviewsDropdownSubtext = By.xpath("//div[@class='accordion-item'][3]/h2");
        this._singleProductPageProductReviewsInfoBoxText = By.xpath("//div[@id='reviews']//div[@class='alert alert-info']");
        this._singleProductPageProductAddReviewButton = By.xpath("//div[@id='reviews']//a");
        //may also like section elements
        this._singleProductPageMayLikeProductsSectionSubtitle = By.xpath("//div[@class='cms_content_element__heading mb-3'][1]/h2");
        this._singleProductPageMayLikeProductsImageElements = By.xpath("//div[@class='swiper-wrapper']//img");
        this._singleProductPageMayLikeProductsNameElements = By.xpath("//div[@class='swiper-wrapper']//div[@class='h6 text-break']");
        this._singleProductPageMayLikeProductsUnitPriceElements = By.xpath("//div[@class='swiper-wrapper']/div/div//span");
        this._singleProductPageMayLikeSectionPreviousButton = By.xpath("//div[@class='btn btn-primary swiper-button-prev position-absolute top-50 start-0 z-1 translate-x-middle ms-2 opacity-75']");
        this._singleProductPageMayLikeSectionNextButton = By.xpath("//div[@class='btn btn-primary swiper-button-next position-absolute top-50 start-0 z-1 translate-x-middle ms-2 opacity-75']");
        //best sales products section elements
        this._singleProductPageBestSalesProductsSectionSubtitle = By.xpath("//div[@class='cms_content_element__heading mb-3'][2]/h2");
        this._singleProductPageBestSalesProductsImageElements = By.xpath("//div[@class='products-grid']//img");
        this._singleProductPageBestSalesProductsNameElements = By.xpath("//div[@class='products-grid']//div[@class='h6 text-break']");
        this._singleProductPageBestSalesProductsUnitPriceElements = By.xpath("//div[@class='products-grid']/div/div//span");

        //addition to cart success message
        this._productAdditionToCartSuccessMessage = By.xpath("//div[@role='alert']");
    }

    //click 'Attributes' dropdown button method
    async clickAttributesDropdownButton(){
        const attributesDropdownButton = await this.driver.findElement(this._singleProductPageProductAttributesDropdownButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: attributesDropdownButton }).click().perform();
    }

    //click 'Reviews' dropdown button method
    async clickReviewsDropdownButton(){
        const reviewsDropdownButton = await this.driver.findElement(this._singleProductPageProductReviewsDropdownButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: reviewsDropdownButton }).click().perform();
    }

    //click 'Size' dropdown menu method
    async clickSizeDropdownButton(){
        const sizeDropdownButton = await this.driver.findElement(this._singleProductPageProductSizeDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: sizeDropdownButton }).click().perform();
    }

    //select 'L' size option method
    async selectLSizeOption(){
        const sizeLOption = await this.driver.findElement(this._singleProductPageProductSizeLOption);
        sizeLOption.click();
    }

    //click 'Height' dropdown menu method
    async clickHeightDropdownButton(){
        const heightDropdownButton = await this.driver.findElement(this._singleProductPageProductHeightDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: heightDropdownButton }).click().perform();
    }

    //select 'Regular' height option method
    async selectRegularHeightOption(){
        const regularHeightOption = await this.driver.findElement(this._singleProductPageProductHeightRegularOption);
        regularHeightOption.click();
    }

    //click 'Add your review' link method
    async clickAddReviewLink(){
        const addReviewLink = await this.driver.findElement(this._singleProductPageAddReviewLink);
        addReviewLink.click();
    }

    //input product quantity method
    async inputProductQuantity() {
        const productQuantityInputField = await this.driver.findElement(this._singleProductPageProductQuantityInputField);
        productQuantityInputField.clear();
        const productQuantity = 5;
        Logger.info("Input set product quantity: ", productQuantity);
        await new Promise(resolve => setTimeout(resolve, 900));
        await productQuantityInputField.sendKeys(productQuantity);
    }

    //click 'Add to wishlist' button method
    async clickAddToWishlistButton(){
        const addToWishlistButton = await this.driver.findElement(this._singleProductPageProductAddToWishlistButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: addToWishlistButton }).click().perform();
    }

    //click 'Add to cart' button method
    async clickAddToCartButton(){
        const addToCartButton = await this.driver.findElement(this._singleProductPageProductAddToCartButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: addToCartButton }).click().perform();
    }

    //single product page product data getters
    async getSingleProductPageReviewCount(){
        const singleProductPageReviewCount = await this.driver.findElement(this._singleProductPageReviewStarsCounter);
        return await singleProductPageReviewCount.getText();
    }
    async getSingleProductPageProductUnitPrice(){
        const singleProductPageProductUnitPrice = await this.driver.findElement(this._singleProductPageProductUnitPrice);
        return await singleProductPageProductUnitPrice.getText();
    }
    async getSingleProductPageProductShortDescription(){
        const singleProductPageProductShortDescription = await this.driver.findElement(this._singleProductPageProductShortDescription);
        return await singleProductPageProductShortDescription.getText();
    }
    async getSingleProductPageProductTag(){
        const singleProductPageProductTag = await this.driver.findElement(this._singleProductPageProductTag);
        return await singleProductPageProductTag.getText();
    }
    async getSingleProductPageProductDescription(){
        const singleProductPageProductDescription = await this.driver.findElement(this._singleProductPageProductDescription);
        return await singleProductPageProductDescription.getText();
    }
    async getSingleProductPageProductBrand(){
        const singleProductPageProductBrand = await this.driver.findElement(this._singleProductPageProductBrand);
        return await singleProductPageProductBrand.getText();
    }
    async getSingleProductPageProductCollection(){
        const singleProductPageProductCollection = await this.driver.findElement(this._singleProductPageProductCollection);
        return await singleProductPageProductCollection.getText();
    }
    async getSingleProductPageProductMaterial(){
        const singleProductPageProductMaterial = await this.driver.findElement(this._singleProductPageProductMaterial);
        return await singleProductPageProductMaterial.getText();
    }

    //you may like products data getters
    async getSingleProductMayLikeProductName() {
        const elements = await this.driver.findElements(this._singleProductPageMayLikeProductsNameElements);

        const names = await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get "You may also like" product name (single product page):', error.message);
                    return '';
                }
            })
        );

        //remove empty strings
        return names.filter(name => name);
    }

    async getSingleProductMayLikeProductUnitPrice() {
        const elements = await this.driver.findElements(this._singleProductPageMayLikeProductsUnitPriceElements);

        const prices = await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get "You may also like" product unit price (single product page):', error.message);
                    return '';
                }
            })
        );

        //remove empty strings
        return prices.filter(price => price);
    }

    //best sales products
    async getSingleProductBestSalesProductName() {
        const elements = await this.driver.findElements(this._singleProductPageBestSalesProductsNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get best sales product name(s) (single product page):', error.message);
                    return '';
                }
            })
        );
    }
    async getSingleProductBestSalesProductUnitPrice() {
        const elements = await this.driver.findElements(this._singleProductPageBestSalesProductsUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get best sales product unit price(s) (single product page):', error.message);
                    return '';
                }
            })
        );
    }

    //single product page text element getters
    async getSingleProductPageTitle(){
        const singleProductPage = await this.driver.findElement(this._singleProductPageTitle);
        return await singleProductPage.getText();
    }
    async getSingleProductPageSizeSubtext(){
        const singleProductPageSizeSubtext = await this.driver.findElement(this._singleProductPageProductSizeSubtext);
        return await singleProductPageSizeSubtext.getText();
    }
    async getSingleProductPageHeightSubtext(){
        const singleProductPageHeightSubtext = await this.driver.findElement(this._singleProductPageProductHeightSubtext);
        return await singleProductPageHeightSubtext.getText();
    }
    async getSingleProductPageQuantitySubtext(){
        const singleProductPageQtySubtext = await this.driver.findElement(this._singleProductPageProductQuantitySubtext);
        return await singleProductPageQtySubtext.getText();
    }
    async getSingleProductPageDetailsDropdownSubtext(){
        const singleProductPageDetailsDropdownSubtext = await this.driver.findElement(this._singleProductPageProductDetailsDropdownSubtext);
        return await singleProductPageDetailsDropdownSubtext.getText();
    }
    async getSingleProductPageAttributesDropdownSubtext(){
        const singleProductPageAttributesDropdownSubtext = await this.driver.findElement(this._singleProductPageProductAttributesDropdownSubtext);
        return await singleProductPageAttributesDropdownSubtext.getText();
    }
    async getSingleProductPageReviewsDropdownSubtext(){
        const singleProductPageReviewsDropdownSubtext = await this.driver.findElement(this._singleProductPageProductReviewsDropdownSubtext);
        const fullText = await singleProductPageReviewsDropdownSubtext.getText();
        //split the text after " "
        return fullText.split(' ')[0];
    }
    async getSingleProductPageMayLikeSectionSubtitle(){
        const singleProductPageMayLikeSectionSubtitle = await this.driver.findElement(this._singleProductPageMayLikeProductsSectionSubtitle);
        return await singleProductPageMayLikeSectionSubtitle.getText();
    }
    async getSingleProductPageBestSalesSectionSubtitle(){
        const singleProductPageBestSalesSectionSubtitle = await this.driver.findElement(this._singleProductPageBestSalesProductsSectionSubtitle);
        return await singleProductPageBestSalesSectionSubtitle.getText();
    }
    async getSingleProductPageReviewsInfoBoxText(){
        const singleProductPageProductReviewsInfoBoxText = await this.driver.findElement(this._singleProductPageProductReviewsInfoBoxText);
        return await singleProductPageProductReviewsInfoBoxText.getText();
    }

    //product addition to cart success message getter
    async getProductAdditionToCartSuccessMsg(){
        const productAdditionToCartSuccessMsg = await this.driver.findElement(this._productAdditionToCartSuccessMessage);
        return await productAdditionToCartSuccessMsg.getText();
    }

    //single product page web element assert method (elements that all single product pages share)
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isSingleProductPagePageWebElementDisplayed(){
        const elementsToCheck = [
            this._singleProductPageTitle,
            this._singleProductPageReviewStarsElements,
            this._singleProductPageReviewStarsCounter,
            this._singleProductPageAddReviewLink,
            this._singleProductPageProductMainImage,
            this._singleProductPageProductUnitPrice,
            this._singleProductPageProductQuantitySubtext,
            this._singleProductPageProductQuantityInputField,
            this._singleProductPageProductAddToCartButton,
            this._singleProductPageProductAddToWishlistButton,
            this._singleProductPageProductPaypalCheckoutButton,
            this._singleProductPageProductShortDescription,
            this._singleProductPageProductTag,
            this._singleProductPageProductDetailsDropdownButton,
            this._singleProductPageProductDetailsDropdownSubtext,
            this._singleProductPageProductDescription,
            this._singleProductPageProductAttributesDropdownButton,
            this._singleProductPageProductAttributesDropdownSubtext,
            this._singleProductPageProductBrand,
            this._singleProductPageProductCollection,
            this._singleProductPageProductMaterial,
            this._singleProductPageProductReviewsDropdownButton,
            this._singleProductPageProductReviewsDropdownSubtext,
            //this._singleProductPageProductReviewsInfoBoxText,
            this._singleProductPageProductAddReviewButton,
            this._singleProductPageMayLikeProductsSectionSubtitle,
            this._singleProductPageMayLikeProductsImageElements,
            this._singleProductPageMayLikeProductsNameElements,
            this._singleProductPageMayLikeProductsUnitPriceElements,
            //this._singleProductPageMayLikeSectionPreviousButton,
            //this._singleProductPageMayLikeSectionNextButton,
            this._singleProductPageBestSalesProductsSectionSubtitle,
            this._singleProductPageBestSalesProductsImageElements,
            this._singleProductPageBestSalesProductsNameElements,
            this._singleProductPageBestSalesProductsUnitPriceElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { SingleProductPage }
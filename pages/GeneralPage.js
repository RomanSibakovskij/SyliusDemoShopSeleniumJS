"use strict"


const { By, until, actions} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const { Logger } = require("./utils/Logger");

class GeneralPage extends BasePage{

    constructor(driver){
        super(driver)

        //general page web elements (elements that most pages have)
        //header
        this._headerSignUpNewsletterLink = By.xpath("//div[@class='col-12 col-md']/a");
        this._headerHomePageLogoLink = By.xpath("//div[@class='col']/a");
        this._headerLoginLink = By.xpath("//a[@id='login-page-button']");
        this._headerLogoutLink = By.xpath("//a[@id='logout-button']");
        this._headerRegisterLink = By.xpath("//a[@id='register-page-button']");
        this._headerWishlistPageButton = By.xpath("//a[@aria-label='wishlist button']");
        this._headerShoppingCartButton = By.xpath("//button[@data-bs-target='#offcanvasCart']");
        //header navbar
        this._headerNavTShirtsDropdownMenuLink = By.xpath("//div[@class='navbar-nav my-2 flex-column flex-lg-row gap-lg-4']/div[1]/a");
        this._headerNavCapsDropdownMenuLink = By.xpath("//div[@class='navbar-nav my-2 flex-column flex-lg-row gap-lg-4']/div[2]/a");
        this._headerNavDressesLink = By.xpath("//div[@class='navbar-nav my-2 flex-column flex-lg-row gap-lg-4']/a");
        this._headerNavJeansDropdownMenuLink = By.xpath("//div[@class='navbar-nav my-2 flex-column flex-lg-row gap-lg-4']/div[3]/a");
        //header shopping cart modal web elements
        this._headerShoppingCartModalTitle = By.xpath("//div[@class='offcanvas-header']/h5");
        this._headerShoppingCartModalCloseButton = By.xpath("//div[@class='offcanvas-header']/button");
        this._headerShoppingCartModalProductImgElements = By.xpath("//table[@class='table table-borderless align-middle']/tbody/tr/td[1]//img");
        this._headerShoppingCartModalProductNameLinkElements = By.xpath("//table[@class='table table-borderless align-middle']/tbody/tr/td[1]//a");
        this._headerShoppingCartModalProductDescElements = By.xpath("//table[@class='table table-borderless align-middle']/tbody/tr/td[1]//small");
        this._headerShoppingCartModalProductQtyElements = By.xpath("//table[@class='table table-borderless align-middle']/tbody/tr/td[2]");
        this._headerShoppingCartModalProductUnitPriceElements = By.xpath("//table[@class='table table-borderless align-middle']/tbody/tr/td[3]");
        this._headerShoppingCartModalSubtotalSubtext = By.xpath("//div[@class='offcanvas-footer']/div[1]/div[1]");
        this._headerShoppingCartModalSubtotalPrice = By.xpath("//div[@class='offcanvas-footer']/div[1]/div[2]");
        this._headerShoppingCartModalViewEditCartButton = By.xpath("//div[@class='d-grid gap-2 pb-3']/a[1]");
        this._headerShoppingCartModalCheckoutButton = By.xpath("//div[@class='d-grid gap-2 pb-3']/a[2]");
        //footer
        this._footerHomePageLogoLink = By.xpath("//footer//div[@class='col-12 text-center col-md-6 order-md-3 text-md-start col-lg-3 order-lg-1']/a");
        this._footerPoweredByText = By.xpath("//footer//div[@class='mb-3']");
        this._footerSyllusLink = By.xpath("//footer//div[@class='mb-3']/a");
        this._footerAboutLink = By.xpath("//footer//nav[@class='nav flex-column']/a[1]");
        this._footerTermsConditionsLink = By.xpath("//footer//nav[@class='nav flex-column']/a[2]");
        this._footerPrivacyLink = By.xpath("//footer//nav[@class='nav flex-column']/a[3]");
        this._footerContactUsLink = By.xpath("//footer//nav[@class='nav flex-column']/a[4]");
        this._footerFAQLink = By.xpath("//footer//nav[@class='nav flex-column mb-5']/a[1]");
        this._footerDeliveryAndShippingLink = By.xpath("//footer//nav[@class='nav flex-column mb-5']/a[2]");
        this._footerReturnsPolicyLink = By.xpath("//footer//nav[@class='nav flex-column mb-5']/a[3]");
        //payments section
        this._footerPaymentsSectionSubtext = By.xpath("//footer//div[@class='mb-3 fw-medium']");
        this._footerPaypalIconLink = By.xpath("//footer//div[@class='row g-2 mb-4']/div[1]/a");
        this._footerAdyenIconLink = By.xpath("//footer//div[@class='row g-2 mb-4']/div[2]/a");
        this._footerMollieIconLink = By.xpath("//footer//div[@class='row g-2 mb-4']/div[3]/a");
        this._footerInstagramIconLink = By.xpath("//footer//div[@class='d-flex justify-content-center justify-content-md-start justify-content-lg-center gap-3 mb-5']/a[1]");
        this._footerFacebookIconLink = By.xpath("//footer//div[@class='d-flex justify-content-center justify-content-md-start justify-content-lg-center gap-3 mb-5']/a[2]");
        this._footerXIconLink = By.xpath("//footer//div[@class='d-flex justify-content-center justify-content-md-start justify-content-lg-center gap-3 mb-5']/a[3]");
        //info button box elements
        this._footerInfoButtonBox = By.xpath("//div[@id='info-toggle']");
        this._footerInfoBoxSyllusVersionSubtext = By.xpath("//label[@for='version-select']");
        this._footerInfoBoxAdminPanelSubtext = By.xpath("//div[@id='info-box']/div//strong[.='Admin panel:']");
        this._footerInfoBoxSyllusAPISubtext = By.xpath("//div[@id='info-box']/div//strong[.='Sylius API:']");
        this._footerInfoBoxSyllusVersionDropdownMenu = By.xpath("//div[@id='info-box']//select[@id='version-select']");
        this._footerInfoBoxAdminPanelLink = By.xpath("//div[@id='info-box']/div[2]/div[2]/a");
        this._footerInfoBoxSyllusAPILink = By.xpath("//div[@id='info-box']/div[3]/div[2]/a");
        this._footerInfoBoxSyllusPlusDemoButton = By.xpath("//div[@id='demo-cta']/a");
        this._footerInfoBoxCloseButton = By.xpath("//div[@id='info-toggle']");
    }

    //click header home page logo link method
    async clickHeaderHomePageLogoLink(){
        const headerHomePageLogoLink = await this.driver.findElement(this._headerHomePageLogoLink);
        headerHomePageLogoLink.click();
    }

    //click header 'Login' link method
    async clickHeaderLoginLink(){
        const headerLoginLink = await this.driver.findElement(this._headerLoginLink);
        headerLoginLink.click();
    }

    //click header 'Logout' link method
    async clickHeaderLogoutLink(){
        const headerLogoutLink = await this.driver.findElement(this._headerLogoutLink);
        headerLogoutLink.click();
    }

    //click header 'Register' link method
    async clickHeaderRegisterLink(){
        const headerRegisterLink = await this.driver.findElement(this._headerRegisterLink);
        headerRegisterLink.click();
    }

    //click header wishlist page button method
    async clickHeaderWishlistPageButton(){
        const wishlistPageButton = await this.driver.findElement(this._headerWishlistPageButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: wishlistPageButton }).click().perform();
    }

    //click header shopping cart button method
    async clickHeaderShoppingCartButton(){
        const shoppingCartButton = await this.driver.findElement(this._headerShoppingCartButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: shoppingCartButton }).click().perform();
    }

    //click header navbar 'Dresses' link method
    async clickHeaderNavDressesLink(){
        const headerNavDressesLink = await this.driver.findElement(this._headerNavDressesLink);
        headerNavDressesLink.click();
    }

    //general page text element getters
    async getHeaderSignUpNewsletterLinkText(){
        const signUpNewsletterLink = await this.driver.findElement(this._headerSignUpNewsletterLink);
        return await signUpNewsletterLink.getText();
    }
    async getFooterPoweredByText(){
        const footerPoweredByText = await this.driver.findElement(this._footerPoweredByText);
        return await footerPoweredByText.getText();
    }

    //info box text element getters
    async getFooterInfoBoxSyliusVersionSubtext(){
        const syliusVersionSubtext = await this.driver.findElement(this._footerInfoBoxSyllusVersionSubtext);
        return await syliusVersionSubtext.getText();
    }
    async getFooterInfoBoxAdminPanelSubtext(){
        const infoBoxAdminPanelSubtext = await this.driver.findElement(this._footerInfoBoxAdminPanelSubtext);
        return await infoBoxAdminPanelSubtext.getText();
    }
    async getFooterInfoBoxSyliusAPISubtext(){
        const syliusAPISubtext = await this.driver.findElement(this._footerInfoBoxSyllusAPISubtext);
        return await syliusAPISubtext.getText();
    }

    //click 'Close' button (Sylius info box method)
    async clickCloseSyliusInfoBox(){
        const infoBoxCloseButton = await this.driver.findElement(this._footerInfoBoxCloseButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: infoBoxCloseButton }).click().perform();
    }

    //header shopping cart modal product data getters
    async getHeaderShoppingCartModalProductName() {
        const elements = await this.driver.findElements(this._headerShoppingCartModalProductNameLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get header shopping cart modal product name(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getHeaderShoppingCartModalProductDescription() {
        const elements = await this.driver.findElements(this._headerShoppingCartModalProductDescElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get header shopping cart modal product description(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getHeaderShoppingCartModalProductQuantity() {
        const elements = await this.driver.findElements(this._headerShoppingCartModalProductQtyElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get header shopping cart modal product quantity(ies):', error.message);
                    return '';
                }
            })
        );
    }

    async getHeaderShoppingCartModalProductUnitPrice() {
        const elements = await this.driver.findElements(this._headerShoppingCartModalProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get header shopping cart modal product unit price(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getHeaderShoppingCartModalSubtotalPrice(){
        const headerShoppingCartModalSubtotalPrice = await this.driver.findElement(this._headerShoppingCartModalSubtotalPrice);
        return await headerShoppingCartModalSubtotalPrice.getText();
    }

    //header shopping cart modal text element getters
    async getHeaderShoppingCartModalTitle(){
        const headerShoppingCartModalTitle = await this.driver.findElement(this._headerShoppingCartModalTitle);
        return await headerShoppingCartModalTitle.getText();
    }
    async getHeaderShoppingCartModalSubtotalSubtext(){
        const headerShoppingCartModalSubtotalSubtext = await this.driver.findElement(this._headerShoppingCartModalSubtotalSubtext);
        return await headerShoppingCartModalSubtotalSubtext.getText();
    }

    //click header shopping cart 'View and edit cart' button
    async clickHeaderShopCartModalViewEditCartButton(){
        const modalViewEditCartButton = await this.driver.findElement(this._headerShoppingCartModalViewEditCartButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: modalViewEditCartButton }).click().perform();
    }

    //general wait for element load method
    async waitForElementLoad() {
        const elementLoadTime = 2100;
        return new Promise(resolve => setTimeout(resolve, elementLoadTime));
    }

    //general page web element assert method (all pages have those elements)
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isGeneralPageWebElementDisplayed(){
        const elementsToCheck = [
            this._headerSignUpNewsletterLink,
            //this._headerLoginLink,
            //this._headerRegisterLink,
            this._headerShoppingCartButton,
            this._headerNavTShirtsDropdownMenuLink,
            this._headerNavCapsDropdownMenuLink,
            this._headerNavDressesLink,
            this._headerNavJeansDropdownMenuLink,
            this._footerHomePageLogoLink,
            this._footerPoweredByText,
            this._footerSyllusLink,
            this._footerAboutLink,
            this._footerTermsConditionsLink,
            this._footerPrivacyLink,
            this._footerContactUsLink,
            this._footerFAQLink,
            this._footerDeliveryAndShippingLink,
            this._footerReturnsPolicyLink,
            this._footerPaymentsSectionSubtext,
            this._footerPaypalIconLink,
            this._footerAdyenIconLink,
            this._footerMollieIconLink,
            this._footerInstagramIconLink,
            this._footerFacebookIconLink,
            this._footerXIconLink,
            this._footerInfoButtonBox,
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isInfoBoxWebElementDisplayed(){
        const elementsToCheck = [
            this._footerInfoBoxSyllusVersionSubtext,
            this._footerInfoBoxAdminPanelSubtext,
            this._footerInfoBoxSyllusAPISubtext,
            this._footerInfoBoxSyllusVersionDropdownMenu,
            this._footerInfoBoxAdminPanelSubtext,
            this._footerInfoBoxAdminPanelLink,
            this._footerInfoBoxSyllusAPILink,
            this._footerInfoBoxSyllusPlusDemoButton,
            this._footerInfoBoxCloseButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isHeaderShoppingCartModalWebElementDisplayed(){
        const elementsToCheck = [
            this._headerShoppingCartModalTitle,
            this._headerShoppingCartModalCloseButton,
            this._headerShoppingCartModalProductImgElements,
            this._headerShoppingCartModalProductNameLinkElements,
            this._headerShoppingCartModalProductDescElements,
            this._headerShoppingCartModalProductQtyElements,
            this._headerShoppingCartModalProductUnitPriceElements,
            this._headerShoppingCartModalSubtotalSubtext,
            this._headerShoppingCartModalSubtotalPrice,
            this._headerShoppingCartModalViewEditCartButton,
            this._headerShoppingCartModalCheckoutButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { GeneralPage }
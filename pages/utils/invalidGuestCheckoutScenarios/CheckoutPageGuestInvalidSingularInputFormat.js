"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');
const Logger = require("../Logger");

class CheckoutPageGuestInvalidSingularInputFormat extends BasePage{

    constructor(driver) {
        super(driver);

        //billing address section
        this._checkoutPageEmailInputField = By.xpath("//input[@id='sylius_shop_checkout_address_customer_email']");
        //input form
        this._checkoutPageBillAddressFirstNameInputField = By.xpath("//input[@id='sylius_shop_checkout_address_billingAddress_firstName']");
        this._checkoutPageBillAddressLastNameInputField = By.xpath("//input[@id='sylius_shop_checkout_address_billingAddress_lastName']");
        this._checkoutPageBillAddressCompanyInputField = By.xpath("//input[@id='sylius_shop_checkout_address_billingAddress_company']");
        this._checkoutPageBillAddressInputField = By.xpath("//input[@id='sylius_shop_checkout_address_billingAddress_street']");
        this._checkoutPageBillAddressCountryDropdownMenu = By.xpath("//select[@id='sylius_shop_checkout_address_billingAddress_countryCode']");
        this._checkoutPageBillAddressCityInputField = By.xpath("//input[@id='sylius_shop_checkout_address_billingAddress_city']");
        this._checkoutPageBillAddressPostCodeInputField = By.xpath("//input[@id='sylius_shop_checkout_address_billingAddress_postcode']");
        //shipping address (input form)
        this._checkoutPageShipAddressFirstNameInputField = By.xpath("//input[@id='sylius_shop_checkout_address_shippingAddress_firstName']");
        this._checkoutPageShipAddressLastNameInputField = By.xpath("//input[@id='sylius_shop_checkout_address_shippingAddress_lastName']");
        this._checkoutPageShipAddressCompanyInputField = By.xpath("//input[@id='sylius_shop_checkout_address_shippingAddress_company']");
        this._checkoutPageShipAddressInputField = By.xpath("//input[@id='sylius_shop_checkout_address_shippingAddress_street']");
        this._checkoutPageShipAddressCityInputField = By.xpath("//input[@id='sylius_shop_checkout_address_shippingAddress_city']");
        this._checkoutPageShipAddressPostCodeInputField = By.xpath("//input[@id='sylius_shop_checkout_address_shippingAddress_postcode']");


        //invalid guest input data (billing address) - invalid singular input format
        this._invalidGuestEmailFormat = "mhtyffakemail.com"; //missing '@'
        this._invalidGuestBillFirstNameFormat = ")((*(&"; //special symbols only
        this._invalidGuestBillLastNameFormat = "&*^&(*"; //special symbols only
        this._invalidGuestBillAddressFormat = "*$%#%^"; //special symbols only
        this._invalidGuestBillCityFormat = "*&^%%^"; //special symbols only
        this._invalidGuestBillPostCodeFormat = "^%&%4"; //special symbols only

        //invalid guest input data (shipping address) - invalid singular input
        this._invalidGuestShipFirstNameFormat = ")*()(*&"; //special symbols only
        this._invalidGuestShipLastNameFormat = "^$%#$#"; //special symbols only
        this._invalidGuestShipAddressFormat = "$^%*&*&"; //special symbols only
        this._invalidGuestShipCityFormat = ")_(***&^%"; //special symbols only
        this._invalidGuestShipPostCodeFormat = "$%^$%&"; //special symbols only
    }

    //invalid guest data input methods - invalid singular input format
    async inputInvalidGuestEmailFormatIntoEmailInputField(){
        const billAddressEmailInputField = await this.driver.findElement(this._checkoutPageEmailInputField);
        const invalidGuestEmailFormat = this._invalidGuestEmailFormat;
        Logger.info("Invalid guest email format (checkout page): ", invalidGuestEmailFormat);
        await billAddressEmailInputField.sendKeys(invalidGuestEmailFormat);
    }

    //billing address
    async inputInvalidGuestFirstNameFormatIntoBillAddressFirstNameInputField(){
        const billAddressFirstNameInputField = await this.driver.findElement(this._checkoutPageBillAddressFirstNameInputField);
        const invalidGuestBillFirstNameFormat = this._invalidGuestBillFirstNameFormat;
        Logger.info("Invalid guest first name format (billing address -> checkout page): ", invalidGuestBillFirstNameFormat);
        await billAddressFirstNameInputField.sendKeys(invalidGuestBillFirstNameFormat);
    }
    async inputInvalidGuestLastNameFormatIntoBillAddressLastNameInputField(){
        const billAddressLastNameInputField = await this.driver.findElement(this._checkoutPageBillAddressLastNameInputField);
        const invalidGuestBillLastNameFormat = this._invalidGuestBillLastNameFormat;
        Logger.info("Invalid guest last name format (billing address -> checkout page): ", invalidGuestBillLastNameFormat);
        await billAddressLastNameInputField.sendKeys(invalidGuestBillLastNameFormat);
    }
    async inputInvalidGuestAddressFormatIntoBillAddressInputField(){
        const billAddressLastNameInputField = await this.driver.findElement(this._checkoutPageBillAddressInputField);
        const invalidGuestBillAddressFormat = this._invalidGuestBillAddressFormat;
        Logger.info("Invalid guest address format (billing address -> checkout page): ", invalidGuestBillAddressFormat);
        await billAddressLastNameInputField.sendKeys(invalidGuestBillAddressFormat);
    }
    async inputInvalidGuestCityFormatIntoBillAddressCityInputField(){
        const billAddressCityInputField = await this.driver.findElement(this._checkoutPageBillAddressCityInputField);
        const invalidGuestBillCityFormat = this._invalidGuestBillCityFormat;
        Logger.info("Invalid guest city format (billing address -> checkout page): ", invalidGuestBillCityFormat);
        await billAddressCityInputField.sendKeys(invalidGuestBillCityFormat);
    }
    async inputInvalidGuestPostCodeFormatIntoBillAddressPostCodeInputField(){
        const billAddressPostCodeInputField = await this.driver.findElement(this._checkoutPageBillAddressPostCodeInputField);
        const invalidGuestBillPostCodeFormat = this._invalidGuestBillPostCodeFormat;
        Logger.info("Invalid guest post code format (billing address -> checkout page): ", invalidGuestBillPostCodeFormat);
        await billAddressPostCodeInputField.sendKeys(invalidGuestBillPostCodeFormat);
    }

    //shipping address
    async inputInvalidGuestFirstNameFormatIntoShipAddressFirstNameInputField(){
        const shipAddressFirstNameInputField = await this.driver.findElement(this._checkoutPageShipAddressFirstNameInputField);
        await shipAddressFirstNameInputField.clear();
        const invalidGuestShipFirstNameFormat = this._invalidGuestShipFirstNameFormat;
        Logger.info("Too long guest first name (shipping address -> checkout page): ", invalidGuestShipFirstNameFormat);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressFirstNameInputField.sendKeys(invalidGuestShipFirstNameFormat);
    }
    async inputInvalidGuestLastNameFormatIntoShipAddressLastNameInputField(){
        const shipAddressLastNameInputField = await this.driver.findElement(this._checkoutPageShipAddressLastNameInputField);
        await shipAddressLastNameInputField.clear();
        const invalidGuestShipLastNameFormat = this._invalidGuestShipLastNameFormat;
        Logger.info("Too long guest last name (shipping address -> checkout page): ", invalidGuestShipLastNameFormat);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressLastNameInputField.sendKeys(invalidGuestShipLastNameFormat);
    }
    async inputInvalidGuestAddressFormatIntoShipAddressInputField(){
        const shipAddressLastNameInputField = await this.driver.findElement(this._checkoutPageShipAddressInputField);
        await shipAddressLastNameInputField.clear();
        const invalidGuestShipAddressFormat = this._invalidGuestShipAddressFormat;
        Logger.info("Too long guest address (shipping address -> checkout page): ", invalidGuestShipAddressFormat);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressLastNameInputField.sendKeys(invalidGuestShipAddressFormat);
    }
    async inputInvalidGuestCityFormatIntoShipAddressCityInputField(){
        const shipAddressCityInputField = await this.driver.findElement(this._checkoutPageShipAddressCityInputField);
        await shipAddressCityInputField.clear();
        const invalidGuestShipCityFormat = this._invalidGuestShipCityFormat;
        Logger.info("Too long guest city (shipping address -> checkout page): ", invalidGuestShipCityFormat);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressCityInputField.sendKeys(invalidGuestShipCityFormat);
    }
    async inputInvalidGuestPostCodeFormatIntoShipAddressPostCodeInputField(){
        const shipAddressPostCodeInputField = await this.driver.findElement(this._checkoutPageShipAddressPostCodeInputField);
        await shipAddressPostCodeInputField.clear();
        const invalidGuestShipPostCodeFormat = this._invalidGuestShipPostCodeFormat;
        Logger.info("Too long guest post code (shipping address -> checkout page): ", invalidGuestShipPostCodeFormat);
        await new Promise(resolve => setTimeout(resolve, 900));
        await shipAddressPostCodeInputField.sendKeys(invalidGuestShipPostCodeFormat);
    }



}
module.exports = { CheckoutPageGuestInvalidSingularInputFormat }
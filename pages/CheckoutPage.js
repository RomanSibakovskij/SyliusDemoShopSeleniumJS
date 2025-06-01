"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger = require("./utils/Logger");

class CheckoutPage extends BasePage {

    constructor(driver) {
        super(driver);

        //checkout page web elements
        this._checkoutPageAddressSectionTitle = By.xpath("//form/div[@class='mb-4 h2']");
        this._checkoutPageAddressBreadcrumb = By.xpath("//div[@class='steps steps-address mb-5']/div");
        this._checkoutPageLoggedAsSubtext = By.xpath("//div[@class='col-12 col-md-auto']");
        this._checkoutPageEmailSubtext = By.xpath("//label[@for='sylius_shop_checkout_address_customer_email']");
        this._checkoutPageEmailInputField = By.xpath("//input[@id='sylius_shop_checkout_address_customer_email']");
        //billing address section
        this._checkoutPageBillAddressSectionTitle = By.xpath("//form/div[2]/div[1]/div[1]");
        this._checkoutPageBillAddressExistAddressInputField = By.xpath("//div[@id='live-3811203534-0']"); //registered user has this element
        //input form
        this._checkoutPageBillAddressFirstNameSubtext = By.xpath("//label[@for='sylius_shop_checkout_address_billingAddress_firstName']");
        this._checkoutPageBillAddressFirstNameInputField = By.xpath("//input[@id='sylius_shop_checkout_address_billingAddress_firstName']");
        this._checkoutPageBillAddressLastNameSubtext = By.xpath("//label[@for='sylius_shop_checkout_address_billingAddress_lastName']");
        this._checkoutPageBillAddressLastNameInputField = By.xpath("//input[@id='sylius_shop_checkout_address_billingAddress_lastName']");
        this._checkoutPageBillAddressCompanySubtext = By.xpath("//label[@for='sylius_shop_checkout_address_billingAddress_company']");
        this._checkoutPageBillAddressCompanyInputField = By.xpath("//input[@id='sylius_shop_checkout_address_billingAddress_company']");
        this._checkoutPageBillAddressSubtext = By.xpath("//label[@for='sylius_shop_checkout_address_billingAddress_street']");
        this._checkoutPageBillAddressInputField = By.xpath("//input[@id='sylius_shop_checkout_address_billingAddress_street']");
        this._checkoutPageBillAddressCountrySubtext = By.xpath("//label[@for='sylius_shop_checkout_address_billingAddress_countryCode']");
        this._checkoutPageBillAddressCountryDropdownMenu = By.xpath("//select[@id='sylius_shop_checkout_address_billingAddress_countryCode']");
        this._checkoutPageBillAddressUSCountryOption = By.xpath("//select[@id='sylius_shop_checkout_address_billingAddress_countryCode']/option[13]");
        this._checkoutPageBillAddressProvinceSubtext = By.xpath("//label[@for='sylius_shop_checkout_address_billingAddress_provinceName']");
        this._checkoutPageBillAddressProvinceInputField = By.xpath("//input[@id='sylius_shop_checkout_address_billingAddress_provinceName']");
        this._checkoutPageBillAddressCitySubtext = By.xpath("//label[@for='sylius_shop_checkout_address_billingAddress_city']");
        this._checkoutPageBillAddressCityInputField = By.xpath("//input[@id='sylius_shop_checkout_address_billingAddress_city']");
        this._checkoutPageBillAddressPostCodeSubtext = By.xpath("//label[@for='sylius_shop_checkout_address_billingAddress_postcode']");
        this._checkoutPageBillAddressPostCodeInputField = By.xpath("//input[@id='sylius_shop_checkout_address_billingAddress_postcode']");
        this._checkoutPageBillAddressPhoneSubtext = By.xpath("//label[@for='sylius_shop_checkout_address_billingAddress_phoneNumber']");
        this._checkoutPageBillAddressPhoneInputField = By.xpath("//input[@id='sylius_shop_checkout_address_billingAddress_phoneNumber']");
        this._checkoutPageBillAddressDiffAddressSubtext = By.xpath("//label[@for='sylius_shop_checkout_address_differentShippingAddress']");
        this._checkoutPageBillAddressDiffShipAddressCheckbox = By.xpath("//input[@id='sylius_shop_checkout_address_differentShippingAddress']");
        //shipping address
        this._checkoutPageShipAddressSectionTitle = By.xpath("//form/div[3]/div[3]/div[1]");
        //input form
        this._checkoutPageShipAddressFirstNameSubtext = By.xpath("//label[@for='sylius_shop_checkout_address_shippingAddress_firstName']");
        this._checkoutPageShipAddressFirstNameInputField = By.xpath("//input[@id='sylius_shop_checkout_address_shippingAddress_firstName']");
        this._checkoutPageShipAddressLastNameSubtext = By.xpath("//label[@for='sylius_shop_checkout_address_shippingAddress_lastName']");
        this._checkoutPageShipAddressLastNameInputField = By.xpath("//input[@id='sylius_shop_checkout_address_shippingAddress_lastName']");
        this._checkoutPageShipAddressCompanySubtext = By.xpath("//label[@for='sylius_shop_checkout_address_shippingAddress_company']");
        this._checkoutPageShipAddressCompanyInputField = By.xpath("//input[@id='sylius_shop_checkout_address_shippingAddress_company']");
        this._checkoutPageShipAddressSubtext = By.xpath("//label[@for='sylius_shop_checkout_address_shippingAddress_street']");
        this._checkoutPageShipAddressInputField = By.xpath("//input[@id='sylius_shop_checkout_address_shippingAddress_street']");
        this._checkoutPageShipAddressCountrySubtext = By.xpath("//label[@for='sylius_shop_checkout_address_shippingAddress_countryCode']");
        this._checkoutPageShipAddressCountryDropdownMenu = By.xpath("//select[@id='sylius_shop_checkout_address_shippingAddress_countryCode']");
        this._checkoutPageShipAddressSelectCountryOption = By.xpath("//select[@id='sylius_shop_checkout_address_shippingAddress_countryCode']/option[1]");
        this._checkoutPageShipAddressUSCountryOption = By.xpath("//select[@id='sylius_shop_checkout_address_shippingAddress_countryCode']/option[13]");
        this._checkoutPageShipAddressProvinceSubtext = By.xpath("//label[@for='sylius_shop_checkout_address_shippingAddress_provinceName']");
        this._checkoutPageShipAddressProvinceInputField = By.xpath("//input[@id='sylius_shop_checkout_address_shippingAddress_provinceName']");
        this._checkoutPageShipAddressCitySubtext = By.xpath("//label[@for='sylius_shop_checkout_address_shippingAddress_city']");
        this._checkoutPageShipAddressCityInputField = By.xpath("//input[@id='sylius_shop_checkout_address_shippingAddress_city']");
        this._checkoutPageShipAddressPostCodeSubtext = By.xpath("//label[@for='sylius_shop_checkout_address_shippingAddress_postcode']");
        this._checkoutPageShipAddressPostCodeInputField = By.xpath("//input[@id='sylius_shop_checkout_address_shippingAddress_postcode']");
        this._checkoutPageShipAddressPhoneSubtext = By.xpath("//label[@for='sylius_shop_checkout_address_shippingAddress_phoneNumber']");
        this._checkoutPageShipAddressPhoneInputField = By.xpath("//input[@id='sylius_shop_checkout_address_shippingAddress_phoneNumber']");
        //buttons
        this._checkoutPageBillAddressBackToStoreLink = By.xpath("//a[@class='btn btn-light btn-icon']");
        this._checkoutPageBillAddressNextButton = By.xpath("//button[@class='btn btn-primary btn-icon']");
        //aside summary section
        this._checkoutPageAsideSummarySubtitle = By.xpath("//div[@class='col-12 col-lg-5 py-5 ps-lg-6 position-relative checkout-sidebar']//div[@class='mb-4 h2']");
        //table list elements
        this._checkoutPageAsideSummaryProductNameElements = By.xpath("//table[@class='table mb-3']//tr/td[1]");
        this._checkoutPageAsideSummaryProductQuantityElements = By.xpath("//table[@class='table mb-3']//tr/td[2]");
        this._checkoutPageAsideSummaryProductPriceElements = By.xpath("//table[@class='table mb-3']//tr/td[3]");
        //singular elements
        this._checkoutPageAsideSummaryItemsTotalSubtext = By.xpath("//table[@class='table table-borderless mb-3']//tr[1]/td[1]");
        this._checkoutPageAsideSummaryItemsTotalPrice = By.xpath("//table[@class='table table-borderless mb-3']//tr[1]/td[2]");
        this._checkoutPageAsideSummaryDiscountSubtext = By.xpath("//table[@class='table table-borderless mb-3']//tr[2]/td[1]");
        this._checkoutPageAsideSummaryDiscount = By.xpath("//table[@class='table table-borderless mb-3']//tr[2]/td[2]");
        this._checkoutPageAsideSummaryEstCostSubtext = By.xpath("//table[@class='table table-borderless mb-3']//tr[3]/td[1]");
        this._checkoutPageAsideSummaryEstimateCost = By.xpath("//table[@class='table table-borderless mb-3']//tr[3]/td[2]");
        this._checkoutPageAsideSummaryTaxesTotalSubtext = By.xpath("//table[@class='table table-borderless mb-3']//tr[4]/td[1]");
        this._checkoutPageAsideSummaryTaxesTotal = By.xpath("//table[@class='table table-borderless mb-3']//tr[4]/td[2]");
        this._checkoutPageAsideSummaryOrderTotalSubtext = By.xpath("//table[@class='table table-borderless mb-3']//tr[5]/td[1]");
        this._checkoutPageAsideSummaryOrderTotal = By.xpath("//table[@class='table table-borderless mb-3']//tr[5]/td[2]");
        //shipping section
        this._checkoutPageShipMethodSubtitle = By.xpath("//form/h5");
        this._checkoutPageShipMethodRadioButton = By.xpath("//input[@id='sylius_shop_checkout_select_shipping_shipments_0_method_0']");
        this._checkoutPageShipMethodDescription = By.xpath("//label[@for='sylius_shop_checkout_select_shipping_shipments_0_method_0']");
        this._checkoutPageShipMethodPrice = By.xpath("//form/div[1]/div/label/div[2]");
        //payment method section
        this._checkoutPagePaymentMethodSubtitle = By.xpath("//form/h5");
        this._checkoutPagePaymentMethodPaypalRadioButton = By.xpath("//input[@id='sylius_shop_checkout_select_payment_payments_0_method_0']");
        this._checkoutPagePaymentMethodPaypalSubtext = By.xpath("//label[@for='sylius_shop_checkout_select_payment_payments_0_method_0']");
        this._checkoutPagePaymentMethodCashOnDeliveryRadioButton = By.xpath("//input[@id='sylius_shop_checkout_select_payment_payments_0_method_1']");
        this._checkoutPagePaymentMethodCashOnDeliverySubtitle = By.xpath("//label[@for='sylius_shop_checkout_select_payment_payments_0_method_1']");
        this._checkoutPagePaymentMethodCashOnDeliveryDescription = By.xpath("//form/div[1]/div[2]/label/div[2]/small");
        this._checkoutPagePaymentMethodBankTransferRadioButton = By.xpath("//input[@id='sylius_shop_checkout_select_payment_payments_0_method_2']");
        this._checkoutPagePaymentMethodBankTransferSubtitle = By.xpath("//label[@for='sylius_shop_checkout_select_payment_payments_0_method_2']");
        this._checkoutPagePaymentMethodBankTransferDescription = By.xpath("//form/div[1]/div[3]/label/div[2]/small");
        //mollie(payments section)
        this._checkoutPageOrderSummaryMollieRadioButton = By.xpath("//input[@id='sylius_shop_checkout_select_payment_payments_0_method_3']");
        this._checkoutPageOrderSummaryMolliePaymentsSubtitle = By.xpath("//label[@for='sylius_shop_checkout_select_payment_payments_0_method_3']");
        this._checkoutPageOrderSummaryMollieIdealButton = By.xpath("//div[@class='d-grid online-online-payment__container']/div[1]");
        this._checkoutPageOrderSummaryMollieCardButton = By.xpath("//div[@class='d-grid online-online-payment__container']/div[2]");
        this._checkoutPageOrderSummaryMollieBankTransferButton = By.xpath("//div[@class='d-grid online-online-payment__container']/div[3]");
        this._checkoutPageOrderSummaryMolliePaypalButton = By.xpath("//div[@class='d-grid online-online-payment__container']/div[4]");
        this._checkoutPageOrderSummaryMollieBancontactButton = By.xpath("//div[@class='d-grid online-online-payment__container']/div[5]");
        this._checkoutPageOrderSummaryMollieEpsButton = By.xpath("//div[@class='d-grid online-online-payment__container']/div[6]");
        this._checkoutPageOrderSummaryMolliePrzelewy24Button = By.xpath("//div[@class='d-grid online-online-payment__container']/div[7]");
        this._checkoutPageOrderSummaryMollieKBCCBCButton = By.xpath("//div[@class='d-grid online-online-payment__container']/div[8]");
        this._checkoutPageOrderSummaryMollieBelfiusButton = By.xpath("//div[@class='d-grid online-online-payment__container']/div[9]");
        this._checkoutPageOrderSummaryMollieBancomatButton = By.xpath("//div[@class='d-grid online-online-payment__container']/div[10]");
        this._checkoutPageOrderSummaryMollieSatispayButton = By.xpath("//div[@class='d-grid online-online-payment__container']/div[11]");
        //order summary section
        this._checkoutPageOrderSummarySubtitle = By.xpath("//h1");
        //upper table
        this._checkoutPageOrderSummaryCurrencySubtext = By.xpath("//div[@class='card-body d-flex flex-column gap-1']/div[1]/div[1]");
        this._checkoutPageOrderSummaryCurrency = By.xpath("//div[@class='card-body d-flex flex-column gap-1']/div[1]/div[2]");
        this._checkoutPageOrderSummaryLocaleSubtext = By.xpath("//div[@class='card-body d-flex flex-column gap-1']/div[2]/div[1]");
        this._checkoutPageOrderSummaryLocale = By.xpath("//div[@class='card-body d-flex flex-column gap-1']/div[2]/div[2]");
        //billing address table
        this._checkoutPageOrderSummaryBillAddressSubtext = By.xpath("//div[@class='col-12 col-md-6 mb-3'][1]/div/div[1]");
        this._checkoutPageOrderSummaryBillAddressUserName = By.xpath("//div[@class='col-12 col-md-6 mb-3'][1]/div//address/strong");
        this._checkoutPageOrderSummaryBillAddress = By.xpath("//div[@class='col-12 col-md-6 mb-3'][1]/div//address/span");
        //shipping address table
        this._checkoutPageOrderSummaryShipAddressSubtext = By.xpath("//div[@class='col-12 col-md-6 mb-3'][2]/div/div[1]");
        this._checkoutPageOrderSummaryShipAddressUserName = By.xpath("//div[@class='col-12 col-md-6 mb-3'][2]/div//address/strong");
        this._checkoutPageOrderSummaryShipAddress = By.xpath("//div[@class='col-12 col-md-6 mb-3'][2]/div//address/span");
        //payments section
        this._checkoutPageOrderSummaryPaymentsSubtitle = By.xpath("//div[@class='mb-5']/div[1]/div[1]");
        this._checkoutPageOrderSummaryPaymentsCost = By.xpath("//div[@class='mb-5']/div[1]/div[2]");
        //shipments section
        this._checkoutPageOrderSummaryShipmentsSubtitle = By.xpath("//div[@class='mb-5']/div[2]/div[1]");
        this._checkoutPageOrderSummaryShipmentsCost = By.xpath("//div[@class='mb-5']/div[2]/div[2]");
        //order product table
        this._checkoutPageOrderSummaryProductTableItemSubtext = By.xpath("//table[@class='table table-borderless table-space align-middle mb-0']/thead/tr/th[1]");
        this._checkoutPageOrderSummaryProductTableSubscriptionSubtext = By.xpath("//table[@class='table table-borderless table-space align-middle mb-0']/thead/tr/th[2]");
        this._checkoutPageOrderSummaryProductTableUnitPriceSubtext = By.xpath("//table[@class='table table-borderless table-space align-middle mb-0']/thead/tr/th[3]");
        this._checkoutPageOrderSummaryProductTableQtySubtext = By.xpath("//table[@class='table table-borderless table-space align-middle mb-0']/thead/tr/th[4]");
        this._checkoutPageOrderSummaryProductTableSubtotalSubtext = By.xpath("//table[@class='table table-borderless table-space align-middle mb-0']/thead/tr/th[5]");
        //table elements
        this._checkoutPageOrderSummaryProductTableProductImgElements = By.xpath("//table[@class='table table-borderless table-space align-middle mb-0']/tbody/tr/td[1]//img");
        this._checkoutPageOrderSummaryProductTableProductNameElements = By.xpath("//table[@class='table table-borderless table-space align-middle mb-0']/tbody/tr/td[1]//a");
        this._checkoutPageOrderSummaryProductTableProductDescElements = By.xpath("//table[@class='table table-borderless table-space align-middle mb-0']/tbody/tr/td[1]//small");
        this._checkoutPageOrderSummaryProductTableUnitPriceElements = By.xpath("//table[@class='table table-borderless table-space align-middle mb-0']/tbody/tr/td[3]");
        this._checkoutPageOrderSummaryProductTableQuantityElements = By.xpath("//table[@class='table table-borderless table-space align-middle mb-0']/tbody/tr/td[4]");
        this._checkoutPageOrderSummaryProductTableSubtotalPriceElements = By.xpath("//table[@class='table table-borderless table-space align-middle mb-0']/tbody/tr/td[5]");
        //summary
        this._checkoutPageOrderSummaryPaymentFeeSubtext = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']/tbody/tr[1]/td[1]");
        this._checkoutPageOrderSummaryPaymentFee = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']/tbody/tr[1]/td[2]");
        this._checkoutPageOrderSummaryItemsTotalSubtext = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']/tbody/tr[2]/td[1]");
        this._checkoutPageOrderSummaryItemsTotalPrice = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']/tbody/tr[2]/td[2]");
        this._checkoutPageOrderSummaryTaxesTotalSubtext = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']/tbody/tr[3]/td[1]");
        this._checkoutPageOrderSummaryTaxesTotal = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']/tbody/tr[3]/td[2]");
        this._checkoutPageOrderSummaryDiscountSubtext = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']/tbody/tr[4]/td[1]");
        this._checkoutPageOrderSummaryDiscount = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']/tbody/tr[4]/td[2]");
        this._checkoutPageOrderSummaryShippingTotalSubtext = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']/tbody/tr[5]/td[1]");
        this._checkoutPageOrderSummaryShippingTotal = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']/tbody/tr[5]/td[2]");
        this._checkoutPageOrderSummaryOrderTotalSubtext = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']/tbody/tr[6]/td[1]");
        this._checkoutPageOrderSummaryOrderTotal = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']/tbody/tr[6]/td[2]");
        this._checkoutPageOrderSummaryExtraNotesSubtext = By.xpath("//label[@for='sylius_checkout_complete_notes']");
        this._checkoutPageOrderSummaryExtraNotesTextArea = By.xpath("//textarea[@id='sylius_checkout_complete_notes']");
        this._checkoutPageOrderSummaryPlaceOrderButton = By.xpath("//button");
        //thank you section
        this._checkoutPageThankYouMessage = By.xpath("//div[@class='row flex-column my-4']");
        this._checkoutPageViewOrderButton = By.xpath("//a[@id='show-order-in-account']");
        //singular input error
        this._checkoutPageSingularInputError = By.xpath("//div[@class='invalid-feedback d-block']");
    }

    //click 'Country' (billing address) dropdown menu method
    async clickBillAddressDropdownMenu(){
        const billAddressDropdownMenu = await this.driver.findElement(this._checkoutPageBillAddressCountryDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: billAddressDropdownMenu }).click().perform();
    }

    //select 'United States' (billing address) option method
    async selectBillAddressUSOption(){
        const billAddressUSOption = await this.driver.findElement(this._checkoutPageBillAddressUSCountryOption);
        billAddressUSOption.click();
    }

    //click 'Different shipping address' checkbox method
    async clickDiffShipAddressCheckbox(){
        const diffAddressCheckbox = await this.driver.findElement(this._checkoutPageBillAddressDiffShipAddressCheckbox);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: diffAddressCheckbox }).click().perform();
    }

    //click 'Country' (shipping address) dropdown menu method
    async clickShipAddressDropdownMenu(){
        const shipAddressDropdownMenu = await this.driver.findElement(this._checkoutPageShipAddressCountryDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: shipAddressDropdownMenu }).click().perform();
    }

    //select 'Select' (shipping address) option method
    async selectShipAddressSelectOption(){
        const shipAddressSelectOption = await this.driver.findElement(this._checkoutPageShipAddressSelectCountryOption);
        shipAddressSelectOption.click();
    }

    //select 'United States' (shipping address) option method
    async selectShipAddressUSOption(){
        const shipAddressUSOption = await this.driver.findElement(this._checkoutPageShipAddressUSCountryOption);
        shipAddressUSOption.click();
    }

    //click 'Next' button method
    async clickNextButton(){
        const nextButton = await this.driver.findElement(this._checkoutPageBillAddressNextButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: nextButton }).click().perform();
    }

    //click first payment radio button method
    async clickFirstPaymentRadioButton(){
        const firstPaymentButton = await this.driver.findElement(this._checkoutPagePaymentMethodPaypalRadioButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: firstPaymentButton }).click().perform();
    }

    //click 'Cash on delivery' button method
    async clickCashOnDeliveryButton(){
        const cashOnDeliveryButton = await this.driver.findElement(this._checkoutPagePaymentMethodCashOnDeliveryRadioButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: cashOnDeliveryButton }).click().perform();
    }

    //click 'Bank transfer' button method
    async clickBankTransferButton(){
        const bankTransferRadioButton = await this.driver.findElement(this._checkoutPagePaymentMethodBankTransferRadioButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: bankTransferRadioButton }).click().perform();
    }

    //click 'Place order' button method
    async clickPlaceOrderButton(){
        const placeOrderButton = await this.driver.findElement(this._checkoutPageOrderSummaryPlaceOrderButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: placeOrderButton }).click().perform();
    }

    //click 'View order' button method
    async clickViewOrderButton(){
        const viewOrderButton = await this.driver.findElement(this._checkoutPageViewOrderButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: viewOrderButton }).click().perform();
    }

    //checkout page order summary data getters
    //upper table
    async getCheckoutPageOrderSummaryCurrency(){
        const checkoutPageCurrency = await this.driver.findElement(this._checkoutPageOrderSummaryCurrency);
        return await checkoutPageCurrency.getText();
    }
    async getCheckoutPageOrderSummaryLocale(){
        const checkoutPageLocale = await this.driver.findElement(this._checkoutPageOrderSummaryLocale);
        return await checkoutPageLocale.getText();
    }
    //billing address table
    async getCheckoutPageOrderSummaryBillAddressUserName(){
        const checkoutPageBillAddressUserName = await this.driver.findElement(this._checkoutPageOrderSummaryBillAddressUserName);
        return await checkoutPageBillAddressUserName.getText();
    }
    async getCheckoutPageOrderSummaryBillAddress(){
        const checkoutPageBillAddress = await this.driver.findElement(this._checkoutPageOrderSummaryBillAddress);
        return await checkoutPageBillAddress.getText();
    }
    //shipping address table
    async getCheckoutPageOrderSummaryShipAddressUserName(){
        const checkoutPageShipAddressUserName = await this.driver.findElement(this._checkoutPageOrderSummaryShipAddressUserName);
        return await checkoutPageShipAddressUserName.getText();
    }
    async getCheckoutPageOrderSummaryShipAddress(){
        const checkoutPageShipAddress = await this.driver.findElement(this._checkoutPageOrderSummaryShipAddress);
        return await checkoutPageShipAddress.getText();
    }
    //payments section
    async getCheckoutPageOrderSummaryPaymentsCost(){
        const checkoutPagePaymentsCost = await this.driver.findElement(this._checkoutPageOrderSummaryPaymentsCost);
        return await checkoutPagePaymentsCost.getText();
    }
    //shipments section
    async getCheckoutPageOrderSummaryShipmentsCost(){
        const checkoutPageShipmentsCost = await this.driver.findElement(this._checkoutPageOrderSummaryShipmentsCost);
        return await checkoutPageShipmentsCost.getText();
    }

    //order summary product table
    async getOrderSummaryProductName() {
        const elements = await this.driver.findElements(this._checkoutPageOrderSummaryProductTableProductNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get order summary (checkout page) product name(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getOrderSummaryProductDesc() {
        const elements = await this.driver.findElements(this._checkoutPageOrderSummaryProductTableProductDescElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get order summary (checkout page) product description(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getOrderSummaryProductUnitPrice() {
        const elements = await this.driver.findElements(this._checkoutPageOrderSummaryProductTableUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get order summary (checkout page) product unit price(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getOrderSummaryProductQuantity() {
        const elements = await this.driver.findElements(this._checkoutPageOrderSummaryProductTableQuantityElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get order summary (checkout page) product quantity(ies):', error.message);
                    return '';
                }
            })
        );
    }

    async getOrderSummaryProductSubtotalPrice() {
        const elements = await this.driver.findElements(this._checkoutPageOrderSummaryProductTableSubtotalPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get order summary (checkout page) product subtotal price(s):', error.message);
                    return '';
                }
            })
        );
    }

    //summary section
    async getCheckoutPageOrderSummaryPaymentFee(){
        const checkoutPageOrderSummaryPaymentFee = await this.driver.findElement(this._checkoutPageOrderSummaryPaymentFee);
        return await checkoutPageOrderSummaryPaymentFee.getText();
    }
    async getCheckoutPageOrderSummaryItemsTotalPrice(){
        const checkoutPageOrderSummaryItemsTotalPrice = await this.driver.findElement(this._checkoutPageOrderSummaryItemsTotalPrice);
        return await checkoutPageOrderSummaryItemsTotalPrice.getText();
    }
    async getCheckoutPageOrderSummaryTaxesTotalPrice(){
        const checkoutPageOrderSummaryTaxesTotalPrice = await this.driver.findElement(this._checkoutPageOrderSummaryTaxesTotal);
        return await checkoutPageOrderSummaryTaxesTotalPrice.getText();
    }
    async getCheckoutPageOrderSummaryItemsDiscount(){
        const checkoutPageOrderSummaryItemsDiscount = await this.driver.findElement(this._checkoutPageOrderSummaryDiscount);
        return await checkoutPageOrderSummaryItemsDiscount.getText();
    }
    async getCheckoutPageOrderSummaryShippingTotalPrice(){
        const checkoutPageOrderSummaryShipTotalPrice = await this.driver.findElement(this._checkoutPageOrderSummaryShippingTotal);
        return await checkoutPageOrderSummaryShipTotalPrice.getText();
    }
    async getCheckoutPageOrderSummaryOrderTotalPrice(){
        const checkoutPageOrderSummaryOrderTotalPrice = await this.driver.findElement(this._checkoutPageOrderSummaryOrderTotal);
        return await checkoutPageOrderSummaryOrderTotalPrice.getText();
    }

    //checkout page text element getters
    async getCheckoutPageTitle() {
        const checkoutPageTitle = await this.driver.findElement(this._checkoutPageAddressSectionTitle);
        return checkoutPageTitle.getText();
    }

    async getCheckoutPageBillAddressSectionTitle() {
        const checkoutPageBillAddressSectionTitle = await this.driver.findElement(this._checkoutPageBillAddressSectionTitle);
        return checkoutPageBillAddressSectionTitle.getText();
    }

    async getCheckoutPageLoggedAsSubtext() {
        const checkoutPageLoggedAsSubtext = await this.driver.findElement(this._checkoutPageLoggedAsSubtext);
        return checkoutPageLoggedAsSubtext.getText();
    }

    async getCheckoutPageEmailSubtext() {
        const checkoutPageEmailSubtext = await this.driver.findElement(this._checkoutPageEmailSubtext);
        return checkoutPageEmailSubtext.getText();
    }

    //input form
    async getCheckoutPageBillAddressFirstNameSubtext() {
        const checkoutPageBillAddressFirstNameSubtext = await this.driver.findElement(this._checkoutPageBillAddressFirstNameSubtext);
        return checkoutPageBillAddressFirstNameSubtext.getText();
    }

    async getCheckoutPageBillAddressLastNameSubtext() {
        const checkoutPageBillAddressLastNameSubtext = await this.driver.findElement(this._checkoutPageBillAddressLastNameSubtext);
        return checkoutPageBillAddressLastNameSubtext.getText();
    }

    async getCheckoutPageBillAddressCompanySubtext() {
        const checkoutPageBillAddressCompanySubtext = await this.driver.findElement(this._checkoutPageBillAddressCompanySubtext);
        return checkoutPageBillAddressCompanySubtext.getText();
    }

    async getCheckoutPageBillAddressSubtext() {
        const checkoutPageBillAddressSubtext = await this.driver.findElement(this._checkoutPageBillAddressSubtext);
        return checkoutPageBillAddressSubtext.getText();
    }

    async getCheckoutPageBillAddressCountrySubtext() {
        const checkoutPageBillAddressCountrySubtext = await this.driver.findElement(this._checkoutPageBillAddressCountrySubtext);
        return checkoutPageBillAddressCountrySubtext.getText();
    }

    async getCheckoutPageBillAddressProvinceSubtext() {
        const checkoutPageBillAddressProvinceSubtext = await this.driver.findElement(this._checkoutPageBillAddressProvinceSubtext);
        return checkoutPageBillAddressProvinceSubtext.getText();
    }

    async getCheckoutPageBillAddressCitySubtext() {
        const checkoutPageBillAddressCitySubtext = await this.driver.findElement(this._checkoutPageBillAddressCitySubtext);
        return checkoutPageBillAddressCitySubtext.getText();
    }

    async getCheckoutPageBillAddressPostCodeSubtext() {
        const checkoutPageBillAddressPostCodeSubtext = await this.driver.findElement(this._checkoutPageBillAddressPostCodeSubtext);
        return checkoutPageBillAddressPostCodeSubtext.getText();
    }

    async getCheckoutPageBillAddressPhoneSubtext() {
        const checkoutPageBillAddressPhoneSubtext = await this.driver.findElement(this._checkoutPageBillAddressPhoneSubtext);
        return checkoutPageBillAddressPhoneSubtext.getText();
    }

    async getCheckoutPageBillAddressDiffAddressSubtext() {
        const checkoutPageBillAddressDiffAddressSubtext = await this.driver.findElement(this._checkoutPageBillAddressDiffAddressSubtext);
        return checkoutPageBillAddressDiffAddressSubtext.getText();
    }

    //shipping address
    async getCheckoutPageShipAddressSectionTitle() {
        const checkoutPageShipAddressSectionTitle = await this.driver.findElement(this._checkoutPageShipAddressSectionTitle);
        return checkoutPageShipAddressSectionTitle.getText();
    }

    //input form
    async getCheckoutPageShipAddressFirstNameSubtext() {
        const checkoutPageShipAddressFirstNameSubtext = await this.driver.findElement(this._checkoutPageShipAddressFirstNameSubtext);
        return checkoutPageShipAddressFirstNameSubtext.getText();
    }

    async getCheckoutPageShipAddressLastNameSubtext() {
        const checkoutPageShipAddressLastNameSubtext = await this.driver.findElement(this._checkoutPageShipAddressLastNameSubtext);
        return checkoutPageShipAddressLastNameSubtext.getText();
    }

    async getCheckoutPageShipAddressCompanySubtext() {
        const checkoutPageShipAddressCompanySubtext = await this.driver.findElement(this._checkoutPageShipAddressCompanySubtext);
        return checkoutPageShipAddressCompanySubtext.getText();
    }

    async getCheckoutPageShipAddressSubtext() {
        const checkoutPageShipAddressSubtext = await this.driver.findElement(this._checkoutPageShipAddressSubtext);
        return checkoutPageShipAddressSubtext.getText();
    }

    async getCheckoutPageShipAddressCountrySubtext() {
        const checkoutPageShipAddressCountrySubtext = await this.driver.findElement(this._checkoutPageShipAddressCountrySubtext);
        return checkoutPageShipAddressCountrySubtext.getText();
    }

    async getCheckoutPageShipAddressProvinceSubtext() {
        const checkoutPageShipAddressProvinceSubtext = await this.driver.findElement(this._checkoutPageShipAddressProvinceSubtext);
        return checkoutPageShipAddressProvinceSubtext.getText();
    }

    async getCheckoutPageShipAddressCitySubtext() {
        const checkoutPageShipAddressCitySubtext = await this.driver.findElement(this._checkoutPageShipAddressCitySubtext);
        return checkoutPageShipAddressCitySubtext.getText();
    }

    async getCheckoutPageShipAddressPostCodeSubtext() {
        const checkoutPageShipAddressPostCodeSubtext = await this.driver.findElement(this._checkoutPageShipAddressPostCodeSubtext);
        return checkoutPageShipAddressPostCodeSubtext.getText();
    }

    async getCheckoutPageShipAddressPhoneSubtext() {
        const checkoutPageShipAddressPhoneSubtext = await this.driver.findElement(this._checkoutPageShipAddressPhoneSubtext);
        return checkoutPageShipAddressPhoneSubtext.getText();
    }

    //aside summary section
    async getCheckoutPageAsideSummarySubtitle() {
        const checkoutPageAsideSummarySubtitle = await this.driver.findElement(this._checkoutPageAsideSummarySubtitle);
        return checkoutPageAsideSummarySubtitle.getText();
    }

    async getCheckoutPageAsideSummaryProductName() {
        const elements = await this.driver.findElements(this._checkoutPageAsideSummaryProductNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get checkout aside summary product name(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getCheckoutPageAsideSummaryProductQuantity() {
        const elements = await this.driver.findElements(this._checkoutPageAsideSummaryProductQuantityElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get checkout aside summary product quantity(ies):', error.message);
                    return '';
                }
            })
        );
    }

    async getCheckoutPageAsideSummaryProductPrice() {
        const elements = await this.driver.findElements(this._checkoutPageAsideSummaryProductPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get checkout aside summary product price(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getCheckoutPageAsideSummaryItemsTotalSubtext() {
        const checkoutPageAsideSummaryItemsTotalSubtext = await this.driver.findElement(this._checkoutPageAsideSummaryItemsTotalSubtext);
        return checkoutPageAsideSummaryItemsTotalSubtext.getText();
    }

    async getCheckoutPageAsideSummaryDiscountSubtext() {
        const checkoutPageAsideSummaryDiscountSubtext = await this.driver.findElement(this._checkoutPageAsideSummaryDiscountSubtext);
        return checkoutPageAsideSummaryDiscountSubtext.getText();
    }

    async getCheckoutPageAsideSummaryEstCostSubtext() {
        const checkoutPageAsideSummaryEstCostSubtext = await this.driver.findElement(this._checkoutPageAsideSummaryEstCostSubtext);
        return checkoutPageAsideSummaryEstCostSubtext.getText();
    }

    async getCheckoutPageAsideSummaryTaxesTotalSubtext() {
        const checkoutPageAsideSummaryTaxesTotalSubtext = await this.driver.findElement(this._checkoutPageAsideSummaryTaxesTotalSubtext);
        const fullText = await checkoutPageAsideSummaryTaxesTotalSubtext.getText();
        //split the text after ":"
        const match = fullText.match(/^Taxes total:/i);
        return match ? match[0] : '';
    }

    async getCheckoutPageAsideSummaryOrderTotalSubtext() {
        const checkoutPageAsideSummaryOrderTotalSubtext = await this.driver.findElement(this._checkoutPageAsideSummaryOrderTotalSubtext);
        return checkoutPageAsideSummaryOrderTotalSubtext.getText();
    }

    //shipping section
    async getCheckoutPageShipMethodSubtitle() {
        const checkoutPageShipMethodSubtitle = await this.driver.findElement(this._checkoutPageShipMethodSubtitle);
        return checkoutPageShipMethodSubtitle.getText();
    }

    //payment method
    async getCheckoutPagePaymentMethodSubtitle() {
        const checkoutPagePaymentMethodSubtitle = await this.driver.findElement(this._checkoutPagePaymentMethodSubtitle);
        return checkoutPagePaymentMethodSubtitle.getText();
    }

    async getCheckoutPagePaymentMethodPaypalSubtext() {
        const checkoutPagePaymentMethodPaypalSubtext = await this.driver.findElement(this._checkoutPagePaymentMethodPaypalSubtext);
        return checkoutPagePaymentMethodPaypalSubtext.getText();
    }

    async getCheckoutPagePaymentMethodCashOnDeliverySubtitle() {
        const checkoutPagePaymentMethodCashOnDeliverySubtitle = await this.driver.findElement(this._checkoutPagePaymentMethodCashOnDeliverySubtitle);
        return checkoutPagePaymentMethodCashOnDeliverySubtitle.getText();
    }

    async getCheckoutPagePaymentMethodCashOnDeliveryDescription() {
        const checkoutPagePaymentMethodCashOnDeliveryDescription = await this.driver.findElement(this._checkoutPagePaymentMethodCashOnDeliveryDescription);
        return checkoutPagePaymentMethodCashOnDeliveryDescription.getText();
    }

    async getCheckoutPagePaymentMethodBankTransferSubtitle() {
        const checkoutPagePaymentMethodBankTransferSubtitle = await this.driver.findElement(this._checkoutPagePaymentMethodBankTransferSubtitle);
        return checkoutPagePaymentMethodBankTransferSubtitle.getText();
    }

    async getCheckoutPagePaymentMethodBankTransferDescription() {
        const checkoutPagePaymentMethodBankTransferDescription = await this.driver.findElement(this._checkoutPagePaymentMethodBankTransferDescription);
        return checkoutPagePaymentMethodBankTransferDescription.getText();
    }

    async getCheckoutPagePaymentMethodMollieSubtitle() {
        const checkoutPagePaymentMethodMollieSubtitle = await this.driver.findElement(this._checkoutPageOrderSummaryMolliePaymentsSubtitle);
        return checkoutPagePaymentMethodMollieSubtitle.getText();
    }

    //order summary section
    async getCheckoutPageOrderSummarySubtitle() {
        const checkoutPageOrderSummarySubtitle = await this.driver.findElement(this._checkoutPageOrderSummarySubtitle);
        return checkoutPageOrderSummarySubtitle.getText();
    }

    //upper table
    async getCheckoutPageOrderSummaryCurrencySubtext() {
        const checkoutPageOrderSummaryCurrencySubtext = await this.driver.findElement(this._checkoutPageOrderSummaryCurrencySubtext);
        return checkoutPageOrderSummaryCurrencySubtext.getText();
    }

    async getCheckoutPageOrderSummaryLocaleSubtext() {
        const checkoutPageOrderSummaryLocaleSubtext = await this.driver.findElement(this._checkoutPageOrderSummaryLocaleSubtext);
        return checkoutPageOrderSummaryLocaleSubtext.getText();
    }

    //billing address table
    async getCheckoutPageOrderSummaryBillAddressSubtext() {
        const checkoutPageOrderSummaryBillAddressSubtext = await this.driver.findElement(this._checkoutPageOrderSummaryBillAddressSubtext);
        return checkoutPageOrderSummaryBillAddressSubtext.getText();
    }

    //shipping address table
    async getCheckoutPageOrderSummaryShipAddressSubtext() {
        const checkoutPageOrderSummaryShipAddressSubtext = await this.driver.findElement(this._checkoutPageOrderSummaryShipAddressSubtext);
        return checkoutPageOrderSummaryShipAddressSubtext.getText();
    }

    //payments section
    async getCheckoutPageOrderSummaryPaymentsSubtitle() {
        const checkoutPageOrderSummaryPaymentsSubtitle = await this.driver.findElement(this._checkoutPageOrderSummaryPaymentsSubtitle);
        return checkoutPageOrderSummaryPaymentsSubtitle.getText();
    }

    //shipments section
    async getCheckoutPageOrderSummaryShipmentsSubtitle() {
        const checkoutPageOrderSummaryShipmentsSubtitle = await this.driver.findElement(this._checkoutPageOrderSummaryShipmentsSubtitle);
        return checkoutPageOrderSummaryShipmentsSubtitle.getText();
    }

    //order product table
    async getCheckoutPageOrderSummaryProductTableItemSubtext() {
        const checkoutPageOrderSummaryProductTableItemSubtext = await this.driver.findElement(this._checkoutPageOrderSummaryProductTableItemSubtext);
        return checkoutPageOrderSummaryProductTableItemSubtext.getText();
    }

    async getCheckoutPageOrderSummaryProductTableSubscriptionSubtext() {
        const checkoutPageOrderSummaryProductTableSubscriptionSubtext = await this.driver.findElement(this._checkoutPageOrderSummaryProductTableSubscriptionSubtext);
        return checkoutPageOrderSummaryProductTableSubscriptionSubtext.getText();
    }

    async getCheckoutPageOrderSummaryProductTableUnitPriceSubtext() {
        const checkoutPageOrderSummaryProductTableUnitPriceSubtext = await this.driver.findElement(this._checkoutPageOrderSummaryProductTableUnitPriceSubtext);
        return checkoutPageOrderSummaryProductTableUnitPriceSubtext.getText();
    }

    async getCheckoutPageOrderSummaryProductTableQtySubtext() {
        const checkoutPageOrderSummaryProductTableQtySubtext = await this.driver.findElement(this._checkoutPageOrderSummaryProductTableQtySubtext);
        return checkoutPageOrderSummaryProductTableQtySubtext.getText();
    }

    async getCheckoutPageOrderSummaryProductTableSubtotalSubtext() {
        const checkoutPageOrderSummaryProductTableSubtotalSubtext = await this.driver.findElement(this._checkoutPageOrderSummaryProductTableSubtotalSubtext);
        return checkoutPageOrderSummaryProductTableSubtotalSubtext.getText();
    }

    //summary
    async getCheckoutPageOrderSummaryPaymentFeeSubtext() {
        const checkoutPageOrderSummaryPaymentFeeSubtext = await this.driver.findElement(this._checkoutPageOrderSummaryPaymentFeeSubtext);
        return checkoutPageOrderSummaryPaymentFeeSubtext.getText();
    }

    async getCheckoutPageOrderSummaryItemsTotalSubtext() {
        const checkoutPageOrderSummaryItemsTotalSubtext = await this.driver.findElement(this._checkoutPageOrderSummaryItemsTotalSubtext);
        return checkoutPageOrderSummaryItemsTotalSubtext.getText();
    }

    async getCheckoutPageOrderSummaryTaxesTotalSubtext() {
        const checkoutPageOrderSummaryTaxesTotalSubtext = await this.driver.findElement(this._checkoutPageOrderSummaryTaxesTotalSubtext);
        return checkoutPageOrderSummaryTaxesTotalSubtext.getText();
    }

    async getCheckoutPageOrderSummaryDiscountSubtext() {
        const checkoutPageOrderSummaryDiscountSubtext = await this.driver.findElement(this._checkoutPageOrderSummaryDiscountSubtext);
        return checkoutPageOrderSummaryDiscountSubtext.getText();
    }

    async getCheckoutPageOrderSummaryShippingTotalSubtext() {
        const checkoutPageOrderSummaryShippingTotalSubtext = await this.driver.findElement(this._checkoutPageOrderSummaryShippingTotalSubtext);
        return checkoutPageOrderSummaryShippingTotalSubtext.getText();
    }

    async getCheckoutPageOrderSummaryOrderTotalSubtext() {
        const checkoutPageOrderSummaryOrderTotalSubtext = await this.driver.findElement(this._checkoutPageOrderSummaryOrderTotalSubtext);
        return checkoutPageOrderSummaryOrderTotalSubtext.getText();
    }

    async getCheckoutPageOrderSummaryExtraNotesSubtext() {
        const checkoutPageOrderSummaryExtraNotesSubtext = await this.driver.findElement(this._checkoutPageOrderSummaryExtraNotesSubtext);
        return checkoutPageOrderSummaryExtraNotesSubtext.getText();
    }

    //thank you message getter
    async getThankYouMessage(){
        const checkoutPageThankYouMsg = await this.driver.findElement(this._checkoutPageThankYouMessage);
        const fullText = await checkoutPageThankYouMsg.getText();
        //split the text after "."
        const lines = fullText.replace(/\r\n/g, '\n').split('\n').map(line => line.trim());
        return lines.filter(Boolean).slice(0, 2).join(' ');
    }

    //singular input error message getter
    async getCheckoutPageSingularInputErrorMsg() {
        const checkoutPageSingularInputErrorMsg = await this.driver.findElement(this._checkoutPageSingularInputError);
        return checkoutPageSingularInputErrorMsg.getText();
    }

    //checkout page web element assert methods
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    //billing address section assert method
    async isCheckoutPageBillAddressWebElementDisplayed() {
        const elementsToCheck = [
            this._checkoutPageAddressSectionTitle,
            this._checkoutPageAddressBreadcrumb,
            //this._checkoutPageBillAddressSectionTitle,
            this._checkoutPageBillAddressFirstNameSubtext,
            this._checkoutPageBillAddressFirstNameInputField,
            this._checkoutPageBillAddressLastNameSubtext,
            this._checkoutPageBillAddressLastNameInputField,
            this._checkoutPageBillAddressCompanySubtext,
            this._checkoutPageBillAddressCompanyInputField,
            this._checkoutPageBillAddressSubtext,
            this._checkoutPageBillAddressInputField,
            this._checkoutPageBillAddressCountrySubtext,
            this._checkoutPageBillAddressCountryDropdownMenu,
            this._checkoutPageBillAddressCitySubtext,
            this._checkoutPageBillAddressCityInputField,
            this._checkoutPageBillAddressPostCodeSubtext,
            this._checkoutPageBillAddressPostCodeInputField,
            this._checkoutPageBillAddressPhoneSubtext,
            this._checkoutPageBillAddressPhoneInputField,
            this._checkoutPageBillAddressDiffShipAddressCheckbox,
            this._checkoutPageBillAddressDiffAddressSubtext,
            this._checkoutPageAsideSummarySubtitle,
            this._checkoutPageAsideSummaryProductNameElements,
            this._checkoutPageAsideSummaryProductQuantityElements,
            this._checkoutPageAsideSummaryProductPriceElements,
            this._checkoutPageAsideSummaryItemsTotalSubtext,
            this._checkoutPageAsideSummaryItemsTotalPrice,
            this._checkoutPageAsideSummaryDiscountSubtext,
            this._checkoutPageAsideSummaryDiscount,
            this._checkoutPageAsideSummaryEstCostSubtext,
            this._checkoutPageAsideSummaryEstimateCost,
            this._checkoutPageAsideSummaryTaxesTotalSubtext,
            this._checkoutPageAsideSummaryTaxesTotal,
            this._checkoutPageAsideSummaryOrderTotalSubtext,
            this._checkoutPageAsideSummaryOrderTotal,
            this._checkoutPageBillAddressBackToStoreLink,
            this._checkoutPageBillAddressNextButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    //shipping address section assert method
    async isCheckoutPageShipAddressWebElementDisplayed() {
        const elementsToCheck = [
            this._checkoutPageShipAddressSectionTitle,
            this._checkoutPageShipAddressFirstNameSubtext,
            this._checkoutPageShipAddressFirstNameInputField,
            this._checkoutPageShipAddressLastNameSubtext,
            this._checkoutPageShipAddressLastNameInputField,
            this._checkoutPageShipAddressCompanySubtext,
            this._checkoutPageShipAddressCompanyInputField,
            this._checkoutPageShipAddressSubtext,
            this._checkoutPageShipAddressInputField,
            this._checkoutPageShipAddressCountrySubtext,
            this._checkoutPageShipAddressCountryDropdownMenu,
            this._checkoutPageShipAddressCitySubtext,
            this._checkoutPageShipAddressCityInputField,
            this._checkoutPageShipAddressPostCodeSubtext,
            this._checkoutPageShipAddressPostCodeInputField,
            this._checkoutPageShipAddressPhoneSubtext,
            this._checkoutPageShipAddressPhoneInputField
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    //shipping section assert method
    async isCheckoutPageShipSectionWebElementDisplayed(){
        const elementsToCheck = [
            this._checkoutPageShipMethodSubtitle,
            this._checkoutPageShipMethodRadioButton,
            this._checkoutPageShipMethodDescription,
            this._checkoutPageShipMethodPrice
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }
    }

    //payment section assert method
    async isCheckoutPagePaymentSectionWebElementDisplayed(){
        const elementsToCheck = [
            this._checkoutPagePaymentMethodSubtitle,
            this._checkoutPagePaymentMethodPaypalRadioButton,
            this._checkoutPagePaymentMethodPaypalSubtext,
            //this._checkoutPagePaymentMethodCashOnDeliveryRadioButton,
            //this._checkoutPagePaymentMethodCashOnDeliverySubtitle,
            //this._checkoutPagePaymentMethodCashOnDeliveryDescription,
            //this._checkoutPagePaymentMethodBankTransferRadioButton,
            //this._checkoutPagePaymentMethodBankTransferSubtitle,
            //this._checkoutPagePaymentMethodBankTransferDescription
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }
    }

    //mollie payment section assert method
    async isCheckoutPageMolliePaymentSectionWebElementDisplayed(){
        const elementsToCheck = [
            this._checkoutPageOrderSummaryMollieRadioButton,
            this._checkoutPageOrderSummaryMolliePaymentsSubtitle,
            this._checkoutPageOrderSummaryMollieIdealButton,
            this._checkoutPageOrderSummaryMollieCardButton,
            this._checkoutPageOrderSummaryMollieBankTransferButton,
            this._checkoutPageOrderSummaryMolliePaypalButton,
            this._checkoutPageOrderSummaryMollieBancontactButton,
            this._checkoutPageOrderSummaryMollieEpsButton,
            this._checkoutPageOrderSummaryMolliePrzelewy24Button,
            this._checkoutPageOrderSummaryMollieKBCCBCButton,
            this._checkoutPageOrderSummaryMollieBelfiusButton,
            this._checkoutPageOrderSummaryMollieBancomatButton,
            this._checkoutPageOrderSummaryMollieSatispayButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }
    }

    //order summary section assert method
    async isCheckoutPageOrderSummarySectionWebElementDisplayed(){
        const elementsToCheck = [
            this._checkoutPageOrderSummarySubtitle,
            this._checkoutPageOrderSummaryCurrencySubtext,
            this._checkoutPageOrderSummaryCurrency,
            this._checkoutPageOrderSummaryLocaleSubtext,
            this._checkoutPageOrderSummaryLocale,
            this._checkoutPageOrderSummaryBillAddressSubtext,
            this._checkoutPageOrderSummaryBillAddressUserName,
            this._checkoutPageOrderSummaryBillAddress,
            this._checkoutPageOrderSummaryShipAddressSubtext,
            this._checkoutPageOrderSummaryShipAddressUserName,
            this._checkoutPageOrderSummaryShipAddress,
            this._checkoutPageOrderSummaryPaymentsSubtitle,
            this._checkoutPageOrderSummaryPaymentsCost,
            this._checkoutPageOrderSummaryShipmentsSubtitle,
            this._checkoutPageOrderSummaryShipmentsCost,
            this._checkoutPageOrderSummaryProductTableItemSubtext,
            this._checkoutPageOrderSummaryProductTableSubscriptionSubtext,
            this._checkoutPageOrderSummaryProductTableUnitPriceSubtext,
            this._checkoutPageOrderSummaryProductTableQtySubtext,
            this._checkoutPageOrderSummaryProductTableSubtotalSubtext,
            this._checkoutPageOrderSummaryProductTableProductImgElements,
            this._checkoutPageOrderSummaryProductTableProductNameElements,
            //this._checkoutPageOrderSummaryProductTableProductDescElements,
            this._checkoutPageOrderSummaryProductTableUnitPriceElements,
            this._checkoutPageOrderSummaryProductTableQuantityElements,
            this._checkoutPageOrderSummaryProductTableSubtotalPriceElements,
            this._checkoutPageOrderSummaryPaymentFeeSubtext,
            this._checkoutPageOrderSummaryPaymentFee,
            this._checkoutPageOrderSummaryItemsTotalSubtext,
            this._checkoutPageOrderSummaryItemsTotalPrice,
            this._checkoutPageOrderSummaryTaxesTotalSubtext,
            this._checkoutPageOrderSummaryTaxesTotal,
            this._checkoutPageOrderSummaryDiscountSubtext,
            this._checkoutPageOrderSummaryDiscount,
            this._checkoutPageOrderSummaryShippingTotalSubtext,
            this._checkoutPageOrderSummaryShippingTotal,
            this._checkoutPageOrderSummaryOrderTotalSubtext,
            this._checkoutPageOrderSummaryOrderTotal,
            this._checkoutPageOrderSummaryExtraNotesSubtext,
            this._checkoutPageOrderSummaryExtraNotesTextArea,
            this._checkoutPageOrderSummaryPlaceOrderButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }
    }

}
module.exports = { CheckoutPage }
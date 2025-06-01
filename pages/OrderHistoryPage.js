"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger = require("./utils/Logger");

class OrderHistoryPage extends BasePage{

    constructor(driver) {
        super(driver);

        //order history page web elements
        this._orderHistoryPageTitle = By.xpath("//h1[@class='mb-4']");
        this._orderHistoryPayButton = By.xpath("//div[@class='d-flex gap-3 justify-content-end mb-3']/a");
        //order table
        this._orderHistoryOrderStateSubtext = By.xpath("//div[@class='card-body d-flex flex-column gap-1']/div[1]/div[1]");
        this._orderHistoryOrderState = By.xpath("//div[@class='card-body d-flex flex-column gap-1']/div[1]/div[2]//span");
        this._orderHistoryCreatedAtSubtext = By.xpath("//div[@class='card-body d-flex flex-column gap-1']/div[2]/div[1]");
        this._orderHistoryCreatedAtDate = By.xpath("//div[@class='card-body d-flex flex-column gap-1']/div[2]/div[2]");
        this._orderHistoryCurrencySubtext = By.xpath("//div[@class='card-body d-flex flex-column gap-1']/div[3]/div[1]");
        this._orderHistoryCurrency = By.xpath("//div[@class='card-body d-flex flex-column gap-1']/div[3]/div[2]");
        //invoices table section
        this._orderHistoryInvoicesSectionSubtitle = By.xpath("//div[@class='card-header pb-3 mb-3 border-bottom']");
        this._orderHistoryOrderNumberSubtext = By.xpath("//table[@class='table table-sm']/thead//th[1]");
        this._orderHistoryOrderNumber = By.xpath("//table[@class='table table-sm']/tbody//td[1]");
        this._orderHistoryIssuedAtSubtext = By.xpath("//table[@class='table table-sm']/thead//th[2]");
        this._orderHistoryIssuedAtDate = By.xpath("//table[@class='table table-sm']/tbody//td[2]");
        this._orderHistoryActionsSubtext = By.xpath("//table[@class='table table-sm']/thead//th[3]");
        this._orderHistoryInvoiceDownloadButton = By.xpath("//table[@class='table table-sm']/tbody//td[3]");
        //billing address table
        this._orderHistoryBillAddressSubtext = By.xpath("//div[@class='col-12 col-md-6 mb-3'][1]//div[@class='card-header']");
        this._orderHistoryBillAddressUserName = By.xpath("//div[@class='col-12 col-md-6 mb-3'][1]//address/strong");
        this._orderHistoryBillAddress = By.xpath("//div[@class='col-12 col-md-6 mb-3'][1]//address/span");
        //shipping address table
        this._orderHistoryShipAddressSubtext = By.xpath("//div[@class='col-12 col-md-6 mb-3'][2]//div[@class='card-header']");
        this._orderHistoryShipAddressUserName = By.xpath("//div[@class='col-12 col-md-6 mb-3'][2]//address/strong");
        this._orderHistoryShipAddress = By.xpath("//div[@class='col-12 col-md-6 mb-3'][2]//address/span");
        //payments section
        this._orderHistoryPaymentsSubtext = By.xpath("//div[@class='mb-5']/div[1]/div[1]/div[1]");
        this._orderHistoryPaymentsTag = By.xpath("//div[@class='mb-5']/div[1]/div[1]/div[1]//span");
        this._orderHistoryCashOnDeliverySubtext = By.xpath("//div[@class='mb-5']/div[1]/div[2]/div/div[1]");
        this._orderHistorySumAmount = By.xpath("//div[@class='mb-5']/div[1]/div[2]/div/div[1]");
        //this._orderHistoryNewTag = By.xpath("//div[@class='mb-5']/div[1]/div[1]/div[2]//span");
        //shipments section
        this._orderHistoryShipmentsSubtext = By.xpath("//div[@class='mb-5']/div[2]/div[1]/div[1]");
        this._orderHistoryShipmentsTag = By.xpath("//div[@class='mb-5']/div[2]/div[1]/div[2]//span");
        this._orderHistoryShipMethodSubtext = By.xpath("//div[@class='mb-5']/div[2]/div[2]/div/div[1]");
        this._orderHistoryShipMethodTag = By.xpath("//div[@class='mb-5']/div[2]/div[2]/div/div[2]//span");
        //product table
        this._orderHistoryItemSubtext = By.xpath("//table[@class='table table-borderless table-space align-middle mb-0']/thead//th[1]");
        this._orderHistoryProductImgElements = By.xpath("//table[@class='table table-borderless table-space align-middle mb-0']/tbody//td[1]//img");
        this._orderHistoryProductNameLinkElements = By.xpath("//table[@class='table table-borderless table-space align-middle mb-0']/tbody//td[1]//a");
        this._orderHistoryProductDescriptionElements = By.xpath("//table[@class='table table-borderless table-space align-middle mb-0']/tbody//td[1]//span");
        this._orderHistorySubscriptionSubtext = By.xpath("//table[@class='table table-borderless table-space align-middle mb-0']/thead//th[2]");
        this._orderHistoryUnitPriceSubtext = By.xpath("//table[@class='table table-borderless table-space align-middle mb-0']/thead//th[3]");
        this._orderHistoryProductUnitPriceElements = By.xpath("//table[@class='table table-borderless table-space align-middle mb-0']/tbody//td[3]");
        this._orderHistoryQuantitySubtext = By.xpath("//table[@class='table table-borderless table-space align-middle mb-0']/thead//th[4]");
        this._orderHistoryProductQtyElements = By.xpath("//table[@class='table table-borderless table-space align-middle mb-0']/tbody//td[4]");
        this._orderHistorySubtotalSubtext = By.xpath("//table[@class='table table-borderless table-space align-middle mb-0']/thead//th[5]");
        this._orderHistorySubtotalPrice = By.xpath("//table[@class='table table-borderless table-space align-middle mb-0']/tbody//td[5]");
        //order summary section
        //payments section
        this._orderHistoryPaymentFeeSubtext = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']//tr[1]/td[1]");
        this._orderHistoryPaymentFee = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']//tr[1]/td[2]");
        this._orderHistoryItemsTotalSubtext = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']//tr[2]/td[1]");
        this._orderHistoryItemsTotalPrice = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']//tr[2]/td[2]");
        this._orderHistoryTaxesTotalSubtext = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']//tr[3]/td[1]");
        this._orderHistoryTaxesTotal = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']//tr[3]/td[2]");
        this._orderHistoryDiscountSubtext = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']//tr[4]/td[1]");
        this._orderHistoryDiscount = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']//tr[4]/td[2]");
        this._orderHistoryShippingTotalSubtext = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']//tr[5]/td[1]");
        this._orderHistoryShippingTotalPrice = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']//tr[5]/td[2]");
        this._orderHistoryOrderTotalSubtext = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']//tr[6]/td[1]");
        this._orderHistoryOrderTotalPrice = By.xpath("//table[@class='table table-borderless align-middle ms-auto mb-6']//tr[6]/td[2]");
    }

    //order history order data getters

    //order table
    async getOrderState(){
        const orderHistoryOrderState = await this.driver.findElement(this._orderHistoryOrderState);
        return orderHistoryOrderState.getText();
    }
    async getOrderCreatedAtDate(){
        const orderHistoryCreatedAtDate = await this.driver.findElement(this._orderHistoryCreatedAtDate);
        return orderHistoryCreatedAtDate.getText();
    }
    async getOrderCurrency(){
        const orderHistoryCurrency = await this.driver.findElement(this._orderHistoryCurrency);
        return orderHistoryCurrency.getText();
    }

    //invoices table
    async getOrderNumber(){
        const orderNumber = await this.driver.findElement(this._orderHistoryOrderNumber);
        return orderNumber.getText();
    }
    async getOrderIssuedAtDate(){
        const orderIssuedAtDate = await this.driver.findElement(this._orderHistoryIssuedAtDate);
        return orderIssuedAtDate.getText();
    }

    //billing address
    async getBillingAddressUserName(){
        const orderHistoryBillingAddressUserName = await this.driver.findElement(this._orderHistoryBillAddressUserName);
        return orderHistoryBillingAddressUserName.getText();
    }
    async getBillingAddress(){
        const orderHistoryBillingAddress = await this.driver.findElement(this._orderHistoryBillAddress);
        return orderHistoryBillingAddress.getText();
    }

    //shipping address
    async getShippingAddressUserName(){
        const orderHistoryShippingAddressUserName = await this.driver.findElement(this._orderHistoryShipAddressUserName);
        return orderHistoryShippingAddressUserName.getText();
    }
    async getShippingAddress(){
        const orderHistoryShippingAddress = await this.driver.findElement(this._orderHistoryShipAddress);
        return orderHistoryShippingAddress.getText();
    }

    //product table data getters
    async getOrderHistoryProductName() {
        const elements = await this.driver.findElements(this._orderHistoryProductNameLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get order history product name(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getOrderHistoryProductDescription() {
        const elements = await this.driver.findElements(this._orderHistoryProductDescriptionElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get order history product description(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getOrderHistoryProductUnitPrice() {
        const elements = await this.driver.findElements(this._orderHistoryProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get order history product unit price(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getOrderHistoryProductQuantity() {
        const elements = await this.driver.findElements(this._orderHistoryProductQtyElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get order history product quantity(ies):', error.message);
                    return '';
                }
            })
        );
    }

    async getOrderHistoryProductSubtotalPrice() {
        const elements = await this.driver.findElements(this._orderHistorySubtotalPrice);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get order history product subtotal price(s):', error.message);
                    return '';
                }
            })
        );
    }

    //order summary
    async getOrderPaymentFee(){
        const orderPaymentFee = await this.driver.findElement(this._orderHistoryPaymentFee);
        return orderPaymentFee.getText();
    }
    async getOrderItemsTotalPrice(){
        const orderItemsTotalPrice = await this.driver.findElement(this._orderHistoryItemsTotalPrice);
        return orderItemsTotalPrice.getText();
    }
    async getOrderTaxesTotalPrice(){
        const orderTaxesTotalPrice = await this.driver.findElement(this._orderHistoryTaxesTotal);
        return orderTaxesTotalPrice.getText();
    }
    async getOrderDiscount(){
        const orderDiscountAmount = await this.driver.findElement(this._orderHistoryDiscount);
        return orderDiscountAmount.getText();
    }
    async getOrderShippingTotalPrice(){
        const orderShippingTotalPrice = await this.driver.findElement(this._orderHistoryShippingTotalPrice);
        return orderShippingTotalPrice.getText();
    }
    async getOrderTotalPrice(){
        const orderTotalPrice = await this.driver.findElement(this._orderHistoryOrderTotalPrice);
        return orderTotalPrice.getText();
    }


    //order history page web element getters
    async getOrderHistoryPageTitle(){
        const orderHistoryPageTitle = await this.driver.findElement(this._orderHistoryPageTitle);
        return orderHistoryPageTitle.getText();
    }
    //order table
    async getOrderHistoryStateSubtext(){
        const orderHistoryStateSubtext = await this.driver.findElement(this._orderHistoryOrderStateSubtext);
        return orderHistoryStateSubtext.getText();
    }
    async getOrderHistoryCreatedAtSubtext(){
        const orderHistoryCreatedAtSubtext = await this.driver.findElement(this._orderHistoryCreatedAtSubtext);
        return orderHistoryCreatedAtSubtext.getText();
    }
    async getOrderHistoryCurrencySubtext(){
        const orderHistoryCurrencySubtext = await this.driver.findElement(this._orderHistoryCurrencySubtext);
        return orderHistoryCurrencySubtext.getText();
    }
    //invoice table
    async getOrderHistoryInvoicesSectionSubtitle(){
        const orderHistoryInvoicesSectionSubtitle = await this.driver.findElement(this._orderHistoryInvoicesSectionSubtitle);
        return orderHistoryInvoicesSectionSubtitle.getText();
    }
    async getOrderHistoryOrderNumberSubtext(){
        const orderHistoryOrderNumberSubtext = await this.driver.findElement(this._orderHistoryOrderNumberSubtext);
        return orderHistoryOrderNumberSubtext.getText();
    }
    async getOrderHistoryIssuedAtSubtext(){
        const orderHistoryIssuedAtSubtext = await this.driver.findElement(this._orderHistoryIssuedAtSubtext);
        return orderHistoryIssuedAtSubtext.getText();
    }
    async getOrderHistoryActionsSubtext(){
        const orderHistoryActionsSubtext = await this.driver.findElement(this._orderHistoryActionsSubtext);
        return orderHistoryActionsSubtext.getText();
    }
    //billing address
    async getOrderHistoryBillAddressSubtext(){
        const orderHistoryBillAddressSubtext = await this.driver.findElement(this._orderHistoryBillAddressSubtext);
        return orderHistoryBillAddressSubtext.getText();
    }
    //shipping address
    async getOrderHistoryShipAddressSubtext(){
        const orderHistoryShipAddressSubtext = await this.driver.findElement(this._orderHistoryShipAddressSubtext);
        return orderHistoryShipAddressSubtext.getText();
    }
    //payments section
    async getOrderHistoryPaymentsSubtext(){
        const orderHistoryPaymentsSubtext = await this.driver.findElement(this._orderHistoryPaymentsSubtext);
        return orderHistoryPaymentsSubtext.getText();
    }
    async getOrderHistoryCashOnDeliverySubtext(){
        const orderHistoryCashOnDeliverySubtext = await this.driver.findElement(this._orderHistoryCashOnDeliverySubtext);
        return orderHistoryCashOnDeliverySubtext.getText();
    }
    //shipments section
    async getOrderHistoryShipmentsSubtext(){
        const orderHistoryShipmentsSubtext = await this.driver.findElement(this._orderHistoryShipmentsSubtext);
        return orderHistoryShipmentsSubtext.getText();
    }
    async getOrderHistoryShipMethodSubtext(){
        const orderHistoryShipMethodSubtext = await this.driver.findElement(this._orderHistoryShipMethodSubtext);
        return orderHistoryShipMethodSubtext.getText();
    }
    //product table
    async getOrderHistoryItemSubtext(){
        const orderHistoryItemSubtext = await this.driver.findElement(this._orderHistoryItemSubtext);
        return orderHistoryItemSubtext.getText();
    }
    async getOrderHistorySubscriptionSubtext(){
        const orderHistorySubscriptionSubtext = await this.driver.findElement(this._orderHistorySubscriptionSubtext);
        return orderHistorySubscriptionSubtext.getText();
    }
    async getOrderHistoryUnitPriceSubtext(){
        const orderHistoryUnitPriceSubtext = await this.driver.findElement(this._orderHistoryUnitPriceSubtext);
        return orderHistoryUnitPriceSubtext.getText();
    }
    async getOrderHistoryProductQuantitySubtext(){
        const orderHistoryProductQuantitySubtext = await this.driver.findElement(this._orderHistoryQuantitySubtext);
        return orderHistoryProductQuantitySubtext.getText();
    }
    async getOrderHistoryProductSubtotalPriceSubtext(){
        const orderHistoryProductSubtotalSubtext = await this.driver.findElement(this._orderHistorySubtotalSubtext);
        return orderHistoryProductSubtotalSubtext.getText();
    }
    //order summary section
    //payments section
    async getOrderHistoryPaymentFeeSubtext(){
        const orderHistoryPaymentFeeSubtext = await this.driver.findElement(this._orderHistoryPaymentFeeSubtext);
        return orderHistoryPaymentFeeSubtext.getText();
    }
    async getOrderHistoryItemsTotalSubtext(){
        const orderHistoryItemsTotalSubtext = await this.driver.findElement(this._orderHistoryItemsTotalSubtext);
        return orderHistoryItemsTotalSubtext.getText();
    }
    async getOrderHistoryTaxesTotalSubtext(){
        const orderHistoryTaxesTotalSubtext = await this.driver.findElement(this._orderHistoryTaxesTotalSubtext);
        return orderHistoryTaxesTotalSubtext.getText();
    }
    async getOrderHistoryDiscountSubtext(){
        const orderHistoryDiscountSubtext = await this.driver.findElement(this._orderHistoryDiscountSubtext);
        return orderHistoryDiscountSubtext.getText();
    }
    async getOrderHistoryShippingTotalSubtext(){
        const orderHistoryShippingTotalSubtext = await this.driver.findElement(this._orderHistoryShippingTotalSubtext);
        return orderHistoryShippingTotalSubtext.getText();
    }
    async getOrderHistoryOrderTotalSubtext(){
        const orderHistoryOrderTotalSubtext = await this.driver.findElement(this._orderHistoryOrderTotalSubtext);
        return orderHistoryOrderTotalSubtext.getText();
    }

    //checkout page web element assert methods
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    //order history page web element assert method
    async isOrderHistoryPageWebElementDisplayed() {
        const elementsToCheck = [
            this._orderHistoryPageTitle,
            this._orderHistoryPayButton,
            this._orderHistoryOrderStateSubtext,
            this._orderHistoryOrderState,
            this._orderHistoryCreatedAtSubtext,
            this._orderHistoryCreatedAtDate,
            this._orderHistoryCurrencySubtext,
            this._orderHistoryCurrency,
            this._orderHistoryInvoicesSectionSubtitle,
            this._orderHistoryOrderNumber,
            this._orderHistoryIssuedAtSubtext,
            this._orderHistoryIssuedAtDate,
            this._orderHistoryActionsSubtext,
            this._orderHistoryInvoiceDownloadButton,
            this._orderHistoryBillAddressSubtext,
            this._orderHistoryBillAddressUserName,
            this._orderHistoryBillAddress,
            this._orderHistoryShipAddressSubtext,
            this._orderHistoryShipAddressUserName,
            this._orderHistoryShipAddress,
            this._orderHistoryPaymentsSubtext,
            //this._orderHistoryPaymentsTag,
            this._orderHistoryCashOnDeliverySubtext,
            this._orderHistorySumAmount,
            //this._orderHistoryNewTag,
            this._orderHistoryShipmentsSubtext,
            //this._orderHistoryShipmentsTag,
            this._orderHistoryShipMethodSubtext,
            //this._orderHistoryShipMethodTag,
            this._orderHistoryItemSubtext,
            this._orderHistoryProductImgElements,
            this._orderHistoryProductNameLinkElements,
            this._orderHistoryProductDescriptionElements,
            this._orderHistorySubscriptionSubtext,
            this._orderHistoryUnitPriceSubtext,
            this._orderHistoryProductUnitPriceElements,
            this._orderHistoryQuantitySubtext,
            this._orderHistoryProductQtyElements,
            this._orderHistorySubtotalSubtext,
            this._orderHistorySubtotalPrice,
            this._orderHistoryPaymentFeeSubtext,
            this._orderHistoryPaymentFee,
            this._orderHistoryItemsTotalSubtext,
            this._orderHistoryItemsTotalPrice,
            this._orderHistoryTaxesTotalSubtext,
            this._orderHistoryTaxesTotal,
            this._orderHistoryDiscountSubtext,
            this._orderHistoryDiscount,
            this._orderHistoryShippingTotalSubtext,
            this._orderHistoryShippingTotalPrice,
            this._orderHistoryOrderTotalSubtext,
            this._orderHistoryOrderTotalPrice
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { OrderHistoryPage }
"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const TestDataGenerator = require('./utils/TestDataGenerator');
const { RegisterPage } = require('../pages/RegisterPage');
const Logger = require("./utils/Logger");

class AddReviewPage extends BasePage{

    constructor(driver) {
        super(driver);

        //add review page elements
        this._addReviewPageSectionTitle = By.xpath("//div[@class='col-12 col-md-7 col-lg-8']/h1");
        this._addReviewPageProductMainImage = By.xpath("//div[@class='col-12 col-md-5 col-lg-4']//img");
        this._addReviewPageProductName = By.xpath("//div[@class='col-12 col-md-5 col-lg-4']//div[@class='h6 text-break']");
        this._addReviewPageProductUnitPrice = By.xpath("//div[@class='col-12 col-md-5 col-lg-4']//span");
        this._addReviewPageRatingSubtext = By.xpath("//legend");
        this._addReviewPageRatingStarElements = By.xpath("//div[@class='sylius-rating']//input");
        //input form
        this._addReviewPageTitleSubtext = By.xpath("//label[@for='sylius_shop_product_review_title']");
        this._addReviewPageTitleInputField = By.xpath("//input[@id='sylius_shop_product_review_title']");
        this._addReviewPageCommentSubtext = By.xpath("//label[@for='sylius_shop_product_review_comment']");
        this._addReviewPageCommentTextarea = By.xpath("//textarea[@id='sylius_shop_product_review_comment']");
        this._addReviewPageEmailSubtext = By.xpath("//label[@for='sylius_shop_product_review_author_email']");
        this._addReviewPageEmailInputField = By.xpath("//input[@id='sylius_shop_product_review_author_email']");
        this._addReviewPageAddReviewButton = By.xpath("//button[@class='btn btn-primary']");
        //add review approval wait message
        this._addReviewApprovalMessage = By.xpath("//div[@role='alert']");

        const testDataGenerator = new TestDataGenerator(this.driver);
        const registerPage = new RegisterPage(this.driver)

        //valid comment data
        this._validProductCommentTitle = testDataGenerator.generateRandomCommentTitle();
        this._validProductComment = testDataGenerator.generateRandomComment();
        //valid guest email
        this._validGuestEmail = testDataGenerator.generateRandomEmailAddress(9);
    }

    //click set review stars method
    async clickSetReviewStars(index) {
        //find and list elements
        const setReviewStarElements = await this.driver.findElements(this._addReviewPageRatingStarElements);
        //assert list elements isn't empty
        if (setReviewStarElements.length === 0) {throw new Error("No clickable review stars found on add review page.");}

        //choose set product
        const setReviewStarsCount = setReviewStarElements[index];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", setReviewStarsCount);
        await this.driver.executeScript("arguments[0].click();", setReviewStarsCount);
    }

    //input valid comment title method
    async inputValidProductCommentTitleIntoTitleInputField(){
        const commentTitleInputField = await this.driver.findElement(this._addReviewPageTitleInputField);
        const commentTitle = this._validProductCommentTitle;
        Logger.info("Valid product comment title: " + commentTitle);
        await commentTitleInputField.sendKeys(commentTitle);
    }

    //input valid comment method
    async inputValidProductCommentIntoCommentTextarea(){
        const commentTextarea = await this.driver.findElement(this._addReviewPageCommentTextarea);
        const comment = this._validProductComment;
        Logger.info("Valid product comment: " + comment);
        await commentTextarea.sendKeys(comment);
    }

    //input valid guest email method
    async inputValidGuestEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._addReviewPageEmailInputField);
        const guestEmail = this._validGuestEmail;
        Logger.info("Valid guest email: " + guestEmail);
        await emailInputField.sendKeys(guestEmail);
    }

    //click 'Add' button method
    async clickAddButton(){
        const addButton = await this.driver.findElement(this._addReviewPageAddReviewButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: addButton }).click().perform();
    }

    //add review page product data getters
    async getAddReviewPageProductName(){
        const addReviewPageProductName = await this.driver.findElement(this._addReviewPageProductName);
        return await addReviewPageProductName.getText();
    }
    async getAddReviewPageProductUnitPrice(){
        const addReviewPageProductUnitPrice = await this.driver.findElement(this._addReviewPageProductUnitPrice);
        return await addReviewPageProductUnitPrice.getText();
    }

    //add review page text element getters
    async getAddReviewPageTitle(){
        const addReviewPageTitle = await this.driver.findElement(this._addReviewPageSectionTitle);
        return await addReviewPageTitle.getText();
    }
    async getAddReviewPageRatingSubtext(){
        const addReviewPageRatingSubtext = await this.driver.findElement(this._addReviewPageRatingSubtext);
        return await addReviewPageRatingSubtext.getText();
    }
    async getAddReviewPageTitleSubtext(){
        const addReviewPageTitleSubtext = await this.driver.findElement(this._addReviewPageTitleSubtext);
        return await addReviewPageTitleSubtext.getText();
    }
    async getAddReviewPageCommentSubtext(){
        const addReviewPageCommentSubtext = await this.driver.findElement(this._addReviewPageCommentSubtext);
        return await addReviewPageCommentSubtext.getText();
    }
    async getAddReviewPageEmailSubtext(){
        const addReviewPageEmailSubtext = await this.driver.findElement(this._addReviewPageEmailSubtext);
        return await addReviewPageEmailSubtext.getText();
    }

    //add review wait approval message getter
    async getAddReviewApprovalWaitMessage(){
        const addReviewApprovalWaitMsg = await this.driver.findElement(this._addReviewApprovalMessage);
        return await addReviewApprovalWaitMsg.getText();
    }

    //add review page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isAddReviewPagePageWebElementDisplayed(){
        const elementsToCheck = [
            this._addReviewPageSectionTitle,
            this._addReviewPageProductMainImage,
            this._addReviewPageProductName,
            this._addReviewPageProductUnitPrice,
            this._addReviewPageRatingSubtext,
            //this._addReviewPageRatingStarElements,
            this._addReviewPageTitleSubtext,
            this._addReviewPageTitleInputField,
            this._addReviewPageCommentSubtext,
            this._addReviewPageCommentTextarea,
            //this._addReviewPageEmailSubtext,
            //this._addReviewPageEmailInputField,
            this._addReviewPageAddReviewButton,
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { AddReviewPage }
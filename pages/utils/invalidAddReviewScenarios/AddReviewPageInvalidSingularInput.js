"use strict"

const { By } = require('selenium-webdriver');
const BasePage = require('../BasePage');
const TestDataGenerator = require("../TestDataGenerator");
const Logger = require("../Logger");

class AddReviewPageInvalidSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        this._addReviewPageTitleSubtext = By.xpath("//label[@for='sylius_shop_product_review_title']");
        this._addReviewPageTitleInputField = By.xpath("//input[@id='sylius_shop_product_review_title']");
        this._addReviewPageCommentSubtext = By.xpath("//label[@for='sylius_shop_product_review_comment']");
        this._addReviewPageCommentTextarea = By.xpath("//textarea[@id='sylius_shop_product_review_comment']");
        this._addReviewPageEmailSubtext = By.xpath("//label[@for='sylius_shop_product_review_author_email']");
        this._addReviewPageEmailInputField = By.xpath("//input[@id='sylius_shop_product_review_author_email']");
        this._addReviewPageAddReviewButton = By.xpath("//button[@class='btn btn-primary']");
        //add review singular input error message
        this._addReviewPageSingularInputErrorMessage = By.xpath("//div[@class='invalid-feedback d-block']");

        const testDataGenerator = new TestDataGenerator(this.driver);

        //invalid singular input data - no singular input
        this._noProductCommentTitle = "";
        this._noProductComment = "";
        this._noGuestEmail = "";

        //invalid singular input data - too short singular input
        this._tooShortProductCommentTitle = "R"; // 1 char
        this._tooShortProductComment = "G"; // 1 char
        this._tooShortGuestEmail = testDataGenerator.generateRandomTooShortEmailAddress(1); // 1 char -> name,domain

        //invalid singular input data - too long singular input
        this._tooLongProductCommentTitle = "Rdsffhgfhsdegttgyujiilukfgdsfdgchjkliiuikyuiiopopiiuyytrefdawsfgvxvxfgdsfsdfgeerweqerettuyhfgfdfgdfdafghjkmnbvcxzzscdvfbghjhrgertyukjhgfdsfghjkjhrtuybgdrgjdfbjdcnmsajfnskfnfdskfkjsdkfkwmlfgjksflksdfjndskgjfnfdsfgkjesfrkdsffdkbkldfkgmlektielrkegfdgldfsdfsff"; //256 chars
        this._tooLongProductComment = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue enim et libero tempor, at commodo ante dignissim. Nullam ut urna pharetra, ultricies purus vel, rutrum ipsum. Maecenas id nisi eget elit euismod rutrum id eu diam. Praesent accumsan fermentum magna, id lobortis odio pulvinar ut. Cras tempus volutpat tellus, eget pretium orci finibus at. In hac habitasse platea dictumst. Duis vulputate nulla sit amet arcu dictum, at feugiat eros bibendum. Nullam eget felis id mauris finibus fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus commodo mauris arcu, at molestie tellus consequat vitae. Suspendisse potenti. Nulla facilisi. Ut ipsum nibh, congue vitae nisi quis, maximus molestie arcu. Nullam eu dolor ac metus tincidunt rhoncus. Nulla consectetur eleifend ipsum, a semper neque posuere vel. Donec id urna venenatis, scelerisque ligula at, consectetur tellus.\n" +
            "Etiam fermentum congue vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Integer nulla metus, finibus sit amet luctus gravida, elementum accumsan nisi. Mauris porta tortor vel magna sodales, ac tristique diam finibus. Suspendisse potenti. Donec et orci ac risus varius vulputate id non risus. Suspendisse potenti. Mauris bibendum felis a mauris hendrerit, in maximus arcu facilisis. Nullam at ipsum ut eros ultrices sagittis. Vestibulum sed hendrerit quam. Integer fermentum lacus in molestie pharetra. Proin quis magna ultrices, faucibus ex eu, feugiat lacus. Morbi a justo urna. Vestibulum nec faucibus magna, quis vehicula velit.\n" +
            "Aliquam vitae gravida mauris. Suspendisse suscipit rutrum nulla, sit amet faucibus nunc iaculis vel. Phasellus auctor nibh vel nisi luctus, vitae varius metus dictum. In nec risus lectus. Nulla facilisi. Proin sit amet ex quis lacus pellentesque gravida ac vel nibh. Mauris at facilisis enim. Vivamus porta, ipsum sit amet dapibus auctor, risus augue ultrices nisi, eu aliquet nisl justo vitae enim. Nullam viverra felis a orci posuere auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Sed sed ex sed quam maximus tempus.\n" +
            "Proin tincidunt nisl vitae vulputate sodales. In varius ante in erat ornare egestas. Aliquam rhoncus elit quis pulvinar luctus. Aliquam suscipit feugiat turpis, eu euismod ante fermentum eu. Vestibulum lorem nisi, porttitor vel dolor non, elementum semper urna. Cras dictum pharetra odio a dictum. Nam a bibendum leo. Integer placerat, dolor sed finibus tristique, sapien lectus euismod orci, vel pharetra neque ipsum eget nisi. Phasellus sit amet nibh vitae dolor convallis vestibulum sed eget ipsum. Sed sodales nisl eget turpis congue tincidunt. Vestibulum eu nulla ac nulla tincidunt viverra. Pellentesque a velit quis odio pretium dapibus nec in mauris. Vestibulum venenatis nibh id orci aliquam, vitae placerat quam rutrum. Morbi posuere metus a velit tempus, ut blandit justo pharetra. Phasellus nulla odio, faucibus vel varius eu, pharetra eget diam.\n" +
            "Ut sit amet erat venenatis, suscipit nibh quis, convallis est. Aliquam suscipit vel ipsum et aliquam. Duis dictum sagittis sapien at fringilla. Mauris faucibus dolor ante, vel suscipit eros varius tincidunt. Pellentesque interdum blandit dignissim. Curabitur imperdiet, nulla et mattis varius, tortor tortor volutpat massa, vel malesuada lacus nisl a mauris. Cras ac elit sed nunc euismod placerat. Aenean a tempus tellus, et aliquam nunc. Pellentesque consectetur purus sed lorem auctor, in interdum magna euismod. Nulla lacinia, quam ut blandit egestas, risus tortor sollicitudin magna, at varius elit ipsum sagittis tellus. Sed vulputate velit elit, et faucibus nisl condimentum nec. Sed vitae purus sit amet urna vulputate fermentum. Etiam nisl orci, semper et leo non, sollicitudin egestas urna. Sed non vehicula nibh. Nulla eu congue nisi, sed auctor nibh. Integer non sapien sit amet purus finibus gravida.\n" +
            "Etiam ultrices nunc vitae leo sodales pulvinar. Aliquam malesuada dolor vel magna faucibus, eget rhoncus arcu consectetur. Sed eu orci eget felis ullamcorper porttitor. Nulla facilisi. Nulla facilisi. Nam fermentum mauris sed lectus facilisis, a eleifend nibh convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas euismod orci non dolor maximus, eu cursus velit suscipit. Integer sit amet vestibulum lectus. Mauris maximus ultricies malesuada. Donec et libero convallis, bibendum ante ut, posuere tortor. Nullam consequat ultrices mi, et pellentesque neque posuere fermentum. Donec ut vulputate eros. Etiam fringilla eleifend metus quis lobortis. Fusce ac dictum felis. Aenean fermentum purus sed posuere iaculis.\n" +
            "Praesent condimentum rhoncus felis, sit amet consectetur sem porttitor at. Sed efficitur eros velit, vitae condimentum dolor finibus eu. Maecenas vel nibh id sapien pulvinar condimentum at at turpis. Vivamus quam eros, condimentum et semper id, euismod ac dolor. Pellentesque faucibus suscipit lacus a commodo. In id purus et nibh aliquam efficitur. Pellentesque faucibus finibus lectus et elementum. Mauris sodales mauris sed nisi gravida pretium. Vivamus finibus purus eu metus tristique, non tincidunt felis tempus. Fusce et est scelerisque, rhoncus est et, eleifend sem. Duis luctus consequat dui. Sed iaculis lacus vitae sapien accumsan, ac lacinia ligula viverra. Nullam id suscipit urna, vel semper nunc. Integer ut velit leo. Quisque non magna et dui consequat consequat non eu nibh.\n" +
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec faucibus non dui ac ultrices. Nulla nec vulputate dui. Nam et mi pharetra, consectetur dui vel, tempus nisi. Maecenas vel tortor id quam fringilla convallis. Donec bibendum placerat erat, eget accumsan lacus tincidunt id. Mauris placerat molestie urna, non placerat nisl viverra ut. Suspendisse a dapibus ante. In malesuada fermentum neque sed iaculis. Integer consequat risus at volutpat imperdiet. Fusce cursus ut elit et mattis. Ut et ex fringilla, vulputate elit in, fringilla sapien. Nulla id ultricies tellus, at elementum justo. Morbi non blandit arcu. Etiam id purus a neque tempus sodales eu et odio. Nullam volutpat erat vitae ipsum dignissim condimentum.\n" +
            "Sed eget tempus orci. Aenean fermentum nibh augue, sed mattis ligula pellentesque in. Nulla blandit ipsum vitae luctus posuere. Cras dictum sem justo, at gravida sapien pulvinar quis. Aliquam erat volutpat. Ut eget enim massa. Ut non vehicula urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse auctor facilisis mi, nec tincidunt massa fermentum eu.\n" +
            "Nullam semper nibh eu convallis molestie. Nam id ultrices arcu, et dignissim lorem. Nam vitae aliquam mauris, et accumsan nulla. Ut interdum viverra dignissim. Aenean nec sem vel metus viverra efficitur. Pellentesque ante turpis, hendrerit ac rutrum nec, aliquam quis purus. Fusce vestibulum, lacus ut scelerisque consectetur, nunc dolor elementum sapien, viverra consequat nisl libero varius nisl. Sed gravida hendrerit mattis. Phasellus consectetur vitae felis nec interdum. In hac habitasse platea dictumst. Donec molestie quis nisl eget feugiat.\n" +
            "Ut sit amet purus eu lacus dignissim viverra in in libero. Integer dapibus nibh turpis, vel rhoncus risus sollicitudin eu. Integer eu vulputate tellus. In vitae molestie mi. Nullam ipsum tellus, viverra eu faucibus eu, hendrerit in purus. Maecenas condimentum semper risus ac convallis. Quisque eget sollicitudin risus. Suspendisse sed neque velit. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Sed vitae scelerisque purus. Phasellus condimentum dui et sollicitudin aliquet. Suspendisse molestie eleifend orci, at sagittis velit mattis ut. Suspendisse tincidunt hendrerit faucibus. Sed sodales augue vitae neque porttitor, non commodo diam vehicula. Donec luctus enim vitae malesuada vestibulum.\n" +
            "Maecenas sed dui bibendum, vulputate purus ac, vehicula justo. Nullam quis turpis eu metus fermentum gravida. Curabitur augue nulla, consequat nec nisl in, tristique commodo elit. Nullam dictum dolor eu felis finibus, vel faucibus arcu malesuada. In hac habitasse platea dictumst. Sed congue ipsum sed mauris rhoncus congue. Maecenas id bibendum felis. Suspendisse quis lacus maximus, finibus nibh pulvinar, sollicitudin velit. Nam at risus sapien. Cras rhoncus at ante id lacinia. Maecenas quis velit nulla. Nunc id facilisis nibh. Curabitur vel vehicula risus, vel luctus sapien. Duis sollicitudin dictum urna ac ullamcorper. Pellentesque a augue volutpat, vulputate diam at, mattis elit.\n" +
            "Maecenas feugiat diam ipsum, sed suscipit turpis condimentum quis. In sit amet nibh et sem iaculis venenatis non at risus. In sodales hendrerit ex, vitae condimentum risus feugiat at. Fusce bibendum ex id ipsum placerat, et vulputate enim vulputate. Etiam lacinia a eros at euismod. Fusce eget dolor ullamcorper, rhoncus nisi vel, accumsan odio. Mauris hendrerit felis sed consectetur pellentesque. Duis ullamcorper dolor arcu, sit amet vestibulum nisi ultrices at. Cras vitae lobortis enim. Morbi varius, quam non mattis maximus, enim augue vulputate est, nec aliquet sapien nisl vitae libero. Praesent sagittis, lectus in pellentesque vehicula, diam nulla sagittis quam, eget consequat erat lorem nec diam. Suspendisse posuere diam vitae sodales vestibulum. Aenean ornare, sem vitae gravida venenatis, lectus diam semper ligula, a faucibus massa orci quis lectus. Proin cursus nisi diam, eget dignissim arcu ultrices sed.\n" +
            "Morbi interdum efficitur dui non dapibus. Morbi hendrerit lectus eu eleifend fermentum. Vestibulum tincidunt nibh vel augue hendrerit euismod. Cras fermentum placerat nisl, aliquet aliquam nisl iaculis ut. Aliquam velit eros, ultrices in augue in, rhoncus posuere justo. Quisque facilisis purus eu enim facilisis, ac faucibus sapien ultrices. Nunc pellentesque eget tellus quis feugiat. Vestibulum consectetur orci nec com"; // 10001 chars
        this._tooLongGuestEmail = testDataGenerator.generateRandomTooLongEmailAddress(100); // 100 chars
    }

    //invalid singular input data methods - no singular input
    async inputNoProductCommentTitleIntoTitleInputField(){
        const commentTitleInputField = await this.driver.findElement(this._addReviewPageTitleInputField);
        const noCommentTitle = this._noProductCommentTitle;
        Logger.info("No product comment title: " + noCommentTitle);
        await commentTitleInputField.sendKeys(noCommentTitle);
    }
    async inputNoProductCommentIntoCommentTextarea(){
        const commentTextarea = await this.driver.findElement(this._addReviewPageCommentTextarea);
        const noComment = this._noProductComment;
        Logger.info("No product comment: " + noComment);
        await commentTextarea.sendKeys(noComment);
    }
    async inputNoGuestEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._addReviewPageEmailInputField);
        const noGuestEmail = this._noGuestEmail;
        Logger.info("No guest email: " + noGuestEmail);
        await emailInputField.sendKeys(noGuestEmail);
    }

    //invalid singular input data methods - too short singular input
    async inputTooShortProductCommentTitleIntoTitleInputField(){
        const commentTitleInputField = await this.driver.findElement(this._addReviewPageTitleInputField);
        const tooShortCommentTitle = this._tooShortProductCommentTitle;
        Logger.info("Too short product comment title: " + tooShortCommentTitle);
        await commentTitleInputField.sendKeys(tooShortCommentTitle);
    }
    async inputTooShortProductCommentIntoCommentTextarea(){
        const commentTextarea = await this.driver.findElement(this._addReviewPageCommentTextarea);
        const tooShortComment = this._tooShortProductComment;
        Logger.info("Too short product comment: " + tooShortComment);
        await commentTextarea.sendKeys(tooShortComment);
    }
    async inputTooShortGuestEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._addReviewPageEmailInputField);
        const tooShortGuestEmail = this._tooShortGuestEmail;
        Logger.info("Too short guest email: " + tooShortGuestEmail);
        await emailInputField.sendKeys(tooShortGuestEmail);
    }

    //invalid singular input data methods - too long singular input
    async inputTooLongProductCommentTitleIntoTitleInputField(){
        const commentTitleInputField = await this.driver.findElement(this._addReviewPageTitleInputField);
        const tooLongCommentTitle = this._tooLongProductCommentTitle;
        Logger.info("Too long product comment title: " + tooLongCommentTitle);
        await commentTitleInputField.sendKeys(tooLongCommentTitle);
    }
    async inputTooLongProductCommentIntoCommentTextarea(){
        const commentTextarea = await this.driver.findElement(this._addReviewPageCommentTextarea);
        const tooLongComment = this._tooLongProductComment;
        Logger.info("Too long product comment: " + tooLongComment);
        await commentTextarea.sendKeys(tooLongComment);
    }
    async inputTooLongGuestEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._addReviewPageEmailInputField);
        const tooLongGuestEmail = this._tooLongGuestEmail;
        Logger.info("Too long guest email: " + tooLongGuestEmail);
        await emailInputField.sendKeys(tooLongGuestEmail);
    }

    //singular input error message getter
    async getAddReviewPageSingularInputErrorMsg(){
        const addReviewPageSingularInputErrorMsg = await this.driver.findElement(this._addReviewPageSingularInputErrorMessage);
        return await addReviewPageSingularInputErrorMsg.getText();
    }

}
module.exports = { AddReviewPageInvalidSingularInput }
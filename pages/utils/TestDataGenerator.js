"use strict";

const BasePage = require("./BasePage");

class TestDataGenerator extends BasePage{

    //static variables
    static generatedEmail;
    static generatedEditedEmail;
    static generatedPassword;
    static generatedEditedPassword;
    static generatedUsername;
    static generatedAddress;
    static generatedZipCode;
    static generatedPhone;

    constructor(driver) {
        super(driver);

        //first names array
        this.firstNames = [
            "John", "Jane", "Michael", "Sarah", "David", "Emily", "Daniel", "Laura", "James", "Sophia",
            "William", "Olivia", "Benjamin", "Isabella", "Lucas", "Amelia", "Alexander", "Mia", "Ethan", "Charlotte",
            "Henry", "Ella", "Jacob", "Madeline", "Samuel", "Harper", "Nathan", "Grace", "Matthew", "Avery",
            "Leo", "Scarlett", "Jack", "Lily", "Sebastian", "Zoey", "Gabriel", "Victoria", "Samuel", "Chloe",
            "Owen", "Audrey", "Daniel", "Zoe", "Aiden", "Hannah", "Elijah", "Addison", "Ryan", "Natalie",
            "Joseph", "Hannah", "Isaac", "Lucy", "Luke", "Sadie", "Caleb", "Stella", "Jack", "Sophie",
            "Wyatt", "Megan", "Jack", "Madelyn", "Caleb", "Ella", "Andrew", "Ava", "Mason", "Layla",
            "Carter", "Zara", "Julian", "Grace", "Max", "Kylie", "Landon", "Layla", "Cooper", "Charlotte",
            "Eli", "Victoria", "Charlie", "Luna", "Ezra", "Caroline", "Austin", "Sienna", "Grayson", "Nora",
            "Daniel", "Camila", "Thomas", "Ruby", "Nicholas", "Ivy", "Henry", "Penelope", "Simon", "Emma"
        ];
        //last names array
        this.lastNames = [
            "Smith", "Johnson", "Brown", "Williams", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
            "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
            "Lee", "Perez", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Young", "Allen",
            "King", "Scott", "Green", "Baker", "Adams", "Nelson", "Hill", "Ramirez", "Carter", "Mitchell",
            "Perez", "Roberts", "Evans", "Turner", "Gonzalez", "Phillips", "Campbell", "Parker", "Collins", "Stewart",
            "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Rivera", "Cooper",
            "Richardson", "Cox", "Ward", "Wood", "James", "Hughes", "Green", "Kelley", "Simpson", "Woods",
            "George", "Washington", "Kennedy", "Chavez", "Stevens", "Burgess", "Foster", "Graham", "Duncan", "Hunter",
            "Murray", "Garrett", "Lane", "Russell", "Fox", "Hicks", "Ramos", "Wagner", "Hansen", "Bradley",
            "Carson", "Porter", "Hunter", "Hicks", "Johnston", "Williamson", "Banks", "Meyer", "Bennett", "Dean",
            "Stevenson", "Arnold", "Curtis", "Sanders", "Fisher", "Harrison", "Holly", "Hunt", "Keller", "Vasquez"
        ];

        this._commentTitles = [
            "Perfect Summer Dress", "Disappointing Fit", "Exceeded My Expectations",
            "Not Worth the Price", "Stunning Wedding Guest Dress",
            "Fabric Issues", "Would Recommend to Everyone", "Needs Better Sizing",
            "Best Purchase of the Season", "Color Different from Photos",
            "Elegant Design", "Poor Stitching Quality", "Comfortable All Day",
            "Too Short for Tall Women", "Versatile Style Options",
            "Zipper Broke Quickly", "Fantastic Customer Service", "Outdated Pattern",
            "Beautiful Neckline Detail", "Runs Very Small",
            "Perfect for Special Occasions", "Wrinkles Too Easily", "Flattering Silhouette",
            "Too Sheer for Daywear", "Love the Pockets!",
            "Straps Too Thin", "Excellent Quality Material", "Unflattering Cut",
            "Worth Every Penny", "Overpriced for Synthetic Fabric",
            "Beautiful Lace Details", "Looks Cheaper in Person", "Elegant and Timeless",
            "Shrinks After Washing", "Exactly as Pictured",
            "Not True to Size", "Quick Shipping", "Difficult to Iron",
            "Durable Construction", "Fell Apart After One Wear",
            "Eco-Friendly Packaging", "Poor Return Policy", "Wedding-Ready Elegance",
            "Weird Sizing Chart", "Great for Curvy Figures",
            "Uncomfortable Lining", "Breathable Summer Fabric", "Unexpected Color",
            "Most Complimented Dress", "Complete Waste of Money"
        ];

        this._comments = [
            "This dress is absolutely perfect for summer events. The lightweight fabric keeps me cool and the cut is so flattering. I've received countless compliments!",
            "I ordered my usual size but this dress was at least two sizes smaller. The chest area was extremely tight while the waist was loose. Very odd proportions.",
            "I didn't have high hopes for this price point, but this dress absolutely blew me away. The attention to detail and quality of the fabric is impressive!",
            "For the premium price point, I expected much better quality fabric. The dress looked worn after just one wearing. Definitely not worth what I paid.",
            "Wore this to my cousin's wedding and felt absolutely beautiful. The dress photographs wonderfully and was comfortable enough to dance all night!",
            "The fabric is much thinner than it appeared online and becomes see-through in bright light. Had to buy special undergarments just to wear it.",
            "If you're on the fence about buying this dress, just do it! You won't regret it - I've worn it to three events already and it's perfect every time.",
            "The dress design is beautiful but the sizing is completely off. I had to return twice before finding my correct size - three sizes larger than normal!",
            "I've bought many dresses this season, but this one stands out as my absolute favorite. The cut is perfect for my body type.",
            "The emerald green color I received looks nothing like the vibrant shade shown online. It's much darker and has a strange undertone.",
            "The design of this dress is timelessly elegant. The neckline is particularly beautiful and makes it look much more expensive than it was.",
            "The seams started unraveling after just one gentle wash cycle. When I looked more closely, the stitching was already loose when it arrived.",
            "I wore this dress for a 12-hour day of events and remained comfortable the entire time. No pinching, riding up, or adjusting needed!",
            "I'm 5'10\" and this dress barely covered my backside. What's shown as knee-length in the photos is practically a mini dress on taller women.",
            "I can dress this up with heels and jewelry for formal events or wear it casually with sandals. It's become the most versatile piece in my wardrobe.",
            "The zipper completely broke the second time I wore the dress. It split open while I was at an important business dinner - so embarrassing!",
            "Had an issue with my order and the customer service team sent me a replacement immediately. They even included express shipping at no extra cost!",
            "The pattern feels very dated, like something from decades ago, and not in a fashionably vintage way. It ages me considerably.",
            "The intricate beadwork on the neckline makes this dress special. Each bead is securely attached and catches the light beautifully.",
            "I normally wear a medium but had to exchange for an XL in this dress. The size chart is completely misleading.",
            "This dress is my go-to for weddings, formal dinners, and special dates. The cut is universally flattering and the fabric looks expensive.",
            "The fabric wrinkles if you simply look at it. I spent more time steaming this dress than wearing it. Not practical for real life.",
            "The A-line silhouette hides my problem areas while accentuating my best features. I feel confident and beautiful every time I wear it.",
            "The white dress is completely see-through even with nude undergarments. Had to return it as it's unwearable unless you're at the beach.",
            "A dress with deep pockets that actually hold things! This shouldn't be revolutionary but somehow it is. Plus it's gorgeous!",
            "The straps are so thin they dig painfully into my shoulders and leave marks. Had to sew additional fabric onto them to make it wearable.",
            "The fabric quality surpassed my expectations. It's thick enough to hang beautifully without being heavy, and the lining is soft against the skin.",
            "The empire waist hits at an unflattering spot and makes everyone look pregnant. The model in the photo must be pinned or altered.",
            "Initially thought it was expensive, but after wearing it to multiple events over two years and still receiving compliments, I can see it's worth every cent.",
            "They're charging premium prices for what's clearly polyester pretending to be silk. You can get the same quality at fast fashion stores for a quarter of the price.",
            "The lace overlay is exquisitely detailed and elevates this from a simple dress to something special. The scalloped edges are particularly beautiful.",
            "The photos make this look like a high-end dress, but in person, the cheap fabric and poor construction are immediately obvious.",
            "This dress has a timeless design that won't go out of style. I'll be wearing it for years to come, which makes the investment worthwhile.",
            "Followed the care instructions exactly but the dress still shrank a full size after one cold water wash. Very disappointing quality control.",
            "The dress arrived looking exactly like the website photos. The color is precise and the fit is exactly as described in the size guide.",
            "I ordered based on the size chart but it was still way off. Had to pay for alterations which almost doubled the cost of the dress.",
            "Ordered on Monday and had the dress by Wednesday! Impressive shipping speed meant I had it in time for my weekend event.",
            "The fabric holds wrinkles stubbornly. I've tried everything from steaming to hanging it in a steamy bathroom - nothing works completely.",
            "I've worn and washed this dress countless times over two years and it still looks brand new. The construction quality is impressive.",
            "The hem completely unraveled after one wearing, and then a seam split on the second wearing. This dress is literally falling apart at the seams.",
            "Appreciated the plastic-free, recyclable packaging. Nice to see a fashion company considering their environmental impact.",
            "Tried to return within their 14-day window but was denied because the dress had been taken out of the plastic wrapping. How else could I try it on?",
            "This dress made me feel like royalty at my friend's wedding. The flowing fabric moves beautifully when dancing and photographs like a dream.",
            "According to their size chart I needed a medium, but when it arrived it was enormous. Had to exchange for an XS despite normally wearing an 8-10.",
            "Finally found a dress that accommodates a larger bust and hips while still fitting at the waist. Perfect for hourglass and pear-shaped figures.",
            "The lining is made from some scratchy synthetic material that caused a rash on my sensitive skin. Had to wear a slip underneath to make it wearable.",
            "The cotton-linen blend is perfect for hot weather. I stayed cool and comfortable at an outdoor summer wedding despite the 90-degree heat.",
            "Ordered the 'Dusty Rose' color but received something closer to neon pink. It looks completely different from the sophisticated shade shown online.",
            "Every time I wear this dress, strangers stop me to ask where I got it. It's become my signature piece for making a memorable impression.",
            "Complete waste of money. The dress looked nothing like the photos, was poorly constructed, and the company made returns difficult. Avoid at all costs!"
        ];

        this._illinoisCities = ["Chicago", "Aurora", "Naperville", "Joliet", "Rockford", "Springfield",
            "Elgin", "Peoria", "Champaign", "Waukegan", "Cicero", "Bloomington",
            "Arlington Heights", "Evanston", "Decatur", "Schaumburg", "Bolingbrook",
            "Palatine", "Skokie", "Des Plaines", "Orland Park", "Tinley Park",
            "Oak Lawn", "Berwyn", "Mount Prospect", "Normal", "Wheaton", "Hoffman Estates",
            "Oak Park", "Downers Grove", "Elmhurst", "Glenview", "DeKalb", "Lombard",
            "Moline", "Buffalo Grove", "Bartlett", "Urbana", "Crystal Lake", "Quincy",
            "Streamwood", "Carol Stream", "Romeoville", "Plainfield", "Hanover Park",
            "Carpentersville", "Wheeling", "Park Ridge", "Addison", "Calumet City"];

        this._streetTypes = ["St.", "Ave.", "Blvd.", "Rd.", "Ln.", "Dr.", "Ct.", "Pl."];
    }

    //random item function
    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    //generate random name
    getRandomName() {
        const firstName = this.getRandomItem(this.firstNames);
        const lastName = this.getRandomItem(this.lastNames);
        return { firstName, lastName };
    }

    //email address generator
    generateRandomEmailAddress(length) {
        if (TestDataGenerator.generatedEmail) {
            return TestDataGenerator.generatedEmail;
        }
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const characters = upper + lower;

        TestDataGenerator.randomUsername = this.generateRandomString(characters, length);
        TestDataGenerator.generatedEmail = TestDataGenerator.randomUsername + "@example.com";

        return TestDataGenerator.generatedEmail;
    }
    //edited email address generator
    generateRandomEditedEmailAddress(length) {
        if (TestDataGenerator.generatedEditedEmail) {
            return TestDataGenerator.generatedEditedEmail;
        }
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const characters = upper + lower;

        const randomString = this.generateRandomString(characters, length);
        TestDataGenerator.generatedEditedEmail = randomString + "@fakemail.com";

        return TestDataGenerator.generatedEditedEmail;
    }
    //generate random too short email address
    generateRandomTooShortEmailAddress(length) {
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const characters = upper + lower;

        const randomString = this.generateRandomString(characters, length);
        return randomString + "@e.com";
    }

    //generate random too long email address
    generateRandomTooLongEmailAddress(length) {
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const characters = upper + lower;

        const randomString = this.generateRandomString(characters, length);
        return randomString + "@dffdsddesrxasadsadssfdhghgsdfdsasgfujyyryytiukjkjnvcsasqweweteyttsdsdsfsdfdgdfdfdsdsdyudfidsdfdghjda.com";
    }

    //random password generator
    generateRandomPassword() {
        if (TestDataGenerator.generatedPassword) {
            return TestDataGenerator.generatedPassword;
        }
        const numbers = "0123456789";
        const stokerPart = "Stoker";

        // Generate a random numeric sequence
        let numericPart = '';
        for (let i = 0; i < 3; i++) {
            numericPart += numbers.charAt(this.getRandomInt(numbers.length));
        }
        numericPart += '_'; // Static underscore

        // Shuffle the numeric part
        const shuffledNumericPart = this.shuffleString(numericPart);
        TestDataGenerator.generatedPassword = stokerPart + shuffledNumericPart;
        return TestDataGenerator.generatedPassword;
    }

    shuffleString(string) {
        const array = string.split('');
        for (let i = array.length - 1; i > 0; i--) {
            const j = this.getRandomInt(i + 1);
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array.join('');
    }

    //pick random comment title
    generateRandomCommentTitle(){
        return this.getRandomItem(this._commentTitles)
    }

    //pick random comment
    generateRandomComment(){
        return this.getRandomItem(this._comments)
    }

    //generate random string
    generateRandomString(characters, length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(this.getRandomInt(characters.length));
        }
        return result;
    }

    generateRandomAddress(length) {
        if (length < 1) {
            throw new Error("Street name length must be at least 1.");
        }

        const streetNumber = Math.floor(Math.random() * 9999) + 1; // Street number between 1 and 9999
        const streetName = this.generateRandomString("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", length);
        const streetTypes = ["Street", "Avenue", "Boulevard", "Drive", "Court", "Place", "Lane", "Road"]; // Define STREET_TYPES
        const streetType = this._streetTypes[Math.floor(Math.random() * this._streetTypes.length)];
        TestDataGenerator.generatedAddress = `${streetNumber} ${streetName} ${streetType}`
        return TestDataGenerator.generatedAddress;
    }

    getRandomCity() {
        const randomIndex = Math.floor(Math.random() * this._illinoisCities.length);
        TestDataGenerator.generatedCity = this._illinoisCities[randomIndex]
        return TestDataGenerator.generatedCity ;
    }

    getRandomPostalCode() {
        const minZip = 60000; // Starting zip code for Illinois
        const maxZip = 89999; // Ending zip code range
        TestDataGenerator.generatedZipCode = Math.floor(minZip + Math.random() * (maxZip - minZip + 1));
        return TestDataGenerator.generatedZipCode;
    }

    get password() {return TestDataGenerator.generatedPassword;}

    get randomUsername() {return TestDataGenerator.randomUsername || "";}

    get username() {return TestDataGenerator.generatedUsername}

}
module.exports = TestDataGenerator;
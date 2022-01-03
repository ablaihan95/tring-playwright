const axios = require('axios');
const assert = require("assert");
// 1. Please check there is NO “bourbon” or “whiskey” in the cocktails collection
// 2. Please validate all cocktail names include “vodka”
// 3. Please validate every cocktail has instruction in Italian language
// 4. Assuming we don’t know the amount of cocktails that this method will return , please
// provide the solution to validate the amount is always the same
//
// 5. Please add the instructions on how to execute the suite 6. Use any public Git services to upload the solution

describe('apiTesting', () => {
    it('should post', async () => {
        let drinksObj;
        await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka')
            .then(function (response) {
                //  console.log(response.data);
                drinksObj = response;
            }).catch(function (error) {
                console.log(error);
            })
        let cocktails = drinksObj.data.drinks;
        //console.log(cocktails)
        cocktails.forEach(
            k => assert.match(k.strDrink,
                /vodka/i,
                'name of cocktail is not contain vodka'))
        cocktails.forEach(
            k => assert.doesNotMatch(k.strDrink,
                /bourbon|wisckey/i,
                'name of cocktail is not contain bourbon or wisckey'))
        cocktails.forEach(k =>
            assert.doesNotMatch(k.strInstructionsIT,
                /^$/,
                'italian instruction is not empty'))
        assert.equal(cocktails.length, 6)
    })
})
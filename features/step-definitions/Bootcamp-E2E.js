const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("User opens home page", async () => {
    await browser.url("https://www.newegg.com");
});

Given("User closes promo banner if it appears", async () => {
    try {
        const buttonClose = await $("button[class='close']");
        await buttonClose.waitForDisplayed();
        await buttonClose.click();
    } catch(error) {
        console.error("Promo banner doesn't appear");
    }
});

When("User enters word {string} in search bar", async (word) => {
    const searchBar = await $("input[type='search']");
    await searchBar.setValue(word);
});

When("User clicks search button", async () => {
    const searchButton = await $("button[class*='ico-search']");
    await searchButton.click();
});

Then("At least one item appears in search result", async () => {
    const products = await $("div[class*='item-cells-wrap']");
    await expect(products).toBeExisting();
    await expect(products).toHaveChildren({ gte: 1 });
});

When("User opens 'Today's Best Deals' tab", async () => {
    const todaysBestDeal = await $("[id='trendingBanner_720202']");
    await todaysBestDeal.click();
});

When("User clicks on Logo", async () => {
    const logo = await $("a[class*='logo-img']");
    await logo.click();
});

Then("User is on the main page", async () => {
    await expect(browser).toHaveUrl("https://www.newegg.com/");
});
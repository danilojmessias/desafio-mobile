import { Then, When } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page';

When('I fill login with valid credentials', async () => {
    await LoginPage.fillLogin('test@test.com', '12345678')
});

When('I fill login with invalid email', async () => {
    await LoginPage.fillLogin('test', '12345678')
});

Then('I Validate the success login message', async () => {
    const isDisplayed = await LoginPage.assertSuccessMessage();
    await expect(isDisplayed).toBe(true);
    await LoginPage.clickOkButton();
});

Then('I Validate the invalid email message', async () => {
    const isDisplayed = await LoginPage.assertInvalidEmailMessage();
    await expect(isDisplayed).toBe(true);

});

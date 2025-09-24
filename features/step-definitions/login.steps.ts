import { Then, When } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';
When('I fill login with valid credentials', async () => {
    await LoginPage.fillLogin('test@test.com', '12345678')
});

Then('I Validate the success login message', async () => {
    const isDisplayed = await LoginPage.assertSuccessMessage();
    await expect(isDisplayed).toBe(true);
});

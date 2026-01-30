import { Then, When } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';

import SignUpPage from '../pageobjects/signUp.page';


When('I fill sign up with valid credentials', async () => {
    await SignUpPage.fillSignUp('test@test.com', '12345678')
});

When('I fill sign up with invalid email', async () => {
    await SignUpPage.fillSignUp('test', '12345678')
});

Then('I Validate the success Sign Up Message', async () => {
    const isDisplayed = await SignUpPage.assertSuccessMessage();
    await expect(isDisplayed).toBe(true);
});

Then('I Validate the error message appears', async () => {
    const isDisplayed = await SignUpPage.assertInvalidEmailMessage();
    await expect(isDisplayed).toBe(true);
})
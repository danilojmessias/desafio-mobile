import { When } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/home.page';

When('I go to login page', async () => {
    await HomePage.goToLogin();
});

When('I go to forms page', async () => {
    await HomePage.goToForms();
});

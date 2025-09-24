import { Then, When } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import FormsPage from '../pageobjects/forms.page';

let result: boolean = false;

When('I fill input text', async () => {
    result = await FormsPage.fillAndAssertTextInput('test');
});

Then('I validate the result text', async () => {
    await expect(result).toBe(true);
});

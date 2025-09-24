import { $ } from '@wdio/globals'


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {


    /**
     * define selectors using getter methods
     */
    public get loginButton(){
        return $('~button-login-container')
    }

    public get inputEmail() {
        return $('~input-email');
    }

    public get inputPassword() {
        return $('~input-password');
    }

    public get btnSubmit() {
        return $('~button-LOGIN');
    }

    public get successMessage() {
        return $('android=new UiSelector().resourceId("android:id/message")');
    }

    public async fillLogin(username: string, password: string) {
        await this.loginButton.waitForDisplayed({ timeout: 10000 });
        await this.loginButton.click();
        
        await this.inputEmail.waitForDisplayed({ timeout: 10000 });
        await this.inputEmail.setValue(username);
        
        await this.inputPassword.waitForDisplayed({ timeout: 10000 });
        await this.inputPassword.setValue(password);
        
        await this.btnSubmit.waitForDisplayed({ timeout: 10000 });
        await this.btnSubmit.click();
    }

    public async assertSuccessMessage() {
        await this.successMessage.waitForDisplayed({ timeout: 15000 });
        return await this.successMessage.isDisplayed();
    }

    /**
     * overwrite specific options to adapt it to page object
     */

}

export default new LoginPage();

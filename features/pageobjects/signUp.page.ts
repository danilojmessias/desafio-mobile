import { $ } from '@wdio/globals'


class SignUpPage {

    public get signUpButton(){
        return $('~button-sign-up-container')
    }
    
    public get inputEmail() {
        return $('~input-email');
    }

    public get inputPassword() {
        return $('~input-password');
    }

    public get inputConfirmPassword(){
        return $('~input-repeat-password')
    }

    public get btnSubmit() {
        return $('~button-SIGN UP');
    }

    public get successMessage() {
        return $('android=new UiSelector().resourceId("android:id/message")');
    }

    public async fillSignUp(username: string, password: string) {
        await this.signUpButton.waitForDisplayed({ timeout: 10000 });
        await this.signUpButton.click();
        
        await this.inputEmail.waitForDisplayed({ timeout: 10000 });
        await this.inputEmail.setValue(username);
        
        await this.inputPassword.waitForDisplayed({ timeout: 10000 });
        await this.inputPassword.setValue(password);
        
        await this.inputConfirmPassword.waitForDisplayed({ timeout: 10000 });
        await this.inputConfirmPassword.setValue(password);
        
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

export default new SignUpPage();

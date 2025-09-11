class SignupPage {
    
    get btnSignUp(){return $('~button-sign-up-container')}
    get inputEmail() { return $('~input-email'); }
    get inputPassword() { return $('~input-password'); }
    get inputConfirmPassword() { return $('~input-repeat-password')}
    get btnSubmit() { return $('~button-SIGN UP'); }
    get sucessMessage() { return $('android=new UiSelector().resourceId("android:id/message")')}
    get btnOkSucessMessage() { return $('android=new UiSelector().resourceId("android:id/button1")')}

    async signup(email, password) {
        await this.btnSignUp.click();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputConfirmPassword.setValue(password);
        await this.btnSubmit.click();
    }
    async assertSignUp(){
        await driver.pause(2000);
        const isDisplayed = await this.sucessMessage.isDisplayed();
        await this.btnOkSucessMessage.click();
        return isDisplayed;
    }
}

module.exports = new SignupPage();

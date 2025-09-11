class LoginPage {
    get loginMenuButton() { return $('~Login'); }
    get inputEmail() { return $('~input-email'); }
    get inputPassword() { return $('~input-password'); }
    get inputLoginButton() { return $('~button-LOGIN'); }
    get btnSignup() { return $('~button-sign-up-container'); }


    async login(username, password) {
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.inputLoginButton.click();
    }

    async goToSignup() {
        await driver.pause(3000); // Wait for the app to fully load
        try {
            // Try the primary selector first
            if (await this.btnSignup.isDisplayed()) {
                await this.btnSignup.click();
            } else {
                // Fallback to other selectors if the primary one isn't found
                console.log("Trying alternative selectors for signup button");
                // Try by xpath
                const signupBtn = await $('//android.widget.Button[contains(@content-desc, "SIGNUP") or contains(@content-desc, "SIGN UP") or contains(@text, "SIGNUP") or contains(@text, "SIGN UP")]');
                await signupBtn.click();
            }
        } catch (error) {
            console.error("Error finding signup button:", error);
            throw error;
        }
    }
}

module.exports = new LoginPage();

import { $ } from '@wdio/globals'


class HomePage {

    public get tabMenuLogin() {
        return $('~Login')
    }
    public get tabMenuForms(){
        return $('~Forms')
    }

    public async goToLogin() {
        await this.tabMenuLogin.waitForDisplayed({ timeout: 10000 });
        await this.tabMenuLogin.click();
        await driver.pause(2000);
    }

    public async goToForms() {
        await this.tabMenuForms.waitForDisplayed({ timeout: 10000 });
        await this.tabMenuForms.click();
        await driver.pause(2000);
    }

}

export default new HomePage();

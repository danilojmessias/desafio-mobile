import { $ } from '@wdio/globals'


class HomePage {

    public get tabMenuLogin() {
        return $('~Login')
    }

    public async goToLogin() {
        await this.tabMenuLogin.waitForDisplayed({ timeout: 10000 });
        await this.tabMenuLogin.click();
        await driver.pause(2000);
    }

}

export default new HomePage();

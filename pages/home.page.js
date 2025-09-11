class HomePage {
    get homeMenuButton() { return $('~Home'); }
    get webviewMenuButton() { return $('~Webview'); }
    get loginMenuButton() { return $('~Login'); }
    get formsMenuButton() { return $('~Forms'); }
    get swipeMenuButton() { return $('~Swipe'); }
    get dragMenuButton() { return $('~Drag'); }


    async clickMenuBtn(){
        await this.homeMenuButton.click();
    }
    async clicWebViewBtn(){
        await this.webviewMenuButton.click();
    }
    async clickLoginBtn(){
        await this.loginMenuButton.click();
    }
    async clickFormsBtn(){
        await this.formsMenuButton.click();
    }
    async clickDragBtn(){
        await this.dragMenuButton.click();
    }

}

module.exports = new HomePage();

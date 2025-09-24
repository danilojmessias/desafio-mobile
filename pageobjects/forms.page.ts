import { $ } from '@wdio/globals'

class FormsPage {

    public get inputField() {return $('~text-input')}
    public get inputResultField() {return $('~input-text-result')}
    public get switchField() {return $('~switch')}
    public get switchTextField() {return $('~switch-text')}
    public get dropdownField() {return $('~Dropdown')}
    public get dropdowSelect(){return $('android=new UiSelector().text("webdriver.io is awesome")')}
    public get buttonActive(){return $('~button-Active')}
    public get buttonActiveMessage(){return $('android=new UiSelector().resourceId("android:id/message")')}
    public get buttonActiveOk(){return $('android=new UiSelector().resourceId("android:id/button1")')}
    public get buttonInactive(){return $('~button-Inactive')}

    public async fillAndAssertTextInput(text: string){
        await this.inputField.setValue(text);
        const textResult = await this.inputResultField.getText();
        if (text == textResult)
            return true;
        return false;
    }

    public async clickAndAssertSwitch(){
        await this.switchField.click();
        const text = "Click to turn the switch OFF";
        const switchTextField = await this.switchTextField.getText();
        if (text == switchTextField)
            return true;
        return false;
    }

}

export default new FormsPage();
import { IDriver } from "src/drivers";

export class AnaBaseFlow {
  private driver: IDriver;

  private page: string = '//*[@id="nav-logo-sprites"]';

  private searchInput: string = '//*[@id="twotabsearchtextbox"]';
  private emailInput: string = '//input[@id="ap_email"]';
  private passwordInput: string = '//input[@id="ap_password"]';
  
  private searchButton: string = '//*[@id="nav-search-submit-button"]';
  private nextPageButton: string = '//a[contains(@class,"s-pagination-next")]';
  private loginButton: string = '//a[@id="nav-link-accountList"]';
  private continueButton: string = '//input[@id="continue"]';
  private signInButton: string = '//input[@id="signInSubmit"]';
  private navListButton: string = '//*[@id="nav-link-accountList"]/span';
  private wishListButton: string = '//*[@id="nav-al-your-account"]/a[3]/span';

  private resultTitle: string = '//*[@id="productTitle"]';
  private resultDetails: string = "/html/body/div[1]/div[1]/div[1]/div[1]/div/span[1]/div[1]/div[10]/div/div/span/div/div/div[1]/span/a/div";
  private resultDetails2: string = "/html/body/div[1]/div[1]/div[1]/div[1]/div/span[1]/div[1]/div[10]/div/div/span/div/div/div[1]/span/a/div";
  
  
  constructor(driver: IDriver) {
    this.driver = driver;
  }

  async awaitShowPage() {
    await this.driver.wait(this.page);
  }

  async awaitSearchValue(value: string) {
    await this.driver.input(this.searchInput, value);
  }

  async awaitClickSearchButton() {
    await this.driver.click(this.searchButton);
  }

  async awaitClickFirstResult() {
    await this.driver.click(this.resultDetails);
  }

  async awaitValidateResults (value: string) {
    await this.driver.getByTextStringExists(this.resultTitle, value);
  }

  async awaitClickNextPage() {
    await this.driver.click(this.nextPageButton);
  }

  async awaitClickSecondResult() {
    await this.driver.click(this.resultDetails2);
  }

 async awaitClickLoginButton(){
    await this.driver.click(this.loginButton);
}

async awaitEmailValue(value: string) {
  await this.driver.input(this.emailInput, value);
}

async awaitClickContinueButton(){
  await this.driver.click(this.continueButton);
}

async awaitPasswordValue(value: string) {
  await this.driver.input(this.passwordInput, value);
}

async awaitClickSignIn(){
  await this.driver.click(this.signInButton);
}

async awaitClickNavList(){
  await this.driver.hoverElement(this.navListButton);
}

async awaitClickWishList(){
  await this.driver.click(this.wishListButton);
}


}

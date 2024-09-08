import { IDriver } from "src/drivers";

export class MyllenaBaseFlow {
  private driver: IDriver;

  private page: string = '//*[@id="nav-logo-sprites"]';
  private searchInput: string = '//*[@id="twotabsearchtextbox"]';
  private searchButton: string = '//*[@id="nav-search-submit-button"]';
  private keyboardDetails: string =
    "/html/body/div[1]/div[1]/div[1]/div[1]/div/span[1]/div[1]/div[10]/div/div/span/div/div/div[1]/span/a/div";
  private addToCartButton: string = '//*[@id="add-to-cart-button"]';
  private dontAcceptGarantee: string = '//*[@id="attachSiNoCoverage"]';
  private addedWithSuccess: string =
    "/html/body/div[1]/div[1]/div/div[1]/div[1]/div[2]/div/div/div/div/h1";
  private mouseDetails: string =
    "/html/body/div[1]/div[1]/div[1]/div[1]/div/span[1]/div[1]/div[13]/div/div/span/div/div/div[1]/span/a/div/img";
  private cart: string = '//*[@id="sw-gtc"]/span/a';
  private cartPage:string='//*[@id="sc-active-cart"]/div/div/div/h2'
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
  async awaitClickKeyboard() {
    await this.driver.click(this.keyboardDetails);
  }
  async awaitClickAddToCart() {
    await this.driver.click(this.addToCartButton);
  }
  async awaitShowDontAcceptGArantee() {
    await this.driver.wait(this.dontAcceptGarantee);
  }
  async awaitClickDontAcceptGArantee() {
    await this.driver.click(this.dontAcceptGarantee);
  }
  async awaitShowAddedWithSuccess() {
    await this.driver.wait(this.addedWithSuccess);
  }
  async awaitClickMouse() {
    await this.driver.click(this.mouseDetails);
  }
  async awaitShowCart() {
    await this.driver.wait(this.cart);
  }

  async awaitClickCart() {
    await this.driver.click(this.cart);
  }

  async awaitShowCartValue() {
    await this.driver.wait(this.cartPage);
  }

}

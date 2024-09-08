import { IDriver } from "src/drivers";
import { MyllenaBaseFlow } from 'src/baseFlows/myllenaBaseFlow';
import { DefaultFlow } from "./default.flow";
import { expect } from "vitest";

export class TestFlow extends DefaultFlow {
  private myllenaBaseFlow: MyllenaBaseFlow;

  constructor(driver: IDriver) {
    super(driver);
    this.myllenaBaseFlow = new MyllenaBaseFlow(this.driver);
  }
  async detailsFlow() {
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitShowPage();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitSearchValue("teclado rosa logitech");
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitClickSearchButton();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitClickKeyboard();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitClickAddToCart();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitShowDontAcceptGArantee();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitClickDontAcceptGArantee();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitShowAddedWithSuccess();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitSearchValue("mouse rosa logitech");
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitClickSearchButton();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitClickMouse();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitClickAddToCart();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitShowDontAcceptGArantee();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitClickDontAcceptGArantee();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitClickCart();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitShowCartValue();
    await this.driver.sleep(1000);
   
  }
}

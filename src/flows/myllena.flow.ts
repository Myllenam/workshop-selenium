import { IDriver } from "src/drivers";
import { MyllenaBaseFlow } from "src/baseFlows/myllenaBaseFlow";
import { DefaultFlow } from "./default.flow";

export class MyllenaFlow extends DefaultFlow {
  private myllenaBaseFlow: MyllenaBaseFlow;

  constructor(driver: IDriver) {
    super(driver);
    this.myllenaBaseFlow = new MyllenaBaseFlow(this.driver);
  }
  async defaultCartFlow() {
    await this.myllenaBaseFlow.awaitShowPage();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitSearchValue("teclado rosa logitech");
    await this.driver.sleep(1000);
    await this.myllenaBaseFlow.awaitClickSearchButton();
    await this.driver.sleep(1000);
    await this.myllenaBaseFlow.awaitClickKeyboard();
    await this.driver.sleep(1000);
    await this.myllenaBaseFlow.awaitClickAddToCart();
    await this.driver.sleep(1000);
    await this.myllenaBaseFlow.awaitShowDontAcceptGArantee();
    await this.driver.sleep(1000);
    await this.myllenaBaseFlow.awaitClickDontAcceptGArantee();
    await this.driver.sleep(1000);
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
  async cartFlow() {
    await this.defaultCartFlow();
  }

  async alternativeCartFlow() {
    await this.defaultCartFlow();
    await this.myllenaBaseFlow.awaitClickAddAnotherMouse();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitClickAddTwoMouse();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitMouseTotalValue();
    await this.driver.sleep(2000);
    await this.driver.refresh();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitClickAddAnotherMouse();
    await this.driver.sleep(2000);
    await this.driver.arrowUp();
    await this.driver.sleep(1000);
    await this.driver.arrowUp();
    await this.driver.sleep(2000);
    await this.driver.enter();
    await this.myllenaBaseFlow.awaitMouseNewTotalValue();
    await this.driver.sleep(2000);
  }
}

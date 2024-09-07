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
    await this.myllenaBaseFlow.awaitShowPage();
    await this.driver.sleep(2000);
  }
}

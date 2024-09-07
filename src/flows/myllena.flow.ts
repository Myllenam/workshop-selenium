import { IDriver } from "src/drivers";
import { MyllenaBaseFlow } from 'src/baseFlows/myllenaBaseFlow';
import { DefaultFlow } from "./default.flow";

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
    await this.myllenaBaseFlow.awaitSearchDestiny("floripa")
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitClickSelectDate();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitClickFlexibleDate();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitClickOneWeekDate();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitClickNovemberDate();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitClickInputGuests();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitClickAddOneGuests();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitClickInputGuests();
    await this.driver.sleep(2000);
    await this.myllenaBaseFlow.awaitClickSearchButton();
    await this.driver.sleep(2000);
    // expect(await this.driver.getCurrentUrl()).toBe(this.projectUrl);
  }
}

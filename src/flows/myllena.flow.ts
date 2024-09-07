import { expect } from "vitest";
import { IDriver } from "src/drivers";
import { LeticiaBaseFlow} from 'src/baseFlows/leticiaBaseFlow';
import { DefaultFlow } from "./default.flow";

export class TestFlow extends DefaultFlow {
  private leticiaBaseFlow: LeticiaBaseFlow;

  constructor(driver: IDriver) {
    super(driver);
    this.leticiaBaseFlow = new LeticiaBaseFlow(this.driver);
  }

  async detailsFlow() {
    await this.driver.sleep(2000);
    await this.initialPage.awaitShowPage();
    await this.driver.sleep(2000);
    expect(await this.driver.getCurrentUrl()).toBe(this.projectUrl);
  }
}

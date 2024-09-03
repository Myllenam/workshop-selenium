import { expect } from "vitest";
import { IDriver } from "src/drivers";
import { InitialPage } from 'src/pages/InitialPage';
import { DefaultFlow } from "./default.flow";

export class TestFlow extends DefaultFlow {
  private initialPage: InitialPage;

  constructor(driver: IDriver) {
    super(driver);
    this.initialPage = new InitialPage(this.driver);
  }

  async successFlow() {
    await this.driver.sleep(2000);
    await this.initialPage.awaitShowPage();
    expect(await this.driver.getCurrentUrl()).toBe(this.projectUrl);
  }
}

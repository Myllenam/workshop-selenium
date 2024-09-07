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

  async detailsFlow() {
    await this.driver.sleep(2000);
    await this.initialPage.awaitShowPage();
    await this.driver.sleep(2000);
    await this.initialPage.awaitSearchDestiny("floripa")
    await this.driver.sleep(2000);
    await this.initialPage.awaitClickSelectDate();
    await this.driver.sleep(2000);
    await this.initialPage.awaitClickFlexibleDate();
    await this.driver.sleep(2000);
    await this.initialPage.awaitClickOneWeekDate();
    await this.driver.sleep(2000);
    await this.initialPage.awaitClickNovemberDate();
    await this.driver.sleep(2000);
    await this.initialPage.awaitClickInputGuests();
    await this.driver.sleep(2000);
    await this.initialPage.awaitClickAddOneGuests();
    await this.driver.sleep(2000);
    await this.initialPage.awaitClickInputGuests();
    await this.driver.sleep(2000);
    await this.initialPage.awaitClickSearchButton();
    await this.driver.sleep(2000);
    // expect(await this.driver.getCurrentUrl()).toBe(this.projectUrl);
  }
}

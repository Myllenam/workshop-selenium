import { expect } from "vitest";
import { IDriver } from "src/drivers";
import { InitialPage } from 'src/pages/InitialPage';
import { DefaultFlow } from "./default.flow";

export class LeticiaFlow extends DefaultFlow {
  private initialPage: InitialPage;

  constructor(driver: IDriver) {
    super(driver);
    this.initialPage = new InitialPage(this.driver);
  }

  async vistasIncriveisFlow() {
    await this.driver.sleep(2000);
    await this.initialPage.awaitShowPage();
    await this.driver.sleep(2000);
    await this.initialPage.clicarBotaoVisita();
    await this.driver.sleep(8000);
    await this.initialPage.awaitShowPaginaVisita();
    await this.driver.sleep(8000);

  }
}
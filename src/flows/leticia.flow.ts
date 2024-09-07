import { expect } from "vitest";
import { IDriver } from "src/drivers";
import { LeticiaBaseFlow } from 'src/baseFlows/leticiaBaseFlow';
import { DefaultFlow } from "./default.flow";

export class LeticiaFlow extends DefaultFlow {
  private leticiaBaseFlow: LeticiaBaseFlow;

  constructor(driver: IDriver) {
    super(driver);
    this.leticiaBaseFlow = new LeticiaBaseFlow(this.driver);
  }

  async vistasIncriveisFlow() {
    await this.driver.sleep(2000);
    await this.initialPage.awaitShowPage();
    await this.driver.sleep(2000);
    await this.initialPage.clicarBotaoVisita();
    await this.driver.sleep(5000);
    await this.initialPage.awaitShowPaginaVisita();
    await this.driver.sleep(5000);

  }
}
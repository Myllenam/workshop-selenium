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
    await this.leticiaBaseFlow.awaitShowPage();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.clicarBotaoVisita();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitShowPaginaVisita();
    await this.driver.sleep(2000);

  }
}
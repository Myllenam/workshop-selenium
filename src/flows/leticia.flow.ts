import { IDriver } from "src/drivers";
import { LeticiaBaseFlow } from 'src/baseFlows/leticiaBaseFlow';
import { DefaultFlow } from "./default.flow";

export class LeticiaFlow extends DefaultFlow {
  private leticiaBaseFlow: LeticiaBaseFlow;

  constructor(driver: IDriver) {
    super(driver);
    this.leticiaBaseFlow = new LeticiaBaseFlow(this.driver);
  }

  async adicionarAlterarEndereco(){
    await this.leticiaBaseFlow.awaitShowPage();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitMenuAccount();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitInputEmailValue("insira-um-email")
    await this.driver.sleep(1000);
    await this.leticiaBaseFlow.awaitClickButtonContinue();
    await this.driver.sleep(1000);
    await this.leticiaBaseFlow.awaitInputPasswordValue("insira-uma-senha");
    await this.driver.sleep(1000);
    await this.leticiaBaseFlow.awaitButtonLogin();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitMenuAccount();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitYourAdresses();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitAddAdress();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitInputCep("insira-um-cep");
    await this.driver.sleep(3000);
    await this.leticiaBaseFlow.awaitClickInputAdress();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitClickInputAdress();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitInputAdress("insira-um-endereço");
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitInputNumber("insira-um-numero");
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitInputNeighborhood("insira-um-bairro");
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitButtonSubmit();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitAdressSumit();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitEditAdress();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitEditNumber("");
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitSubmitEdit();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitValidateAlt();
    await this.driver.sleep(2000);
  }

  async historicoPedidos(){
    await this.leticiaBaseFlow.awaitMenuAccount();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitMenuOrders();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitButtonAnnounce();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitFilter2024();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitViewDetails();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitValidateProduct();
    await this.driver.sleep(2000);
  }
}
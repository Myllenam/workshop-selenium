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
    await this.leticiaBaseFlow.awaitInputEmailValue("leticia.butel18@gmail.com")
    await this.driver.sleep(1000);
    await this.leticiaBaseFlow.awaitClickButtonContinue();
    await this.driver.sleep(1000);
    await this.leticiaBaseFlow.awaitInputPasswordValue("Lktb_1810");
    await this.driver.sleep(1000);
    await this.leticiaBaseFlow.awaitButtonLogin();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitMenuAccount();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitYourAdresses();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitAddAdress();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitInputCep("89140000");
    await this.driver.sleep(3000);
    await this.leticiaBaseFlow.awaitClickInputAdress();
    await this.driver.sleep(3000);
    await this.leticiaBaseFlow.awaitInputAdress("R. Dr. Getúlio Vargas");
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitInputNumber("2345");
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitInputNeighborhood("Bela Vista");
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitButtonSubmit();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitAdressSumit();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitEditAdress();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitEditNumber("85");
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitSubmitEdit();
    await this.driver.sleep(2000);
    await this.leticiaBaseFlow.awaitValidateAlt();
    await this.driver.sleep(5000);
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
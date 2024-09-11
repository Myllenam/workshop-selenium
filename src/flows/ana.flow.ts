import { IDriver } from "src/drivers";
import { AnaBaseFlow } from 'src/baseFlows/anaBaseFlow';
import { DefaultFlow } from "./default.flow";

export class AnaFlow extends DefaultFlow {
  private anaBaseFlow: AnaBaseFlow;

  constructor(driver: IDriver) {
    super(driver);
    this.anaBaseFlow = new AnaBaseFlow(this.driver);
  }
  
  async resultSearchFlow() {
    await this.driver.sleep(2000);
    await this.anaBaseFlow.awaitShowPage();
    await this.driver.sleep(2000);
    await this.anaBaseFlow.awaitSearchValue("smartphone Samsung");
    await this.driver.sleep(2000);
    await this.anaBaseFlow.awaitClickSearchButton();
    await this.driver.sleep(2000);
    await this.anaBaseFlow.awaitClickFirstResult();
    await this.driver.sleep(2000);
    await this.anaBaseFlow.awaitValidateResults("Samsung");
    await this.driver.sleep(2000);

    //próxima página
    await this.driver.goBack();
    await this.driver.sleep(2000);
    await this.anaBaseFlow.awaitClickNextPage();
    await this.driver.sleep(2000);
    await this.anaBaseFlow.awaitClickSecondResult();
    await this.driver.sleep(2000);
    await this.anaBaseFlow.awaitValidateResults("Samsung");
    await this.driver.sleep(2000);
   
  }

    async loginAndWishListFlow(email: string, password: string) {
      //login
      await this.driver.sleep(2000);
      await this.anaBaseFlow.awaitShowPage();
      await this.driver.sleep(2000);
      await this.anaBaseFlow.awaitClickLoginButton();
      await this.driver.sleep(2000);
      await this.anaBaseFlow.awaitEmailValue(email);
      await this.driver.sleep(2000);
      await this.anaBaseFlow.awaitClickContinueButton();
      await this.driver.sleep(2000);
      await this.anaBaseFlow.awaitPasswordValue(password);
      await this.driver.sleep(2000);
      await this.anaBaseFlow.awaitClickSignIn();
      await this.driver.sleep(10000);

      //consultar lista de desejos
      await this.anaBaseFlow.awaitClickNavList();
      await this.driver.sleep(3000);
      await this.anaBaseFlow.awaitClickWishList();
      await this.driver.sleep(2000);

    }
}

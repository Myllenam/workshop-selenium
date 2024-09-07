import { IDriver } from "src/drivers";

export class MyllenaBaseFlow {
  private driver: IDriver;

  private page: string =
    "/html/body/div[5]/div/div/div[1]/div/div[3]/div[3]/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[3]/div/div/div/div";


  constructor(driver: IDriver) {
    this.driver = driver;
  }

  async awaitShowPage() {
    await this.driver.wait(this.page);
  }
 
}

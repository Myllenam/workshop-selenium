import { IDriver } from "src/drivers";
import { environment } from "src/environment";

export class DefaultFlow {
  protected driver: IDriver;
  protected projectUrl = environment.project_url;

  constructor(driver: IDriver) {
    this.driver = driver;
  }

  async goToInitialPage() {
    await this.driver.get(this.projectUrl);
  }

  async closeDriver() {
    await this.driver.close();
  }
}

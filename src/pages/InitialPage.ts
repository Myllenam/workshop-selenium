import { IDriver } from 'src/drivers';

export class InitialPage {
  private driver: IDriver;

  private page: string = '/html/body/div[5]/div/div/div[1]/div/div[3]/div[3]/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[3]/div/div/div/div'
  private botaoVisita='//*[@id="categoryScroller"]/div/div/div/div[3]/div/div/div/div/label[4]/div/span'
  private testeVisita='//*[@id="site-content"]/div[2]/div[1]/div/div/div/div/div[1]/div/div[2]/div/div/div/div/a'

  constructor(driver: IDriver) {
    this.driver = driver;
  }

  async awaitShowPage() {
    await this.driver.wait(this.page)
  }

  async clicarBotaoVisita(){
    await this.driver.click(this.botaoVisita);
  }

  async awaitShowPaginaVisita() {
    await this.driver.wait(this.testeVisita)
  }

}

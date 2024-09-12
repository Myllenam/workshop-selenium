import {
  Browser,
  Builder,
  By,
  Key,
  WebDriver,
  until,
  Actions,
} from "selenium-webdriver";

import { IDriver } from "src/drivers";
import { environment } from "src/environment";

export class SeleniumDriver implements IDriver {
  private driver: WebDriver;
  private actions: Actions;
  private delayTime = environment.delayTimeout;
  private useDelay = environment.delay;

  constructor() {
    this.driver =  new Builder().forBrowser(Browser.FIREFOX).build();
    this.actions = this.driver.actions();
  }

  private async delay() {
    if (this.useDelay) await this.driver.sleep(this.delayTime);
  }

  async get(url: string): Promise<void> {
    await this.driver.get(url), environment;
  }

  async refresh(): Promise<void> {
    await this.driver.navigate().refresh();
  }

  async getCurrentUrl(): Promise<string> {
    return await this.driver.getCurrentUrl();
  }

  async close(): Promise<void> {
    await this.driver.quit();
  }

  async wait(element: string): Promise<void> {
    await this.driver.wait(
      until.elementLocated(By.xpath(element)),
      environment.timeout
    );
    await this.delay();
  }
  
  async waitText(text: string): Promise<void> {
    await this.driver.wait(
      until.elementLocated(By.partialLinkText(text)),
      environment.timeout
    );
    await this.delay();
  }


  async getByText(element: string, text: string): Promise<void> {
    const foundElement = await this.driver.findElement(By.xpath(element));
    await this.delay();
    const actualText = await foundElement.getText();
    if (actualText === text) {
      console.log(
        `Validação bem-sucedida: o texto "${actualText}" corresponde ao esperado.`
      );
    } else {
      throw new Error(
        `Validação falhou: esperado "${text}", mas obteve "${actualText}".`
      );
    }
  }

  async getByTextStringExists(element: string, text: string): Promise<void> {
    const foundElement = await this.driver.findElement(By.xpath(element));
    await this.delay();
    const actualText = await foundElement.getText();
   if (actualText.includes(text)) {
      console.log(`Validação bem-sucedida: o fragmento "${actualText}" corresponde ao esperado.`);
    } else {
      throw new Error(`Validação falhou: esperado "${text}", mas obteve "${actualText}".`);
    }
  }

  async click(element: string): Promise<void> {
    await this.driver.findElement(By.xpath(element)).click();
    await this.delay();
  }

  async hoverElement(xpath: string): Promise<void> {
    const element = await this.driver.findElement(By.xpath(xpath));
    await this.actions.move({ origin: element }).perform(); //passar o mouse por cima
  }

  async arrowUp(): Promise<void> {
    await this.driver.actions().sendKeys(Key.ARROW_UP).perform();
  }

  async enter(): Promise<void> {
    await this.driver.actions().sendKeys(Key.ENTER).perform();
  }

  async input(element: string, value: string) {
    await this.driver.findElement(By.xpath(element)).sendKeys(value);
    await this.delay();
  }

  async sleep(ms: number): Promise<void> {
    await this.driver.sleep(ms);
  }

  async goBack(): Promise<void> {
    await this.driver.navigate().back();
  }
}

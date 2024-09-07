import { IDriver } from 'src/drivers';

export class InitialPage {
  private driver: IDriver;

  private page: string = '/html/body/div[5]/div/div/div[1]/div/div[3]/div[3]/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[3]/div/div/div/div'
  private searchInput='//*[@id="bigsearch-query-location-input"]'
  private selectDate='/html/body/div[5]/div/div/div[1]/div/div[3]/div[2]/div/div/div/header/div/div[2]/div[2]/div/div/div/form/div[2]/div/div[3]/div[1]/div/div'
private flexibleDate='//*[@id="tab--tabs--2"]'
private oneWeek='//*[@id="flexible_trip_lengths-one_week"]'
private november='/html/body/div[5]/div/div/div[1]/div/div[3]/div[2]/div/div/div/header/div/div[2]/div[2]/div/div/div/form/div[2]/div/div[3]/div[2]/div/div/div/div/div/div/div[2]/div[3]/div/div[2]/div[2]/div[2]/div[4]/button'
private inputGuests='/html/body/div[5]/div/div/div[1]/div/div[3]/div[2]/div/div/div/header/div/div[2]/div[2]/div/div/div/form/div[2]/div/div[5]/div[2]/div[1]/div/div[2]'
private oneAdult='/html/body/div[5]/div/div/div[1]/div/div[3]/div[2]/div/div/div/header/div/div[2]/div[2]/div/div/div/form/div[2]/div/div[5]/div[1]/div/div/div/div/div/div[1]/div/button[2]'
private searchButton='/html/body/div[5]/div/div/div[1]/div/div[3]/div[2]/div/div/div/header/div/div[2]/div[2]/div/div/div/form/div[2]/div/div[5]/div[2]/div[3]/button'

  constructor(driver: IDriver) {
    this.driver = driver;
  }

  async awaitShowPage() {
    await this.driver.wait(this.page)
  }
  async awaitSearchDestiny(value:string) {
    await this.driver.input(this.searchInput,value)
  }

  async awaitClickFlexibleDate() {
    await this.driver.click(this.flexibleDate);
  }
  async awaitClickOneWeekDate() {
    await this.driver.click(this.oneWeek);
  }
  async awaitClickNovemberDate() {
    await this.driver.click(this.november);
  }
  async awaitClickInputGuests() {
    await this.driver.click(this.inputGuests);
  }
  async awaitClickAddOneGuests() {
    await this.driver.click(this.oneAdult);
  }
  async awaitClickSearchButton() {
    await this.driver.click(this.searchButton);
  }
  async awaitClickSelectDate() {
    await this.driver.click(this.selectDate);
  }
}

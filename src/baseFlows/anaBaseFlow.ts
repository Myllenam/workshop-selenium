import { IDriver } from "src/drivers";

export class AnaBaseFlow {
  private driver: IDriver;

  private page: string = '//*[@id="nav-logo-sprites"]';
  private searchInput: string = '//*[@id="twotabsearchtextbox"]';
  private searchButton: string = '//*[@id="nav-search-submit-button"]';
  private resultDetails: string = "/html/body/div[1]/div[1]/div[1]/div[1]/div/span[1]/div[1]/div[10]/div/div/span/div/div/div[1]/span/a/div";
  private resultTitle: string = '//*[@id="productTitle"]';
  private nextPageButton: string = '//a[contains(@class,"s-pagination-next")]';
  private resultDetails2: string = "/html/body/div[1]/div[1]/div[1]/div[1]/div/span[1]/div[1]/div[10]/div/div/span/div/div/div[1]/span/a/div";
  /*private filterPriceRange: string = '//span[text()="R$2.000 a R$5.000"]';
  private filterBrand: string = '//*[@id="p_123/241862"]/span/a/span';
  private sortByBestRated: string = '//span[contains(text(),"Melhor Avaliados")]';*/

  constructor(driver: IDriver) {
    this.driver = driver;
  }

  async awaitShowPage() {
    await this.driver.wait(this.page);
  }

  async awaitSearchValue(value: string) {
    await this.driver.input(this.searchInput, value);
  }

  async awaitClickSearchButton() {
    await this.driver.click(this.searchButton);
  }

  async awaitClickFirstResult() {
    await this.driver.click(this.resultDetails);
  }

  async awaitValidateResults () {
    await this.driver.wait(this.resultTitle);
    /*const titulo = this.resultTitle.getByText;
    const pesquisa = this.searchInput.getByText;

    // Verifica se a pesquisa está presente no titulo
    if (titulo.includes(pesquisa)) {
        console.log("TEM A PALVRA");
    } else {
        console.log(this.resultTitle);
    }*/
  }

  async awaitClickNextPage() {
    await this.driver.click(this.nextPageButton);
  }

  async awaitClickSecondResult() {
    await this.driver.click(this.resultDetails2);
  }

}

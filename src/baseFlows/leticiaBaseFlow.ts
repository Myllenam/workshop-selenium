import { IDriver } from 'src/drivers';

export class LeticiaBaseFlow {
  private driver: IDriver;

  private page: string = '//*[@id="nav-logo-sprites"]'
  private inputEmail='//*[@id="ap_email"]'
  private buttonContinue='//*[@id="continue"]'
  private inputPassword='//*[@id="ap_password"]'
  private buttonLogin='//*[@id="signInSubmit"]'
  private yourAdresses='//*[@id="a-page"]/div[1]/div/div[3]/div[1]/a/div/div'
  private addAdress='//*[@id="ya-myab-address-add-link"]/div/div'
  private inputCep='//*[@id="address-ui-widgets-enterAddressPostalCode"]'
  private inputAdress='//*[@id="address-ui-widgets-streetName"]'
  private inputNumber='//*[@id="address-ui-widgets-buildingNumber"]'
  private inputNeighborhood='//*[@id="address-ui-widgets-neighborhood"]'
  private buttonSubmit='//*[@id="address-ui-widgets-form-submit-button"]/span/input'
  private validateAdress='/html/body/div[1]/div[1]/div/div[2]/div/h4'
  private editAdress='//*[@id="ya-myab-address-edit-btn-2"]'
  private editNumber='//*[@id="address-ui-widgets-buildingNumber"]'
  private submitEdit='/html/body/div[1]/div[1]/div/div[2]/form/span/div/span[3]/span/span/input'
  private validateAlt='/html/body/div[1]/div[1]/div/div[2]/div/h4'


  private filter2024='//*[@id="time-filter_2"]'
  private menuAccount='//*[@id="nav-link-accountList"]'
  private menuOrders='//*[@id="nav-orders"]'
  private buttonAnnounce='//*[@id="a-autoid-1-announce"]'
  private viewDetails = '/html/body/div[1]/section/div[1]/div[10]/div/div[1]/div/div/div/div[2]/div[2]/div/a'
  private validateProduct='//*[@id="orderDetails"]/div[1]/div[9]/div[1]/div[1]/div/span[2]/bdi'

  constructor(driver: IDriver) {
    this.driver = driver;
  }

  async awaitShowPage() {
    await this.driver.wait(this.page)
  }

  async awaitInputEmailValue(value:string){
    await this.driver.input(this.inputEmail,value);
  }

  async awaitClickButtonContinue(){
    await this.driver.click(this.buttonContinue);
  }

  async awaitInputPasswordValue(value:string){
    await this.driver.input(this.inputPassword,value);
  }

  async awaitButtonLogin(){
    await this.driver.click(this.buttonLogin);
  }

  async awaitMenuAccount(){
    await this.driver.click(this.menuAccount);
  }

  async awaitYourAdresses(){
    await this.driver.click(this.yourAdresses);
  }

  async awaitAddAdress(){
    await this.driver.click(this.addAdress);
  }

  async awaitInputCep(value:string){
    await this.driver.input(this.inputCep, value)
  }

  async awaitClickInputAdress(){
    await this.driver.click(this.inputAdress)
  }

  async awaitInputAdress(value:string){
    await this.driver.input(this.inputAdress, value)
  }

  async awaitInputNumber(value:string){
    await this.driver.input(this.inputNumber, value)
  }

  async awaitInputNeighborhood(value:string){
    await this.driver.input(this.inputNeighborhood, value)
  }

  async awaitButtonSubmit(){
    await this.driver.click(this.buttonSubmit)
  }

  async awaitAdressSumit() {
    await this.driver.getByText(this.validateAdress, "Endereço salvo");
  }

  async awaitEditAdress(){
    await this.driver.click(this.editAdress)
  }

  async awaitEditNumber(value:string){
    await this.driver.input(this.editNumber,value)
  }

  async awaitSubmitEdit(){
    await this.driver.click(this.submitEdit)
  }

  async awaitValidateAlt() {
    await this.driver.getByText(this.validateAlt, "Endereço salvo");
  }

  async awaitMenuOrders(){
    await this.driver.click(this.menuOrders)
  }

  async awaitButtonAnnounce(){
    await this.driver.click(this.buttonAnnounce);
  }

  async awaitFilter2024(){
    await this.driver.click(this.filter2024);
  }

  async awaitViewDetails(){
    await this.driver.click(this.viewDetails);
  }

  async awaitValidateProduct() {
    await this.driver.getByText(this.validateProduct, "701-9998967-4213056");
    }
  
}


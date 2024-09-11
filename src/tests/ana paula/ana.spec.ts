import { describe, beforeEach, it, beforeAll, afterAll } from 'vitest';

import {AnaFlow} from "../../flows/ana.flow"
import {SeleniumDriver} from "../../drivers/selenium-driver"


describe('Ana Paula', () => {
  let anaFlow: AnaFlow;

  beforeAll(async () => {
    anaFlow = new AnaFlow(new SeleniumDriver());
  });

  afterAll(async () => {
    await anaFlow.closeDriver();
  });

  beforeEach(async () => {
    await anaFlow.goToInitialPage();
  });

  it('deve verficar o fluxo de resultados esperados', async () => {
    await anaFlow.resultSearchFlow();
  });

  it('deve verficar o fluxo de login e consulta de lista de compras do usuario', async () => {
    await anaFlow.loginAndWishListFlow('exemplo@email.com','exemplos3nh4'); //aqui precisa colocar um login valido antes de rodar o teste
  });

});

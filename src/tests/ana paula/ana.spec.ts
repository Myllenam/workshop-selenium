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
    await anaFlow.resultadoPesquisaFlow();
  });
});

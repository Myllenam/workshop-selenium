import { describe, beforeEach, it, beforeAll, afterAll } from 'vitest';
import { LeticiaFlow } from 'src/flows/leticia.flow';
import { SeleniumDriver } from 'src/drivers';

describe('Leticia', () => {
  let leticiaFlow: LeticiaFlow;

  beforeAll(async () => {
    leticiaFlow = new LeticiaFlow(new SeleniumDriver());
  });

  afterAll(async () => {
    await leticiaFlow.closeDriver();
  });

  beforeEach(async () => {
    await leticiaFlow.goToInitialPage();
  });

  it('deve entrar na pagina de vistas incriveis', async () => {
    await leticiaFlow.vistasIncriveisFlow();
  });
});
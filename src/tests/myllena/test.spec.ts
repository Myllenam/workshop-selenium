import { describe, beforeEach, it, beforeAll, afterAll } from 'vitest';
import { TestFlow } from 'src/flows/myllena.flow';
import { SeleniumDriver } from 'src/drivers';

describe('Myllena', () => {
  let testFlow: TestFlow;

  beforeAll(async () => {
    testFlow = new TestFlow(new SeleniumDriver());
  });

  afterAll(async () => {
    await testFlow.closeDriver();
  });

  beforeEach(async () => {
    await testFlow.goToInitialPage();
  });

  it('deve verficar a exibição dos detalhes de uma propriedade', async () => {
    await testFlow.detailsFlow();
  });
});

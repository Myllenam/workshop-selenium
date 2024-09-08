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

  it ('deve adicionar e alterar endereço', async () => {
    await leticiaFlow.adicionarAlterarEndereco();
  });

  it ('deve verificar historico de pedido', async () =>{
    await leticiaFlow.historicoPedidos();
  });

});
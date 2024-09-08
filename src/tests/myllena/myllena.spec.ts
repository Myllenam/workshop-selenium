import { describe, beforeEach, it, beforeAll, afterAll } from "vitest";

import { MyllenaFlow } from "../../flows/myllena.flow";
import { SeleniumDriver } from "../../drivers/selenium-driver";

describe("Myllena", () => {
  let myllenaFlow: MyllenaFlow;

  beforeAll(async () => {
    myllenaFlow = new MyllenaFlow(new SeleniumDriver());
  });

  afterAll(async () => {});

  beforeEach(async () => {
    await myllenaFlow.goToInitialPage();
  });

  it("deve verficar o fluxo de adicionar itens ao carrinho", async () => {
    await myllenaFlow.cartFlow();
  });
  
  it("deve verficar o fluxo de adicionar itens ao carrinho e de modificar suas quantidades", async () => {
    await myllenaFlow.alternativeCartFlow();
  });
});

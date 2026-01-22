import { getDataHojeBR } from "../support/utils/data";
describe("Cadastro Horário", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
  it("Cadastro horário com sucesso", () => {
    cy.login("secretaria", "37237180");
    cy.get(":nth-child(1) > .nav-link").should("be.visible").click();

    cy.get('[name="dataInicio"]')
      .invoke("val", getDataHojeBR(1))
      .trigger("change");
    cy.get('[name="dataFim"]')
      .invoke("val", getDataHojeBR(1))
      .trigger("change");
    cy.get('[name="horaInicio"]').select("08:00");
    cy.get('[name="horaFim"]').select("10:00");
    cy.get(".btn-submit").click();
    cy.get("#mensagemSucesso").should(
      "have.text",
      "Horários cadastrados com sucesso!"
    );
  });
});

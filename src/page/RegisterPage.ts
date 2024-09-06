import {Page} from "@playwright/test";
import {RegisterElements} from "../elements/RegisterElements";
import {expect} from "allure-playwright";

export class RegisterPage extends RegisterElements {

    constructor(readonly page: Page) {
        super();
        this.page = page;
    }

    async digitarNome(nome: string, sobreNome: string) {
        await this.page.locator(RegisterElements.NOME).fill(nome);
        await this.page.locator(RegisterElements.SOBRENOME).fill(sobreNome)
    }

    async validarUrl() {
        await expect(this.page).toHaveURL(RegisterElements.validarUrl);
    }

    async digitarEndereco(endereco: string) {
        await this.page.locator(RegisterElements.ENDERECO).fill(endereco);
    }

    async digitarEmail(email: string) {
        await this.page.locator(RegisterElements.EMAIL).fill(email);
    }

    async digitarTelefone(telefone: string) {
        await this.page.locator(RegisterElements.TELEFONE).fill(telefone);
    }

    async selecionarGenero() {
        await this.page.locator(RegisterElements.GENERO).click();
    }

    async escolherHobbies() {
        await this.page.locator(RegisterElements.HOBBIES).click();
    }

    async digitarLinguagem() {
        await this.page.locator(RegisterElements.LINGUAGEM).click();
    }
}

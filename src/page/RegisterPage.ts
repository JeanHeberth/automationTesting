import {Page} from "@playwright/test";
import {RegisterElements} from "../elements/RegisterElements";
import {expect} from "allure-playwright";

const path = require('path');
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

    async linguagemSelecionada(linguagem: string) {
        await this.page.locator(RegisterElements.LINGUAGEM_ESCOLHIDA).click();
        await this.page.locator(RegisterElements.LINGUAGEM_SELECIONADA(linguagem)).click();
        await this.page.locator(RegisterElements.LINGUAGEM).click();

    }

    async skillEscolhida(skillEscolhida) {
        await this.page.selectOption(RegisterElements.SKILL(skillEscolhida), skillEscolhida);

    }

    async paisEscolhido(paisEscolhido) {
        await this.page.locator(RegisterElements.country).click()
        await this.page.locator(RegisterElements.PAIS(paisEscolhido)).click()
    }

    async dataNascimento(anoEscolhido, mesEscolhido, diaEscolhido) {
        await this.page.locator(RegisterElements.YEAR).selectOption(anoEscolhido)
        await this.page.locator(RegisterElements.MONTH).selectOption(mesEscolhido)
        await this.page.locator(RegisterElements.DAY).selectOption(diaEscolhido)
    }

    async paswword(password: string, cpassword: string) {
        await this.page.locator(RegisterElements.PASSWORD).fill(password);
        await this.page.locator(RegisterElements.CONFIRM_PASSWORD).fill(cpassword);
    }

    async enviarArquivo(arquivo) {
        await this.page.locator(RegisterElements.BTN_ESCOLHER_ARQUIVO).click();
        const absolutePath = path.resolve(arquivo);
        await this.page.setInputFiles(RegisterElements.BTN_ESCOLHER_ARQUIVO, absolutePath)
    }

    async registrar() {
        await this.page.locator(RegisterElements.BTN_SUBMIT).click();
    }


    async excluirLinguagem() {
        await this.page.locator(RegisterElements.EXCLUIR_LINGUAGEM).click();
    }
}

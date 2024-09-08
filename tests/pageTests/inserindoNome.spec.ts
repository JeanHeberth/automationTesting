import {test} from "playwright/test";
import {RegisterPage} from "../../src/page/RegisterPage";

let registerPage: RegisterPage;
test.beforeEach(async ({page}) => {
    registerPage = new RegisterPage(page);
    await page.goto("https://demo.automationtesting.in/Register.html")
})

test('Realizando registro', async () => {
    await registerPage.validarUrl()
    await registerPage.digitarNome("Jean Hebert", "Souza Vieira dos Santos")
    await registerPage.digitarEndereco("Rua 1, casa23, Bairro SP, cep:12345678")
    await registerPage.digitarEmail("WqzXa@example.com")
    await registerPage.digitarTelefone("99999999999")
    await registerPage.selecionarGenero()
    await registerPage.escolherHobbies()
    await registerPage.linguagemSelecionada("Catalan")
    await registerPage.skillEscolhida("Java")
    await registerPage.paisEscolhido("Australia")
    await registerPage.dataNascimento("1988", "March", "27")
    await registerPage.paswword("123456abcd", "123456abcd")
   await registerPage.enviarArquivo("/Users/jeanhebert/Downloads/playwright-logo.png");
    await registerPage.registrar()
})


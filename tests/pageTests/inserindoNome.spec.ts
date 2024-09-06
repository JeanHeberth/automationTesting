import  {test} from "playwright/test";
import {RegisterPage} from "../../src/page/RegisterPage";
import {Page} from "@playwright/test";

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
    await registerPage.digitarTelefone("99-99999999")
    await registerPage.selecionarGenero()
    await registerPage.escolherHobbies()
    await registerPage.digitarLinguagem()


})


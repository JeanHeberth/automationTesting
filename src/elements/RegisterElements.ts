export class RegisterElements {

    static NOME = '//input[@ng-model="FirstName"]';
    static SOBRENOME = '//input[@ng-model="LastName"]';
    static ENDERECO = '//textarea[@ng-model="Adress"]';
    static EMAIL = '//input[@ng-model="EmailAdress"]';
    static TELEFONE = '//input[@ng-model="Phone"]';
    static GENERO = '//input[@value="Male"]';
    static HOBBIES = '//input[@value="Cricket"]';
    static LINGUAGEM = ' //label[text()="Languages"]';
    static LINGUAGEM_ESCOLHIDA = ' //div[@id="msdd"]';
    static EXCLUIR_LINGUAGEM = '//span[@class="ui-icon ui-icon-close"]';
    static country = '//span[@aria-labelledby="select2-country-container"]'
    static YEAR = '#yearbox'
    static MONTH = '//select[@ng-model="monthbox"]'
    static DAY = '#daybox'
    static PASSWORD = '//input[@ng-model="Password"]'
    static CONFIRM_PASSWORD = '//input[@ng-model="CPassword"]'
    static BTN_SUBMIT = '#submitbtn'
    static BTN_ESCOLHER_ARQUIVO = '#imagesrc'

    static LINGUAGEM_SELECIONADA(produtEscolhido) {
        return `//a[text()="${produtEscolhido}"]`;
    }

    static SKILL(skillEscolhido) {
        return `#Skills`;
    }

    static PAIS(paisEscolhido) {
        return `//li[text()="${paisEscolhido}"]`;
    }


    static validarUrl = 'https://demo.automationtesting.in/Register.html';
}

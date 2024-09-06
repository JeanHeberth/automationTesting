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
static paiis = '//span[@aria-labelledby="select2-country-container"]'

    static LINGUAGEM_SELECIONADA(produtEscolhido) {
        return `//a[text()="${produtEscolhido}"]`;
    }

    static SKILL(skillEscolhido) {
        return `#Skills`;
    }

    static PAIS() {
        return`#select2-country-results`
    }


    static validarUrl = 'https://demo.automationtesting.in/Register.html';
}

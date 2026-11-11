class PurchasePage {

    constructor(page) {
        this.page = page;
        this.url = /purchase/;
        this.tituloSecao = 'h2';              // seletor do tipo tag
        this.name = '#inputName';             // seletor do tipo id
        this.cardType = '[name="cardType"]';  // seletor do tipo parameter name
        this.rememberMe = '#rememberMe';      // seletor do tipo id
        this.btnPurchaseFlight = '.btn-primary'; // seletor do tipo class
    }

    async preencher_nome(nome) {
        await this.page.locator(this.name).fill(nome);
    }

    async selecionar_bandeira(bandeira) {
        await this.page.locator(this.cardType).selectOption(bandeira);
    }

    async lembrar_de_mim() {
        await this.page.locator(this.rememberMe).check();
    }

    async clicar_para_concluir_compra() {
        await this.page.locator(this.btnPurchaseFlight).click();
    }
}

module.exports = PurchasePage;
class HomePage {
    // Arrage - Prepara
    // Mapear os elementos
    constructor(page) {
        // interno = externo
        this.page = page;
        this.origem = '[name="fromPort"]';
        this.destino = '[name="toPort"]';
        this.btnFindFlights = '.btn-primary';
    } // fecha o constructor

    // Act - Executar
    // Mapear as ações
    async selecionar_viagem(origem, destino) {
        await this.page.locator(this.origem).selectOption(origem);
        await this.page.locator(this.destino).selectOption(destino);
        await this.page.locator(this.btnFindFlights).click();
    } // fecha o método selecionar_viagem

    // Assert - Validar
    // Faremos nos testes 

} // fecha a classe
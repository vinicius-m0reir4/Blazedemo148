class ReservePage {

    constructor(page){
        this.page = page; 
        this.url = /reserve/;
        this.tituloSecao = 'h3';
    }

    // localiza uma lista na tabela com os dados correspondentes
    // nessa linha selecionada, clica no botao
    async selecionar_voo(flight, airline, departs, arrives, price){
        await this.page.getByRole('row', 
            {name: `Chose This Flight 
                ${flight} 
                ${airline} 
                ${departs} 
                ${arrives} 
                ${price}
            `}).getByRole('button').click();
    }


}

module.exports = ReservePage;
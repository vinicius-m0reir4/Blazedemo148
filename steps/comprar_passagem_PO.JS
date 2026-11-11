const {test, expect} = require('@playwright/test');

import HomePage from '../pages/home.page';
import ReservePage from '../pages/reserve.page';
import PurchasePage from '../pages/purchase.page';
import ConfirmationPage from '../pages/confirmation.page';

const origem = 'São Paolo';
const destino = 'London';
const flight = '12';
const airline = 'Virgin America';
const departs = '11:23 AM';
const arrives = '1:45 PM';
const price = '$765.32';
const nome = 'Charlie Brown';
const cardType = 'amex';
const amount = '555 USD';

test('Comprar passagem PO', async ({ page }) => {
    // Instanciar os objetos das páginas
    const homePage = new HomePage(page);
    const reservePage = new ReservePage(page);
    const purchasePage = new PurchasePage(page);
    const confirmationPage = new ConfirmationPage(page);

    // Pagina Principal - Home 
    await page.goto('https://www.blazedemo.com'); 
    await homePage.selecionar_viagem(origem, destino);

    // Pagina de Reserva - Reserve 
    await expect(page).toHaveURL(reservePage.url); 
    await expect(page.locator(reservePage.tituloSecao))
          .toHaveText(`Flights from ${origem} to ${destino}:`);

    await reservePage.selecionar_voo(flight, airline, departs, arrives, price);

    // Pagina de Compra - Purchase
    await expect(page).toHaveURL(purchasePage.url);
    await expect(page.locator(purchasePage.tituloSecao))
          .toHaveText(`Your flight from TLV to SFO has been reserved.`);

    await purchasePage.preencher_nome(nome);
    await purchasePage.selecionar_bandeira(cardType);
    await purchasePage.lembrar_de_mim();
    await purchasePage.clicar_para_concluir_compra();

    // Pagina de Confirmação - Confirmation
    await expect(page).toHaveURL(confirmationPage.url);
    await expect(page.locator(confirmationPage.mensagem))
          .toHaveText(`Thank you for your purchase!`);
    await expect(page.getByRole('row',
          { name: `${confirmationPage.labelPrice} ${amount}`})).toBeVisible();
          

})



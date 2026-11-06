// Framework, pacotes e bibliotecas
import { test, expect } from '@playwright/test'; 

// Funções ou métodos (testes)
test('Comprar passagem', async ({ page }) => {

    //abrir o navegador
    await page.goto('https://www.blazedemo.com');

    //selecionar as cidades de origem e destino, clicar no botão "Find Flights" 
    await page.locator('select[name="fromPort"]').selectOption("São Paolo"); 
    await page.locator('select[name="toPort"]').selectOption("London"); 
    await page.locator('.btn-primary').click(); 

    // transição de pagina 
    //verificar o endereço da pagina e o texto ancora
    await expect(page).toHaveURL(/reserve\.php/);
    await expect(page.locator('h3')).toHaveText('Flights from São Paolo to London:');

    // selecionar o botao com base nas informaçoes do voo
    await page.getByRole('row', { name: 'Choose This Flight 9696' })
    .getByRole('button').click();

    // transição de pagina
    //verificar o endereço da pagina e o texto ancora
    await expect(page).toHaveURL(/purchase\.php/);
    await expect(page.locator('h2')).toHaveText('Your flight from TLV to SFO has been reserved.');

    // Preencher primeiro nome, bandeira do cartão, e lembre-se de mim
    await page.locator('#inputName').fill('Teste Playwright');
    await page.locator('#cardType').selectOption('amex');
    await page.locator('#rememberMe').check();

    // clicar no botão "Purchase Flight"
    await page.locator('.btn-primary').click();

    // transição de pagina
    //verificar o endereço da pagina e o texto ancora
    await expect(page).toHaveURL(/confirmation\.php/);
    await expect(page.locator('h1')).toHaveText('Thank you for your purchase today!');

    // verificar o preço da passagem
    await expect(page.getByRole('row', { name: 'Amount 555 USD'})).toBeVisible();


}) // fecha o teste comprar passagem


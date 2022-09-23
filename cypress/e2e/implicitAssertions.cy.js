/// <reference types="cypress"/>

it('passes', () => {
    cy.visit('http://localhost:8080/commands/assertions');

    cy.get('.table.table-bordered.assertion-table tr').eq(3)
    .should('have.class', 'success');

    cy.get('.table.table-bordered.assertion-table tr').eq(3)
    .should('have.attr', 'class');

    cy.get('.table.table-bordered.assertion-table tr td').eq(3)
    .should('have.text', 'Column content');

    cy.get('.table.table-bordered.assertion-table tr td').eq(3)
    .should('have.html', 'Column content');

    cy.get('.table.table-bordered.assertion-table tr td').eq(3)
    .should('contain', 'Column content');        //можно искать по части текста

    cy.get('.table.table-bordered.assertion-table tr td').eq(3)
    .should('include.text', 'Column content');   //можно искать по части текста

    cy.get('.table.table-bordered.assertion-table tr td').eq(3)
    .should('not.contain', 'Csdadat');  // не содерижт

    cy.get('.table.table-bordered.assertion-table tr th').eq(5)
    .should('contain', '3'); 

    cy.get('.table.table-bordered.assertion-table tr th').eq(5)
    .invoke('text') // вытащили текст
    .then(parseFloat) // перевели текст в число
    //.should('be.greaterThan', 2); // больше числа
    .should('eq', 3); // конкретное число
    
    cy.visit('http://localhost:8080/commands/querying');
    cy.get('#inputName').type('Hello').should('have.value', 'Hello'); // проверяем, что что-то отображается в поле

    cy.visit('http://localhost:8080/commands/assertions');
    cy.get('.table.table-bordered.assertion-table tr td').eq(5)
    .should('have.css', 'background-color')
    .and('eq', 'rgb(223, 240, 216)'); // проверка цвета по РГБ


    cy.get('.table.table-bordered.assertion-table tr td').eq(5)
    .should('be.visible')
})
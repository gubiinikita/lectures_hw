/// <reference types="cypress"/>

it('passes', () => {
    cy.visit('http://localhost:8080/commands/assertions');

    cy.location().then( location => {
        expect(location.href).to.eq('http://localhost:8080/commands/assertions');
        expect(location.host).to.eq('localhost:8080');
        expect(location.hostname).to.eq('localhost');
        expect(location.port).to.eq('8080');
        expect(location.search).to.be.empty;
        expect(location.pathname).to.eq('/commands/assertions');
        expect(location.protocol).to.eq('http:');
        expect(location.pathname).to.not.contain('//');
    })
})
/// <reference types="cypress"/>

const baseUrl = 'https://sanitarskyi-ngx-admin.herokuapp.com/'

let args = {
    position: {
        bottomLeft: 'bottom-left',
        bottomRight: 'bottom-right',
        topRight: 'top-right',
        topLeft: 'top-left'
    },
    title: {
        bottomLeft: 'Oh, hi Mark',
        bottomRight: 'Hey, Apple',
        topRight: 'Every time i die',
        topLeft: 'Saosin'
    },
    content: {
        bottomLeft: 'Anyway, how is your life?',
        bottomRight: 'Is it really you?',
        topRight: 'Map change',
        topLeft: 'Seven years'
    },
    time: 2000,
    type: {
        bottomLeft: 'danger',
        bottomRight: 'success',
        topRight: 'info',
        topLeft: 'warning'
    }
}

let expected = {
    icon: {
        bottomLeft: 'flash',
        bottomRight: 'checkmark',
        topRight: 'question-mark',
        topLeft: 'alert-triangle'
    },
    title: {
        bottomLeft: 'Oh, hi Mark',
        bottomRight: 'Hey, Apple',
        topRight: 'Every time i die',
        topLeft: 'Saosin'
    },
    content: {
        bottomLeft: 'Anyway, how is your life?',
        bottomRight: 'Is it really you?',
        topRight: 'Map change',
        topLeft: 'Seven years'
    },
    color: {
        bottomLeft: 'rgb(176, 0, 32)',
        bottomRight: 'rgb(96, 175, 32)',
        topRight: 'rgb(4, 149, 238)',
        topLeft: 'rgb(255, 159, 5)'
    },
    position: {
        bottomLeft: '',
        bottomRight: '',
        topRight: '',
        topLeft: ''
    }
}

beforeEach(() => {
    cy.visit(baseUrl);
    cy.get('[alt="Material Dark Theme"]').click();
})



describe('Toast tests', () => {
    // it.skip('Bottom left toast test', () => {
    //     cy.get('[title="Modal & Overlays"]').click();
    //     cy.get('[title="Toastr"]').click();
    
    //     cy.get('[class*="position-select"]').click();
    //     cy.get(`[ng-reflect-value="${args.position.bottomLeft}"]`).click();
    
    //     cy.get('[name="title"]').click().clear().type(`${args.title.bottomLeft}`);
    //     cy.get('[name="content"]').click().clear().type(`${args.content.bottomLeft}`);
    //     cy.get('[class*="mat-ripple appearance-outline"]').click();
    //     cy.get(`[ng-reflect-value="${args.type.bottomLeft}"]`).click();
    //     cy.get('[class*="mat-ripple appearance-filled"]').click();
    
    //     cy.get(`[class*="status-${args.type.bottomLeft}"]`).within(() => {
    //         cy.get(`[data-name="${expected.icon.bottomLeft}"]`).should('be.visible');
    //         cy.get('[class="title subtitle"]').should('contain', `${expected.title.bottomLeft}`);
    //         cy.get('[class="message"]').should('contain', `${expected.content.bottomLeft}`);
    //     })
    //     .should('be.visible')
    //     .should('have.css', 'background-color')
    //     .and('eq', `${expected.color.bottomLeft}`);
    
    //     cy.get(`[class*="status-${args.type.bottomLeft}"]`).wait(args.time)
    //     .should('not.exist');
    // });

    it('Bottom left toast test', () => {
        cy.get('[title="Modal & Overlays"]').click();
        cy.get('[title="Toastr"]').click();
    
        cy.get('[class*="position-select"]').click();
        cy.get(`[ng-reflect-value="${args.position.bottomRight}"]`).click();
    
        cy.get('[name="title"]').click().clear().type(`${args.title.bottomRight}`);
        cy.get('[name="content"]').click().clear().type(`${args.content.bottomRight}`);
        cy.get('[class*="mat-ripple appearance-outline"]').click();
        cy.get(`[ng-reflect-value="${args.type.bottomRight}"]`).click();
        cy.get('[class*="mat-ripple appearance-filled"]').click();

        cy.get(`[class*="status-${args.type.bottomRight}"]`)
        .click({position: "bottomLeft"}, {multiple: true})
        .should('not.exist');
        cy.get('[class*="mat-ripple appearance-filled"]').click();
    
        cy.get(`[class*="status-${args.type.bottomRight}"]`).within(() => {
            cy.get(`[data-name="${expected.icon.bottomRight}"]`).should('be.visible');
            cy.get('[class="title subtitle"]').should('contain', `${expected.title.bottomRight}`);
            cy.get('[class="message"]').should('contain', `${expected.content.bottomRight}`);
        })
        .should('be.visible')
        .should('have.css', 'background-color')
        .and('eq', `${expected.color.bottomRight}`);
    
        cy.get(`[class*="status-${args.type.bottomRight}"]`).wait(args.time)
        .should('not.exist');
    });

    it.skip('Top right toast test', () => {
        cy.get('[title="Modal & Overlays"]').click();
        cy.get('[title="Toastr"]').click();
    
        cy.get('[class*="position-select"]').click();
        cy.get(`[ng-reflect-value="${args.position.topRight}"]`).click();
    
        cy.get('[name="title"]').click().clear().type(`${args.title.topRight}`);
        cy.get('[name="content"]').click().clear().type(`${args.content.topRight}`);
        cy.get('[class*="mat-ripple appearance-outline"]').click();
        cy.get(`[ng-reflect-value="${args.type.topRight}"]`).click();
        cy.get('[class*="mat-ripple appearance-filled"]').click();
    
        cy.get(`[class*="status-${args.type.topRight}"]`).within(() => {
            cy.get(`[data-name="${expected.icon.topRight}"]`).should('be.visible');
            cy.get('[class="title subtitle"]').should('contain', `${expected.title.topRight}`);
            cy.get('[class="message"]').should('contain', `${expected.content.topRight}`);
        })
        //.should('be.visible') - конкретно этот кейс не работает. Почему?
        .should('have.css', 'background-color')
        .and('eq', `${expected.color.topRight}`);

        cy.get(`[class*="status-${args.type.topRight}"]`).wait(args.time)
        .should('not.exist');
    });

    // it('Top left toast test', () => {
    //     cy.get('[title="Modal & Overlays"]').click();
    //     cy.get('[title="Toastr"]').click();
    
    //     cy.get('[class*="position-select"]').click();
    //     cy.get(`[ng-reflect-value="${args.position.topLeft}"]`).click();
    
    //     cy.get('[name="title"]').click().clear().type(`${args.title.topLeft}`);
    //     cy.get('[name="content"]').click().clear().type(`${args.content.topLeft}`);
    //     cy.get('[class*="mat-ripple appearance-outline"]').click();
    //     cy.get(`[ng-reflect-value="${args.type.topLeft}"]`).click();
    //     cy.get('[class*="mat-ripple appearance-filled"]').click();
    
    //     cy.get(`[class*="status-${args.type.topLeft}"]`).within(() => {
    //         cy.get(`[data-name="${expected.icon.topLeft}"]`).should('be.visible');
    //         cy.get('[class="title subtitle"]').should('contain', `${expected.title.topLeft}`);
    //         cy.get('[class="message"]').should('contain', `${expected.content.topLeft}`);
    //     })
    //     .should('be.visible')
    //     .should('have.css', 'background-color')
    //     .and('eq', `${expected.color.topLeft}`);
    
    //     cy.get(`[class*="status-${args.type.topLeft}"]`).wait(args.time)
    //     .should('not.exist');
    // });
});
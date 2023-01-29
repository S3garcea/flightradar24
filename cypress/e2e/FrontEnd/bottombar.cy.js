/// <reference types = "Cypress" />

describe('check Bottom Bar', ()=>{

    beforeEach('Access website', ()=>{

        cy.visit('https://www.flightradar24.com/');
        cy.get('#onetrust-accept-btn-handler').click();

    })

    it('check Center Map Button', ()=> {

        cy.get('.base-button.circle.small.location-button').should('exist').should('be.visible');

    })

    it('check Settings Button', ()=> {

        cy.get('.bottom-menu').should('exist').should('be.visible');
        cy.get('#mapControlsApp > div > section.section.overlay-bottom-menu.with-animation.visible > div > button:nth-child(1)').should('have.attr','class').should('eq','base-button square small bottom-menu-button');
        cy.get('#mapControlsApp > div > section.section.overlay-bottom-menu.with-animation.visible > div > button:nth-child(1)').click();
        cy.get('#mapControlsApp > div > section.section.overlay-bottom-menu.with-animation.visible > div > button:nth-child(1)').should('have.attr','class').should('eq','base-button square small bottom-menu-button active');
        cy.get('.settings-panel.with-animation').should('exist').should('be.visible');

    })

    it('check Weather Button', ()=> {

        cy.get('#mapControlsApp > div > section.section.overlay-bottom-menu.with-animation.visible > div > button:nth-child(2)').should('have.attr','class').should('eq','base-button square small bottom-menu-button');
        cy.get('#mapControlsApp > div > section.section.overlay-bottom-menu.with-animation.visible > div > button:nth-child(2)').click();
        cy.get('#mapControlsApp > div > section.section.overlay-bottom-menu.with-animation.visible > div > button:nth-child(2)').should('have.attr','class').should('eq','base-button square small bottom-menu-button active');
        cy.get('.weather-panel.with-animation').should('exist').should('be.visible');


    })

    it('check Filters Button', ()=> {

        cy.get('#mapControlsApp > div > section.section.overlay-bottom-menu.with-animation.visible > div > button:nth-child(3)').should('have.attr','class').should('eq','base-button square small bottom-menu-button bottom-menu-filters-button');
        cy.get('#mapControlsApp > div > section.section.overlay-bottom-menu.with-animation.visible > div > button:nth-child(3)').click();
        cy.get('#mapControlsApp > div > section.section.overlay-bottom-menu.with-animation.visible > div > button:nth-child(3)').should('have.attr','class').should('eq','base-button square small bottom-menu-button active bottom-menu-filters-button');
        cy.get('#fr24_LegacyFiltersPanel').should('exist').should('be.visible');
    })
    
    it('check Widgets Button', ()=> {

        cy.get('#mapControlsApp > div > section.section.overlay-bottom-menu.with-animation.visible > div > div > button').should('have.attr','class').should('eq','base-button square small bottom-menu-button displayed-on-desktop position-relative');
        cy.get('#mapControlsApp > div > section.section.overlay-bottom-menu.with-animation.visible > div > div > button').click();
        cy.get('#mapControlsApp > div > section.section.overlay-bottom-menu.with-animation.visible > div > div > button').should('have.attr','class').should('eq','base-button square small bottom-menu-button active displayed-on-desktop position-relative');
        cy.get('.widgets-panel.with-animation').should('exist').should('be.visible');

    })

    it('check Playback Button', ()=> {

        cy.get('#mapControlsApp > div > section.section.overlay-bottom-menu.with-animation.visible > div > button:nth-child(5)').should('have.attr','class').should('eq','base-button square small bottom-menu-button displayed-on-desktop');
        cy.get('#mapControlsApp > div > section.section.overlay-bottom-menu.with-animation.visible > div > button:nth-child(5)').click();
        cy.get('#mapControlsApp > div > section.section.overlay-bottom-menu.with-animation.visible > div > button:nth-child(5)').should('have.attr','class').should('eq','base-button square small bottom-menu-button active displayed-on-desktop');
        cy.get('.playback-panel.with-animation').should('exist').should('be.visible');

    })
    
    it('check Upgrade Button', ()=> {

        cy.get('.base-button.rounded.green.small.upgrade-button').should('exist').should('be.visible');

    })

})
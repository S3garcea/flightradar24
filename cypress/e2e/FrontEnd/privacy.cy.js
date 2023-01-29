/// <reference types = "Cypress" />

describe('check privacy pop up', ()=>{

    it('check pop up', ()=> {

        cy.visit('https://www.flightradar24.com/');
        cy.get('.ot-sdk-container').should('be.visible');
        cy.get('.ot-sdk-container').should('have.attr', 'aria-label', 'We care about your privacy');
        cy.get('#onetrust-policy-title').should('have.text', 'We care about your privacy');
        cy.get('#onetrust-policy-text').should('have.text', 'We and our partners store and/or access information on a device, such as unique IDs in cookies to process personal data. You may accept or manage your choices by clicking below, including your right to object where legitimate interest is used, or at any time in the privacy policy page. These choices will be signaled to our partners and will not affect browsing data.Terms of service');
        cy.get('#onetrust-policy-text > a').should('have.attr','href').should('eq','https://mobile.flightradar24.com/mobile/terms');
        cy.get('#onetrust-policy-text > a').should('have.attr','aria-label').should('eq','Terms of service');
        cy.get('#onetrust-policy-text > a').should('have.text','Terms of service');
        cy.get('.ot-dpd-title').should('have.text', 'We and our partners process data to provide:');
        cy.get('.ot-dpd-desc').should('have.text', 'Use precise geolocation data. Actively scan device characteristics for identification. Store and/or access information on a device. Personalised ads and content, ad and content measurement, audience insights and product development. \n        List of partners (vendors)\n        ');
        cy.get('#onetrust-policy > div.ot-dpd-container > div > p > button').should('have.text','\n        List of partners (vendors)\n        ');
        cy.get('#onetrust-accept-btn-handler').should('have.text','I accept');
        cy.get('#onetrust-pc-btn-handler').should('have.text','Show purposes');

    })

    it('check Show purposes', ()=> {

        cy.visit('https://www.flightradar24.com/');
        cy.get('#onetrust-pc-btn-handler').click();

        cy.get('#onetrust-pc-sdk').should('be.visible')
    })

    it('check Show purposes', ()=> {

        cy.visit('https://www.flightradar24.com/');
        cy.get('#onetrust-accept-btn-handler').click();
    
        cy.get('#ot-sdk-container').should('not.exist')
    })
    
    })
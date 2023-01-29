/// <reference types = "Cypress" />

describe('check Widgets cards', ()=>{

    beforeEach('Access website', ()=>{

        cy.visit('https://www.flightradar24.com/');
        cy.get('#onetrust-accept-btn-handler').click();

    })

    it('check Most Tracked Flights', ()=> {

        cy.get('#widgetPanel > div > aside.card-panel.tracked-stats').should('have.attr','open').should('eq','open');
        
        /*
        cy.get('.card-panel.tracked-stats').should('have.attr','max.height').should('eq','192px');
        cy.get('.card-panel.tracked-stats').should('have.attr','height').should('eq','192px');
*/

        cy.get('.card-panel.tracked-stats > header.card-summary > div.card-title').should('have.text','Most tracked flights');
        cy.get('.card-panel.tracked-stats > header.card-summary > div.card-more-info > span').should('have.text','LIVE');
        cy.get('#widgetPanel > div > aside.card-panel.tracked-stats > header > div.card-more-info > div > span > svg').should('have.attr','xmlns').should('eq','http://www.w3.org/2000/svg');

        cy.get('#widgetPanel > div > aside.card-panel.tracked-stats > section > div > div > div:nth-child(1)').should('exist').should('be.visible');
        cy.get('#widgetPanel > div > aside.card-panel.tracked-stats > section > div > div > div:nth-child(1) > div.item-heading > span.item-index').should('exist').should('be.visible');
        cy.get('#widgetPanel > div > aside.card-panel.tracked-stats > section > div > div > div:nth-child(1) > div.item-heading > span.item-title').should('exist').should('be.visible');
        cy.get('#widgetPanel > div > aside.card-panel.tracked-stats > section > div > div > div:nth-child(1) > div.item-heading > span.item-clicks').should('exist').should('be.visible');
        cy.get('#widgetPanel > div > aside.card-panel.tracked-stats > section > div > div > div:nth-child(1) > div.item-heading > span.item-audience > span > svg').should('exist').should('be.visible');
        cy.get('#widgetPanel > div > aside.card-panel.tracked-stats > section > div > div > div:nth-child(1) > div.item-heading > span.item-audience > span > svg > defs > style').should('have.text',' .flwrs__cls-1{fill:currentColor} ');
        cy.get('#widgetPanel > div > aside.card-panel.tracked-stats > section > div > div > div:nth-child(1) > div.item-route').should('exist').should('be.visible');
        cy.get('#widgetPanel > div > aside.card-panel.tracked-stats > section > button').should('exist').should('be.visible');

    })

    it('check Statistics', ()=> {

        cy.get('#widgetPanel > div > aside:nth-child(2) > header > div.card-title').should('have.text','Statistics');
        cy.get('#widgetPanel > div > aside:nth-child(2) > header > div.card-more-info > span').should('have.text','LIVE');
        cy.get('#widgetPanel > div > aside:nth-child(2) > header > div.card-more-info > div > span > svg').should('have.attr','xmlns').should('eq','http://www.w3.org/2000/svg');

        cy.get('#widgetPanel > div > aside:nth-child(2) > header > div.card-more-info > div > span > svg').click();
        cy.get('#widgetPanel > div > aside:nth-child(2) > section').should('be.visible');

        cy.get('#widgetPanel > div > aside:nth-child(2) > section > table > thead > tr > th:nth-child(1)').should('have.text',' Data source ');
        cy.get('#widgetPanel > div > aside:nth-child(2) > section > table > thead > tr > th:nth-child(2)').should('have.text',' View ');
        cy.get('#widgetPanel > div > aside:nth-child(2) > section > table > thead > tr > th:nth-child(3)').should('have.text',' Global ');
        cy.get('#widgetPanel > div > aside:nth-child(2) > section > table > tbody > tr.grid-row.item-total > td:nth-child(1)').should('have.text','Total');
        cy.get('.statistics-link').should('have.attr','href').should('eq','/data/statistics');
        cy.get('.statistics-link').should('have.text','Daily flight tracking statistics');

    })

    it('check Tweets', ()=> {

        cy.get('#widgetPanel > div > aside:nth-child(3) > header').should('exist').should('be.visible');
        cy.get('#widgetPanel > div > aside:nth-child(3) > header > div.card-title').should('have.text','Tweets');
        cy.get('#widgetPanel > div > aside:nth-child(3) > header > div.card-opener > span > svg').should('have.attr','xmlns').should('eq','http://www.w3.org/2000/svg');

        cy.get('#widgetPanel > div > aside:nth-child(3) > header > div.card-opener > span > svg').click();
        cy.get('#widgetPanel > div > aside:nth-child(3) > section').should('exist').should('be.visible');
        cy.get('.twitter-link').should('have.attr','href').should('eq','https://twitter.com/flightradar24');
        cy.get('.twitter-link').should('have.text','Follow us on Twitter ');

    })

    it('check Blog posts', ()=> {

        cy.get('#widgetPanel > div > aside:nth-child(4) > header').should('exist').should('be.visible');
        cy.get('#widgetPanel > div > aside:nth-child(4) > header > div.card-title').should('have.text','Blog posts');
        cy.get('#widgetPanel > div > aside:nth-child(4) > header > div.card-opener > span > svg').should('have.attr','xmlns').should('eq','http://www.w3.org/2000/svg');

        cy.get('#widgetPanel > div > aside:nth-child(4) > header > div.card-opener > span > svg').click();
        cy.get('#widgetPanel > div > aside:nth-child(4) > section').should('exist').should('be.visible');

    })
    
})

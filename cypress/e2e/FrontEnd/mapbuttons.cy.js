/// <reference types = "Cypress" />

describe('check Map Buttons', ()=>{

    beforeEach('Access website', ()=>{

        cy.visit('https://www.flightradar24.com/');
        cy.get('#onetrust-accept-btn-handler').click();

    })

    it('check Search Bar', ()=> {

        cy.get('#fr24_SearchContainer').should('exist').should('be.visible');
        cy.get('.base-icon.fill-current.icon.search-icon').should('exist').should('be.visible');
        cy.get('.base-icon.fill-current.icon.search-icon').should('have.attr','style').should('eq','color: white;');
        cy.get('#searchBox').should('exist').should('be.visible');
        cy.get('#searchBox').should('have.attr','autocomplete').should('eq','off');
        cy.get('#searchBox').should('have.attr','placeholder').should('eq','Search');

    })

    it('check View Selector', ()=> {

        cy.get('.view-selector').should('exist').should('be.visible');
        cy.get('.view-selector > span.label').should('have.text','View');
        cy.get('.view-selector > span.selected').should('have.text','Map');
        cy.get('.base-icon.fill-current.arrow').should('have.attr','style').should('eq','color: white;');
        
        cy.get('.base-icon.fill-current.arrow').click();
        cy.get('.list-wrapper.active').should('exist').should('be.visible');
        cy.get('#mapControlsApp > div > section.section.overlay-views-panel.with-animation.visible > div.list-wrapper.active > ul:nth-child(1) > li.label > span').should('have.text',' List views ');
        cy.get('#mapControlsApp > div > section.section.overlay-views-panel.with-animation.visible > div.list-wrapper.active > ul:nth-child(2) > li.label > span').should('have.text',' Map views ');

        //disabled (PREMIUM)

        cy.get('#mapControlsApp > div > section.section.overlay-views-panel.with-animation.visible > div.list-wrapper.active > ul:nth-child(1) > li.disabled.premium-content.featureInfo-98 > span').should('have.text',' List ');
        cy.get('#mapControlsApp > div > section.section.overlay-views-panel.with-animation.visible > div.list-wrapper.active > ul:nth-child(1) > li.disabled.premium-content.featureInfo-75 > span').should('have.text',' Airport ');
        cy.get('#mapControlsApp > div > section.section.overlay-views-panel.with-animation.visible > div.list-wrapper.active > ul:nth-child(1) > li.disabled.premium-content.featureInfo-76 > span').should('have.text',' Fleet ');
        cy.get('#mapControlsApp > div > section.section.overlay-views-panel.with-animation.visible > div.list-wrapper.active > ul:nth-child(2) > li.disabled.premium-content.featureInfo-99 > span').should('have.text',' Radar ');

        //active

        cy.get('#mapControlsApp > div > section.section.overlay-views-panel.with-animation.visible > div.list-wrapper.active > ul:nth-child(2) > li.active > span').should('have.text',' Map (default) ');
        cy.get('#mapControlsApp > div > section.section.overlay-views-panel.with-animation.visible > div.list-wrapper.active > ul:nth-child(2) > li:nth-child(3) > span').should('have.text',' Multi-select ');

        cy.get('.base-icon.fill-current.arrow').click();

    })

    it('check Plus Button', ()=> {

        cy.get('#mapControlsApp > div > section.section.overlay-side-buttons.with-animation.visible > button.base-button.square.small.map-control-button.zoom-button.plus > span').should('exist').should('be.visible');
        cy.get('#mapControlsApp > div > section.section.overlay-side-buttons.with-animation.visible > button.base-button.square.small.map-control-button.zoom-button.plus > span').should('have.attr','style').should('eq','color: white;');


    })

    it('check Minus Button', ()=> {

        cy.get('#mapControlsApp > div > section.section.overlay-side-buttons.with-animation.visible > button.base-button.square.small.map-control-button.zoom-button.minus > span').should('exist').should('be.visible');
        cy.get('#mapControlsApp > div > section.section.overlay-side-buttons.with-animation.visible > button.base-button.square.small.map-control-button.zoom-button.minus > span').should('have.attr','style').should('eq','color: white;');

    })
    
    it('check Full Screen Button', ()=> {

        cy.get('#mapControlsApp > div > section.section.overlay-side-buttons.with-animation.visible > div > div:nth-child(1) > button.base-button.square.small.map-control-button.fullscreen-button > span').should('exist').should('be.visible');
        cy.get('#mapControlsApp > div > section.section.overlay-side-buttons.with-animation.visible > div > div:nth-child(1) > button.base-button.square.small.map-control-button.fullscreen-button > span').should('have.attr','style').should('eq','color: white;');
    })
    
})
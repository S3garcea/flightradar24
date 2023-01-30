/// <reference types = "Cypress" />

beforeEach('Access Apps Page', ()=>{

    cy.visit('https://www.flightradar24.com/apps');
    cy.get('#onetrust-accept-btn-handler').click();

})

describe('check Apps Page', ()=>{
  
    it('check Text', ()=> {
 
        cy.get('.content > h1').should('have.text','The best flight tracker app');
        cy.get('#content > div > div > div.content-row.description > p').should('have.text','Take Flightradar24 with you wherever you go with the best flight tracker app for iOS and Android. The #1 app in over 150 countries, our plane tracker app lets you follow live air traffic around the world from your mobile device. See detailed information about each flight on a moving map in real-time or just point your device at the sky to see what flights are passing overhead. Download the best flight tracker app to see how millions of people are tracking flights with Flightradar24.');
        cy.get('#content > div > div > p > strong').should('have.text',"The world's most popular flight tracker - #1 Travel app in over 150 countries");
        cy.get('#content > div > div > h2').should('have.text','App features');
        cy.get('#content > div > div > div.content-row.app-features > ul:nth-child(1) > li:nth-child(1)').should('have.text','See flights travel around the world in real-time on a detailed map');
        cy.get('#content > div > div > div.content-row.app-features > ul:nth-child(1) > li:nth-child(2)').should('have.text','Follow flights in 3D View to see what the pilots see');
        cy.get('#content > div > div > div.content-row.app-features > ul:nth-child(1) > li:nth-child(3)').should('have.text','Search for flights by flight number, call sign, route, airline');
        cy.get('#content > div > div > div.content-row.app-features > ul:nth-child(1) > li:nth-child(4)').should('have.text','Get information about every flight, such as aircraft details, route, estimated time of arrival, actual time of departure, speed, altitude, high-resolution photos of the aircraft');
        cy.get('#content > div > div > div.content-row.app-features > ul:nth-child(2) > li:nth-child(1)').should('have.text','Find out which flights are near you with AR View simply by pointing your device at the sky');
        cy.get('#content > div > div > div.content-row.app-features > ul:nth-child(2) > li:nth-child(2)').should('have.text','See data from past flights and replay them directly in the app');
        cy.get('#content > div > div > div.content-row.app-features > ul:nth-child(2) > li:nth-child(3)').should('have.text','Use filters to see only the flights you’re interested in');
        cy.get('#content > div > div > div.content-row.app-features > ul:nth-child(2) > li:nth-child(4)').should('have.text','View airport arrival & departures boards, flight status, current delay stats, current weather conditions, and aircraft on the ground just by tapping on any airport pin');

    })

    it('check App buttons', ()=> {
 
        cy.get('.app-buttons').should('be.visible');
        cy.get('.app-buttons > a.ios').should('have.attr','href').should('eq','https://apps.apple.com/app/apple-store/id382233851?pt=6561867&ct=fr24_apps_page_new&mt=8');
        cy.get('.app-buttons > a.ios > img').should('have.attr','src').should('eq','../../../../static/images/apps/app_store.svg');
        cy.get('.app-buttons > a.android').should('have.attr','href').should('eq','https://play.google.com/store/apps/details?id=com.flightradar24free&hl=en&referrer=utm_source%3Dfr24_apps_page_new');
        cy.get('.app-buttons > a.android > img').should('have.attr','src').should('eq','../../../../static/images/apps/google_play.png');

    })

    it('check Screenshots', ()=> {
 
        cy.get('.ui-component.ui-tabs').should('be.visible');
        cy.get('.ui-component.ui-tabs > div.tabs').should('have.text','ScreenshotsIOS Android');
        cy.get('.ui-component.ui-tabs > div.tabs > a:nth-child(1)').should('have.text','IOS');
        cy.get('.ui-component.ui-tabs > div.tabs > a:nth-child(1)').should('have.attr','class').should('eq','active');
        cy.get('.ui-component.ui-tabs > div.tabs > a:nth-child(2)').should('have.text','Android');
        cy.get('.ui-component.ui-tabs > div.tabs > a:nth-child(2)').click();
        cy.get('.ui-component.ui-tabs > div.tabs > a:nth-child(2)').should('have.attr','class').should('eq','active');

    })

    it('check Footer', ()=> {
 
       cy.get('body > footer').should('be.visible');
       cy.get('body > footer').should('have.attr','style').should('eq','padding-bottom:15px');
       cy.get('body > footer > p').should('have.text','© 2023 Flightradar24 AB');
     
       cy.get('body > footer > ul > li:nth-child(1)').should('have.text','Contact us');
       cy.get('body > footer > ul > li:nth-child(1) > a').should('have.attr','href').should('eq','/contact-us');
     
       cy.get('body > footer > ul > li:nth-child(2)').should('have.text','FAQ');
       cy.get('body > footer > ul > li:nth-child(2) > a').should('have.attr','href').should('eq','/faq');

       cy.get('body > footer > ul > li:nth-child(3)').should('have.text','Careers');
       cy.get('body > footer > ul > li:nth-child(3) > a').should('have.attr','href').should('eq','/careers');

       cy.get('body > footer > ul > li:nth-child(4)').should('have.text','Privacy');
       cy.get('body > footer > ul > li:nth-child(4) > a').should('have.attr','href').should('eq','/privacy-policy'); 

       cy.get('body > footer > ul > li:nth-child(5)').should('have.text','Terms');
       cy.get('body > footer > ul > li:nth-child(5) > a').should('have.attr','href').should('eq','/terms-and-conditions');
    })

})
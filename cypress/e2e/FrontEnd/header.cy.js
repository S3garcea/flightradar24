/// <reference types = "Cypress" />

describe('check Header', ()=>{

    beforeEach('Access website', ()=>{

        cy.visit('https://www.flightradar24.com/');
        cy.get('#onetrust-accept-btn-handler').click();

    })

    it('check Header Logo', ()=> {

        cy.get('#map > a').should('have.attr','href').should('eq','/');
        cy.get('.logo-fr24-flat > title').should('have.text','Flightradar24 - Flight Tracker');

    })

    it('check Log in', ()=> {

        cy.get('#premiumOverlay > a > span').should('have.text','Log in');
        cy.get('#premiumOverlay > a').click();
        cy.get('#fr24_LoginSettings > div.create-account.cta-desktop > a').should('have.attr','href').should('eq','/premium/signup?utm_source=website&utm_medium=nav&utm_campaign=create_account');
        cy.get('#fr24_LoginSettings > div.create-account.cta-desktop > a').should('have.text','Create account');
        cy.get('#fr24_LoginSettings > h4').should('have.text','Log in with email');
        cy.get('#fr24_SignInEmail').should('have.attr','type').should('eq','email');
        cy.get('#fr24_SignInEmail').should('have.attr','placeholder').should('eq','Email');
        cy.get('#fr24_SignInEmail').should('have.attr','required').should('eq','required');
        cy.get('#fr24_SignInPassword').should('have.attr','type').should('eq','password');
        cy.get('#fr24_SignInPassword').should('have.attr','placeholder').should('eq','Password');
        cy.get('#fr24_SignInPassword').should('have.attr','required').should('eq','required');
        cy.get('#fr24_SignInRemember').should('have.attr','type').should('eq','checkbox');
        cy.get('#fr24_SignInRemember').should('have.attr','checked').should('eq','checked');
        cy.get('.left.bold > label').should('have.attr','for').should('eq','fr24_SignInRemember');
        cy.get('.left.bold > label').should('have.text','Remember me');
        cy.get('#fr24_ForgotPassword').should('have.attr','href').should('eq','javascript: void(0);');
        cy.get('#fr24_ForgotPassword').should('have.text','Forgot password?');
        cy.get('#fr24_SignIn').should('have.text','Log in');
        cy.get('.info-text > span').should('have.text','or log in with');
        cy.get('.fr24-btn-google-plus').should('have.attr','href').should('eq','https://www.flightradar24.com/auth/googleplus/request');
        cy.get('.fr24-btn-google-plus').should('have.attr','title').should('eq','Log in with Google');
        cy.get('.fr24-btn-google-plus > span.fr24-btn-text').should('have.text','Sign in with Google');
        cy.get('.fr24-btn-facebook').should('have.attr','href').should('eq','https://www.flightradar24.com/auth/facebook/request');
        cy.get('.fr24-btn-facebook').should('have.attr','title').should('eq','Log in with Facebook');
        cy.get('.fr24-btn-facebook > span.fr24-btn-text').should('have.text','Sign in with Facebook');
        cy.get('.fr24-btn-apple').should('have.attr','href').should('eq','https://www.flightradar24.com/auth/apple/request');
        cy.get('.fr24-btn-apple').should('have.attr','title').should('eq','Log in with Facebook');
        cy.get('.fr24-btn-apple > span.fr24-btn-text').should('have.text','Sign in with Apple');
        cy.get('.find-out-more > h4').should('have.text','Get more from Flightradar24');
        cy.get('.find-out-more > p').should('have.text','Upgrade today to get access to more features and data.');
        cy.get('.find-out-more > a').should('have.attr','href').should('eq','https://www.flightradar24.com/premium');
        cy.get('.find-out-more > a').should('have.text','7-day FREE trial | Learn more');

    })
    
})

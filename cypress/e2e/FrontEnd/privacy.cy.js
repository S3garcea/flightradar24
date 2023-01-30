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

    it('check Terms of Service', ()=> {

        cy.visit('https://mobile.flightradar24.com/mobile/terms');
        cy.get('.about-container').should('be.visible');

    }) 

    it('check List of partners', ()=> {

        cy.visit('https://www.flightradar24.com/');
        cy.get('.ot-dpd-content > p > button').should('have.attr','class').should('eq','ot-link-btn onetrust-vendors-list-handler');
        cy.get('.ot-dpd-content > p > button').should('have.text','\n        List of partners (vendors)\n        ');

        cy.get('#onetrust-pc-btn-handler').click();
        cy.get('#onetrust-pc-sdk').should('be.visible');
        cy.get('#onetrust-pc-sdk > div > div.ot-pc-header > div').should('be.visible');
        cy.get('#onetrust-pc-sdk > div > div.ot-pc-header > div > img').should('have.attr','src').should('eq','https://cdn.cookielaw.org/logos/f2bc0d64-383a-4d01-8b10-c8072c044bde/2114249b-6930-4452-93e0-86383490fdf7/74cb0b55-296b-4425-80f5-94283cadf5dd/01_Logo_Flightradar24_noPayoff_large.png');

        cy.get('#ot-lst-title').should('exist');
        cy.get('.ot-link-btn.back-btn-handler').should('exist');
        cy.get('.ot-search-cntr').should('exist');
        // cy.get('.ot-search-cntr > input').should('have.attr','placeholder').should('eq','Search…');
        cy.get('.ot-search-cntr > svg').should('exist');
        cy.get('.ot-search-cntr > svg > title').should('have.text','Search Icon');
        cy.get('#filter-btn-handler').click({force: true});
        cy.get('#ot-fltr-cnt').should('exist');
        cy.get('#ot-fltr-cnt > button').should('have.text','Clear');
        cy.get('#filter-btn-handler').click({force: true});
        cy.get('.ot-consent-hdr').should('exist');
        cy.get('.ot-chkbox').should('exist');
        cy.get('.save-preference-btn-handler.onetrust-close-btn-handler').should('be.visible');
        cy.get('.save-preference-btn-handler.onetrust-close-btn-handler').should('have.text','Confirm my choices');
    }) 

    it('check Show purposes', ()=> {

        cy.visit('https://www.flightradar24.com/');
        cy.get('#onetrust-pc-btn-handler').click();

        cy.get('#onetrust-pc-sdk').should('exist');
        cy.get('#onetrust-pc-sdk > div > div.ot-pc-header > div').should('exist');
        cy.get('#onetrust-pc-sdk > div > div.ot-pc-header > div > img').should('have.attr','src').should('eq','https://cdn.cookielaw.org/logos/f2bc0d64-383a-4d01-8b10-c8072c044bde/2114249b-6930-4452-93e0-86383490fdf7/74cb0b55-296b-4425-80f5-94283cadf5dd/01_Logo_Flightradar24_noPayoff_large.png');
        cy.get('#ot-pc-title').should('have.text','About your privacy');
        // cy.get('#ot-pc-desc').should('have.text','We process your data to deliver content or advertisements and measure the delivery of such content or advertisements to extract insights about our website. We share this information with our partners on the basis of consent and legitimate interest. You may exercise your right to consent or object to a legitimate interest, based on a specific purpose below or at a partner level in the link under each purpose. These choices will be signaled to our vendors participating in the Transparency and Consent Framework.\n More information');
        cy.get('#ot-pc-desc > a').should('have.text','More information');
        cy.get('#ot-pc-desc > a').should('have.attr','href').should('eq','https://www.flightradar24.com/privacy-policy');
        cy.get('#accept-recommended-btn-handler').should('exist');
        cy.get('#accept-recommended-btn-handler').should('have.text','Allow all');
        cy.get('#ot-category-title').should('have.text',' Manage consent preferences');

        cy.get('#ot-header-id-C0001').should('have.text','Strictly Necessary Cookies');
        cy.get('#ot-pc-content > section > div:nth-child(2) > div.ot-acc-hdr.ot-always-active-group > div.ot-always-active').should('have.text','Always active');
        
        cy.get('#ot-header-id-ISPV2_1').should('have.text','Ensure security, prevent fraud, and debug');
        cy.get('#ot-pc-content > section > div:nth-child(10) > div.ot-acc-hdr.ot-always-active-group > div.ot-always-active').should('have.text','Always active');
        
        cy.get('#ot-header-id-ISPV2_2').should('have.text','Technically deliver ads or content');
        cy.get('#ot-pc-content > section > div:nth-child(11) > div.ot-acc-hdr.ot-always-active-group > div.ot-always-active').should('have.text','Always active');
        
        cy.get('#ot-header-id-IFEV2_1').should('have.text','Match and combine offline data sources');
        cy.get('#ot-pc-content > section > div:nth-child(12) > div.ot-acc-hdr.ot-always-active-group > div.ot-always-active').should('have.text','Always active');
        
        cy.get('#ot-header-id-IFEV2_2').should('have.text','Link different devices');
        cy.get('#ot-pc-content > section > div:nth-child(13) > div.ot-acc-hdr.ot-always-active-group > div.ot-always-active').should('have.text','Always active');
        
        cy.get('#ot-header-id-IFEV2_3').should('have.text','Receive and use automatically-sent device characteristics for identification');
        cy.get('#ot-pc-content > section > div:nth-child(14) > div.ot-acc-hdr.ot-always-active-group > div.ot-always-active').should('have.text','Always active');
        
        cy.get('.save-preference-btn-handler.onetrust-close-btn-handler').should('have.text','Confirm my choices');

    })

    it('check Show Accept', ()=> {

        cy.visit('https://www.flightradar24.com/');
        cy.get('#onetrust-accept-btn-handler').click();
    
        cy.get('#ot-sdk-container').should('not.exist')
    })
    
})
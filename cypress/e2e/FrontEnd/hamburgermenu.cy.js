/// <reference types = "Cypress" />

describe('check Hamburger Menu', ()=>{

    it('check Hamburger Menu', ()=> {

        cy.visit('https://www.flightradar24.com/');
        cy.get('#onetrust-accept-btn-handler').click();

        cy.get('.navbar-toggle').should('have.attr','type').should('eq','button');
        cy.get('.navbar-toggle').should('have.attr','data-toggle').should('eq','collapse');
        cy.get('.navbar-toggle').should('have.attr','data-target').should('eq','#mainNavbar');
        cy.get('.navbar-toggle').click();

        cy.get('.nav-scroll-wrapper').should('exist');
        cy.get('#mainNavbar').should('have.attr','style').should('eq','height: auto;');

        //Apps
        cy.get('#navTopApps').should('be.visible');
        cy.get('#navTopApps').should('have.attr','href').should('eq','/apps');

        //Add coverage
        cy.get('#navTopAddCoverage').should('be.visible');
        cy.get('#navTopAddCoverage').should('have.attr','href').should('eq','/add-coverage');
        cy.get('#navTopAddCoverage').click();

        cy.get('#navTopAddCoverageAddCoverage').should('have.attr','href').should('eq','/add-coverage');
        cy.get('#navTopAddCoverageAddCoverage > span.navText').should('have.text','Add coverage');

        cy.get('#navTopAddCoverageApplyForReceiver').should('have.attr','href').should('eq','/apply-for-receiver');
        cy.get('#navTopAddCoverageApplyForReceiver > span.navText').should('have.text','Apply for receiver');

        cy.get('#navTopAddCoverageShareYourData').should('have.attr','href').should('eq','/share-your-data');
        cy.get('#navTopAddCoverageShareYourData > span.navText').should('have.text','Share your data');

        cy.get('#navTopAddCoverageBuildYourOwn').should('have.attr','href').should('eq','/build-your-own');
        cy.get('#navTopAddCoverageBuildYourOwn > span.navText').should('have.text','Build your own');

        cy.get('#navTopAddCoverageShareStatistics').should('have.attr','href').should('eq','/share-statistics');
        cy.get('#navTopAddCoverageShareStatistics > span.navText').should('have.text','Share statistics');

        //Data History
        cy.get('#navTopDataHistory').should('be.visible');
        cy.get('#navTopDataHistory').should('have.attr','href').should('eq','/data');
        cy.get('#navTopDataHistory').click();

        cy.get('#navTopDataHistoryDataHistory').should('have.attr','href').should('eq','/data');
        cy.get('#navTopDataHistoryDataHistory > span.navText').should('have.text','Search');

        cy.get('#navTopDataHistoryAirports').should('have.attr','href').should('eq','/data/airports');
        cy.get('#navTopDataHistoryAirports > span.navText').should('have.text','Airports');

        cy.get('#navTopDataHistoryAirlines').should('have.attr','href').should('eq','/data/airlines');
        cy.get('#navTopDataHistoryAirlines > span.navText').should('have.text','Airlines');

        cy.get('#navTopDataHistoryAirline').should('have.attr','href').should('eq','/data/aircraft');
        cy.get('#navTopDataHistoryAirline > span.navText').should('have.text','Aircraft');

        cy.get('#navTopDataHistoryFlights').should('have.attr','href').should('eq','/data/flights');
        cy.get('#navTopDataHistoryFlights > span.navText').should('have.text','Flights');

        cy.get('#navTopDataHistoryPinned').should('have.attr','href').should('eq','/data/pinned');
        cy.get('#navTopDataHistoryPinned > span.navText').should('have.text','Pinned flights');

        cy.get('#navTopDataHistoryStatistics').should('have.attr','href').should('eq','/data/statistics');
        cy.get('#navTopDataHistoryStatistics > span.navText').should('have.text','Statistics');

        //Subscription plans
        cy.get('#navTopSubPlans').should('be.visible');
        cy.get('#navTopSubPlans').should('have.attr','href').should('eq','/premium?utm_source=website&utm_medium=nav&utm_campaign=menu_subs');

        //Social
        cy.get('#navTopSocial').should('be.visible');
        cy.get('#navTopSocial').should('have.attr','href').should('eq','#');
        cy.get('#navTopSocial').click();
        

        cy.get('#navTopSocialBlog').should('have.attr','href').should('eq','/blog');
        cy.get('#navTopSocialBlog > span.navText').should('have.text','Blog');
        cy.get('#navTopSocialBlog > svg > use').should('have.attr','xlink:href').should('eq','#icon-fr24-quotes');

        cy.get('#navTopSocialForum').should('have.attr','href').should('eq','http://forum.flightradar24.com');
        cy.get('#navTopSocialForum > span.navText').should('have.text','Forum');
                
        cy.get('#navTopSocialMyFR24').should('have.attr','href').should('eq','https://my.flightradar24.com');
        cy.get('#navTopSocialMyFR24 > span.navText').should('have.text','My.flightradar24');

        cy.get('#navTopSocialNewsletter').should('have.attr','href').should('eq','https://www.flightradar24.com/blog/on-the-radar-newsletter/');
        cy.get('#navTopSocialNewsletter > span.navText').should('have.text','Newsletter');
        cy.get('#navTopSocialNewsletter > svg > use').should('have.attr','xlink:href').should('eq','#icon-fr24-newsletter');

        cy.get('#navTopSocialAvTalks').should('have.attr','href').should('eq','/blog/category/avtalk/');
        cy.get('#navTopSocialAvTalks > span.navText').should('have.text','AvTalk Podcast');
        cy.get('#navTopSocialAvTalks > img').should('have.attr','src').should('eq','https://www.flightradar24.com/static/images/svg/avtalk.svg');
        cy.get('#navTopSocialAvTalks > img').should('have.attr','style').should('eq','width:30px;margin: -4px 0 0 -4px;');
                
        cy.get('#navTopSocialFacebook').should('have.attr','href').should('eq','https://facebook.com/flightradar24');
        cy.get('#navTopSocialFacebook > span.navText').should('have.text','Facebook');
 
        cy.get('#navTopSocialTwitter').should('have.attr','href').should('eq','https://twitter.com/flightradar24');
        cy.get('#navTopSocialTwitter > span.navText').should('have.text','Twitter');
  
        cy.get('#navTopSocialLinkedIn').should('have.attr','href').should('eq','https://www.linkedin.com/company/2740521');
        cy.get('#navTopSocialLinkedIn > span.navText').should('have.text','LinkedIn');

        cy.get('#navTopSocialInstagram').should('have.attr','href').should('eq','http://instagram.com/flightradar24');
        cy.get('#navTopSocialInstagram > span.navText').should('have.text','Instagram');

        cy.get('#navTopSocialWeibo').should('have.attr','href').should('eq','https://weibo.com/5589682370/profile?topnav=1&wvr=6&is_all=1');
        cy.get('#navTopSocialWeibo > span.navText').should('have.text','Weibo');
    
        cy.get('#navTopSocialYouTube').should('have.attr','href').should('eq','https://www.youtube.com/channel/UCcGI_kXwKl_QhyW9jK_8gIA?sub_confirmation=1');
        cy.get('#navTopSocialYouTube > span.navText').should('have.text','YouTube');

        cy.get('#navTopSocialContact').should('have.attr','href').should('eq','/contact-us');
        cy.get('#navTopSocialContact > span.navText').should('have.text','Contact us');

        cy.get('#navTopSocial').click();

        //Press
        cy.get('#navTopPress').should('be.visible');
        cy.get('#navTopPress').should('have.attr','href').should('eq','/press');
        cy.get('#navTopPress').click();

        cy.get('#navTopPressPress').should('have.attr','href').should('eq','/press');
        cy.get('#navTopPressPress > span.navText').should('have.text','Press');

        //About
        cy.get('#navTopAbout').should('be.visible');
        cy.get('#navTopAbout').should('have.attr','href').should('eq','/about');
        cy.get('#navTopAbout').click();

        cy.get('#navTopAboutAbout').should('have.attr','href').should('eq','/about');
        cy.get('#navTopAboutAbout > span.navText').should('have.text','About');

        cy.get('#navTopAboutContact').should('have.attr','href').should('eq','/contact-us');
        cy.get('#navTopAboutContact > span.navText').should('have.text','Contact us');
                
        cy.get('#navSubscriptionPlans').should('have.attr','href').should('eq','/premium?utm_source=website&utm_medium=nav_about_us&utm_campaign=menu_subs');
        cy.get('#navSubscriptionPlans > span.navText').should('have.text','Subscription plans');
 
        cy.get('#navTopAboutHowItWorks').should('have.attr','href').should('eq','/how-it-works');
        cy.get('#navTopAboutHowItWorks > span.navText').should('have.text','How it works');
  
        cy.get('#navTopGlossary').should('have.attr','href').should('eq','/glossary');
        cy.get('#navTopGlossary > span.navText').should('have.text','Glossary');

        cy.get('#navTopAboutFaq').should('have.attr','href').should('eq','https://support.fr24.com');
        cy.get('#navTopAboutFaq > span.navText').should('have.text','FAQ');

        cy.get('#navTopAboutCareers').should('have.attr','href').should('eq','/careers');
        cy.get('#navTopAboutCareers > span.navText').should('have.text','Careers');
    
        cy.get('#navTopAboutPrivacy').should('have.attr','href').should('eq','/privacy-policy');
        cy.get('#navTopAboutPrivacy > span.navText').should('have.text','Privacy policy');

        cy.get('#navTopAboutTerms').should('have.attr','href').should('eq','/terms-and-conditions');
        cy.get('#navTopAboutTerms > span.navText').should('have.text','Terms and conditions');

        cy.get('#navTopAbout').click();

        //Commercial services
        cy.get('#navTopBusiness').should('be.visible');
        cy.get('#navTopBusiness').should('have.attr','href').should('eq','/commercial-services');
        cy.get('#navTopBusiness').click();

        cy.get('#navTopBusinessDataServices').should('have.attr','href').should('eq','/commercial-services/data-services');
        cy.get('#navTopBusinessDataServices > span.navText').should('have.text','Data services');

        cy.get('#navTopBusinessAppIntegration').should('have.attr','href').should('eq','/commercial-services/app-integration');
        cy.get('#navTopBusinessAppIntegration > span.navText').should('have.text','App integration');    

    })
    
})
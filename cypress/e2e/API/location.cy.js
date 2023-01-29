/// <reference types = "Cypress" />

describe('get location', ()=>{

    it('get location', ()=> {

        cy.request({

            method: 'GET',
            url: 'https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location',
            header: {'accept': "application/json"}

        }).then((res)=>{

            expect(res.status).to.eq(200)

        })
    })
})
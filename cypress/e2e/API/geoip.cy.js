/// <reference types = "Cypress" />

describe('get geoip', ()=>{

    it('get geoip', ()=> {

        cy.request({

            method: 'GET',
            url: 'https://www.flightradar24.com/v1/search/web/geoip'

        }).then((res)=>{

            cy.log(JSON.stringify(res.body))
            expect(res.status).to.eq(200)
            expect(res.body.status).to.eq("OK")
            expect(res.body.result.pos.lat).to.exist
            expect(res.body.result.pos.lng).to.exist
            expect(res.body.result.eu).to.exist
            expect(res.body.result.country).to.exist
            expect(res.body.result.radiuskm).to.eq(10)

        })
    })
})
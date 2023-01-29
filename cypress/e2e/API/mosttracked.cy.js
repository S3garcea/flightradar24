/// <reference types = "Cypress" />

describe('get most tracked', ()=>{

    it('get most tracked', ()=> {

        cy.request({

            method: 'GET',
            url: 'https://www.flightradar24.com/flights/most-tracked'

        }).then((res)=>{

            cy.log(JSON.stringify(res.body))
            expect(res.status).to.eq(200)
            expect(res.body.version).to.eq('0.3.1')
            expect(res.body.update_time).to.exist
            expect(res.body.data[0].flight_id).to.exist
            expect(res.body.data[0].flight).to.exist
            expect(res.body.data[0].callsign).to.exist
            expect(res.body.data[0].clicks).to.exist
            expect(res.body.data[0].from_iata).to.exist
            expect(res.body.data[0].from_city).to.exist
            expect(res.body.data[0].to_iata).to.exist
            expect(res.body.data[0].to_city).to.exist
            expect(res.body.data[0].model).to.exist
            expect(res.body.data[0].squawk).to.exist

        })
    })
})
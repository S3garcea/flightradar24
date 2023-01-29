/// <reference types = "Cypress" />

describe('get media feed', ()=>{

    it('get media feed', ()=> {

        cy.request({

            method: 'GET',
            url: 'https://www.flightradar24.com/mediafeed'

        }).then((res)=>{

            cy.log(JSON.stringify(res.body))
            expect(res.status).to.eq(200)
            expect(res.body.twitter).to.exist
            expect(res.body.twitter[0].link).to.exist
            expect(res.body.twitter[0].title).to.exist
            expect(res.body.twitter[0].time).to.exist
            expect(res.body.blog).to.exist
            expect(res.body.blog[0].link).to.exist
            expect(res.body.blog[0].title).to.exist
            expect(res.body.blog[0].time).to.exist

        })
    })
})
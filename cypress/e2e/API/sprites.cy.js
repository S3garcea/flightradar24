/// <reference types = "Cypress" />

var size = '';
var color = '';
var number = 0;

describe('get sprites', ()=>{

    beforeEach(function(){

        cy.fixture ('sprites').then(sprites => {

            size = sprites[number].size;
            cy.log(size);
            color = sprites[number].color;
            cy.log(color);
            
        })

    })

    afterEach(function(){

        number = number + 1;
        cy.log(number);
    })

    it('get 80 yellow', ()=> {

        cy.request({

            method: 'GET',
            url: 'https://www.flightradar24.com/aircraft-icons/sprite?size=' + size + '&scale=1&color=' + color + '&shadow=yes',

        }).then((res)=>{

            expect(res.status).to.eq(200)
            expect(res.body.rotationDegrees).to.eq(15)
            expect(res.body.url).to.eq("1658913471/t-sprite_c-yellow_w-80_s-yes.png")
            expect(res.body.w).to.eq(2672)
            expect(res.body.h).to.eq(3690)
            expect(res.body.icons).to.exist
            expect(res.body.icons.FGTR.rotates).to.eq(true)
            expect(res.body.icons.FGTR.aliases).to.exist
            expect(res.body.icons.FGTR.frames).to.exist
            expect(res.body.icons.AS20.rotates).to.eq(true)
            expect(res.body.icons.AS20.aliases).to.exist
            expect(res.body.icons.AS20.frames).to.exist
            cy.log(size);
            cy.log(color);
        })
    })

    it('get 80 red', ()=> {

        cy.request({

            method: 'GET',
            url: 'https://www.flightradar24.com/aircraft-icons/sprite?size=' + size + '&scale=1&color=' + color + '&shadow=yes',

        }).then((res)=>{

            expect(res.status).to.eq(200)
            expect(res.body.rotationDegrees).to.eq(15)
            expect(res.body.url).to.eq("1615461067/t-sprite_c-red_w-80_s-yes.png")
            expect(res.body.w).to.eq(2672)
            expect(res.body.h).to.eq(3690)
            expect(res.body.icons).to.exist
            expect(res.body.icons.FGTR.rotates).to.eq(true)
            expect(res.body.icons.FGTR.aliases).to.exist
            expect(res.body.icons.FGTR.frames).to.exist
            expect(res.body.icons.AS20.rotates).to.eq(true)
            expect(res.body.icons.AS20.aliases).to.exist
            expect(res.body.icons.AS20.frames).to.exist
            cy.log(size);
            cy.log(color);
        })
    })

    it('get 80 blue', ()=> {

        cy.request({

            method: 'GET',
            url: 'https://www.flightradar24.com/aircraft-icons/sprite?size=' + size + '&scale=1&color=' + color + '&shadow=yes',

        }).then((res)=>{

            expect(res.status).to.eq(200)
            expect(res.body.rotationDegrees).to.eq(15)
            expect(res.body.url).to.eq("1615461067/t-sprite_c-blue_w-80_s-yes.png")
            expect(res.body.w).to.eq(2672)
            expect(res.body.h).to.eq(3690)
            expect(res.body.icons).to.exist
            expect(res.body.icons.FGTR.rotates).to.eq(true)
            expect(res.body.icons.FGTR.aliases).to.exist
            expect(res.body.icons.FGTR.frames).to.exist
            expect(res.body.icons.AS20.rotates).to.eq(true)
            expect(res.body.icons.AS20.aliases).to.exist
            expect(res.body.icons.AS20.frames).to.exist
            cy.log(size);
            cy.log(color);
        })
    })

    it('get 35 yellow', ()=> {

        cy.request({

            method: 'GET',
            url: 'https://www.flightradar24.com/aircraft-icons/sprite?size=' + size + '&scale=1&color=' + color + '&shadow=yes',

        }).then((res)=>{

            expect(res.status).to.eq(200)
            expect(res.body.rotationDegrees).to.eq(15)
            expect(res.body.url).to.eq("1658913471/t-sprite_c-yellow_w-35_s-yes.png")
            expect(res.body.w).to.eq(1192)
            expect(res.body.h).to.eq(1650)
            expect(res.body.icons).to.exist
            expect(res.body.icons.FGTR.rotates).to.eq(true)
            expect(res.body.icons.FGTR.aliases).to.exist
            expect(res.body.icons.FGTR.frames).to.exist
            expect(res.body.icons.AS20.rotates).to.eq(true)
            expect(res.body.icons.AS20.aliases).to.exist
            expect(res.body.icons.AS20.frames).to.exist
            cy.log(size);
            cy.log(color);
        })
    })

    it('get 35 red', ()=> {

        cy.request({

            method: 'GET',
            url: 'https://www.flightradar24.com/aircraft-icons/sprite?size=' + size + '&scale=1&color=' + color + '&shadow=yes',

        }).then((res)=>{

            expect(res.status).to.eq(200)
            expect(res.body.rotationDegrees).to.eq(15)
            expect(res.body.url).to.eq("1658913471/t-sprite_c-red_w-35_s-yes.png")
            expect(res.body.w).to.eq(1192)
            expect(res.body.h).to.eq(1650)
            expect(res.body.icons).to.exist
            expect(res.body.icons.FGTR.rotates).to.eq(true)
            expect(res.body.icons.FGTR.aliases).to.exist
            expect(res.body.icons.FGTR.frames).to.exist
            expect(res.body.icons.AS20.rotates).to.eq(true)
            expect(res.body.icons.AS20.aliases).to.exist
            expect(res.body.icons.AS20.frames).to.exist
            cy.log(size);
            cy.log(color);
        })
    })

    it('get 35 blue', ()=> {

        cy.request({

            method: 'GET',
            url: 'https://www.flightradar24.com/aircraft-icons/sprite?size=' + size + '&scale=1&color=' + color + '&shadow=yes',

        }).then((res)=>{

            expect(res.status).to.eq(200)
            expect(res.body.rotationDegrees).to.eq(15)
            expect(res.body.url).to.eq("1658913471/t-sprite_c-blue_w-35_s-yes.png")
            expect(res.body.w).to.eq(1192)
            expect(res.body.h).to.eq(1650)
            expect(res.body.icons).to.exist
            expect(res.body.icons.FGTR.rotates).to.eq(true)
            expect(res.body.icons.FGTR.aliases).to.exist
            expect(res.body.icons.FGTR.frames).to.exist
            expect(res.body.icons.AS20.rotates).to.eq(true)
            expect(res.body.icons.AS20.aliases).to.exist
            expect(res.body.icons.AS20.frames).to.exist
            cy.log(size);
            cy.log(color);
        })
    })

    it('get 30 yellow', ()=> {

        cy.request({

            method: 'GET',
            url: 'https://www.flightradar24.com/aircraft-icons/sprite?size=' + size + '&scale=1&color=' + color + '&shadow=yes',

        }).then((res)=>{

            expect(res.status).to.eq(200)
            expect(res.body.rotationDegrees).to.eq(15)
            expect(res.body.url).to.eq("1658913471/t-sprite_c-yellow_w-30_s-yes.png")
            expect(res.body.w).to.eq(1008)
            expect(res.body.h).to.eq(1410)
            expect(res.body.icons).to.exist
            expect(res.body.icons.FGTR.rotates).to.eq(true)
            expect(res.body.icons.FGTR.aliases).to.exist
            expect(res.body.icons.FGTR.frames).to.exist
            expect(res.body.icons.AS20.rotates).to.eq(true)
            expect(res.body.icons.AS20.aliases).to.exist
            expect(res.body.icons.AS20.frames).to.exist
            cy.log(size);
            cy.log(color);
        })
    })

    it('get 30 red', ()=> {

        cy.request({

            method: 'GET',
            url: 'https://www.flightradar24.com/aircraft-icons/sprite?size=' + size + '&scale=1&color=' + color + '&shadow=yes',

        }).then((res)=>{

            expect(res.status).to.eq(200)
            expect(res.body.rotationDegrees).to.eq(15)
            expect(res.body.url).to.eq("1658913471/t-sprite_c-red_w-30_s-yes.png")
            expect(res.body.w).to.eq(1008)
            expect(res.body.h).to.eq(1410)
            expect(res.body.icons).to.exist
            expect(res.body.icons.FGTR.rotates).to.eq(true)
            expect(res.body.icons.FGTR.aliases).to.exist
            expect(res.body.icons.FGTR.frames).to.exist
            expect(res.body.icons.AS20.rotates).to.eq(true)
            expect(res.body.icons.AS20.aliases).to.exist
            expect(res.body.icons.AS20.frames).to.exist
            cy.log(size);
            cy.log(color);
        })
    })

    it('get 30 blue', ()=> {

        cy.request({

            method: 'GET',
            url: 'https://www.flightradar24.com/aircraft-icons/sprite?size=' + size + '&scale=1&color=' + color + '&shadow=yes',

        }).then((res)=>{

            expect(res.status).to.eq(200)
            expect(res.body.rotationDegrees).to.eq(15)
            expect(res.body.url).to.eq("1658913471/t-sprite_c-blue_w-30_s-yes.png")
            expect(res.body.w).to.eq(1008)
            expect(res.body.h).to.eq(1410)
            expect(res.body.icons).to.exist
            expect(res.body.icons.FGTR.rotates).to.eq(true)
            expect(res.body.icons.FGTR.aliases).to.exist
            expect(res.body.icons.FGTR.frames).to.exist
            expect(res.body.icons.AS20.rotates).to.eq(true)
            expect(res.body.icons.AS20.aliases).to.exist
            expect(res.body.icons.AS20.frames).to.exist
            cy.log(size);
            cy.log(color);
        })
    })

    it('get 25 yellow', ()=> {

        cy.request({

            method: 'GET',
            url: 'https://www.flightradar24.com/aircraft-icons/sprite?size=' + size + '&scale=1&color=' + color + '&shadow=yes',

        }).then((res)=>{

            expect(res.status).to.eq(200)
            expect(res.body.rotationDegrees).to.eq(15)
            expect(res.body.url).to.eq("1658913471/t-sprite_c-yellow_w-25_s-yes.png")
            expect(res.body.w).to.eq(880)
            expect(res.body.h).to.eq(1200)
            expect(res.body.icons).to.exist
            expect(res.body.icons.FGTR.rotates).to.eq(true)
            expect(res.body.icons.FGTR.aliases).to.exist
            expect(res.body.icons.FGTR.frames).to.exist
            expect(res.body.icons.AS20.rotates).to.eq(true)
            expect(res.body.icons.AS20.aliases).to.exist
            expect(res.body.icons.AS20.frames).to.exist
            cy.log(size);
            cy.log(color);
        })
    })

    it('get 25 red', ()=> {

        cy.request({

            method: 'GET',
            url: 'https://www.flightradar24.com/aircraft-icons/sprite?size=' + size + '&scale=1&color=' + color + '&shadow=yes',

        }).then((res)=>{

            expect(res.status).to.eq(200)
            expect(res.body.rotationDegrees).to.eq(15)
            expect(res.body.url).to.eq("1658913471/t-sprite_c-red_w-25_s-yes.png")
            expect(res.body.w).to.eq(880)
            expect(res.body.h).to.eq(1200)
            expect(res.body.icons).to.exist
            expect(res.body.icons.FGTR.rotates).to.eq(true)
            expect(res.body.icons.FGTR.aliases).to.exist
            expect(res.body.icons.FGTR.frames).to.exist
            expect(res.body.icons.AS20.rotates).to.eq(true)
            expect(res.body.icons.AS20.aliases).to.exist
            expect(res.body.icons.AS20.frames).to.exist
            cy.log(size);
            cy.log(color);
        })
    })

    it('get 25 blue', ()=> {

        cy.request({

            method: 'GET',
            url: 'https://www.flightradar24.com/aircraft-icons/sprite?size=' + size + '&scale=1&color=' + color + '&shadow=yes',

        }).then((res)=>{

            expect(res.status).to.eq(200)
            expect(res.body.rotationDegrees).to.eq(15)
            expect(res.body.url).to.eq("1658913471/t-sprite_c-blue_w-25_s-yes.png")
            expect(res.body.w).to.eq(880)
            expect(res.body.h).to.eq(1200)
            expect(res.body.icons).to.exist
            expect(res.body.icons.FGTR.rotates).to.eq(true)
            expect(res.body.icons.FGTR.aliases).to.exist
            expect(res.body.icons.FGTR.frames).to.exist
            expect(res.body.icons.AS20.rotates).to.eq(true)
            expect(res.body.icons.AS20.aliases).to.exist
            expect(res.body.icons.AS20.frames).to.exist
            cy.log(size);
            cy.log(color);
        })
    })
})
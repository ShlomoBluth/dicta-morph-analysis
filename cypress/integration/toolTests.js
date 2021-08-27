/// <reference types="cypress"/>

//run basic tests on citation run

let sizes = [[1000, 660]]//'iphone-x',


sizes.forEach((size) => {

    describe('toolTests',()=>{

        beforeEach(() => {
            cy.screenSize({size:size})
            cy.visitpage({url:'/'})
        })
    
        // it('citation run in hebrew mode',()=>{
        //     cy.setLanguageMode('Hebrew')
        //     cy.intercept('**/api/markpsukim**').as('req')
        //     cy.findCitation('משה קבל תורה מסיני ומסרה ליהושע')
        //     cy.wait('@req')
        //     cy.resultsTests(' משֶׁה קִבֵּל תּוֹרָה מִסִּינַי וּמְסָרָהּ לִיהוֹשֻׁעַ וִיהוֹשֻׁעַ לִזְקֵנִים וּזְקֵנִים')
        // })
    
        // it('citation run in english mode',()=>{
        //     cy.setLanguageMode('English')
        //     cy.intercept('**/api/markpsukim**').as('req')
        //     cy.findCitation('משה קבל תורה מסיני ומסרה ליהושע')
        //     cy.wait('@req')
        //     cy.resultsTests(' משֶׁה קִבֵּל תּוֹרָה מִסִּינַי וּמְסָרָהּ לִיהוֹשֻׁעַ וִיהוֹשֻׁעַ לִזְקֵנִים וּזְקֵנִים')
        // })
    })

})


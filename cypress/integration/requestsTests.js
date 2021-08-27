/// <reference types="cypress"/>



////run tests on requests from citation run some in hebrew mode and english mode

let sizes = [[1000, 660]]//'iphone-x',


sizes.forEach((size) => {

    describe('RequestsTests',()=>{
    
        beforeEach(() => {
            cy.screenSize({size:size})
            cy.visitpage({url:'/'})
        })
      
    
        it('Error message for api response with status code 500 when clicking the run button of '+
        'morph analysis page in hebrew mode',()=>{
            cy.morphAnalysisRunRequest({
                url:'/api',
                language:'Hebrew',
                status:500,
                message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר',
            })
        })
    
        it('Error message for api response with status code 500 when clicking the run button of'+
        ' morph analysis page in english mode',()=>{
            cy.morphAnalysisRunRequest({
                url:'/api',
                language:'English',
                status:500,
                message:'Oops. Something went wrong Please try again later',
            })
        })
    
        it('Error message for api response with a delay of 5 minutes when clicking the run button'+
        ' of morph analysis page in hebrew mode',()=>{
            cy.morphAnalysisRunRequest({
                url:'/api',
                language:'Hebrew',
                message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר',
                delaySeconds: 60*5
            })
        })
    
        it('Error message for api response with a delay of 5 minutes when clicking the run button'+
        ' of morph analysis page in english mode',()=>{
            cy.morphAnalysisRunRequest({
                url:'/api',
                language:'English',
                message:'Oops. Something went wrong Please try again later',
                delaySeconds: 60*5
            })
        })
    
        it('Error message for POST **/files response with status code 500 when clicking the run button '+
        'of citation page in hebrew mode',()=>{
            cy.morphAnalysisUploadRequest({
                language:'Hebrew',
                status:500,
                reqType:'POST',
                message:'העלאת הקובץ tuvtaamvadaat-014.txt נכשלה '
            })    
        })

        it('Error message for POST **/files response with status code 500 when clicking the run button '+
        'of citation page in English mode',()=>{
            cy.morphAnalysisUploadRequest({
                language:'English',
                status:500,
                reqType:'POST',
                message:'Failed to upload tuvtaamvadaat-014.txt'
            })    
        })

        it('Error message for POST **/files response with a delay of 1 minutes when'+
        ' clicking the run button of citation page in hebrew mode',()=>{
            cy.morphAnalysisUploadRequest({
                language:'Hebrew',
                delaySeconds: 15,
                reqType:'POST',
                message:'העלאת הקובץ tuvtaamvadaat-014.txt נכשלה '
            })    
        })

        it('Error message for POST **/files response with a delay of 1 minutes when'+
        ' clicking the run button of citation page in hebrew mode',()=>{
            cy.morphAnalysisUploadRequest({
                language:'English',
                delaySeconds: 15,
                reqType:'POST',
                message:'Failed to upload tuvtaamvadaat-014.txt'
            })    
        })


        it('Error message for PATCH **/files response with status code 500 when clicking the run button '+
        'of citation page in hebrew mode',()=>{
            cy.morphAnalysisUploadRequest({
                language:'Hebrew',
                status:500,
                reqType:'PATCH',
                message:'העלאת הקובץ tuvtaamvadaat-014.txt נכשלה '
            })    
        })

        it('Error message for PATCH **/files response with status code 500 when clicking the run button '+
        'of citation page in English mode',()=>{
            cy.morphAnalysisUploadRequest({
                language:'English',
                status:500,
                reqType:'PATCH',
                message:'Failed to upload tuvtaamvadaat-014.txt'
            })    
        })

        it('Error message for PATCH **/files response with status with a delay of 1 minutes when'+
        ' clicking the run button of citation page in hebrew mode',()=>{
            cy.morphAnalysisUploadRequest({
                language:'Hebrew',
                delaySeconds: 15,
                reqType:'PATCH',
                message:'העלאת הקובץ tuvtaamvadaat-014.txt נכשלה '
            })    
        })

        it('Error message for PATCH **/files response with status with a delay of 1 minutes when'+
        ' clicking the run button of citation page in hebrew mode',()=>{
            cy.morphAnalysisUploadRequest({
                language:'English',
                delaySeconds: 15,
                reqType:'PATCH',
                message:'Failed to upload tuvtaamvadaat-014.txt'
            })    
        })
    
        
    })
})


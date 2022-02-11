
import 'cypress-file-upload';


Cypress.Commands.add('morphAnalysisRunRequest',({language,status=200,message='',delaySeconds=0})=>{
    cy.setLanguageMode({language:language})
    if(message.length>0){
        cy.contains(message).should('not.exist')
    }
    cy.get('textarea').type('במחקר, שאותו '+
        'הוביל מכון המחקר של שירותי בריאות כללית ומסתמך על נתונים אנונימיים'+
        ' מ-2 מיליון מבוטחים של הקופה, נמצא בין היתר כי אמנם יש סיכון'+
        ' מוגבר, אך עדיין זעיר יחסית, ללקות בדלקת בשריר הלב עבור מחוסנים - '+
        'אולם הסיכון הזה גבוה פי ארבעה עבור מי שלא התחסן ונדבק בקורונה')
    cy.get('[id="del-btn"]').should('exist')
    cy.intercept('**/addnikud',{
        delayMs:1000*delaySeconds,
        statusCode: status
    })
    cy.get('[class*="run-btn"]').click({force:true})
    
    if(delaySeconds>0){
        cy.get('[class*="spinner"]',{timeout:1000*delaySeconds}).should('not.exist')
    }
      
    if(message.length>0){
        cy.contains(message).should('exist')
    }
})

Cypress.Commands.add('morphAnalysisUploadRequest',({language,status=200,message=''
,delaySeconds=0,reqType})=>{
    cy.setLanguageMode({language:language})
    if(message.length>0){
        cy.contains(message).should('not.exist')
    }
    cy.intercept(reqType,'**/files/**'
        ,{
        delayMs:1000*delaySeconds,
        statusCode: status
        }
    )
    cy.get('button').contains(/Upload|העלאת/g).click({force:true})
    cy.get('input[type="file"]').attachFile('tuvtaamvadaat-014.txt')
    cy.get('[class*="spinner"]',{timeout:1000*20}).should('exist')

    if(delaySeconds>0){
        cy.get('[class*="spinner"]',{timeout:1000*delaySeconds*6}).should('not.exist')
    } else{
        cy.get('[class*="spinner"]',{timeout:1000*20}).should('not.exist')
    }
      
    if(message.length>0){
        cy.contains(message).should('exist')
    }
})
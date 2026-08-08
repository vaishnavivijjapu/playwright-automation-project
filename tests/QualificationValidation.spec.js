const { test, expect} = require('@playwright/test');
const {POManager}= require('../Pages/POManager');
const dataset =(require('../Utils/testdata.json'));
const{EmployeeSetup}=require('../Helpers/EmployeeSetup');
let qualification;
test.beforeEach(async ({ page }) => {

    const poManager = new POManager(page);
    await EmployeeSetup.createEmployee(page, poManager, dataset);
    qualification= poManager.getQualificationPage();
    await qualification.clickonqualificationtab();
    await page.waitForURL(/viewQualifications/);
    await qualification.waitForLoader();

});
test("@VerifyQualificationPage",async({page})=>{
    await qualification.validateworkexperience(dataset.qualificationdetails.workcompanyname,dataset.qualificationdetails.workjobtitle,dataset.qualificationdetails.from,dataset.qualificationdetails.to,dataset.qualificationdetails.workcomment);
    await qualification.validateeducation(dataset.qualificationdetails.Degree,dataset.qualificationdetails.Institue,dataset.qualificationdetails.Major,dataset.qualificationdetails.year,dataset.qualificationdetails.gpa,dataset. qualificationdetails.startdate1,dataset.qualificationdetails.enddate1);
    await qualification.validateskills(dataset.qualificationdetails.skill,dataset.qualificationdetails.yoe,dataset.qualificationdetails.skillcomments);
    await qualification.validatelanguage(dataset.qualificationdetails.language,dataset.qualificationdetails.fluency,dataset.qualificationdetails.competency,dataset.qualificationdetails.languagecomments);
    await qualification.validatelicense(dataset.qualificationdetails.Licence,dataset.qualificationdetails.licencetype,dataset.qualificationdetails.startdate,dataset.qualificationdetails.enddate);
});
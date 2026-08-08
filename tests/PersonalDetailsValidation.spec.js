const { test, expect} = require('@playwright/test');
const {POManager}= require('../Pages/POManager');
const dataset =(require('../Utils/testdata.json'));
const{EmployeeSetup}=require('../Helpers/EmployeeSetup');
let personalpage;
test.beforeEach(async ({ page }) => {

    const poManager = new POManager(page);

    await EmployeeSetup.createEmployee(page, poManager, dataset);
    personalpage = poManager.getPersonalDetails();
});
test("@PersonalDetails",async()=>{

    await personalpage.verifypersonaldetails(dataset.personaldetails.licencenumber,dataset.personaldetails.licencedate,dataset.personaldetails.nationality,dataset.personaldetails.maritialstatus,dataset.personaldetails.dateofbirth);
    //await personalpage.selectGender(dataset.gender);
    await personalpage.savepersonal();
});
test("@CustomerDetails",async()=>{
    await personalpage.verifycustomerdetails(dataset.personaldetails.bloodtype1);
});
test("@Attachment",async()=>{
    await personalpage.addattachment(dataset.personaldetails.Attachment);
})

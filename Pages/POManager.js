const {LoginPage }= require('./LoginPage');
const{DashboardPage} =require('./DashboardPage');
const{PIMPage}= require('./PIMPage');
const {AddEmployee} =require('./AddEmployee');
const {PersonalDetails}=require('./PersonalDetails');
const {ContactDetails}=require('./ContactDetails');
const{EmergencyContact}=require('./EmergencyContact');
const{DependantsPage} =require('./DependentsPage');
const{ImmigrationPage}=require('./ImmigrationPage');
const{JobDetailsPage}=require('./JobDetailsPage');
const{SalaryPage}=require('./SalaryPage');
const{ReportsPage}=require("./ReportsPage");
const{MembershipPage}=require('./MembershipPage');
const{QualificationPage}=require('./QualificationPage');
const{EmployeeDetailsPage}=require('./EmployeeDetailsPage');
class POManager{
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardpage = new DashboardPage(this.page);
        this.pimpage = new PIMPage(this.page);
        this.addemployee1 = new AddEmployee(this.page);
        this.personaldetails = new PersonalDetails(this.page);
        this.contactdetails = new ContactDetails(this.page);
        this.emergencycontact = new EmergencyContact(this.page);
        this.dependents = new DependantsPage(this.page);
        this.immigrationdetails = new ImmigrationPage(this.page);
        this.jobdetailspage = new JobDetailsPage(this.page);
        this.salarypage = new SalaryPage(this.page);
        this.reportspage = new ReportsPage(this.page);
        this.membershippage = new MembershipPage(this.page);
        this.qualificationpage = new QualificationPage(this.page);
        this.employeedetails = new EmployeeDetailsPage(this.page);


    }
    getLoginPage()
{
    return this.loginPage;
}
getDashboardPage(){
    return this.dashboardpage;
}
getPIMPage(){
    return this.pimpage;
}
getAddEmployeePage(){
    return this.addemployee1;
}
getPersonalDetails(){
    return this.personaldetails;
}
getContactDetails(){
    return this.contactdetails;
}
getEmergencyContact(){
    return this.emergencycontact;
}
getDependents(){
    return this.dependents;
}
getImmigrationDetails(){
    return this.immigrationdetails;
}
getJobDetailsPage(){
    return this.jobdetailspage;
}
getSalaryPage(){
    return this.salarypage;
}
getReportsPage(){
    return this.reportspage;
}
getMembershipPage(){
    return this.membershippage;
}
getQualificationPage(){
    return this.qualificationpage;
}
getEmployeeDetailsPage(){
    return this.employeedetails;
}
}

module.exports = {POManager};
const { BasePage } = require("./BasePage");
const { expect } = require('@playwright/test');


class QualificationPage extends BasePage{
    constructor(page){
        super(page);
        this.qualificationtab = page.getByRole('link', { name: 'Qualifications' });
        this.addqualification = page.locator('.orangehrm-action-header').filter({ hasText: 'Work Experience' }).getByRole('button',{ name: 'Add' });
        this.workcompanyname = page.locator('.oxd-input-group').filter({ hasText: 'Company' }).locator('input');
        this.workjobtitle = page.locator('.oxd-input-group').filter({ hasText: 'Job Title' }).locator('input');
        this.from=page.locator('.oxd-input-group').filter({ hasText: 'From' }).locator('input');
        this.to =page.locator('.oxd-input-group').filter({ hasText: 'To' }).locator('input');
        this.workcomment = page.locator('.oxd-input-group').filter({ hasText: 'Comment' }).locator('textarea').first();
        this.worksave =  page.locator('form').getByRole('button',{name:'Save'}).first();
        this.addeducation =  page.locator('.orangehrm-action-header').filter({ hasText: 'Education' }).getByRole('button',{ name: 'Add' });
        this.educationlevel = page.locator('.oxd-input-group').filter({ hasText: 'Level' }).locator('.oxd-select-text');
        this.institute=page.locator('.oxd-input-group').filter({ hasText: 'Institute' }).locator('input');
        this.major=page.locator('.oxd-input-group').filter({ hasText: 'Major/Specialization' }).locator('input');
        this.year=page.locator('.oxd-input-group').filter({ hasText: 'Year' }).locator('input');
        this.gpa=page.locator('.oxd-input-group').filter({ hasText: 'GPA/Score' }).locator('input');
        this.educationstartdate=page.locator('.oxd-input-group').filter({ hasText: 'Start Date' }).locator('input');
        this.educationenddate=page.locator('.oxd-input-group').filter({ hasText: 'End Date' }).locator('input');
        this.educationsave = page.locator('form').getByRole('button',{name:'Save'}).nth(1);
        this.addskill =  page.locator('.orangehrm-action-header').filter({ hasText: 'Skills' }).getByRole('button',{ name: 'Add' });
        this.skill = page.locator('.oxd-input-group').filter({ hasText: 'Skill' }).locator('.oxd-select-text');
        this.yearsofexperience = page.locator('.oxd-input-group').filter({ hasText: 'Years of Experience' }).locator('input');
        this.skillcomments=page.locator('.oxd-input-group').filter({ hasText: 'Comments' }).locator('textarea').first();
        this.skillsave = page.locator('form').getByRole('button',{name:'Save'}).nth(2);
        this.addlanguage = page.locator('.orangehrm-action-header').filter({ hasText: 'Languages' }).getByRole('button',{ name: 'Add' });
        this.language=page.locator('.oxd-input-group').filter({ hasText: 'Language' }).locator('.oxd-select-text');
        this.fluency=page.locator('.oxd-input-group').filter({ hasText: 'Fluency' }).locator('.oxd-select-text');
        this.competency=page.locator('.oxd-input-group').filter({ hasText: 'Competency' }).locator('.oxd-select-text');
        this.languagecomments =page.locator('.oxd-input-group').filter({ hasText: 'Comments' }).locator('textarea').first();
        this.languagesave = page.getByRole('button', { name: 'Save' }).nth(2);
        this.addlicense = page.locator('.orangehrm-action-header').filter({ hasText: 'License' }).getByRole('button',{ name: 'Add' });
        this.licensetype = page.locator('.oxd-input-group').filter({ hasText: 'License Type' }).locator('.oxd-select-text');
        this.licensenumber1 =page.locator('.oxd-input-group').filter({ hasText: 'License Number' }).locator('input');
        this.licenseissuedtae=page.locator('.oxd-input-group').filter({ hasText: 'Issued Date' }).locator('input');
        this.licenseexpirydate=page.locator('.oxd-input-group').filter({ hasText: 'Expiry Date' }).locator('input');
        this.licensesave =page.getByRole('button', { name: 'Save' }).nth(2);
        this.languageForm = page.locator('form').nth(3);
        //page.locator('.orangehrm-edit-employee-content').filter({ hasText: 'License' }).getByRole('button', { name: 'Save' });
        //page.getByRole('button', { name: 'Save' }).nth(2);
    }
    async clickonqualificationtab(){
        await this.qualificationtab.click();
    }
    async validateworkexperience(workcompanyname,workjobtitle,from,to,workcomment){
        await this.addqualification.click();
        await expect(this.workcompanyname).toBeVisible();
        await this.workcompanyname.fill(workcompanyname);
        await this.workjobtitle.fill(workjobtitle);
        await this.from.fill(from);
        await this.to.fill(to);
        await expect(this.workcomment).toBeVisible();
        await this.workcomment.fill(workcomment);
        await this.worksave.click();
    }
    async validateeducation(Degree,Institue,Major,year,gpa, startdate1,enddate1){
        await this.addeducation.click();
        await this.educationlevel.click();
        await this.page.getByRole('option',{name:Degree,exact:true}).click();
        await expect(this.institute).toBeVisible();
        await this.institute.fill(Institue);
        await expect(this.major).toBeVisible();
        await this.major.fill(Major);
        await expect(this.year).toBeVisible();
        await this.year.fill(year);
        await expect(this.gpa).toBeVisible();
        await this.gpa.fill(gpa);
        await expect(this.educationstartdate).toBeVisible();
        await this.educationstartdate.fill(startdate1);
        await expect(this.educationenddate).toBeVisible();
        await this.educationenddate.fill(enddate1);
        await this.educationsave.click();
    }
    async validateskills(skill,yoe,skillcomments){
        await this.addskill.click();
        await this.skill.click();
        await this.page.getByRole('option',{name:skill,exact:true}).click();
        await expect(this.yearsofexperience).toBeVisible();
        await this.yearsofexperience.fill(yoe);
        await expect(this.skillcomments).toBeVisible();
        await this.skillcomments.fill(skillcomments);
        await this.skillsave.click();
    }
    async validatelanguage(language,fluency,competency,languagecomments){
        await this.addlanguage.click();
        await this.language.click();
        await this.page.getByRole('option',{name:language,exact:true}).click();
        await this.fluency.click();
        await this.page.getByRole('option',{name:fluency,exact:true}).click();
        await this.competency.click();
        await this.page.getByRole('option',{name:competency,exact:true}).click();
        await expect(this.languagecomments).toBeVisible();
        await this.languagecomments.fill(languagecomments);
        await this.languageForm.locator('.oxd-form-loader').waitFor({ state: 'hidden' });
        await this.languagesave.click();
        await this.languageForm.locator('.oxd-form-loader').waitFor({ state: 'hidden' });
     }
     async validatelicense(Licence,licencetype,startdate,enddate){
        await this.addlicense.click();
        await this.licensetype.click();
        await this.page.getByRole('option',{name:Licence,exact:true}).click();
        await expect(this.licensenumber1).toBeVisible();
        await this.licensenumber1.fill(licencetype);
        await expect(this.licenseissuedtae).toBeVisible();
        await this.licenseissuedtae.fill(startdate);
        await expect(this.licenseexpirydate).toBeVisible();
        await this.licenseexpirydate.fill(enddate);
        await this.licensesave.click();

     }
}
module.exports = {QualificationPage};
function skillsMember() {
    // Path: member.js
    this.skills = [];
    this.addSkill = function (skill) {
        this.skills.push(skill);
    };
}
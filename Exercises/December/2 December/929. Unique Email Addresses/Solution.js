/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let emailsSet = new Set();
    for (let email of emails) {
        let [localName, domainName] = email.split('@');
        localName = localName.replace(/\./g, '');
        localName = localName.replace(/([a-z]*)\+([a-z\+]*)/, '$1');
        emailsSet.add(localName + '@' + domainName);
    }
    return emailsSet.size;
};

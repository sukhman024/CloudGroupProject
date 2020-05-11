export function showUserDetails(user) {
    return user;
}

export function updateProfile(user) {
    validateUsername(user.email);
    return {firstname:"Test 1", Lastname: "Test2", Email: "abc@cc.com"};
}

export function showListOfStudents(users) {
    return true;
}

export function sendSMS(smsText,receiverNum,senderNum) {
    return true;
}

export function sendEmail(senderEmail,receiverEmail,subject,mailText) {
    return true;
}

export function validateUsername(email) {
    const regex = RegExp('');
    return RegExp('foo*', 'g');
}
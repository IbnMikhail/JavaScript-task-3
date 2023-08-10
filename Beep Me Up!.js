function generateMessage(contacts) {
    // Filter out valid contacts (names with only letters and spaces)
    const validContacts = [];
    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        if (/^[A-Za-z\s]+$/.test(contact)) {
            validContacts.push(contact);
        }
    }

    // Count the number of valid contacts
    const validContactCount = validContacts.length;

    // Generate the message based on the count of valid contacts
    if (validContactCount === 0) {
        return "No one sent you a message!";
    } else if (validContactCount === 1) {
        return validContacts[0] + " sent you a message!";
    } else if (validContactCount === 2) {
        return validContacts[0] + " and " + validContacts[1] + " sent you a message!";
    } else {
        return validContacts[0] + ", " + validContacts[1] + " and " + (validContactCount - 2) + " others sent you a message!";
    }
}

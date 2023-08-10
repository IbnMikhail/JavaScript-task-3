function Messages(con) {
  const validContacts = [];
  
  for (const contact of con) {
    if (!contact.includes(" ")) {
      validContacts.push(contact);
    }
  }

  const count = validContacts.length;

  if (count === 0) {
    return "No one sent you a message!";
  } else if (count === 1) {
    return `${validContacts[0]} sent you a message!`;
  } else if (count === 2) {
    return `${validContacts[0]} and ${validContacts[1]} sent you a message!`;
  } else {
    const othersCount = count - 2;
    return `${validContacts[0]}, ${validContacts[1]} and ${othersCount} others sent you a message!`;
  }
}

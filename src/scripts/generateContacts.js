import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    for (let i = 0; i < number; i += 1) {
      contacts.push(createFakeContact());
    }
    await writeContacts(contacts);
    console.log(`${number} Contacts added successfull!`);
  } catch (error) {
    console.log('Failed to read contacts from the file:', error);
  }
};

generateContacts(5);

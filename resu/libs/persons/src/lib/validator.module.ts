export class PersonValidator {
    static validatePersonsFirstName(firstname: string): boolean {
        return null != firstname && firstname.length <= 100;
    }
    static validatePersonsLastName(lastname: string): boolean {
        return null != lastname && lastname.length <= 100;
    }
    static validatePersonsMiddleName(middlename: string): boolean {
        return middlename == null || middlename.length <= 100;
    }
    static validatePersonsPhone(phone: string): boolean {
        return /^1\-[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/.test(phone);
    }
}
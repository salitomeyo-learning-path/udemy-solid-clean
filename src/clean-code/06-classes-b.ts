(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M'|'F';

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({name, gender, birthdate}: PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;   
        }
    }

    interface UserProps {
        birthdate: Date;
        gender: Gender;
        name: string;
        email: string;
        role: string;
    }

    class User extends Person {
        
        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({
            birthdate,
            gender,
            name,
            email,
            role
        }: UserProps ) {
            super({ name, gender, birthdate });
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface UserSettingsProps {
        birthdate        : Date;
        email            : string;
        gender           : Gender;
        lastOpenFolder   : string;
        name             : string;
        role             : string;
        workingDirectory : string;
    }

    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenFolder  : string;

        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate,
        }: UserSettingsProps ) {
            super({ email, role, name, gender, birthdate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder;
        }
    }


    const userSettings = new UserSettings({
        birthdate: new Date('1999-10-16'),
        email: 'email@email.com',
        gender: 'F',
        lastOpenFolder: '/home',
        name: 'Salome',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({ userSettings });


})();
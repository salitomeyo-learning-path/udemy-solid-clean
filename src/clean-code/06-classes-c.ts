(() => {
    type Gender = 'M'|'F';

    interface PersonProps {
        birthdate : Date;
        gender    : Gender;
        name      : string;
    }

    class Person {
        public birthdate: Date;
        public gender   : Gender;
        public name     : string;

        constructor({ name, gender, birthdate }: PersonProps ){
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate;
        }
    }


    interface UserProps {
        email     : string;
        role      : string;
    }

    class User {
        
        public email: string;
        public role : string;
        public lastAccess: Date;

        constructor({
            email,
            role,
        }: UserProps ) {
            this.lastAccess = new Date();
            this.email = email;
            this.role  = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface SettingsProps {
        lastOpenFolder   : string;
        workingDirectory : string;
    }

    class Settings {

        public workingDirectory: string;
        public lastOpenFolder  : string;

        constructor({
            workingDirectory,
            lastOpenFolder,
        }: SettingsProps ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder;
        }
    }

    interface UserSettingsProps {
        birthDate        : Date;
        email            : string;
        gender           : Gender;
        lastOpenFolder   : string;
        name             : string;
        role             : string;
        workingDirectory : string;
    }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name, gender, birthDate,
            email, role,
            workingDirectory, lastOpenFolder
        }: UserSettingsProps) {
            this.person = new Person({ name, gender, birthDate });
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
        }
    }

    const userSettings = new UserSettings({
        birthDate: new Date('1999-10-16'),
        email: 'email@email.com',
        gender: 'F',
        lastOpenFolder: '/home',
        name: 'Salome',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({ userSettings });


})();
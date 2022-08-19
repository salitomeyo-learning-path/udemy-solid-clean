(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) {}
    }

    class InputEvents {
        constructor (){}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    class InputElement {
        public attributes: InputAttributes;
        public element: HtmlElement;
        public events: InputEvents;

        constructor(id: string, value: string, placeholder: string) {
            this.element = new HtmlElement(id, 'input');
            this.attributes = new InputAttributes(value, placeholder);
            this.events = new InputEvents();
        }
    }


    //? Idea para la nueva clase InputElement

    const nameField = new InputElement('Salome', 'Enter first name', 'txtName');

    console.log({ nameField });

})()
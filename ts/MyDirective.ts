module Application.Directives {

    export class MyDirective {

        constructor() {
            return this.CreateDirective();
        }

        private CreateDirective():any {
            return {
                restrict: 'E',
                template: '<div>MyDirective</div>'
            };
        }
    }
}
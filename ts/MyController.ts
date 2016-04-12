module Application.Controllers {

    import Services = Application.Services;

    export class MyController {

        scope: any;
        myService: Services.IMyService;
        data: any;

        constructor($scope: ng.IScope, myService: Services.IMyService) {
            this.scope = $scope;
            
            this.scope.testVar = 33;
            this.myService = myService;
            this.data = [];
        }

        private GetAll() {
            this.myService.GetAll((data) => {
                this.data = data;
            });
        }
    }
}

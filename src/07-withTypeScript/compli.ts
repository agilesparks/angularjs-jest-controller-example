module ComplicatedModule

{


    "use strict";

    export class ComplicatedController {
        public showCloseButtonForm: boolean = false;    // show / hide the X header button

        public showCloseButtonStatus: boolean = true;  // show / hide the X header button

        public showFormPopup: boolean;

        public showStatusPopup: boolean;

        public epiData: any;

        public epiStatus: any;

        public userData: any;

        public curSite: any;

        public maxDate: Date;

        public minDate: Date;

        public monthArray: Array<number>;

        public yearArray: Array<number>;

        public selectedMonth: number;

        public selectedYear: number;

        public readOnly: boolean;

        public shownAsPage: boolean;

        public status: { title: string, image: string, header: string, body: string };

 

        static $inject = [ "ComplicatedModule.Services", "$sce", "$rootScope", "app.Common.FeaturesModule.FeatureServices" ];

        constructor(public services: ComplicatedModule.Services, public $sce: ng.ISCEService, public $rootScope: ng.IRootScopeService, public featuresService: app.Common.Features.IService) {

 


 

            this.readOnly = window["agreementsModeReadOnly"] || false;

            this.shownAsPage = window["agreementsShownAsPage"] || false;

            this.showFormPopup = false;

            this.showStatusPopup = false;

            this.userData = {};

            this.monthArray = [];

            this.yearArray = [];

            this.status = { title: "", image: "", header: "", body: "" };

 

            this.loadApprovalGatheringPopup();

        }

 

        approveGathering(agree) {

// …

        }

 

        loadApprovalGatheringPopup() {

                // …

        }

        myTestMethod = function (x) {
            return 2*x
        };

 
      
    }

 

    angular.module("app.complicatedModule").controller("ComplicatedModule.ComplicatedController", ComplicatedController);

}
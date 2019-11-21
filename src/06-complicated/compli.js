var myComplicatedModule;

(function (myComplicatedModule) {

    "use strict";

    var myComplicatedConroller = (function () {

        function myComplicatedConroller(services, $sce, $rootScope, featuresService) {

            var _this = this;

            this.services = services;

            this.$sce = $sce;

            this.$rootScope = $rootScope;

            this.featuresService = featuresService;

            this.showCloseButtonForm = false; // show / hide the X header button

            this.showCloseButtonStatus = true; // show / hide the X header button

        
            PushGACode({ 'event': 'PZPopupCustomerApprovals' });

            if (this.$rootScope.byPassLoadApprovalGatheringPopup === undefined)
              this.loadApprovalGatheringPopup();

        }

        myComplicatedConroller.prototype.approveGathering = function (agree) {

            var _this = this;

           
            //this is an external function which needs to be faked
            PushGACode(pushGaCodeData);

        };

        myComplicatedConroller.prototype.loadApprovalGatheringPopup = function () {

            var _this = this;

            // get epi statuses texts (success and fail texts)

            this.services.GetApprovalGatheringStatusData().then(function (epiStatusResponse) {

                _this.epiStatus = JSON.parse(epiStatusResponse);

                var request = _this.buildRequest(_this.shownAsPage, _this.readOnly);

                // get approval gathering data

                _this.featuresService.mfCreditPoolReqGet(request).then(function (res) {

                    if ((res.Header && res.Header.Status === "1") && (res.MfCreditPoolReqBean && res.MfCreditPoolReqBean.returnCode === "0")) {

                        _this.showFormPopup = res.MfCreditPoolReqBean.ProductListOutput && (res.MfCreditPoolReqBean.ProductListOutput.length > 0);

                        if (_this.showFormPopup) {

                            // get epi form texts

                            _this.services.GetApprovalGatheringFormData().then(function (epiFormResponse) {

                                _this.epiData = JSON.parse(epiFormResponse);

                            });

                            _this.fillExpiryDateDropdowns(res);

                        }

                        else {

                            _this.shownAsPage && _this.showStatus(request.actionCode, res.MfCreditPoolReqBean && res.MfCreditPoolReqBean.returnCode);

                            !_this.shownAsPage && _this.$rootScope.$emit("loadNextPopupEvent", {});

                        }

                    }

                    else {

                        _this.shownAsPage && _this.showStatus(request.actionCode, res.MfCreditPoolReqBean && res.MfCreditPoolReqBean.returnCode);

                        !_this.shownAsPage && _this.$rootScope.$emit("loadNextPopupEvent", {});

                    }

                });

            });

        };

        myComplicatedConroller.prototype.myTestMethod = function (x) {
            return 2*x
        };

        // remove extra items for prevent choosing an incorrect date

      

        return myComplicatedConroller;

    }());

    myComplicatedConroller.$inject = ["ComplicatednModule.Services", "$sce", "$rootScope", "app.Common.FeaturesModule.FeatureServices"];

    myComplicatedModule.myComplicatedConroller = myComplicatedConroller;

    angular.module("app.complicatedModule").controller("ComplicatedModule.ComplicatedController", myComplicatedConroller);

})(myComplicatedModule || (myComplicatedModule = {}));

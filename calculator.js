'use strict'

angular.module('calculator', [])
.controller('calculatorCtrl', calculatorCtrl) 
.directive('onlyDigits', onlyDigits);

function calculatorCtrl($scope){
    $scope.aem = {
        aem_wbpg_cnt: 600,
        aem_cmp_cnt: 60,
        aem_wk_cnt: 5,
        aem_mnth_cnt: 9,
        aem_dphr_cnt: 125,
        aem_man_1: 60,
        aem_man_4: 20,
        aem_man_7: 10,
        aem_man_15: 10,
        aem_cmp_man_1: 45,
        aem_cmp_man_4: 30,
        aem_cmp_man_7: 15,
        aem_cmp_man_15: 10,
        aem_wk_man_10: 75,
        aem_wk_man_20: 10,
        aem_wk_man_30: 10,
        aem_wk_man_50: 5
    };
    $scope.rapid = {
        rpaem_wbpg_cnt: 600,
        rpaem_cmp_cnt: 60,
        rpaem_wk_cnt: 5,
        rpaem_mnth_cnt: 9,
        rpaem_dphr_cnt: 125,
        rpaem_man_1: 96,
        rpaem_man_4: 1,
        rpaem_man_7: 1,
        rpaem_man_15: 2,
        rpaem_cmp_man_1: 45,
        rpaem_cmp_man_4: 30,
        rpaem_cmp_man_7: 15,
        rpaem_cmp_man_15: 10,
        rpaem_wk_man_10: 75,
        rpaem_wk_man_20: 10,
        rpaem_wk_man_30: 10,
        rpaem_wk_man_50: 5,
        rpaem_cost: 300000
    };

    $scope.$watch('aem', function(newVal, oldVal){
        $scope.rapid.rpaem_wbpg_cnt = $scope.aem.aem_wbpg_cnt;
        $scope.rapid.rpaem_cmp_cnt = $scope.aem.aem_cmp_cnt;
        $scope.rapid.rpaem_wk_cnt = $scope.aem.aem_wk_cnt;
        $scope.rapid.rpaem_mnth_cnt = $scope.aem.aem_mnth_cnt;
        $scope.rapid.rpaem_dphr_cnt = $scope.aem.aem_dphr_cnt;
    }, true);

    $scope.calculateValuesOnBlur = function(){
        $scope.aem.tot_app_dev_per = $scope.aem.aem_man_1 + $scope.aem.aem_man_4 + $scope.aem.aem_man_7 + $scope.aem.aem_man_15;
    
        $scope.rapid.tot_app_dev_per = $scope.rapid.rpaem_man_1 + $scope.rapid.rpaem_man_4 + $scope.rapid.rpaem_man_7 + $scope.rapid.rpaem_man_15;
    
        $scope.aem.tot_cmp_dev_per = $scope.aem.aem_cmp_man_1 + $scope.aem.aem_cmp_man_4 + $scope.aem.aem_cmp_man_7 + $scope.aem.aem_cmp_man_15;
        
        $scope.rapid.tot_cmp_dev_per = $scope.rapid.rpaem_cmp_man_1 + $scope.rapid.rpaem_cmp_man_4 + $scope.rapid.rpaem_cmp_man_7 + $scope.rapid.rpaem_cmp_man_15;
    
        $scope.aem.tot_wf_dev_per = $scope.aem.aem_wk_man_10 + $scope.aem.aem_wk_man_20 + $scope.aem.aem_wk_man_30 + $scope.aem.aem_wk_man_50;
        
        $scope.rapid.tot_wf_dev_per = $scope.rapid.rpaem_wk_man_10 + $scope.rapid.rpaem_wk_man_20 + $scope.rapid.rpaem_wk_man_30 + $scope.rapid.rpaem_wk_man_50;
    
        $scope.aem.web_build_time = (($scope.aem.aem_wbpg_cnt * $scope.aem.aem_man_1/100) * 1) + (($scope.aem.aem_wbpg_cnt * $scope.aem.aem_man_4/100) * 4) + (($scope.aem.aem_wbpg_cnt * $scope.aem.aem_man_7/100) * 7) + (($scope.aem.aem_wbpg_cnt * $scope.aem.aem_man_15/100) * 15);
    
        $scope.rapid.web_build_time = (($scope.rapid.rpaem_wbpg_cnt * $scope.rapid.rpaem_man_1/100) * 1) + (($scope.rapid.rpaem_wbpg_cnt * $scope.rapid.rpaem_man_4/100) * 4) + (($scope.rapid.rpaem_wbpg_cnt * $scope.rapid.rpaem_man_7/100) * 7) + (($scope.rapid.rpaem_wbpg_cnt * $scope.rapid.rpaem_man_15/100) * 15);
    
        $scope.aem.cmp_build_time = (($scope.aem.aem_cmp_cnt * $scope.aem.aem_cmp_man_1/100) * 1) + (($scope.aem.aem_cmp_cnt * $scope.aem.aem_cmp_man_4/100) * 4) + (($scope.aem.aem_cmp_cnt * $scope.aem.aem_cmp_man_7/100) * 7) + (($scope.aem.aem_cmp_cnt * $scope.aem.aem_cmp_man_15/100) * 15);
        
        $scope.rapid.cmp_build_time = (($scope.rapid.rpaem_cmp_cnt * $scope.rapid.rpaem_cmp_man_1/100) * 1) + (($scope.rapid.rpaem_cmp_cnt * $scope.rapid.rpaem_cmp_man_4/100) * 4) + (($scope.rapid.rpaem_cmp_cnt * $scope.rapid.rpaem_cmp_man_7/100) * 7) + (($scope.rapid.rpaem_cmp_cnt * $scope.rapid.rpaem_cmp_man_15/100) * 15);
    
        $scope.aem.wf_build_time = (($scope.aem.aem_wk_cnt * $scope.aem.aem_wk_man_10/100) * 10) + (($scope.aem.aem_wk_cnt * $scope.aem.aem_wk_man_20/100) * 20) + (($scope.aem.aem_wk_cnt * $scope.aem.aem_wk_man_30/100) * 30) + (($scope.aem.aem_wk_cnt * $scope.aem.aem_wk_man_50/100) * 50);
        
        $scope.rapid.wf_build_time = (($scope.rapid.rpaem_wk_cnt * $scope.rapid.rpaem_wk_man_10/100) * 10) + (($scope.rapid.rpaem_wk_cnt * $scope.rapid.rpaem_wk_man_20/100) * 20) + (($scope.rapid.rpaem_wk_cnt * $scope.rapid.rpaem_wk_man_30/100) * 30) + (($scope.rapid.rpaem_wk_cnt * $scope.rapid.rpaem_wk_man_50/100) * 50);
    
        $scope.aem.per_of_app_dev = parseFloat(($scope.aem.web_build_time/($scope.aem.web_build_time + $scope.aem.cmp_build_time + $scope.aem.wf_build_time))*100).toFixed(2);
    
        $scope.rapid.per_of_app_dev = parseFloat(($scope.rapid.web_build_time/($scope.rapid.web_build_time + $scope.rapid.cmp_build_time + $scope.rapid.wf_build_time))*100).toFixed(2);
    
        $scope.aem.per_of_cmp_dev = parseFloat(($scope.aem.cmp_build_time/($scope.aem.web_build_time + $scope.aem.cmp_build_time + $scope.aem.wf_build_time))*100).toFixed(2);
        
        $scope.rapid.per_of_cmp_dev = parseFloat(($scope.rapid.cmp_build_time/($scope.rapid.web_build_time + $scope.rapid.cmp_build_time + $scope.rapid.wf_build_time))*100).toFixed(2);
    
        $scope.aem.per_of_wf_dev = parseFloat(($scope.aem.wf_build_time/($scope.aem.web_build_time + $scope.aem.cmp_build_time + $scope.aem.wf_build_time))*100).toFixed(2);
        
        $scope.rapid.per_of_wf_dev = parseFloat(($scope.rapid.wf_build_time/($scope.rapid.web_build_time + $scope.rapid.cmp_build_time + $scope.rapid.wf_build_time))*100).toFixed(2);
    
        $scope.aem.tot_proj_man = $scope.aem.web_build_time + $scope.aem.cmp_build_time + $scope.aem.wf_build_time;
    
        $scope.rapid.tot_proj_man = $scope.rapid.web_build_time + $scope.rapid.cmp_build_time + $scope.rapid.wf_build_time;
    
        $scope.aem.rebuild_time = $scope.aem.tot_proj_man * 8;
    
        $scope.rapid.rebuild_time = $scope.rapid.tot_proj_man * 8;
    
        $scope.aem.req_time = Math.round($scope.aem.tot_proj_man/($scope.aem.aem_mnth_cnt*22));
    
        $scope.rapid.req_time = Math.round($scope.rapid.tot_proj_man/($scope.rapid.rpaem_mnth_cnt*22));
    
        $scope.aem.est_cost = $scope.aem.rebuild_time * $scope.aem.aem_dphr_cnt;
    
        $scope.rapid.est_cost = $scope.rapid.rebuild_time * $scope.rapid.rpaem_dphr_cnt;
    
        $scope.rapid.tot_cost = $scope.rapid.est_cost + $scope.rapid.rpaem_cost;
    
        $scope.rapid.actual_time_saved = $scope.aem.rebuild_time - $scope.rapid.rebuild_time;
    
        $scope.rapid.actual_days_saved = $scope.rapid.actual_time_saved/8;
    
        $scope.rapid.decr_dev = parseFloat((($scope.aem.rebuild_time - $scope.rapid.rebuild_time)/$scope.aem.rebuild_time) * 100).toFixed(2);
    
        $scope.rapid.cost_save = $scope.aem.est_cost - $scope.rapid.tot_cost;
    
        $scope.rapid.roi = parseFloat((($scope.rapid.cost_save - $scope.rapid.rpaem_cost)/$scope.rapid.rpaem_cost) * 100).toFixed(2);
    };

    $scope.calculateValuesOnBlur();
}

function onlyDigits() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attr, ctrl) {
            function inputValue(val) {
                var isMinValidate = attr.ngMin || false;
                var isMaxValidate = attr.ngMax || false;
                if (val) {
                    var regEx = /[^0-9.]/g;
                    var digits = val.replace(regEx, '');
                    if (digits.split('.').length > 2) {
                        digits = digits.substring(0, digits.length - 1);
                    }
                    if (digits !== val) {
                        ctrl.$setViewValue(digits);
                        ctrl.$render();
                    }
                    return parseFloat(digits);
                }
                return '';
            }
            ctrl.$parsers.push(inputValue);
        }
    };
}

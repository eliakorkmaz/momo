(function () {
    var app =angular.module('momo', [])
        .controller('MomoController', MomoController);

    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);

    MomoController.$inject = ['$scope','$http'];
    function MomoController($scope, $http) {
        var vm = this;
        vm.$id = 'MomoController';
        vm.data = null;
        vm.busy = {
            content: false
        };
        vm.fill = "";
        vm.activatedUrl = 'https://jsonplaceholder.typicode.com';

        function activate() {
            console.log(vm.$id + ' has been activated');
        }

        activate();
        /***************************
             Functions
         ***************************/
        function getStatus(withUrl) {
            $http({
                method: 'GET',
                url: withUrl
            }).
                then(function (value) {
                    vm.data = value;
                    console.dir(value);
            }, function (reason) {
                    console.dir(reason);
                    vm.data = reason;
            });
        }

        getStatus(vm.activatedUrl);

        /*
          VM based functions
                               */
        vm.testing = function () {
            if(vm.fill.length === 0 || vm.fill == "" ){
                window.alert('Websitesi Girmelisiniz!');
            } else{
                var selection = document.getElementById('http-select');
                var value = selection.options[selection.selectedIndex].value;
                var websiteUrl = value+'://'+vm.fill;
                console.log(websiteUrl);
                getStatus(websiteUrl);
            }
        }

    }
})();
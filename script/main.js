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

        function activate() {
            console.log(vm.$id + ' has been activated');
        }

        activate();
        /***************************
             vm based function
         ***************************/
        function getStatus() {
            $http({
                method: 'GET',
                /*url: 'https://eliakorkmaz.github.io'*/
                /*url: 'https://www.google.com.tr'*/
                /*url: 'https://eliakorkmaz.github.io'*/
                url: 'https://jsonplaceholder.typicode.com'
            }).
                then(function (value) {
                    vm.data = value;
                    console.dir(value);
            }, function (reason) {
                    console.dir(reason);
            });
        }

        getStatus();

    }
})();
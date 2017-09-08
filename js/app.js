var myApp = angular.module('myApp', []);
myApp.controller('Business-Card', ['$scope', function($scope){

$scope.customers = [
		{
			first_name: "Hung",
			last_name: "Nguyen",
			gender: "Mr",
			title: "Front-end developer",
			company: "Jalaka Oy"
		},
		{
			first_name: "Hao",
			last_name: "Phan",
			gender: "Mr",
			title: "Javascript-engineer",
			company: "Fosmo Oy"
		},
		{
			first_name: "Khanh",
			last_name: "Nguyen",
			gender: "Mr",
			title: "Javascript-engineer",
			company: "Super App Oy"
		},
		{
			first_name: "Van",
			last_name: "Phan",
			gender: "Ms/Mrs",
			title: "Sale manager",
			company: "Abbott"
		},
		{
			first_name: "Chloe",
			last_name: "Taylor",
			gender: "Ms/Mrs",
			title: "Digital Marketer",
			company: "Freelancer"
		},
		{
			first_name: "Donald",
			last_name: "Trump",
			gender: "Mr",
			title: "President 45th",
			company: "American Ltd"
		}
	];


	$scope.newcustomer = {}
	$scope.showIt = false;
	$scope.addNew = function(newcustomer){
		console.log($scope.customers);
		$scope.customers.push({
			first_name: $scope.newcustomer.first_name,
			last_name: $scope.newcustomer.last_name,
			gender: $scope.newcustomer.gender,
			title: $scope.newcustomer.title,
			company: $scope	.newcustomer.company
		});

		$scope.newcustomer.first_name = "";
		$scope.newcustomer.last_name = "";
		$scope.newcustomer.gender = "";
		$scope.newcustomer.title = "";
		$scope.newcustomer.company = "";
		$scope.showIt = false;
	};

	$scope.showForm = function() {
		$scope.showIt = !$scope.showIt;
	}



	$scope.activeEdit;
	$scope.editCustomer = {};


	$scope.editCustomers = function(index) {
		$scope.activeEdit = index;

		$scope.editCustomer.first_name = $scope.customers[index].first_name;
		$scope.editCustomer.last_name = $scope.customers[index].last_name;
		$scope.editCustomer.title = $scope.customers[index].title;
		$scope.editCustomer.company = $scope.customers[index].company;
		$scope.editCustomer.gender = $scope.customers[index].gender;

	}

	$scope.deleteCustomer = function(index) {
		$scope.customers.splice(index, 1);
	}

	$scope.editAble = function(index) {
		return $scope.activeEdit === index;
	}

	$scope.saveCustomer = function(index) {
		$scope.activeEdit = -1;

		$scope.customers[index] = {
			first_name: $scope.editCustomer.first_name,
			last_name: $scope.editCustomer.last_name,
			gender: $scope.editCustomer.gender,
			title: $scope.editCustomer.title,
			company: $scope	.editCustomer.company
		};
	}

	$scope.cancelEdit = function() {
		$scope.activeEdit = -1;
	}
}]);

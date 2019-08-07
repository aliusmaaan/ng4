class CreightonHTTPUtility {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;      
    }
    
	getMethod (url, inputDataObj, inputParamsObj) {
        const deffered = this.$q.defer();
		this.$http({
            method: 'GET', 
            url: url,
            data: inputDataObj,
            params: inputParamsObj
        }).success(data => {
            deffered.resolve(data);
        }).error(error => {
            deffered.reject(error);
        });
        return deffered.promise;
	}
    postMethod (url, inputDataObj, inputParamsObj) {
        const deffered = this.$q.defer();
		this.$http({
            method: 'POST', 
            url: url,
            data: inputDataObj,
            params: inputParamsObj
        }).success(data => {
            deffered.resolve(data);
        }).error(error => {
            deffered.reject(error);
        });
        return deffered.promise;
	}
    putMethod (url, inputDataObj, inputParamsObj) {
        const deffered = this.$q.defer();
		this.$http({
            method: 'PUT', 
            url: url,
            data: inputDataObj,
            params: inputParamsObj
        }).success(data => {
            deffered.resolve(data);
        }).error(error => {
            deffered.reject(error);
        });
        return deffered.promise;
	}
    deleteMethod (url, inputDataObj, inputParamsObj) {
		const deffered = this.$q.defer();
        this.$http({
            method: 'DELETE', 
            url: url,
            data: inputDataObj,
            params: inputParamsObj
        }).success(data => {
            deffered.resolve(data);
        }).error(error => {
            deffered.reject(error);
        });
        return deffered.promise;
	}
}

CreightonHTTPUtility.$inject = ['$http', '$q'];

export default CreightonHTTPUtility;
export default ($q) => {
    const request = (config) => {
        console.log(config);
        config.headers.userName = 'Malappa';
        config.headers.passWord = 'Test';
        return config;
    };
    const responseError = (rejection) => {
        return $q.reject(rejection);
    };
    return {
        request: request,
        responseError: responseError
    };
};
// Custom Response Class to standardize API responses
class ApiResponse {
    constructor(statusCode, data, message = "success") {
        // HTTP status code (e.g., 200, 201, 404)
        this.statusCode = statusCode;

        // Data to send back in the response (e.g., user info, list of products)
        this.data = data;

        // Optional message (default: "success")
        this.message = message;

        // Automatically sets success based on the status code
        // If statusCode is less than 400, it's a success (true), else false
        this.success = statusCode < 400;
    }
}

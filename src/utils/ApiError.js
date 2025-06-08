//Custom Error Class for structured API error handling
class ApiError extends Error {
    constructor(
        statuscode,                      // HTTP status code (e.g., 400, 404, 500)
        message = "something went wrong", // Default error message
        errors = [],                      // Optional array of error details (e.g., validation errors)
        statck = ""                       // Optional stack trace (typo: should be 'stack')
    ) {
        // Call the built-in Error constructor with the message
        super(message); 

        // Set the HTTP status code (e.g., 404, 500)
        this.statuscode = statuscode;

        // Data is null in error responses (for consistent structure)
        this.data = null;

        // Set the error message (redundant but keeps structure consistent)
        this.message = message;

        // Flag to indicate failure (useful in API response)
        this.success = false;

        // Store specific error details if any (e.g., validation errors)
        this.errors = errors;

        // Optional: set the error stack trace (useful for debugging)
        // Should ideally be: this.stack = stack || new Error().stack
        // Typo in your parameter: 'statck' → should be 'stack'
    }
}

// Export the class so it can be used in other files
export { ApiError };

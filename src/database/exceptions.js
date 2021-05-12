export class DatabaseError extends Error {
    constructor(message) {
        super(message);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, DatabaseError);
        }
    }
}

export class DuplicateEntry extends DatabaseError {
    constructor(message) {
        super(message);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, DuplicateEntry);
        }
    }
}

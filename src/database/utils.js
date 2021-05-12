import * as exceptions from './exceptions.js';

export function createDatabaseError(error) {
    if (error instanceof ReferenceError) {
        throw error;
    }

    let databaseError = null;
    switch (error.code) {
        case 'ER_DUP_ENTRY':
            databaseError = new exceptions.DuplicateEntry(error.message);
            break;
        default:
            databaseError = new exceptions.DatabaseError(error.message);
    }

    databaseError.stack = error.stack;
    return databaseError;
}

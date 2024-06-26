

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
function createVisitor(name, age, ticketId) {
    const obj = {
        "name": name,
        "age": age,
        "ticketId": ticketId
    }

    return obj;
}
  
/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
function revokeTicket(visitor) {
    visitor.ticketId = null;

    return visitor;
}
  
/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
function ticketStatus(tickets, ticketId) {
    if (tickets[ticketId] === undefined) {
        return 'unknown ticket id';

    } else if (tickets[ticketId] === null) {
        return 'not sold';

    } else {
        return 'sold to ' + tickets[ticketId];
    }
}
  
/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
function simpleTicketStatus(tickets, ticketId) {
    if (tickets[ticketId] === undefined || tickets[ticketId] === null) {
        return "invalid ticket !!!";

    } else {
        return tickets[ticketId];
    }
}
  
/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
function gtcVersion(visitor) {
    let versionState = null;
    versionState = visitor.gtc ?? undefined;

    if (versionState !== undefined) {
        return visitor.gtc.version;
    }

    return versionState;
}


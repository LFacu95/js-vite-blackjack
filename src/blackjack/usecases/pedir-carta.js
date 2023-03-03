/**
 * This function allows me to take a card
 * @param {Array<String>} deck Full shuffle deck
 * @returns {String} Return last card from deck
 */

export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}



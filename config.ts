export const AUTHOR_FIRST_NAME = 'Jelmer';
export const AUTHOR_FULL_NAME = AUTHOR_FIRST_NAME.concat(' de Jong');
export const SITE_NAME = 'heldergebouwd.nl';

/**
 * Contact address split as [user, domain] so the assembled form never appears
 * in built HTML or JS. It is joined client-side to keep it away from scrapers.
 */
export const CONTACT_EMAIL_PARTS = ['contact', 'heldergebouwd.nl'];

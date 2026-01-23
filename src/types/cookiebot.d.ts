// Enable module augmentation (see https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation)
export {};

declare global {
  interface Window {
    /**
     * The Cookiebot object is loaded via the Cookiebot CMP script (`https://consent.cookiebot.com/uc.js`).
     * @see {@link https://www.cookiebot.com/en/developer/|Cookiebot SDK Documentation}
     */
    Cookiebot?: {
      consent: {
        /**
         * True if current user has accepted necessary cookies. The property is read only.
         */
        necessary: boolean;
        /**
         * True if current user has accepted preference cookies. The property is read only.
         */
        preferences: boolean;
        /**
         * True if current user has accepted statistics cookies. The property is read only.
         */
        statistics: boolean;
        /**
         * True if current user has accepted marketing cookies. The property is read only.
         */
        marketing: boolean;
        /**
         * The way the consent was given. Either ‘implied’ when a consent is given automatically or ‘explicit’ when given by the user.
         * If there is no consent the value is null. If the consent method is unknown (old consents) it is considered ‘implied’.
         * The property is read only.
         */
        method: string | null;
      };
      /**
       * True if the user has accepted cookies. The property is read only.
       */
      consented: boolean;
      /**
       * True if the user has declined the use of cookies. The property is read only.
       */
      declined: boolean;
      /**
       * True if the user has responded to the dialog with either 'accept' or 'decline'. The property is read only.
       */
      hasResponse: boolean;
      /**
       * True if the user has enabled the web browser's 'Do not track' (DNT) setting.
       * If DNT is enabled Cookiebot will not set the third party cookie CookieConsentBulkTicket used for bulk consent.
       * The property is read only.
       */
      doNotTrack: boolean;
      regulations: {
        /**
         * Allows you to determine if GDPR applies based on the user's geo-location. The property is read only.
         */
        gdprApplies: boolean;
        /**
         * Allows you to determine if CCPA applies based on the user's geo-location. The property is read only.
         */
        ccpaApplies: boolean;
        /**
         * Allows you to determine if LGPD applies based on the user's geo-location. The property is read only.
         */
        lgpdApplies: boolean;
      };

      /**
       * Forces the cookie consent dialog to show.
       */
      show: () => void;
      /**
       * Forces the cookie consent dialog to hide.
       */
      hide: () => void;
      /**
       * Shows the cookie consent dialog to the website user to renew or change the user's consent state.
       */
      renew: () => void;
      /**
       * Loads a JavaScript-file.
       * @param URL - Absolute path to the JavaScript-file.
       * @param async - Determines if the script should load asynchronously.
       * @param callback - JavaScript function to execute when the script has finished loading.
       */
      getScript: (URL: string, async?: boolean, callback?: () => void) => void;
      /**
       * Evaluates all loaded script tags of type "text/plain" with the attribute "data-cookieconsent" and executes the scripts in accordance with the user's consent state.
       * For use by websites that load content dynamically, e.g. in single page applications. Scripts are only executed once, so this function is safe to call several times, e.g. every time new content is loaded.
       */
      runScripts: () => void;
      /**
       * Withdraw my consent for this website.
       */
      withdraw: () => void;
      /**
       * Use this outside the context of the cookie banner, such as a button in your site's header/footer to opt in or out - Or to add a button to your banner that enables partial consent, to for instance "Accept Preferences & Statistics".
       * @param optinPreferences
       * @param optinStatistics
       * @param optinMarketing
       */
      submitCustomConsent: (
        optinPreferences: boolean,
        optinStatistics: boolean,
        optinMarketing: boolean,
      ) => void;
    };
  }
}

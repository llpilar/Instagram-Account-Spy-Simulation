import React, { createElement } from 'react';
import { Helmet } from 'react-helmet-async';
export function HeadTags() {
  return <Helmet>
      {/* Optimized Facebook Pixel Implementation */}
      <script>
        {`
          // Initialize Facebook Pixel
          !function(f,b,e,v,n,t,s) {
            if(f.fbq)return;
            n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
          }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
          // Initialize multiple pixels
          var pixelIds = ['598373146386245', '1284215939311844'];
          pixelIds.forEach(function(pixelId) {
            fbq('init', pixelId);
          });
          // Track PageView for all pixels
          fbq('track', 'PageView');
          // Error handling
          window.onerror = function(msg, url, lineNo, columnNo, error) {
            console.error('Facebook Pixel Error:', error);
            return false;
          };
        `}
      </script>
      {/* Fallback for users with JavaScript disabled */}
      <noscript>
        {`<img
          height="1"
          width="1"
          style="display:none"
          src="https://www.facebook.com/tr?id=598373146386245&ev=PageView&noscript=1"
        />`}
      </noscript>
      <noscript>
        {`<img
          height="1"
          width="1"
          style="display:none"
          src="https://www.facebook.com/tr?id=1284215939311844&ev=PageView&noscript=1"
        />`}
      </noscript>
      {/* Optimized UTMify Implementation */}
      <script src="https://cdn.utmify.com.br/scripts/utms/latest.js" data-utmify-prevent-xcod-sck data-utmify-prevent-subids async defer />
      <script src="https://cdn.utmify.com.br/scripts/utms/latest.js" data-utmify-prevent-subids async defer />
    </Helmet>;
}
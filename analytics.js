(function () {
  'use strict';

  var measurementId = String(window.SHANTY_GA_MEASUREMENT_ID || '').trim();
  var isConfigured = /^G-[A-Z0-9]+$/i.test(measurementId);
  var debugMode = window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.endsWith('.vercel.app');

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  window.shantyTrack = function (eventName, parameters) {
    if (!isConfigured || typeof eventName !== 'string') return;

    var safeParameters = Object.assign({
      page_path: window.location.pathname
    }, parameters || {});

    if (debugMode) safeParameters.debug_mode = true;

    window.gtag('event', eventName, safeParameters);
  };

  if (isConfigured) {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    document.head.appendChild(script);

    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      send_page_view: true,
      debug_mode: debugMode
    });
  }

  function getPlacement(element) {
    if (element.dataset.analyticsLocation) return element.dataset.analyticsLocation;
    if (element.classList.contains('fab')) return 'floating_button';
    if (element.closest('header, nav')) return 'navigation';
    if (element.closest('footer')) return 'footer';
    if (element.closest('#citas')) return 'booking_section';
    return 'content';
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a');
    if (!link) return;

    var href = link.getAttribute('href') || '';
    if (href.indexOf('wa.me/') !== -1) {
      window.shantyTrack('site_whatsapp_click', {
        link_placement: getPlacement(link)
      });
      return;
    }

    if (href === '#citas' || href.endsWith('#citas')) {
      window.shantyTrack('cta_click', {
        cta_type: 'booking',
        link_placement: getPlacement(link)
      });
    }
  });

  var bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    var trackFormStart = function () {
      window.shantyTrack('lead_form_start', {
        form_name: 'appointment_request'
      });
      bookingForm.removeEventListener('input', trackFormStart);
      bookingForm.removeEventListener('change', trackFormStart);
    };

    bookingForm.addEventListener('input', trackFormStart);
    bookingForm.addEventListener('change', trackFormStart);
  }
})();


import React from 'react';

const StructuredData: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Task Express",
    "url": "https://taskexpress.in",
    "logo": "https://taskexpress.in/logo.png",
    "sameAs": [
      "https://www.facebook.com/taskexpress",
      "https://www.twitter.com/task_express",
      "https://www.instagram.com/taskexpress",
      "https://www.youtube.com/taskexpress"
    ],
    "description": "Task Express is a platform connecting users with verified blue-collar service professionals across India.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Park",
      "addressLocality": "Bangalore",
      "addressRegion": "KA",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-1800-123-4567",
      "contactType": "customer service",
      "availableLanguage": ["en", "hi", "ta", "te"]
    },
    "potentialAction": {
      "@type": "DownloadAction",
      "target": "https://play.google.com/store/apps/details?id=com.taskexpress.app"
    }
  };

  const serviceOffering = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Home Services",
    "provider": {
      "@type": "Organization",
      "name": "Task Express"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Service Categories",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plumbing Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electrical Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cleaning Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Carpentry Services"
          }
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "name": "Subscription",
      "price": "99",
      "priceCurrency": "INR",
      "description": "3-month subscription with zero convenience fees"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I book a service on Task Express?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Download the Task Express app from the Play Store, create an account, select the service you need, choose a time slot, and confirm your booking. A verified professional will be assigned to your request."
        }
      },
      {
        "@type": "Question",
        "name": "How are service professionals verified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All professionals undergo thorough background checks, skill assessments, and document verification before joining our platform. We also maintain a rating system to ensure continued quality service."
        }
      },
      {
        "@type": "Question",
        "name": "What is the subscription benefit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Subscribers pay zero convenience fees on all bookings and get priority access to professionals during high-demand periods. Our special offer gives you a 3-month subscription for just ₹99."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceOffering) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};

export default StructuredData;

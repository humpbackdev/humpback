report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Google_Homepage_0_document_0_phone.png",
        "test": "../bitmaps_test/20181002-234418/backstop_default_Google_Homepage_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Google_Homepage_0_document_0_phone.png",
        "label": "Google Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://www.google.com/?hl=en",
        "referenceUrl": "https://www.google.de/?hl=en",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00",
          "analysisTime": 121
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Google_Homepage_0_document_1_tablet.png",
        "test": "../bitmaps_test/20181002-234418/backstop_default_Google_Homepage_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Google_Homepage_0_document_1_tablet.png",
        "label": "Google Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://www.google.com/?hl=en",
        "referenceUrl": "https://www.google.de/?hl=en",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00",
          "analysisTime": 76
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Google_Homepage_0_document_2_laptop.png",
        "test": "../bitmaps_test/20181002-234418/backstop_default_Google_Homepage_0_document_2_laptop.png",
        "selector": "document",
        "fileName": "backstop_default_Google_Homepage_0_document_2_laptop.png",
        "label": "Google Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://www.google.com/?hl=en",
        "referenceUrl": "https://www.google.de/?hl=en",
        "expect": 0,
        "viewportLabel": "laptop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "backstop_default"
});
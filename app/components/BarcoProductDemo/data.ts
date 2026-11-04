const CDN = "/assets/images/barco";

export const demoData = {
  logo: `${CDN}/logo/barco.png`,
  tag: "Barco product demo",
  heading: "Request a\nBarco demo",
  highlightLast: 2,
  description:
    "Share your details, the products you're interested in and a time that suits you. We'll confirm the demo by email.",
  form: {
    // TODO: point this at your form handler. There is no /api route for it yet,
    // so submissions show the error message until one exists.
    endpoint: "/api/barco-demo",
    detailsLegend: "Your details",
    productsLegend: "Products you're interested in",
    availabilityLegend: "Meeting availability",
    locations: [
      "Dubai",
      "Abu Dhabi",
      "Sharjah",
      "Ajman",
      "Ras Al Khaimah",
      "Fujairah",
      "Umm Al Quwain",
      "Outside UAE",
    ],
    products: [
      "ClickShare Present (C-5, C-10)",
      "ClickShare Conference (CX-20, CX-30, CX-50)",
      "ClickShare Bar",
      "ClickShare Hub",
      "Not sure yet",
    ],
    times: [
      "9:00 – 10:00 am",
      "10:00 – 11:00 am",
      "11:00 am – 12:00 pm",
      "12:00 – 1:00 pm",
      "2:00 – 3:00 pm",
      "3:00 – 4:00 pm",
      "4:00 – 5:00 pm",
    ],
    hint: "Monday to Friday. We'll confirm the slot by email.",
    submitText: "Request demo",
    sendingText: "Sending...",
    productsError: 'Select at least one product, or "Not sure yet".',
    dateError: "Please pick a weekday from tomorrow onwards.",
    invalidText: "Please fill in every field, pick at least one product and choose a weekday.",
    errorText: "We could not send your request. Please try again in a moment.",
    successTitle: "Thanks, your request is in.",
    successText: "We'll confirm your demo slot by email.",
  },
};

export const footNote = "Barco and ClickShare are trademarks of Barco NV.";

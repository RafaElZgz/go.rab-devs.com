# RAB GO

## URL Shotener

### Made with Nuxt v2, Tailwind and Strapi v3

---

## Goals

- [x] Create a Shortened URL via the Home page form and store in the API.
- [x] Make the URL forwarding system .
- [X] Collect statistics from link visitors and save them in the API.
- [x] Make a funcional login system.
- [x] Create a Dashboard layout.
- [ ] Create in the Dashboard a section to manage the Shortened URLs.
- [ ] Create in the Dashboard a section to manage the aplication settings.
- [ ] Create in the Dashboard a section to show URL's statistics.

## Project details

- All the interface goes under '/app'
- Everybody can short a link, the statics of a link are only visible to the link creator, if any, or staff.
- The links are associated with the RAB Developments (Strapi User from users-permissions) account that creates them, if any.

## Requirements to fork/work on this project

- Front end:
  - Knowledge in:
    - Nuxt v2 basics
    - Tailwind CSS
    - HTML (obviously)
    - JSON and JS (for translations and other stuff)
- Back end:
  - Basic knowledge of Strapi v3 and having an operative API to connect to. You will need to modify your Strapi project to fit this project needs. I recommend reading [this guide](https://docs-v3.strapi.io/developer-docs/latest/guides/api-token.html#introduction). It is not mandatory to use Strapi, you can also use your own custom API as long as you modify the project code, so that it does the queries well.
  - Knowledge in:
    - JSON
    - REST API Calls ([Axios and @nuxtjs/strapi](https://docs-v3.strapi.io/developer-docs/latest/developer-resources/content-api/integrations/nuxt-js.html#create-a-nuxt-js-app))
    - JavaScript (very important) and know how to handle with TypeScript.

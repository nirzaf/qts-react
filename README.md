# Quadrate Tech Solutions

## Overview

Quadrate Tech Solutions is a leading software development company based in Sri Lanka. We specialize in providing innovative and customized software solutions to businesses of all sizes. Our mission is to empower businesses with cutting-edge technology solutions that drive growth and efficiency.

## Mission

Our mission is to deliver high-quality software solutions that meet the unique needs of our clients. We strive to exceed expectations by providing exceptional service and support.

## Vision

Our vision is to be the preferred technology partner for businesses worldwide. We aim to achieve this by continuously innovating and delivering solutions that add value to our clients' operations.

## Core Values

- **Innovation**: We embrace new ideas and technologies to stay ahead of the curve.
- **Excellence**: We are committed to delivering the highest quality solutions.
- **Integrity**: We conduct our business with honesty and transparency.
- **Customer Focus**: We prioritize our clients' needs and work tirelessly to meet them.
- **Collaboration**: We believe in the power of teamwork and collaboration.

## Services

Quadrate Tech Solutions offers a wide range of services to meet the diverse needs of our clients. Our services include:

- **Custom Software Development**: We build tailored software solutions that perfectly match your business needs.
- **Web Development**: We create responsive and user-friendly websites that enhance your online presence.
- **Mobile App Development**: We develop mobile applications that provide a seamless user experience on both iOS and Android platforms.
- **Cloud Solutions**: We offer scalable and secure cloud infrastructure for modern businesses.
- **Enterprise Applications**: We develop robust applications that streamline your business operations.
- **Business Email Services**: We provide business email solutions at competitive pricing, including Microsoft 365, Google Workspace, Zoho, and other services.
- **Automation Services**: We help streamline and automate business activities using tools like Power Automate or third-party services.
- **Digital Marketing**: We offer comprehensive digital marketing services including SEO, social media marketing, PPC advertising, conversion optimization, and reputation management.

## History and Achievements

Founded in 2009 and headquartered in Kandy, Sri Lanka, Quadrate Tech Solutions has established itself as a prominent player in the software development industry. Over the years, we have achieved several milestones:

- **2009**: Quadrate Tech Solutions was founded.
- **2012**: Launched our first custom software solution for a major client.
- **2015**: Expanded our services to include mobile app development.
- **2018**: Achieved ISO 9001 certification for quality management.
- **2020**: Partnered with leading cloud service providers to offer cloud solutions.
- **2022**: Reached a milestone of 100+ successful projects delivered.

## Contact Us

For more information about our services or to discuss your project requirements, please contact us:

- **Email**: info@quadrate.lk
- **Phone**: +94814242615
- **Address**: 19/2/9, Market Complex, Matale Road, Akurana, Kandy: 20850

## Setting up React with Vite and ESLint

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

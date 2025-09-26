# Quick Waitlist

## Getting Started

To run on local Quick Waitlist for your project, please follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/Raqibnur/quick-waitlist.git
   ```

2. Navigate to the project directory and install dependencies:

   ```sh
   cd quick-waitlist
   yarn
   ```

3. Configure environment variables:

   - Duplicate `.env.example` to `.env.local`:
     ```sh
     cp .env.example .env.local
     ```
   - Fill in the environment variables in `.env.local` with your Resend API Key and Audience ID:

     ```
      NEXT_PUBLIC_RESEND_API_KEY=<Resend API Key>
      NEXT_PUBLIC_AUDIENCE_ID=<Resend Audience ID>
      NEXT_PUBLIC_SITE_NAME=
      NEXT_PUBLIC_SITE_DESCRIPTION=
      NEXT_PUBLIC_DOMAIN=
      NEXT_PUBLIC_LOGO_UR=<Logo URL>
      NEXT_PUBLIC_FROM_EMAIL=

     ```

4. Start the development server:

   ```sh
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## Customizing Email Templates

![Quick Waitlist Cover](https://res.cloudinary.com/dyv1yduua/image/upload/v1733390826/CleanShot_2024-12-05_at_15.24.30_vbzyi5.png)

To modify the email templates, navigate to `/components/EmailTemplate.tsx` For additional information, please refer to the [React Email Documentation](https://react.email/docs/introduction)


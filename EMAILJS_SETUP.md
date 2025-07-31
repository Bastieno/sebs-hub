# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to enable the contact form to send emails to <sebastienohub@gmail.com>.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail is recommended)
4. Follow the setup instructions to connect your email account
5. Note down the **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```text
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Inquiry Type: {{inquiry_type}}

Message:
{{message}}

---
This message was sent from the Sebs Hub contact form.
```

1. Save the template and note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" > "General" in your dashboard
2. Find your **Public Key** (also called User ID)

## Step 5: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:

   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and replace the placeholder values:

   ```text
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

## Step 6: Test the Setup

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Navigate to the contact form on your website
3. Fill out and submit the form
4. Check <sebastienohub@gmail.com> for the test email

## Template Variables Used

The contact form sends these variables to your EmailJS template:

- `{{from_name}}` - The sender's name
- `{{from_email}}` - The sender's email address
- `{{phone}}` - The sender's phone number (or "Not provided")
- `{{inquiry_type}}` - The type of inquiry selected
- `{{message}}` - The message content
- `{{to_email}}` - Always set to "<sebastienohub@gmail.com>"

## Troubleshooting

### Form not sending emails

1. Check that all environment variables are set correctly
2. Verify your EmailJS service is active
3. Check the browser console for error messages
4. Ensure your EmailJS account hasn't exceeded free tier limits

### Emails going to spam

1. Add your domain to EmailJS allowed origins
2. Consider using a custom domain email instead of Gmail
3. Set up SPF/DKIM records if using a custom domain

### Rate limiting

- EmailJS free tier allows 200 emails/month
- Consider upgrading if you expect high volume

## Security Notes

- Environment variables starting with `NEXT_PUBLIC_` are exposed to the browser
- EmailJS public keys are meant to be public, so this is safe
- Never put private API keys in `NEXT_PUBLIC_` variables
- Consider implementing additional spam protection for production use

## Alternative Email Solutions

If you prefer server-side email handling, consider:

- Nodemailer with SMTP
- SendGrid API
- AWS SES
- Resend
- Postmark

These would require API routes in your Next.js application instead of client-side EmailJS.

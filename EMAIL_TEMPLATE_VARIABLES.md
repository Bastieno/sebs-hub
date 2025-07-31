# Email Template Variables Mapping

This document shows how the contact form data maps to the email template variables.

## Variables Available in EmailJS Template

| Variable | Source | Description | Example |
|----------|--------|-------------|---------|
| `{{from_name}}` | `data.name` | User's full name | "John Doe" |
| `{{from_email}}` | `data.email` | User's email address | "<john@example.com>" |
| `{{phone}}` | `data.phone \|\| 'Not provided'` | User's phone number | "+234 123 456 7890" or "Not provided" |
| `{{inquiry_type}}` | `data.inquiryType` | Type of inquiry selected | "booking", "membership", "event", "partnership", "other" |
| `{{message}}` | `data.message` | User's message content | "I would like to book a workspace..." |
| `{{to_email}}` | Static | Always set to destination email | "<sebastienohub@gmail.com>" |
| `{{time}}` | `new Date().toLocaleString()` | Timestamp when form was submitted | "Friday, January 31, 2025 at 12:39 PM WAT" |

## Inquiry Type Values

The `{{inquiry_type}}` variable can have these values:

- `booking` - Booking Inquiry
- `membership` - Membership Information  
- `event` - Event Hosting
- `partnership` - Partnership/Collaboration
- `other` - Other

## Enhanced Email Template Features

The enhanced email template (`enhanced_email_template.html`) includes:

1. **Professional Header** - Gradient background with Sebs Hub branding
2. **Structured Contact Information** - Clean table layout with all contact details
3. **Highlighted Message Section** - Bordered message area for easy reading
4. **Quick Action Buttons** - Direct links to reply via email or WhatsApp
5. **Footer with Timestamp** - Shows when the message was received
6. **Mobile-Responsive Design** - Works well on all devices
7. **Visual Icons** - Emojis for better visual hierarchy

## Usage Instructions

1. Copy the HTML content from `enhanced_email_template.html`
2. Paste it into your EmailJS template editor
3. The variables will be automatically replaced when emails are sent
4. Test the template by submitting the contact form

## Template Customization

You can customize the template by:

- Changing colors in the CSS styles
- Modifying the layout structure
- Adding or removing sections
- Updating the branding elements
- Adjusting the responsive breakpoints

All variables marked with `{{}}` will be automatically replaced by EmailJS with the actual form data.

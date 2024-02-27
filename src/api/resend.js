import { Resend } from 'resend';

const resend = new Resend('process.env.REACT_APP_RESEND_API_KEY');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'hongppa324@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});

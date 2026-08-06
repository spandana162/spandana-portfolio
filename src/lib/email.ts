import emailjs from "@emailjs/browser";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: ContactFormData) => {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  );
};
import React, { useState } from 'react';
import {
  Copy,
  Check,
  MapPin,
  Send,
  ArrowUpRight,
  Github,
  Linkedin,
  ShieldCheck,
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { profileData } from '../../data/profile';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);

      setCopiedEmail(true);

      setTimeout(() => {
        setCopiedEmail(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy email:', error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    /*
     * Build the email body.
     *
     * encodeURIComponent() is important here because names,
     * subjects, and messages can contain spaces, symbols,
     * line breaks, etc.
     */
    const emailBody = [
      `Hello Tegar,`,
      '',
      `You have received a new message from your portfolio website.`,
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      `Message:`,
      message,
      '',
      '---',
      `Sent from: ${window.location.origin}`,
    ].join('\n');

    const mailtoUrl =
      `mailto:${profileData.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(emailBody)}`;

    /*
     * Open the user's default email application.
     */
    window.location.href = mailtoUrl;

    /*
     * Show success state in the UI.
     *
     * Note: mailto only opens the email application.
     * We cannot know from the browser whether the user
     * actually pressed "Send".
     */
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#0c0c0d] text-white transition-colors duration-300 relative border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="07 / CORRESPONDENCE"
          title={
            <>
              Initiate direct dialogue for{' '}
              <span className="text-stroke-accent">engineering</span> &{' '}
              <span className="text-stroke">architecture</span> roles.
            </>
          }
          description="Available for senior software engineering opportunities, enterprise backend consulting, and full-stack system architecture roles."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* ==================================================
              DIRECT CONTACT DOSSIER
          ================================================== */}

          <div className="lg:col-span-5 space-y-6">

            {/* Direct Email */}

            <div className="p-8 sm:p-10 bg-[#141416] text-white border border-white/10 shadow-2xl space-y-6">

              <div>
                <span className="font-mono text-xs uppercase font-bold text-[#00ff66] block mb-2 tracking-[0.2em]">
                  PRIMARY CORRESPONDENCE
                </span>

                <h3 className="font-syne text-3xl font-extrabold uppercase text-white">
                  Direct Email
                </h3>

                <p className="text-white/70 text-sm mt-2 font-sans font-light">
                  I typically respond within a few hours for senior engineering
                  and architectural inquiries.
                </p>
              </div>

              <div className="p-4 bg-[#0c0c0d] border border-white/10 flex items-center justify-between gap-3 font-mono text-sm">

                <span className="text-[#00ff66] font-bold truncate">
                  {profileData.email}
                </span>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 bg-zinc-800 hover:bg-[#00ff66] hover:text-[#0c0c0d] text-white transition-colors shrink-0 cursor-pointer border border-white/10"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-[#0c0c0d]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="space-y-3 pt-4 text-xs font-mono text-white/60 border-t border-white/10">

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#00ff66]" />
                  <span>
                    Batam, Indonesia (Singapore Time Zone / SGT)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00ff66]" />
                  <span>
                    Singapore Work Experience & Regional Projects
                  </span>
                </div>

              </div>
            </div>

            {/* ==================================================
                PROFESSIONAL NETWORKS
            ================================================== */}

            <div className="p-8 bg-[#141416] border border-white/10 space-y-4">

              <span className="font-mono text-xs uppercase font-bold text-[#00ff66] tracking-[0.2em] block mb-2">
                PROFESSIONAL DIRECTORY
              </span>

              {/* LinkedIn */}

              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#0c0c0d] border border-white/10 flex items-center justify-between hover:border-[#00ff66] transition-colors group"
              >
                <div className="flex items-center gap-3">

                  <div className="p-2 bg-zinc-800 text-[#00ff66]">
                    <Linkedin className="w-4 h-4" />
                  </div>

                  <div>
                    <h4 className="font-syne text-base font-extrabold uppercase text-white">
                      LinkedIn Profile
                    </h4>

                    <p className="font-mono text-xs text-white/50">
                      Professional record & recommendations
                    </p>
                  </div>

                </div>

                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#00ff66] transition-colors" />
              </a>

              {/* GitHub */}

              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#0c0c0d] border border-white/10 flex items-center justify-between hover:border-[#00ff66] transition-colors group"
              >
                <div className="flex items-center gap-3">

                  <div className="p-2 bg-zinc-800 text-[#00ff66]">
                    <Github className="w-4 h-4" />
                  </div>

                  <div>
                    <h4 className="font-syne text-base font-extrabold uppercase text-white">
                      GitHub Repositories
                    </h4>

                    <p className="font-mono text-xs text-white/50">
                      Source code & technical experiments
                    </p>
                  </div>

                </div>

                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#00ff66] transition-colors" />
              </a>

            </div>
          </div>

          {/* ==================================================
              CONTACT FORM
          ================================================== */}

          <div className="lg:col-span-7">

            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-12 bg-[#141416] border border-white/10 space-y-6"
            >

              <h3 className="font-syne text-3xl font-extrabold uppercase text-white mb-2">
                Send a Direct Dispatch
              </h3>

              {/* ==================================================
                  SUCCESS MESSAGE
              ================================================== */}

              {submitted ? (
                <div className="p-8 bg-[#0c0c0d] text-white border border-[#00ff66] space-y-2 animate-in fade-in duration-200">

                  <div className="flex items-center gap-2 font-mono font-bold text-sm text-[#00ff66]">
                    <Check className="w-5 h-5" />
                    DISPATCH READY!
                  </div>

                  <p className="text-sm font-sans font-light text-white/80">
                    Your email application should now be open with the message
                    prepared. Review the message and press Send to complete
                    the transmission.
                  </p>

                </div>
              ) : (
                <>
                  {/* ==================================================
                      NAME + EMAIL
                  ================================================== */}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    <div className="space-y-2">
                      <label
                        htmlFor="contact-name"
                        className="font-mono text-xs uppercase tracking-wider font-bold text-[#00ff66]"
                      >
                        Your Name
                      </label>

                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Rivera"
                        className="w-full px-4 py-3.5 text-sm font-sans bg-[#0c0c0d] border border-white/20 text-white focus:outline-none focus:border-[#00ff66]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="contact-email"
                        className="font-mono text-xs uppercase tracking-wider font-bold text-[#00ff66]"
                      >
                        Your Email
                      </label>

                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3.5 text-sm font-sans bg-[#0c0c0d] border border-white/20 text-white focus:outline-none focus:border-[#00ff66]"
                      />
                    </div>

                  </div>

                  {/* ==================================================
                      SUBJECT
                  ================================================== */}

                  <div className="space-y-2">

                    <label
                      htmlFor="contact-subject"
                      className="font-mono text-xs uppercase tracking-wider font-bold text-[#00ff66]"
                    >
                      Subject / Purpose
                    </label>

                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Senior Software Developer Role / Enterprise Architecture"
                      className="w-full px-4 py-3.5 text-sm font-sans bg-[#0c0c0d] border border-white/20 text-white focus:outline-none focus:border-[#00ff66]"
                    />

                  </div>

                  {/* ==================================================
                      MESSAGE
                  ================================================== */}

                  <div className="space-y-2">

                    <label
                      htmlFor="contact-message"
                      className="font-mono text-xs uppercase tracking-wider font-bold text-[#00ff66]"
                    >
                      Message Details
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share scope, engineering timeline, or contract details..."
                      className="w-full px-4 py-3.5 text-sm font-sans bg-[#0c0c0d] border border-white/20 text-white focus:outline-none focus:border-[#00ff66] resize-y"
                    />

                  </div>

                  {/* ==================================================
                      SUBMIT
                  ================================================== */}

                  <button
                    type="submit"
                    className="w-full py-4 px-8 bg-[#00ff66] text-[#0c0c0d] font-syne font-extrabold text-xs tracking-widest uppercase hover:bg-white transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    Transmit Dispatch Message
                    <Send className="w-4 h-4" />
                  </button>
                </>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
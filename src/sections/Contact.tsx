import { motion } from 'framer-motion';
import { Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Let's Build Together</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-16 mx-auto max-w-xl"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" name="name" id="name" placeholder="Your Name" className="block w-full rounded-md border-0 bg-secondary px-4 py-3 text-foreground ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" placeholder="Your Email" className="block w-full rounded-md border-0 bg-secondary px-4 py-3 text-foreground ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea name="message" id="message" rows={4} placeholder="Your Message" className="block w-full rounded-md border-0 bg-secondary px-4 py-3 text-foreground ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary"></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
              >
                Send Message
                <Send className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </button>
            </div>
          </form>
        </motion.div>

        <div className="mt-20 text-center">
            <p className="text-muted-foreground">Find me on</p>
            <div className="mt-4 flex justify-center gap-6">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></a>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Alex Doe. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

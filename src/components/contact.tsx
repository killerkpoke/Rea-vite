import { motion } from "framer-motion";
export function Contact() {
    return (
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
        <motion.div
          className="container px-4 md:px-6"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0, 0.3, 0.6, 1],
          }}
        >
          <div className="mx-auto grid max-w-3xl items-center gap-4 text-center lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch
              </h2>
              <div className="text-gray-500 dark:text-gray-400 pb-6">
                <span>
                  Have a question or want to work together? Send me a message to
                </span>
                <p className="font-bold">balazs.david.kohalmi@gmail.com</p>
                <span>
                  or send me a DM on{" "}
                  <a
                    className="underline cursor-pointer"
                    target="_blank"
                    href="https://www.linkedin.com/in/balazs-kohalmi-kpoke/"
                  >
                    Linkedin
                  </a>{" "}
                  and I'll get back to you as soon as I can.
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    );
}
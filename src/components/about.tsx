import { motion } from "framer-motion";
import {
  LinkedInIcon,
  GitHubIcon,
  YouTubeIcon,
} from "./icons/social-media-icon";
export function About() {
  const social = [
    {
      media: "Linkedin",
      mediaLogo: LinkedInIcon,
      mediaUrl: "https://www.linkedin.com/in/balazs-kohalmi-kpoke/",
    },
    {
      media: "GitHub",
      mediaLogo: GitHubIcon,
      mediaUrl: "https://github.com/killerkpoke",
    },
    {
      media: "Youtube",
      mediaLogo: YouTubeIcon,
      mediaUrl: "https://www.youtube.com/channel/UCSRmUiQ8lrwLjZIvgg1A6Zw",
    },
  ];
  return (
    <section id="home" className="py-12 lg:py-24 xl:py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 5,
          ease: [0, 0.3, 0.6, 1],
          scale: {
            type: "spring",
            damping: 4,
            stiffness: 15,
            restDelta: 0.001,
          },
        }}
        className="container px-4 md:px-6"
      >
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8 xl:gap-12">
          <div className="flex flex-col gap-2 lg:col-span-2">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Hi, I'm David
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I'm a developer with a passion for creating beautiful and
                intuitive software.
              </p>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Working with modern web technologies in the frontend like React,
                Vue or other frameworks to build engaging web experiences.
              </p>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Creating robust and stable backend with Django, ASP.NET, Node
              </p>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Maintaning these infrastructures with well-known technologies
                like Docker, GitHub Actions, CI/CD pipelines
              </p>
              <div className="flex">
                {social.map((item, index: number) => (
                  <motion.div
                    key={index}
                    transition={{
                      duration: 0.2,
                      easings: ["easeIn", "easeOut"],
                    }}
                    whileHover={{
                      scale: 1.2,
                    }}
                  >
                    <a
                      className="flex cursor-pointer p-4"
                      href={item.mediaUrl}
                      target="_blank"
                    >
                      {item.mediaLogo()}
                      <p className="ml-2">{item.media}</p>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <motion.div
            className="mx-auto flex items-center justify-center max-w-sm rounded-xl overflow-hidden lg:max-w-none"
            whileHover={{
              borderRadius: "100%",
              scale: 0.8,
            }}
          >
            <img
              alt="Profile picture"
              className="aspect-square rounded-xl object-cover"
              height="400"
              src="itsame.png"
              width="400"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

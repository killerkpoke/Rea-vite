import { CardContent, CardHeader, Card } from "@/components/ui/card";
import { IProject } from "@/types/Project";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const URL = "projects.json";

export function Project() {
  const [projects, setProjects] = useState<IProject[] | []>([]);

  const getProjects = async () => {
    const response = await fetch(`${URL}`);
    const project = (await response.json()) as IProject[];
    setProjects(project);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 border-t">
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
        <div className="grid max-w-5xl mx-auto items-center gap-4 text-center lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
              My Projects
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Check out some of my recent work
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {projects &&
              projects.map((p: IProject, index: number) => (
                <motion.div
                  key={index}
                  initial={{ scale: 1, rotate: 0 }}
                  whileHover={{
                    scale: [1, 1.2, 1.2, 1, 1],
                    rotate: [0, -15, 0, 15, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.1,
                    times: [0, 0.2, 0.5, 0.8, 1],
                    easings: ["easeIn", "easeOut"],
                  }}
                >
                  <Card className="cursor-pointer">
                    <a href={p.url} target="_blank">
                      <CardContent className="p-4">
                        <img
                          key={index}
                          alt="Thumbnail"
                          className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                          height="150"
                          src={p.img}
                          width="300"
                        />
                      </CardContent>
                      <CardHeader className="p-4">
                        <h3 className="text-lg font-bold">{p.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {p.description}
                        </p>
                      </CardHeader>
                    </a>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

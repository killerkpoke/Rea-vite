import { useEffect, useState } from "react";
import { SkillCard } from "./skill-card";
import { Skill } from "@/types/Skill";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { motion } from "framer-motion";
const URL = "skills.json";

export function Skills() {
  const [skill, setSkill] = useState<Skill | null>(null);
  const getSkills = () => {
    return fetch(URL).then((result) => result.json());
  };
  useEffect(() => {
    getSkills().then((data) => setSkill(data));
  }, []);
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 border-t">
      <motion.div
        className="space-y-2 place-self-center"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0, 0.3, 0.6, 1],
        }}
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none mb-12">
          Skills & Expertise
        </h2>
        <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="w-full ">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Frontend skills</AccordionTrigger>
                <AccordionContent>
                  <SkillCard {...skill?.frontend} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Backend skills</AccordionTrigger>
                <AccordionContent>
                  <SkillCard {...skill?.backend} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Soft skills</AccordionTrigger>
                <AccordionContent>
                  <SkillCard {...skill?.softskill} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

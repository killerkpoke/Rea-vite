import { MetaCategories } from "@/types/Skill";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
interface MetaType {
  category: string;
  metalist: string[];
}
export const SkillCard = (props: MetaCategories) => {
  const data: MetaType[] = [];
  Object.entries(props).map((key) => {
    const record: MetaType = {
      category: "",
      metalist: [],
    };
    record.category = key[1].title;
    key[1].data.map((str: string) => record.metalist.push(str + ", "));
    data.push(record);
  });
  return (
    <>
      {data?.map((item, index) => (
        <motion.div
          className="max-w-min"
          key={index}
          whileHover={{ scale: 1.2 }}
        >
          <Card className="scale-75 min-w-80 bg-gray-100 dark:bg-gray-900">
            <CardContent>
              <h2 className=" text-2xl font-semibold m-4 ">{item.category}</h2>
              {item.metalist !== undefined && item.metalist?.length >= 1 && (
                <motion.div className="text-xl">{item.metalist}</motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </>
  );
};

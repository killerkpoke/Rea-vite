export interface Skill {
  frontend: MetaCategories;
  backend: MetaCategories;
  softskill: MetaCategories; 
}
export interface MetaCategories {
  language?: MetaData;
  framework?: MetaData;
  metaframework?: MetaData;
  library?: MetaData;
  devops?: MetaData;
  gamedevelop?: MetaData;
  database?: MetaData;
}
export interface MetaData {
  title: string;
  data: string[];
}

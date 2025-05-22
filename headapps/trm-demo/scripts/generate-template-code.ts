import { Config, generateModels } from 'sitecore-trm-generator';

const config: Config = {
  includePaths: [
    '/sitecore/templates/Foundation/Experience Accelerator/Presentation/Style',
    '/sitecore/templates/Foundation/JSS Experience Accelerator',
    '/sitecore/templates/Feature/JSS Experience Accelerator',
    '/sitecore/templates/Project/robert',
  ],
  outputPath: 'C:\\Projects\\sitecore-trm-example\\headapps\\trm-demo\\src\\.generated\\Models.ts',
  introspectionPath:
    'C:\\Projects\\sitecore-trm-example\\headapps\\trm-demo\\src\\temp\\GraphQLIntrospectionResult.json',
};

generateModels(config);

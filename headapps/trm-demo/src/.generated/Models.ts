import { ImageField, LinkField, RichTextField, TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import {
  CheckboxField,
  ContentItem,
  IContentItem,
  IntegerField,
  LookupField,
  MultilistField,
  NameValueListField,
  NumberField,
  RawItem,
} from 'sitecore-trm';

type TemplateType = new (item: RawItem) => IContentItem;

/*
    Template Name: C___SupportedLanguages
    Template ID: 615A59CCA2754E578B48A57F0A703F84
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Base/Sites/_SupportedLanguages
*/
export interface I_SupportedLanguagesItem extends IContentItem {}

/*
    Template Name: C___SolutionTemplateName
    Template ID: EE5BEC5A609F4C64896018D6CAE7F890
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Base/Solution
*/
export interface I_SolutionTemplateNameItem extends IContentItem {}

/*
    Template Name: C___SolutionTemplateDescription
    Template ID: 77B1399F5F304643A05459BBB1C7C62C
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Base/Solution
*/
export interface I_SolutionTemplateDescriptionItem extends IContentItem {}

/*
    Template Name: C___SolutionTemplateContent
    Template ID: 7594748576244588BDAC812B865141DD
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Base/Solution
*/
export interface I_SolutionTemplateContentItem extends IContentItem {
  content: TextField;
}

/*
    Template Name: C___SiteTemplate
    Template ID: B99C3F5064784CFE98FD82398044DC84
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Base/Sites/_Site Template
*/
export interface I_SiteTemplateItem extends IContentItem {
  siteTemplate: LookupField;
}

/*
    Template Name: C___Name_0345fd2f95094dc7b0f56c73a9b6cd8d
    Template ID: 0345FD2F95094DC7B0F56C73A9B6CD8D
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Base/Sites/_Name
*/
export interface I_NameItem extends IContentItem {}

/*
    Template Name: C___Description
    Template ID: 79CBA7D0EE474FC6911C9BCCAFCAAC2E
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Base/Sites/_Description
*/
export interface I_DescriptionItem extends IContentItem {}

/*
    Template Name: C___BaseJSSTenant
    Template ID: 053E9155399342F391825854DC5355B3
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Base/_Base JSS Tenant
*/
export interface I_BaseJSSTenantItem extends IContentItem {
  branchesFolder: LookupField;
  placeholderSettingsFolder: LookupField;
  renderingsFolder: LookupField;
  settingsFolder: LookupField;
}

/*
    Template Name: VariantDefinition_4d50cdaec2d94de8b0808f992bfb1b55
    Template ID: 4D50CDAEC2D94DE8B0808F992BFB1B55
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Headless Variants/Variant Definition
*/
export interface I_VariantDefinitionItem extends IContentItem {
  allowedInTemplates: MultilistField;
  linkField: TextField;
}

/*
    Template Name: Title_a82e893105754175917de904ef7e6dbe
    Template ID: A82E893105754175917DE904EF7E6DBE
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Page Content/Rendering Parameters/Title
*/
export interface I_TitleItem extends IContentItem {
  additionalParameters: NameValueListField;
  cSSStyles: TextField;
  dynamicPlaceholderId: TextField;
  fieldNames: LookupField;
  gridParameters: TextField;
  renderingIdentifier: TextField;
  styles: TextField;
}

/*
    Template Name: TextFolder_b762d56787f5493cbb480c455d834457
    Template ID: B762D56787F5493CBB480C455D834457
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Page Content/Text Folder
*/
export interface I_TextFolderItem extends IContentItem {}

/*
    Template Name: Text
    Template ID: 0A7AA3735ED14E9B967822D3C5FAF6DF
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Page Content/Text
*/
export interface I_TextItem extends IContentItem {
  text: RichTextField;
}

/*
    Template Name: Styles
    Template ID: C6DC739315BB4CD7B798AB63E77EBAC4
    Path: /sitecore/templates/Foundation/Experience Accelerator/Presentation/Styles
*/
export interface I_StylesItem extends IContentItem {
  allowEmpty: CheckboxField;
  type: TextField;
}

/*
    Template Name: Style
    Template ID: 6B8AABEFD65046E097D0C0B04F7F016B
    Path: /sitecore/templates/Foundation/Experience Accelerator/Presentation/Style
*/
export interface I_StyleItem extends IContentItem {
  allowedRenderings: MultilistField;
  icon: TextField;
  isVerifiedStyle: CheckboxField;
  value: TextField;
}

/*
    Template Name: SolutionTemplate
    Template ID: 1B2DFD3BF2F24F40A75CF6C2490919C4
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Solution
*/
export interface I_SolutionTemplateItem extends IContentItem {
  content: TextField;
  enabled: CheckboxField;
  siteModules: MultilistField;
  tenantModules: MultilistField;
}

/*
    Template Name: SitemapSettings_c71d856635c849b7a84d9d176e9cbd05
    Template ID: C71D856635C849B7A84D9D176E9CBD05
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/SiteMetadata/Sitemap Settings
*/
export interface I_SitemapSettingsItem extends IContentItem {
  cacheExpiration: NumberField;
  cacheType: LookupField;
  changefreq: CheckboxField;
  crawler: TextField;
  generateAlternateLinks: CheckboxField;
  generateSitemapMediaItems: CheckboxField;
  hrefLang: LookupField;
  includeXdefault: CheckboxField;
  lastmod: CheckboxField;
  linkProvider: TextField;
  priority: CheckboxField;
  refreshThreshold: NumberField;
  sitemapIndexThreshold: NumberField;
}

/*
    Template Name: Site_e46f3af239fa4866a1577017c4b2a40c
    Template ID: E46F3AF239FA4866A1577017C4B2A40C
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Site
*/
export interface I_SiteItem extends IContentItem {
  database: TextField;
  environment: TextField;
  errorPageUrl: TextField;
  externalPort: IntegerField;
  fieldLanguageFallback: CheckboxField;
  filteredItemsCacheSize: IntegerField;
  generateThumbnails: CheckboxField;
  hostName: TextField;
  itemLanguageFallback: CheckboxField;
  itemNotFoundUrl: TextField;
  languageEmbedding: CheckboxField;
  linkProvider: TextField;
  port: IntegerField;
  pOS: NameValueListField;
  project: TextField;
  renderingHost: TextField;
  scheme: TextField;
  siteName: TextField;
  startItem: LookupField;
  sxaLinkable: CheckboxField;
  targetHostName: TextField;
  thumbnailsRootPath: LookupField;
  virtualFolder: TextField;
}

/*
    Template Name: SharedSitesSettings_c14bf746030f4e598594395f6d299e61
    Template ID: C14BF746030F4E598594395F6D299E61
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Shared Sites Settings
*/
export interface I_SharedSitesSettingsItem extends IContentItem {
  delegatedAreas: MultilistField;
}

/*
    Template Name: SettingsFolder
    Template ID: B4D86F9BE9174D68978E741361332174
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Folders/Settings Folder
*/
export interface I_SettingsFolderItem extends IContentItem {}

/*
    Template Name: SXAJSSLayout
    Template ID: E4E1150804A44B0BA2635201F811C9CD
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Presentation/SXA JSS Layout
*/
export interface I_SXAJSSLayoutItem extends IContentItem {
  area: TextField;
  model: TextField;
}

/*
    Template Name: RowSplitter
    Template ID: DB88EFA8E0154B96BA0E348D8B510563
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Page Structure/Rendering Parameters/RowSplitter
*/
export interface I_RowSplitterItem extends IContentItem {
  additionalParameters: NameValueListField;
  cSSStyles: TextField;
  dynamicPlaceholderId: TextField;
  enabledPlaceholders: TextField;
  fieldNames: LookupField;
  gridParameters: TextField;
  renderingIdentifier: TextField;
  splitterSize: NumberField;
  styles: TextField;
  styles1: TextField;
  styles2: TextField;
  styles3: TextField;
  styles4: TextField;
  styles5: TextField;
  styles6: TextField;
  styles7: TextField;
  styles8: TextField;
}

/*
    Template Name: RichText_0f3b73366112418c8bbab0526f3887ce
    Template ID: 0F3B73366112418C8BBAB0526F3887CE
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Page Content/Rendering Parameters/Rich Text
*/
export interface I_RichTextItem extends IContentItem {
  additionalParameters: NameValueListField;
  cSSStyles: TextField;
  dynamicPlaceholderId: TextField;
  fieldNames: LookupField;
  gridParameters: TextField;
  renderingIdentifier: TextField;
  styles: TextField;
}

/*
    Template Name: RenderingHost
    Template ID: BC71D4423E4F46BA887C746E54F9BB83
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/RenderingHost
*/
export interface I_RenderingHostItem extends IContentItem {
  appName: TextField;
  serverSideRenderingEngineConfigUrl: TextField;
}

/*
    Template Name: RenderingFolder_840d4a46550349ecbf9dbd090946c63d
    Template ID: 840D4A46550349ECBF9DBD090946C63D
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Folders/Rendering Folder
*/
export interface I_RenderingFolderItem extends IContentItem {}

/*
    Template Name: PromoFolder
    Template ID: 8FE7F8DCCB5D42C299F876608C243F10
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Page Content/Promo Folder
*/
export interface I_PromoFolderItem extends IContentItem {}

/*
    Template Name: Promo_881869ca7f5845ea8b34ad1bfd3551a8
    Template ID: 881869CA7F5845EA8B34AD1BFD3551A8
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Page Content/Rendering Parameters/Promo
*/
export interface I_PromoItem extends IContentItem {
  additionalParameters: NameValueListField;
  cSSStyles: TextField;
  dynamicPlaceholderId: TextField;
  fieldNames: LookupField;
  gridParameters: TextField;
  renderingIdentifier: TextField;
  styles: TextField;
}

/*
    Template Name: Promo_dfed4457d760457abec1c0dccdc44381
    Template ID: DFED4457D760457ABEC1C0DCCDC44381
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Page Content/Promo
*/
export interface I_Promo1Item extends IContentItem {
  promoIcon: ImageField;
  promoIcon2: ImageField;
  promoLink: LinkField;
  promoText: RichTextField;
  promoText2: RichTextField;
  promoText3: RichTextField;
}

/*
    Template Name: Presentation_0a70fa7389234a6eabf34134f25f3221
    Template ID: 0A70FA7389234A6EABF34134F25F3221
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Presentation/Presentation
*/
export interface I_PresentationItem extends IContentItem {}

/*
    Template Name: PreDeleteValidationStep_edf1fa4206c44703ab1af23495bc6d8f
    Template ID: EDF1FA4206C44703AB1AF23495BC6D8F
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Tenant/PreDeleteValidationStep
*/
export interface I_PreDeleteValidationStepItem extends IContentItem {
  validationScript: MultilistField;
}

/*
    Template Name: PreDeleteValidationStep_408fd8ab1667440ba6051370ddf0a51f
    Template ID: 408FD8AB1667440BA6051370DDF0A51F
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Site/PreDeleteValidationStep
*/
export interface I_PreDeleteValidationStep1Item extends IContentItem {
  validationScript: MultilistField;
}

/*
    Template Name: PreDeleteStep
    Template ID: ADB136512EB9494FADA00DFDA0B2EBBF
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Tenant/PreDeleteStep
*/
export interface I_PreDeleteStepItem extends IContentItem {
  script: MultilistField;
}

/*
    Template Name: PreDeleteStep_52510f549ec5464cb075ef44b5c2f96b
    Template ID: 52510F549EC5464CB075EF44B5C2F96B
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Site/PreDeleteStep
*/
export interface I_PreDeleteStep1Item extends IContentItem {
  script: MultilistField;
}

/*
    Template Name: PostSetupStep
    Template ID: 0C6028932BE94020912D56AF21DEFF73
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Tenant/PostSetupStep
*/
export interface I_PostSetupStepItem extends IContentItem {
  script: MultilistField;
}

/*
    Template Name: PostSetupStep_8ff2febff6d2461d9ed38b0cb5d9d86f
    Template ID: 8FF2FEBFF6D2461D9ED38B0CB5D9D86F
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Site/PostSetupStep
*/
export interface I_PostSetupStep1Item extends IContentItem {
  script: MultilistField;
}

/*
    Template Name: PostDeleteStep_78d6ec9b66e34763987003cf314ee37a
    Template ID: 78D6EC9B66E34763987003CF314EE37A
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Tenant/PostDeleteStep
*/
export interface I_PostDeleteStepItem extends IContentItem {
  script: MultilistField;
}

/*
    Template Name: PostDeleteStep_b20857895385413883f096f3767cb156
    Template ID: B20857895385413883F096F3767CB156
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Site/PostDeleteStep
*/
export interface I_PostDeleteStep1Item extends IContentItem {
  script: MultilistField;
}

/*
    Template Name: PlaceholderSettingsFolder_3d281bf8533646869dd6ab4ab5b3fd5d
    Template ID: 3D281BF8533646869DD6AB4AB5B3FD5D
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Folders/Placeholder Settings Folder
*/
export interface I_PlaceholderSettingsFolderItem extends IContentItem {}

/*
    Template Name: PlaceholderSettingsFolder_52288e3978304694b62d32a54c6ef7ba
    Template ID: 52288E3978304694B62D32A54C6EF7BA
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Placeholder Settings/Placeholder Settings Folder
*/
export interface I_PlaceholderSettingsFolder1Item extends IContentItem {
  templateForCreation: LookupField;
}

/*
    Template Name: Placeholder_d2a6884c04d54089a64ed27ca9d68d4c
    Template ID: D2A6884C04D54089A64ED27CA9D68D4C
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Placeholder Settings/Placeholder
*/
export interface I_PlaceholderItem extends IContentItem {
  allowedControls: MultilistField;
  placeholderKey: TextField;
}

/*
    Template Name: PartialDesigns_1d39aeca499c452ca7ae26e55bb4a0d5
    Template ID: 1D39AECA499C452CA7AE26E55BB4A0D5
    Path: /sitecore/templates/Project/robert/Partial Designs
*/
export interface I_PartialDesignsItem extends IContentItem {}

/*
    Template Name: C__PartialDesigns_79c9fa015f6a48b2b45905bbaa826a9d
    Template ID: 79C9FA015F6A48B2B45905BBAA826A9D
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Presentation/Partial Designs
*/
export interface I_PartialDesigns1Item extends IContentItem {}

/*
    Template Name: PartialDesignFolder_2875566679e2460e8db9dedab590c973
    Template ID: 2875566679E2460E8DB9DEDAB590C973
    Path: /sitecore/templates/Project/robert/Partial Design Folder
*/
export interface I_PartialDesignFolderItem extends IContentItem {}

/*
    Template Name: C__PartialDesignFolder_25f01f50553444f9b1babcbb60b2d13d
    Template ID: 25F01F50553444F9B1BABCBB60B2D13D
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Presentation/Folders/Partial Design Folder
*/
export interface I_PartialDesignFolder1Item extends IContentItem {}

/*
    Template Name: PartialDesign_fd2059fd60434dfe8c04e2437ce87634
    Template ID: FD2059FD60434DFE8C04E2437CE87634
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Presentation/Partial Design
*/
export interface I_PartialDesignItem extends IContentItem {
  basePartialDesign: LookupField;
  signature: TextField;
}

/*
    Template Name: PageDesigns_b7474c7eeaee45c68652b94530a58187
    Template ID: B7474C7EEAEE45C68652B94530A58187
    Path: /sitecore/templates/Project/robert/Page Designs
*/
export interface I_PageDesignsItem extends IContentItem {
  designRules: TextField;
  templatesMapping: TextField;
}

/*
    Template Name: C__PageDesigns_daaf41fd96db4892be99f62f16d036c4
    Template ID: DAAF41FD96DB4892BE99F62F16D036C4
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Presentation/Page Designs
*/
export interface I_PageDesigns1Item extends IContentItem {
  designRules: TextField;
  templatesMapping: TextField;
}

/*
    Template Name: PageDesignFolder_272eb80fc60c4d3d99693aa13d6bb6ac
    Template ID: 272EB80FC60C4D3D99693AA13D6BB6AC
    Path: /sitecore/templates/Project/robert/Page Design Folder
*/
export interface I_PageDesignFolderItem extends IContentItem {}

/*
    Template Name: C__PageDesignFolder_023f5d48979d4381bc5e149e36abd3bd
    Template ID: 023F5D48979D4381BC5E149E36ABD3BD
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Presentation/Folders/Page Design Folder
*/
export interface I_PageDesignFolder1Item extends IContentItem {}

/*
    Template Name: PageDesign_1105b8f81e00426bbf1fc840742d827b
    Template ID: 1105B8F81E00426BBF1FC840742D827B
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Presentation/Page Design
*/
export interface I_PageDesignItem extends IContentItem {
  partialDesigns: MultilistField;
}

/*
    Template Name: PageContent_ef87e73bc7ff49a2ac599b0be83755c3
    Template ID: EF87E73BC7FF49A2AC599B0BE83755C3
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Page Content/Rendering Parameters/Page Content
*/
export interface I_PageContentItem extends IContentItem {
  additionalParameters: NameValueListField;
  cSSStyles: TextField;
  dynamicPlaceholderId: TextField;
  fieldNames: LookupField;
  gridParameters: TextField;
  renderingIdentifier: TextField;
  styles: TextField;
}

/*
    Template Name: Page_70fa878580aa46aca3d0929bdbc8f46f
    Template ID: 70FA878580AA46ACA3D0929BDBC8F46F
    Path: /sitecore/templates/Project/robert/Page
*/
export interface I_PageItem extends IContentItem {
  changeFrequency: LookupField;
  content: RichTextField;
  navigationClass: LookupField;
  navigationFilter: MultilistField;
  navigationTitle: TextField;
  pageDesign: LookupField;
  priority: LookupField;
  sxaTags: MultilistField;
  title: TextField;
}

/*
    Template Name: Navigation_9ce34bf95c934dff841d8f649c2bd6c8
    Template ID: 9CE34BF95C934DFF841D8F649C2BD6C8
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Navigation/Rendering Parameters/Navigation
*/
export interface I_NavigationItem extends IContentItem {
  additionalParameters: NameValueListField;
  addRoot: CheckboxField;
  cSSStyles: TextField;
  fieldNames: LookupField;
  filter: LookupField;
  flattened: CheckboxField;
  gridParameters: TextField;
  levelFrom: LookupField;
  levelTo: LookupField;
  navigationRoot: LookupField;
  renderingIdentifier: TextField;
  serializerFieldNames: TextField;
  styles: TextField;
}

/*
    Template Name: LinkListFolder_c237d144647a4afeaa7b1570f3e3f139
    Template ID: C237D144647A4AFEAA7B1570F3E3F139
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Navigation/Datasource/Link List Folder
*/
export interface I_LinkListFolderItem extends IContentItem {}

/*
    Template Name: LinkList_33c9207e3b0446068ef54ca99a97c776
    Template ID: 33C9207E3B0446068EF54CA99A97C776
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Navigation/Rendering Parameters/LinkList
*/
export interface I_LinkListItem extends IContentItem {
  additionalParameters: NameValueListField;
  cSSStyles: TextField;
  fieldNames: LookupField;
  gridParameters: TextField;
  renderingIdentifier: TextField;
  styles: TextField;
}

/*
    Template Name: LinkList
    Template ID: 60C9AC624227443E898092C97E483832
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Navigation/Datasource/Link List
*/
export interface I_LinkList1Item extends IContentItem {
  title: TextField;
}

/*
    Template Name: Link
    Template ID: 6F108E3C5D5742F8A910C22920269B0A
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Navigation/Datasource/Link
*/
export interface I_LinkItem extends IContentItem {
  link: LinkField;
}

/*
    Template Name: JSSTenantFolder
    Template ID: CA170F6F5EC24E0CB4BBC77B7931B168
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/JSS Tenant Folder
*/
export interface I_JSSTenantFolderItem extends IContentItem {}

/*
    Template Name: JSSSiteGrouping
    Template ID: 8357F9589AAA46DB889836448A96356F
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/JSS Site Grouping
*/
export interface I_JSSSiteGroupingItem extends IContentItem {}

/*
    Template Name: C__JSSSiteFolder
    Template ID: CE91FBD64D8942C9B5BC2A670439E1FF
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/JSS Site Folder
*/
export interface I_JSSSiteFolderItem extends IContentItem {}

/*
    Template Name: JSSSettings_2a183aff1fea47c69fa7eb598db3ae67
    Template ID: 2A183AFF1FEA47C69FA7EB598DB3AE67
    Path: /sitecore/templates/Project/robert/JSS Settings
*/
export interface I_JSSSettingsItem extends IContentItem {}

/*
    Template Name: C__JSSSettings
    Template ID: EC848505D30C4BDCA0AA7CC9D320085E
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/JSS Settings
*/
export interface I_JSSSettings1Item extends IContentItem {}

/*
    Template Name: JSSData
    Template ID: A29D272E9D48453C9E9DB47585FA7F20
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/JSS Data
*/
export interface I_JSSDataItem extends IContentItem {}

/*
    Template Name: InputValidationStep_d028fef2babf4ad1bbe74d62a977992f
    Template ID: D028FEF2BABF4AD1BBE74D62A977992F
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Tenant/InputValidationStep
*/
export interface I_InputValidationStepItem extends IContentItem {
  validationScript: MultilistField;
}

/*
    Template Name: InputValidationStep_9eded2f7f84748938a0bf69e7fcf3593
    Template ID: 9EDED2F7F84748938A0BF69E7FCF3593
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Site/InputValidationStep
*/
export interface I_InputValidationStep1Item extends IContentItem {
  validationScript: MultilistField;
}

/*
    Template Name: ImageFolder_f7a4527687f14ea5bf25e3c7cb7aa993
    Template ID: F7A4527687F14EA5BF25E3C7CB7AA993
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Media/Image Folder
*/
export interface I_ImageFolderItem extends IContentItem {}

/*
    Template Name: Image_15185b0e641844499f934ff03b7ee032
    Template ID: 15185B0E641844499F934FF03B7EE032
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Media/Rendering Parameters/Image
*/
export interface I_ImageItem extends IContentItem {
  additionalParameters: NameValueListField;
  cSSStyles: TextField;
  dynamicPlaceholderId: TextField;
  fieldNames: LookupField;
  gridParameters: TextField;
  renderingIdentifier: TextField;
  styles: TextField;
}

/*
    Template Name: Image_d885df8cb2d64007b34b2bbafb527304
    Template ID: D885DF8CB2D64007B34B2BBAFB527304
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Media/Image
*/
export interface I_Image1Item extends IContentItem {
  image: ImageField;
  imageCaption: TextField;
  targetUrl: LinkField;
}

/*
    Template Name: HeadlessVariantsGrouping
    Template ID: DA26C63696E145E488D63FCEC70D5699
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Headless Variants/HeadlessVariantsGrouping
*/
export interface I_HeadlessVariantsGroupingItem extends IContentItem {}

/*
    Template Name: HeadlessVariants
    Template ID: 49C111D068674798A7241F103166E6E9
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Headless Variants/HeadlessVariants
*/
export interface I_HeadlessVariantsItem extends IContentItem {}

/*
    Template Name: HeadlessTenantSetupRoot
    Template ID: F036B5E037FB45379D36EF84E5BD41B7
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Roots/HeadlessTenantSetupRoot
*/
export interface I_HeadlessTenantSetupRootItem extends IContentItem {
  enabled: CheckboxField;
  includeByDefault: CheckboxField;
  isSystemModule: CheckboxField;
}

/*
    Template Name: HeadlessTenant_d3743f3ca74c43fab34cc36645ac9340
    Template ID: D3743F3CA74C43FAB34CC36645AC9340
    Path: /sitecore/templates/Project/robert/Headless Tenant
*/
export interface I_HeadlessTenantItem extends IContentItem {
  branchesFolder: LookupField;
  mediaLibrary: LookupField;
  modules: MultilistField;
  placeholderSettingsFolder: LookupField;
  renderingsFolder: LookupField;
  roleDomain: TextField;
  settingsFolder: LookupField;
  sharedMediaLibrary: LookupField;
  sharedSites: MultilistField;
}

/*
    Template Name: C__HeadlessTenant
    Template ID: B91811F1FA8B47F8B131BD2C6D5EC805
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Headless Tenant
*/
export interface I_HeadlessTenant1Item extends IContentItem {
  branchesFolder: LookupField;
  mediaLibrary: LookupField;
  placeholderSettingsFolder: LookupField;
  renderingsFolder: LookupField;
  settingsFolder: LookupField;
  sharedMediaLibrary: LookupField;
  sharedSites: MultilistField;
}

/*
    Template Name: HeadlessSolutionTemplateFolder
    Template ID: A5705AF725DF4B3AB2202EC026AB2099
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Headless Solution Template Folder
*/
export interface I_HeadlessSolutionTemplateFolderItem extends IContentItem {}

/*
    Template Name: HeadlessSiteSetupRoot
    Template ID: BED31D6FD96845A9B54E12D7F977D861
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Roots/HeadlessSiteSetupRoot
*/
export interface I_HeadlessSiteSetupRootItem extends IContentItem {
  dependencies: MultilistField;
  enabled: CheckboxField;
  includeByDefault: CheckboxField;
  includeIfInstalled: MultilistField;
  isSystemModule: CheckboxField;
}

/*
    Template Name: HeadlessSite_7b66b793fa2746f7a4cb868115cd5b7c
    Template ID: 7B66B793FA2746F7A4CB868115CD5B7C
    Path: /sitecore/templates/Project/robert/Headless Site
*/
export interface I_HeadlessSiteItem extends IContentItem {
  modules: MultilistField;
  roleDomain: TextField;
  sitemapMediaItems: MultilistField;
  siteMediaLibrary: LookupField;
  siteTemplate: LookupField;
}

/*
    Template Name: C__HeadlessSite
    Template ID: 9ED6640464C9412290E1869CB3CEA566
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Headless Site
*/
export interface I_HeadlessSite1Item extends IContentItem {
  siteMediaLibrary: LookupField;
  siteTemplate: LookupField;
}

/*
    Template Name: FormRenderingParameters
    Template ID: 0A188F5D4B5D48AB83E1949A3C745477
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Forms/Rendering Parameters/Form Rendering Parameters
*/
export interface I_FormRenderingParametersItem extends IContentItem {
  additionalParameters: NameValueListField;
  cSSStyles: TextField;
  fieldNames: LookupField;
  formId: TextField;
  gridParameters: TextField;
  renderingIdentifier: TextField;
  styles: TextField;
}

/*
    Template Name: ExecuteScript
    Template ID: 3A385B25DF9B47AC9F6B39C8534E81F1
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Tenant/ExecuteScript
*/
export interface I_ExecuteScriptItem extends IContentItem {
  script: MultilistField;
  validationScript: MultilistField;
}

/*
    Template Name: ExecuteScript_bc9bb68436df4285888bd8b4d87b10de
    Template ID: BC9BB68436DF4285888BD8B4D87B10DE
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Site/ExecuteScript
*/
export interface I_ExecuteScript1Item extends IContentItem {
  script: MultilistField;
  validationScript: MultilistField;
}

/*
    Template Name: EditTenantTemplate
    Template ID: 88752F779109424CB1D8AF91E6369A2E
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Tenant/EditTenantTemplate
*/
export interface I_EditTenantTemplateItem extends IContentItem {
  arguments: MultilistField;
  editType: TextField;
}

/*
    Template Name: EditSiteItem_f040db0387fe4e10ae4053c63175e31b
    Template ID: F040DB0387FE4E10AE4053C63175E31B
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Site/EditSiteItem
*/
export interface I_EditSiteItemItem extends IContentItem {
  arguments: MultilistField;
  editType: TextField;
}

/*
    Template Name: Container_45130bdbbae34edcaea87b68b9d94c7f
    Template ID: 45130BDBBAE34EDCAEA87B68B9D94C7F
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Page Structure/Rendering Parameters/Container
*/
export interface I_ContainerItem extends IContentItem {
  additionalParameters: NameValueListField;
  backgroundImage: ImageField;
  cSSStyles: TextField;
  dynamicPlaceholderId: TextField;
  fieldNames: LookupField;
  gridParameters: TextField;
  renderingIdentifier: TextField;
  styles: TextField;
}

/*
    Template Name: ColumnSplitter
    Template ID: 181740EAA7AE4799A649A75917570E38
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Page Structure/Rendering Parameters/ColumnSplitter
*/
export interface I_ColumnSplitterItem extends IContentItem {
  additionalParameters: NameValueListField;
  columnWidth1: TextField;
  columnWidth2: TextField;
  columnWidth3: TextField;
  columnWidth4: TextField;
  columnWidth5: TextField;
  columnWidth6: TextField;
  columnWidth7: TextField;
  columnWidth8: TextField;
  cSSStyles: TextField;
  dynamicPlaceholderId: TextField;
  enabledPlaceholders: TextField;
  fieldNames: LookupField;
  gridParameters: TextField;
  renderingIdentifier: TextField;
  splitterSize: NumberField;
  styles: TextField;
  styles1: TextField;
  styles2: TextField;
  styles3: TextField;
  styles4: TextField;
  styles5: TextField;
  styles6: TextField;
  styles7: TextField;
  styles8: TextField;
}

/*
    Template Name: BranchesFolder
    Template ID: 2F5F83432A1846A492A10F7AB0452741
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Folders/Branches Folder
*/
export interface I_BranchesFolderItem extends IContentItem {}

/*
    Template Name: C__BaseRenderingParameters
    Template ID: 4247AAD4EBDE4994998FE067A51B1FE4
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Presentation/Rendering Parameters/BaseRenderingParameters
*/
export interface I_BaseRenderingParametersItem extends IContentItem {
  additionalParameters: NameValueListField;
  cSSStyles: TextField;
  fieldNames: LookupField;
  gridParameters: TextField;
  styles: TextField;
}

/*
    Template Name: C__BasePage
    Template ID: 4715171126CA434E8132D3E0B7D26683
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Base Page
*/
export interface I_BasePageItem extends IContentItem {}

/*
    Template Name: AvailableRenderingsFolder_26ec1d1811b24dd98326f6115f4fd7eb
    Template ID: 26EC1D1811B24DD98326F6115F4FD7EB
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Presentation/Available Renderings/Available Renderings Folder
*/
export interface I_AvailableRenderingsFolderItem extends IContentItem {
  groupRenderingsInSections: CheckboxField;
  isShared: CheckboxField;
}

/*
    Template Name: AddItem_1e1b739ec3784909941d171aca7362e5
    Template ID: 1E1B739EC3784909941D171ACA7362E5
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Tenant/AddItem
*/
export interface I_AddItemItem extends IContentItem {
  location: MultilistField;
}

/*
    Template Name: AddItem_3aea335cd06d45b1841acbc8d2d1ce40
    Template ID: 3AEA335CD06D45B1841ACBC8D2D1CE40
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Site/AddItem
*/
export interface I_AddItem1Item extends IContentItem {
  location: MultilistField;
}

/*
    Template Name: C___SupportedLanguages
    Template ID: 615A59CCA2754E578B48A57F0A703F84
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Base/Sites/_SupportedLanguages
*/
export class SupportedLanguagesItem extends ContentItem implements I_SupportedLanguagesItem {}

/*
    Template Name: C___SolutionTemplateName
    Template ID: EE5BEC5A609F4C64896018D6CAE7F890
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Base/Solution
*/
export class SolutionTemplateNameItem extends ContentItem implements I_SolutionTemplateNameItem {}

/*
    Template Name: C___SolutionTemplateDescription
    Template ID: 77B1399F5F304643A05459BBB1C7C62C
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Base/Solution
*/
export class SolutionTemplateDescriptionItem
  extends ContentItem
  implements I_SolutionTemplateDescriptionItem {}

/*
    Template Name: C___SolutionTemplateContent
    Template ID: 7594748576244588BDAC812B865141DD
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Base/Solution
*/
export class SolutionTemplateContentItem
  extends ContentItem
  implements I_SolutionTemplateContentItem
{
  public content: TextField;
}

/*
    Template Name: C___SiteTemplate
    Template ID: B99C3F5064784CFE98FD82398044DC84
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Base/Sites/_Site Template
*/
export class SiteTemplateItem extends ContentItem implements I_SiteTemplateItem {
  public siteTemplate: LookupField;
}

/*
    Template Name: C___Name_0345fd2f95094dc7b0f56c73a9b6cd8d
    Template ID: 0345FD2F95094DC7B0F56C73A9B6CD8D
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Base/Sites/_Name
*/
export class NameItem extends ContentItem implements I_NameItem {}

/*
    Template Name: C___Description
    Template ID: 79CBA7D0EE474FC6911C9BCCAFCAAC2E
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Base/Sites/_Description
*/
export class DescriptionItem extends ContentItem implements I_DescriptionItem {}

/*
    Template Name: C___BaseJSSTenant
    Template ID: 053E9155399342F391825854DC5355B3
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Base/_Base JSS Tenant
*/
export class BaseJSSTenantItem extends ContentItem implements I_BaseJSSTenantItem {
  public branchesFolder: LookupField;
  public placeholderSettingsFolder: LookupField;
  public renderingsFolder: LookupField;
  public settingsFolder: LookupField;
}

/*
    Template Name: VariantDefinition_4d50cdaec2d94de8b0808f992bfb1b55
    Template ID: 4D50CDAEC2D94DE8B0808F992BFB1B55
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Headless Variants/Variant Definition
*/
export class VariantDefinitionItem extends ContentItem implements I_VariantDefinitionItem {
  public allowedInTemplates: MultilistField;
  public linkField: TextField;
}

/*
    Template Name: Title_a82e893105754175917de904ef7e6dbe
    Template ID: A82E893105754175917DE904EF7E6DBE
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Page Content/Rendering Parameters/Title
*/
export class TitleItem extends ContentItem implements I_TitleItem {
  public additionalParameters: NameValueListField;
  public cSSStyles: TextField;
  public dynamicPlaceholderId: TextField;
  public fieldNames: LookupField;
  public gridParameters: TextField;
  public renderingIdentifier: TextField;
  public styles: TextField;
}

/*
    Template Name: TextFolder_b762d56787f5493cbb480c455d834457
    Template ID: B762D56787F5493CBB480C455D834457
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Page Content/Text Folder
*/
export class TextFolderItem extends ContentItem implements I_TextFolderItem {}

/*
    Template Name: Text
    Template ID: 0A7AA3735ED14E9B967822D3C5FAF6DF
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Page Content/Text
*/
export class TextItem extends ContentItem implements I_TextItem {
  public text: RichTextField;
}

/*
    Template Name: Styles
    Template ID: C6DC739315BB4CD7B798AB63E77EBAC4
    Path: /sitecore/templates/Foundation/Experience Accelerator/Presentation/Styles
*/
export class StylesItem extends ContentItem implements I_StylesItem {
  public allowEmpty: CheckboxField;
  public type: TextField;
}

/*
    Template Name: Style
    Template ID: 6B8AABEFD65046E097D0C0B04F7F016B
    Path: /sitecore/templates/Foundation/Experience Accelerator/Presentation/Style
*/
export class StyleItem extends ContentItem implements I_StyleItem {
  public allowedRenderings: MultilistField;
  public icon: TextField;
  public isVerifiedStyle: CheckboxField;
  public value: TextField;
}

/*
    Template Name: SolutionTemplate
    Template ID: 1B2DFD3BF2F24F40A75CF6C2490919C4
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Solution
*/
export class SolutionTemplateItem extends ContentItem implements I_SolutionTemplateItem {
  public content: TextField;
  public enabled: CheckboxField;
  public siteModules: MultilistField;
  public tenantModules: MultilistField;
}

/*
    Template Name: SitemapSettings_c71d856635c849b7a84d9d176e9cbd05
    Template ID: C71D856635C849B7A84D9D176E9CBD05
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/SiteMetadata/Sitemap Settings
*/
export class SitemapSettingsItem extends ContentItem implements I_SitemapSettingsItem {
  public cacheExpiration: NumberField;
  public cacheType: LookupField;
  public changefreq: CheckboxField;
  public crawler: TextField;
  public generateAlternateLinks: CheckboxField;
  public generateSitemapMediaItems: CheckboxField;
  public hrefLang: LookupField;
  public includeXdefault: CheckboxField;
  public lastmod: CheckboxField;
  public linkProvider: TextField;
  public priority: CheckboxField;
  public refreshThreshold: NumberField;
  public sitemapIndexThreshold: NumberField;
}

/*
    Template Name: Site_e46f3af239fa4866a1577017c4b2a40c
    Template ID: E46F3AF239FA4866A1577017C4B2A40C
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Site
*/
export class SiteItem extends ContentItem implements I_SiteItem {
  public database: TextField;
  public environment: TextField;
  public errorPageUrl: TextField;
  public externalPort: IntegerField;
  public fieldLanguageFallback: CheckboxField;
  public filteredItemsCacheSize: IntegerField;
  public generateThumbnails: CheckboxField;
  public hostName: TextField;
  public itemLanguageFallback: CheckboxField;
  public itemNotFoundUrl: TextField;
  public languageEmbedding: CheckboxField;
  public linkProvider: TextField;
  public port: IntegerField;
  public pOS: NameValueListField;
  public project: TextField;
  public renderingHost: TextField;
  public scheme: TextField;
  public siteName: TextField;
  public startItem: LookupField;
  public sxaLinkable: CheckboxField;
  public targetHostName: TextField;
  public thumbnailsRootPath: LookupField;
  public virtualFolder: TextField;
}

/*
    Template Name: SharedSitesSettings_c14bf746030f4e598594395f6d299e61
    Template ID: C14BF746030F4E598594395F6D299E61
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Shared Sites Settings
*/
export class SharedSitesSettingsItem extends ContentItem implements I_SharedSitesSettingsItem {
  public delegatedAreas: MultilistField;
}

/*
    Template Name: SettingsFolder
    Template ID: B4D86F9BE9174D68978E741361332174
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Folders/Settings Folder
*/
export class SettingsFolderItem extends ContentItem implements I_SettingsFolderItem {}

/*
    Template Name: SXAJSSLayout
    Template ID: E4E1150804A44B0BA2635201F811C9CD
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Presentation/SXA JSS Layout
*/
export class SXAJSSLayoutItem extends ContentItem implements I_SXAJSSLayoutItem {
  public area: TextField;
  public model: TextField;
}

/*
    Template Name: RowSplitter
    Template ID: DB88EFA8E0154B96BA0E348D8B510563
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Page Structure/Rendering Parameters/RowSplitter
*/
export class RowSplitterItem extends ContentItem implements I_RowSplitterItem {
  public additionalParameters: NameValueListField;
  public cSSStyles: TextField;
  public dynamicPlaceholderId: TextField;
  public enabledPlaceholders: TextField;
  public fieldNames: LookupField;
  public gridParameters: TextField;
  public renderingIdentifier: TextField;
  public splitterSize: NumberField;
  public styles: TextField;
  public styles1: TextField;
  public styles2: TextField;
  public styles3: TextField;
  public styles4: TextField;
  public styles5: TextField;
  public styles6: TextField;
  public styles7: TextField;
  public styles8: TextField;
}

/*
    Template Name: RichText_0f3b73366112418c8bbab0526f3887ce
    Template ID: 0F3B73366112418C8BBAB0526F3887CE
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Page Content/Rendering Parameters/Rich Text
*/
export class RichTextItem extends ContentItem implements I_RichTextItem {
  public additionalParameters: NameValueListField;
  public cSSStyles: TextField;
  public dynamicPlaceholderId: TextField;
  public fieldNames: LookupField;
  public gridParameters: TextField;
  public renderingIdentifier: TextField;
  public styles: TextField;
}

/*
    Template Name: RenderingHost
    Template ID: BC71D4423E4F46BA887C746E54F9BB83
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/RenderingHost
*/
export class RenderingHostItem extends ContentItem implements I_RenderingHostItem {
  public appName: TextField;
  public serverSideRenderingEngineConfigUrl: TextField;
}

/*
    Template Name: RenderingFolder_840d4a46550349ecbf9dbd090946c63d
    Template ID: 840D4A46550349ECBF9DBD090946C63D
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Folders/Rendering Folder
*/
export class RenderingFolderItem extends ContentItem implements I_RenderingFolderItem {}

/*
    Template Name: PromoFolder
    Template ID: 8FE7F8DCCB5D42C299F876608C243F10
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Page Content/Promo Folder
*/
export class PromoFolderItem extends ContentItem implements I_PromoFolderItem {}

/*
    Template Name: Promo_881869ca7f5845ea8b34ad1bfd3551a8
    Template ID: 881869CA7F5845EA8B34AD1BFD3551A8
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Page Content/Rendering Parameters/Promo
*/
export class PromoItem extends ContentItem implements I_PromoItem {
  public additionalParameters: NameValueListField;
  public cSSStyles: TextField;
  public dynamicPlaceholderId: TextField;
  public fieldNames: LookupField;
  public gridParameters: TextField;
  public renderingIdentifier: TextField;
  public styles: TextField;
}

/*
    Template Name: Promo_dfed4457d760457abec1c0dccdc44381
    Template ID: DFED4457D760457ABEC1C0DCCDC44381
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Page Content/Promo
*/
export class Promo1Item extends ContentItem implements I_Promo1Item {
  public promoIcon: ImageField;
  public promoIcon2: ImageField;
  public promoLink: LinkField;
  public promoText: RichTextField;
  public promoText2: RichTextField;
  public promoText3: RichTextField;
}

/*
    Template Name: Presentation_0a70fa7389234a6eabf34134f25f3221
    Template ID: 0A70FA7389234A6EABF34134F25F3221
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Presentation/Presentation
*/
export class PresentationItem extends ContentItem implements I_PresentationItem {}

/*
    Template Name: PreDeleteValidationStep_edf1fa4206c44703ab1af23495bc6d8f
    Template ID: EDF1FA4206C44703AB1AF23495BC6D8F
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Tenant/PreDeleteValidationStep
*/
export class PreDeleteValidationStepItem
  extends ContentItem
  implements I_PreDeleteValidationStepItem
{
  public validationScript: MultilistField;
}

/*
    Template Name: PreDeleteValidationStep_408fd8ab1667440ba6051370ddf0a51f
    Template ID: 408FD8AB1667440BA6051370DDF0A51F
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Site/PreDeleteValidationStep
*/
export class PreDeleteValidationStep1Item
  extends ContentItem
  implements I_PreDeleteValidationStep1Item
{
  public validationScript: MultilistField;
}

/*
    Template Name: PreDeleteStep
    Template ID: ADB136512EB9494FADA00DFDA0B2EBBF
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Tenant/PreDeleteStep
*/
export class PreDeleteStepItem extends ContentItem implements I_PreDeleteStepItem {
  public script: MultilistField;
}

/*
    Template Name: PreDeleteStep_52510f549ec5464cb075ef44b5c2f96b
    Template ID: 52510F549EC5464CB075EF44B5C2F96B
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Site/PreDeleteStep
*/
export class PreDeleteStep1Item extends ContentItem implements I_PreDeleteStep1Item {
  public script: MultilistField;
}

/*
    Template Name: PostSetupStep
    Template ID: 0C6028932BE94020912D56AF21DEFF73
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Tenant/PostSetupStep
*/
export class PostSetupStepItem extends ContentItem implements I_PostSetupStepItem {
  public script: MultilistField;
}

/*
    Template Name: PostSetupStep_8ff2febff6d2461d9ed38b0cb5d9d86f
    Template ID: 8FF2FEBFF6D2461D9ED38B0CB5D9D86F
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Site/PostSetupStep
*/
export class PostSetupStep1Item extends ContentItem implements I_PostSetupStep1Item {
  public script: MultilistField;
}

/*
    Template Name: PostDeleteStep_78d6ec9b66e34763987003cf314ee37a
    Template ID: 78D6EC9B66E34763987003CF314EE37A
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Tenant/PostDeleteStep
*/
export class PostDeleteStepItem extends ContentItem implements I_PostDeleteStepItem {
  public script: MultilistField;
}

/*
    Template Name: PostDeleteStep_b20857895385413883f096f3767cb156
    Template ID: B20857895385413883F096F3767CB156
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Site/PostDeleteStep
*/
export class PostDeleteStep1Item extends ContentItem implements I_PostDeleteStep1Item {
  public script: MultilistField;
}

/*
    Template Name: PlaceholderSettingsFolder_3d281bf8533646869dd6ab4ab5b3fd5d
    Template ID: 3D281BF8533646869DD6AB4AB5B3FD5D
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Folders/Placeholder Settings Folder
*/
export class PlaceholderSettingsFolderItem
  extends ContentItem
  implements I_PlaceholderSettingsFolderItem {}

/*
    Template Name: PlaceholderSettingsFolder_52288e3978304694b62d32a54c6ef7ba
    Template ID: 52288E3978304694B62D32A54C6EF7BA
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Placeholder Settings/Placeholder Settings Folder
*/
export class PlaceholderSettingsFolder1Item
  extends ContentItem
  implements I_PlaceholderSettingsFolder1Item
{
  public templateForCreation: LookupField;
}

/*
    Template Name: Placeholder_d2a6884c04d54089a64ed27ca9d68d4c
    Template ID: D2A6884C04D54089A64ED27CA9D68D4C
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Placeholder Settings/Placeholder
*/
export class PlaceholderItem extends ContentItem implements I_PlaceholderItem {
  public allowedControls: MultilistField;
  public placeholderKey: TextField;
}

/*
    Template Name: PartialDesigns_1d39aeca499c452ca7ae26e55bb4a0d5
    Template ID: 1D39AECA499C452CA7AE26E55BB4A0D5
    Path: /sitecore/templates/Project/robert/Partial Designs
*/
export class PartialDesignsItem extends ContentItem implements I_PartialDesignsItem {}

/*
    Template Name: C__PartialDesigns_79c9fa015f6a48b2b45905bbaa826a9d
    Template ID: 79C9FA015F6A48B2B45905BBAA826A9D
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Presentation/Partial Designs
*/
export class PartialDesigns1Item extends ContentItem implements I_PartialDesigns1Item {}

/*
    Template Name: PartialDesignFolder_2875566679e2460e8db9dedab590c973
    Template ID: 2875566679E2460E8DB9DEDAB590C973
    Path: /sitecore/templates/Project/robert/Partial Design Folder
*/
export class PartialDesignFolderItem extends ContentItem implements I_PartialDesignFolderItem {}

/*
    Template Name: C__PartialDesignFolder_25f01f50553444f9b1babcbb60b2d13d
    Template ID: 25F01F50553444F9B1BABCBB60B2D13D
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Presentation/Folders/Partial Design Folder
*/
export class PartialDesignFolder1Item extends ContentItem implements I_PartialDesignFolder1Item {}

/*
    Template Name: PartialDesign_fd2059fd60434dfe8c04e2437ce87634
    Template ID: FD2059FD60434DFE8C04E2437CE87634
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Presentation/Partial Design
*/
export class PartialDesignItem extends ContentItem implements I_PartialDesignItem {
  public basePartialDesign: LookupField;
  public signature: TextField;
}

/*
    Template Name: PageDesigns_b7474c7eeaee45c68652b94530a58187
    Template ID: B7474C7EEAEE45C68652B94530A58187
    Path: /sitecore/templates/Project/robert/Page Designs
*/
export class PageDesignsItem extends ContentItem implements I_PageDesignsItem {
  public designRules: TextField;
  public templatesMapping: TextField;
}

/*
    Template Name: C__PageDesigns_daaf41fd96db4892be99f62f16d036c4
    Template ID: DAAF41FD96DB4892BE99F62F16D036C4
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Presentation/Page Designs
*/
export class PageDesigns1Item extends ContentItem implements I_PageDesigns1Item {
  public designRules: TextField;
  public templatesMapping: TextField;
}

/*
    Template Name: PageDesignFolder_272eb80fc60c4d3d99693aa13d6bb6ac
    Template ID: 272EB80FC60C4D3D99693AA13D6BB6AC
    Path: /sitecore/templates/Project/robert/Page Design Folder
*/
export class PageDesignFolderItem extends ContentItem implements I_PageDesignFolderItem {}

/*
    Template Name: C__PageDesignFolder_023f5d48979d4381bc5e149e36abd3bd
    Template ID: 023F5D48979D4381BC5E149E36ABD3BD
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Presentation/Folders/Page Design Folder
*/
export class PageDesignFolder1Item extends ContentItem implements I_PageDesignFolder1Item {}

/*
    Template Name: PageDesign_1105b8f81e00426bbf1fc840742d827b
    Template ID: 1105B8F81E00426BBF1FC840742D827B
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Presentation/Page Design
*/
export class PageDesignItem extends ContentItem implements I_PageDesignItem {
  public partialDesigns: MultilistField;
}

/*
    Template Name: PageContent_ef87e73bc7ff49a2ac599b0be83755c3
    Template ID: EF87E73BC7FF49A2AC599B0BE83755C3
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Page Content/Rendering Parameters/Page Content
*/
export class PageContentItem extends ContentItem implements I_PageContentItem {
  public additionalParameters: NameValueListField;
  public cSSStyles: TextField;
  public dynamicPlaceholderId: TextField;
  public fieldNames: LookupField;
  public gridParameters: TextField;
  public renderingIdentifier: TextField;
  public styles: TextField;
}

/*
    Template Name: Page_70fa878580aa46aca3d0929bdbc8f46f
    Template ID: 70FA878580AA46ACA3D0929BDBC8F46F
    Path: /sitecore/templates/Project/robert/Page
*/
export class PageItem extends ContentItem implements I_PageItem {
  public changeFrequency: LookupField;
  public content: RichTextField;
  public navigationClass: LookupField;
  public navigationFilter: MultilistField;
  public navigationTitle: TextField;
  public pageDesign: LookupField;
  public priority: LookupField;
  public sxaTags: MultilistField;
  public title: TextField;
}

/*
    Template Name: Navigation_9ce34bf95c934dff841d8f649c2bd6c8
    Template ID: 9CE34BF95C934DFF841D8F649C2BD6C8
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Navigation/Rendering Parameters/Navigation
*/
export class NavigationItem extends ContentItem implements I_NavigationItem {
  public additionalParameters: NameValueListField;
  public addRoot: CheckboxField;
  public cSSStyles: TextField;
  public fieldNames: LookupField;
  public filter: LookupField;
  public flattened: CheckboxField;
  public gridParameters: TextField;
  public levelFrom: LookupField;
  public levelTo: LookupField;
  public navigationRoot: LookupField;
  public renderingIdentifier: TextField;
  public serializerFieldNames: TextField;
  public styles: TextField;
}

/*
    Template Name: LinkListFolder_c237d144647a4afeaa7b1570f3e3f139
    Template ID: C237D144647A4AFEAA7B1570F3E3F139
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Navigation/Datasource/Link List Folder
*/
export class LinkListFolderItem extends ContentItem implements I_LinkListFolderItem {}

/*
    Template Name: LinkList_33c9207e3b0446068ef54ca99a97c776
    Template ID: 33C9207E3B0446068EF54CA99A97C776
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Navigation/Rendering Parameters/LinkList
*/
export class LinkListItem extends ContentItem implements I_LinkListItem {
  public additionalParameters: NameValueListField;
  public cSSStyles: TextField;
  public fieldNames: LookupField;
  public gridParameters: TextField;
  public renderingIdentifier: TextField;
  public styles: TextField;
}

/*
    Template Name: LinkList
    Template ID: 60C9AC624227443E898092C97E483832
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Navigation/Datasource/Link List
*/
export class LinkList1Item extends ContentItem implements I_LinkList1Item {
  public title: TextField;
}

/*
    Template Name: Link
    Template ID: 6F108E3C5D5742F8A910C22920269B0A
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Navigation/Datasource/Link
*/
export class LinkItem extends ContentItem implements I_LinkItem {
  public link: LinkField;
}

/*
    Template Name: JSSTenantFolder
    Template ID: CA170F6F5EC24E0CB4BBC77B7931B168
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/JSS Tenant Folder
*/
export class JSSTenantFolderItem extends ContentItem implements I_JSSTenantFolderItem {}

/*
    Template Name: JSSSiteGrouping
    Template ID: 8357F9589AAA46DB889836448A96356F
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/JSS Site Grouping
*/
export class JSSSiteGroupingItem extends ContentItem implements I_JSSSiteGroupingItem {}

/*
    Template Name: C__JSSSiteFolder
    Template ID: CE91FBD64D8942C9B5BC2A670439E1FF
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/JSS Site Folder
*/
export class JSSSiteFolderItem extends ContentItem implements I_JSSSiteFolderItem {}

/*
    Template Name: JSSSettings_2a183aff1fea47c69fa7eb598db3ae67
    Template ID: 2A183AFF1FEA47C69FA7EB598DB3AE67
    Path: /sitecore/templates/Project/robert/JSS Settings
*/
export class JSSSettingsItem extends ContentItem implements I_JSSSettingsItem {}

/*
    Template Name: C__JSSSettings
    Template ID: EC848505D30C4BDCA0AA7CC9D320085E
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/JSS Settings
*/
export class JSSSettings1Item extends ContentItem implements I_JSSSettings1Item {}

/*
    Template Name: JSSData
    Template ID: A29D272E9D48453C9E9DB47585FA7F20
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/JSS Data
*/
export class JSSDataItem extends ContentItem implements I_JSSDataItem {}

/*
    Template Name: InputValidationStep_d028fef2babf4ad1bbe74d62a977992f
    Template ID: D028FEF2BABF4AD1BBE74D62A977992F
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Tenant/InputValidationStep
*/
export class InputValidationStepItem extends ContentItem implements I_InputValidationStepItem {
  public validationScript: MultilistField;
}

/*
    Template Name: InputValidationStep_9eded2f7f84748938a0bf69e7fcf3593
    Template ID: 9EDED2F7F84748938A0BF69E7FCF3593
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Site/InputValidationStep
*/
export class InputValidationStep1Item extends ContentItem implements I_InputValidationStep1Item {
  public validationScript: MultilistField;
}

/*
    Template Name: ImageFolder_f7a4527687f14ea5bf25e3c7cb7aa993
    Template ID: F7A4527687F14EA5BF25E3C7CB7AA993
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Media/Image Folder
*/
export class ImageFolderItem extends ContentItem implements I_ImageFolderItem {}

/*
    Template Name: Image_15185b0e641844499f934ff03b7ee032
    Template ID: 15185B0E641844499F934FF03B7EE032
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Media/Rendering Parameters/Image
*/
export class ImageItem extends ContentItem implements I_ImageItem {
  public additionalParameters: NameValueListField;
  public cSSStyles: TextField;
  public dynamicPlaceholderId: TextField;
  public fieldNames: LookupField;
  public gridParameters: TextField;
  public renderingIdentifier: TextField;
  public styles: TextField;
}

/*
    Template Name: Image_d885df8cb2d64007b34b2bbafb527304
    Template ID: D885DF8CB2D64007B34B2BBAFB527304
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Media/Image
*/
export class Image1Item extends ContentItem implements I_Image1Item {
  public image: ImageField;
  public imageCaption: TextField;
  public targetUrl: LinkField;
}

/*
    Template Name: HeadlessVariantsGrouping
    Template ID: DA26C63696E145E488D63FCEC70D5699
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Headless Variants/HeadlessVariantsGrouping
*/
export class HeadlessVariantsGroupingItem
  extends ContentItem
  implements I_HeadlessVariantsGroupingItem {}

/*
    Template Name: HeadlessVariants
    Template ID: 49C111D068674798A7241F103166E6E9
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Headless Variants/HeadlessVariants
*/
export class HeadlessVariantsItem extends ContentItem implements I_HeadlessVariantsItem {}

/*
    Template Name: HeadlessTenantSetupRoot
    Template ID: F036B5E037FB45379D36EF84E5BD41B7
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Roots/HeadlessTenantSetupRoot
*/
export class HeadlessTenantSetupRootItem
  extends ContentItem
  implements I_HeadlessTenantSetupRootItem
{
  public enabled: CheckboxField;
  public includeByDefault: CheckboxField;
  public isSystemModule: CheckboxField;
}

/*
    Template Name: HeadlessTenant_d3743f3ca74c43fab34cc36645ac9340
    Template ID: D3743F3CA74C43FAB34CC36645AC9340
    Path: /sitecore/templates/Project/robert/Headless Tenant
*/
export class HeadlessTenantItem extends ContentItem implements I_HeadlessTenantItem {
  public branchesFolder: LookupField;
  public mediaLibrary: LookupField;
  public modules: MultilistField;
  public placeholderSettingsFolder: LookupField;
  public renderingsFolder: LookupField;
  public roleDomain: TextField;
  public settingsFolder: LookupField;
  public sharedMediaLibrary: LookupField;
  public sharedSites: MultilistField;
}

/*
    Template Name: C__HeadlessTenant
    Template ID: B91811F1FA8B47F8B131BD2C6D5EC805
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Headless Tenant
*/
export class HeadlessTenant1Item extends ContentItem implements I_HeadlessTenant1Item {
  public branchesFolder: LookupField;
  public mediaLibrary: LookupField;
  public placeholderSettingsFolder: LookupField;
  public renderingsFolder: LookupField;
  public settingsFolder: LookupField;
  public sharedMediaLibrary: LookupField;
  public sharedSites: MultilistField;
}

/*
    Template Name: HeadlessSolutionTemplateFolder
    Template ID: A5705AF725DF4B3AB2202EC026AB2099
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Headless Solution Template Folder
*/
export class HeadlessSolutionTemplateFolderItem
  extends ContentItem
  implements I_HeadlessSolutionTemplateFolderItem {}

/*
    Template Name: HeadlessSiteSetupRoot
    Template ID: BED31D6FD96845A9B54E12D7F977D861
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Roots/HeadlessSiteSetupRoot
*/
export class HeadlessSiteSetupRootItem extends ContentItem implements I_HeadlessSiteSetupRootItem {
  public dependencies: MultilistField;
  public enabled: CheckboxField;
  public includeByDefault: CheckboxField;
  public includeIfInstalled: MultilistField;
  public isSystemModule: CheckboxField;
}

/*
    Template Name: HeadlessSite_7b66b793fa2746f7a4cb868115cd5b7c
    Template ID: 7B66B793FA2746F7A4CB868115CD5B7C
    Path: /sitecore/templates/Project/robert/Headless Site
*/
export class HeadlessSiteItem extends ContentItem implements I_HeadlessSiteItem {
  public modules: MultilistField;
  public roleDomain: TextField;
  public sitemapMediaItems: MultilistField;
  public siteMediaLibrary: LookupField;
  public siteTemplate: LookupField;
}

/*
    Template Name: C__HeadlessSite
    Template ID: 9ED6640464C9412290E1869CB3CEA566
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Headless Site
*/
export class HeadlessSite1Item extends ContentItem implements I_HeadlessSite1Item {
  public siteMediaLibrary: LookupField;
  public siteTemplate: LookupField;
}

/*
    Template Name: FormRenderingParameters
    Template ID: 0A188F5D4B5D48AB83E1949A3C745477
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Forms/Rendering Parameters/Form Rendering Parameters
*/
export class FormRenderingParametersItem
  extends ContentItem
  implements I_FormRenderingParametersItem
{
  public additionalParameters: NameValueListField;
  public cSSStyles: TextField;
  public fieldNames: LookupField;
  public formId: TextField;
  public gridParameters: TextField;
  public renderingIdentifier: TextField;
  public styles: TextField;
}

/*
    Template Name: ExecuteScript
    Template ID: 3A385B25DF9B47AC9F6B39C8534E81F1
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Tenant/ExecuteScript
*/
export class ExecuteScriptItem extends ContentItem implements I_ExecuteScriptItem {
  public script: MultilistField;
  public validationScript: MultilistField;
}

/*
    Template Name: ExecuteScript_bc9bb68436df4285888bd8b4d87b10de
    Template ID: BC9BB68436DF4285888BD8B4D87B10DE
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Site/ExecuteScript
*/
export class ExecuteScript1Item extends ContentItem implements I_ExecuteScript1Item {
  public script: MultilistField;
  public validationScript: MultilistField;
}

/*
    Template Name: EditTenantTemplate
    Template ID: 88752F779109424CB1D8AF91E6369A2E
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Tenant/EditTenantTemplate
*/
export class EditTenantTemplateItem extends ContentItem implements I_EditTenantTemplateItem {
  public arguments: MultilistField;
  public editType: TextField;
}

/*
    Template Name: EditSiteItem_f040db0387fe4e10ae4053c63175e31b
    Template ID: F040DB0387FE4E10AE4053C63175E31B
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Site/EditSiteItem
*/
export class EditSiteItemItem extends ContentItem implements I_EditSiteItemItem {
  public arguments: MultilistField;
  public editType: TextField;
}

/*
    Template Name: Container_45130bdbbae34edcaea87b68b9d94c7f
    Template ID: 45130BDBBAE34EDCAEA87B68B9D94C7F
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Page Structure/Rendering Parameters/Container
*/
export class ContainerItem extends ContentItem implements I_ContainerItem {
  public additionalParameters: NameValueListField;
  public backgroundImage: ImageField;
  public cSSStyles: TextField;
  public dynamicPlaceholderId: TextField;
  public fieldNames: LookupField;
  public gridParameters: TextField;
  public renderingIdentifier: TextField;
  public styles: TextField;
}

/*
    Template Name: ColumnSplitter
    Template ID: 181740EAA7AE4799A649A75917570E38
    Path: /sitecore/templates/Feature/JSS Experience Accelerator/Page Structure/Rendering Parameters/ColumnSplitter
*/
export class ColumnSplitterItem extends ContentItem implements I_ColumnSplitterItem {
  public additionalParameters: NameValueListField;
  public columnWidth1: TextField;
  public columnWidth2: TextField;
  public columnWidth3: TextField;
  public columnWidth4: TextField;
  public columnWidth5: TextField;
  public columnWidth6: TextField;
  public columnWidth7: TextField;
  public columnWidth8: TextField;
  public cSSStyles: TextField;
  public dynamicPlaceholderId: TextField;
  public enabledPlaceholders: TextField;
  public fieldNames: LookupField;
  public gridParameters: TextField;
  public renderingIdentifier: TextField;
  public splitterSize: NumberField;
  public styles: TextField;
  public styles1: TextField;
  public styles2: TextField;
  public styles3: TextField;
  public styles4: TextField;
  public styles5: TextField;
  public styles6: TextField;
  public styles7: TextField;
  public styles8: TextField;
}

/*
    Template Name: BranchesFolder
    Template ID: 2F5F83432A1846A492A10F7AB0452741
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Folders/Branches Folder
*/
export class BranchesFolderItem extends ContentItem implements I_BranchesFolderItem {}

/*
    Template Name: C__BaseRenderingParameters
    Template ID: 4247AAD4EBDE4994998FE067A51B1FE4
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Presentation/Rendering Parameters/BaseRenderingParameters
*/
export class BaseRenderingParametersItem
  extends ContentItem
  implements I_BaseRenderingParametersItem
{
  public additionalParameters: NameValueListField;
  public cSSStyles: TextField;
  public fieldNames: LookupField;
  public gridParameters: TextField;
  public styles: TextField;
}

/*
    Template Name: C__BasePage
    Template ID: 4715171126CA434E8132D3E0B7D26683
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Multisite/Base Page
*/
export class BasePageItem extends ContentItem implements I_BasePageItem {}

/*
    Template Name: AvailableRenderingsFolder_26ec1d1811b24dd98326f6115f4fd7eb
    Template ID: 26EC1D1811B24DD98326F6115F4FD7EB
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Presentation/Available Renderings/Available Renderings Folder
*/
export class AvailableRenderingsFolderItem
  extends ContentItem
  implements I_AvailableRenderingsFolderItem
{
  public groupRenderingsInSections: CheckboxField;
  public isShared: CheckboxField;
}

/*
    Template Name: AddItem_1e1b739ec3784909941d171aca7362e5
    Template ID: 1E1B739EC3784909941D171ACA7362E5
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Tenant/AddItem
*/
export class AddItemItem extends ContentItem implements I_AddItemItem {
  public location: MultilistField;
}

/*
    Template Name: AddItem_3aea335cd06d45b1841acbc8d2d1ce40
    Template ID: 3AEA335CD06D45B1841ACBC8D2D1CE40
    Path: /sitecore/templates/Foundation/JSS Experience Accelerator/Scaffolding/Actions/Site/AddItem
*/
export class AddItem1Item extends ContentItem implements I_AddItem1Item {
  public location: MultilistField;
}

export function RegisterTemplates() {}

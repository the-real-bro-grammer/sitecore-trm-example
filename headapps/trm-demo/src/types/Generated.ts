import { ImageField, LinkField, RichTextField, TextField } from '@sitecore-jss/sitecore-jss-nextjs';

import {
  CheckboxField,
  ContentItem,
  IContentItem,
  LookupField,
  MultilistField,
  NameValueListField,
  NumberField,
  RawItem,
  TemplateFactory,
} from 'sitecore-trm';

type TemplateType = new (item: RawItem) => IContentItem;

export interface I_SupportedLanguagesItem extends IContentItem {}

export interface I_SolutionTemplateNameItem extends IContentItem {}

export interface I_SolutionTemplateDescriptionItem extends IContentItem {}

export interface I_SolutionTemplateContentItem extends IContentItem {
  content: TextField;
}

export interface I_SiteTemplateItem extends IContentItem {
  siteTemplate: LookupField;
}

export interface I_NameItem extends IContentItem {}

export interface I_DescriptionItem extends IContentItem {}

export interface I_BaseJSSTenantItem extends IContentItem {
  branchesFolder: LookupField;
  placeholderSettingsFolder: LookupField;
  renderingsFolder: LookupField;
  settingsFolder: LookupField;
}

export interface I_VariantDefinitionItem extends IContentItem {
  allowedInTemplates: MultilistField;
  linkField: TextField;
}

export interface I_TitleItem extends IContentItem {
  additionalParameters: NameValueListField;
  cSSStyles: TextField;
  dynamicPlaceholderId: TextField;
  fieldNames: LookupField;
  gridParameters: TextField;
  renderingIdentifier: TextField;
  styles: TextField;
}

export interface I_TextFolderItem extends IContentItem {}

export interface I_TextItem extends IContentItem {
  text: RichTextField;
}

export interface I_StylesItem extends IContentItem {
  allowEmpty: CheckboxField;
  type: TextField;
}

export interface I_StyleItem extends IContentItem {
  allowedRenderings: MultilistField;
  icon: TextField;
  isVerifiedStyle: CheckboxField;
  value: TextField;
}

export interface I_SolutionTemplateItem extends IContentItem {
  content: TextField;
  enabled: CheckboxField;
  siteModules: MultilistField;
  tenantModules: MultilistField;
}

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

export interface I_SharedSitesSettingsItem extends IContentItem {
  delegatedAreas: MultilistField;
}

export interface I_SettingsFolderItem extends IContentItem {}

export interface I_SXAJSSLayoutItem extends IContentItem {
  area: TextField;
  model: TextField;
}

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

export interface I_RichTextItem extends IContentItem {
  additionalParameters: NameValueListField;
  cSSStyles: TextField;
  dynamicPlaceholderId: TextField;
  fieldNames: LookupField;
  gridParameters: TextField;
  renderingIdentifier: TextField;
  styles: TextField;
}

export interface I_RenderingHostItem extends IContentItem {
  appName: TextField;
  serverSideRenderingEngineConfigUrl: TextField;
}

export interface I_RenderingFolderItem extends IContentItem {}

export interface I_PromoFolderItem extends IContentItem {}

export interface I_PromoItem extends IContentItem {
  additionalParameters: NameValueListField;
  cSSStyles: TextField;
  dynamicPlaceholderId: TextField;
  fieldNames: LookupField;
  gridParameters: TextField;
  renderingIdentifier: TextField;
  styles: TextField;
}

export interface I_PromoItem extends IContentItem {
  promoIcon: ImageField;
  promoIcon2: ImageField;
  promoLink: LinkField;
  promoText: RichTextField;
  promoText2: RichTextField;
  promoText3: RichTextField;
}

export interface I_PresentationItem extends IContentItem {}

export interface I_PreDeleteValidationStepItem extends IContentItem {
  validationScript: MultilistField;
}

export interface I_PreDeleteValidationStepItem extends IContentItem {
  validationScript: MultilistField;
}

export interface I_PreDeleteStepItem extends IContentItem {
  script: MultilistField;
}

export interface I_PreDeleteStepItem extends IContentItem {
  script: MultilistField;
}

export interface I_PostSetupStepItem extends IContentItem {
  script: MultilistField;
}

export interface I_PostSetupStepItem extends IContentItem {
  script: MultilistField;
}

export interface I_PostDeleteStepItem extends IContentItem {
  script: MultilistField;
}

export interface I_PostDeleteStepItem extends IContentItem {
  script: MultilistField;
}

export interface I_PlaceholderSettingsFolderItem extends IContentItem {}

export interface I_PlaceholderSettingsFolderItem extends IContentItem {
  templateForCreation: LookupField;
}

export interface I_PlaceholderItem extends IContentItem {
  allowedControls: MultilistField;
  placeholderKey: TextField;
}

export interface I_PartialDesignsItem extends IContentItem {}

export interface I_PartialDesignsItem extends IContentItem {}

export interface I_PartialDesignFolderItem extends IContentItem {}

export interface I_PartialDesignFolderItem extends IContentItem {}

export interface I_PartialDesignItem extends IContentItem {
  basePartialDesign: LookupField;
  signature: TextField;
}

export interface I_PageDesignsItem extends IContentItem {
  designRules: TextField;
  templatesMapping: TextField;
}

export interface I_PageDesignsItem extends IContentItem {
  designRules: TextField;
  templatesMapping: TextField;
}

export interface I_PageDesignFolderItem extends IContentItem {}

export interface I_PageDesignFolderItem extends IContentItem {}

export interface I_PageDesignItem extends IContentItem {
  partialDesigns: MultilistField;
}

export interface I_PageContentItem extends IContentItem {
  additionalParameters: NameValueListField;
  cSSStyles: TextField;
  dynamicPlaceholderId: TextField;
  fieldNames: LookupField;
  gridParameters: TextField;
  renderingIdentifier: TextField;
  styles: TextField;
}

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

export interface I_LinkListFolderItem extends IContentItem {}

export interface I_LinkListItem extends IContentItem {
  additionalParameters: NameValueListField;
  cSSStyles: TextField;
  fieldNames: LookupField;
  gridParameters: TextField;
  renderingIdentifier: TextField;
  styles: TextField;
}

export interface I_LinkListItem extends IContentItem {
  title: TextField;
}

export interface I_LinkItem extends IContentItem {
  link: LinkField;
}

export interface I_JSSTenantFolderItem extends IContentItem {}

export interface I_JSSSiteGroupingItem extends IContentItem {}

export interface I_JSSSiteFolderItem extends IContentItem {}

export interface I_JSSSettingsItem extends IContentItem {}

export interface I_JSSSettingsItem extends IContentItem {}

export interface I_JSSDataItem extends IContentItem {}

export interface I_InputValidationStepItem extends IContentItem {
  validationScript: MultilistField;
}

export interface I_InputValidationStepItem extends IContentItem {
  validationScript: MultilistField;
}

export interface I_ImageFolderItem extends IContentItem {}

export interface I_ImageItem extends IContentItem {
  additionalParameters: NameValueListField;
  cSSStyles: TextField;
  dynamicPlaceholderId: TextField;
  fieldNames: LookupField;
  gridParameters: TextField;
  renderingIdentifier: TextField;
  styles: TextField;
}

export interface I_ImageItem extends IContentItem {
  image: ImageField;
  imageCaption: TextField;
  targetUrl: LinkField;
}

export interface I_HeadlessVariantsGroupingItem extends IContentItem {}

export interface I_HeadlessVariantsItem extends IContentItem {}

export interface I_HeadlessTenantSetupRootItem extends IContentItem {
  enabled: CheckboxField;
  includeByDefault: CheckboxField;
  isSystemModule: CheckboxField;
}

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

export interface I_HeadlessTenantItem extends IContentItem {
  branchesFolder: LookupField;
  mediaLibrary: LookupField;
  placeholderSettingsFolder: LookupField;
  renderingsFolder: LookupField;
  settingsFolder: LookupField;
  sharedMediaLibrary: LookupField;
  sharedSites: MultilistField;
}

export interface I_HeadlessSolutionTemplateFolderItem extends IContentItem {}

export interface I_HeadlessSiteSetupRootItem extends IContentItem {
  dependencies: MultilistField;
  enabled: CheckboxField;
  includeByDefault: CheckboxField;
  includeIfInstalled: MultilistField;
  isSystemModule: CheckboxField;
}

export interface I_HeadlessSiteItem extends IContentItem {
  modules: MultilistField;
  roleDomain: TextField;
  sitemapMediaItems: MultilistField;
  siteMediaLibrary: LookupField;
  siteTemplate: LookupField;
}

export interface I_HeadlessSiteItem extends IContentItem {
  siteMediaLibrary: LookupField;
  siteTemplate: LookupField;
}

export interface I_FormRenderingParametersItem extends IContentItem {
  additionalParameters: NameValueListField;
  cSSStyles: TextField;
  fieldNames: LookupField;
  formId: TextField;
  gridParameters: TextField;
  renderingIdentifier: TextField;
  styles: TextField;
}

export interface I_ExecuteScriptItem extends IContentItem {
  script: MultilistField;
  validationScript: MultilistField;
}

export interface I_ExecuteScriptItem extends IContentItem {
  script: MultilistField;
  validationScript: MultilistField;
}

export interface I_EditTenantTemplateItem extends IContentItem {
  arguments: MultilistField;
  editType: TextField;
}

export interface I_EditSiteItemItem extends IContentItem {
  arguments: MultilistField;
  editType: TextField;
}

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

export interface I_BranchesFolderItem extends IContentItem {}

export interface I_BaseRenderingParametersItem extends IContentItem {
  additionalParameters: NameValueListField;
  cSSStyles: TextField;
  fieldNames: LookupField;
  gridParameters: TextField;
  styles: TextField;
}

export interface I_BasePageItem extends IContentItem {}

export interface I_AvailableRenderingsFolderItem extends IContentItem {
  groupRenderingsInSections: CheckboxField;
  isShared: CheckboxField;
}

export interface I_AddItemItem extends IContentItem {
  location: MultilistField;
}

export interface I_AddItemItem extends IContentItem {
  location: MultilistField;
}

export class SupportedLanguagesItem extends ContentItem implements I_SupportedLanguagesItem {}

export class SolutionTemplateNameItem extends ContentItem implements I_SolutionTemplateNameItem {}

export class SolutionTemplateDescriptionItem
  extends ContentItem
  implements I_SolutionTemplateDescriptionItem {}

export class SolutionTemplateContentItem
  extends ContentItem
  implements I_SolutionTemplateContentItem
{
  public content: TextField;
}

export class SiteTemplateItem extends ContentItem implements I_SiteTemplateItem {
  public siteTemplate: LookupField;
}

export class NameItem extends ContentItem implements I_NameItem {}

export class DescriptionItem extends ContentItem implements I_DescriptionItem {}

export class BaseJSSTenantItem extends ContentItem implements I_BaseJSSTenantItem {
  public branchesFolder: LookupField;
  public placeholderSettingsFolder: LookupField;
  public renderingsFolder: LookupField;
  public settingsFolder: LookupField;
}

export class VariantDefinitionItem extends ContentItem implements I_VariantDefinitionItem {
  public allowedInTemplates: MultilistField;
  public linkField: TextField;
}

export class TitleItem extends ContentItem implements I_TitleItem {
  public additionalParameters: NameValueListField;
  public cSSStyles: TextField;
  public dynamicPlaceholderId: TextField;
  public fieldNames: LookupField;
  public gridParameters: TextField;
  public renderingIdentifier: TextField;
  public styles: TextField;
}

export class TextFolderItem extends ContentItem implements I_TextFolderItem {}

export class TextItem extends ContentItem implements I_TextItem {
  public text: RichTextField;
}

export class StylesItem extends ContentItem implements I_StylesItem {
  public allowEmpty: CheckboxField;
  public type: TextField;
}

export class StyleItem extends ContentItem implements I_StyleItem {
  public allowedRenderings: MultilistField;
  public icon: TextField;
  public isVerifiedStyle: CheckboxField;
  public value: TextField;
}

export class SolutionTemplateItem extends ContentItem implements I_SolutionTemplateItem {
  public content: TextField;
  public enabled: CheckboxField;
  public siteModules: MultilistField;
  public tenantModules: MultilistField;
}

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

export class SharedSitesSettingsItem extends ContentItem implements I_SharedSitesSettingsItem {
  public delegatedAreas: MultilistField;
}

export class SettingsFolderItem extends ContentItem implements I_SettingsFolderItem {}

export class SXAJSSLayoutItem extends ContentItem implements I_SXAJSSLayoutItem {
  public area: TextField;
  public model: TextField;
}

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

export class RichTextItem extends ContentItem implements I_RichTextItem {
  public additionalParameters: NameValueListField;
  public cSSStyles: TextField;
  public dynamicPlaceholderId: TextField;
  public fieldNames: LookupField;
  public gridParameters: TextField;
  public renderingIdentifier: TextField;
  public styles: TextField;
}

export class RenderingHostItem extends ContentItem implements I_RenderingHostItem {
  public appName: TextField;
  public serverSideRenderingEngineConfigUrl: TextField;
}

export class RenderingFolderItem extends ContentItem implements I_RenderingFolderItem {}

export class PromoFolderItem extends ContentItem implements I_PromoFolderItem {}

export class PromoItem extends ContentItem implements I_PromoItem {
  public additionalParameters: NameValueListField;
  public cSSStyles: TextField;
  public dynamicPlaceholderId: TextField;
  public fieldNames: LookupField;
  public gridParameters: TextField;
  public renderingIdentifier: TextField;
  public styles: TextField;
}

export class PromoItem extends ContentItem implements I_PromoItem {
  public promoIcon: ImageField;
  public promoIcon2: ImageField;
  public promoLink: LinkField;
  public promoText: RichTextField;
  public promoText2: RichTextField;
  public promoText3: RichTextField;
}

export class PresentationItem extends ContentItem implements I_PresentationItem {}

export class PreDeleteValidationStepItem
  extends ContentItem
  implements I_PreDeleteValidationStepItem
{
  public validationScript: MultilistField;
}

export class PreDeleteValidationStepItem
  extends ContentItem
  implements I_PreDeleteValidationStepItem
{
  public validationScript: MultilistField;
}

export class PreDeleteStepItem extends ContentItem implements I_PreDeleteStepItem {
  public script: MultilistField;
}

export class PreDeleteStepItem extends ContentItem implements I_PreDeleteStepItem {
  public script: MultilistField;
}

export class PostSetupStepItem extends ContentItem implements I_PostSetupStepItem {
  public script: MultilistField;
}

export class PostSetupStepItem extends ContentItem implements I_PostSetupStepItem {
  public script: MultilistField;
}

export class PostDeleteStepItem extends ContentItem implements I_PostDeleteStepItem {
  public script: MultilistField;
}

export class PostDeleteStepItem extends ContentItem implements I_PostDeleteStepItem {
  public script: MultilistField;
}

export class PlaceholderSettingsFolderItem
  extends ContentItem
  implements I_PlaceholderSettingsFolderItem {}

export class PlaceholderSettingsFolderItem
  extends ContentItem
  implements I_PlaceholderSettingsFolderItem
{
  public templateForCreation: LookupField;
}

export class PlaceholderItem extends ContentItem implements I_PlaceholderItem {
  public allowedControls: MultilistField;
  public placeholderKey: TextField;
}

export class PartialDesignsItem extends ContentItem implements I_PartialDesignsItem {}

export class PartialDesignsItem extends ContentItem implements I_PartialDesignsItem {}

export class PartialDesignFolderItem extends ContentItem implements I_PartialDesignFolderItem {}

export class PartialDesignFolderItem extends ContentItem implements I_PartialDesignFolderItem {}

export class PartialDesignItem extends ContentItem implements I_PartialDesignItem {
  public basePartialDesign: LookupField;
  public signature: TextField;
}

export class PageDesignsItem extends ContentItem implements I_PageDesignsItem {
  public designRules: TextField;
  public templatesMapping: TextField;
}

export class PageDesignsItem extends ContentItem implements I_PageDesignsItem {
  public designRules: TextField;
  public templatesMapping: TextField;
}

export class PageDesignFolderItem extends ContentItem implements I_PageDesignFolderItem {}

export class PageDesignFolderItem extends ContentItem implements I_PageDesignFolderItem {}

export class PageDesignItem extends ContentItem implements I_PageDesignItem {
  public partialDesigns: MultilistField;
}

export class PageContentItem extends ContentItem implements I_PageContentItem {
  public additionalParameters: NameValueListField;
  public cSSStyles: TextField;
  public dynamicPlaceholderId: TextField;
  public fieldNames: LookupField;
  public gridParameters: TextField;
  public renderingIdentifier: TextField;
  public styles: TextField;
}

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

export class LinkListFolderItem extends ContentItem implements I_LinkListFolderItem {}

export class LinkListItem extends ContentItem implements I_LinkListItem {
  public additionalParameters: NameValueListField;
  public cSSStyles: TextField;
  public fieldNames: LookupField;
  public gridParameters: TextField;
  public renderingIdentifier: TextField;
  public styles: TextField;
}

export class LinkListItem extends ContentItem implements I_LinkListItem {
  public title: TextField;
}

export class LinkItem extends ContentItem implements I_LinkItem {
  public link: LinkField;
}

export class JSSTenantFolderItem extends ContentItem implements I_JSSTenantFolderItem {}

export class JSSSiteGroupingItem extends ContentItem implements I_JSSSiteGroupingItem {}

export class JSSSiteFolderItem extends ContentItem implements I_JSSSiteFolderItem {}

export class JSSSettingsItem extends ContentItem implements I_JSSSettingsItem {}

export class JSSSettingsItem extends ContentItem implements I_JSSSettingsItem {}

export class JSSDataItem extends ContentItem implements I_JSSDataItem {}

export class InputValidationStepItem extends ContentItem implements I_InputValidationStepItem {
  public validationScript: MultilistField;
}

export class InputValidationStepItem extends ContentItem implements I_InputValidationStepItem {
  public validationScript: MultilistField;
}

export class ImageFolderItem extends ContentItem implements I_ImageFolderItem {}

export class ImageItem extends ContentItem implements I_ImageItem {
  public additionalParameters: NameValueListField;
  public cSSStyles: TextField;
  public dynamicPlaceholderId: TextField;
  public fieldNames: LookupField;
  public gridParameters: TextField;
  public renderingIdentifier: TextField;
  public styles: TextField;
}

export class ImageItem extends ContentItem implements I_ImageItem {
  public image: ImageField;
  public imageCaption: TextField;
  public targetUrl: LinkField;
}

export class HeadlessVariantsGroupingItem
  extends ContentItem
  implements I_HeadlessVariantsGroupingItem {}

export class HeadlessVariantsItem extends ContentItem implements I_HeadlessVariantsItem {}

export class HeadlessTenantSetupRootItem
  extends ContentItem
  implements I_HeadlessTenantSetupRootItem
{
  public enabled: CheckboxField;
  public includeByDefault: CheckboxField;
  public isSystemModule: CheckboxField;
}

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

export class HeadlessTenantItem extends ContentItem implements I_HeadlessTenantItem {
  public branchesFolder: LookupField;
  public mediaLibrary: LookupField;
  public placeholderSettingsFolder: LookupField;
  public renderingsFolder: LookupField;
  public settingsFolder: LookupField;
  public sharedMediaLibrary: LookupField;
  public sharedSites: MultilistField;
}

export class HeadlessSolutionTemplateFolderItem
  extends ContentItem
  implements I_HeadlessSolutionTemplateFolderItem {}

export class HeadlessSiteSetupRootItem extends ContentItem implements I_HeadlessSiteSetupRootItem {
  public dependencies: MultilistField;
  public enabled: CheckboxField;
  public includeByDefault: CheckboxField;
  public includeIfInstalled: MultilistField;
  public isSystemModule: CheckboxField;
}

export class HeadlessSiteItem extends ContentItem implements I_HeadlessSiteItem {
  public modules: MultilistField;
  public roleDomain: TextField;
  public sitemapMediaItems: MultilistField;
  public siteMediaLibrary: LookupField;
  public siteTemplate: LookupField;
}

export class HeadlessSiteItem extends ContentItem implements I_HeadlessSiteItem {
  public siteMediaLibrary: LookupField;
  public siteTemplate: LookupField;
}

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

export class ExecuteScriptItem extends ContentItem implements I_ExecuteScriptItem {
  public script: MultilistField;
  public validationScript: MultilistField;
}

export class ExecuteScriptItem extends ContentItem implements I_ExecuteScriptItem {
  public script: MultilistField;
  public validationScript: MultilistField;
}

export class EditTenantTemplateItem extends ContentItem implements I_EditTenantTemplateItem {
  public arguments: MultilistField;
  public editType: TextField;
}

export class EditSiteItemItem extends ContentItem implements I_EditSiteItemItem {
  public arguments: MultilistField;
  public editType: TextField;
}

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

export class BranchesFolderItem extends ContentItem implements I_BranchesFolderItem {}

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

export class BasePageItem extends ContentItem implements I_BasePageItem {}

export class AvailableRenderingsFolderItem
  extends ContentItem
  implements I_AvailableRenderingsFolderItem
{
  public groupRenderingsInSections: CheckboxField;
  public isShared: CheckboxField;
}

export class AddItemItem extends ContentItem implements I_AddItemItem {
  public location: MultilistField;
}

export class AddItemItem extends ContentItem implements I_AddItemItem {
  public location: MultilistField;
}

export function RegisterTemplates() {
  TemplateFactory.RegisterTemplate('615A59CCA2754E578B48A57F0A703F84', SupportedLanguagesItem);

  TemplateFactory.RegisterTemplate('EE5BEC5A609F4C64896018D6CAE7F890', SolutionTemplateNameItem);

  TemplateFactory.RegisterTemplate(
    '77B1399F5F304643A05459BBB1C7C62C',
    SolutionTemplateDescriptionItem
  );

  TemplateFactory.RegisterTemplate('7594748576244588BDAC812B865141DD', SolutionTemplateContentItem);

  TemplateFactory.RegisterTemplate('B99C3F5064784CFE98FD82398044DC84', SiteTemplateItem);

  TemplateFactory.RegisterTemplate('0345FD2F95094DC7B0F56C73A9B6CD8D', NameItem);

  TemplateFactory.RegisterTemplate('79CBA7D0EE474FC6911C9BCCAFCAAC2E', DescriptionItem);

  TemplateFactory.RegisterTemplate('053E9155399342F391825854DC5355B3', BaseJSSTenantItem);

  TemplateFactory.RegisterTemplate('4D50CDAEC2D94DE8B0808F992BFB1B55', VariantDefinitionItem);

  TemplateFactory.RegisterTemplate('A82E893105754175917DE904EF7E6DBE', TitleItem);

  TemplateFactory.RegisterTemplate('B762D56787F5493CBB480C455D834457', TextFolderItem);

  TemplateFactory.RegisterTemplate('0A7AA3735ED14E9B967822D3C5FAF6DF', TextItem);

  TemplateFactory.RegisterTemplate('C6DC739315BB4CD7B798AB63E77EBAC4', StylesItem);

  TemplateFactory.RegisterTemplate('6B8AABEFD65046E097D0C0B04F7F016B', StyleItem);

  TemplateFactory.RegisterTemplate('1B2DFD3BF2F24F40A75CF6C2490919C4', SolutionTemplateItem);

  TemplateFactory.RegisterTemplate('C71D856635C849B7A84D9D176E9CBD05', SitemapSettingsItem);

  TemplateFactory.RegisterTemplate('E46F3AF239FA4866A1577017C4B2A40C', SiteItem);

  TemplateFactory.RegisterTemplate('C14BF746030F4E598594395F6D299E61', SharedSitesSettingsItem);

  TemplateFactory.RegisterTemplate('B4D86F9BE9174D68978E741361332174', SettingsFolderItem);

  TemplateFactory.RegisterTemplate('E4E1150804A44B0BA2635201F811C9CD', SXAJSSLayoutItem);

  TemplateFactory.RegisterTemplate('DB88EFA8E0154B96BA0E348D8B510563', RowSplitterItem);

  TemplateFactory.RegisterTemplate('0F3B73366112418C8BBAB0526F3887CE', RichTextItem);

  TemplateFactory.RegisterTemplate('BC71D4423E4F46BA887C746E54F9BB83', RenderingHostItem);

  TemplateFactory.RegisterTemplate('840D4A46550349ECBF9DBD090946C63D', RenderingFolderItem);

  TemplateFactory.RegisterTemplate('8FE7F8DCCB5D42C299F876608C243F10', PromoFolderItem);

  TemplateFactory.RegisterTemplate('881869CA7F5845EA8B34AD1BFD3551A8', PromoItem);

  TemplateFactory.RegisterTemplate('DFED4457D760457ABEC1C0DCCDC44381', PromoItem);

  TemplateFactory.RegisterTemplate('0A70FA7389234A6EABF34134F25F3221', PresentationItem);

  TemplateFactory.RegisterTemplate('EDF1FA4206C44703AB1AF23495BC6D8F', PreDeleteValidationStepItem);

  TemplateFactory.RegisterTemplate('408FD8AB1667440BA6051370DDF0A51F', PreDeleteValidationStepItem);

  TemplateFactory.RegisterTemplate('ADB136512EB9494FADA00DFDA0B2EBBF', PreDeleteStepItem);

  TemplateFactory.RegisterTemplate('52510F549EC5464CB075EF44B5C2F96B', PreDeleteStepItem);

  TemplateFactory.RegisterTemplate('0C6028932BE94020912D56AF21DEFF73', PostSetupStepItem);

  TemplateFactory.RegisterTemplate('8FF2FEBFF6D2461D9ED38B0CB5D9D86F', PostSetupStepItem);

  TemplateFactory.RegisterTemplate('78D6EC9B66E34763987003CF314EE37A', PostDeleteStepItem);

  TemplateFactory.RegisterTemplate('B20857895385413883F096F3767CB156', PostDeleteStepItem);

  TemplateFactory.RegisterTemplate(
    '3D281BF8533646869DD6AB4AB5B3FD5D',
    PlaceholderSettingsFolderItem
  );

  TemplateFactory.RegisterTemplate(
    '52288E3978304694B62D32A54C6EF7BA',
    PlaceholderSettingsFolderItem
  );

  TemplateFactory.RegisterTemplate('D2A6884C04D54089A64ED27CA9D68D4C', PlaceholderItem);

  TemplateFactory.RegisterTemplate('1D39AECA499C452CA7AE26E55BB4A0D5', PartialDesignsItem);

  TemplateFactory.RegisterTemplate('79C9FA015F6A48B2B45905BBAA826A9D', PartialDesignsItem);

  TemplateFactory.RegisterTemplate('2875566679E2460E8DB9DEDAB590C973', PartialDesignFolderItem);

  TemplateFactory.RegisterTemplate('25F01F50553444F9B1BABCBB60B2D13D', PartialDesignFolderItem);

  TemplateFactory.RegisterTemplate('FD2059FD60434DFE8C04E2437CE87634', PartialDesignItem);

  TemplateFactory.RegisterTemplate('B7474C7EEAEE45C68652B94530A58187', PageDesignsItem);

  TemplateFactory.RegisterTemplate('DAAF41FD96DB4892BE99F62F16D036C4', PageDesignsItem);

  TemplateFactory.RegisterTemplate('272EB80FC60C4D3D99693AA13D6BB6AC', PageDesignFolderItem);

  TemplateFactory.RegisterTemplate('023F5D48979D4381BC5E149E36ABD3BD', PageDesignFolderItem);

  TemplateFactory.RegisterTemplate('1105B8F81E00426BBF1FC840742D827B', PageDesignItem);

  TemplateFactory.RegisterTemplate('EF87E73BC7FF49A2AC599B0BE83755C3', PageContentItem);

  TemplateFactory.RegisterTemplate('70FA878580AA46ACA3D0929BDBC8F46F', PageItem);

  TemplateFactory.RegisterTemplate('9CE34BF95C934DFF841D8F649C2BD6C8', NavigationItem);

  TemplateFactory.RegisterTemplate('C237D144647A4AFEAA7B1570F3E3F139', LinkListFolderItem);

  TemplateFactory.RegisterTemplate('33C9207E3B0446068EF54CA99A97C776', LinkListItem);

  TemplateFactory.RegisterTemplate('60C9AC624227443E898092C97E483832', LinkListItem);

  TemplateFactory.RegisterTemplate('6F108E3C5D5742F8A910C22920269B0A', LinkItem);

  TemplateFactory.RegisterTemplate('CA170F6F5EC24E0CB4BBC77B7931B168', JSSTenantFolderItem);

  TemplateFactory.RegisterTemplate('8357F9589AAA46DB889836448A96356F', JSSSiteGroupingItem);

  TemplateFactory.RegisterTemplate('CE91FBD64D8942C9B5BC2A670439E1FF', JSSSiteFolderItem);

  TemplateFactory.RegisterTemplate('2A183AFF1FEA47C69FA7EB598DB3AE67', JSSSettingsItem);

  TemplateFactory.RegisterTemplate('EC848505D30C4BDCA0AA7CC9D320085E', JSSSettingsItem);

  TemplateFactory.RegisterTemplate('A29D272E9D48453C9E9DB47585FA7F20', JSSDataItem);

  TemplateFactory.RegisterTemplate('D028FEF2BABF4AD1BBE74D62A977992F', InputValidationStepItem);

  TemplateFactory.RegisterTemplate('9EDED2F7F84748938A0BF69E7FCF3593', InputValidationStepItem);

  TemplateFactory.RegisterTemplate('F7A4527687F14EA5BF25E3C7CB7AA993', ImageFolderItem);

  TemplateFactory.RegisterTemplate('15185B0E641844499F934FF03B7EE032', ImageItem);

  TemplateFactory.RegisterTemplate('D885DF8CB2D64007B34B2BBAFB527304', ImageItem);

  TemplateFactory.RegisterTemplate(
    'DA26C63696E145E488D63FCEC70D5699',
    HeadlessVariantsGroupingItem
  );

  TemplateFactory.RegisterTemplate('49C111D068674798A7241F103166E6E9', HeadlessVariantsItem);

  TemplateFactory.RegisterTemplate('F036B5E037FB45379D36EF84E5BD41B7', HeadlessTenantSetupRootItem);

  TemplateFactory.RegisterTemplate('D3743F3CA74C43FAB34CC36645AC9340', HeadlessTenantItem);

  TemplateFactory.RegisterTemplate('B91811F1FA8B47F8B131BD2C6D5EC805', HeadlessTenantItem);

  TemplateFactory.RegisterTemplate(
    'A5705AF725DF4B3AB2202EC026AB2099',
    HeadlessSolutionTemplateFolderItem
  );

  TemplateFactory.RegisterTemplate('BED31D6FD96845A9B54E12D7F977D861', HeadlessSiteSetupRootItem);

  TemplateFactory.RegisterTemplate('7B66B793FA2746F7A4CB868115CD5B7C', HeadlessSiteItem);

  TemplateFactory.RegisterTemplate('9ED6640464C9412290E1869CB3CEA566', HeadlessSiteItem);

  TemplateFactory.RegisterTemplate('0A188F5D4B5D48AB83E1949A3C745477', FormRenderingParametersItem);

  TemplateFactory.RegisterTemplate('3A385B25DF9B47AC9F6B39C8534E81F1', ExecuteScriptItem);

  TemplateFactory.RegisterTemplate('BC9BB68436DF4285888BD8B4D87B10DE', ExecuteScriptItem);

  TemplateFactory.RegisterTemplate('88752F779109424CB1D8AF91E6369A2E', EditTenantTemplateItem);

  TemplateFactory.RegisterTemplate('F040DB0387FE4E10AE4053C63175E31B', EditSiteItemItem);

  TemplateFactory.RegisterTemplate('45130BDBBAE34EDCAEA87B68B9D94C7F', ContainerItem);

  TemplateFactory.RegisterTemplate('181740EAA7AE4799A649A75917570E38', ColumnSplitterItem);

  TemplateFactory.RegisterTemplate('2F5F83432A1846A492A10F7AB0452741', BranchesFolderItem);

  TemplateFactory.RegisterTemplate('4247AAD4EBDE4994998FE067A51B1FE4', BaseRenderingParametersItem);

  TemplateFactory.RegisterTemplate('4715171126CA434E8132D3E0B7D26683', BasePageItem);

  TemplateFactory.RegisterTemplate(
    '26EC1D1811B24DD98326F6115F4FD7EB',
    AvailableRenderingsFolderItem
  );

  TemplateFactory.RegisterTemplate('1E1B739EC3784909941D171ACA7362E5', AddItemItem);

  TemplateFactory.RegisterTemplate('3AEA335CD06D45B1841ACBC8D2D1CE40', AddItemItem);
}


import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/toolTypes/importer/toolTypesImporterSelectors';
import ToolTypesService from 'src/modules/toolTypes/toolTypesService';
import fields from 'src/modules/toolTypes/importer/toolTypesImporterFields';
import { i18n } from 'src/i18n';

const toolTypesImporterActions = importerActions(
  'TOOLTYPES_IMPORTER',
  selectors,
  ToolTypesService.import,
  fields,
  i18n('entities.toolTypes.importer.fileName'),
);

export default toolTypesImporterActions;
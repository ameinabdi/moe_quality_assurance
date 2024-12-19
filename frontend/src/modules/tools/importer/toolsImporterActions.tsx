import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/tools/importer/toolsImporterSelectors';
import ToolsService from 'src/modules/tools/toolsService';
import fields from 'src/modules/tools/importer/toolsImporterFields';
import { i18n } from 'src/i18n';

const toolsImporterActions = importerActions(
  'TOOLS_IMPORTER',
  selectors,
  ToolsService.import,
  fields,
  i18n('entities.tools.importer.fileName'),
);

export default toolsImporterActions;
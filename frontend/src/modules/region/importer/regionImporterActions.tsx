import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/region/importer/regionImporterSelectors';
import RegionService from 'src/modules/region/regionService';
import fields from 'src/modules/region/importer/regionImporterFields';
import { i18n } from 'src/i18n';

const regionImporterActions = importerActions(
  'REGION_IMPORTER',
  selectors,
  RegionService.import,
  fields,
  i18n('entities.region.importer.fileName'),
);

export default regionImporterActions;
import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/district/importer/districtImporterSelectors';
import DistrictService from 'src/modules/district/districtService';
import fields from 'src/modules/district/importer/districtImporterFields';
import { i18n } from 'src/i18n';

const districtImporterActions = importerActions(
  'DISTRICT_IMPORTER',
  selectors,
  DistrictService.import,
  fields,
  i18n('entities.district.importer.fileName'),
);

export default districtImporterActions;
import { createSelector } from 'reselect';

const selectRaw = (state) => state.governmentTeacherInformation.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const governmentTeacherInformationDestroySelectors = {
  selectLoading,
};

export default governmentTeacherInformationDestroySelectors;

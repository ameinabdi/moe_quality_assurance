import { createSelector } from 'reselect';

const selectRaw = (state) => state.teacherGPE.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const teacherGPEViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default teacherGPEViewSelectors;

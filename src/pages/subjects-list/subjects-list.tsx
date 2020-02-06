import React, { FC, Fragment, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Load } from 'shared/components';
import { SubjectsListLoaded } from 'pages/subjects-list/subjects-list-loaded';
import { SubjectsListLoading } from 'pages/subjects-list/subjects-list-loading';
import { useSubjectsPageMetaSelector } from 'state/pages/subjects-page/subjects-page.selectors';
import { SubjectsPageService } from 'state/pages/subjects-page/subjects-page.service';
import { AddSubjectFormModal } from 'pages/subjects-list/components/add-subject-form-modal';

export const SubjectsList: FC = () => {
  const dispatch = useDispatch();
  const subjectsPageMeta = useSubjectsPageMetaSelector();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadAction = useCallback(() => dispatch(SubjectsPageService.loadSubjects()), []);
  const cancelLoading = useCallback(() => console.log('TODO: loadingcancelation method: WIn win win!!1'), []);

  return (
    <Fragment>
      <Load
        isLoaded={subjectsPageMeta.lastFetchedAt && subjectsPageMeta.subjectsIds.length}
        // isLoadingErroed={subjects.error && subjects.data.length}
        loadAction={loadAction}
        cancelLoading={cancelLoading}
        loadingComponent={<SubjectsListLoading/>}
        loadedComponent={<SubjectsListLoaded/>}
        // FailureComponent={FailureComponent}
      />
      <AddSubjectFormModal/>
    </Fragment>
  );
};

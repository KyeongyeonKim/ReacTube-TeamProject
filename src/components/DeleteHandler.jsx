import React, { useState } from 'react';
import { StyledDeleteButton } from 'styles/DeleteHandlerStyles';
import DeleteModal from './DeleteModal';

function DeleteHandler() {
  const [deleteOpen, setDeleteOpen] = useState(false);

  const deleteForm = () => {
    setDeleteOpen(!deleteOpen);
  };

  return (
    <>
      {deleteOpen ? <DeleteModal deleteOpen={deleteOpen} setDeleteOpen={setDeleteOpen} /> : <></>}

      <StyledDeleteButton className="deleteButton" onClick={deleteForm}>
        삭제
      </StyledDeleteButton>
    </>
  );
}

export default DeleteHandler;

import { createPortal } from 'react-dom'

import {
  SActions,
  SButton,
  SDialog,
  SMessage,
  SOverlay,
  STitle,
} from './ConfirmDialog.styled'

const ConfirmDialog = ({ title, message, onConfirm, onCancel, disabled }) => {
  return createPortal(
    <SOverlay onClick={onCancel}>
      <SDialog onClick={(event) => event.stopPropagation()}>
        <STitle>{title}</STitle>
        {message && <SMessage>{message}</SMessage>}
        <SActions>
          <SButton onClick={onCancel} disabled={disabled}>
            Отмена
          </SButton>
          <SButton $danger onClick={onConfirm} disabled={disabled}>
            Удалить
          </SButton>
        </SActions>
      </SDialog>
    </SOverlay>,
    document.body
  )
}

export default ConfirmDialog

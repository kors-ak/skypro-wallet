import { createPortal } from 'react-dom'

import {
  SActions,
  SButton,
  SDialog,
  SMessage,
  SOverlay,
  STitle,
} from './ConfirmDialog.styled'

const ConfirmDialog = ({
  title,
  message,
  confirmLabel = 'Удалить',
  cancelLabel = 'Отмена',
  onConfirm,
  onCancel,
  disabled,
}) => {
  return createPortal(
    <SOverlay onClick={onCancel}>
      <SDialog onClick={(event) => event.stopPropagation()}>
        <STitle>{title}</STitle>
        {message && <SMessage>{message}</SMessage>}
        <SActions>
          <SButton onClick={onCancel} disabled={disabled}>
            {cancelLabel}
          </SButton>
          <SButton $danger onClick={onConfirm} disabled={disabled}>
            {confirmLabel}
          </SButton>
        </SActions>
      </SDialog>
    </SOverlay>,
    document.body
  )
}

export default ConfirmDialog

export interface ModalActionsType {
    variant?: 'confirm' | 'delete'
    align?: 'horizontal' | 'vertical'
    btnTextAction: string
    btnTextCancel: string
    cbAction: () => void
    cbCansel: () => void
}
import { ReactNode } from "react";
import { Alert } from "../../../main";

export const NatifApiUi = (message: string | ReactNode, isOpen: boolean) => ({
  error: (
    <Alert variant="error" isOpen={isOpen}>
      {message}
    </Alert>
  ),
  success: (
    <Alert variant="success" isOpen={isOpen}>
      {message}
    </Alert>
  ),
  warning: (
    <Alert variant="warning" isOpen={isOpen}>
      {message}
    </Alert>
  ),
  info: (
    <Alert variant="info" isOpen={isOpen}>
      {message}
    </Alert>
  ),
});

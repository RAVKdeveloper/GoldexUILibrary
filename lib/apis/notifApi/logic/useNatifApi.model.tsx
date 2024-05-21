import { ReactNode, useEffect, useState } from "react";

import { NatifApiUi } from "../ui/Notif.ui";

import type { NatifApiProps } from "../assets/props.interface";

export const useNatifApi = (params?: { lifeTime: number }) => {
  const [context, setContext] = useState<ReactNode>();

  class NatifApi {
    public checkAndReturnUi(obj: NatifApiProps) {
      const ui = NatifApiUi(obj.message, true);
      const newContext = ui[obj.variant];
      setContext(newContext);
    }

    public success(message: string | ReactNode) {
      const props: NatifApiProps = {
        message,
        variant: "success",
      };

      this.checkAndReturnUi(props);
    }

    public error(message: string | ReactNode) {
      const props: NatifApiProps = {
        message,
        variant: "error",
      };

      this.checkAndReturnUi(props);
    }

    public warning(message: string | ReactNode) {
      const props: NatifApiProps = {
        message,
        variant: "warning",
      };

      this.checkAndReturnUi(props);
    }

    public info(message: string | ReactNode) {
      const props: NatifApiProps = {
        message,
        variant: "info",
      };

      this.checkAndReturnUi(props);
    }
  }

  useEffect(() => {
    if (context) {
      const timeout = setTimeout(
        () => setContext(undefined),
        params?.lifeTime ?? 5000
      );

      return () => clearTimeout(timeout);
    }
  }, [context, params?.lifeTime]);

  return { context, NatifApi: new NatifApi() };
};

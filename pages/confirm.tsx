import * as React from "react";
import GenericPage from "../components/generic-page";
import { useRouter } from "next/router";
import NotFoundPage from "./404";
import LoadingOverlay from "../components/loading-overlay";

export default function Confirm() {
  const router = useRouter();
  const [completedLoading, setCompletedLoading] = React.useState(false);
  const [token, setToken] = React.useState(undefined);

  React.useEffect(() => {
    const { token } = router.query;
    setToken(token);
    if (router.isReady) {
      setCompletedLoading(true);
    }
  }, [router.isReady]);

  const Body = () => {
    return token ? (
      <GenericPage
        title="Confirmation | v26 Design Co."
        headerText="Got it."
        body="Look out for an email from us soon."
      />
    ) : (
      <NotFoundPage />
    );
  };

  return !completedLoading ? <LoadingOverlay transparent /> : <Body />;
}

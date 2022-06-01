import React from "react";
import { GeneralContext } from "../../context/generalContext";
import StreamingAdd from "../streaming/streamingAdd/streamingAdd.component";
import StreamingDetailPage from "../streaming/streamingDetails/streamingDetails.page";

const DetailsPageModal: React.FC = () => {
  const { pageDetails } = React.useContext(GeneralContext);

  /* eslint-disable */
  switch (pageDetails?.action) {
    case "addStreaming":
      return <StreamingAdd route={pageDetails?.route} />;
    case "streamingDetail":
      return <StreamingDetailPage />;
    default:
      return <></>;
  }
  /* eslint-enable */
};

export default DetailsPageModal;

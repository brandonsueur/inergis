import React from "react";

const useDevice = () => {
  const [firstLoad, setFirstLoad] = React.useState(true);
  React.useEffect(() => {
    setFirstLoad(false);
  }, []);

  const ssr = firstLoad || typeof navigator === "undefined";

  const isAndroid = !ssr && /android/i.test(navigator.userAgent);
  const isIos = !ssr && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return {
    isAndroid,
    isIos,
    isDesktop: !isAndroid && !isIos,
  };
};

export default useDevice;

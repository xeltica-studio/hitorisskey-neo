import { Component } from "solid-js";

import { useTitle } from "../../hooks/use-title";
import { $t } from "../../text";

const SettingsDisplay: Component = () => {
  useTitle([{
    label: $t.settings,
    link: '/settings',
  }, $t.$settings.display]);

  return (
    <p>wip</p>
  );
};

export default SettingsDisplay;

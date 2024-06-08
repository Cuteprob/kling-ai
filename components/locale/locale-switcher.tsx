import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./locale-switcher-select";
import { locales } from "@/config";
import { Select } from "../ui/select";
import { SelectTrigger } from "@radix-ui/react-select";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <div className="ml-3 md:ml-6 flex items-center">
      <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
        {locales.map((cur) => (
          <option key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </option>
        ))}
      </LocaleSwitcherSelect>
    </div>
  );
}
